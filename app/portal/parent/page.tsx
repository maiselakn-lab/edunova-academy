"use client";

import Link from 'next/link';
import { useState } from 'react';
import { 
  LayoutDashboard, Users, CreditCard, Calendar, MessageSquare, 
  Settings, LogOut, Bell, Search, Menu, ArrowRight, CheckCircle, 
  Clock, FileText, ChevronDown
} from 'lucide-react';

export default function ParentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedChild, setSelectedChild] = useState("Thabo");

  // Mock Data for Children
  const children = [
    { name: "Thabo", grade: "Grade 11", school: "Pretoria Boys High", avatar: "T" },
    { name: "Lerato", grade: "Grade 8", school: "Pretoria High School for Girls", avatar: "L" }
  ];

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
          <Link href="/portal/parent" className="flex items-center gap-4 px-4 py-3 bg-brand-royal rounded-lg font-medium transition-colors">
            <LayoutDashboard size={20} />
            {sidebarOpen && <span>Dashboard</span>}
          </Link>
          <Link href="/portal/parent/children" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300 transition-colors">
            <Users size={20} />
            {sidebarOpen && <span>My Children</span>}
          </Link>
          <Link href="/portal/parent/progress" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300 transition-colors">
            <FileText size={20} />
            {sidebarOpen && <span>Academic Progress</span>}
          </Link>
          <Link href="/portal/parent/bookings" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300 transition-colors">
            <Calendar size={20} />
            {sidebarOpen && <span>Lesson Bookings</span>}
          </Link>
          <Link href="/portal/parent/billing" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300 transition-colors">
            <CreditCard size={20} />
            {sidebarOpen && <span>Payments & Invoices</span>}
          </Link>
          <Link href="/portal/parent/messages" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300 transition-colors">
            <MessageSquare size={20} />
            {sidebarOpen && <span>Messages</span>}
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10 space-y-2">
          <Link href="/portal/parent/settings" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300 transition-colors">
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
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 bg-brand-grey border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-royal w-64" />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative text-gray-500 hover:text-brand-navy">
              <Bell size={22} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
              <div className="w-10 h-10 bg-brand-navy text-white rounded-full flex items-center justify-center font-bold">P</div>
              <div className="hidden md:block">
                <p className="text-sm font-bold text-brand-navy leading-tight">Mrs. Ndlovu</p>
                <p className="text-xs text-gray-500">Parent Account</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-grow overflow-y-auto p-8">
          
          {/* Child Selector & Welcome */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-serif font-bold text-brand-navy mb-2">Parent Dashboard</h1>
              <p className="text-gray-600">Monitoring the academic progress of your children.</p>
            </div>
            
            {/* The Child Switcher */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-2 flex items-center gap-2">
              <span className="text-sm font-bold text-gray-500 pl-2">Viewing:</span>
              {children.map((child) => (
                <button 
                  key={child.name}
                  onClick={() => setSelectedChild(child.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${selectedChild === child.name ? 'bg-brand-royal text-white shadow-sm' : 'hover:bg-brand-grey text-brand-navy'}`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${selectedChild === child.name ? 'bg-white text-brand-royal' : 'bg-brand-royal text-white'}`}>
                    {child.avatar}
                  </div>
                  {child.name}
                </button>
              ))}
            </div>
          </div>

          {/* Current Child Overview Banner */}
          <div className="bg-brand-navy rounded-2xl p-8 text-white mb-8 relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-royal/20 rounded-bl-full -mr-10 -mt-10"></div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-3xl font-serif font-bold text-white">{selectedChild}'s Overview</h2>
                  <span className="bg-brand-gold/20 text-brand-gold text-xs font-bold px-2 py-1 rounded border border-brand-gold/30">
                    {children.find(c => c.name === selectedChild)?.grade}
                  </span>
                </div>
                <p className="text-gray-300">School: {children.find(c => c.name === selectedChild)?.school}</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-white/10 rounded-lg p-3 text-center min-w-[100px] border border-white/10">
                  <p className="text-sm text-gray-300 font-medium">Average</p>
                  <p className="text-xl font-bold text-brand-gold">82%</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center min-w-[100px] border border-white/10">
                  <p className="text-sm text-gray-300 font-medium">Attendance</p>
                  <p className="text-xl font-bold text-brand-teal">98%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left Column (2/3 width) */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Recent Tutor Feedback */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-brand-navy">Recent Tutor Feedback</h2>
                  <Link href="/portal/parent/progress" className="text-sm text-brand-royal font-bold hover:underline">View All</Link>
                </div>
                
                <div className="space-y-4">
                  {/* Feedback Item */}
                  <div className="p-4 border border-gray-100 rounded-lg bg-brand-grey/30">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-brand-navy">Mathematics: Calculus</h3>
                        <p className="text-xs text-gray-500">Tutor: Mr. T. Nkosi • Yesterday</p>
                      </div>
                      <span className="bg-brand-teal/10 text-brand-teal text-xs font-bold px-2 py-1 rounded">Excellent</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">"{selectedChild} showed great improvement today. Grasped the chain rule quickly and completed all practice exercises with 100% accuracy. Keep encouraging the extra homework!"</p>
                  </div>

                  {/* Feedback Item */}
                  <div className="p-4 border border-gray-100 rounded-lg bg-brand-grey/30">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-brand-navy">Physical Sciences: Mechanics</h3>
                        <p className="text-xs text-gray-500">Tutor: Dr. A. Smith • 3 Days Ago</p>
                      </div>
                      <span className="bg-brand-royal/10 text-brand-royal text-xs font-bold px-2 py-1 rounded">Needs Practice</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">"Struggled slightly with Newton's Second Law applications today. We have assigned extra practice problems. Please ensure the homework is completed before our next lesson."</p>
                  </div>
                </div>
              </div>

              {/* Upcoming Lessons */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-xl font-bold text-brand-navy mb-4">Upcoming Bookings</h2>
                <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg bg-white">
                  <div className="w-16 h-16 bg-brand-navy text-white rounded-lg flex flex-col items-center justify-center shrink-0">
                    <span className="text-xs font-bold uppercase">Tomorrow</span>
                    <span className="text-lg font-bold">15:00</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-brand-navy">English Home Language</h3>
                    <p className="text-sm text-gray-500">Tutor: Mrs. K. Zulu</p>
                  </div>
                  <button className="border border-brand-navy text-brand-navy px-4 py-2 rounded text-sm font-bold hover:bg-brand-navy hover:text-white transition-colors">Details</button>
                </div>
              </div>
            </div>

            {/* Right Column (1/3 width) */}
            <div className="space-y-8">
              
              {/* Financial Overview */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-lg font-bold text-brand-navy mb-4 flex items-center gap-2">
                  <CreditCard className="text-brand-royal" size={20} /> Billing Overview
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-sm text-gray-500">Outstanding Balance</span>
                    <span className="font-bold text-red-500">R450.00</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-sm text-gray-500">Next Invoice Date</span>
                    <span className="font-bold text-brand-navy">25 March 2026</span>
                  </div>
                </div>
                <button className="w-full bg-brand-navy text-white px-4 py-2 rounded text-sm font-bold hover:bg-opacity-90 transition-colors">Pay Now</button>
              </div>

              {/* Quick Actions */}
              <div className="bg-brand-navy rounded-xl shadow-sm p-6 text-white">
                <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <button className="w-full text-left bg-white/10 hover:bg-white/20 px-4 py-3 rounded transition-colors text-sm font-medium flex justify-between items-center">
                    Book a New Lesson <ArrowRight size={16} />
                  </button>
                  <button className="w-full text-left bg-white/10 hover:bg-white/20 px-4 py-3 rounded transition-colors text-sm font-medium flex justify-between items-center">
                    Update Child Profile <ArrowRight size={16} />
                  </button>
                  <button className="w-full text-left bg-white/10 hover:bg-white/20 px-4 py-3 rounded transition-colors text-sm font-medium flex justify-between items-center">
                    Download Report Card <ArrowRight size={16} />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </main>
    </div>
  );
}