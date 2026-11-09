"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  LayoutDashboard, Users, CreditCard, Calendar, MessageSquare, 
  Settings, LogOut, Bell, Menu, ArrowRight, CheckCircle, 
  Clock, FileText, Award, TrendingUp, Download, Plus, BarChart3
} from 'lucide-react';

export default function ParentDashboard() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [selectedChild, setSelectedChild] = useState("Thabo");
  const [isLoading, setIsLoading] = useState(true);

  const children = [
    { name: "Thabo", grade: "Grade 11", school: "Pretoria Boys High", avatar: "T" },
    { name: "Lerato", grade: "Grade 8", school: "Pretoria High School for Girls", avatar: "L" }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('edunova_token');
      const userData = localStorage.getItem('edunova_user');
      if (!token || !userData) { router.replace('/login/parent'); return; }
      setUser(JSON.parse(userData));
      setIsLoading(false);
    }
  }, [router]);

  const handleLogout = () => { localStorage.clear(); router.push('/login/parent'); };

  if (isLoading || !user) return <div className="flex h-screen items-center justify-center bg-brand-grey"><p className="text-brand-navy font-bold">Loading...</p></div>;

  return (
    <div className="flex h-screen bg-brand-grey overflow-hidden">
      
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-brand-navy text-white flex flex-col transition-all duration-300 shrink-0`}>
        <div className="h-20 flex items-center justify-center border-b border-white/10 px-4">
          <Link href="/"><img src="/logo.png" alt="EduNova" className={`${sidebarOpen ? 'h-12' : 'h-8'} w-auto object-contain bg-white rounded p-1 transition-all`} /></Link>
        </div>

        <nav className="flex-grow py-6 space-y-2 px-3 overflow-y-auto">
          {/* FIXED: All internal portal routing */}
          <Link href="/portal/parent" className="flex items-center gap-4 px-4 py-3 bg-brand-royal rounded-lg font-medium"><LayoutDashboard size={20} />{sidebarOpen && <span>Dashboard</span>}</Link>
          <Link href="/portal/parent/children" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300"><Users size={20} />{sidebarOpen && <span>My Children</span>}</Link>
          <Link href="/portal/parent/progress" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300"><FileText size={20} />{sidebarOpen && <span>Academic Progress</span>}</Link>
          <Link href="/portal/parent/bookings" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300"><Calendar size={20} />{sidebarOpen && <span>Lesson Bookings</span>}</Link>
          <Link href="/portal/parent/billing" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300"><CreditCard size={20} />{sidebarOpen && <span>Payments & Invoices</span>}</Link>
          <Link href="/portal/parent/messages" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300"><MessageSquare size={20} />{sidebarOpen && <span>Messages</span>}</Link>
        </nav>

        <div className="p-4 border-t border-white/10 space-y-2">
          <Link href="/portal/parent/settings" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300"><Settings size={20} />{sidebarOpen && <span>Settings</span>}</Link>
          <button onClick={handleLogout} className="w-full flex items-center gap-4 px-4 py-3 hover:bg-red-500/20 text-red-400 rounded-lg"><LogOut size={20} />{sidebarOpen && <span>Logout</span>}</button>
        </div>
      </aside>

      <main className="flex-grow flex flex-col h-screen overflow-hidden">
        
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-500 hover:text-brand-navy"><Menu size={24} /></button>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative text-gray-500 hover:text-brand-navy"><Bell size={22} /><span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span></button>
            <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
              <div className="w-10 h-10 bg-brand-navy text-white rounded-full flex items-center justify-center font-bold">{user.first_name.charAt(0)}</div>
              <div className="hidden md:block">
                <p className="text-sm font-bold text-brand-navy leading-tight">{user.first_name} {user.last_name}</p>
                <p className="text-xs text-gray-500 capitalize">{user.role}</p>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-grow overflow-y-auto p-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-serif font-bold text-brand-navy mb-2">Parent Dashboard</h1>
              <p className="text-gray-600">Monitoring the academic progress of your children.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-2 flex items-center gap-2">
              <span className="text-sm font-bold text-gray-500 pl-2">Viewing:</span>
              {children.map((child) => (
                <button key={child.name} onClick={() => setSelectedChild(child.name)} className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${selectedChild === child.name ? 'bg-brand-royal text-white shadow-sm' : 'hover:bg-brand-grey text-brand-navy'}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${selectedChild === child.name ? 'bg-white text-brand-royal' : 'bg-brand-royal text-white'}`}>{child.avatar}</div>
                  {child.name}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-brand-navy rounded-2xl p-8 text-white mb-8 relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-royal/20 rounded-bl-full -mr-10 -mt-10"></div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-3xl font-serif font-bold text-white">{selectedChild}'s Overview</h2>
                  <span className="bg-brand-gold/20 text-brand-gold text-xs font-bold px-2 py-1 rounded border border-brand-gold/30">{children.find(c => c.name === selectedChild)?.grade}</span>
                </div>
                <p className="text-gray-300">School: {children.find(c => c.name === selectedChild)?.school}</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-white/10 rounded-lg p-3 text-center min-w-[100px] border border-white/10"><p className="text-sm text-gray-300 font-medium">Average</p><p className="text-xl font-bold text-brand-gold">82%</p></div>
                <div className="bg-white/10 rounded-lg p-3 text-center min-w-[100px] border border-white/10"><p className="text-sm text-gray-300 font-medium">Attendance</p><p className="text-xl font-bold text-brand-teal">98%</p></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-royal/10 text-brand-royal rounded-full flex items-center justify-center"><Calendar size={24} /></div>
              <div><p className="text-sm text-gray-500 font-medium">Upcoming Lessons</p><p className="text-2xl font-bold text-brand-navy">2 This Week</p></div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center"><Award size={24} /></div>
              <div><p className="text-sm text-gray-500 font-medium">Certificates Earned</p><p className="text-2xl font-bold text-brand-navy">3</p></div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-teal/10 text-brand-teal rounded-full flex items-center justify-center"><TrendingUp size={24} /></div>
              <div><p className="text-sm text-gray-500 font-medium">Class Rank</p><p className="text-2xl font-bold text-brand-navy">Top 10%</p></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-xl font-bold text-brand-navy mb-6 flex items-center gap-2"><BarChart3 size={20}/> Subject Performance</h2>
                <div className="h-48 bg-brand-grey rounded-lg flex items-end justify-between p-4 gap-4">
                  {[85, 72, 90, 65, 78, 88].map((h, i) => (
                    <div key={i} className="w-full bg-brand-royal/80 rounded-t hover:bg-brand-royal transition-colors" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-2 font-bold px-2"><span>Maths</span><span>Physics</span><span>English</span><span>History</span><span>Bio</span><span>Art</span></div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-xl font-bold text-brand-navy mb-6">Recent Tutor Feedback</h2>
                <div className="space-y-4">
                  <div className="p-4 border border-gray-100 rounded-lg bg-brand-grey/30">
                    <div className="flex justify-between items-start mb-2">
                      <div><h3 className="font-bold text-brand-navy">Mathematics: Calculus</h3><p className="text-xs text-gray-500">Tutor: Mr. T. Nkosi • Yesterday</p></div>
                      <span className="bg-brand-teal/10 text-brand-teal text-xs font-bold px-2 py-1 rounded">Excellent</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">"{selectedChild} showed great improvement today. Grasped the chain rule quickly and completed all practice exercises with 100% accuracy."</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-lg font-bold text-brand-navy mb-4 flex items-center gap-2"><CreditCard className="text-brand-royal" size={20} /> Billing</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2"><span className="text-sm text-gray-500">Outstanding Balance</span><span className="font-bold text-red-500">R450.00</span></div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2"><span className="text-sm text-gray-500">Next Invoice</span><span className="font-bold text-brand-navy">25 March 2026</span></div>
                </div>
                <Link href="/portal/parent/billing" className="w-full block text-center bg-brand-navy text-white px-4 py-2 rounded text-sm font-bold hover:bg-opacity-90 mb-3">Pay Now</Link>
                <Link href="/portal/parent/billing" className="w-full text-center border border-gray-300 text-gray-600 px-4 py-2 rounded text-sm font-bold hover:bg-gray-100 flex items-center justify-center gap-2"><Download size={14}/> Statement</Link>
              </div>

              <div className="bg-brand-navy rounded-xl shadow-sm p-6 text-white">
                <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <Link href="/portal/parent/bookings" className="w-full text-left bg-white/10 hover:bg-white/20 px-4 py-3 rounded transition-colors text-sm font-medium flex justify-between items-center">Book a Lesson <ArrowRight size={16} /></Link>
                  <Link href="/portal/parent/children" className="w-full text-left bg-white/10 hover:bg-white/20 px-4 py-3 rounded transition-colors text-sm font-medium flex justify-between items-center">Update Child Profile <ArrowRight size={16} /></Link>
                  <Link href="/portal/parent/progress" className="w-full text-left bg-white/10 hover:bg-white/20 px-4 py-3 rounded transition-colors text-sm font-medium flex justify-between items-center">Download Report <ArrowRight size={16} /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}