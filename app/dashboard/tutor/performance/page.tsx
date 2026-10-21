"use client";
import TutorSidebar from "@/components/sidebars/TutorSidebar";
import TopNav from "@/components/TopNav";
import { TrendingUp, Users, Clock, Target, Star, Award, ArrowUpRight, ArrowDownRight, BarChart2 } from "lucide-react";

export default function TutorPerformancePage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <TutorSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1400px] mx-auto">
          
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">Performance Analytics</h1>
            <p className="text-sm text-gray-500">Track your teaching impact and student outcomes.</p>
          </div>

          {/* KPI Grid */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600"><Target size={20}/></div>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded flex items-center gap-1"><ArrowUpRight size={10}/> +8%</span>
              </div>
              <p className="text-2xl font-bold text-gray-800">92%</p>
              <p className="text-xs text-gray-500 font-medium">Student Pass Rate</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Clock size={20}/></div>
              </div>
              <p className="text-2xl font-bold text-gray-800">142</p>
              <p className="text-xs text-gray-500 font-medium">Hours Taught</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div className="bg-purple-100 p-2 rounded-lg text-purple-600"><Users size={20}/></div>
              </div>
              <p className="text-2xl font-bold text-gray-800">28</p>
              <p className="text-xs text-gray-500 font-medium">Total Students Taught</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div className="bg-yellow-100 p-2 rounded-lg text-yellow-600"><Star size={20}/></div>
              </div>
              <p className="text-2xl font-bold text-gray-800">4.9</p>
              <p className="text-xs text-gray-500 font-medium">Student Rating</p>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="font-bold text-gray-800 mb-4 flex items-center gap-2"><BarChart2 size={18} className="text-emerald-500"/> Weekly Teaching Hours</h2>
              <div className="flex items-end justify-between h-40 gap-2">
                {[3, 5, 4, 6, 8, 4, 2].map((val, i) => (
                  <div key={i} className="flex flex-col items-center flex-1">
                    <div className="w-full bg-emerald-500 rounded-t-md hover:bg-emerald-600 transition-colors" style={{ height: `${val * 15}px` }}></div>
                    <span className="text-[10px] font-medium text-gray-500 mt-2">{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="font-bold text-gray-800 mb-4 flex items-center gap-2"><TrendingUp size={18} className="text-blue-500"/> Student Improvement</h2>
              <div className="space-y-4">
                {[
                  { name: "Maisela N.", before: 45, after: 78 },
                  { name: "Sipho D.", before: 55, after: 82 },
                  { name: "Lerato K.", before: 60, after: 90 },
                ].map((student, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-1 font-medium"><span className="text-gray-700">{student.name}</span><span className="text-emerald-600">+{student.after - student.before}%</span></div>
                    <div className="relative w-full bg-gray-100 rounded-full h-3">
                       <div className="bg-gray-300 h-3 rounded-full absolute top-0 left-0" style={{ width: `${student.before}%` }}></div>
                       <div className="bg-emerald-500 h-3 rounded-full absolute top-0 left-0" style={{ width: `${student.after}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h2 className="font-bold text-gray-800 mb-4 flex items-center gap-2"><Award size={18} className="text-yellow-500"/> Your Badges</h2>
            <div className="grid grid-cols-4 gap-4">
              {[
                { name: "Top Tutor", desc: "Top 5% in Mathematics", color: "bg-yellow-50 border-yellow-200 text-yellow-700" },
                { name: "100 Hours", desc: "Taught over 100 hours", color: "bg-blue-50 border-blue-200 text-blue-700" },
                { name: "5-Star Rated", desc: "Maintained 4.9+ rating", color: "bg-emerald-50 border-emerald-200 text-emerald-700" },
                { name: "Content Creator", desc: "Published 20+ lessons", color: "bg-purple-50 border-purple-200 text-purple-700" },
              ].map((badge, i) => (
                <div key={i} className={`border rounded-xl p-4 text-center ${badge.color}`}>
                  <Award size={24} className="mx-auto mb-2"/>
                  <p className="font-bold text-sm">{badge.name}</p>
                  <p className="text-[10px] mt-1 opacity-80">{badge.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}