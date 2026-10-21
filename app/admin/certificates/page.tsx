"use client";
import AdminSidebar from "@/components/sidebars/AdminSidebar";
import TopNav from "@/components/TopNav";
import { Award, Search, Download, CheckCircle, Plus, Eye } from "lucide-react";

export default function CertificationPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <AdminSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1400px] mx-auto">
          
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">Certification Center</h1>
              <p className="text-sm text-gray-500">Issue verified certificates to learners and approve tutor qualifications.</p>
            </div>
            <button className="flex items-center gap-2 bg-[#0F172A] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors">
              <Plus size={16} /> Issue Certificate
            </button>
          </div>

          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm text-center">
              <p className="text-3xl font-bold text-gray-800">1,240</p>
              <p className="text-xs font-bold text-gray-500 uppercase mt-1">Certificates Issued</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm text-center">
              <p className="text-3xl font-bold text-gray-800">342</p>
              <p className="text-xs font-bold text-gray-500 uppercase mt-1">Verified Tutors</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm text-center">
              <p className="text-3xl font-bold text-gray-800">12</p>
              <p className="text-xs font-bold text-gray-500 uppercase mt-1">Pending Verification</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm text-center">
              <p className="text-3xl font-bold text-gray-800">98%</p>
              <p className="text-xs font-bold text-gray-500 uppercase mt-1">Verification Rate</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
             <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                <h2 className="font-bold text-gray-800">Recent Certificates</h2>
                <div className="flex items-center bg-white rounded-lg px-3 py-1.5 border border-gray-300">
                  <Search size={16} className="text-gray-400" />
                  <input type="text" placeholder="Search by name or certificate ID..." className="bg-transparent border-none outline-none ml-2 w-64 text-xs" />
                </div>
             </div>
             <table className="w-full text-left text-sm">
                <thead className="text-gray-600 font-medium border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3">Learner/Student</th>
                    <th className="px-6 py-3">Certificate Type</th>
                    <th className="px-6 py-3">Date Issued</th>
                    <th className="px-6 py-3">Cert ID</th>
                    <th className="px-6 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { name: "Maisela Norman", type: "Grade 10 Mathematics Mastery", date: "12 Oct 2026", id: "CERT-8901" },
                    { name: "Dr. Thabo Nkosi", type: "Verified Tutor Accreditation", date: "10 Oct 2026", id: "CERT-TR-42" },
                    { name: "Sipho Dlamini", type: "University Physics Excellence", date: "05 Oct 2026", id: "CERT-8902" },
                  ].map((cert, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-bold text-gray-800">{cert.name}</td>
                      <td className="px-6 py-4 text-gray-600">{cert.type}</td>
                      <td className="px-6 py-4 text-gray-500">{cert.date}</td>
                      <td className="px-6 py-4 font-mono text-xs text-gray-500">{cert.id}</td>
                      <td className="px-6 py-4 text-right flex justify-end gap-2">
                         <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg" title="View"><Eye size={16}/></button>
                         <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg" title="Download"><Download size={16}/></button>
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