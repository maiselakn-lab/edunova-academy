"use client";
import Link from "next/link";
import PublicLayout from "@/components/layout/PublicLayout";
import { 
  GraduationCap, Globe, BookOpen, Monitor, Users, CheckCircle2, 
  ArrowRight, PlayCircle, Star, Laptop, ShieldCheck, Video, 
  MessageSquare, FileText, ChevronDown, Sparkles, Target, 
  Clock, Calendar, Library, Download, PenTool, Award, School
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  return (
    <PublicLayout>
      {/* 1. HERO SECTION - BRIGHT & ACADEMIC */}
      <section className="relative bg-slate-50 pt-24 pb-32 px-6 overflow-hidden">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs font-bold mb-6">
              <Star size={14} className="fill-blue-700" /> Internationally Acclaimed Online School
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              World-Class <br />
              <span className="text-blue-600">Online Learning</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              Think EduNova Academy provides interactive, engaging, and effective virtual schooling. Complete your education from anywhere in the world with our CAPS, British International, or GED curricula.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link href="/get-started" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20">
                Request a Free Trial <ArrowRight size={18} />
              </Link>
              <Link href="#curriculum" className="bg-white text-slate-900 border border-slate-200 px-8 py-3.5 rounded-lg font-bold flex items-center gap-2 hover:bg-slate-50 transition-all">
                Explore Curriculums
              </Link>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs text-slate-600 font-bold">{i}</div>
                ))}
              </div>
              <p>Join 10,000+ students worldwide</p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-up delay-200">
            <div className="absolute inset-0 bg-blue-600 rounded-3xl transform translate-x-4 translate-y-4 opacity-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
              alt="Student learning online" 
              className="relative rounded-3xl shadow-2xl object-cover h-[500px] w-full"
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 border border-slate-100">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">100% Pass Rate</p>
                <p className="text-xs text-slate-500">Matric Class of 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUSTED BY / STATS */}
      <section className="border-y border-slate-100 bg-white py-10">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-extrabold text-blue-600 mb-1">15+</p>
            <p className="text-sm font-medium text-slate-500">Years of Experience</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-blue-600 mb-1">10k+</p>
            <p className="text-sm font-medium text-slate-500">Active Students</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-blue-600 mb-1">3</p>
            <p className="text-sm font-medium text-slate-500">Global Curriculums</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-blue-600 mb-1">98%</p>
            <p className="text-sm font-medium text-slate-500">Parent Satisfaction</p>
          </div>
        </div>
      </section>

      {/* 3. CURRICULUMS */}
      <section id="curriculum" className="py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">School Curricula Offered Online</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We present our curricula in an interactive, engaging, and effective way for virtual school students across the globe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CAPS */}
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform"><GraduationCap size={28} /></div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">South African CAPS</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                The Curriculum and Assessment Policy Statement (CAPS) forms part of the National Curriculum Statement Grades R – 12. Complete this curriculum from anywhere in the world.
              </p>
              <Link href="#" className="text-blue-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">Curriculum Info <ArrowRight size={16} /></Link>
            </div>
            {/* British */}
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform"><Globe size={28} /></div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">British International</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                A highly structured curriculum designed to meet the needs of all students, stretching brighter children and supporting those who need it through differentiated teaching.
              </p>
              <Link href="#" className="text-blue-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">Curriculum Info <ArrowRight size={16} /></Link>
            </div>
            {/* GED */}
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform"><Award size={28} /></div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">United States GED</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                The GED® is the number one most recognised higher secondary certificate, offered in over 85 countries and accepted by almost all universities in the US.
              </p>
              <Link href="#" className="text-blue-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">Curriculum Info <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY FAMILIES CHOOSE US */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Education Success Starts With Us</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Here’s what makes our online school very special and us incredibly proud.</p>
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
              <div key={i} className="bg-white border border-slate-100 p-6 rounded-xl hover:shadow-md transition-shadow text-center group">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. POWERED BY ACADCOREOS */}
      <section className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Monitor size={14} /> The Platform
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Powered by AcadCoreOS</h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              Behind our world-class teaching is the most advanced School Management Operating System. AcadCoreOS handles admissions, finance, attendance, and reporting, ensuring a seamless experience for students, parents, and administrators.
            </p>
            <ul className="space-y-4 mb-8">
              {["19 Core Management Modules", "Multi-Campus Support", "AI-Powered Analytics", "Secure Role-Based Access"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 size={20} className="text-blue-600 shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Link href="/about" className="text-blue-600 font-bold flex items-center gap-2 hover:underline">
              Learn more about AcadCoreOS <ArrowRight size={18} />
            </Link>
          </div>
          <div className="bg-slate-900 rounded-2xl p-8 shadow-2xl">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
             </div>
             <div className="space-y-4">
                <div className="h-8 bg-slate-800 rounded w-1/3"></div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-24 bg-slate-800 rounded-xl"></div>
                  <div className="h-24 bg-slate-800 rounded-xl"></div>
                  <div className="h-24 bg-slate-800 rounded-xl"></div>
                </div>
                <div className="h-40 bg-slate-800 rounded-xl w-full"></div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section className="bg-blue-600 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Request a free 14-day trial</h2>
          <p className="text-blue-100 mb-10 text-lg">Explore our virtual campus and see why families around the world are choosing Think EduNova Academy.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-started" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-xl">
              Start Free Trial <ArrowRight size={20} />
            </Link>
            <Link href="/login" className="bg-blue-700 text-white border border-blue-500 px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-colors shadow-xl">
              Access Portals
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}