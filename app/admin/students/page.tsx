"use client";
import AdminSidebar from "@/components/sidebars/AdminSidebar";
import TopNav from "@/components/TopNav";
import { Search, Users, Plus, Filter, MoreHorizontal, Mail, GraduationCap, Video, UserPlus } from "lucide-react";

export default function ManageStudentsPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <AdminSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1400px] mx-auto">
          
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">Manage Students & Groups</h1>
              <p className="text-sm text-gray-500">View all enrolled students, manage their access, and create study groups.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"><Filter size={16}/> Filter</button>
              <button className="flex items-center gap-2 bg-[#0F172A] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors">
                <Plus size={16} /> Create Group
              </button>
            </div>
          </div>

          {/* Student Stats */}
          <div className="grid grid-cols-4 gap-4 mb-8">
             <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
               <p className="text-2xl font-bold text-gray-800">3,450</p>
               <p className="text-xs text-gray-500 font-medium">Total Students</p>
             </div>
             <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
               <p className="text-2xl font-bold text-gray-800">1,240</p>
               <p className="text-xs text-gray-500 font-medium">Active Subscriptions</p>
             </div>
             <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
               <p className="text-2xl font-bold text-gray-800">45</p>
               <p className="text-xs text-gray-500 font-medium">Study Groups</p>
             </div>
             <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
               <p className="text-2xl font-bold text-gray-800">12</p>
               <p className="text-xs text-gray-500 font-medium">Institutional Partners</p>
             </div>
          </div>

          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-lg px-4 py-2 w-96 border border-gray-300 shadow-sm mb-6">
            <Search size={18} className="text-gray-400" />
            <input type="text" placeholder="Search by student name or email..." className="bg-transparent border-none outline-none ml-3 w-full text-sm text-gray-700" />
          </div>

          {/* Students Table */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 font-medium">
                <tr>
                  <th className="px-6 py-4">Student</th>
                  <th className="px-6 py-4">Institution</th>
                  <th className="px-6 py-4">Modules</th>
                  <th className="px-6 py-4">Groups</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: "Sipho Dlamini", email: "sipho@uct.ac.za", inst: "University of Cape Town", modules: "CSC3001, CSC2002", groups: "Study Group A", status: "Active" },
                  { name: "Lerato Khumalo", email: "lerato@wits.ac.za", inst: "Wits University", modules: "MATH2001, PHYS1002", groups: "None", status: "Active" },
                  { name: "Thandi Mthembu", email: "thandi@dut.ac.za", inst: "DUT", modules: "ENG1001", groups: "Maths Support Group", status: "Suspended" },
                ].map((student, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm border border-indigo-200">
                          {student.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-gray-800">{student.name}</p>
                          <p className="text-xs text-gray-500 flex items-center gap-1"><Mail size={12}/> {student.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600 font-medium">{student.inst}</td>
                    <td className="px-6 py-4 text-gray-500 text-xs">{student.modules}</td>
                    <td className="px-6 py-4">
                       <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${student.groups !== 'None' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500'}`}>
                         {student.groups}
                       </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`flex items-center gap-1.5 text-xs font-bold ${student.status === 'Active' ? 'text-emerald-600' : 'text-red-600'}`}>
                         <span className={`w-1.5 h-1.5 rounded-full ${student.status === 'Active' ? 'bg-emerald-500' : 'bg-red-500'}`}></span> {student.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right flex justify-end gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg" title="Join Session"><Video size={16}/></button>
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg" title="Manage"><MoreHorizontal size={18}/></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Groups Section */}
          <div className="mt-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2"><Users size={20} className="text-indigo-500"/> Active Study Groups</h2>
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: "Grade 10 Maths Support", members: 8, tutor: "Dr. Thabo Nkosi", next: "Tomorrow 15:00" },
                { name: "University Physics Study Group", members: 5, tutor: "Sarah Jenkins", next: "Friday 10:00" },
                { name: "English Exam Prep", members: 12, tutor: "AI Tutor", next: "Today 18:00" },
              ].map((group, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-800 text-sm mb-1">{group.name}</h3>
                  <p className="text-xs text-gray-500 mb-3">{group.members} Members • {group.tutor}</p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-indigo-600 font-medium">Next: {group.next}</span>
                    <button className="text-[#0F172A] font-bold hover:underline">Manage</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}