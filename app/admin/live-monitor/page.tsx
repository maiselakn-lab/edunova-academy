"use client";
import AdminSidebar from "@/components/sidebars/AdminSidebar";
import TopNav from "@/components/TopNav";
import { Video, Users, Clock, Eye, Play, AlertCircle } from "lucide-react";

export default function LiveMonitorPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <AdminSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1400px] mx-auto">
          
          <div className="mb-8 flex justify-between items-end">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">Live Session Monitor</h1>
              <p className="text-sm text-gray-500">Observe real-time tutoring sessions and AI classroom activity.</p>
            </div>
            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg font-bold text-sm border border-emerald-200">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> 14 Sessions Currently Active
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              { tutor: "Dr. Thabo Nkosi", student: "Maisela Norman", subject: "Mathematics - Gr 10", time: "45 min elapsed", type: "1-on-1 Human Tutoring", color: "border-emerald-500" },
              { tutor: "AI Tutor", student: "Sipho Dlamini", subject: "Physical Sciences", time: "12 min elapsed", type: "AI Interactive Classroom", color: "border-blue-500" },
              { tutor: "Sarah Jenkins", student: "Lerato Khumalo", subject: "English - Gr 12", time: "1h 20m elapsed", type: "Group Session (4 students)", color: "border-purple-500" },
            ].map((session, i) => (
              <div key={i} className={`bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden border-t-4 ${session.color}`}>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-gray-800">{session.subject}</h3>
                      <p className="text-xs text-gray-500">{session.type}</p>
                    </div>
                    <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> LIVE</span>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-700"><div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">T</div> Tutor: <span className="font-semibold">{session.tutor}</span></div>
                    <div className="flex items-center gap-2 text-sm text-gray-700"><div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs">S</div> Learner: <span className="font-semibold">{session.student}</span></div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs font-medium text-gray-500 flex items-center gap-1"><Clock size={12}/> {session.time}</span>
                    <button className="bg-[#0F172A] text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-slate-800 transition-colors"><Eye size={14}/> Join & Observe</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-amber-50 border border-amber-200 p-4 rounded-xl flex gap-4 items-start">
             <AlertCircle className="text-amber-600 shrink-0" size={24}/>
             <div>
               <h4 className="font-bold text-amber-800">Moderation Note</h4>
               <p className="text-sm text-amber-700 mt-1">As an Admin, joining a session will silently observe the chat and video feed. Both the tutor and student will be notified that an administrator has joined for quality assurance purposes.</p>
             </div>
          </div>

        </div>
      </main>
    </div>
  );
}