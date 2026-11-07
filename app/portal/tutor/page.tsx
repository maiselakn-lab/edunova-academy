"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  LayoutDashboard, Users, Calendar, FileText, DollarSign, 
  Settings, LogOut, Bell, Menu, Video, Clock, TrendingUp, BarChart3, UserCheck
} from 'lucide-react';

export default function TutorDashboard() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('edunova_token');
      const userData = localStorage.getItem('edunova_user');
      if (!token || !userData) { router.replace('/login/tutor'); return; }
      setUser(JSON.parse(userData));
      setIsLoading(false);
    }
  }, [router]);

  const handleLogout = () => { localStorage.clear(); router.push('/login/tutor'); };

  if (isLoading || !user) return <div className="flex h-screen items-center justify-center bg-brand-grey"><p className="text-brand-navy font-bold">Loading...</p></div>;

  return (
    <div className="flex h-screen bg-brand-grey overflow-hidden">
      
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-brand-navy text-white flex flex-col transition-all duration-300 shrink-0`}>
        <div className="h-20 flex items-center justify-center border-b border-white/10 px-4">
          <Link href="/"><img src="/logo.png" alt="EduNova" className={`${sidebarOpen ? 'h-12' : 'h-8'} w-auto object-contain bg-white rounded p-1 transition-all`} /></Link>
        </div>

        <nav className="flex-grow py-6 space-y-2 px-3 overflow-y-auto">
          <Link href="/portal/tutor" className="flex items-center gap-4 px-4 py-3 bg-brand-royal rounded-lg font-medium"><LayoutDashboard size={20} />{sidebarOpen && <span>Dashboard</span>}</Link>
          <Link href="/portal/tutor/students" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300"><Users size={20} />{sidebarOpen && <span>My Students</span>}</Link>
          <Link href="/portal/tutor/schedule" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300"><Calendar size={20} />{sidebarOpen && <span>Schedule</span>}</Link>
          <Link href="/portal/reports" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300"><FileText size={20} />{sidebarOpen && <span>Lesson Reports</span>}</Link>
          <Link href="/portal/earnings" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-brand-gold"><DollarSign size={20} />{sidebarOpen && <span>My Earnings</span>}</Link>
        </nav>

        <div className="p-4 border-t border-white/10 space-y-2">
          <Link href="/portal/settings" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300"><Settings size={20} />{sidebarOpen && <span>Settings</span>}</Link>
          <button onClick={handleLogout} className="w-full flex items-center gap-4 px-4 py-3 hover:bg-red-500/20 text-red-400 rounded-lg"><LogOut size={20} />{sidebarOpen && <span>Logout</span>}</button>
        </div>
      </aside>

      <main className="flex-grow flex flex-col h-screen overflow-hidden">
        
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-500 hover:text-brand-navy"><Menu size={24} /></button>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative text-gray-500 hover:text-brand-navy"><Bell size={22} /></button>
            <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
              <div className="w-10 h-10 bg-brand-teal text-white rounded-full flex items-center justify-center font-bold">{user.first_name.charAt(0)}</div>
              <div className="hidden md:block">
                <p className="text-sm font-bold text-brand-navy leading-tight">{user.first_name} {user.last_name}</p>
                <p className="text-xs text-gray-500 capitalize">{user.role}</p>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-grow overflow-y-auto p-8">
          
          <div className="bg-brand-navy rounded-2xl p-8 text-white mb-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h1 className="text-3xl font-serif font-bold text-white mb-2">Welcome back, {user.first_name}!</h1>
              <p className="text-gray-300">You have 3 lessons scheduled for today. Remember to submit your reports.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 border border-white/10 text-center min-w-[200px]">
              <p className="text-sm text-gray-300 mb-1">Pending Earnings</p>
              <p className="text-3xl font-bold text-brand-teal">R 4,250.00</p>
              <button className="text-xs text-brand-gold font-bold hover:underline mt-2">Withdraw Funds</button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            <div className="lg:col-span-2 space-y-8">
              {/* Schedule */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-brand-navy">Today's Schedule</h2>
                  <Link href="/portal/tutor/schedule" className="text-sm text-brand-royal font-bold hover:underline">Full Calendar</Link>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg bg-brand-grey/30">
                    <div className="w-14 h-14 bg-brand-navy text-white rounded-lg flex flex-col items-center justify-center shrink-0"><span className="text-xs font-bold uppercase">14:00</span></div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-brand-navy">Mathematics: Calculus</h3>
                      <p className="text-sm text-gray-500">Student: Siphelele B. (Grade 11)</p>
                    </div>
                    <Link href="/portal/classroom" className="bg-brand-teal text-white px-4 py-2 rounded text-sm font-bold flex items-center gap-2"><Video size={16} /> Start</Link>
                  </div>
                  <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg bg-brand-grey/30">
                    <div className="w-14 h-14 bg-brand-navy text-white rounded-lg flex flex-col items-center justify-center shrink-0"><span className="text-xs font-bold uppercase">16:30</span></div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-brand-navy">Physical Sciences: Mechanics</h3>
                      <p className="text-sm text-gray-500">Student: Lerato N. (Grade 8)</p>
                    </div>
                    <Link href="/portal/classroom" className="border border-brand-navy text-brand-navy px-4 py-2 rounded text-sm font-bold flex items-center gap-2">Waiting</Link>
                  </div>
                </div>
              </div>

              {/* Earnings Chart */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-xl font-bold text-brand-navy mb-6 flex items-center gap-2"><BarChart3 size={20}/> Earnings Over Time</h2>
                <div className="h-48 bg-brand-grey rounded-lg flex items-end justify-between p-4 gap-2">
                  {[30, 50, 40, 70, 60, 80, 75, 90, 85, 100, 80, 95].map((h, i) => (
                    <div key={i} className="w-full bg-brand-teal/80 rounded-t hover:bg-brand-teal transition-colors" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-lg font-bold text-brand-navy mb-4">Student Progress</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1"><p className="text-sm font-medium text-gray-600">Siphelele B.</p><span className="text-brand-teal font-bold text-sm">85%</span></div>
                    <div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-brand-teal h-2 rounded-full" style={{ width: '85%' }}></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1"><p className="text-sm font-medium text-gray-600">Lerato N.</p><span className="text-brand-royal font-bold text-sm">72%</span></div>
                    <div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-brand-royal h-2 rounded-full" style={{ width: '72%' }}></div></div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-navy rounded-xl shadow-sm p-6 text-white border-t-4 border-brand-gold">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><TrendingUp size={18} className="text-brand-gold"/> Earnings Breakdown</h2>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center pb-2 border-b border-white/10"><span className="text-gray-400">Completed Lessons</span><span className="font-bold">28</span></div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/10"><span className="text-gray-400">Rate per Lesson</span><span className="font-bold">R 150.00</span></div>
                  <div className="flex justify-between items-center"><span className="text-gray-400">Total Earned</span><span className="font-bold text-brand-teal">R 4,250.00</span></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}