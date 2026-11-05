"use client";

import Link from 'next/link';
import { useState } from 'react';
import { 
  LayoutDashboard, Users, Calendar, FileText, DollarSign, 
  Settings, LogOut, Bell, Menu, CheckCircle, Clock, Video, ChevronRight
} from 'lucide-react';

export default function TutorDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-brand-grey overflow-hidden">
      
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-brand-navy text-white flex flex-col transition-all duration-300 shrink-0`}>
        <div className="h-20 flex items-center justify-center border-b border-white/10 px-4">
          <Link href="/">
            <img src="/logo.png" alt="EduNova" className={`${sidebarOpen ? 'h-12' : 'h-8'} w-auto object-contain bg-white rounded p-1 transition-all`} />
          </Link>
        </div>

        <nav className="flex-grow py-6 space-y-2 px-3 overflow-y-auto">
          <Link href="/portal/tutor" className="flex items-center gap-4 px-4 py-3 bg-brand-royal rounded-lg font-medium transition-colors">
            <LayoutDashboard size={20} />
            {sidebarOpen && <span>Dashboard</span>}
          </Link>
          <Link href="/portal/tutor/students" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300 transition-colors">
            <Users size={20} />
            {sidebarOpen && <span>My Students</span>}
          </Link>
          <Link href="/portal/tutor/schedule" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300 transition-colors">
            <Calendar size={20} />
            {sidebarOpen && <span>Schedule</span>}
          </Link>
          <Link href="/portal/reports" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300 transition-colors">
            <FileText size={20} />
            {sidebarOpen && <span>Lesson Reports</span>}
          </Link>
          <Link href="/portal/earnings" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-brand-gold transition-colors">
            <DollarSign size={20} />
            {sidebarOpen && <span>My Earnings</span>}
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10 space-y-2">
          <Link href="/portal/settings" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300 transition-colors">
            <Settings size={20} />
            {sidebarOpen && <span>Settings</span>}
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
            <h2 className="text-xl font-bold text-brand-navy hidden md:block">Tutor Portal</h2>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative text-gray-500 hover:text-brand-navy">
              <Bell size={22} />
            </button>
            <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
              <div className="w-10 h-10 bg-brand-teal text-white rounded-full flex items-center justify-center font-bold">T</div>
              <div className="hidden md:block">
                <p className="text-sm font-bold text-brand-navy leading-tight">Mr. T. Nkosi</p>
                <p className="text-xs text-gray-500">Maths & Physics Tutor</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-grow overflow-y-auto p-8">
          
          {/* Earnings Top Banner */}
          <div className="bg-brand-navy rounded-2xl p-8 text-white mb-8 relative overflow-hidden shadow-lg flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="relative z-10">
              <h1 className="text-3xl font-serif font-bold text-white mb-2">Welcome back, Mr. Nkosi!</h1>
              <p className="text-gray-300">You have 3 lessons scheduled for today. Don't forget to submit your reports.</p>
            </div>
            <div className="relative z-10 bg-white/10 rounded-xl p-4 border border-white/10 text-center min-w-[200px]">
              <p className="text-sm text-gray-300 mb-1">Pending Earnings</p>
              <p className="text-3xl font-bold text-brand-teal">R 4,250.00</p>
              <button className="text-xs text-brand-gold font-bold hover:underline mt-2">Withdraw Funds</button>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left Column (2/3 width) */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-brand-navy">Upcoming Lessons</h2>
                  <Link href="/portal/tutor/schedule" className="text-sm text-brand-royal font-bold hover:underline">Full Schedule</Link>
                </div>
                
                <div className="space-y-4">
                  {/* Lesson Item */}
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border border-gray-100 rounded-lg bg-brand-grey/30 gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-brand-navy text-white rounded-lg flex flex-col items-center justify-center shrink-0">
                        <span className="text-xs font-bold uppercase">Today</span>
                        <span className="text-base font-bold">14:00</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-brand-navy">Mathematics: Calculus</h3>
                        <p className="text-sm text-gray-500">Student: Siphelele B. (Grade 11)</p>
                      </div>
                    </div>
                    <Link href="/portal/classroom" className="bg-brand-teal text-white px-4 py-2 rounded text-sm font-bold hover:bg-teal-600 flex items-center gap-2 w-full md:w-auto justify-center">
                      <Video size={16} /> Start Class
                    </Link>
                  </div>

                  {/* Lesson Item */}
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border border-gray-100 rounded-lg bg-brand-grey/30 gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-brand-navy text-white rounded-lg flex flex-col items-center justify-center shrink-0">
                        <span className="text-xs font-bold uppercase">Today</span>
                        <span className="text-base font-bold">16:30</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-brand-navy">Physical Sciences: Mechanics</h3>
                        <p className="text-sm text-gray-500">Student: Lerato N. (Grade 8)</p>
                      </div>
                    </div>
                    <Link href="/portal/classroom" className="border border-brand-navy text-brand-navy px-4 py-2 rounded text-sm font-bold hover:bg-brand-navy hover:text-white flex items-center gap-2 w-full md:w-auto justify-center">
                      <Clock size={16} /> Waiting
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (1/3 width) */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-lg font-bold text-brand-navy mb-4">Action Required</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                    <FileText className="text-brand-gold mt-1 shrink-0" size={18} />
                    <div>
                      <p className="font-bold text-brand-navy text-sm">Submit Lesson Report</p>
                      <p className="text-xs text-gray-500">Maths with Siphelele (Yesterday)</p>
                      <button className="text-xs text-brand-royal font-bold hover:underline mt-1">Complete Report</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-lg font-bold text-brand-navy mb-4">Student Progress</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium text-gray-600">Siphelele B.</p>
                    <span className="text-brand-teal font-bold text-sm">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-brand-teal h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <p className="text-sm font-medium text-gray-600">Lerato N.</p>
                    <span className="text-brand-royal font-bold text-sm">72%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-brand-royal h-2 rounded-full" style={{ width: '72%' }}></div>
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