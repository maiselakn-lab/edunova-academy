"use client";
import StudentSidebar from "@/components/sidebars/StudentSidebar";
import TopNav from "@/components/TopNav";
import { FileText, AlertCircle } from "lucide-react";

export default function StudentAssignmentsPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <StudentSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1200px] mx-auto">
          <div className="mb-8"><h1 className="text-2xl font-bold text-gray-800 mb-1">Assignments</h1></div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8 flex items-center justify-between"><div className="flex items-center gap-4"><div className="bg-red-100 p-3 rounded-full text-red-600"><AlertCircle size={24}/></div><div><h3 className="font-bold text-red-800">Action Required: CSC3001</h3><p className="text-sm text-red-600">Due in 24 hours.</p></div></div><button className="bg-red-600 text-white px-6 py-2 rounded-lg font-bold text-sm">Submit</button></div>
          <div className="space-y-4">
            {[
              { title: "Graph Theory Implementation", module: "CSC3001", status: "Pending", color: "bg-amber-100 text-amber-700" },
              { title: "Database Normalization Report", module: "CSC2002", status: "Graded (85%)", color: "bg-emerald-100 text-emerald-700" },
            ].map((assign, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-5"><div className="w-12 h-12 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center"><FileText size={24}/></div><div><h3 className="font-bold text-gray-800 text-lg">{assign.title}</h3><p className="text-xs text-gray-500">{assign.module}</p></div></div>
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${assign.color}`}>{assign.status}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}