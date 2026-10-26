from database import SessionLocal
import models

def seed_academic():
    db = SessionLocal()
    
    # 1. Create a Course
    course = models.Course(
        title="Mathematics", 
        description="Grade 10 Mathematics - Algebra and Geometry", 
        grade_level="Grade 10", 
        curriculum="CAPS"
    )
    db.add(course)
    db.commit()
    db.refresh(course)

    # 2. Create a Lesson
    lesson = models.Lesson(
        course_id=course.id,
        title="Introduction to Quadratic Equations",
        content="A quadratic equation is an equation of the second degree, meaning it contains at least one term that is squared. The standard form is ax² + bx + c = 0.",
        video_url="https://www.youtube.com/embed/IlNAJl36-10", # A real math video
        order=1
    )
    db.add(lesson)
    db.commit()
    db.refresh(lesson)

    # 3. Create Questions for the Lesson
    q1 = models.Question(
        lesson_id=lesson.id,
        question_text="What is the standard form of a quadratic equation?",
        option_a="ax + b = 0",
        option_b="ax² + bx + c = 0",
        option_c="ax³ + bx² + c = 0",
        option_d="y = mx + c",
        correct_answer="B"
    )
    q2 = models.Question(
        lesson_id=lesson.id,
        question_text="What is the degree of a quadratic equation?",
        option_a="1",
        option_b="2",
        option_c="3",
        option_d="4",
        correct_answer="B"
    )
    
    db.add(q1)
    db.add(q2)
    db.commit()
    db.close()
    print("✅ Academic data seeded successfully!")

if __name__ == "__main__":
    seed_academic()