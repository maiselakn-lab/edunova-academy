"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  LayoutDashboard, Users, BookOpen, Calendar, CreditCard, MessageSquare, 
  Settings, LogOut, Bell, Menu, ChevronRight, FileText, CheckCircle2, 
  TrendingUp, Award, ArrowUpRight
} from 'lucide-react';

export default function ParentDashboard() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeChildIndex, setActiveChildIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('edunova_token');
      const userData = localStorage.getItem('edunova_user');
      if (!token || !userData) { router.replace('/login/parent'); return; }
      setUser(JSON.parse(userData));

      const fetchData = async () => {
        try {
          const response = await fetch('https://edunova-academy-qkk5.onrender.com/api/parent/dashboard', {
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

  const handleLogout = () => { localStorage.clear(); router.push('/login/parent'); };

  if (isLoading || !user) return <div className="flex h-screen items-center justify-center bg-gray-50"><p className="text-brand-navy font-bold">Loading Dashboard...</p></div>;

  const children = dashboardData?.children || [];
  const activeChild = children[activeChildIndex];

  // Mock data for the chart (you can replace this with activeChild.subjects if you fetch them)
  const subjectPerformance = [
    { subject: "Maths", score: 85 },
    { subject: "Physics", score: 72 },
    { subject: "English", score: 90 },
    { subject: "History", score: 65 },
    { subject: "Bio", score: 78 },
    { subject: "Art", score: 88 },
  ];

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden font-sans">
      
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-brand-navy text-white flex flex-col transition-all duration-300 shrink-0 shadow-xl z-20`}>
        <div className="h-20 flex items-center justify-center border-b border-white/10 px-4">
          <Link href="/"><img src="/logo.png" alt="EduNova" className={`${sidebarOpen ? 'h-12' : 'h-8'} w-auto object-contain bg-white rounded p-1 transition-all`} /></Link>
        </div>

        <nav className="flex-grow py-6 space-y-2 px-3 overflow-y-auto">
          <Link href="/portal/parent" className="flex items-center gap-4 px-4 py-3 bg-brand-royal/20 text-brand-royal border-l-4 border-brand-royal font-medium rounded-r-lg"><LayoutDashboard size={20} />{sidebarOpen && <span>Dashboard</span>}</Link>
          <Link href="/portal/parent/children" className="flex items-center gap-4 px-4 py-3 hover:bg-white/5 rounded-lg text-gray-300 transition-colors"><Users size={20} />{sidebarOpen && <span>My Children</span>}</Link>
          <Link href="/portal/parent/progress" className="flex items-center gap-4 px-4 py-3 hover:bg-white/5 rounded-lg text-gray-300 transition-colors"><BookOpen size={20} />{sidebarOpen && <span>Academic Progress</span>}</Link>
          <Link href="/portal/parent/bookings" className="flex items-center gap-4 px-4 py-3 hover:bg-white/5 rounded-lg text-gray-300 transition-colors"><Calendar size={20} />{sidebarOpen && <span>Lesson Bookings</span>}</Link>
          <Link href="/portal/parent/payments" className="flex items-center gap-4 px-4 py-3 hover:bg-white/5 rounded-lg text-gray-300 transition-colors"><CreditCard size={20} />{sidebarOpen && <span>Payments & Invoices</span>}</Link>
          <Link href="/portal/parent/messages" className="flex items-center gap-4 px-4 py-3 hover:bg-white/5 rounded-lg text-gray-300 transition-colors"><MessageSquare size={20} />{sidebarOpen && <span>Messages</span>}</Link>
        </nav>

        <div className="p-4 border-t border-white/10 space-y-2">
          <Link href="/portal/parent/settings" className="flex items-center gap-4 px-4 py-3 hover:bg-white/5 rounded-lg text-gray-300 transition-colors"><Settings size={20} />{sidebarOpen && <span>Settings</span>}</Link>
          <button onClick={handleLogout} className="w-full flex items-center gap-4 px-4 py-3 hover:bg-red-500/10 text-red-400 rounded-lg transition-colors"><LogOut size={20} />{sidebarOpen && <span>Logout</span>}</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col h-screen overflow-hidden">
        
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0 shadow-sm z-10">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-500 hover:text-brand-navy"><Menu size={24} /></button>
            <h2 className="text-xl font-bold text-brand-navy hidden md:block">Parent Portal</h2>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative text-gray-500 hover:text-brand-navy"><Bell size={22} /><span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span></button>
            <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
              <div className="w-10 h-10 bg-brand-navy text-white rounded-full flex items-center justify-center font-bold">{user.first_name.charAt(0)}</div>
              <div className="hidden md:block">
                <p className="text-sm font-bold text-brand-navy leading-tight">{user.first_name} {user.last_name}</p>
                <p className="text-xs text-gray-500 capitalize">Parent Account</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-grow overflow-y-auto p-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-serif font-bold text-brand-navy">Dashboard</h1>
              <p className="text-gray-500 mt-1">Monitoring the academic progress of your children.</p>
            </div>
            
            {/* Child Switcher Tabs */}
            <div className="flex items-center bg-white border border-gray-200 rounded-lg p-1 shadow-sm">
              <span className="text-xs font-bold text-gray-400 px-3 uppercase tracking-wider">Viewing:</span>
              {children.map((child: any, index: number) => (
                <button
                  key={child.id}
                  onClick={() => setActiveChildIndex(index)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all ${
                    activeChildIndex === index 
                      ? 'bg-brand-royal text-white shadow-md' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${activeChildIndex === index ? 'bg-white/20' : 'bg-gray-200'}`}>
                    {child.name.charAt(0)}
                  </div>
                  {child.name} {child.surname}
                </button>
              ))}
            </div>
          </div>

          {activeChild ? (
            <div className="space-y-6">
              
              {/* Student Overview Banner */}
              <div className="bg-brand-navy rounded-2xl p-8 text-white flex flex-col md:flex-row justify-between items-center shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-royal/20 rounded-bl-full -mr-10 -mt-10 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-serif font-bold">{activeChild.name} {activeChild.surname}'s Overview</h2>
                    <span className="bg-brand-gold/20 text-brand-gold text-xs font-bold px-3 py-1 rounded-full border border-brand-gold/30">{activeChild.grade}</span>
                  </div>
                  <p className="text-gray-300">School: {activeChild.school}</p>
                </div>
                <div className="flex gap-4 relative z-10 mt-6 md:mt-0">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center min-w-[120px] border border-white/10">
                    <p className="text-sm text-gray-300 font-medium mb-1">Average</p>
                    <p className="text-3xl font-bold text-brand-gold">{activeChild.average}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center min-w-[120px] border border-white/10">
                    <p className="text-sm text-gray-300 font-medium mb-1">Attendance</p>
                    <p className="text-3xl font-bold text-brand-teal">{activeChild.attendance}</p>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                
                {/* Left Column (Chart & Feedback) */}
                <div className="lg:col-span-2 space-y-6">
                  
                  {/* Subject Performance Chart */}
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                    <div className="flex justify-between items-center mb-8">
                      <h3 className="text-lg font-bold text-brand-navy flex items-center gap-2">
                        <TrendingUp size={20} className="text-brand-royal" /> Subject Performance
                      </h3>
                      <Link href={`/portal/parent/progress`} className="text-sm text-brand-royal font-bold hover:underline flex items-center gap-1">
                        View Detailed Report <ArrowUpRight size={16} />
                      </Link>
                    </div>
                    
                    {/* Modern Bar Chart */}
                    <div className="flex items-end justify-between h-56 gap-4 px-2">
                      {subjectPerformance.map((sub, i) => (
                        <div key={i} className="flex flex-col items-center flex-grow group">
                          <div className="w-full relative flex items-end justify-center h-full">
                            {/* Score Tooltip */}
                            <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-brand-navy text-white text-xs font-bold py-1 px-2 rounded shadow-lg pointer-events-none">
                              {sub.score}%
                            </div>
                            {/* Bar */}
                            <div 
                              className="w-full max-w-[48px] bg-gradient-to-t from-brand-royal/80 to-brand-royal rounded-t-md transition-all duration-300 group-hover:brightness-110"
                              style={{ height: `${sub.score}%` }}
                            ></div>
                          </div>
                          <span className="text-xs font-bold text-gray-500 mt-3">{sub.subject}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Tutor Feedback */}
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                    <h3 className="text-lg font-bold text-brand-navy mb-6 flex items-center gap-2">
                      <MessageSquare size={20} className="text-brand-teal" /> Recent Tutor Feedback
                    </h3>
                    
                    <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 relative">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-brand-teal text-white rounded-full flex items-center justify-center font-bold">T</div>
                          <div>
                            <p className="font-bold text-brand-navy">Mathematics: Calculus</p>
                            <p className="text-xs text-gray-500">Tutor: Mr. T. Nkosi • Yesterday</p>
                          </div>
                        </div>
                        <span className="bg-brand-teal/10 text-brand-teal text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                          <CheckCircle2 size={12} /> Excellent
                        </span>
                      </div>
                      <p className="text-gray-700 italic border-l-4 border-brand-teal pl-4 py-1">
                        "{activeChild.name} showed great improvement today. Grasped the chain rule quickly and completed all practice exercises with 100% accuracy."
                      </p>
                    </div>
                  </div>

                </div>

                {/* Right Column (Billing & Quick Actions) */}
                <div className="space-y-6">
                  
                  {/* Billing Card */}
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                    <h3 className="text-lg font-bold text-brand-navy mb-6 flex items-center gap-2">
                      <CreditCard size={20} className="text-brand-gold" /> Billing Summary
                    </h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                        <span className="text-gray-500 font-medium">Outstanding Balance</span>
                        <span className="text-2xl font-bold text-red-500">R450.00</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Next Invoice Date</span>
                        <span className="font-bold text-brand-navy">25 March 2026</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-brand-navy text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors shadow-md">
                      Pay Now
                    </button>
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-brand-navy rounded-2xl shadow-sm overflow-hidden">
                    <Link href="/portal/parent/bookings" className="flex items-center justify-between p-5 text-white hover:bg-white/5 transition-colors border-b border-white/10 group">
                      <span className="font-bold">Book a Lesson</span>
                      <ChevronRight size={18} className="text-brand-gold group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="/portal/parent/children" className="flex items-center justify-between p-5 text-white hover:bg-white/5 transition-colors group">
                      <span className="font-bold">Manage Children</span>
                      <ChevronRight size={18} className="text-brand-gold group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center shadow-sm mt-8">
              <Users className="mx-auto text-gray-300 mb-4" size={48} />
              <h2 className="text-xl font-bold text-brand-navy mb-2">No Children Linked</h2>
              <p className="text-gray-500 mb-6">You need to link a learner to your account to view their dashboard.</p>
              <Link href="/portal/parent/children" className="bg-brand-royal text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                Link a Child Account
              </Link>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}