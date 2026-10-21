"use client";
import TutorSidebar from "@/components/sidebars/TutorSidebar";
import TopNav from "@/components/TopNav";
import { CheckCircle2, XCircle, Clock, BookOpen, User, Mail, Calendar, Search } from "lucide-react";

export default function TutorRequestsPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <TutorSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1200px] mx-auto">
          
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">Session Requests</h1>
              <p className="text-sm text-gray-500">Manage incoming tutoring requests from learners and students.</p>
            </div>
            <div className="flex items-center bg-white rounded-lg px-4 py-2 w-72 border border-gray-300 shadow-sm">
              <Search size={18} className="text-gray-400" />
              <input type="text" placeholder="Search requests..." className="bg-transparent border-none outline-none ml-3 w-full text-sm text-gray-700" />
            </div>
          </div>

          <div className="space-y-4">
            {/* Pending Request 1 */}
            <div className="bg-white rounded-xl border border-amber-200 shadow-sm overflow-hidden">
              <div className="bg-amber-50 px-4 py-2 border-b border-amber-200 flex justify-between items-center">
                <span className="text-xs font-bold text-amber-700 flex items-center gap-1"><Clock size={14}/> New Request (Pending)</span>
                <span className="text-[10px] text-amber-600 font-medium">Received 10 mins ago</span>
              </div>
              <div className="p-6 flex flex-col md:flex-row gap-6">
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">L</div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">Lerato Khumalo</h3>
                      <p className="text-sm text-gray-500 flex items-center gap-1"><BookOpen size={14}/> Grade 10 Learner</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-100">
                    <p className="text-xs font-bold text-gray-500 uppercase mb-1">Topic Requested</p>
                    <p className="text-sm font-medium text-gray-800">"Struggling with Calculus - specifically derivatives and limits."</p>
                  </div>
                  <div className="flex gap-6 text-sm">
                    <p className="flex items-center gap-2 text-gray-600"><Calendar size={16} className="text-gray-400"/> Requested: Today, 15:00</p>
                    <p className="flex items-center gap-2 text-gray-600"><Mail size={16} className="text-gray-400"/> lerato@wits.ac.za</p>
                  </div>
                </div>
                <div className="flex md:flex-col gap-2 shrink-0 justify-center">
                  <button className="flex items-center justify-center gap-2 bg-[#10B981] hover:bg-emerald-700 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-colors"><CheckCircle2 size={18}/> Accept Request</button>
                  <button className="flex items-center justify-center gap-2 border border-gray-300 text-gray-600 hover:bg-gray-50 px-6 py-2.5 rounded-lg font-medium text-sm transition-colors"><XCircle size={18}/> Decline</button>
                </div>
              </div>
            </div>

            {/* Pending Request 2 */}
            <div className="bg-white rounded-xl border border-amber-200 shadow-sm overflow-hidden">
              <div className="bg-amber-50 px-4 py-2 border-b border-amber-200 flex justify-between items-center">
                <span className="text-xs font-bold text-amber-700 flex items-center gap-1"><Clock size={14}/> New Request (Pending)</span>
                <span className="text-[10px] text-amber-600 font-medium">Received 1 hour ago</span>
              </div>
              <div className="p-6 flex flex-col md:flex-row gap-6">
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-lg">S</div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">Sipho Dlamini</h3>
                      <p className="text-sm text-gray-500 flex items-center gap-1"><BookOpen size={14}/> University Student</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-100">
                    <p className="text-xs font-bold text-gray-500 uppercase mb-1">Topic Requested</p>
                    <p className="text-sm font-medium text-gray-800">"Need help with Newton's Laws of Motion for my upcoming exam."</p>
                  </div>
                  <div className="flex gap-6 text-sm">
                    <p className="flex items-center gap-2 text-gray-600"><Calendar size={16} className="text-gray-400"/> Requested: Tomorrow, 10:00</p>
                    <p className="flex items-center gap-2 text-gray-600"><Mail size={16} className="text-gray-400"/> sipho@uct.ac.za</p>
                  </div>
                </div>
                <div className="flex md:flex-col gap-2 shrink-0 justify-center">
                  <button className="flex items-center justify-center gap-2 bg-[#10B981] hover:bg-emerald-700 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-colors"><CheckCircle2 size={18}/> Accept Request</button>
                  <button className="flex items-center justify-center gap-2 border border-gray-300 text-gray-600 hover:bg-gray-50 px-6 py-2.5 rounded-lg font-medium text-sm transition-colors"><XCircle size={18}/> Decline</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}