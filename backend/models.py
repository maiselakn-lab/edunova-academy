from sqlalchemy import Column, Integer, String, Boolean, Text, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

# --- EXISTING USER MODELS ---
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String, index=True)
    last_name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    role = Column(String) # "learner", "student", "tutor", "admin"
    education_level = Column(String, default="Secondary School")
    is_active = Column(Boolean, default=True)

class TutorApplication(Base):
    __tablename__ = "tutor_applications"
    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String)
    last_name = Column(String)
    email = Column(String, unique=True, index=True)
    subjects = Column(String) 
    qualifications = Column(String) 
    assessment_score = Column(Integer, default=0)
    status = Column(String, default="Pending") 
    created_at = Column(String) 

# --- NEW ACADEMIC MODELS ---
class Course(Base):
    __tablename__ = "courses"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    grade_level = Column(String) # e.g., "Grade 10"
    curriculum = Column(String) # "CAPS", "British", "GED"
    
    lessons = relationship("Lesson", back_populates="course")

class Lesson(Base):
    __tablename__ = "lessons"
    id = Column(Integer, primary_key=True, index=True)
    course_id = Column(Integer, ForeignKey("courses.id"))
    title = Column(String, index=True)
    content = Column(Text) # The text notes
    video_url = Column(String) # YouTube or Vimeo link
    order = Column(Integer) # Lesson 1, Lesson 2...
    
    course = relationship("Course", back_populates="lessons")
    questions = relationship("Question", back_populates="lesson")

class Question(Base):
    __tablename__ = "questions"
    id = Column(Integer, primary_key=True, index=True)
    lesson_id = Column(Integer, ForeignKey("lessons.id"))
    question_text = Column(String)
    option_a = Column(String)
    option_b = Column(String)
    option_c = Column(String)
    option_d = Column(String)
    correct_answer = Column(String) # "A", "B", "C", or "D"
    
    lesson = relationship("Lesson", back_populates="questions")