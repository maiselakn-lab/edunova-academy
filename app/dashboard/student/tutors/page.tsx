"use client";
import StudentSidebar from "@/components/sidebars/StudentSidebar";
import TopNav from "@/components/TopNav";
import { Star, GraduationCap, CheckCircle2, Calendar } from "lucide-react";

export default function StudentTutorsPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <StudentSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1200px] mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Request a Tutor</h1>
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex gap-6">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150" alt="Tutor" className="w-24 h-24 rounded-xl object-cover" />
            <div className="flex-grow">
              <h3 className="font-bold text-gray-800 text-lg flex items-center gap-2">Prof. David Oosthuizen <CheckCircle2 size={16} className="text-indigo-600" /></h3>
              <p className="text-sm text-gray-500 flex items-center gap-2 mt-1"><GraduationCap size={14}/> Engineering, Physics</p>
              <div className="flex items-center gap-1 text-sm font-medium text-yellow-500 mt-3 mb-4"><Star size={14} fill="currentColor" /> 5.0 <span className="text-gray-400 font-normal">(210 reviews)</span></div>
              <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg text-sm font-bold flex items-center gap-2"><Calendar size={16}/> Request Session</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}