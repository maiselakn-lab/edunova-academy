from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

# --- CORE TENANT (The School) ---
class School(Base):
    __tablename__ = "schools"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    address = Column(String, nullable=True)
    is_active = Column(Boolean, default=True)

# --- USERS (Linked to a School) ---
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    school_id = Column(Integer, ForeignKey("schools.id"), nullable=True) # Null means it's a platform-level user (like you)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    role = Column(String) # "platform_admin", "school_admin", "teacher", "student", "parent"
    first_name = Column(String)
    last_name = Column(String)
    is_active = Column(Boolean, default=True)

    school = relationship("School")