"use client";

import Link from 'next/link';
import { useState } from 'react';
import { 
  Home, BookOpen, Calendar, FileText, Settings, LogOut, 
  Bell, Menu, PlayCircle, Star, Award, Target, ArrowRight, Users 
} from 'lucide-react';

export default function LearnerDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-brand-grey overflow-hidden">
      
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-brand-navy text-white flex flex-col transition-all duration-300 shrink-0`}>
        <div className="h-20 flex items-center justify-center border-b border-white/10 px-4">
          <Link href="/">
            <img src="/logo.png" alt="EduNova" className={`${sidebarOpen ? 'h-12' : 'h-8'} w-auto object-contain bg-white rounded p-1 transition-all`} />
          </Link>
        </div>

        <nav className="flex-grow py-6 space-y-2 px-3 overflow-y-auto">
          <Link href="/portal/learner" className="flex items-center gap-4 px-4 py-3 bg-brand-royal rounded-lg font-medium transition-colors">
            <Home size={20} />
            {sidebarOpen && <span>My Home</span>}
          </Link>
          <Link href="/portal/classroom" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300 transition-colors">
            <PlayCircle size={20} />
            {sidebarOpen && <span>Join Class</span>}
          </Link>
          <Link href="/courses" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300 transition-colors">
            <BookOpen size={20} />
            {sidebarOpen && <span>My Subjects</span>}
          </Link>
          <Link href="/calendar" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300 transition-colors">
            <Calendar size={20} />
            {sidebarOpen && <span>My Calendar</span>}
          </Link>
          <Link href="/portal/records" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-gray-300 transition-colors">
            <FileText size={20} />
            {sidebarOpen && <span>My Marks</span>}
          </Link>
          <Link href="/rewards" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-brand-gold transition-colors">
            <Award size={20} />
            {sidebarOpen && <span>My Rewards</span>}
          </Link>
          <Link href="/community/learner" className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-lg text-brand-sky transition-colors">
            <Users size={20} />
            {sidebarOpen && <span>Community</span>}
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

      <main className="flex-grow flex flex-col h-screen overflow-hidden">
        
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-500 hover:text-brand-navy">
              <Menu size={24} />
            </button>
            <h2 className="text-xl font-bold text-brand-navy hidden md:block">Welcome back, Junior!</h2>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative text-gray-500 hover:text-brand-navy">
              <Bell size={22} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
              <div className="w-10 h-10 bg-brand-royal text-white rounded-full flex items-center justify-center font-bold">J</div>
              <div className="hidden md:block">
                <p className="text-sm font-bold text-brand-navy leading-tight">Junior D.</p>
                <p className="text-xs text-gray-500">Grade 9 Learner</p>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-grow overflow-y-auto p-8">
          
          <div className="bg-gradient-to-r from-brand-royal to-brand-sky rounded-2xl p-8 text-white mb-8 relative overflow-hidden shadow-lg">
            <Star className="absolute top-4 right-4 text-white/20" size={120} />
            <div className="relative z-10">
              <h1 className="text-3xl font-serif font-bold text-white mb-2">Ready to learn today?</h1>
              <p className="text-blue-100 mb-6 max-w-xl">You have 1 class today. Don't forget to complete your Natural Sciences homework before 17:00!</p>
              <Link href="/portal/classroom" className="bg-white text-brand-royal px-6 py-3 rounded-sm font-bold inline-flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-md">
                Go to Classroom <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center"><Target size={24} /></div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Attendance Streak</p>
                <p className="text-2xl font-bold text-brand-navy">12 Days</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-teal/10 text-brand-teal rounded-full flex items-center justify-center"><Award size={24} /></div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Reward Points</p>
                <p className="text-2xl font-bold text-brand-navy">450 pts</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-royal/10 text-brand-royal rounded-full flex items-center justify-center"><BookOpen size={24} /></div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Homework Due</p>
                <p className="text-2xl font-bold text-brand-navy">2 Tasks</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-xl font-bold text-brand-navy mb-6">Homework to Do</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg bg-orange-50 border-l-4 border-l-orange-400">
                    <div className="flex-grow">
                      <h3 className="font-bold text-brand-navy">Natural Sciences: Photosynthesis</h3>
                      <p className="text-sm text-gray-500">Due Today at 17:00</p>
                    </div>
                    <button className="bg-brand-royal text-white px-4 py-2 rounded text-sm font-bold hover:bg-blue-700">Submit</button>
                  </div>
                  <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg bg-brand-grey/50">
                    <div className="flex-grow">
                      <h3 className="font-bold text-brand-navy">Mathematics: Fractions Worksheet</h3>
                      <p className="text-sm text-gray-500">Due Tomorrow at 08:00</p>
                    </div>
                    <button className="border border-brand-navy text-brand-navy px-4 py-2 rounded text-sm font-bold hover:bg-brand-navy hover:text-white">View</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
                <h2 className="text-lg font-bold text-brand-navy mb-4">Today's Class</h2>
                <div className="w-16 h-16 bg-brand-royal/10 text-brand-royal rounded-full flex items-center justify-center mx-auto mb-4"><PlayCircle size={32} /></div>
                <h3 className="font-bold text-brand-navy mb-1">English Literature</h3>
                <p className="text-sm text-gray-500 mb-4">14:00 - 15:00</p>
                <Link href="/portal/classroom" className="w-full block bg-brand-royal text-white px-4 py-2 rounded text-sm font-bold hover:bg-blue-700">Join Now</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}