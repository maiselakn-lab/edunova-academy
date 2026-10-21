"use client";
import LearnerSidebar from "@/components/sidebars/LearnerSidebar";
import TopNav from "@/components/TopNav";
import { User, Globe, Bell, Save, Shield } from "lucide-react";
import { useState } from "react";

export default function LearnerSettingsPage() {
  const [tab, setTab] = useState("Profile");

  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <LearnerSidebar />
      <TopNav />
      
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[900px] mx-auto">
          
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">Settings</h1>
            <p className="text-sm text-gray-500">Manage your account preferences and learning language.</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
             
             {/* Tabs */}
             <div className="flex border-b border-gray-200 bg-gray-50 overflow-x-auto">
               {[
                 { name: "Profile", icon: User },
                 { name: "Language", icon: Globe },
                 { name: "Notifications", icon: Bell },
                 { name: "Security", icon: Shield },
               ].map(t => (
                 <button 
                   key={t.name} 
                   onClick={() => setTab(t.name)} 
                   className={`px-6 py-4 text-sm font-bold whitespace-nowrap flex items-center gap-2 transition-colors ${
                     tab === t.name ? 'text-blue-600 border-b-2 border-blue-600 bg-white' : 'text-gray-500 hover:text-gray-800'
                   }`}
                 >
                   <t.icon size={16}/> {t.name}
                 </button>
               ))}
             </div>

             {/* Content */}
             <div className="p-8">
               
               {tab === "Profile" && (
                 <div className="space-y-6">
                   <div className="flex items-center gap-6 mb-8">
                     <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold border-4 border-white shadow-sm">
                       M
                     </div>
                     <div>
                       <button className="border border-gray-300 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-50 mb-2">Change Photo</button>
                       <p className="text-xs text-gray-500">JPG, GIF or PNG. Max size 2MB</p>
                     </div>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                       <input type="text" defaultValue="Maisela" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                     </div>
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                       <input type="text" defaultValue="Norman" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                     </div>
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                     <input type="email" defaultValue="maisela@test.com" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Grade / Level</label>
                     <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                       <option>Grade 10</option>
                       <option>Grade 11</option>
                       <option>Grade 12</option>
                     </select>
                   </div>
                 </div>
               )}

               {tab === "Language" && (
                 <div className="space-y-6">
                   <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800 mb-2">
                     Changing your language will affect how the AI Tutor speaks to you and translates academic concepts.
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Teaching Language</label>
                     <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                       <option>English</option>
                       <option>isiZulu</option>
                       <option>Sepedi</option>
                       <option>Sesotho</option>
                       <option>Setswana</option>
                       <option>isiXhosa</option>
                     </select>
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Interface Language</label>
                     <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                       <option>English</option>
                       <option>isiZulu</option>
                       <option>Afrikaans</option>
                     </select>
                   </div>
                 </div>
               )}

               {tab === "Notifications" && (
                 <div className="space-y-4">
                   {[
                     { title: "Email Notifications", desc: "Receive updates about your progress and homework." },
                     { title: "AI Tutor Reminders", desc: "Get notified when it's time to study." },
                     { title: "Tutor Session Alerts", desc: "Alerts for upcoming live tutoring sessions." },
                   ].map((item, i) => (
                     <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                       <div>
                         <p className="text-sm font-bold text-gray-800">{item.title}</p>
                         <p className="text-xs text-gray-500">{item.desc}</p>
                       </div>
                       <input type="checkbox" defaultChecked className="w-5 h-5 accent-blue-600" />
                     </div>
                   ))}
                 </div>
               )}

               {tab === "Security" && (
                 <div className="space-y-4">
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                     <input type="password" placeholder="••••••••" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                     <input type="password" placeholder="••••••••" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                     <input type="password" placeholder="••••••••" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                   </div>
                 </div>
               )}

               <div className="pt-6 mt-8 border-t border-gray-100 flex justify-end">
                 <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors">
                   <Save size={16}/> Save Changes
                 </button>
               </div>

             </div>
          </div>

        </div>
      </main>
    </div>
  );
}