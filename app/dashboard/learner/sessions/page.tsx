"use client";
import LearnerSidebar from "@/components/sidebars/LearnerSidebar";
import TopNav from "@/components/TopNav";
import { Calendar, Video, Clock } from "lucide-react";

export default function LearnerSessionsPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <LearnerSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1000px] mx-auto">
          <div className="mb-8"><h1 className="text-2xl font-bold text-gray-800 mb-1">My Tutoring Sessions</h1></div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-blue-600 px-5 py-3 text-white"><span className="text-xs font-bold uppercase">Upcoming Session</span></div>
            <div className="p-6">
              <h3 className="font-bold text-gray-800 text-lg mb-2">Dr. Thabo Nkosi (Mathematics)</h3>
              <p className="flex items-center gap-2 text-sm text-gray-600 mb-4"><Calendar size={16}/> 19 Oct 2026 • <Clock size={16}/> 15:00 - 16:00</p>
              <button className="bg-[#3B82F6] text-white py-2 px-6 rounded-lg text-sm font-bold flex items-center gap-2"><Video size={16}/> Join Session</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}