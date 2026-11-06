import os
from datetime import datetime, timedelta
from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel
from dotenv import load_dotenv
from openai import OpenAI
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from jose import JWTError, jwt

# 1. Load environment variables FIRST
load_dotenv()

# 2. Import database setup and models
import models
from database import engine, SessionLocal

# 3. Create the database tables on startup
models.Base.metadata.create_all(bind=engine)

# 4. Initialize FastAPI app
app = FastAPI(title="THINK EduNova Backend")

# --- CORS CONFIGURATION (CRITICAL FOR VERCEL) ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://edunova-academy-rho.vercel.app",
        "https://edunova-academy-qkk5.onrender.com"
    ], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Groq Client
client = OpenAI(
    api_key=os.getenv("GROQ_API_KEY"),
    base_url="https://api.groq.com/openai/v1"
)

# --- SECURITY CONFIGURATION ---
SECRET_KEY = os.getenv("SECRET_KEY", "edunova-super-secret-jwt-key-2026")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24 * 7 # 7 days

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="api/login")

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# --- PYDANTIC MODELS ---

class ChatRequest(BaseModel):
    message: str
    language: str = "English"
    grade_level: str = "Grade 10"

class UserCreate(BaseModel):
    first_name: str
    last_name: str
    email: str
    password: str
    role: str
    school_id: int = None 

class UserLogin(BaseModel):
    email: str
    password: str

class SchoolCreate(BaseModel):
    name: str
    address: str

# --- HELPER FUNCTIONS ---

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    
    user = db.query(models.User).filter(models.User.email == email).first()
    if user is None:
        raise credentials_exception
    return user

# --- API ROUTES ---

@app.get("/")
def read_root():
    return {"status": "Online", "message": "Welcome to the THINK EduNova API."}

# 1. Create a School (Tenant)
@app.post("/api/schools")
def create_school(school: SchoolCreate, db: Session = Depends(get_db)):
    new_school = models.School(name=school.name, address=school.address)
    db.add(new_school)
    db.commit()
    db.refresh(new_school)
    return new_school

# 2. Get all Schools
@app.get("/api/schools")
def get_schools(db: Session = Depends(get_db)):
    return db.query(models.School).all()

# 3. User Signup (Linked to School)
@app.post("/api/signup")
def signup(user: UserCreate, db: Session = Depends(get_db)):
    # Check if user exists
    db_user = db.query(models.User).filter(models.User.email == user.email).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    # Check if school exists (if provided)
    if user.school_id is not None:
        school = db.query(models.School).filter(models.School.id == user.school_id).first()
        if not school:
            raise HTTPException(status_code=400, detail=f"School with ID {user.school_id} does not exist.")

    # Hash the password (bcrypt 4.0.1 fix is in requirements.txt)
    hashed_pw = pwd_context.hash(user.password)
    
    new_user = models.User(
        first_name=user.first_name,
        last_name=user.last_name,
        email=user.email,
        hashed_password=hashed_pw,
        role=user.role,
        school_id=user.school_id 
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    
    return {"message": "User created successfully", "user": new_user.email}

# 4. User Login (Returns JWT Token)
@app.post("/api/login")
def login(user: UserLogin, db: Session = Depends(get_db)):
    db_user = db.query(models.User).filter(models.User.email == user.email).first()
    
    if not db_user or not pwd_context.verify(user.password, db_user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    
    # Generate JWT Token
    access_token = create_access_token(data={"sub": db_user.email})
    
    return {
        "message": "Login successful",
        "access_token": access_token,
        "token_type": "bearer",
        "user": {
            "email": db_user.email,
            "first_name": db_user.first_name,
            "role": db_user.role,
            "school_id": db_user.school_id
        }
    }

# 5. Get Current User (Protected Route)
@app.get("/api/users/me")
def read_users_me(current_user: models.User = Depends(get_current_user)):
    return {
        "id": current_user.id,
        "email": current_user.email,
        "first_name": current_user.first_name,
        "role": current_user.role,
        "school_id": current_user.school_id
    }

# 6. AI Tutor
@app.post("/api/chat")
async def chat_with_tutor(request: ChatRequest):
    try:
        system_prompt = f"""
        You are EduNova, an expert AI tutor for South African students.
        You are currently helping a {request.grade_level} student.
        Explain concepts clearly, step-by-step.
        
        CRITICAL INSTRUCTION:
        The student has requested the teaching language to be: {request.language}.
        You must explain the academic concepts in {request.language}. 
        If the subject uses technical English terminology, provide the English term in brackets.
        """
        
        response = client.chat.completions.create(
            model="openai/gpt-oss-120b", 
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": request.message}
            ],
            temperature=0.7,
            max_tokens=500
        )
        
        return {"reply": response.choices[0].message.content}
    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail="Failed to generate AI response.")

# --- TEMPORARY DATABASE RESET ENDPOINT ---
@app.post("/api/admin/reset-db")
def reset_database():
    models.Base.metadata.drop_all(bind=engine)
    models.Base.metadata.create_all(bind=engine)
    return {"message": "Database reset successfully. All tables recreated."}