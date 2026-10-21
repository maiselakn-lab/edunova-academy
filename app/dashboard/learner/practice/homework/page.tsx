import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import { Upload, FileText, CheckCircle2, Clock } from "lucide-react";

export default function HomeworkPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <Sidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1200px] mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">Homework Help</h1>
            <p className="text-sm text-gray-500">Upload a photo of your homework and let the AI guide you through it.</p>
          </div>

          <div className="bg-white border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:bg-gray-50 transition-colors cursor-pointer mb-8">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Upload size={28} className="text-[#0070F3]" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Click to upload or drag and drop</h3>
            <p className="text-sm text-gray-500 mb-4">Supports JPG, PNG, and PDF (max 10MB)</p>
            <button className="bg-[#0070F3] hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium">
              Select File
            </button>
          </div>

          <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Submissions</h2>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 font-medium">
                <tr>
                  <th className="px-6 py-3">Subject</th>
                  <th className="px-6 py-3">Date Submitted</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { sub: "Mathematics", date: "Today, 14:30", status: "Feedback Ready", color: "text-emerald-600 bg-emerald-50" },
                  { sub: "Physical Sciences", date: "Yesterday, 18:15", status: "Under Review", color: "text-yellow-600 bg-yellow-50" },
                  { sub: "English", date: "12 Oct 2026", status: "Feedback Ready", color: "text-emerald-600 bg-emerald-50" },
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-800 flex items-center gap-2">
                       <FileText size={16} className="text-gray-400"/> {item.sub}
                    </td>
                    <td className="px-6 py-4 text-gray-500">{item.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${item.color}`}>{item.status}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-[#0070F3] hover:underline font-medium">View</button>
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