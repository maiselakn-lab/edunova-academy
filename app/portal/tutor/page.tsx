"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  LayoutDashboard, Users, Calendar, FileText, DollarSign, 
  Settings, LogOut, Bell, Menu, Video, Clock, TrendingUp, BarChart3
} from 'lucide-react';

export default function TutorDashboard() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('edunova_token');
      const userData = localStorage.getItem('edunova_user');
      if (!token || !userData) { router.replace('/login/tutor'); return; }
      setUser(JSON.parse(userData));

      const fetchData = async () => {
        try {
          const response = await fetch('https://edunova-academy-qkk5.onrender.com/api/tutor/dashboard', {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          if (response.ok) {
            setDashboardData(await response.json());
          }
        } catch (err) {
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
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
          {/* FIXED: Points to internal tutor schedule */}
          <Link href="/portal/tutor/schedule" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300"><Calendar size={20} />{sidebarOpen && <span>Schedule</span>}</Link>
          <Link href="/portal/tutor/reports" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300"><FileText size={20} />{sidebarOpen && <span>Lesson Reports</span>}</Link>
          <Link href="/portal/tutor/earnings" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-brand-gold"><DollarSign size={20} />{sidebarOpen && <span>My Earnings</span>}</Link>
        </nav>

        <div className="p-4 border-t border-white/10 space-y-2">
          <Link href="/portal/tutor/settings" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300"><Settings size={20} />{sidebarOpen && <span>Settings</span>}</Link>
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
              <p className="text-gray-300">You have {dashboardData?.upcoming_lessons?.length || 0} lessons scheduled for today. Remember to submit your reports.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 border border-white/10 text-center min-w-[200px]">
              <p className="text-sm text-gray-300 mb-1">Pending Earnings</p>
              <p className="text-3xl font-bold text-brand-teal">{dashboardData?.pending_earnings || 'R 0.00'}</p>
              <Link href="/portal/tutor/earnings" className="text-xs text-brand-gold font-bold hover:underline mt-2 inline-block">Withdraw Funds</Link>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-brand-navy">Today's Schedule</h2>
                  {/* FIXED: Points to internal tutor schedule */}
                  <Link href="/portal/tutor/schedule" className="text-sm text-brand-royal font-bold hover:underline">Full Calendar</Link>
                </div>
                <div className="space-y-4">
                  {dashboardData?.upcoming_lessons?.map((lesson: any, i: number) => (
                    <div key={i} className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg bg-brand-grey/30">
                      <div className="w-14 h-14 bg-brand-navy text-white rounded-lg flex flex-col items-center justify-center shrink-0">
                        <span className="text-xs font-bold uppercase">{lesson.time}</span>
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-bold text-brand-navy">{lesson.subject}</h3>
                        <p className="text-sm text-gray-500">Student: {lesson.student_name}</p>
                      </div>
                      <Link href="/portal/student/classroom" className={`px-4 py-2 rounded text-sm font-bold flex items-center gap-2 ${lesson.status === 'ready' ? 'bg-brand-teal text-white' : 'border border-brand-navy text-brand-navy'}`}>
                        <Video size={16} /> {lesson.status === 'ready' ? 'Start' : 'Waiting'}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

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
                  {dashboardData?.recent_assessments?.map((assessment: any, i: number) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-sm font-medium text-gray-600">{assessment.student}</p>
                        <span className="text-brand-teal font-bold text-sm">{assessment.average}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-brand-teal h-2 rounded-full" style={{ width: assessment.average }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-brand-navy rounded-xl shadow-sm p-6 text-white border-t-4 border-brand-gold">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><TrendingUp size={18} className="text-brand-gold"/> Earnings Breakdown</h2>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center pb-2 border-b border-white/10"><span className="text-gray-400">Completed Lessons</span><span className="font-bold">{dashboardData?.completed_lessons || 0}</span></div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/10"><span className="text-gray-400">Rating</span><span className="font-bold">{dashboardData?.rating || 'N/A'}</span></div>
                  <div className="flex justify-between items-center"><span className="text-gray-400">Total Earned</span><span className="font-bold text-brand-teal">{dashboardData?.pending_earnings || 'R 0.00'}</span></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}