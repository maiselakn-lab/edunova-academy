import LearnerSidebar from "@/components/sidebars/LearnerSidebar";
import TopNav from "@/components/TopNav";
import { 
  Calculator, Atom, BookOpen, ArrowRight, Target, Bot, Trophy, 
  CheckCircle2, FileText, Flame, GraduationCap, Backpack, HelpCircle 
} from "lucide-react";
import Link from "next/link";

export default function LearnerDashboard() {
  return (
    // CHANGED: min-h-screen allows the page to grow and push the footer down
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <LearnerSidebar />
      <TopNav />
      
      {/* CHANGED: flex-grow ensures the content fills the page */}
      <main className="ml-[260px] pt-[72px] flex-grow flex flex-col">
        <div className="p-8 max-w-[1400px] mx-auto space-y-6 w-full">
          
          <div className="grid grid-cols-3 gap-6">
            {/* Welcome Banner */}
            <div className="col-span-2 bg-gradient-to-r from-[#0A192F] to-[#1D4ED8] rounded-2xl p-8 text-white relative overflow-hidden flex flex-col justify-center min-h-[200px] shadow-lg">
              <div className="absolute inset-y-0 right-0 w-[50%] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800" alt="Learner" className="w-full h-full object-cover opacity-50" style={{ maskImage: 'linear-gradient(to right, transparent, black 40%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 40%)' }} />
              </div>
              <div className="z-10 max-w-sm relative">
                <h2 className="text-3xl font-bold leading-tight mb-2">Hello, Maisela! 👋</h2>
                <p className="text-blue-100 text-sm mb-6">Ready for another great day of learning?<br/>Let's crush your school goals today.</p>
                <div className="flex gap-3">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1"><GraduationCap size={14}/> Grade 10</span>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1"><Backpack size={14}/> Secondary School</span>
                </div>
              </div>
            </div>

            {/* Progress Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <div className="relative w-20 h-20 flex items-center justify-center rounded-full" style={{ background: `conic-gradient(#3B82F6 68%, #F1F5F9 0)` }}>
                  <div className="absolute w-16 h-16 bg-white rounded-full flex items-center justify-center"><span className="font-bold text-gray-800 text-lg">68%</span></div>
                </div>
                <div className="text-right">
                  <h4 className="text-sm font-bold text-gray-800 flex items-center justify-end gap-1">Term Progress <HelpCircle size={14} className="text-gray-400"/></h4>
                  <p className="text-xs text-gray-500 mt-1">Term 4, 2026</p>
                </div>
              </div>
              <div className="space-y-3 mt-2">
                <div className="flex justify-between items-center text-sm"><span className="text-gray-600 flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500"/> Homework Done</span><span className="font-bold text-gray-800">12/15</span></div>
                <div className="flex justify-between items-center text-sm"><span className="text-gray-600 flex items-center gap-2"><FileText size={16} className="text-emerald-500"/> Tests Passed</span><span className="font-bold text-gray-800">4/6</span></div>
                <div className="flex justify-between items-center text-sm pt-3 border-t border-gray-100"><span className="text-gray-600 flex items-center gap-2 font-bold"><Flame size={16} className="text-orange-500"/> Study Streak</span><span className="font-bold text-orange-500">5 Days 🔥</span></div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-4 gap-6">
            <Link href="/dashboard/learner/subjects" className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col hover:shadow-md group"><div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4"><BookOpen size={24}/></div><h3 className="font-bold text-gray-900 mb-1">My Subjects</h3><p className="text-xs text-gray-500">Access your CAPS materials.</p></Link>
            <Link href="/dashboard/learner/practice" className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col hover:shadow-md group"><div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4"><Target size={24}/></div><h3 className="font-bold text-gray-900 mb-1">Practice Tests</h3><p className="text-xs text-gray-500">Prep for exams.</p></Link>
            <Link href="/dashboard/learner/tutor" className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col hover:shadow-md group"><div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4"><Bot size={24}/></div><h3 className="font-bold text-gray-900 mb-1">AI Study Buddy</h3><p className="text-xs text-gray-500">Ask the AI for help.</p></Link>
            <Link href="/dashboard/learner/sessions" className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col hover:shadow-md group"><div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4"><Trophy size={24}/></div><h3 className="font-bold text-gray-900 mb-1">My Sessions</h3><p className="text-xs text-gray-500">View tutoring sessions.</p></Link>
          </div>

          <div className="grid grid-cols-3 gap-6 pb-8">
            <div className="col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="flex justify-between items-center mb-6"><h2 className="font-bold text-gray-800 text-lg">Continue Learning</h2><Link href="/dashboard/learner/subjects" className="text-sm text-blue-600 font-bold hover:underline">View All</Link></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-gray-100 rounded-xl p-4 flex gap-4 items-center"><div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center"><Calculator size={24}/></div><div><h3 className="font-bold text-gray-800 text-sm">Mathematics</h3><p className="text-xs text-gray-500 mt-0.5">Next: Quadratic Equations</p><div className="w-full bg-gray-100 rounded-full h-1.5 mt-2"><div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '70%' }}></div></div></div></div>
                <div className="border border-gray-100 rounded-xl p-4 flex gap-4 items-center"><div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center"><Atom size={24}/></div><div><h3 className="font-bold text-gray-800 text-sm">Physical Sciences</h3><p className="text-xs text-gray-500 mt-0.5">Next: Newton's Laws</p><div className="w-full bg-gray-100 rounded-full h-1.5 mt-2"><div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '45%' }}></div></div></div></div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="flex justify-between items-center mb-4"><h2 className="font-bold text-gray-800 text-lg">Today's Classes</h2><Link href="/dashboard/learner/live" className="text-xs text-blue-600 font-bold hover:underline">Timetable</Link></div>
              <div className="space-y-3">
                {[{ subject: "Mathematics", time: "08:00", teacher: "Mr. Smith", color: "border-blue-500" }, { subject: "English", time: "09:30", teacher: "Mrs. Dlamini", color: "border-purple-500" }].map((cls, i) => (
                  <div key={i} className={`flex justify-between items-center p-3 border-l-4 rounded-r-lg bg-gray-50 ${cls.color}`}><div><p className="text-sm font-bold text-gray-800">{cls.subject}</p><p className="text-[10px] text-gray-500">{cls.teacher}</p></div><div className="text-right"><p className="text-[10px] font-bold text-gray-700">{cls.time}</p></div></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}