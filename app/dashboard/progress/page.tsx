import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import { TrendingUp, Award, Target } from "lucide-react";

export default function ProgressPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <Sidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1200px] mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">Progress & Reports</h1>
            <p className="text-sm text-gray-500">Your overall academic performance and mastery levels.</p>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
             <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="text-blue-500" size={20}/>
                  <h3 className="font-bold text-gray-700 text-sm">Course Completion</h3>
                </div>
                <p className="text-3xl font-bold text-gray-800 mb-2">68%</p>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="h-2 rounded-full bg-blue-500" style={{ width: '68%' }}></div>
                </div>
             </div>
             <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="text-emerald-500" size={20}/>
                  <h3 className="font-bold text-gray-700 text-sm">Average Test Score</h3>
                </div>
                <p className="text-3xl font-bold text-gray-800 mb-2">78%</p>
                <p className="text-xs text-emerald-600 font-medium">↑ 5% from last month</p>
             </div>
             <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="text-yellow-500" size={20}/>
                  <h3 className="font-bold text-gray-700 text-sm">Certificates Earned</h3>
                </div>
                <p className="text-3xl font-bold text-gray-800 mb-2">3</p>
                <p className="text-xs text-gray-500">Top 15% of Grade 10 learners</p>
             </div>
          </div>

          <h2 className="text-lg font-bold text-gray-800 mb-4">Subject Mastery</h2>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
             {[
               { name: "Mathematics", val: 70, color: "bg-blue-500" },
               { name: "Physical Sciences", val: 45, color: "bg-emerald-500" },
               { name: "English", val: 85, color: "bg-purple-500" },
               { name: "Life Sciences", val: 30, color: "bg-teal-500" },
             ].map((sub, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                    <span>{sub.name}</span>
                    <span>{sub.val}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div className={`h-2.5 rounded-full ${sub.color}`} style={{ width: `${sub.val}%` }}></div>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </main>
    </div>
  );
}