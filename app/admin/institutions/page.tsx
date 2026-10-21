"use client";
import AdminSidebar from "@/components/sidebars/AdminSidebar";
import TopNav from "@/components/TopNav";
import { Building2, Plus, Search, Users, ExternalLink, Mail } from "lucide-react";

export default function InstitutionsPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <AdminSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1400px] mx-auto">
          
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">Institution Management</h1>
              <p className="text-sm text-gray-500">Manage schools, colleges, and universities on the platform.</p>
            </div>
            <button className="flex items-center gap-2 bg-[#0F172A] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors">
              <Plus size={16} /> Add Institution
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              { name: "University of Cape Town", type: "University", users: 450, plan: "Enterprise", status: "Active" },
              { name: "Wits University", type: "University", users: 320, plan: "Enterprise", status: "Active" },
              { name: "Crawford College", type: "Secondary School", users: 800, plan: "School Pro", status: "Active" },
            ].map((inst, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600"><Building2 size={24}/></div>
                  <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full">{inst.status}</span>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-1">{inst.name}</h3>
                <p className="text-xs text-gray-500 mb-6">{inst.type} • {inst.plan}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs font-bold text-gray-600 flex items-center gap-1"><Users size={14}/> {inst.users} Users</span>
                  <button className="text-sm text-[#0F172A] font-bold hover:underline flex items-center gap-1">Manage <ExternalLink size={12}/></button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}