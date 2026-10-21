import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import { Search, Download, FileText, BookOpen, Video } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <Sidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1200px] mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">Resources Library</h1>
              <p className="text-sm text-gray-500">Access study notes, past papers, and textbooks.</p>
            </div>
            <div className="flex items-center bg-white rounded-lg px-4 py-2 w-72 border border-gray-300 shadow-sm">
              <Search size={18} className="text-gray-400" />
              <input type="text" placeholder="Search resources..." className="bg-transparent border-none outline-none ml-3 w-full text-sm text-gray-700" />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-8">
             <div className="bg-white p-4 rounded-xl border border-gray-200 flex flex-col items-center justify-center hover:border-[#0070F3] cursor-pointer transition-colors">
               <FileText size={28} className="text-blue-500 mb-2"/>
               <p className="text-sm font-bold text-gray-700">Past Papers</p>
             </div>
             <div className="bg-white p-4 rounded-xl border border-gray-200 flex flex-col items-center justify-center hover:border-[#0070F3] cursor-pointer transition-colors">
               <BookOpen size={28} className="text-emerald-500 mb-2"/>
               <p className="text-sm font-bold text-gray-700">Study Notes</p>
             </div>
             <div className="bg-white p-4 rounded-xl border border-gray-200 flex flex-col items-center justify-center hover:border-[#0070F3] cursor-pointer transition-colors">
               <Video size={28} className="text-purple-500 mb-2"/>
               <p className="text-sm font-bold text-gray-700">Video Lessons</p>
             </div>
             <div className="bg-white p-4 rounded-xl border border-gray-200 flex flex-col items-center justify-center hover:border-[#0070F3] cursor-pointer transition-colors">
               <FileText size={28} className="text-orange-500 mb-2"/>
               <p className="text-sm font-bold text-gray-700">Textbooks</p>
             </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
             <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <h2 className="font-bold text-gray-800">Recently Added Documents</h2>
             </div>
             <div className="divide-y divide-gray-100">
                {[
                  { name: "Grade 10 Mathematics P1 Nov 2025", type: "PDF", size: "2.4 MB" },
                  { name: "Physical Sciences Formula Sheet", type: "PDF", size: "1.1 MB" },
                  { name: "English Poetry Study Guide", type: "PDF", size: "5.6 MB" },
                ].map((file, i) => (
                  <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-red-100 text-red-600 rounded"><FileText size={18}/></div>
                      <div>
                        <p className="text-sm font-bold text-gray-800">{file.name}</p>
                        <p className="text-xs text-gray-500">{file.type} • {file.size}</p>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-[#0070F3] text-sm font-medium hover:underline">
                      <Download size={16}/> Download
                    </button>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}