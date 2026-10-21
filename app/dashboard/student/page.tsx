"use client";
import StudentSidebar from "@/components/sidebars/StudentSidebar";
import TopNav from "@/components/TopNav";
import { BookOpen, GraduationCap, Video, FileText, CheckCircle2, TrendingUp, Calendar, Users, ArrowRight, Library, Clock } from "lucide-react";
import Link from "next/link";

export default function StudentDashboard() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <StudentSidebar /> 
      <TopNav />
      
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-6 max-w-[1600px] mx-auto space-y-6">
          
          <div className="bg-[#1E1B4B] rounded-2xl p-8 text-white relative overflow-hidden flex flex-col justify-center min-h-[180px]">
             <div className="z-10 max-w-lg relative">
                <h2 className="text-3xl font-bold leading-tight mb-2">Welcome back, <span className="text-[#818CF8]">Student!</span></h2>
                <p className="text-gray-300 text-sm mb-6">Your academic modules and research resources are ready.</p>
                <div className="flex gap-3">
                   <span className="bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold border border-white/20">University of Cape Town</span>
                   <span className="bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold border border-white/20">BSc Computer Science</span>
                </div>
             </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
              <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600"><BookOpen size={24}/></div>
              <div><p className="text-2xl font-bold text-gray-800">5</p><p className="text-xs text-gray-500 font-medium">Active Modules</p></div>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
              <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600"><TrendingUp size={24}/></div>
              <div><p className="text-2xl font-bold text-gray-800">72%</p><p className="text-xs text-gray-500 font-medium">Average Grade</p></div>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
              <div className="bg-purple-100 p-3 rounded-lg text-purple-600"><Clock size={24}/></div>
              <div><p className="text-2xl font-bold text-gray-800">3</p><p className="text-xs text-gray-500 font-medium">Assignments Due</p></div>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-lg text-orange-600"><Library size={24}/></div>
              <div><p className="text-2xl font-bold text-gray-800">12</p><p className="text-xs text-gray-500 font-medium">Research Papers</p></div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="p-5 border-b border-gray-200 flex justify-between items-center">
                <h2 className="font-bold text-gray-800 text-lg">My Modules</h2>
                <Link href="/dashboard/student/modules" className="text-sm text-indigo-600 font-bold hover:underline">View All</Link>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { title: "Advanced Algorithms", code: "CSC3001", progress: 80, next: "Lecture: Graph Theory", time: "Today, 10:00" },
                  { title: "Database Systems", code: "CSC2002", progress: 45, next: "Assignment 2 Due", time: "Friday, 23:59" },
                  { title: "Artificial Intelligence", code: "CSC4001", progress: 60, next: "Lab Session: Neural Networks", time: "Tomorrow, 14:00" },
                ].map((mod, i) => (
                  <div key={i} className="p-5 flex items-center justify-between hover:bg-gray-50">
                    <div className="flex gap-4 items-center">
                      <div className="w-12 h-12 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm">{mod.code.substring(3)}</div>
                      <div>
                        <p className="font-bold text-gray-800 text-base">{mod.title}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{mod.code} • Next: {mod.next}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-gray-800 mb-1">{mod.time}</p>
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-24 bg-gray-100 rounded-full h-1.5"><div className="bg-indigo-500 h-1.5 rounded-full" style={{width: `${mod.progress}%`}}></div></div>
                        <span className="text-[10px] font-bold text-gray-600">{mod.progress}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
               <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
                  <h3 className="font-bold text-gray-800 text-sm mb-4">University Tools</h3>
                  <div className="space-y-2">
                    <Link href="/dashboard/student/assignments" className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-gray-50 border border-gray-100 text-sm text-gray-700 font-medium"><span className="flex items-center gap-2"><FileText size={16} className="text-indigo-500"/> Submit Assignment</span> <ArrowRight size={14} className="text-gray-400"/></Link>
                    <Link href="/dashboard/student/sessions" className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-gray-50 border border-gray-100 text-sm text-gray-700 font-medium"><span className="flex items-center gap-2"><Users size={16} className="text-emerald-500"/> Join Study Group</span> <ArrowRight size={14} className="text-gray-400"/></Link>
                    <Link href="/dashboard/student/live" className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-gray-50 border border-gray-100 text-sm text-gray-700 font-medium"><span className="flex items-center gap-2"><Video size={16} className="text-purple-500"/> Watch Lecture</span> <ArrowRight size={14} className="text-gray-400"/></Link>
                  </div>
               </div>

               <div className="bg-indigo-50 rounded-xl border border-indigo-100 p-5">
                 <h3 className="font-bold text-indigo-700 text-sm mb-1">Need Help?</h3>
                 <p className="text-[11px] text-indigo-900 mb-3">Book a 1-on-1 session with a specialized University Tutor.</p>
                 <Link href="/dashboard/student/tutors" className="w-full bg-indigo-600 text-white py-2 rounded-lg text-xs font-bold hover:bg-indigo-700 flex items-center justify-center">Request a Tutor</Link>
               </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}