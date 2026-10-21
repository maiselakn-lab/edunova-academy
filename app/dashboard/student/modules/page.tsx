"use client";
import StudentSidebar from "@/components/sidebars/StudentSidebar";
import TopNav from "@/components/TopNav";
import { Video, FileText, Clock, Search } from "lucide-react";
import Link from "next/link";

export default function StudentModulesPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <StudentSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1400px] mx-auto">
          <div className="flex justify-between items-end mb-8"><div><h1 className="text-2xl font-bold text-gray-800 mb-1">My Modules</h1><p className="text-sm text-gray-500">Access your enrolled university modules.</p></div><div className="flex items-center bg-white rounded-lg px-4 py-2 w-72 border border-gray-300 shadow-sm"><Search size={18} className="text-gray-400" /><input type="text" placeholder="Search modules..." className="bg-transparent border-none outline-none ml-3 w-full text-sm" /></div></div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { code: "CSC3001", name: "Advanced Algorithms", lecturer: "Prof. D. Oosthuizen", progress: 80, next: "Graph Theory Lecture", color: "bg-indigo-500" },
              { code: "CSC2002", name: "Database Systems", lecturer: "Dr. T. Nkosi", progress: 45, next: "SQL Assignment Due", color: "bg-blue-500" },
            ].map((mod, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col hover:shadow-md">
                <div className="flex justify-between items-start mb-4"><div className={`px-3 py-1 rounded-md text-xs font-bold text-white ${mod.color}`}>{mod.code}</div><span className="text-xs font-bold text-gray-600">{mod.progress}% Complete</span></div>
                <h3 className="font-bold text-gray-900 text-xl mb-1">{mod.name}</h3><p className="text-sm text-gray-500 mb-4">{mod.lecturer}</p>
                <div className="bg-gray-50 rounded-lg p-3 mb-6 flex items-center gap-3"><Clock size={16} className="text-gray-400"/><p className="text-xs font-medium text-gray-700">Next: <span className="font-bold">{mod.next}</span></p></div>
                <div className="mt-auto"><div className="w-full bg-gray-100 rounded-full h-2 mb-4"><div className={`h-2 rounded-full ${mod.color}`} style={{ width: `${mod.progress}%` }}></div></div><div className="flex gap-2"><Link href="/dashboard/student/live" className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-bold text-sm text-center flex items-center justify-center gap-2"><Video size={16}/> Join Lecture</Link><button className="flex-1 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2"><FileText size={16}/> Materials</button></div></div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}