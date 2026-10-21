"use client";
import AdminSidebar from "@/components/sidebars/AdminSidebar";
import TopNav from "@/components/TopNav";
import { Headphones, Search, MessageSquare, AlertCircle, CheckCircle2 } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <AdminSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1200px] mx-auto">
          
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">Support Center</h1>
            <p className="text-sm text-gray-500">Resolve issues reported by learners, students, and tutors.</p>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
             <div className="bg-red-50 p-5 rounded-xl border border-red-200">
               <h4 className="font-bold text-red-800 flex items-center gap-2 mb-1"><AlertCircle size={16}/> Urgent Tickets</h4>
               <p className="text-3xl font-bold text-red-900">2</p>
             </div>
             <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
               <h4 className="font-bold text-gray-600 flex items-center gap-2 mb-1"><MessageSquare size={16}/> Open Tickets</h4>
               <p className="text-3xl font-bold text-gray-900">14</p>
             </div>
             <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-200">
               <h4 className="font-bold text-emerald-800 flex items-center gap-2 mb-1"><CheckCircle2 size={16}/> Resolved Today</h4>
               <p className="text-3xl font-bold text-emerald-900">8</p>
             </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
             <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                <h2 className="font-bold text-gray-800">Active Tickets</h2>
                <div className="flex items-center bg-white rounded-lg px-3 py-1.5 border border-gray-300">
                  <Search size={16} className="text-gray-400" />
                  <input type="text" placeholder="Search tickets..." className="bg-transparent border-none outline-none ml-2 w-64 text-xs" />
                </div>
             </div>
             <div className="divide-y divide-gray-100">
                {[
                  { subject: "Tutor missed our scheduled session", user: "Maisela Norman (Learner)", time: "10 mins ago", priority: "High", color: "bg-red-100 text-red-700" },
                  { subject: "Cannot upload my assignment file", user: "Sipho Dlamini (Student)", time: "2 hours ago", priority: "Medium", color: "bg-amber-100 text-amber-700" },
                  { subject: "How do I get my certificate?", user: "Lerato Khumalo (Learner)", time: "5 hours ago", priority: "Low", color: "bg-blue-100 text-blue-700" },
                ].map((ticket, i) => (
                  <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500"><Headphones size={20}/></div>
                      <div>
                        <p className="font-bold text-gray-800 text-sm">{ticket.subject}</p>
                        <p className="text-xs text-gray-500">{ticket.user} • {ticket.time}</p>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${ticket.color}`}>{ticket.priority} Priority</span>
                  </div>
                ))}
             </div>
          </div>

        </div>
      </main>
    </div>
  );
}