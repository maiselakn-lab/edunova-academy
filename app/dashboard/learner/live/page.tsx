"use client";
import LearnerSidebar from "@/components/sidebars/LearnerSidebar";
import TopNav from "@/components/TopNav";
import { Video, Clock, Play } from "lucide-react";

export default function LearnerLivePage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <LearnerSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1200px] mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Live Classes</h1>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-red-300 ring-2 ring-red-100 flex items-center justify-between">
              <div className="flex items-center gap-5"><div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold text-lg">M</div><div><h3 className="font-bold text-gray-800 text-lg">Mathematics</h3><p className="text-xs text-gray-500">Mr. Smith • 08:00 - 09:00</p></div></div>
              <button className="bg-red-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2"><Video size={16}/> Join Live</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}