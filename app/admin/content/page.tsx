"use client";
import AdminSidebar from "@/components/sidebars/AdminSidebar";
import TopNav from "@/components/TopNav";
import { FileText, CheckCircle2, XCircle, Search, Edit3, Trash2, Eye, Filter, Plus } from "lucide-react";

export default function AdminContentPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <AdminSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1400px] mx-auto">
          
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">Content & Moderation</h1>
              <p className="text-sm text-gray-500">Review AI drafts, publish lessons, and moderate platform content.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"><Filter size={16}/> Filter</button>
              <button className="flex items-center gap-2 bg-[#1E1B4B] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-900"><Plus size={16}/> Create Content</button>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 font-medium">
                <tr>
                  <th className="px-6 py-4">Lesson Title</th>
                  <th className="px-6 py-4">Subject</th>
                  <th className="px-6 py-4">Author</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { title: "Introduction to Quadratic Equations", subject: "Mathematics - Gr 10", author: "AI Engine", status: "Pending Review", color: "bg-amber-100 text-amber-700" },
                  { title: "Newton's Laws of Motion", subject: "Physical Sciences - Gr 11", author: "Dr. Thabo Nkosi", status: "Approved", color: "bg-emerald-100 text-emerald-700" },
                  { title: "Analysis of 'Cry, the Beloved Country'", subject: "English - Gr 12", author: "AI Engine", status: "Pending Review", color: "bg-amber-100 text-amber-700" },
                  { title: "Basic Calculus: Limits", subject: "Mathematics - Gr 12", author: "Sarah Jenkins", status: "Approved", color: "bg-emerald-100 text-emerald-700" },
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-gray-800 flex items-center gap-2"><FileText size={16} className="text-gray-400"/> {item.title}</td>
                    <td className="px-6 py-4 text-gray-600">{item.subject}</td>
                    <td className="px-6 py-4 text-gray-600 font-medium">{item.author}</td>
                    <td className="px-6 py-4"><span className={`px-2.5 py-1 rounded-full text-xs font-bold ${item.color}`}>{item.status}</span></td>
                    <td className="px-6 py-4 text-right flex justify-end gap-2">
                       <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg" title="Preview"><Eye size={16}/></button>
                       <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg" title="Edit"><Edit3 size={16}/></button>
                       <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg" title="Delete"><Trash2 size={16}/></button>
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