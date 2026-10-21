"use client";
import StudentSidebar from "@/components/sidebars/StudentSidebar";
import TopNav from "@/components/TopNav";
import { Calendar, Video, Clock } from "lucide-react";

export default function StudentSessionsPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <StudentSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1000px] mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">My Sessions</h1>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
             <h3 className="font-bold text-gray-800 text-lg mb-2">Prof. David Oosthuizen (Physics)</h3>
             <p className="flex items-center gap-2 text-sm text-gray-600 mb-4"><Calendar size={16}/> 22 Oct 2026 • <Clock size={16}/> 10:00</p>
             <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg text-sm font-bold flex items-center gap-2"><Video size={16}/> Join Session</button>
          </div>
        </div>
      </main>
    </div>
  );
}