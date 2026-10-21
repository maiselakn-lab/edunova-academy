"use client";
import TutorSidebar from "@/components/sidebars/TutorSidebar";
import TopNav from "@/components/TopNav";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Video, Clock, User } from "lucide-react";

export default function TutorSchedulePage() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <TutorSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1400px] mx-auto">
          
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">My Schedule</h1>
              <p className="text-sm text-gray-500">Manage your availability and upcoming sessions.</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"><ChevronLeft size={18}/></button>
              <span className="text-sm font-bold text-gray-800 px-4">October 2026</span>
              <button className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"><ChevronRight size={18}/></button>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
             {/* Weekly Grid Header */}
             <div className="grid grid-cols-7 gap-4 mb-4 border-b border-gray-100 pb-2">
                {days.map(day => (
                  <div key={day} className="text-center text-xs font-bold text-gray-500 uppercase tracking-wider">{day}</div>
                ))}
             </div>
             
             {/* Weekly Grid Content (Mock) */}
             <div className="grid grid-cols-7 gap-4 min-h-[400px]">
                {/* Mon */}
                <div className="space-y-2">
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 p-2 rounded text-xs">
                    <p className="font-bold text-gray-800">15:00</p>
                    <p className="text-gray-600">Maths - Maisela N.</p>
                  </div>
                </div>
                {/* Tue */}
                <div className="space-y-2">
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 p-2 rounded text-xs">
                    <p className="font-bold text-gray-800">10:00</p>
                    <p className="text-gray-600">Physics - Sipho D.</p>
                  </div>
                </div>
                {/* Wed */}
                <div className="space-y-2">
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 p-2 rounded text-xs">
                    <p className="font-bold text-gray-800">14:00</p>
                    <p className="text-gray-600">Maths Group A</p>
                  </div>
                </div>
                {/* Thu */}
                <div className="space-y-2"></div>
                {/* Fri */}
                <div className="space-y-2">
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 p-2 rounded text-xs">
                    <p className="font-bold text-gray-800">09:00</p>
                    <p className="text-gray-600">Maths - Lerato K.</p>
                  </div>
                </div>
                {/* Sat */}
                <div className="space-y-2"></div>
                {/* Sun */}
                <div className="space-y-2"></div>
             </div>
          </div>

        </div>
      </main>
    </div>
  );
}