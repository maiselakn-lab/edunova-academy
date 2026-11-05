"use client";

import Link from 'next/link';
import { useState } from 'react';
import { 
  LayoutDashboard, BookOpen, Calendar, FileText, Bot, Settings, 
  LogOut, Bell, Search, PlayCircle, Clock, CheckCircle, ArrowRight
} from 'lucide-react';

export default function StudentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-brand-grey overflow-hidden">
      
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-brand-navy text-white flex flex-col transition-all duration-300 shrink-0`}>
        <div className="h-20 flex items-center justify-center border-b border-white/10 px-4">
          <Link href="/">
            <img src="/logo.png" alt="EduNova" className={`${sidebarOpen ? 'h-12' : 'h-8'} w-auto object-contain bg-white rounded p-1`} />
          </Link>
        </div>

        <nav className="flex-grow py-6 space-y-2 px-3 overflow-y-auto">
          <Link href="/portal/student" className="flex items-center gap-4 px-4 py-3 bg-brand-royal rounded-lg font-medium transition-colors">
            <LayoutDashboard size={20} />
            {sidebarOpen && <span>Dashboard</span>}
          </Link>
          <Link href="/portal/classroom" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300 transition-colors">
            <PlayCircle size={20} />
            {sidebarOpen && <span>Live Classroom</span>}
          </Link>
          <Link href="/portal/courses" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300 transition-colors">
            <BookOpen size={20} />
            {sidebarOpen && <span>My Subjects</span>}
          </Link>
          <Link href="/portal/calendar" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300 transition-colors">
            <Calendar size={20} />
            {sidebarOpen && <span>Timetable</span>}
          </Link>
          <Link href="/portal/assessments" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300 transition-colors">
            <FileText size={20} />
            {sidebarOpen && <span>Assessments</span>}
          </Link>
          <Link href="/ai-assistant" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-brand-gold transition-colors">
            <Bot size={20} />
            {sidebarOpen && <span>AI Assistant</span>}
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
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input type="text" placeholder="Search subjects, tutors..." className="pl-10 pr-4 py-2 bg-brand-grey border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-royal w-64" />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative text-gray-500 hover:text-brand-navy">
              <Bell size={22} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
              <div className="w-10 h-10 bg-brand-royal text-white rounded-full flex items-center justify-center font-bold">S</div>
              <div className="hidden md:block">
                <p className="text-sm font-bold text-brand-navy leading-tight">Siphelele B.</p>
                <p className="text-xs text-gray-500">Grade 11 Student</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-grow overflow-y-auto p-8">
          
          {/* Welcome Banner */}
          <div className="bg-brand-navy rounded-2xl p-8 text-white mb-8 relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-royal/20 rounded-bl-full -mr-10 -mt-10"></div>
            <div className="relative z-10">
              <h1 className="text-3xl font-serif font-bold mb-2">Welcome back, Siphelele!</h1>
              <p className="text-gray-300 mb-6 max-w-xl">You have 2 lessons scheduled for today. Your Mathematics tutor is waiting for you in the virtual classroom.</p>
              <Link href="/portal/classroom" className="bg-brand-gold text-brand-navy px-6 py-3 rounded-sm font-bold inline-flex items-center gap-2 hover:bg-yellow-500 transition-colors shadow-md">
                Join Next Lesson <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-royal/10 text-brand-royal rounded-full flex items-center justify-center"><BookOpen size={24} /></div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Enrolled Subjects</p>
                <p className="text-2xl font-bold text-brand-navy">6 Subjects</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-teal/10 text-brand-teal rounded-full flex items-center justify-center"><CheckCircle size={24} /></div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Average Grade</p>
                <p className="text-2xl font-bold text-brand-navy">78% (B)</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center"><Clock size={24} /></div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Upcoming Lessons</p>
                <p className="text-2xl font-bold text-brand-navy">3 This Week</p>
              </div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left Column (2/3 width) */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-brand-navy">Today's Schedule</h2>
                  <Link href="/portal/calendar" className="text-sm text-brand-royal font-bold hover:underline">View Calendar</Link>
                </div>
                
                <div className="space-y-4">
                  {/* Lesson Item */}
                  <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg hover:border-brand-royal transition-colors bg-brand-grey/50">
                    <div className="w-16 h-16 bg-brand-navy text-white rounded-lg flex flex-col items-center justify-center shrink-0">
                      <span className="text-xs font-bold uppercase">Today</span>
                      <span className="text-lg font-bold">14:00</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-brand-navy">Mathematics: Calculus</h3>
                      <p className="text-sm text-gray-500">Tutor: Mr. T. Nkosi</p>
                    </div>
                    <Link href="/portal/classroom" className="bg-brand-royal text-white px-4 py-2 rounded text-sm font-bold hover:bg-blue-700">Join</Link>
                  </div>

                  {/* Lesson Item */}
                  <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg hover:border-brand-royal transition-colors bg-brand-grey/50">
                    <div className="w-16 h-16 bg-brand-navy text-white rounded-lg flex flex-col items-center justify-center shrink-0">
                      <span className="text-xs font-bold uppercase">Today</span>
                      <span className="text-lg font-bold">16:30</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-brand-navy">Physical Sciences: Mechanics</h3>
                      <p className="text-sm text-gray-500">Tutor: Dr. A. Smith</p>
                    </div>
                    <Link href="/portal/classroom" className="bg-brand-royal text-white px-4 py-2 rounded text-sm font-bold hover:bg-blue-700">Join</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (1/3 width) */}
            <div className="space-y-8">
              <div className="bg-brand-navy rounded-xl shadow-sm p-6 text-white relative overflow-hidden">
                <Bot className="absolute -bottom-4 -right-4 text-white/10" size={100} />
                <h2 className="text-lg font-bold mb-2 relative z-10">Need Help?</h2>
                <p className="text-sm text-gray-300 mb-4 relative z-10">Ask our AI assistant for instant explanations and practice questions.</p>
                <Link href="/ai-assistant" className="bg-brand-gold text-brand-navy px-4 py-2 rounded text-sm font-bold hover:bg-yellow-500 relative z-10 inline-block">Ask AI Now</Link>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-lg font-bold text-brand-navy mb-4">Recent Assessments</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <div>
                      <p className="font-bold text-brand-navy text-sm">Maths Test 1</p>
                      <p className="text-xs text-gray-500">Returned 2 days ago</p>
                    </div>
                    <span className="font-bold text-brand-teal">85%</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <div>
                      <p className="font-bold text-brand-navy text-sm">Physics Quiz</p>
                      <p className="text-xs text-gray-500">Returned 1 week ago</p>
                    </div>
                    <span className="font-bold text-brand-royal">72%</span>
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