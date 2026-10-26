import os
from datetime import datetime
from typing import List
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
app = FastAPI(title="EduNova AI Backend")

# Allow Next.js to talk to Python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Groq Client
client = OpenAI(
    api_key=os.getenv("GROQ_API_KEY"),
    base_url="https://api.groq.com/openai/v1"
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

# --- PYDANTIC MODELS (Data Validation) ---

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
    education_level: str

class UserLogin(BaseModel):
    email: str
    password: str

class TutorApplicationCreate(BaseModel):
    first_name: str
    last_name: str
    email: str
    subjects: str
    qualifications: str

class TestSubmission(BaseModel):
    question_id: int
    selected_answer: str

# --- API ROUTES ---

@app.get("/")
def read_root():
    return {"status": "Online", "message": "Welcome to the EduNova API. Go to /docs to test endpoints."}

# --- AI TUTOR ---
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

# --- AUTHENTICATION ---
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
        education_level=user.education_level
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return {
        "message": "User created successfully", 
        "user": new_user.email, 
        "role": new_user.role,
        "education_level": new_user.education_level
    }

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
            "education_level": db_user.education_level
        }
    }

# --- TUTOR APPLICATIONS ---
@app.post("/api/apply-tutor")
def apply_tutor(application: TutorApplicationCreate, db: Session = Depends(get_db)):
    existing = db.query(models.TutorApplication).filter(models.TutorApplication.email == application.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="An application with this email already exists.")
    
    new_app = models.TutorApplication(
        first_name=application.first_name,
        last_name=application.last_name,
        email=application.email,
        subjects=application.subjects,
        qualifications=application.qualifications,
        status="Pending",
        created_at=datetime.now().strftime("%Y-%m-%d %H:%M")
    )
    db.add(new_app)
    db.commit()
    db.refresh(new_app)
    return {"message": "Application submitted successfully!", "id": new_app.id}

@app.get("/api/admin/tutor-applications")
def get_tutor_applications(db: Session = Depends(get_db)):
    applications = db.query(models.TutorApplication).all()
    return applications

@app.post("/api/admin/approve-tutor/{app_id}")
def approve_tutor(app_id: int, db: Session = Depends(get_db)):
    app_record = db.query(models.TutorApplication).filter(models.TutorApplication.id == app_id).first()
    if not app_record:
        raise HTTPException(status_code=404, detail="Application not found")
    
    app_record.status = "Approved"
    db.commit()
    return {"message": "Tutor approved successfully"}

@app.post("/api/admin/reject-tutor/{app_id}")
def reject_tutor(app_id: int, db: Session = Depends(get_db)):
    app_record = db.query(models.TutorApplication).filter(models.TutorApplication.id == app_id).first()
    if not app_record:
        raise HTTPException(status_code=404, detail="Application not found")
    
    app_record.status = "Rejected"
    db.commit()
    return {"message": "Tutor rejected"}

# --- NEW ACADEMIC ENDPOINTS ---

# 1. Create a Course
@app.post("/api/courses")
def create_course(title: str, description: str, grade_level: str, curriculum: str, db: Session = Depends(get_db)):
    new_course = models.Course(title=title, description=description, grade_level=grade_level, curriculum=curriculum)
    db.add(new_course)
    db.commit()
    db.refresh(new_course)
    return new_course

# 2. Get all courses
@app.get("/api/courses")
def get_courses(db: Session = Depends(get_db)):
    return db.query(models.Course).all()

# 3. Create a Lesson
@app.post("/api/courses/{course_id}/lessons")
def create_lesson(course_id: int, title: str, content: str, video_url: str, order: int, db: Session = Depends(get_db)):
    new_lesson = models.Lesson(course_id=course_id, title=title, content=content, video_url=video_url, order=order)
    db.add(new_lesson)
    db.commit()
    db.refresh(new_lesson)
    return new_lesson

# 4. Get lessons for a specific course
@app.get("/api/courses/{course_id}/lessons")
def get_lessons(course_id: int, db: Session = Depends(get_db)):
    return db.query(models.Lesson).filter(models.Lesson.course_id == course_id).order_by(models.Lesson.order).all()

# 5. Get a specific lesson details (including questions)
@app.get("/api/lessons/{lesson_id}")
def get_lesson(lesson_id: int, db: Session = Depends(get_db)):
    lesson = db.query(models.Lesson).filter(models.Lesson.id == lesson_id).first()
    if not lesson:
        raise HTTPException(status_code=404, detail="Lesson not found")
    
    questions = db.query(models.Question).filter(models.Question.lesson_id == lesson_id).all()
    
    return {
        "lesson": lesson,
        "questions": questions
    }

# 6. Submit a test and get a score
@app.post("/api/lessons/{lesson_id}/submit")
def submit_test(lesson_id: int, submissions: List[TestSubmission], db: Session = Depends(get_db)):
    questions = db.query(models.Question).filter(models.Question.lesson_id == lesson_id).all()
    
    score = 0
    total_questions = len(questions)
    
    for sub in submissions:
        question = next((q for q in questions if q.id == sub.question_id), None)
        if question and question.correct_answer == sub.selected_answer:
            score += 1
            
    percentage = (score / total_questions) * 100 if total_questions > 0 else 0
    
    return {
        "score": score,
        "total": total_questions,
        "percentage": round(percentage, 2)
    }