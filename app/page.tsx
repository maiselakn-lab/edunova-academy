"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  Search, ArrowRight, CheckCircle2, ChevronDown, 
  BookOpen, X, Play, Users, CreditCard, LayoutDashboard, 
  ShieldCheck, GraduationCap, School, FileText, Calendar, 
  Briefcase, Star, Globe
} from "lucide-react";

export default function HomePage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"students" | "schools">("students");

  // --- DATA FOR ACADCOREOS (B2B) ---
  const coreModules = [
    { title: "AcademicCore", desc: "Sessions, terms, classes & curriculum.", icon: <BookOpen size={24}/>, color: "bg-[#009CA6]", status: "Live" },
    { title: "AssessmentCore", desc: "CA/exam entry, grades & reports.", icon: <GraduationCap size={24}/>, color: "bg-[#D1007B]", status: "Live" },
    { title: "AdmissionsCore", desc: "Online applications & enrollment.", icon: <Users size={24}/>, color: "bg-[#E67E22]", status: "Live" },
    { title: "PeopleCore", desc: "Students, staff & parent accounts.", icon: <Users size={24}/>, color: "bg-[#8B5CF6]", status: "Live" },
    { title: "AttendanceCore", desc: "Real-time tracking & alerts.", icon: <Calendar size={24}/>, color: "bg-[#14B8A6]", status: "Live" },
    { title: "FinanceCore", desc: "Fees, payments & expenses.", icon: <CreditCard size={24}/>, color: "bg-[#6366F1]", status: "Live" },
    { title: "HRCore", desc: "Vacancies, payroll & talent pool.", icon: <Briefcase size={24}/>, color: "bg-[#F59E0B]", status: "Beta" },
    { title: "ExamCore / CBT", desc: "Computer-based testing.", icon: <FileText size={24}/>, color: "bg-[#10B981]", status: "Live" },
    { title: "ScheduleCore", desc: "Events, timetable & calendar.", icon: <Calendar size={24}/>, color: "bg-[#3B82F6]", status: "Beta" },
  ];

  const pricingPlans = [
    { name: "Starter", capacity: "1–100 Students", price: "₦15,000/mo", yearly: "or ₦150,000/yr", popular: false },
    { name: "Growth", capacity: "101–300 Students", price: "₦35,000/mo", yearly: "or ₦350,000/yr", popular: true },
    { name: "Professional", capacity: "301–600 Students", price: "₦120,000/mo", yearly: "or ₦1,200,000/yr", popular: false },
    { name: "Enterprise", capacity: "601–1000 Students", price: "₦350,000/mo", yearly: "or ₦3,500,000/yr", popular: false },
  ];

  const testimonials = [
    { quote: "AcadCoreOS has transformed how we manage our school. From admissions to results, everything is in one place.", name: "Mrs. Adunni Okoye", role: "Principal, Bright Future Academy", initial: "M" },
    { quote: "The attendance tracking and automated parent notifications have saved us hours of work.", name: "Mr. Tunde Bello", role: "School Administrator, Grace Land College", initial: "M" },
  ];

  // --- DATA FOR THINK DIGITAL ACADEMY (B2C) ---
  const studentCurricula = [
    { title: "South African CAPS", img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=600", desc: "The Curriculum and Assessment Policy Statement (CAPS) from Grades R – 12." },
    { title: "British International", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600", desc: "A highly structured international curriculum recognised globally." },
    { title: "United States GED", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600", desc: "The GED® is the internationally recognised higher secondary certificate." },
  ];

  return (
    <div className="min-h-screen bg-[#F4F4F4] font-sans">
      
      {/* VIDEO MODAL */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl">
            <button onClick={() => setIsVideoOpen(false)} className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"><X size={24} /></button>
            <div className="aspect-video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" title="YouTube video player" frameBorder="0" allowFullScreen></iframe></div>
          </div>
        </div>
      )}

      {/* 1. TOP BAR */}
      <div className="bg-[#009CA6] text-white text-xs py-2 px-8 flex justify-between items-center relative z-50">
        <p className="flex items-center gap-2 font-medium"><span className="w-2 h-2 rounded-full bg-[#A2E8E6] animate-pulse"></span>THINK EduNova Academy: Online Courses & School Management OS</p>
        <div className="flex items-center gap-3">
          <Link href="/trial" className="bg-[#F39C12] hover:bg-[#E67E22] px-4 py-1.5 rounded-full font-bold transition-colors">Free trial</Link>
          <Link href="/enrol" className="bg-[#D1007B] hover:bg-[#A3005F] px-4 py-1.5 rounded-full font-bold transition-colors flex items-center gap-1">Enrol now <ArrowRight size={12}/></Link>
          <Link href="/login" className="bg-[#E2E8F0] text-[#0B132B] hover:bg-white px-4 py-1.5 rounded-full font-bold transition-colors">Login</Link>
        </div>
      </div>

      {/* 2. NAVBAR */}
      <nav className="bg-[#333333] border-b-4 border-[#009CA6] px-8 py-4 flex justify-between items-center relative z-40 shadow-md">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-3">
             <BookOpen size={36} className="text-[#D1007B]" strokeWidth={2.5} />
             <div><div className="text-[#D1007B] text-2xl font-black italic tracking-tighter leading-none">THINK</div><p className="text-white text-[8px] tracking-[0.2em] font-bold uppercase mt-0.5">EduNova Academy</p></div>
          </Link>
        </div>
        
        <div className="hidden lg:flex items-center gap-6 text-xs font-bold text-white uppercase tracking-wider">
          <Link href="/" className="hover:text-[#009CA6]">Home</Link>
          
          <div className="relative group py-2">
            <button className="bg-[#D1007B] text-white px-4 py-1.5 rounded-full flex items-center gap-1">School Software <ChevronDown size={12}/></button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-xl shadow-2xl border border-gray-100 p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2">
              <div className="grid grid-cols-3 gap-8 text-left">
                <div><h4 className="text-[#333] font-bold border-b border-gray-100 pb-2 mb-3 text-sm">Core Modules</h4><ul className="space-y-2">{["AcademicCore", "AssessmentCore", "AdmissionsCore", "PeopleCore", "FinanceCore"].map((item, i) => (<li key={i}><Link href="/software" className="text-sm text-gray-500 hover:text-[#D1007B] flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#D1007B]"></span> {item}</Link></li>))}</ul></div>
                <div><h4 className="text-[#333] font-bold border-b border-gray-100 pb-2 mb-3 text-sm">More Modules</h4><ul className="space-y-2">{["AttendanceCore", "HRCore", "ScheduleCore", "ExamCore / CBT"].map((item, i) => (<li key={i}><Link href="/software" className="text-sm text-gray-500 hover:text-[#D1007B] flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#D1007B]"></span> {item}</Link></li>))}</ul></div>
                <div><h4 className="text-[#333] font-bold border-b border-gray-100 pb-2 mb-3 text-sm">Platform</h4><ul className="space-y-2">{["Multi-Campus Support", "Security & Compliance", "AI Assistant", "Pricing Plans"].map((item, i) => (<li key={i}><Link href="/software" className="text-sm text-gray-500 hover:text-[#D1007B] flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#D1007B]"></span> {item}</Link></li>))}</ul></div>
              </div>
            </div>
          </div>

          <div className="relative group py-2">
            <button className="hover:text-[#009CA6] flex items-center gap-1">Courses <ChevronDown size={12}/></button>
            <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2">
              <ul className="space-y-3">{["South African CAPS", "British International", "US GED", "Short Courses", "Winter School"].map((item, i) => (<li key={i}><Link href="/explore-courses" className="flex items-center gap-2 text-[#333] hover:text-[#D1007B]"><span className="w-1.5 h-1.5 rounded-full bg-[#D1007B]"></span> {item}</Link></li>))}</ul>
            </div>
          </div>

          <Link href="/info" className="hover:text-[#009CA6]">About</Link>
          <Link href="/blog" className="hover:text-[#009CA6]">Blog</Link>
          <Link href="/contact" className="hover:text-[#009CA6]">Contact</Link>
          <button className="text-white hover:text-[#009CA6]"><Search size={16}/></button>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <section className="relative bg-[#4A5D6B] overflow-hidden py-20 px-8 border-b-8 border-[#D1007B]">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/blackboard.png")' }}></div>
        
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-12 items-center relative z-10">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800" alt="Education" className="rounded-xl shadow-2xl object-cover h-[400px] w-full border-4 border-white" />
            <div className="absolute -bottom-6 -right-6 bg-[#F39C12] text-white p-4 rounded-full font-bold text-xl shadow-lg border-4 border-white rotate-12">{activeTab === 'schools' ? 'The Intelligent OS' : 'For Students & Schools'}</div>
          </div>

          <div className="bg-[#D1007B] text-white p-10 rounded-2xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-bl-full"></div>
            
            <div className="flex bg-black/20 rounded-lg p-1 mb-6 w-max">
              <button onClick={() => setActiveTab("students")} className={`px-4 py-1.5 text-xs font-bold rounded-md transition-colors ${activeTab === 'students' ? 'bg-white text-[#D1007B]' : 'text-white'}`}>For Students</button>
              <button onClick={() => setActiveTab("schools")} className={`px-4 py-1.5 text-xs font-bold rounded-md transition-colors ${activeTab === 'schools' ? 'bg-white text-[#D1007B]' : 'text-white'}`}>For Schools (AcadCoreOS)</button>
            </div>

            {activeTab === "students" ? (
              <>
                <h1 className="text-4xl font-bold leading-tight mb-6">Learn from anywhere with world-class curricula</h1>
                <p className="text-sm text-pink-100 mb-8 leading-relaxed">Access CAPS, British International, and GED courses online. Learn at your own pace with AI tutors and expert human support.</p>
                <div className="space-y-3">
                  <Link href="/explore-courses" className="w-full bg-[#009CA6] hover:bg-[#00828A] text-white py-3 rounded-full font-bold text-sm flex justify-center items-center gap-2 transition-colors">Explore Courses <ArrowRight size={16}/></Link>
                  <Link href="/trial" className="w-full bg-white text-[#D1007B] hover:bg-gray-100 py-3 rounded-full font-bold text-sm flex justify-center items-center gap-2 transition-colors">Free trial <ArrowRight size={16}/></Link>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-4xl font-bold leading-tight mb-6">The Intelligent OS for Modern Schools</h1>
                <p className="text-sm text-pink-100 mb-8 leading-relaxed">AcadCoreOS unifies 19 Core modules — academics, assessment, admissions, finance, HR, and AI — in a single, scalable, multi-tenant workspace.</p>
                <div className="space-y-3">
                  <Link href="/trial" className="w-full bg-[#009CA6] hover:bg-[#00828A] text-white py-3 rounded-full font-bold text-sm flex justify-center items-center gap-2 transition-colors">Book a Demo <ArrowRight size={16}/></Link>
                  <Link href="#pricing" className="w-full bg-[#E67E22] hover:bg-[#D35400] text-white py-3 rounded-full font-bold text-sm flex justify-center items-center gap-2 transition-colors">View Pricing <ArrowRight size={16}/></Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 4. FLOATING ACTION BUTTON STRIP */}
      <div className="max-w-[1200px] mx-auto relative z-20 -mt-8">
        <div className="grid grid-cols-4 gap-4">
          <Link href="/explore-courses" className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center justify-between hover:-translate-y-1 transition-transform group"><span className="text-sm font-bold text-gray-700">Browse Courses</span><ArrowRight size={16} className="text-[#F39C12] group-hover:translate-x-1 transition-transform"/></Link>
          <Link href="/trial" className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center justify-between hover:-translate-y-1 transition-transform group"><span className="text-sm font-bold text-gray-700">Free Trial</span><ArrowRight size={16} className="text-[#009CA6] group-hover:translate-x-1 transition-transform"/></Link>
          <Link href="/software" className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center justify-between hover:-translate-y-1 transition-transform group"><span className="text-sm font-bold text-gray-700">School Software</span><ArrowRight size={16} className="text-[#D1007B] group-hover:translate-x-1 transition-transform"/></Link>
          <Link href="/contact" className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center justify-between hover:-translate-y-1 transition-transform group"><span className="text-sm font-bold text-gray-700">Request a Call Back</span><ArrowRight size={16} className="text-emerald-500 group-hover:translate-x-1 transition-transform"/></Link>
        </div>
      </div>

      {/* 5. DYNAMIC SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <p className="text-[#009CA6] font-bold tracking-widest text-[10px] uppercase mb-2">{activeTab === 'students' ? 'OUR CURRICULA' : '19 CORE MODULES'}</p>
          <h2 className="text-3xl font-medium text-[#333333] mb-4">{activeTab === 'students' ? 'World-class curricula for every stage' : 'One platform, every Core module'}</h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto mb-16">{activeTab === 'students' ? 'Whether you are in primary school or completing a postgraduate degree, we provide the curriculum and AI support you need.' : 'From AcademicCore and AssessmentCore to ConnectCore, VerifyCore, and the AcadAI intelligence layer.'}</p>

          <div className="grid grid-cols-3 gap-6 text-left">
            {activeTab === 'students' ? (
              studentCurricula.map((card, i) => (
                <div key={i} className="bg-[#009CA6] rounded-xl overflow-hidden shadow-lg flex flex-col group hover:-translate-y-1 transition-transform">
                  <div className="h-48 overflow-hidden"><img src={card.img} alt={card.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                  <div className="p-6 text-white flex-grow flex flex-col"><h3 className="text-xl font-medium mb-3">{card.title}</h3><p className="text-xs text-teal-100 mb-6 flex-grow">{card.desc}</p><Link href="/explore-courses" className="inline-block bg-white text-[#009CA6] px-6 py-2 rounded-full font-bold text-xs w-max hover:bg-gray-100 transition-colors">View Courses →</Link></div>
                </div>
              ))
            ) : (
              coreModules.map((card, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col hover:-translate-y-1 transition-transform">
                  <div className={`h-2 w-full ${card.color}`}></div>
                  <div className="p-6 flex-grow flex flex-col"><div className="flex justify-between items-start mb-4"><div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white ${card.color}`}>{card.icon}</div><span className="text-[10px] font-bold text-gray-400 uppercase">{card.status}</span></div><h3 className="text-lg font-bold text-[#333] mb-2">{card.title}</h3><p className="text-sm text-gray-500 mb-6 flex-grow">{card.desc}</p><Link href="/software" className="text-xs font-bold text-[#009CA6] flex items-center gap-1 hover:gap-2 transition-all">Learn more <ArrowRight size={12}/></Link></div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* 6. PRICING SECTION (Only for Schools) */}
      {activeTab === "schools" && (
        <section id="pricing" className="py-24 bg-[#F8FAFC] border-t border-gray-200">
          <div className="max-w-[1200px] mx-auto px-8 text-center">
            <p className="text-[#009CA6] font-bold tracking-widest text-[10px] uppercase mb-2">PRICING</p>
            <h2 className="text-3xl font-medium text-[#333333] mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto mb-16">Capacity-based pricing allowing schools to pay according to their expected student population.</p>
            <div className="grid grid-cols-4 gap-6">
              {pricingPlans.map((plan, i) => (
                <div key={i} className={`bg-white rounded-xl border ${plan.popular ? 'border-[#D1007B] shadow-lg relative' : 'border-gray-200 shadow-sm'} p-6 flex flex-col`}>
                  {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D1007B] text-white text-[10px] font-bold px-3 py-1 rounded-full">Most Popular</span>}
                  <h3 className="text-lg font-bold text-[#333] mb-1">{plan.name}</h3>
                  <p className="text-xs text-gray-500 mb-4">{plan.capacity}</p>
                  <p className="text-2xl font-bold text-[#009CA6] mb-1">{plan.price}</p>
                  <p className="text-[10px] text-gray-400 mb-6">{plan.yearly}</p>
                  <button className={`w-full py-2 rounded-lg text-sm font-bold transition-colors ${plan.popular ? 'bg-[#D1007B] text-white hover:bg-[#A3005F]' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>Get Started</button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. TESTIMONIALS (Only for Schools) */}
      {activeTab === "schools" && (
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="text-center mb-16"><p className="text-[#009CA6] font-bold tracking-widest text-[10px] uppercase mb-2">TESTIMONIALS</p><h2 className="text-3xl font-medium text-[#333333]">What Schools Say About Us</h2></div>
            <div className="grid grid-cols-2 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                  <div className="flex text-yellow-500 mb-4"><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/></div>
                  <p className="text-gray-700 italic mb-6">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#009CA6] text-white flex items-center justify-center font-bold">{t.initial}</div>
                    <div><p className="font-bold text-[#333] text-sm">{t.name}</p><p className="text-xs text-gray-500">{t.role}</p></div>
                    <span className="ml-auto text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Verified</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. FOOTER */}
      <footer className="bg-[#009CA6] text-white pt-16 pb-8 px-8 border-t-8 border-[#D1007B]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 gap-12 mb-12">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-teal-200 mb-2 block">THINK EduNova Academy</span>
            <h1 className="text-3xl font-bold tracking-tight mb-4">The future is digital</h1>
            <p className="text-sm text-teal-100 leading-relaxed mb-6 max-w-md">Providing online courses to students and an intelligent operating system to schools. We serve the entire educational ecosystem.</p>
            <div className="flex gap-3 mb-8">
              <Link href="/trial" className="bg-[#E67E22] hover:bg-[#D35400] px-6 py-2 rounded-md text-sm font-bold transition-colors">Free trial</Link>
              <Link href="/enrol" className="bg-[#D1007B] hover:bg-[#A3005F] px-6 py-2 rounded-md text-sm font-bold transition-colors">Enrol now</Link>
              <Link href="/login" className="bg-transparent border border-white hover:bg-white hover:text-[#009CA6] px-6 py-2 rounded-md text-sm font-bold transition-colors">Login</Link>
            </div>
            <div className="flex gap-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 cursor-pointer transition-colors">f</a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 cursor-pointer transition-colors">X</a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 cursor-pointer transition-colors">▶</a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 cursor-pointer transition-colors">📷</a>
            </div>
          </div>

          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-teal-200 mb-2 block">Connect with us</span>
            <h2 className="text-3xl font-bold tracking-tight mb-6">We are a message away</h2>
            <div className="grid grid-cols-2 gap-4">
              <a href="mailto:hello@edunovaacademy.org" className="bg-white/10 p-4 rounded-xl border border-white/20 flex items-center gap-4 hover:bg-white/20 transition-colors"><div className="bg-white p-2 rounded-full text-[#D1007B]"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg></div><div><p className="text-[10px] font-bold uppercase tracking-wider text-teal-200">Email</p><p className="text-sm font-bold">hello@edunovaacademy.org</p></div></a>
              <Link href="/contact" className="bg-white/10 p-4 rounded-xl border border-white/20 flex items-center gap-4 hover:bg-white/20 transition-colors"><div className="bg-white p-2 rounded-full text-[#E67E22]"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg></div><div><p className="text-[10px] font-bold uppercase tracking-wider text-teal-200">Request a call back</p><p className="text-sm font-bold">We will phone you</p></div></Link>
              <div className="col-span-2 bg-white/10 p-4 rounded-xl border border-white/20 flex items-start gap-4"><div className="bg-white p-2 rounded-full text-[#009CA6] mt-1"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg></div><div className="flex-grow"><p className="text-[10px] font-bold uppercase tracking-wider text-teal-200 mb-2">Regional office phone numbers</p><a href="tel:+12392384411" className="flex justify-between items-center border-b border-white/10 pb-1 mb-1 hover:text-white"><span className="text-xs text-teal-100">United States</span><span className="text-sm font-bold">+1 239 238 4411</span></a><a href="tel:+27129981472" className="flex justify-between items-center hover:text-white"><span className="text-xs text-teal-100">South Africa</span><span className="text-sm font-bold">+27 12 998 1472</span></a></div></div>
              <div className="col-span-2 bg-white/10 p-4 rounded-xl border border-white/20 flex items-start gap-4 mt-2"><div className="bg-green-500 p-2 rounded-full text-white mt-1"><svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.2 14c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.8-1c.2-.2.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.8-.1 1.4Z"/></svg></div><div className="flex-grow"><p className="text-[10px] font-bold uppercase tracking-wider text-teal-200 mb-2">WhatsApp</p><a href="https://wa.me/27714084677" className="flex justify-between items-center border-b border-white/10 pb-1 mb-1 hover:text-white"><span className="text-xs text-teal-100">English</span><span className="text-sm font-bold">+27 71 408 4677</span></a><a href="https://wa.me/27679127838" className="flex justify-between items-center hover:text-white"><span className="text-xs text-teal-100">Afrikaans</span><span className="text-sm font-bold">+27 67 912 7838</span></a></div></div>
            </div>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto pt-8 border-t border-teal-500 flex flex-wrap justify-between items-center text-[11px] text-teal-100 gap-4">
          <p>© Copyright – THINK EduNova Academy. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 uppercase font-bold tracking-wider">
            <Link href="/terms" className="hover:text-white transition-colors">Terms and conditions</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy policy</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie policy</Link>
            <Link href="/paia" className="hover:text-white transition-colors">PAIA</Link>
            <Link href="/search" className="hover:text-white transition-colors">Search</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}