"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  LayoutDashboard, Users, GraduationCap, CreditCard, ShieldCheck, 
  Settings, LogOut, Bell, Menu, TrendingUp, CheckCircle, Database, 
  Activity, Video, MessageSquare, AlertTriangle, PlayCircle, Eye,
  UserPlus, Send, Calendar as CalendarIcon, BarChart3, Edit, Newspaper
} from 'lucide-react';

export default function AdminDashboard() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('edunova_token');
      const userData = localStorage.getItem('edunova_user');
      if (!token || !userData) { router.replace('/login/admin'); return; }
      setUser(JSON.parse(userData));

      const fetchData = async () => {
        try {
          const response = await fetch('https://edunova-academy-qkk5.onrender.com/api/admin/dashboard', {
            headers: { 'Authorization': `Bearer ${token}` },
          });
          if (response.ok) {
            setDashboardData(await response.json());
          }
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.clear();
    router.push('/login/admin');
  };

  if (isLoading) return <div className="flex h-screen items-center justify-center bg-brand-grey"><p className="text-brand-navy font-bold">Loading Admin Command Center...</p></div>;
  if (!user) return null;

  return (
    <div className="flex h-screen bg-brand-grey overflow-hidden">
      
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-[#081020] text-white flex flex-col transition-all duration-300 shrink-0`}>
        <div className="h-20 flex items-center justify-center border-b border-white/10 px-4">
          <Link href="/"><img src="/logo.png" alt="EduNova" className={`${sidebarOpen ? 'h-12' : 'h-8'} w-auto object-contain bg-white rounded p-1 transition-all`} /></Link>
        </div>

        <nav className="flex-grow py-6 space-y-1 px-3 overflow-y-auto">
          <Link href="/portal/admin" className="flex items-center gap-4 px-4 py-3 bg-brand-royal rounded-lg font-medium"><LayoutDashboard size={20} />{sidebarOpen && <span>Command Center</span>}</Link>
          <Link href="/portal/admin/users" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300"><Users size={20} />{sidebarOpen && <span>User Management</span>}</Link>
          <Link href="/portal/admin/academics" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300"><GraduationCap size={20} />{sidebarOpen && <span>Academic Management</span>}</Link>
          <Link href="/portal/admin/website" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300"><Edit size={20} />{sidebarOpen && <span>Edit Website Content</span>}</Link>
          <Link href="/portal/admin/news" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300"><Newspaper size={20} />{sidebarOpen && <span>News Manager</span>}</Link>
          
          <div className="pt-4 pb-2">{sidebarOpen && <p className="text-xs font-bold text-gray-500 uppercase tracking-wider pl-4 mb-2">Monitoring</p>}</div>
          <Link href="/portal/admin/live-monitor" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-brand-sky"><Video size={20} />{sidebarOpen && <span>Live Class Monitor</span>}</Link>
          <Link href="/portal/admin/communications" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-brand-gold"><MessageSquare size={20} />{sidebarOpen && <span>Comm. Audit</span>}</Link>

          <div className="pt-4 pb-2">{sidebarOpen && <p className="text-xs font-bold text-gray-500 uppercase tracking-wider pl-4 mb-2">Operations</p>}</div>
          <Link href="/portal/admin/finance" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300"><CreditCard size={20} />{sidebarOpen && <span>Finance & Billing</span>}</Link>
          <Link href="/portal/admin/audit" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300"><ShieldCheck size={20} />{sidebarOpen && <span>System Audit Logs</span>}</Link>
          
          <Link href="https://acadcoreos.base44.app/" target="_blank" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-brand-gold mt-4 border border-brand-gold/20 bg-brand-gold/5"><Database size={20} />{sidebarOpen && <span>AcadCoreOS ↗</span>}</Link>
        </nav>

        <div className="p-4 border-t border-white/10 space-y-2">
          <Link href="/portal/admin/settings" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300"><Settings size={20} />{sidebarOpen && <span>System Settings</span>}</Link>
          <button onClick={handleLogout} className="w-full flex items-center gap-4 px-4 py-3 hover:bg-red-500/20 text-red-400 rounded-lg"><LogOut size={20} />{sidebarOpen && <span>Terminate Session</span>}</button>
        </div>
      </aside>

      <main className="flex-grow flex flex-col h-screen overflow-hidden">
        
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-500 hover:text-brand-navy"><Menu size={24} /></button>
            <h2 className="text-xl font-bold text-brand-navy hidden md:block">Super Administrator</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm font-bold text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full"><Activity size={16} /> System Live</div>
            <button className="relative text-gray-500 hover:text-brand-navy"><Bell size={22} /><span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span></button>
            <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
              <div className="w-10 h-10 bg-brand-charcoal text-white rounded-full flex items-center justify-center font-bold">{user.first_name.charAt(0)}</div>
              <div className="hidden md:block">
                <p className="text-sm font-bold text-brand-navy leading-tight">{user.first_name} {user.last_name}</p>
                <p className="text-xs text-gray-500 capitalize">{user.role}</p>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-grow overflow-y-auto p-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm border-t-4 border-t-brand-royal">
              <p className="text-sm text-gray-500 font-bold mb-1">Total Revenue</p>
              <p className="text-3xl font-bold text-brand-navy">R 142,500</p>
              <p className="text-xs text-brand-teal flex items-center gap-1 mt-2"><TrendingUp size={12}/> +15% from last month</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm border-t-4 border-t-brand-teal">
              <p className="text-sm text-gray-500 font-bold mb-1">Total Users</p>
              <p className="text-3xl font-bold text-brand-navy">{dashboardData?.total_users || 0}</p>
              <p className="text-xs text-gray-500 flex items-center gap-1 mt-2">Across all roles</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm border-t-4 border-t-brand-gold">
              <p className="text-sm text-gray-500 font-bold mb-1">Partner Schools</p>
              <p className="text-3xl font-bold text-brand-navy">{dashboardData?.total_schools || 0}</p>
              <p className="text-xs text-brand-teal flex items-center gap-1 mt-2"><TrendingUp size={12}/> Active Tenants</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm border-t-4 border-t-red-500">
              <p className="text-sm text-gray-500 font-bold mb-1">Pending Approvals</p>
              <p className="text-3xl font-bold text-brand-navy">14</p>
              <p className="text-xs text-red-500 flex items-center gap-1 mt-2">Requires action</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-xl font-bold text-brand-navy mb-6 flex items-center gap-2"><BarChart3 size={20}/> Monthly Revenue & Enrolments</h2>
                <div className="h-64 bg-brand-grey rounded-lg flex items-end justify-between p-4 gap-2">
                  {[40, 60, 45, 80, 65, 90, 75, 100, 85, 95, 70, 85].map((h, i) => (
                    <div key={i} className="w-full bg-brand-royal/80 rounded-t hover:bg-brand-royal transition-colors" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-2 font-bold px-2">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-xl font-bold text-brand-navy mb-6 flex items-center gap-2"><CalendarIcon size={20}/> Today's Operations</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg bg-brand-grey/30">
                    <div className="w-16 h-16 bg-brand-navy text-white rounded-lg flex flex-col items-center justify-center shrink-0"><span className="text-xs font-bold uppercase">09:00</span></div>
                    <div className="flex-grow"><h3 className="font-bold text-brand-navy">Tutor Onboarding Session</h3><p className="text-sm text-gray-500">Review new applications (5 pending)</p></div>
                    <button className="bg-brand-royal text-white px-4 py-2 rounded text-sm font-bold">Start</button>
                  </div>
                  <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg bg-brand-grey/30">
                    <div className="w-16 h-16 bg-brand-navy text-white rounded-lg flex flex-col items-center justify-center shrink-0"><span className="text-xs font-bold uppercase">14:00</span></div>
                    <div className="flex-grow"><h3 className="font-bold text-brand-navy">Financial Reconciliation</h3><p className="text-sm text-gray-500">Process tutor payouts for November</p></div>
                    <button className="border border-brand-navy text-brand-navy px-4 py-2 rounded text-sm font-bold">Review</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-brand-navy rounded-xl border border-white/10 shadow-sm p-6 text-white">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold flex items-center gap-2"><span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span> Live Classes</h2>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
                  <p className="font-bold text-white mb-1">Grade 11 Mathematics</p>
                  <p className="text-sm text-gray-400 mb-3">Tutor: Mr. T. Nkosi</p>
                  <Link href="/portal/admin/live-monitor" className="w-full block text-center bg-brand-teal text-white py-2 rounded text-sm font-bold flex items-center justify-center gap-2"><Eye size={16}/> Observe Session</Link>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 border-l-4 border-l-brand-gold">
                <h2 className="text-lg font-bold text-brand-navy mb-4 flex items-center gap-2"><ShieldCheck className="text-brand-gold" size={20} /> Safeguarding</h2>
                <div className="bg-orange-50 border border-orange-100 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-orange-600 font-bold text-sm mb-2"><AlertTriangle size={16} /> Review Required</div>
                  <p className="text-xs text-gray-700 mb-3">Tutor attempted to share a personal contact number with a minor.</p>
                  <Link href="/portal/admin/communications" className="text-xs bg-orange-600 text-white px-3 py-1.5 rounded font-bold inline-block">Review Chat</Link>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-lg font-bold text-brand-navy mb-4">Quick Management</h2>
                <div className="space-y-2">
                  <Link href="/portal/admin/users" className="w-full text-left px-4 py-3 bg-brand-grey rounded-lg text-sm font-bold text-brand-navy flex items-center gap-3 hover:bg-gray-200 transition-colors"><UserPlus size={16}/> Add New Admin</Link>
                  <Link href="/portal/admin/users" className="w-full text-left px-4 py-3 bg-brand-grey rounded-lg text-sm font-bold text-brand-navy flex items-center gap-3 hover:bg-gray-200 transition-colors"><Users size={16}/> Add New Tutor</Link>
                  <Link href="/portal/admin/finance" className="w-full text-left px-4 py-3 bg-brand-grey rounded-lg text-sm font-bold text-brand-navy flex items-center gap-3 hover:bg-gray-200 transition-colors"><CreditCard size={16}/> View Finance Ledger</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}