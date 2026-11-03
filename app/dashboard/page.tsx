"use client";
import { useState } from "react";
import Link from "next/link";
import { 
  Users, CreditCard, BookOpen, TrendingUp, Plus, ArrowUpRight, Clock, CheckCircle2, X 
} from "lucide-react";

export default function DashboardHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Dashboard Overview</h1>
          <p className="text-sm text-slate-400 mt-1">Welcome back to THINK Academy. Here is what's happening today.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20"
        >
          <Plus size={16} /> Enroll New Student
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={<Users size={20} />} 
          label="Total Students" 
          val="1,248" 
          trend="+12%" 
          color="text-blue-500" 
          bg="bg-blue-500/10" 
        />
        <StatCard 
          icon={<CreditCard size={20} />} 
          label="Fees Collected" 
          val="R 450,000" 
          trend="+8%" 
          color="text-emerald-500" 
          bg="bg-emerald-500/10" 
        />
        <StatCard 
          icon={<BookOpen size={20} />} 
          label="Active Classes" 
          val="42" 
          trend="+2" 
          color="text-purple-500" 
          bg="bg-purple-500/10" 
        />
        <StatCard 
          icon={<TrendingUp size={20} />} 
          label="Attendance Rate" 
          val="94%" 
          trend="+1.5%" 
          color="text-orange-500" 
          bg="bg-orange-500/10" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart Area */}
        <div className="lg:col-span-2 bg-[#0F1926] border border-white/5 rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-white">Revenue Overview</h2>
            <select className="bg-[#162233] border border-white/5 text-sm text-slate-300 rounded-lg px-3 py-1.5 focus:outline-none">
              <option>This Term</option>
              <option>Last Term</option>
            </select>
          </div>
          <div className="h-64 flex items-end justify-between gap-2">
            {[40, 70, 45, 90, 65, 85, 100, 60, 75, 50, 80, 95].map((height, i) => (
              <div 
                key={i} 
                className="w-full bg-orange-500/20 rounded-t-sm relative group hover:bg-orange-500/40 transition-colors" 
                style={{ height: `${height}%` }}
              >
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                  R {height * 1000}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-slate-500 mt-4 px-2">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
            <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-[#0F1926] border border-white/5 rounded-xl p-6 flex flex-col">
          <h2 className="text-lg font-bold text-white mb-6">Recent Activity</h2>
          <div className="space-y-6 flex-1">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                <CheckCircle2 size={16} />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Fees payment received</p>
                <p className="text-xs text-slate-400">John Doe paid R 5,000.00</p>
                <p className="text-[10px] text-slate-500 mt-1">2 hours ago</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                <Users size={16} />
              </div>
              <div>
                <p className="text-sm font-medium text-white">New student enrolled</p>
                <p className="text-xs text-slate-400">Sarah Smith joined Grade 10A</p>
                <p className="text-[10px] text-slate-500 mt-1">5 hours ago</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
                <Clock size={16} />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Results published</p>
                <p className="text-xs text-slate-400">Term 1 results are now live</p>
                <p className="text-[10px] text-slate-500 mt-1">1 day ago</p>
              </div>
            </div>
          </div>
          <Link 
            href="/dashboard/activity" 
            className="block text-center w-full mt-6 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg text-sm font-medium transition-colors"
          >
            View All Activity
          </Link>
        </div>
      </div>

      {/* Add Student Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#0F1926] border border-white/10 rounded-2xl w-full max-w-md p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">Enroll New Student</h2>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <form 
              onSubmit={(e) => { 
                e.preventDefault(); 
                setIsModalOpen(false); 
                // You can add a toast notification here later
              }} 
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">First Name</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full bg-[#08101A] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Last Name</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full bg-[#08101A] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Grade / Class</label>
                <select className="w-full bg-[#08101A] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500">
                  <option>Grade 8</option>
                  <option>Grade 9</option>
                  <option>Grade 10</option>
                  <option>Grade 11</option>
                  <option>Grade 12</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Parent Email</label>
                <input 
                  type="email" 
                  placeholder="parent@example.com"
                  className="w-full bg-[#08101A] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-orange-500" 
                />
              </div>
              <div className="pt-4 flex justify-end gap-3">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)} 
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Save Student
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({ 
  icon, 
  label, 
  val, 
  trend, 
  color, 
  bg 
}: { 
  icon: React.ReactNode; 
  label: string; 
  val: string; 
  trend: string; 
  color: string; 
  bg: string; 
}) {
  return (
    <div className="bg-[#0F1926] p-6 rounded-xl border border-white/5 relative overflow-hidden group">
      <div className="flex justify-between items-start mb-4">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${bg} ${color}`}>
          {icon}
        </div>
        <span className="flex items-center gap-1 text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">
          <ArrowUpRight size={12} /> {trend}
        </span>
      </div>
      <p className="text-2xl font-bold text-white mb-1">{val}</p>
      <p className="text-xs text-slate-400">{label}</p>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
}