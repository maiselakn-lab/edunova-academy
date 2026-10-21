"use client";
import StudentSidebar from "@/components/sidebars/StudentSidebar";
import TopNav from "@/components/TopNav";
import { Video, Clock, Play, BookOpen } from "lucide-react";

export default function StudentLivePage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <StudentSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1200px] mx-auto">
          <div className="mb-8"><h1 className="text-2xl font-bold text-gray-800 mb-1">Live Lectures</h1></div>
          <div className="bg-indigo-900 rounded-xl p-8 mb-8 text-white"><h3 className="font-bold text-2xl mb-2">Advanced Algorithms Lecture</h3><p className="text-indigo-200 text-sm mb-6">Prof. D. Oosthuizen is live now.</p><button className="bg-white text-indigo-900 px-6 py-3 rounded-lg font-bold text-sm flex items-center gap-2"><Video size={18}/> Join Lecture Room</button></div>
          <div className="grid grid-cols-2 gap-4">
             {[{ title: "Database Systems", time: "Today, 14:00" }, { title: "Artificial Intelligence", time: "Tomorrow, 10:00" }].map((lecture, i) => (
               <div key={i} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-start justify-between"><div><h3 className="font-bold text-gray-800">{lecture.title}</h3><p className="text-xs text-gray-500 mt-1 flex items-center gap-2"><Clock size={12}/> {lecture.time}</p></div><button className="bg-indigo-50 text-indigo-600 p-2 rounded-lg"><Play size={20}/></button></div>
             ))}
          </div>
        </div>
      </main>
    </div>
  );
}