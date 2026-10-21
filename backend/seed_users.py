from database import SessionLocal
import models
from passlib.context import CryptContext

# Setup password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def seed_database():
    db = SessionLocal()
    print("Connecting to database and creating users...")

    users_to_create = [
        {
            "first_name": "Maisela",
            "last_name": "Norman",
            "email": "admin@edunova.com",
            "password": "password123",
            "role": "admin",
            "education_level": "N/A"
        },
        {
            "first_name": "Thandi",
            "last_name": "Dlamini",
            "email": "learner@edunova.com",
            "password": "password123",
            "role": "learner",
            "education_level": "Secondary School"
        },
        {
            "first_name": "Sipho",
            "last_name": "Zulu",
            "email": "student@edunova.com",
            "password": "password123",
            "role": "student",
            "education_level": "University"
        },
        {
            "first_name": "Dr. Thabo",
            "last_name": "Nkosi",
            "email": "tutor@edunova.com",
            "password": "password123",
            "role": "tutor",
            "education_level": "N/A"
        }
    ]

    for user_data in users_to_create:
        # Check if user already exists
        existing = db.query(models.User).filter(models.User.email == user_data["email"]).first()
        
        if existing:
            print(f"⚠️  User {user_data['email']} already exists. Skipping.")
            continue

        # Hash the password
        hashed_pw = pwd_context.hash(user_data["password"])

        # Create the user
        new_user = models.User(
            first_name=user_data["first_name"],
            last_name=user_data["last_name"],
            email=user_data["email"],
            hashed_password=hashed_pw,
            role=user_data["role"],
            education_level=user_data["education_level"]
        )
        
        db.add(new_user)
        print(f"✅ Created {user_data['role']}: {user_data['email']}")

    db.commit()
    db.close()
    print("\n🎉 Database seeding complete! You can now log in with any of these accounts.")

if __name__ == "__main__":
    seed_database()