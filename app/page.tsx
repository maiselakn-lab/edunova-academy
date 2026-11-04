"use client";
import Link from "next/link";
import PublicLayout from "@/components/layout/PublicLayout";
import { 
  LayoutDashboard, Monitor, Users, Brain, Building2, 
  ShieldCheck, Globe, BookOpen, PlayCircle, ArrowRight, Star, 
  Sparkles, Target, Calendar, Zap, ChevronDown, Mail, Phone, 
  MessageSquare, MapPin, Clock, Layers, Video, MonitorPlay, Lightbulb,
  FileText, GraduationCap, Laptop, Award, CheckCircle2,
  School // <-- FIXED: Added missing import
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  return (
    <PublicLayout>
      {/* 1. HERO SECTION - THE UNIFIED BRAND */}
      <section className="py-24 lg:py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/5 text-orange-400 px-4 py-2 rounded-full text-xs font-semibold mb-8 border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span> 
              Unified Education Ecosystem
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 tracking-tight">
              Think EduNova <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Academy</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-6 font-medium flex items-center gap-2">
               One academy. Multiple pathways. Powered by <span className="text-white font-bold tracking-wide">AcadCoreOS</span>
            </p>
            
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl">
              From primary school to university. We combine world-class online learning, AI tutoring, and a robust institutional management system into one seamless digital ecosystem.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link href="/get-started" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5">
                <PlayCircle size={20} /> Apply for Admission
              </Link>
              <Link href="/login" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all backdrop-blur-sm">
                Access Portals <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="relative animate-fade-in-up delay-200">
            <div className="bg-[#0F1926]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl relative z-10 transition-all duration-500 hover:border-orange-500/30">
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-[11px] text-slate-500 font-mono bg-white/5 px-3 py-1 rounded-md border border-white/5">thinkedunova.org/campus</div>
              </div>
              <div className="grid grid-cols-2 gap-4 p-2">
                  <div className="bg-[#162233] rounded-xl p-4 border border-white/5"><div className="text-orange-500 mb-2"><School size={20}/></div><h4 className="text-white text-sm font-bold">Primary & Secondary</h4><p className="text-[10px] text-slate-400">CAPS & British</p></div>
                  <div className="bg-[#162233] rounded-xl p-4 border border-white/5"><div className="text-blue-500 mb-2"><GraduationCap size={20}/></div><h4 className="text-white text-sm font-bold">Colleges & Varsities</h4><p className="text-[10px] text-slate-400">Modules & Credits</p></div>
                  <div className="bg-[#162233] rounded-xl p-4 border border-white/5"><div className="text-purple-500 mb-2"><Brain size={20}/></div><h4 className="text-white text-sm font-bold">AI Learning</h4><p className="text-[10px] text-slate-400">Virtual AI Teacher</p></div>
                  <div className="bg-[#162233] rounded-xl p-4 border border-white/5"><div className="text-emerald-500 mb-2"><LayoutDashboard size={20}/></div><h4 className="text-white text-sm font-bold">Admin Engine</h4><p className="text-[10px] text-slate-400">AcadCoreOS</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE EDUCATION DIVISIONS */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#0A1420]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">One Platform for Every Stage</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">From foundational learning to higher education, we have a dedicated pathway for every learner.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Primary Education", desc: "Grade R–7 foundational learning, literacy, numeracy and interactive lessons.", icon: <School size={24} />, color: "text-orange-500", bg: "bg-orange-500/10" },
              { title: "Secondary Education", desc: "Grades 8–12 CAPS and international curricula, examinations and subject support.", icon: <BookOpen size={24} />, color: "text-emerald-500", bg: "bg-emerald-500/10" },
              { title: "College Education", desc: "Vocational training, certificates, diplomas and practical programmes.", icon: <Building2 size={24} />, color: "text-blue-500", bg: "bg-blue-500/10" },
              { title: "University Education", desc: "Undergraduate and postgraduate programmes, research and academic support.", icon: <GraduationCap size={24} />, color: "text-purple-500", bg: "bg-purple-500/10" },
            ].map((div, i) => (
              <div key={i} className="bg-[#0F1926] border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-colors group">
                <div className={`w-12 h-12 ${div.bg} ${div.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>{div.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{div.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{div.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AI LEARNING */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#08101A]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
             <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-purple-500/20"><Brain size={14} /> AI Learning</div>
             <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">The AI-Powered Teaching System</h2>
             <p className="text-slate-400 mb-8 leading-relaxed text-lg">
               Our platform features an AI teacher that understands your curriculum, grade, and subject. Get step-by-step explanations, generated video lessons, and homework assistance instantly.
             </p>
             <ul className="space-y-4 mb-10">
              {["AI Teacher & Whiteboard", "AI Homework Assistant", "AI Study Planner", "AI Language Support"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                  <CheckCircle2 size={20} className="text-purple-500 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#0F1926] border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-500/20 text-purple-500 rounded-full flex items-center justify-center"><Brain size={20} /></div>
              <div><h3 className="text-white font-bold text-sm">AcadAI Tutor</h3><p className="text-[10px] text-purple-400">Online</p></div>
            </div>
            <div className="space-y-4">
              <div className="bg-[#162233] p-3 rounded-lg rounded-tl-none text-sm text-slate-300 border border-white/5 w-3/4">Can you explain the Pythagorean theorem?</div>
              <div className="bg-purple-500/10 p-3 rounded-lg rounded-tr-none text-sm text-slate-200 border border-purple-500/20 w-5/6 ml-auto">Sure! The theorem states that in a right-angled triangle, a² + b² = c². Let's look at an example...</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY FAMILIES CHOOSE US */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#0A1420]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Why Families Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Users />, title: "Human Tutors", desc: "Dedicated student success coaches and tutors." },
              { icon: <Video />, title: "Virtual Campus", desc: "Live and prerecorded lessons anytime." },
              { icon: <FileText />, title: "Study Resources", desc: "Notes, textbooks, memos and past papers." },
              { icon: <ShieldCheck />, title: "Secure Portals", desc: "Parents track fees and results securely." },
            ].map((item, i) => (
              <div key={i} className="bg-[#0F1926] border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-colors text-center group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-orange-500 mx-auto mb-5 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <section className="bg-gradient-to-br from-orange-400 to-orange-600 py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Ready to join the ecosystem?</h2>
          <p className="text-orange-50 mb-10 text-xl font-medium">From Grade R to University, we have a pathway for you.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-started" className="bg-[#08101A] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors shadow-xl">
              Apply Now <ArrowRight size={20} />
            </Link>
            <Link href="/institutions" className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-orange-50 transition-colors shadow-xl">
              For Institutions
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}