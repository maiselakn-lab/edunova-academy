"use client";
import Link from "next/link";
import { BookOpen, ArrowLeft, PlayCircle, Clock, Users } from "lucide-react";

export default function ExploreCoursesPage() {
  const courses = [
    { title: "Winter School: Maths & Science", desc: "Intensive bootcamp for matric students preparing for finals.", duration: "2 Weeks", students: "1.2k", color: "bg-[#D1007B]" },
    { title: "Coding & Robotics for Kids", desc: "Introduction to Scratch, Python, and building simple robots.", duration: "8 Weeks", students: "850", color: "bg-[#009CA6]" },
    { title: "Mind Power for Teens", desc: "Study skills, memory techniques, and stress management.", duration: "4 Weeks", students: "2.3k", color: "bg-[#E67E22]" },
    { title: "Social Media Savvy", desc: "Digital literacy, online safety, and responsible social media use.", duration: "6 Weeks", students: "1.5k", color: "bg-[#8B5CF6]" },
  ];

  return (
    <div className="min-h-screen bg-[#F4F4F4] font-sans">
      {/* Header */}
      <div className="bg-[#009CA6] text-white py-4 px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <BookOpen size={32} className="text-white" />
          <div>
            <div className="text-2xl font-black italic tracking-tighter">THINK</div>
            <p className="text-[8px] tracking-[0.2em] font-bold uppercase">EduNova Academy</p>
          </div>
        </Link>
        <div className="flex gap-4">
          <Link href="/login" className="bg-white text-[#009CA6] px-4 py-1.5 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">Login</Link>
          <Link href="/trial" className="bg-[#E67E22] text-white px-4 py-1.5 rounded-full font-bold text-sm hover:bg-[#D35400] transition-colors">Free Trial</Link>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#333] mb-4">Explore Short Courses</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Upskill yourself or your child with our focused, expert-led short courses. Learn at your own pace, with full AI tutor support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:-translate-y-1 transition-transform">
              <div className={`h-4 w-full ${course.color}`}></div>
              <div className="p-8 flex-grow flex flex-col">
                <h2 className="text-2xl font-bold text-[#333] mb-2">{course.title}</h2>
                <p className="text-gray-500 mb-6 flex-grow">{course.desc}</p>
                
                <div className="flex items-center gap-6 mb-8 text-sm text-gray-600">
                  <span className="flex items-center gap-1"><Clock size={16} className="text-[#D1007B]"/> {course.duration}</span>
                  <span className="flex items-center gap-1"><Users size={16} className="text-[#009CA6]"/> {course.students} Enrolled</span>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 bg-[#333] hover:bg-black text-white py-3 rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2">
                    <PlayCircle size={18}/> Enrol Now
                  </button>
                  <Link href="/" className="px-6 py-3 border border-gray-300 rounded-lg text-gray-600 font-bold text-sm hover:bg-gray-50 transition-colors flex items-center justify-center">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-[#009CA6] font-bold hover:underline">
            <ArrowLeft size={18}/> Back to Homepage
          </Link>
        </div>
      </main>
    </div>
  );
}