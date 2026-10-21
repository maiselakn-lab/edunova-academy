"use client";
import AdminSidebar from "@/components/sidebars/AdminSidebar";
import TopNav from "@/components/TopNav";
import { Search, Filter, MoreHorizontal, Mail, GraduationCap, Video, UserPlus, Users } from "lucide-react";

export default function ManageLearnersPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <AdminSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1400px] mx-auto">
          
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">Manage Learners</h1>
              <p className="text-sm text-gray-500">View all Primary and Secondary school learners.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"><Filter size={16}/> Filter</button>
              <button className="flex items-center gap-2 bg-[#0F172A] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors">
                <UserPlus size={16} /> Add Learner
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-8">
             <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm"><p className="text-2xl font-bold text-gray-800">8,200</p><p className="text-xs text-gray-500 font-medium">Total Learners</p></div>
             <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm"><p className="text-2xl font-bold text-gray-800">4,500</p><p className="text-xs text-gray-500 font-medium">Secondary School</p></div>
             <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm"><p className="text-2xl font-bold text-gray-800">3,700</p><p className="text-xs text-gray-500 font-medium">Primary School</p></div>
             <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm"><p className="text-2xl font-bold text-gray-800">150</p><p className="text-xs text-gray-500 font-medium">Study Groups</p></div>
          </div>

          <div className="flex items-center bg-white rounded-lg px-4 py-2 w-96 border border-gray-300 shadow-sm mb-6">
            <Search size={18} className="text-gray-400" />
            <input type="text" placeholder="Search learners..." className="bg-transparent border-none outline-none ml-3 w-full text-sm text-gray-700" />
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 font-medium">
                <tr>
                  <th className="px-6 py-4">Learner</th>
                  <th className="px-6 py-4">Grade</th>
                  <th className="px-6 py-4">School</th>
                  <th className="px-6 py-4">Groups</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: "Maisela Norman", email: "maisela@test.com", grade: "Grade 10", school: "Crawford College", groups: "Maths Support", status: "Active" },
                  { name: "Sipho Zulu", email: "sipho@school.com", grade: "Grade 8", school: "Rosebank High", groups: "None", status: "Active" },
                  { name: "Naledi Mokoena", email: "naledi@school.com", grade: "Grade 12", school: "Pretoria Boys High", groups: "Exam Prep Group", status: "Active" },
                ].map((learner, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm border border-blue-200">{learner.name.charAt(0)}</div>
                        <div><p className="font-bold text-gray-800">{learner.name}</p><p className="text-xs text-gray-500 flex items-center gap-1"><Mail size={12}/> {learner.email}</p></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-700">{learner.grade}</td>
                    <td className="px-6 py-4 text-gray-600">{learner.school}</td>
                    <td className="px-6 py-4"><span className={`px-2.5 py-1 rounded-full text-xs font-bold ${learner.groups !== 'None' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500'}`}>{learner.groups}</span></td>
                    <td className="px-6 py-4"><span className={`flex items-center gap-1.5 text-xs font-bold ${learner.status === 'Active' ? 'text-emerald-600' : 'text-red-600'}`}><span className={`w-1.5 h-1.5 rounded-full ${learner.status === 'Active' ? 'bg-emerald-500' : 'bg-red-500'}`}></span> {learner.status}</span></td>
                    <td className="px-6 py-4 text-right flex justify-end gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg" title="Join Session"><Video size={16}/></button>
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