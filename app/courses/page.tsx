"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import { Search, Calculator, Atom, BookOpen, Activity, Cog, PlayCircle, Star, Clock } from "lucide-react";

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState("All Subjects");

  const subjects = [
    { id: 1, title: "Mathematics", icon: <Calculator size={24}/>, color: "bg-[#3B82F6] text-white", lessons: 24, progress: 70, grade: "Grade 10" },
    { id: 2, title: "Physical Sciences", icon: <Atom size={24}/>, color: "bg-[#10B981] text-white", lessons: 18, progress: 45, grade: "Grade 10" },
    { id: 3, title: "English Home Language", icon: <BookOpen size={24}/>, color: "bg-[#8B5CF6] text-white", lessons: 32, progress: 60, grade: "Grade 10" },
    { id: 4, title: "Life Sciences", icon: <Activity size={24}/>, color: "bg-[#14B8A6] text-white", lessons: 15, progress: 30, grade: "Grade 10" },
    { id: 5, title: "Engineering Graphics", icon: <Cog size={24}/>, color: "bg-[#F97316] text-white", lessons: 12, progress: 20, grade: "University" },
    { id: 6, title: "Mathematical Literacy", icon: <Calculator size={24}/>, color: "bg-[#6366F1] text-white", lessons: 20, progress: 0, grade: "Grade 10" },
  ];

  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <Sidebar />
      <TopNav />

      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto overflow-x-hidden">
        <div className="p-8 max-w-[1200px] mx-auto">
          
          {/* Header */}
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">My Courses & Subjects</h1>
              <p className="text-sm text-gray-500">Access all your enrolled subjects and continue learning.</p>
            </div>
            <div className="flex items-center bg-white rounded-lg px-4 py-2 w-72 border border-gray-300 shadow-sm">
              <Search size={18} className="text-gray-400" />
              <input type="text" placeholder="Search subjects..." className="bg-transparent border-none outline-none ml-3 w-full text-sm text-gray-700 placeholder-gray-400" />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 border-b border-gray-200 mb-8">
            {["All Subjects", "Grade 10", "Grade 11", "Grade 12", "University"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-medium transition-colors border-b-2 ${
                  activeTab === tab ? "border-[#0070F3] text-[#0070F3]" : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject) => (
              <div key={subject.id} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${subject.color}`}>
                    {subject.icon}
                  </div>
                  <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                    {subject.grade}
                  </span>
                </div>
                
                <h3 className="font-bold text-gray-800 text-lg mb-1">{subject.title}</h3>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
                  <span className="flex items-center gap-1"><PlayCircle size={14}/> {subject.lessons} Lessons</span>
                  <span className="flex items-center gap-1"><Star size={14} className="text-yellow-500"/> 4.8 Rating</span>
                </div>

                <div className="mt-auto">
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span className="font-medium text-gray-600">Progress</span>
                    <span className="font-bold text-gray-800">{subject.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
                    <div className="h-2 rounded-full bg-[#3B82F6]" style={{ width: `${subject.progress}%` }}></div>
                  </div>
                  <button className="w-full py-2.5 rounded-lg border-2 border-[#0070F3] text-[#0070F3] font-semibold text-sm hover:bg-[#0070F3] hover:text-white transition-colors flex items-center justify-center gap-2">
                    {subject.progress > 0 ? "Continue Learning" : "Start Subject"}
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}