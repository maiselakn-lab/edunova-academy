import os
from datetime import datetime
from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from openai import OpenAI
from sqlalchemy.orm import Session
from passlib.context import CryptContext

# 1. Load environment variables FIRST
load_dotenv()

# 2. Import database setup and models
import models
from database import engine, SessionLocal

# 3. Create the database tables on startup
models.Base.metadata.create_all(bind=engine)

# 4. Initialize FastAPI app
app = FastAPI(title="THINK EduNova Backend")

# Allow Next.js to talk to Python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Password Hashing setup
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# --- PYDANTIC MODELS ---
class UserCreate(BaseModel):
    first_name: str
    last_name: str
    email: str
    password: str
    role: str
    school_id: int = None # Optional for platform admins

class UserLogin(BaseModel):
    email: str
    password: str

class SchoolCreate(BaseModel):
    name: str
    address: str

# --- API ROUTES ---

@app.get("/")
def read_root():
    return {"status": "Online", "message": "Welcome to the THINK EduNova API."}

# 1. Create a School
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

# 3. User Signup (Now requires a school_id for non-platform users)
@app.post("/api/signup")
def signup(user: UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(models.User).filter(models.User.email == user.email).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
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
    return {"message": "User created successfully", "user": new_user.email, "role": new_user.role}

# 4. User Login
@app.post("/api/login")
def login(user: UserLogin, db: Session = Depends(get_db)):
    db_user = db.query(models.User).filter(models.User.email == user.email).first()
    
    if not db_user or not pwd_context.verify(user.password, db_user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    
    return {
        "message": "Login successful", 
        "user": {
            "email": db_user.email,
            "first_name": db_user.first_name,
            "role": db_user.role,
            "school_id": db_user.school_id
        }
    }