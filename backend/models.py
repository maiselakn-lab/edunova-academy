from sqlalchemy import Column, Integer, String, Boolean, Text
from database import Base

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
    status = Column(String, default="Pending") 
    created_at = Column(String) 