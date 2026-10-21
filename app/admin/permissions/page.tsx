"use client";
import AdminSidebar from "@/components/sidebars/AdminSidebar";
import TopNav from "@/components/TopNav";
import { ShieldCheck, Lock, Save, Check } from "lucide-react";

export default function AdminPermissionsPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <AdminSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1000px] mx-auto">
          
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">Roles & Permissions</h1>
            <p className="text-sm text-gray-500">Control exactly what each type of user can access and do on the platform.</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
             <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="bg-indigo-100 p-3 rounded-full text-indigo-600"><ShieldCheck size={24}/></div>
                <div>
                   <h2 className="font-bold text-gray-800">System Roles</h2>
                   <p className="text-xs text-gray-500">Toggle access rights for each portal.</p>
                </div>
             </div>

             <div className="space-y-8">
                {/* Permissions Row */}
                <div className="grid grid-cols-4 gap-4 text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                   <div className="col-span-1">Feature / Action</div>
                   <div className="text-center">Learner</div>
                   <div className="text-center">Student</div>
                   <div className="text-center">Tutor</div>
                </div>

                {[
                  { action: "Access AI Tutor", learner: true, student: true, tutor: true },
                  { action: "Request Human Tutors", learner: false, student: true, tutor: false },
                  { action: "Create Lessons", learner: false, student: false, tutor: true },
                  { action: "Take Practice Tests", learner: true, student: true, tutor: false },
                  { action: "Upload Assignments", learner: false, student: true, tutor: false },
                  { action: "View Earnings", learner: false, student: false, tutor: true },
                ].map((perm, i) => (
                  <div key={i} className="grid grid-cols-4 gap-4 items-center py-3 border-b border-gray-50">
                     <div className="text-sm font-medium text-gray-700">{perm.action}</div>
                     <div className="flex justify-center">
                        <div className={`w-6 h-6 rounded flex items-center justify-center ${perm.learner ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-300'}`}>{perm.learner && <Check size={14}/>}</div>
                     </div>
                     <div className="flex justify-center">
                        <div className={`w-6 h-6 rounded flex items-center justify-center ${perm.student ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-300'}`}>{perm.student && <Check size={14}/>}</div>
                     </div>
                     <div className="flex justify-center">
                        <div className={`w-6 h-6 rounded flex items-center justify-center ${perm.tutor ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-300'}`}>{perm.tutor && <Check size={14}/>}</div>
                     </div>
                  </div>
                ))}
             </div>

             <div className="mt-8 flex justify-end">
                <button className="flex items-center gap-2 bg-[#1E1B4B] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-900 transition-colors">
                   <Save size={16}/> Save Permissions
                </button>
             </div>
          </div>

        </div>
      </main>
    </div>
  );
}