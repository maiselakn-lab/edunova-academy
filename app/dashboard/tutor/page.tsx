"use client";
import TutorSidebar from "@/components/sidebars/TutorSidebar";
import TopNav from "@/components/TopNav";
import { DollarSign, Users, Calendar, Star, CheckCircle2, ChevronRight, Video, Clock, TrendingUp, AlertCircle } from "lucide-react";

export default function TutorDashboard() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <TutorSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1400px] mx-auto">
          
          {/* Header */}
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">Welcome back, Dr. Thabo</h1>
              <p className="text-sm text-gray-500">Here is what is happening with your tutoring business today.</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> Profile Approved
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
               <div className="flex justify-between items-start mb-2">
                 <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600"><DollarSign size={20}/></div>
                 <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">+12%</span>
               </div>
               <p className="text-2xl font-bold text-gray-800">R 4,250</p>
               <p className="text-xs text-gray-500 font-medium">Earnings this month</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
               <div className="flex justify-between items-start mb-2">
                 <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Users size={20}/></div>
               </div>
               <p className="text-2xl font-bold text-gray-800">14</p>
               <p className="text-xs text-gray-500 font-medium">Active Students</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
               <div className="flex justify-between items-start mb-2">
                 <div className="bg-purple-100 p-2 rounded-lg text-purple-600"><Calendar size={20}/></div>
               </div>
               <p className="text-2xl font-bold text-gray-800">6</p>
               <p className="text-xs text-gray-500 font-medium">Sessions today</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
               <div className="flex justify-between items-start mb-2">
                 <div className="bg-yellow-100 p-2 rounded-lg text-yellow-600"><Star size={20}/></div>
               </div>
               <p className="text-2xl font-bold text-gray-800">4.9</p>
               <p className="text-xs text-gray-500 font-medium">Average Rating</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Upcoming Sessions */}
            <div className="col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="font-bold text-gray-800 flex items-center gap-2"><Clock size={18} className="text-emerald-500"/> Upcoming Sessions</h2>
                <button className="text-sm text-emerald-600 font-medium hover:underline">View Full Schedule</button>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { name: "Maisela Norman", subject: "Mathematics - Grade 10", time: "Today, 15:00 - 16:00", type: "1-on-1", status: "Starting Soon" },
                  { name: "Sipho Dlamini", subject: "Physical Sciences - Grade 11", time: "Today, 17:00 - 18:00", type: "1-on-1", status: "Confirmed" },
                  { name: "Study Group A (4 Students)", subject: "Mathematics - Grade 10", time: "Tomorrow, 10:00 - 11:30", type: "Group", status: "Confirmed" },
                ].map((session, i) => (
                  <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                        {session.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-sm">{session.name}</p>
                        <p className="text-xs text-gray-500">{session.subject} • {session.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-gray-800">{session.time}</p>
                      <button className={`text-xs text-white px-3 py-1 rounded mt-1 font-medium ${session.status === 'Starting Soon' ? 'bg-red-500 animate-pulse' : 'bg-[#10B981] hover:bg-emerald-600'}`}>
                        {session.status === 'Starting Soon' ? 'Join Now' : 'Start Session'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pending Requests & Alerts */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="font-bold text-gray-800 flex items-center gap-2"><AlertCircle size={18} className="text-amber-500"/> New Requests</h2>
                  <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full">2 Pending</span>
                </div>
                <div className="divide-y divide-gray-100">
                  {[
                    { name: "Lerato K.", topic: "Struggling with Calculus", time: "10 mins ago" },
                    { name: "John M.", topic: "Need help with Newton's Laws", time: "1 hour ago" },
                  ].map((req, i) => (
                    <div key={i} className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-bold text-gray-800 text-sm">{req.name}</p>
                        <span className="text-[10px] text-gray-500">{req.time}</span>
                      </div>
                      <p className="text-xs text-gray-500 mb-3">{req.topic}</p>
                      <div className="flex gap-2">
                        <button className="flex-1 bg-emerald-600 text-white py-1.5 rounded text-xs font-medium hover:bg-emerald-700">Accept</button>
                        <button className="flex-1 border border-gray-300 text-gray-600 py-1.5 rounded text-xs font-medium hover:bg-gray-50">Decline</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#F0FDF4] rounded-xl border border-emerald-200 p-4">
                <h3 className="font-bold text-emerald-800 text-sm mb-1">Admin Notice</h3>
                <p className="text-[10px] text-emerald-900 leading-snug">Your Physics assessment passed with 85%. You are now eligible to teach Grade 12 Physics.</p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}