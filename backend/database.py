import os
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
from dotenv import load_dotenv

load_dotenv()

SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL")

if not SQLALCHEMY_DATABASE_URL:
    SQLALCHEMY_DATABASE_URL = "sqlite:///./edunova.db"
    connect_args = {"check_same_thread": False}
else:
    if SQLALCHEMY_DATABASE_URL.startswith("postgresql://"):
        SQLALCHEMY_DATABASE_URL = SQLALCHEMY_DATABASE_URL.replace("postgresql://", "postgresql+psycopg://", 1)
    connect_args = {}

# Create the engine with connection health checks
engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    connect_args=connect_args,
    pool_pre_ping=True,  # Checks connection health before using it
    pool_recycle=300,    # Recycles connections every 5 minutes
    pool_size=5,         # Limit the number of connections
    max_overflow=10
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()