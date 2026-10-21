"use client";
import AdminSidebar from "@/components/sidebars/AdminSidebar";
import TopNav from "@/components/TopNav";
import { Database, Cpu, RefreshCw, CheckCircle2, AlertTriangle } from "lucide-react";

export default function AdminDatabasePage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <AdminSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1200px] mx-auto">
          
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">Database & AI Engine</h1>
            <p className="text-sm text-gray-500">Monitor system health, database size, and AI API usage.</p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* Database Status */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3"><div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Database size={20}/></div><h2 className="font-bold text-gray-800">Database Status</h2></div>
                <span className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded text-xs font-bold flex items-center gap-1"><CheckCircle2 size={12}/> Healthy</span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-gray-500">Engine:</span><span className="font-bold text-gray-800">SQLite (Dev Mode)</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Total Size:</span><span className="font-bold text-gray-800">4.2 MB</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Total Records:</span><span className="font-bold text-gray-800">14,204</span></div>
              </div>
              <button className="w-full mt-4 border border-gray-300 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center justify-center gap-2"><RefreshCw size={14}/> Backup Database</button>
            </div>

            {/* AI Status */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3"><div className="bg-purple-100 p-2 rounded-lg text-purple-600"><Cpu size={20}/></div><h2 className="font-bold text-gray-800">AI Engine (Groq)</h2></div>
                <span className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded text-xs font-bold flex items-center gap-1"><CheckCircle2 size={12}/> Online</span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-gray-500">Model:</span><span className="font-bold text-gray-800">openai/gpt-oss-120b</span></div>
                <div className="flex justify-between"><span className="text-gray-500">API Calls (Today):</span><span className="font-bold text-gray-800">4,120</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Avg Latency:</span><span className="font-bold text-gray-800">450ms</span></div>
              </div>
              <button className="w-full mt-4 border border-gray-300 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center justify-center gap-2"><RefreshCw size={14}/> Test Connection</button>
            </div>
          </div>

          {/* System Logs */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="p-4 border-b border-gray-200"><h2 className="font-bold text-gray-800">System Event Log</h2></div>
            <div className="p-4 space-y-3 font-mono text-xs">
              <p className="text-gray-500"><span className="text-emerald-500 font-bold">[INFO]</span> 14:02:11 - User 'maisela@test.com' logged in successfully.</p>
              <p className="text-gray-500"><span className="text-blue-500 font-bold">[AI]</span> 14:01:45 - AI Chat request processed in 420ms (isiZulu).</p>
              <p className="text-gray-500"><span className="text-amber-500 font-bold">[WARN]</span> 13:55:00 - Failed login attempt for 'admin@edunova.com'.</p>
              <p className="text-gray-500"><span className="text-emerald-500 font-bold">[INFO]</span> 13:50:22 - Database backup completed successfully.</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}