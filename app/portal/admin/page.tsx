"use client";

import Link from 'next/link';
import { useState } from 'react';
import { 
  LayoutDashboard, Users, GraduationCap, CreditCard, ShieldCheck, 
  Settings, LogOut, Bell, Menu, TrendingUp, CheckCircle, Database, Activity
} from 'lucide-react';

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-brand-grey overflow-hidden">
      
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-[#081020] text-white flex flex-col transition-all duration-300 shrink-0`}>
        <div className="h-20 flex items-center justify-center border-b border-white/10 px-4">
          <Link href="/">
            <img src="/logo.png" alt="EduNova" className={`${sidebarOpen ? 'h-12' : 'h-8'} w-auto object-contain bg-white rounded p-1 transition-all`} />
          </Link>
        </div>

        <nav className="flex-grow py-6 space-y-2 px-3 overflow-y-auto">
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
          <Link href="/portal/admin/finance" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300 transition-colors">
            <CreditCard size={20} />
            {sidebarOpen && <span>Finance & Billing</span>}
          </Link>
          <Link href="/portal/admin/audit" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300 transition-colors">
            <ShieldCheck size={20} />
            {sidebarOpen && <span>Audit Logs</span>}
          </Link>
          <Link href="https://acadcoreos.base44.app/" target="_blank" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-brand-gold transition-colors mt-4 border border-brand-gold/20">
            <Database size={20} />
            {sidebarOpen && <span>Launch AcadCoreOS ↗</span>}
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10 space-y-2">
          <Link href="/portal/settings" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300 transition-colors">
            <Settings size={20} />
            {sidebarOpen && <span>System Settings</span>}
          </Link>
          <Link href="/login" className="flex items-center gap-4 px-4 py-3 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors">
            <LogOut size={20} />
            {sidebarOpen && <span>Logout</span>}
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col h-screen overflow-hidden">
        
        {/* Top Header */}
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
            </button>
            <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
              <div className="w-10 h-10 bg-brand-charcoal text-white rounded-full flex items-center justify-center font-bold">A</div>
              <div className="hidden md:block">
                <p className="text-sm font-bold text-brand-navy leading-tight">Super Admin</p>
                <p className="text-xs text-gray-500">Root Access</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-grow overflow-y-auto p-8">
          
          {/* Key Metrics Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm border-t-4 border-t-brand-royal">
              <p className="text-sm text-gray-500 font-bold mb-1">Total Revenue</p>
              <p className="text-3xl font-bold text-brand-navy">R 142,500</p>
              <p className="text-xs text-brand-teal flex items-center gap-1 mt-2"><TrendingUp size={12}/> +15% from last month</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm border-t-4 border-t-brand-teal">
              <p className="text-sm text-gray-500 font-bold mb-1">Active Students</p>
              <p className="text-3xl font-bold text-brand-navy">1,240</p>
              <p className="text-xs text-brand-teal flex items-center gap-1 mt-2"><TrendingUp size={12}/> +8% from last month</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm border-t-4 border-t-brand-gold">
              <p className="text-sm text-gray-500 font-bold mb-1">Active Tutors</p>
              <p className="text-3xl font-bold text-brand-navy">85</p>
              <p className="text-xs text-brand-teal flex items-center gap-1 mt-2"><TrendingUp size={12}/> +12 new this month</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm border-t-4 border-t-red-500">
              <p className="text-sm text-gray-500 font-bold mb-1">Pending Approvals</p>
              <p className="text-3xl font-bold text-brand-navy">14</p>
              <p className="text-xs text-red-500 flex items-center gap-1 mt-2">Requires immediate action</p>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left Column (2/3 width) */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Recent Financial Transactions */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-brand-navy">Recent Transactions</h2>
                  <Link href="/portal/admin/finance" className="text-sm text-brand-royal font-bold hover:underline">View Ledger</Link>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-200 text-xs text-gray-500 uppercase tracking-wider">
                        <th className="pb-3 font-bold">Transaction ID</th>
                        <th className="pb-3 font-bold">User</th>
                        <th className="pb-3 font-bold">Type</th>
                        <th className="pb-3 font-bold text-right">Amount</th>
                        <th className="pb-3 font-bold text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-gray-100">
                        <td className="py-3 text-gray-500">TXN-8904</td>
                        <td className="py-3 font-bold text-brand-navy">Mrs. Ndlovu</td>
                        <td className="py-3 text-gray-600">Lesson Package</td>
                        <td className="py-3 text-right font-bold text-brand-navy">R 850.00</td>
                        <td className="py-3 text-right"><span className="bg-brand-teal/10 text-brand-teal px-2 py-1 rounded text-xs font-bold">Cleared</span></td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 text-gray-500">TXN-8905</td>
                        <td className="py-3 font-bold text-brand-navy">Mr. T. Nkosi</td>
                        <td className="py-3 text-gray-600">Tutor Payout</td>
                        <td className="py-3 text-right font-bold text-red-500">- R 1,200.00</td>
                        <td className="py-3 text-right"><span className="bg-brand-royal/10 text-brand-royal px-2 py-1 rounded text-xs font-bold">Processing</span></td>
                      </tr>
                      <tr>
                        <td className="py-3 text-gray-500">TXN-8906</td>
                        <td className="py-3 font-bold text-brand-navy">Siphelele B.</td>
                        <td className="py-3 text-gray-600">Single Lesson</td>
                        <td className="py-3 text-right font-bold text-brand-navy">R 250.00</td>
                        <td className="py-3 text-right"><span className="bg-brand-teal/10 text-brand-teal px-2 py-1 rounded text-xs font-bold">Cleared</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

            {/* Right Column (1/3 width) */}
            <div className="space-y-8">
              
              {/* Tutor Approvals Widget */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-lg font-bold text-brand-navy mb-4 flex items-center gap-2">
                  <CheckCircle className="text-brand-gold" size={20} /> Pending Tutor Vetting
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <div>
                      <p className="font-bold text-brand-navy text-sm">Dr. A. Smith</p>
                      <p className="text-xs text-gray-500">Physical Sciences</p>
                    </div>
                    <button className="bg-brand-navy text-white px-3 py-1 rounded text-xs font-bold hover:bg-opacity-90">Review</button>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <div>
                      <p className="font-bold text-brand-navy text-sm">Mrs. K. Zulu</p>
                      <p className="text-xs text-gray-500">English Literature</p>
                    </div>
                    <button className="bg-brand-navy text-white px-3 py-1 rounded text-xs font-bold hover:bg-opacity-90">Review</button>
                  </div>
                </div>
              </div>

              {/* Institution Stats */}
              <div className="bg-brand-navy rounded-xl shadow-sm p-6 text-white">
                <h2 className="text-lg font-bold mb-4">Institution Overview</h2>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-gray-400">Partner Schools</span>
                    <span className="font-bold">12</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-gray-400">AcadCoreOS Tenants</span>
                    <span className="font-bold">45</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Data Usage</span>
                    <span className="font-bold text-brand-teal">24 GB</span>
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