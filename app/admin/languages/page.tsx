"use client";
import AdminSidebar from "@/components/sidebars/AdminSidebar";
import TopNav from "@/components/TopNav";
import { Globe, Plus, CheckCircle2 } from "lucide-react";

export default function AdminLanguagesPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <AdminSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1000px] mx-auto">
          
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">Languages & Localization</h1>
              <p className="text-sm text-gray-500">Manage supported languages for the AI Tutor and platform.</p>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2"><Plus size={16}/> Add Language</button>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 font-medium">
                <tr>
                  <th className="px-6 py-4">Language</th>
                  <th className="px-6 py-4">Code</th>
                  <th className="px-6 py-4">AI Support</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: "English", code: "en-ZA", ai: "Excellent", status: "Active" },
                  { name: "isiZulu", code: "zu-ZA", ai: "Good", status: "Active" },
                  { name: "Sepedi", code: "nso-ZA", ai: "Good", status: "Active" },
                  { name: "Sesotho", code: "st-ZA", ai: "Moderate", status: "Active" },
                  { name: "Afrikaans", code: "af-ZA", ai: "Excellent", status: "Active" },
                  { name: "isiXhosa", code: "xh-ZA", ai: "Moderate", status: "Inactive" },
                ].map((lang, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-gray-800 flex items-center gap-2"><Globe size={16} className="text-gray-400"/> {lang.name}</td>
                    <td className="px-6 py-4 font-mono text-xs text-gray-500">{lang.code}</td>
                    <td className="px-6 py-4"><span className={`px-2 py-1 rounded text-xs font-bold ${lang.ai === 'Excellent' ? 'bg-emerald-100 text-emerald-700' : lang.ai === 'Good' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'}`}>{lang.ai}</span></td>
                    <td className="px-6 py-4">
                      <span className={`flex items-center gap-1.5 text-xs font-bold ${lang.status === 'Active' ? 'text-emerald-600' : 'text-gray-400'}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${lang.status === 'Active' ? 'bg-emerald-500' : 'bg-gray-300'}`}></span> {lang.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-indigo-600 font-bold text-xs hover:underline">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-blue-50 border border-blue-200 p-4 rounded-xl flex gap-4 items-start">
             <CheckCircle2 className="text-blue-600 shrink-0" size={24}/>
             <div>
               <h4 className="font-bold text-blue-800">AI Translation Quality</h4>
               <p className="text-sm text-blue-700 mt-1">The AI Tutor uses Groq. While it supports all 11 official South African languages, quality may vary. We recommend testing isiZulu, Sepedi, and Sesotho regularly.</p>
             </div>
          </div>

        </div>
      </main>
    </div>
  );
}