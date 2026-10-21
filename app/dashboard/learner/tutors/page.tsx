"use client";
import LearnerSidebar from "@/components/sidebars/LearnerSidebar";
import TopNav from "@/components/TopNav";
import { Search, Star, GraduationCap, CheckCircle2, Calendar } from "lucide-react";

export default function LearnerTutorsPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <LearnerSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1200px] mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div><h1 className="text-2xl font-bold text-gray-800 mb-1">Request a Tutor</h1><p className="text-sm text-gray-500">Browse verified professionals.</p></div>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex gap-6">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150" alt="Tutor" className="w-24 h-24 rounded-xl object-cover" />
              <div className="flex-grow">
                <h3 className="font-bold text-gray-800 text-lg flex items-center gap-2">Dr. Thabo Nkosi <CheckCircle2 size={16} className="text-[#0070F3]" /></h3>
                <p className="text-sm text-gray-500 flex items-center gap-2 mt-1"><GraduationCap size={14}/> Mathematics, Physics</p>
                <div className="flex items-center gap-4 mt-3 mb-4"><div className="flex items-center gap-1 text-sm font-medium text-yellow-500"><Star size={14} fill="currentColor" /> 4.9 <span className="text-gray-400 font-normal">(124 reviews)</span></div></div>
                <button className="bg-[#0070F3] text-white py-2 px-6 rounded-lg text-sm font-medium flex items-center gap-2"><Calendar size={16}/> Request Session</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}