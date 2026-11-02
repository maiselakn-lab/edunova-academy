"use client";
import { useState, useEffect } from "react";
import LearnerSidebar from "@/components/sidebars/LearnerSidebar";
import TopNav from "@/components/TopNav";
import { BookOpen, ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";

export default function LearnerSubjectsPage() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch real courses from the Render backend
    fetch("https://edunova-academy-qkk5.onrender.com/api/courses")
      .then(res => res.json())
      .then(data => {
        setCourses(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <LearnerSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1400px] mx-auto">
          
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">My Subjects</h1>
              <p className="text-sm text-gray-500">Access your CAPS materials and lessons.</p>
            </div>
            <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-bold text-sm border border-blue-200">
              Grade 10
            </div>
          </div>

          {loading ? (
            <div className="text-center py-20 text-gray-500">Loading your courses...</div>
          ) : courses.length === 0 ? (
            <div className="text-center py-20 text-gray-500 bg-white rounded-xl border border-gray-200">
              <BookOpen size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-bold text-gray-800">No Courses Enrolled Yet</h3>
              <p className="text-sm">Your subjects will appear here once assigned.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <div key={course.id} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white bg-blue-500`}>
                      <BookOpen size={24}/>
                    </div>
                    <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2.5 py-1 rounded-full">{course.grade_level}</span>
                  </div>
                  
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{course.title}</h3>
                  <p className="text-xs text-gray-500 mb-6 flex-grow">{course.description}</p>
                  
                  <div className="mt-auto">
                    <Link href={`/dashboard/learner/subjects/${course.id}`} className="w-full py-2.5 rounded-lg bg-blue-50 text-blue-600 font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-100 transition-colors">
                      <PlayCircle size={16}/> View Lessons
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </main>
    </div>
  );
}