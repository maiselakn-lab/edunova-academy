"use client";
import AdminSidebar from "@/components/sidebars/AdminSidebar";
import TopNav from "@/components/TopNav";
import { Settings, Save, Shield, Bell, Globe } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <AdminSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1000px] mx-auto">
          
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">Platform Settings</h1>
            <p className="text-sm text-gray-500">Configure global platform variables and branding.</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 space-y-8">
            
            {/* General Settings */}
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2 border-b border-gray-100 pb-2"><Settings size={18} className="text-indigo-500"/> General Configuration</h2>
              <div className="grid grid-cols-2 gap-6">
                <div><label className="block text-sm font-medium text-gray-700 mb-1">Platform Name</label><input type="text" defaultValue="EduNova Academy" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" /></div>
                <div><label className="block text-sm font-medium text-gray-700 mb-1">Support Email</label><input type="email" defaultValue="support@edunova.co.za" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" /></div>
                <div><label className="block text-sm font-medium text-gray-700 mb-1">Default Timezone</label><select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white"><option>Africa/Johannesburg (SAST)</option></select></div>
                <div><label className="block text-sm font-medium text-gray-700 mb-1">Maintenance Mode</label><select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white"><option>Disabled</option><option>Enabled</option></select></div>
              </div>
            </div>

            {/* Security Settings */}
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2 border-b border-gray-100 pb-2"><Shield size={18} className="text-indigo-500"/> Security & Access</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div><p className="text-sm font-bold text-gray-800">Force Two-Factor Authentication</p><p className="text-xs text-gray-500">Require all admins to use 2FA</p></div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-indigo-600" />
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div><p className="text-sm font-bold text-gray-800">Block Multiple Logins</p><p className="text-xs text-gray-500">Log out users from other devices</p></div>
                  <input type="checkbox" className="w-5 h-5 accent-indigo-600" />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex justify-end">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2"><Save size={16}/> Save Settings</button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}