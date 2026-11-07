"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  LayoutDashboard, Users, GraduationCap, CreditCard, ShieldCheck, 
  Settings, LogOut, Bell, Menu, TrendingUp, CheckCircle, Database, 
  Activity, Video, MessageSquare, AlertTriangle, PlayCircle, Eye,
  UserPlus, Send
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

      if (!token || !userData) {
        router.replace('/login/admin');
        return;
      }

      setUser(JSON.parse(userData));

      const fetchData = async () => {
        try {
          const response = await fetch('https://edunova-academy-qkk5.onrender.com/api/admin/dashboard', {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` },
          });

          if (response.ok) {
            const data = await response.json();
            setDashboardData(data);
          } else if (response.status === 401 || response.status === 403) {
            localStorage.removeItem('edunova_token');
            localStorage.removeItem('edunova_user');
            router.replace('/login/admin');
          }
        } catch (error) {
          console.error("Failed to fetch dashboard data", error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('edunova_token');
    localStorage.removeItem('edunova_user');
    router.push('/login/admin');
  };

  if (isLoading) return <div className="flex h-screen items-center justify-center bg-brand-grey"><p className="text-brand-navy font-bold">Loading Admin Portal...</p></div>;
  if (!user) return null;

  return (
    <div className="flex h-screen bg-brand-grey overflow-hidden">
      
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-[#081020] text-white flex flex-col transition-all duration-300 shrink-0`}>
        <div className="h-20 flex items-center justify-center border-b border-white/10 px-4">
          <Link href="/">
            <img src="/logo.png" alt="EduNova" className={`${sidebarOpen ? 'h-12' : 'h-8'} w-auto object-contain bg-white rounded p-1 transition-all`} />
          </Link>
        </div>

        <nav className="flex-grow py-6 space-y-1 px-3 overflow-y-auto">
          <Link href="/portal/admin" className="flex items-center gap-4 px-4 py-3 bg-brand-royal rounded-lg font-medium transition-colors">
            <LayoutDashboard size={20} />
            {sidebarOpen && <span>Executive Overview</span>}
          </Link>
          <Link href="/portal/admin/users" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300 transition-colors">
            <Users size={20} />
            {sidebarOpen && <span>User Management</span>}
          </Link>
          <Link href="/portal/admin/academics" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300 transition-colors">
            <GraduationCap size={20} />
            {sidebarOpen && <span>Academic Management</span>}
          </Link>
          
          <div className="pt-4 pb-2">
             {sidebarOpen && <p className="text-xs font-bold text-gray-500 uppercase tracking-wider pl-4 mb-2">Monitoring</p>}
          </div>
          <Link href="/portal/admin/live-monitor" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-brand-sky transition-colors">
            <Video size={20} />
            {sidebarOpen && <span>Live Class Monitor</span>}
          </Link>
          <Link href="/portal/admin/communications" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-brand-gold transition-colors">
            <MessageSquare size={20} />
            {sidebarOpen && <span>Comm. Audit (Safeguarding)</span>}
          </Link>

          <div className="pt-4 pb-2">
             {sidebarOpen && <p className="text-xs font-bold text-gray-500 uppercase tracking-wider pl-4 mb-2">Operations</p>}
          </div>
          <Link href="/portal/admin/finance" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300 transition-colors">
            <CreditCard size={20} />
            {sidebarOpen && <span>Finance & Billing</span>}
          </Link>
          <Link href="/portal/admin/audit" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300 transition-colors">
            <ShieldCheck size={20} />
            {sidebarOpen && <span>System Audit Logs</span>}
          </Link>
          
          <Link href="https://acadcoreos.base44.app/" target="_blank" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-brand-gold transition-colors mt-4 border border-brand-gold/20 bg-brand-gold/5">
            <Database size={20} />
            {sidebarOpen && <span>AcadCoreOS ↗</span>}
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10 space-y-2">
          <Link href="/portal/admin/settings" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300 transition-colors">
            <Settings size={20} />
            {sidebarOpen && <span>System Settings</span>}
          </Link>
          <button onClick={handleLogout} className="w-full flex items-center gap-4 px-4 py-3 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors">
            <LogOut size={20} />
            {sidebarOpen && <span>Terminate Session</span>}
          </button>
        </div>
      </aside>

      <main className="flex-grow flex flex-col h-screen overflow-hidden">
        
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-500 hover:text-brand-navy">
              <Menu size={24} />
            </button>
            <h2 className="text-xl font-bold text-brand-navy hidden md:block">Super Administrator</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm font-bold text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full">
              <Activity size={16} /> System Live
            </div>
            <button className="relative text-gray-500 hover:text-brand-navy">
              <Bell size={22} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
              <div className="w-10 h-10 bg-brand-charcoal text-white rounded-full flex items-center justify-center font-bold">
                {user.first_name.charAt(0)}
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-bold text-brand-navy leading-tight">{user.first_name} {user.last_name}</p>
                <p className="text-xs text-gray-500 capitalize">{user.role}</p>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-grow overflow-y-auto p-8">
          
          {/* Quick Actions */}
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-8 flex flex-wrap gap-3">
            <span className="text-sm font-bold text-gray-500 py-2 px-2">God Mode:</span>
            <Link href="/portal/tutor" className="bg-brand-navy/5 hover:bg-brand-navy hover:text-white text-brand-navy px-4 py-2 rounded text-sm font-bold transition-colors flex items-center gap-2"><PlayCircle size={16}/> Start a Class</Link>
            <Link href="/portal/admin/communications" className="bg-brand-navy/5 hover:bg-brand-navy hover:text-white text-brand-navy px-4 py-2 rounded text-sm font-bold transition-colors flex items-center gap-2"><Eye size={16}/> Read All Messages</Link>
            <Link href="/portal/admin/users" className="bg-brand-navy/5 hover:bg-brand-navy hover:text-white text-brand-navy px-4 py-2 rounded text-sm font-bold transition-colors flex items-center gap-2"><UserPlus size={16}/> Create New Admin</Link>
            <Link href="/portal/admin/notifications" className="bg-brand-navy/5 hover:bg-brand-navy hover:text-white text-brand-navy px-4 py-2 rounded text-sm font-bold transition-colors flex items-center gap-2"><Send size={16}/> Broadcast Alert</Link>
          </div>

          {/* Key Metrics */}
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
              <p className="text-xs text-red-500 flex items-center gap-1 mt-2">Requires immediate action</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            <div className="lg:col-span-2 space-y-8">
              {/* LIVE MONITOR WIDGET */}
              <div className="bg-brand-navy rounded-xl border border-white/10 shadow-sm p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/10 rounded-bl-full -mr-8 -mt-8"></div>
                <div className="flex justify-between items-center mb-6 relative z-10">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span> Live Session Monitor
                  </h2>
                  <Link href="/portal/admin/live-monitor" className="text-sm text-brand-sky font-bold hover:underline">View All (12 Active)</Link>
                </div>
                
                <div className="space-y-4 relative z-10">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-lg flex items-center justify-between">
                    <div>
                      <p className="font-bold text-white">Grade 11 Mathematics: Calculus</p>
                      <p className="text-sm text-gray-400">Tutor: Mr. T. Nkosi • Student: Siphelele B.</p>
                    </div>
                    <button className="bg-brand-teal text-white px-4 py-2 rounded text-sm font-bold hover:bg-teal-600 flex items-center gap-2">
                      <Eye size={16} /> Observe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* SAFEGUARDING ALERTS */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 border-l-4 border-l-brand-gold">
                <h2 className="text-lg font-bold text-brand-navy mb-2 flex items-center gap-2">
                  <ShieldCheck className="text-brand-gold" size={20} /> Safeguarding Alerts
                </h2>
                <div className="space-y-4 mt-4">
                  <div className="bg-orange-50 border border-orange-100 p-3 rounded-lg">
                    <div className="flex items-center gap-2 text-orange-600 font-bold text-sm mb-1">
                      <AlertTriangle size={14} /> Flagged Message
                    </div>
                    <p className="text-xs text-gray-700">Tutor attempted to share personal WhatsApp number with a minor.</p>
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