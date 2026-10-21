import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import { Play, CheckCircle, Clock, BookOpen, ChevronRight } from "lucide-react";

export default function MyLearningPage() {
  const inProgressCourses = [
    { title: "Mathematics - Quadratic Equations", progress: 70, nextLesson: "Completing the Square", timeLeft: "15 min", color: "bg-blue-500" },
    { title: "Physical Sciences - Chemical Reactions", progress: 45, nextLesson: "Balancing Equations", timeLeft: "25 min", color: "bg-emerald-500" },
    { title: "English - Poetry Analysis", progress: 60, nextLesson: "Analyzing Metaphors", timeLeft: "10 min", color: "bg-purple-500" },
  ];

  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <Sidebar />
      <TopNav />

      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto overflow-x-hidden">
        <div className="p-8 max-w-[1200px] mx-auto">
          
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">My Learning Journey</h1>
            <p className="text-sm text-gray-500">Pick up right where you left off, Maisela.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - In Progress */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Clock size={20} className="text-[#0070F3]" /> In Progress
              </h2>
              
              <div className="space-y-4">
                {inProgressCourses.map((course, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex items-center gap-6 hover:shadow-md transition-shadow cursor-pointer">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white shrink-0 ${course.color}`}>
                      <Play size={24} fill="currentColor" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-gray-800 text-base mb-1">{course.title}</h3>
                      <p className="text-xs text-gray-500 mb-3">Next up: <span className="font-medium text-gray-700">{course.nextLesson}</span></p>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className={`h-2 rounded-full ${course.color}`} style={{ width: `${course.progress}%` }}></div>
                      </div>
                    </div>
                    <div className="text-center shrink-0 w-20">
                      <p className="text-sm font-bold text-gray-800 mb-1">{course.progress}%</p>
                      <p className="text-[10px] text-gray-400">{course.timeLeft} left</p>
                    </div>
                    <button className="p-3 bg-gray-50 rounded-full hover:bg-gray-100 text-gray-600">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Completed */}
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <CheckCircle size={20} className="text-[#10B981]" /> Recently Completed
              </h2>

              <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="mt-1"><CheckCircle size={20} className="text-[#10B981]" /></div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-800">Algebraic Expressions</h4>
                    <p className="text-xs text-gray-500 mb-1">Mathematics • Grade 10</p>
                    <p className="text-[10px] text-gray-400">Completed on 12 Oct 2026</p>
                  </div>
                </div>
                <div className="w-full border-t border-gray-100"></div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1"><CheckCircle size={20} className="text-[#10B981]" /></div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-800">Newton's Laws of Motion</h4>
                    <p className="text-xs text-gray-500 mb-1">Physical Sciences • Grade 10</p>
                    <p className="text-[10px] text-gray-400">Completed on 08 Oct 2026</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}