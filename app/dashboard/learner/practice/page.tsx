"use client";
import LearnerSidebar from "@/components/sidebars/LearnerSidebar";
import TopNav from "@/components/TopNav";
import { PlayCircle } from "lucide-react";

export default function LearnerPracticePage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <LearnerSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1200px] mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Practice Tests</h1>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
            <div><h3 className="font-bold text-gray-800 text-sm">Mathematics: Algebra Basics</h3><p className="text-[10px] text-gray-500 mt-1">15 Questions • 20 min</p></div>
            <button className="bg-blue-50 text-blue-600 p-2 rounded-lg hover:bg-blue-100"><PlayCircle size={20}/></button>
          </div>
        </div>
      </main>
    </div>
  );
}