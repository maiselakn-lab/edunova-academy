"use client";
import StudentSidebar from "@/components/sidebars/StudentSidebar";
import TopNav from "@/components/TopNav";
import { User, Save } from "lucide-react";

export default function StudentSettingsPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <StudentSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[800px] mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
             <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2"><User size={18} className="text-indigo-500"/> Profile</h2>
             <div className="space-y-4">
               <div><label className="block text-sm font-medium mb-1">Full Name</label><input type="text" defaultValue="Sipho Dlamini" className="w-full border rounded-lg px-3 py-2 text-sm" /></div>
               <div><label className="block text-sm font-medium mb-1">University</label><input type="text" defaultValue="University of Cape Town" className="w-full border rounded-lg px-3 py-2 text-sm" /></div>
               <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm font-bold flex items-center gap-2"><Save size={16}/> Save Changes</button>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}