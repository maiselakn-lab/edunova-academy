"use client";
import Link from "next/link";
import PublicLayout from "@/components/layout/PublicLayout";
import { 
  Users, GraduationCap, MonitorPlay, ShieldCheck, 
  ArrowRight, CheckCircle2, TrendingUp, Sparkles, BookOpen
} from "lucide-react";

export default function Home() {
  return (
    <PublicLayout>
      {/* 1. HERO & PORTALS (Matching the first image) */}
      <section className="bg-[#F8FAFC] pt-16 pb-24 px-6">
        <div className="max-w-[1000px] mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight mb-4">
            Centralised Online Education Ecosystem
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            Learn • Teach • Research • Empower
          </p>
        </div>

        {/* The 4 Portals Grid */}
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Parent Portal */}
          <Link href="/login?role=parent" className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 hover:shadow-lg transition-all group">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users size={20} />
              </div>
              <h3 className="text-lg font-bold text-[#0B132B]">Parent Portal</h3>
            </div>
            <p className="text-sm text-slate-500 font-medium">Progress monitoring, payments, bookings and reports.</p>
          </Link>

          {/* Learner Portal */}
          <Link href="/login?role=learner" className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 hover:shadow-lg transition-all group">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-lg font-bold text-[#0B132B]">Learner & Student Portal</h3>
            </div>
            <p className="text-sm text-slate-500 font-medium">Lessons, assessments, academic support and resources.</p>
          </Link>

          {/* Tutor Portal */}
          <Link href="/login?role=tutor" className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 hover:shadow-lg transition-all group">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <MonitorPlay size={20} />
              </div>
              <h3 className="text-lg font-bold text-[#0B132B]">Tutor Portal</h3>
            </div>
            <p className="text-sm text-slate-500 font-medium">Applications, assessments, lessons, ratings and earnings.</p>
          </Link>

          {/* Admin Portal */}
          <Link href="/login?role=admin" className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 hover:shadow-lg transition-all group">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-lg font-bold text-[#0B132B]">Admin Portal</h3>
            </div>
            <p className="text-sm text-slate-500 font-medium">Complete management, approvals, finance and operations.</p>
          </Link>
        </div>

        {/* Central Management System Box */}
        <div className="max-w-[1000px] mx-auto bg-[#ECFDF5] border border-[#A7F3D0] rounded-xl p-8 text-center relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white border border-[#A7F3D0] text-[#047857] text-xs font-bold px-3 py-1 rounded-full">
            Central Academy Management System
          </div>
          <p className="text-sm font-medium text-[#047857]">
            Shared database • User accounts • Scheduling • Payments • Assessments • Reporting • Notifications • AI services
          </p>
        </div>
      </section>

      {/* 2. EXPLORE THE ACADEMY (Matching the images) */}
      <section className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-2xl font-extrabold text-[#0B132B] mb-8">Explore the academy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Primary */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-4 border border-slate-100">
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800" alt="Primary Academy" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-[#0B132B] group-hover:text-blue-600 transition-colors">Primary Academy</h3>
              <p className="text-sm text-slate-500 font-medium mt-1">Foundational learning</p>
            </div>
            
            {/* Secondary */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-4 border border-slate-100">
                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800" alt="Secondary Academy" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-[#0B132B] group-hover:text-blue-600 transition-colors">Secondary Academy</h3>
              <p className="text-sm text-slate-500 font-medium mt-1">School subject support</p>
            </div>

            {/* College */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-4 border border-slate-100">
                <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=800" alt="College Academy" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-[#0B132B] group-hover:text-blue-600 transition-colors">College Academy</h3>
              <p className="text-sm text-slate-500 font-medium mt-1">Technical and vocational learning</p>
            </div>

            {/* University */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-4 border border-slate-100">
                <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800" alt="University Academy" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-[#0B132B] group-hover:text-blue-600 transition-colors">University Academy</h3>
              <p className="text-sm text-slate-500 font-medium mt-1">Higher education support</p>
            </div>
          </div>

          {/* Tutor & Research List Items */}
          <div className="space-y-6 border-t border-slate-100 pt-8">
            <div className="flex gap-4 items-center">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt="Tutor" className="w-16 h-16 rounded-xl object-cover" />
              <div>
                <h3 className="text-lg font-bold text-[#0B132B]">Become a tutor</h3>
                <p className="text-sm text-slate-500">Share your knowledge, demonstrate your competence and build your teaching career.</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=200" alt="Research" className="w-16 h-16 rounded-xl object-cover" />
              <div>
                <h3 className="text-lg font-bold text-[#0B132B]">Research Support Centre</h3>
                <p className="text-sm text-slate-500">Academic research guidance and specialist support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROGRESS COMPARISON (Matching the specific image) */}
      <section className="py-24 px-6 bg-[#F8FAFC] border-t border-slate-100">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-[#0B132B]">Example: Learner academic progress</h2>
            <p className="text-sm text-slate-500 mt-1">Illustrative learner data</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <div className="mb-8">
              <h3 className="text-4xl font-extrabold text-green-600 mb-2">72%</h3>
              <p className="text-lg font-medium text-slate-700">Current EduNova mathematics assessment</p>
            </div>

            <div className="space-y-6">
              {/* School Result */}
              <div>
                <div className="flex justify-between text-sm font-bold text-slate-700 mb-2">
                  <span>School mathematics result</span>
                  <span>54%</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 rounded-full" style={{ width: '54%' }}></div>
                </div>
              </div>

              {/* EduNova Result */}
              <div>
                <div className="flex justify-between text-sm font-bold text-slate-700 mb-2">
                  <span>EduNova mathematics result</span>
                  <span>72%</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-600 rounded-full" style={{ width: '72%' }}></div>
                </div>
              </div>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 bg-green-50 text-green-700 font-bold px-3 py-1.5 rounded-full text-sm border border-green-200">
              <TrendingUp size={16} /> 18 percentage-point difference
            </div>

            <p className="text-xs text-slate-500 mt-6 pt-4 border-t border-slate-100">
              The two results should be clearly labelled because assessments may have different difficulty levels and marking standards.
            </p>
          </div>
        </div>
      </section>

      {/* 4. FINANCIAL MODEL (Matching the specific image) */}
      <section className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-[800px] mx-auto">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
             <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Illustrative Individual Lesson</h3>
             <div className="mb-8">
                <h3 className="text-4xl font-extrabold text-green-600 mb-2">R250</h3>
                <p className="text-lg font-medium text-slate-700">Amount paid by parent/student</p>
             </div>

             <div className="space-y-6 pt-6 border-t border-slate-100">
              {/* Tutor Payment */}
              <div>
                <div className="flex justify-between text-sm font-bold text-slate-700 mb-2">
                  <span>Tutor payment</span>
                  <span>R150</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-500 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>

              {/* Academy Revenue */}
              <div>
                <div className="flex justify-between text-sm font-bold text-slate-700 mb-2">
                  <span>Academy revenue</span>
                  <span>R100</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 mt-6 pt-4 border-t border-slate-100">
              Illustrative 60/40 revenue split before operating costs, applicable taxes, payment processing fees and other expenses.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <section className="bg-[#0B132B] py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">One integrated academy experience</h2>
          <p className="text-slate-300 mb-10 text-lg">One brand • Connected accounts • Consistent learner records • Coordinated reporting</p>
          <Link href="/get-started" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold inline-flex items-center justify-center gap-2 transition-colors shadow-xl">
            Get Started Today <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
}