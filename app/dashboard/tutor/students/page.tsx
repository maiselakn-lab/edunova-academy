"use client";
import TutorSidebar from "@/components/sidebars/TutorSidebar";
import TopNav from "@/components/TopNav";
import { Search, Filter, MessageSquare, MoreHorizontal, User, Mail, TrendingUp, Users } from "lucide-react";

export default function TutorStudentsPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <TutorSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1200px] mx-auto">
          
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">My Students</h1>
              <p className="text-sm text-gray-500">Track the progress of all learners and students you teach.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"><Filter size={16}/> Filter</button>
              <div className="flex items-center bg-white rounded-lg px-4 py-2 w-72 border border-gray-300 shadow-sm">
                <Search size={18} className="text-gray-400" />
                <input type="text" placeholder="Search students..." className="bg-transparent border-none outline-none ml-3 w-full text-sm text-gray-700" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm"><p className="text-2xl font-bold text-gray-800">28</p><p className="text-xs text-gray-500 font-medium">Total Students</p></div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm"><p className="text-2xl font-bold text-gray-800">14</p><p className="text-xs text-gray-500 font-medium">Active This Week</p></div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm"><p className="text-2xl font-bold text-gray-800">92%</p><p className="text-xs text-gray-500 font-medium">Average Attendance</p></div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm"><p className="text-2xl font-bold text-gray-800">+8%</p><p className="text-xs text-gray-500 font-medium">Average Grade Improvement</p></div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 font-medium">
                <tr>
                  <th className="px-6 py-4">Student</th>
                  <th className="px-6 py-4">Subject</th>
                  <th className="px-6 py-4">Progress</th>
                  <th className="px-6 py-4">Next Session</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: "Maisela Norman", email: "maisela@test.com", subject: "Mathematics - Gr 10", progress: 78, next: "Today, 15:00" },
                  { name: "Sipho Dlamini", email: "sipho@uct.ac.za", subject: "Physics - Gr 11", progress: 82, next: "Tomorrow, 10:00" },
                  { name: "Lerato Khumalo", email: "lerato@wits.ac.za", subject: "English - Gr 12", progress: 90, next: "Friday, 14:00" },
                  { name: "Thandi Mthembu", email: "thandi@dut.ac.za", subject: "Mathematics - Gr 10", progress: 45, next: "Wed, 09:00" },
                ].map((student, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-sm">{student.name.charAt(0)}</div>
                        <div>
                          <p className="font-bold text-gray-800">{student.name}</p>
                          <p className="text-xs text-gray-500 flex items-center gap-1"><Mail size={12}/> {student.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600 font-medium">{student.subject}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-100 rounded-full h-2"><div className={`h-2 rounded-full ${student.progress > 70 ? 'bg-emerald-500' : 'bg-amber-500'}`} style={{ width: `${student.progress}%` }}></div></div>
                        <span className="text-xs font-bold text-gray-700">{student.progress}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-500">{student.next}</td>
                    <td className="px-6 py-4 text-right flex justify-end gap-2">
                      <button className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg" title="Message"><MessageSquare size={16}/></button>
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"><MoreHorizontal size={18}/></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </main>
    </div>
  );
}