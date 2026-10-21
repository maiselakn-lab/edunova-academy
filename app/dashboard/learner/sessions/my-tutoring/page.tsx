import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import { Calendar, Video, Clock, CheckCircle2, User, MessageSquare } from "lucide-react";

export default function MyTutoringPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <Sidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1000px] mx-auto">
          
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">My Tutoring Sessions</h1>
            <p className="text-sm text-gray-500">Manage your upcoming 1-on-1 sessions and view past feedback.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Upcoming Session Card */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
              <div className="bg-[#0070F3] px-5 py-3 flex justify-between items-center text-white">
                <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1"><Clock size={14}/> Upcoming Session</span>
                <span className="text-xs font-medium bg-white/20 px-2 py-0.5 rounded">Today</span>
              </div>
              <div className="p-6 flex-grow">
                <div className="flex items-center gap-4 mb-4">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150" alt="Tutor" className="w-14 h-14 rounded-full object-cover border border-gray-200" />
                  <div>
                    <h3 className="font-bold text-gray-800 text-base">Dr. Thabo Nkosi</h3>
                    <p className="text-xs text-gray-500">Mathematics • Grade 10</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 space-y-2 mb-4 text-sm">
                  <p className="flex items-center gap-2 text-gray-700"><Calendar size={16} className="text-gray-400"/> 19 Oct 2026</p>
                  <p className="flex items-center gap-2 text-gray-700"><Clock size={16} className="text-gray-400"/> 15:00 - 16:00 (60 mins)</p>
                </div>
                <div className="flex gap-2">
                   <button className="flex-grow bg-[#10B981] hover:bg-emerald-600 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
                     <Video size={16}/> Join Session
                   </button>
                   <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                     <MessageSquare size={16}/>
                   </button>
                </div>
              </div>
            </div>

            {/* Past Session Card */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col">
              <div className="px-5 py-3 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1"><CheckCircle2 size={14} className="text-emerald-500"/> Completed</span>
                <span className="text-xs text-gray-400">12 Oct 2026</span>
              </div>
              <div className="p-6 flex-grow">
                <div className="flex items-center gap-4 mb-4">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150" alt="Tutor" className="w-14 h-14 rounded-full object-cover border border-gray-200" />
                  <div>
                    <h3 className="font-bold text-gray-800 text-base">Sarah Jenkins</h3>
                    <p className="text-xs text-gray-500">English • Grade 10</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <p className="text-xs font-semibold text-gray-700 mb-1">Your Rating:</p>
                  <div className="flex text-yellow-500 text-sm">★★★★★</div>
                  <p className="text-xs text-gray-500 mt-1">"Sarah was incredibly helpful with my poetry analysis. Highly recommend!"</p>
                </div>
                <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
                  View Session Notes
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}