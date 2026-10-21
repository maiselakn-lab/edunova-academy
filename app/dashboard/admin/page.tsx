"use client";
import AdminSidebar from "@/components/sidebars/AdminSidebar";
import TopNav from "@/components/TopNav";
import { 
  Users, TrendingUp, DollarSign, AlertTriangle, ShieldCheck, Activity, 
  ArrowRight, Video, GraduationCap, Building2, Server, Headphones, 
  UserPlus, FileText, CheckCircle2, Clock, Globe
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <AdminSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1600px] mx-auto">
          
          {/* Header */}
          <div className="mb-8 flex justify-between items-end">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">Command Center</h1>
              <p className="text-sm text-gray-500">Real-time overview of the entire EduNova platform.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> System Healthy
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200">
                <Server size={14}/> 99.9% Uptime
              </div>
            </div>
          </div>

          {/* KPI Stats Row */}
          <div className="grid grid-cols-5 gap-4 mb-8">
             <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
               <div className="flex justify-between items-start mb-2">
                 <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600"><Users size={18}/></div>
                 <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">+15%</span>
               </div>
               <p className="text-2xl font-bold text-gray-800">12,450</p>
               <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">Total Users</p>
             </div>
             <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
               <div className="flex justify-between items-start mb-2">
                 <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600"><DollarSign size={18}/></div>
                 <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">+22%</span>
               </div>
               <p className="text-2xl font-bold text-gray-800">R 245k</p>
               <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">Revenue (MTD)</p>
             </div>
             <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
               <div className="flex justify-between items-start mb-2">
                 <div className="bg-purple-100 p-2 rounded-lg text-purple-600"><Video size={18}/></div>
                 <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded">LIVE</span>
               </div>
               <p className="text-2xl font-bold text-gray-800">14</p>
               <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">Active Sessions</p>
             </div>
             <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
               <div className="flex justify-between items-start mb-2">
                 <div className="bg-amber-100 p-2 rounded-lg text-amber-600"><AlertTriangle size={18}/></div>
               </div>
               <p className="text-2xl font-bold text-gray-800">12</p>
               <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">Pending Tutor Apps</p>
             </div>
             <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
               <div className="flex justify-between items-start mb-2">
                 <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Headphones size={18}/></div>
               </div>
               <p className="text-2xl font-bold text-gray-800">5</p>
               <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">Open Support Tickets</p>
             </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            
            {/* Traffic & Activity Monitor */}
            <div className="col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold text-gray-800 flex items-center gap-2"><Activity size={18} className="text-indigo-500"/> Live Platform Traffic</h2>
                <span className="text-xs text-gray-500">Last 24 hours</span>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-indigo-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-indigo-700">4,120</p>
                  <p className="text-[10px] font-bold text-indigo-500 uppercase">AI Tutor Requests</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-700">1,890</p>
                  <p className="text-[10px] font-bold text-emerald-500 uppercase">isiZulu Translations</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-amber-700">950</p>
                  <p className="text-[10px] font-bold text-amber-500 uppercase">Sepedi Translations</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1"><span className="text-gray-600 font-medium">Learner Portal Traffic</span><span className="font-bold text-gray-800">68%</span></div>
                  <div className="w-full bg-gray-100 rounded-full h-2"><div className="bg-blue-500 h-2 rounded-full" style={{ width: '68%' }}></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1"><span className="text-gray-600 font-medium">Student Portal Traffic</span><span className="font-bold text-gray-800">45%</span></div>
                  <div className="w-full bg-gray-100 rounded-full h-2"><div className="bg-indigo-500 h-2 rounded-full" style={{ width: '45%' }}></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1"><span className="text-gray-600 font-medium">Tutor Portal Traffic</span><span className="font-bold text-gray-800">22%</span></div>
                  <div className="w-full bg-gray-100 rounded-full h-2"><div className="bg-emerald-500 h-2 rounded-full" style={{ width: '22%' }}></div></div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="font-bold text-gray-800 mb-4">Quick Actions</h2>
              <div className="space-y-2">
                <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 border border-gray-100 text-sm text-gray-700 font-medium transition-colors">
                  <span className="flex items-center gap-3"><UserPlus size={18} className="text-indigo-500"/> Create New User</span> <ArrowRight size={14} className="text-gray-400"/>
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 border border-gray-100 text-sm text-gray-700 font-medium transition-colors">
                  <span className="flex items-center gap-3"><Video size={18} className="text-emerald-500"/> Start a Live Class</span> <ArrowRight size={14} className="text-gray-400"/>
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 border border-gray-100 text-sm text-gray-700 font-medium transition-colors">
                  <span className="flex items-center gap-3"><GraduationCap size={18} className="text-blue-500"/> Review Tutor Apps</span> <ArrowRight size={14} className="text-gray-400"/>
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 border border-gray-100 text-sm text-gray-700 font-medium transition-colors">
                  <span className="flex items-center gap-3"><Building2 size={18} className="text-purple-500"/> Add Institution</span> <ArrowRight size={14} className="text-gray-400"/>
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 border border-gray-100 text-sm text-gray-700 font-medium transition-colors">
                  <span className="flex items-center gap-3"><FileText size={18} className="text-amber-500"/> Moderate Content</span> <ArrowRight size={14} className="text-gray-400"/>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Row: Live Sessions & Recent Activity */}
          <div className="grid grid-cols-2 gap-6">
            {/* Live Sessions Preview */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="font-bold text-gray-800 flex items-center gap-2"><Video size={18} className="text-red-500"/> Live Sessions</h2>
                <button className="text-xs text-blue-600 font-medium hover:underline">View All Monitor</button>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { tutor: "Dr. Thabo Nkosi", student: "Maisela Norman", subject: "Mathematics - Gr 10", time: "45 min" },
                  { tutor: "AI Tutor", student: "Sipho Dlamini", subject: "Physical Sciences", time: "12 min" },
                  { tutor: "Sarah Jenkins", student: "Lerato Khumalo", subject: "English - Gr 12", time: "1h 20m" },
                ].map((session, i) => (
                  <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <div>
                        <p className="font-bold text-gray-800 text-sm">{session.subject}</p>
                        <p className="text-xs text-gray-500">{session.tutor} → {session.student}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium text-gray-500">{session.time}</span>
                      <button className="bg-[#0F172A] text-white px-3 py-1.5 rounded text-xs font-bold hover:bg-slate-800">Join</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent System Activity */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-bold text-gray-800">Recent Activity</h2>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex items-start gap-3 text-sm">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                  <p className="text-gray-600"><span className="font-bold text-gray-800">Dr. Thabo Nkosi</span> was approved as a tutor.</p>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-blue-500 shrink-0"></div>
                  <p className="text-gray-600"><span className="font-bold text-gray-800">New Module Added:</span> Grade 11 Pure Mathematics.</p>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-amber-500 shrink-0"></div>
                  <p className="text-gray-600"><span className="font-bold text-gray-800">Flagged Review:</span> A learner reported a tutor for missing a session.</p>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-purple-500 shrink-0"></div>
                  <p className="text-gray-600"><span className="font-bold text-gray-800">Payment Processed:</span> R 1,500 payout to Dr. Thabo Nkosi.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}