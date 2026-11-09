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

# --- CORS CONFIGURATION ---
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
    role: str

class SchoolCreate(BaseModel):
    name: str
    address: str

class PostCreate(BaseModel):
    title: str
    content: str
    category: str
    post_type: str 

class ReportCreate(BaseModel):
    student_name: str
    subject: str
    topic_covered: str
    student_performance: str
    homework_assigned: str

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
    db_user = db.query(models.User).filter(models.User.email == user.email).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    if user.school_id is not None:
        school = db.query(models.School).filter(models.School.id == user.school_id).first()
        if not school:
            raise HTTPException(status_code=400, detail=f"School with ID {user.school_id} does not exist.")

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

# 4. User Login (WITH ROLE VERIFICATION)
@app.post("/api/login")
def login(user: UserLogin, db: Session = Depends(get_db)):
    db_user = db.query(models.User).filter(models.User.email == user.email).first()
    
    if not db_user or not pwd_context.verify(user.password, db_user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    
    if db_user.role != user.role:
        raise HTTPException(
            status_code=403, 
            detail=f"Access denied. This account is registered as a {db_user.role}, not a {user.role}."
        )
    
    access_token = create_access_token(data={"sub": db_user.email, "role": db_user.role})
    
    return {
        "message": "Login successful",
        "access_token": access_token,
        "token_type": "bearer",
        "user": {
            "email": db_user.email,
            "first_name": db_user.first_name,
            "last_name": db_user.last_name,
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
        "last_name": current_user.last_name,
        "role": current_user.role,
        "school_id": current_user.school_id
    }

# --- DASHBOARD DATA ENDPOINTS ---

# 6. Student Dashboard Data
@app.get("/api/student/dashboard")
def get_student_dashboard(current_user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    if current_user.role != "student":
        raise HTTPException(status_code=403, detail="Access denied. Student access only.")
    
    return {
        "student_name": f"{current_user.first_name} {current_user.last_name}",
        "enrolled_subjects": 6,
        "average_grade": "78% (B)",
        "upcoming_lessons": 3,
        "recent_assessments": [
            {"name": "Maths Test 1", "date": "2 days ago", "score": "85%"},
            {"name": "Physics Quiz", "date": "1 week ago", "score": "72%"}
        ]
    }

# 7. Parent Dashboard Data (WITH REAL LINKED CHILDREN)
@app.get("/api/parent/dashboard")
def get_parent_dashboard(current_user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    if current_user.role != "parent":
        raise HTTPException(status_code=403, detail="Access denied. Parent access only.")
    
    links = db.query(models.ParentChildLink).filter(models.ParentChildLink.parent_id == current_user.id).all()
    children = []
    for link in links:
        children.append({
            "id": link.learner.id,
            "name": link.learner.first_name,
            "surname": link.learner.last_name,
            "email": link.learner.email,
            "grade": "Grade 11",
            "school": "Pretoria Boys High",
            "average": "82%",
            "attendance": "98%"
        })
    
    return {
        "parent_name": f"{current_user.first_name} {current_user.last_name}",
        "children": children,
        "outstanding_balance": "R450.00"
    }

# 8. Tutor Dashboard Data
@app.get("/api/tutor/dashboard")
def get_tutor_dashboard(current_user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    if current_user.role != "tutor":
        raise HTTPException(status_code=403, detail="Access denied. Tutor access only.")
    
    return {
        "tutor_name": f"{current_user.first_name} {current_user.last_name}",
        "pending_earnings": "R 4,250.00",
        "upcoming_lessons": [
            {"id": 1, "student_name": "Siphelele Blose", "subject": "Mathematics: Calculus", "time": "14:00", "status": "ready"},
            {"id": 2, "student_name": "Lerato Ndlovu", "subject": "Physical Sciences: Mechanics", "time": "16:30", "status": "waiting"}
        ],
        "active_students": 12,
        "rating": "4.9/5.0",
        "completed_lessons": 28,
        "recent_assessments": [
            {"student": "Siphelele B.", "subject": "Mathematics", "average": "85%"},
            {"student": "Lerato N.", "subject": "Physical Sciences", "average": "72%"}
        ]
    }

# 9. Admin Dashboard Data
@app.get("/api/admin/dashboard")
def get_admin_dashboard(current_user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    if current_user.role != "admin":
        raise HTTPException(status_code=403, detail="Access denied. Admin access only.")
    
    total_users = db.query(models.User).count()
    total_schools = db.query(models.School).count()
    
    return {
        "admin_name": f"{current_user.first_name} {current_user.last_name}",
        "total_users": total_users,
        "total_schools": total_schools,
        "system_status": "Online"
    }

# 10. Learner Dashboard Data
@app.get("/api/learner/dashboard")
def get_learner_dashboard(current_user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    if current_user.role != "learner":
        raise HTTPException(status_code=403, detail="Access denied. Learner access only.")
    
    return {
        "learner_name": f"{current_user.first_name} {current_user.last_name}",
        "grade": "Grade 9",
        "attendance_streak": 12,
        "reward_points": 450,
        "homework_due": [
            {"subject": "Natural Sciences", "title": "Photosynthesis Worksheet", "due": "Today at 17:00", "status": "urgent"},
            {"subject": "Mathematics", "title": "Fractions Practice", "due": "Tomorrow at 08:00", "status": "pending"}
        ],
        "today_class": {"subject": "English Literature", "time": "14:00 - 15:00", "tutor": "Mrs. K. Zulu"}
    }

# --- PARENT-CHILD LINKING ROUTES ---

@app.post("/api/parent/link-child")
def link_child(learner_email: str, current_user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    if current_user.role != "parent":
        raise HTTPException(status_code=403, detail="Only parents can link children.")
    
    learner = db.query(models.User).filter(models.User.email == learner_email, models.User.role == "learner").first()
    if not learner:
        raise HTTPException(status_code=404, detail="No learner found with that email.")
    
    existing = db.query(models.ParentChildLink).filter(
        models.ParentChildLink.parent_id == current_user.id,
        models.ParentChildLink.learner_id == learner.id
    ).first()
    if existing:
        raise HTTPException(status_code=400, detail="This learner is already linked to your account.")
    
    new_link = models.ParentChildLink(parent_id=current_user.id, learner_id=learner.id)
    db.add(new_link)
    db.commit()
    
    return {"message": f"Successfully linked to {learner.first_name} {learner.last_name}."}

@app.get("/api/parent/children")
def get_linked_children(current_user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    if current_user.role != "parent":
        raise HTTPException(status_code=403, detail="Only parents can view children.")
    
    links = db.query(models.ParentChildLink).filter(models.ParentChildLink.parent_id == current_user.id).all()
    children = [{"id": link.learner.id, "name": link.learner.first_name, "surname": link.learner.last_name, "email": link.learner.email, "role": "learner"} for link in links]
    
    return {"children": children}

# --- SECURE CHILD PROFILE ACCESS ---
@app.get("/api/parent/child/{child_id}")
def get_child_profile(child_id: int, current_user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    if current_user.role != "parent":
        raise HTTPException(status_code=403, detail="Only parents can access child profiles.")
    
    link = db.query(models.ParentChildLink).filter(
        models.ParentChildLink.parent_id == current_user.id,
        models.ParentChildLink.learner_id == child_id
    ).first()
    
    if not link:
        raise HTTPException(status_code=403, detail="You are not authorized to view this child's profile.")
    
    learner = db.query(models.User).filter(models.User.id == child_id).first()
    
    return {
        "id": learner.id,
        "name": f"{learner.first_name} {learner.last_name}",
        "email": learner.email,
        "role": learner.role,
        "average": "82%",
        "attendance": "98%",
        "recent_feedback": "Great improvement in Mathematics this term."
    }

# --- COMMUNITY FORUM ROUTES ---

@app.post("/api/community/posts")
def create_post(post: PostCreate, current_user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    new_post = models.CommunityPost(
        author_id=current_user.id,
        title=post.title,
        content=post.content,
        category=post.category,
        post_type=post.post_type
    )
    db.add(new_post)
    db.commit()
    db.refresh(new_post)
    return {"message": "Post created successfully", "post_id": new_post.id}

@app.get("/api/community/posts/{post_type}")
def get_posts(post_type: str, db: Session = Depends(get_db)):
    posts = db.query(models.CommunityPost).filter(models.CommunityPost.post_type == post_type).order_by(models.CommunityPost.created_at.desc()).all()
    
    result = []
    for p in posts:
        result.append({
            "id": p.id,
            "title": p.title,
            "content": p.content,
            "category": p.category,
            "author_name": f"{p.author.first_name} {p.author.last_name}",
            "author_role": p.author.role,
            "created_at": p.created_at.strftime("%Y-%m-%d %H:%M")
        })
    return result

# --- LESSON REPORTING ROUTES ---

@app.post("/api/tutor/reports")
def submit_report(report: ReportCreate, current_user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    if current_user.role != "tutor":
        raise HTTPException(status_code=403, detail="Only tutors can submit reports.")
    
    new_report = models.LessonReport(
        tutor_id=current_user.id,
        student_name=report.student_name,
        subject=report.subject,
        topic_covered=report.topic_covered,
        student_performance=report.student_performance,
        homework_assigned=report.homework_assigned
    )
    db.add(new_report)
    db.commit()
    db.refresh(new_report)
    return {"message": "Report submitted successfully", "report_id": new_report.id}

@app.get("/api/tutor/reports")
def get_my_reports(current_user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    if current_user.role != "tutor":
        raise HTTPException(status_code=403, detail="Only tutors can view their reports.")
    
    reports = db.query(models.LessonReport).filter(models.LessonReport.tutor_id == current_user.id).order_by(models.LessonReport.created_at.desc()).all()
    
    return [
        {
            "id": r.id,
            "student_name": r.student_name,
            "subject": r.subject,
            "topic": r.topic_covered,
            "performance": r.student_performance,
            "homework": r.homework_assigned,
            "date": r.created_at.strftime("%Y-%m-%d")
        } for r in reports
    ]

# --- ADMIN FINANCE DATA ---
@app.get("/api/admin/finance")
def get_admin_finance(current_user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    if current_user.role != "admin":
        raise HTTPException(status_code=403, detail="Access denied. Admin access only.")
    
    total_lesson_reports = db.query(models.LessonReport).count()
    
    estimated_tutor_liability = total_lesson_reports * 150
    estimated_total_revenue = total_lesson_reports * 250
    estimated_academy_profit = estimated_total_revenue - estimated_tutor_liability
    
    return {
        "total_revenue": f"R {estimated_total_revenue:,.2f}",
        "tutor_liabilities": f"R {estimated_tutor_liability:,.2f}",
        "academy_profit": f"R {estimated_academy_profit:,.2f}",
        "total_transactions": total_lesson_reports,
        "recent_transactions": [
            {"id": "TXN-8901", "type": "Lesson Payment", "amount": "R 250.00", "status": "Cleared"},
            {"id": "TXN-8902", "type": "Tutor Payout", "amount": "-R 150.00", "status": "Processing"},
            {"id": "TXN-8903", "type": "Lesson Payment", "amount": "R 250.00", "status": "Cleared"},
        ]
    }

# --- ADMIN LIVE MONITOR ---
@app.get("/api/admin/live-sessions")
def get_live_sessions(current_user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    if current_user.role != "admin":
        raise HTTPException(status_code=403, detail="Access denied. Admin access only.")
    
    return [
        {
            "id": 1,
            "tutor_name": "Mr. T. Nkosi",
            "student_name": "Siphelele Blose",
            "subject": "Mathematics: Calculus",
            "started_at": "14:00",
            "duration": "25 mins",
            "status": "active"
        },
        {
            "id": 2,
            "tutor_name": "Mrs. K. Zulu",
            "student_name": "Lerato Ndlovu",
            "subject": "English Literature",
            "started_at": "14:15",
            "duration": "10 mins",
            "status": "active"
        }
    ]

# 11. AI Tutor
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