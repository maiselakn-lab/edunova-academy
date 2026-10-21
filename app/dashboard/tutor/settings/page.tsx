"use client";
import TutorSidebar from "@/components/sidebars/TutorSidebar";
import TopNav from "@/components/TopNav";
import { User, Save, CreditCard, BookOpen, Bell, Shield } from "lucide-react";
import { useState } from "react";

export default function TutorSettingsPage() {
  const [tab, setTab] = useState("Profile");

  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <TutorSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1000px] mx-auto">
          
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">Settings</h1>
            <p className="text-sm text-gray-500">Manage your tutor account and preferences.</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
             <div className="flex border-b border-gray-200 bg-gray-50 overflow-x-auto">
               {[
                 { name: "Profile", icon: User },
                 { name: "Teaching", icon: BookOpen },
                 { name: "Payout", icon: CreditCard },
                 { name: "Notifications", icon: Bell },
                 { name: "Security", icon: Shield },
               ].map(t => (
                 <button key={t.name} onClick={() => setTab(t.name)} className={`px-6 py-4 text-sm font-bold whitespace-nowrap flex items-center gap-2 transition-colors ${tab === t.name ? 'text-emerald-600 border-b-2 border-emerald-600 bg-white' : 'text-gray-500 hover:text-gray-800'}`}>
                   <t.icon size={16}/> {t.name}
                 </button>
               ))}
             </div>

             <div className="p-8">
               {tab === "Profile" && (
                 <div className="space-y-6">
                   <div className="flex items-center gap-6 mb-8">
                     <div className="w-24 h-24 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl font-bold border-4 border-white shadow-sm">T</div>
                     <div>
                       <button className="border border-gray-300 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-50 mb-2">Change Photo</button>
                       <p className="text-xs text-gray-500">JPG, GIF or PNG. Max size 2MB</p>
                     </div>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                     <div><label className="block text-sm font-medium text-gray-700 mb-1">First Name</label><input type="text" defaultValue="Thabo" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" /></div>
                     <div><label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label><input type="text" defaultValue="Nkosi" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" /></div>
                   </div>
                   <div><label className="block text-sm font-medium text-gray-700 mb-1">Email</label><input type="email" defaultValue="thabo@edunova.com" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" /></div>
                   <div><label className="block text-sm font-medium text-gray-700 mb-1">Professional Bio</label><textarea rows={3} defaultValue="PhD in Mathematics with 10 years of teaching experience." className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"></textarea></div>
                 </div>
               )}
               
               {tab === "Teaching" && (
                 <div className="space-y-6">
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Subjects I Teach</label>
                     <div className="flex flex-wrap gap-2 mb-2">
                        {["Mathematics", "Physical Sciences", "Physics"].map(s => (
                          <span key={s} className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-200">{s} <button className="ml-1 text-emerald-500">×</button></span>
                        ))}
                     </div>
                     <button className="text-xs text-emerald-600 font-bold hover:underline">+ Add Subject</button>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                     <div><label className="block text-sm font-medium text-gray-700 mb-1">Hourly Rate (ZAR)</label><div className="relative"><span className="absolute left-3 top-2.5 text-gray-400 text-sm">R</span><input type="number" defaultValue="350" className="w-full border border-gray-300 rounded-lg pl-8 pr-3 py-2 text-sm" /></div></div>
                   </div>
                 </div>
               )}

               {tab === "Payout" && (
                 <div className="space-y-6">
                   <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-sm text-emerald-800 mb-4">Payouts are processed within 3-5 business days.</div>
                   <div><label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label><input type="text" defaultValue="FNB" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" /></div>
                   <div className="grid grid-cols-2 gap-4">
                     <div><label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label><input type="text" defaultValue="**** **** 4521" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" /></div>
                     <div><label className="block text-sm font-medium text-gray-700 mb-1">Branch Code</label><input type="text" defaultValue="250655" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" /></div>
                   </div>
                 </div>
               )}

               <div className="pt-6 mt-6 border-t border-gray-100 flex justify-end">
                 <button className="bg-[#10B981] hover:bg-emerald-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2"><Save size={16}/> Save Changes</button>
               </div>
             </div>
          </div>

        </div>
      </main>
    </div>
  );
}