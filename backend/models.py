from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base

# --- CORE TENANT (The School) ---
class School(Base):
    __tablename__ = "schools"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    address = Column(String, nullable=True)
    is_active = Column(Boolean, default=True)

# --- USERS ---
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    school_id = Column(Integer, ForeignKey("schools.id"), nullable=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    role = Column(String)
    first_name = Column(String)
    last_name = Column(String)
    link_code = Column(String, unique=True, nullable=True)
    is_active = Column(Boolean, default=True)
    school = relationship("School")

# --- PARENT-CHILD LINK ---
class ParentChildLink(Base):
    __tablename__ = "parent_child_links"
    id = Column(Integer, primary_key=True, index=True)
    parent_id = Column(Integer, ForeignKey("users.id"))
    learner_id = Column(Integer, ForeignKey("users.id"))
    parent = relationship("User", foreign_keys=[parent_id])
    learner = relationship("User", foreign_keys=[learner_id])

# --- COMMUNITY POSTS ---
class CommunityPost(Base):
    __tablename__ = "community_posts"
    id = Column(Integer, primary_key=True, index=True)
    author_id = Column(Integer, ForeignKey("users.id"))
    title = Column(String, index=True)
    content = Column(String)
    category = Column(String)
    post_type = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
    author = relationship("User")

# --- LESSON REPORTS ---
class LessonReport(Base):
    __tablename__ = "lesson_reports"
    id = Column(Integer, primary_key=True, index=True)
    tutor_id = Column(Integer, ForeignKey("users.id"))
    student_name = Column(String)
    subject = Column(String)
    topic_covered = Column(String)
    student_performance = Column(String)
    homework_assigned = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
    tutor = relationship("User")

# --- JOB APPLICATIONS ---
class JobApplication(Base):
    __tablename__ = "job_applications"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    role = Column(String)
    details = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)

# --- PAYOUTS ---
class Payout(Base):
    __tablename__ = "payouts"
    id = Column(Integer, primary_key=True, index=True)
    tutor_id = Column(Integer, ForeignKey("users.id"))
    amount = Column(Integer)
    status = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
    tutor = relationship("User")

# --- NEWS ARTICLES ---
class NewsArticle(Base):
    __tablename__ = "news_articles"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    content = Column(String)
    category = Column(String)
    image_url = Column(String)
    author = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)

# --- COURSES & ENROLMENTS ---
class Course(Base):
    __tablename__ = "courses"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    faculty = Column(String)
    price = Column(Integer)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)

class Enrolment(Base):
    __tablename__ = "enrolments"
    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("users.id"))
    course_id = Column(Integer, ForeignKey("courses.id"))
    status = Column(String, default="active")
    enrolled_at = Column(DateTime, default=datetime.utcnow)

    student = relationship("User")
    course = relationship("Course")