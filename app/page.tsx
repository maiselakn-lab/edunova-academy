"use client";
import Link from "next/link";
import PublicLayout from "@/components/layout/PublicLayout";
import { 
  LayoutDashboard, Monitor, Users, Brain, Building2, 
  ShieldCheck, Globe, BookOpen, PlayCircle, ArrowRight, Star, 
  Sparkles, Target, Calendar, Zap, ChevronDown, Mail, Phone, 
  MessageSquare, MapPin, Clock, Layers, Video, MonitorPlay, Lightbulb,
  FileText, GraduationCap, Laptop, Award, Download, Library,
  CheckCircle2
} from "lucide-react";
import { CORE_MODULES } from "@/lib/coreModules";
import { useState } from "react";

export default function Home() {
  return (
    <PublicLayout>
      {/* 1. HERO SECTION - THE UNIFIED BRAND */}
      <section className="py-24 lg:py-32 px-6 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/5 text-orange-400 px-4 py-2 rounded-full text-xs font-semibold mb-8 border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span> 
              World-Class Online School + Intelligent OS
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 tracking-tight">
              Think EduNova <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Academy</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-6 font-medium flex items-center gap-2">
               Powered by <span className="text-white font-bold tracking-wide">AcadCoreOS</span>
            </p>
            
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl">
              We combine world-class online learning (CAPS, British International, and GED) with the most advanced School Management Operating System to deliver a seamless educational experience for students, parents, and administrators.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link href="/get-started" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5">
                <PlayCircle size={20} /> Request 14-Day Trial
              </Link>
              <Link href="/about" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all backdrop-blur-sm">
                About the Platform <ArrowRight size={20} />
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
              <Link href="/login" className="flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors">
                <MonitorPlay size={18} className="text-orange-500" /> Student & Parent Portal
              </Link>
              <div className="w-px h-5 bg-white/10 hidden sm:block"></div>
              <Link href="/login" className="flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors">
                <ShieldCheck size={18} className="text-emerald-500" /> Admin & Tutor Portal
              </Link>
            </div>
          </div>

          {/* Mockup (Virtual Campus + Platform) - Refined */}
          <div className="relative animate-fade-in-up delay-200 perspective-1000">
            <div className="bg-[#0F1926]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-2xl relative z-10 transition-all duration-500 hover:border-orange-500/30 hover:shadow-orange-500/10">
              <div className="flex items-center justify-between mb-4 px-2 pt-1">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-[11px] text-slate-500 font-mono bg-white/5 px-3 py-1 rounded-md border border-white/5">thinkedunova.org/campus</div>
              </div>
              <div className="space-y-3 p-2">
                <div className="bg-[#162233] rounded-xl p-4 flex items-center gap-4 border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-500 flex items-center justify-center">
                    <Laptop size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Virtual Classroom</h4>
                    <p className="text-sm text-slate-400">Live classes & prerecorded lessons</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#162233] rounded-xl p-4 border border-white/5 hover:bg-[#1A283D] transition-colors cursor-pointer">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-500 flex items-center justify-center mb-3"><Globe size={18} /></div>
                    <h4 className="text-white font-medium text-sm">CAPS & British</h4>
                    <p className="text-[11px] text-slate-400">World-class curriculum</p>
                  </div>
                  <div className="bg-[#162233] rounded-xl p-4 border border-white/5 hover:bg-[#1A283D] transition-colors cursor-pointer">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-500 flex items-center justify-center mb-3"><Users size={18} /></div>
                    <h4 className="text-white font-medium text-sm">Parent Portal</h4>
                    <p className="text-[11px] text-slate-400">Real-time progress</p>
                  </div>
                  <div className="bg-[#162233] rounded-xl p-4 border border-white/5 hover:bg-[#1A283D] transition-colors cursor-pointer">
                    <div className="w-9 h-9 rounded-lg bg-purple-500/20 text-purple-500 flex items-center justify-center mb-3"><LayoutDashboard size={18} /></div>
                    <h4 className="text-white font-medium text-sm">AcadCoreOS</h4>
                    <p className="text-[11px] text-slate-400">Admin management</p>
                  </div>
                  <div className="bg-[#162233] rounded-xl p-4 border border-white/5 hover:bg-[#1A283D] transition-colors cursor-pointer">
                    <div className="w-9 h-9 rounded-lg bg-yellow-500/20 text-yellow-500 flex items-center justify-center mb-3"><Award size={18} /></div>
                    <h4 className="text-white font-medium text-sm">GED & Matric</h4>
                    <p className="text-[11px] text-slate-400">Global certification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE SCHOOL: CURRICULUMS */}
      <section id="curriculum" className="py-24 px-6 border-t border-white/5 bg-[#0A1420] relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-orange-500/20">
              <GraduationCap size={14} /> Think EduNova Academy
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">World-Class Online Curriculums</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              We present our curricula in an interactive, engaging, and effective way for virtual school students across the globe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* CAPS */}
            <div className="bg-[#0F1926] border border-white/5 p-8 rounded-2xl hover:border-orange-500/30 hover:bg-[#121E2E] transition-all duration-300 group flex flex-col">
              <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform"><BookOpen size={28} /></div>
              <h3 className="text-xl font-bold text-white mb-3">South African CAPS</h3>
              <p className="text-slate-400 leading-relaxed mb-6 flex-1 text-sm">
                The Curriculum and Assessment Policy Statement (CAPS) forms part of the National Curriculum Statement Grades R – 12. Complete this curriculum from anywhere in the world.
              </p>
              <Link href="#" className="text-orange-500 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">Learn more <ArrowRight size={16} /></Link>
            </div>
            {/* British */}
            <div className="bg-[#0F1926] border border-white/5 p-8 rounded-2xl hover:border-blue-500/30 hover:bg-[#121E2E] transition-all duration-300 group flex flex-col">
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform"><Globe size={28} /></div>
              <h3 className="text-xl font-bold text-white mb-3">British International</h3>
              <p className="text-slate-400 leading-relaxed mb-6 flex-1 text-sm">
                A highly structured curriculum designed to meet the needs of all students, stretching brighter children and supporting those who need it through differentiated teaching.
              </p>
              <Link href="#" className="text-blue-500 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">Learn more <ArrowRight size={16} /></Link>
            </div>
            {/* GED */}
            <div className="bg-[#0F1926] border border-white/5 p-8 rounded-2xl hover:border-purple-500/30 hover:bg-[#121E2E] transition-all duration-300 group flex flex-col">
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform"><Award size={28} /></div>
              <h3 className="text-xl font-bold text-white mb-3">United States GED</h3>
              <p className="text-slate-400 leading-relaxed mb-6 flex-1 text-sm">
                The GED® is the number one most recognised higher secondary certificate, offered in over 85 countries and accepted by almost all universities in the US.
              </p>
              <Link href="#" className="text-purple-500 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">Learn more <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PLATFORM: 19 CORE MODULES */}
      <section id="features" className="py-24 px-6 border-t border-white/5 bg-[#08101A]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-emerald-500/20">
              <LayoutDashboard size={14} /> AcadCoreOS Engine
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">The Intelligent School Operating System</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              While EduNova teaches the students, AcadCoreOS manages the school. Our platform unifies 19 Core modules to handle every aspect of school administration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_MODULES.slice(0, 9).map((mod) => (
              <div key={mod.key} className="bg-[#0F1926] border border-white/5 p-6 rounded-2xl hover:border-white/20 hover:shadow-xl hover:shadow-black/20 transition-all duration-300 flex flex-col">
                <div className="flex justify-between items-start mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 text-white flex items-center justify-center">
                    <mod.icon size={22} className="text-orange-500" />
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md border ${
                    mod.status === 'live' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                    mod.status === 'beta' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 
                    'bg-slate-500/10 text-slate-400 border-slate-500/20'
                  }`}>
                    {mod.status.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">{mod.name}</h3>
                <h4 className="text-lg font-bold text-white mb-2">{mod.title}</h4>
                <p className="text-sm text-slate-400 mb-5 flex-1">{mod.tagline}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                  {mod.capabilities.slice(0, 3).map((cap, i) => (
                    <span key={i} className="text-[10px] bg-white/5 text-slate-300 px-2 py-1 rounded-md border border-white/5">{cap}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/about" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 transition-all">
              Learn more about AcadCoreOS <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHY FAMILIES CHOOSE US (MERGED) */}
      <section id="features-school" className="py-24 px-6 border-t border-white/5 bg-[#0A1420]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Education Success Starts With Us</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              We combine the best online learning experience with the most robust management system for parents.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Users />, title: "Online Tutors", desc: "Dedicated student success coaches and tutors." },
              { icon: <Video />, title: "Prerecorded Lessons", desc: "Access high-quality lessons anytime, anywhere." },
              { icon: <FileText />, title: "Printable Notes", desc: "Study notes, memos, and past papers included." },
              { icon: <Target />, title: "Assessments", desc: "Regular assessments with detailed feedback." },
              { icon: <Clock />, title: "Weekly Reports", desc: "Weekly and quarterly progress reports emailed." },
              { icon: <MessageSquare />, title: "Student Forum", desc: "Join virtual clubs, forums, and social events." },
              { icon: <ShieldCheck />, title: "Secure Parent Portal", desc: "Track your child's fees and results securely." },
              { icon: <Laptop />, title: "Virtual Campus", desc: "A fully interactive digital learning environment." },
            ].map((item, i) => (
              <div key={i} className="bg-[#0F1926] border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-colors text-center group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-orange-500 mx-auto mb-5 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TUTOR APPLICATION & SOCIAL */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#08101A]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-orange-500/20">
              <Users size={14} /> Join the Faculty
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Become a Tutor</h2>
            <p className="text-slate-400 mb-8 leading-relaxed text-lg">
              We went beyond universities and colleges. Think EduNova allows passionate tutors to apply to teach on our platform. Join our global faculty and shape the future.
            </p>
            <ul className="space-y-4 mb-10">
              {["Teach from anywhere in the world", "Set your own schedule", "Access to global students", "Robust teaching tools"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                  <CheckCircle2 size={20} className="text-orange-500 shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Link href="/login" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-xl font-bold inline-flex items-center gap-2 transition-all shadow-lg shadow-orange-500/20">
              Apply as Tutor <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="bg-[#0F1926] border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[60px] rounded-full"></div>
            <h3 className="text-xl font-bold text-white mb-6">Get Social with Our Clubs</h3>
            <div className="space-y-4">
              {["Virtual Clubs & Fraternities", "Matric Dances & Events", "Student Forums", "Meet & Greets"].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center shrink-0"><Star size={18} /></div>
                  <p className="text-sm font-medium text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRICING (MERGED) */}
      <section id="pricing" className="py-24 px-6 border-t border-white/5 bg-[#0A1420]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Flexible Plans for Every Family</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">Choose a curriculum and get full access to the virtual campus and the parent portal.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Single Subject", price: "R 1,500", per: "/mo", features: ["1 Subject", "Recorded Lessons", "Study Notes", "Parent Portal"] },
              { name: "Full Curriculum", price: "R 4,500", per: "/mo", features: ["All Subjects", "Live & Recorded", "Tutor Support", "Full Parent Portal"], popular: true },
              { name: "Premium", price: "R 7,500", per: "/mo", features: ["All Subjects", "1-on-1 Tutoring", "Exam Prep", "Full Portal Access"] },
            ].map((plan, i) => (
              <div key={i} className={`relative bg-[#0F1926] p-8 rounded-2xl border flex flex-col hover:-translate-y-1 transition-transform duration-300 ${plan.popular ? 'border-orange-500 shadow-2xl shadow-orange-500/10' : 'border-white/5'}`}>
                {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[11px] font-bold px-4 py-1 rounded-full uppercase tracking-wider">Most Popular</div>}
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6 pb-6 border-b border-white/5">
                  <span className="text-4xl font-bold text-white">{plan.price}</span><span className="text-sm text-slate-400">{plan.per}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-slate-300 font-medium"><CheckCircle2 size={18} className="text-orange-500 shrink-0" /> {f}</li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl text-sm font-bold transition-all ${plan.popular ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}>Get Started</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA BANNER */}
      <section className="bg-gradient-to-br from-orange-400 to-orange-600 py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Ready to transform your education?</h2>
          <p className="text-orange-50 mb-10 text-xl font-medium">Whether you are a parent looking for a school or an administrator looking for a platform.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-started" className="bg-[#08101A] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors shadow-xl">
              Request Free Trial <ArrowRight size={20} />
            </Link>
            <Link href="/about" className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-orange-50 transition-colors shadow-xl">
              About AcadCoreOS
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}