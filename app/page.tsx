"use client";

import Link from "next/link";
import { 
  Search, ArrowRight, CheckCircle2, MessageCircle, ChevronDown, BookOpen, Phone, Globe
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F4F4F4] font-sans">
      
      {/* 1. TOP BAR */}
      <div className="bg-[#009CA6] text-white text-xs py-2 px-8 flex justify-between items-center relative z-50">
        <p className="flex items-center gap-2 font-medium">
          <span className="w-2 h-2 rounded-full bg-[#A2E8E6] animate-pulse"></span>
          International online school - study from anywhere in the world
        </p>
        <div className="flex items-center gap-3">
          <Link href="/trial" className="bg-[#F39C12] hover:bg-[#E67E22] px-4 py-1.5 rounded-full font-bold transition-colors">Free trial</Link>
          <Link href="/enrol" className="bg-[#D1007B] hover:bg-[#A3005F] px-4 py-1.5 rounded-full font-bold transition-colors flex items-center gap-1">Enrol now <ArrowRight size={12}/></Link>
          <Link href="/login" className="bg-[#E2E8F0] text-[#0B132B] hover:bg-white px-4 py-1.5 rounded-full font-bold transition-colors">Login</Link>
        </div>
      </div>

      {/* 2. NAVBAR WITH MEGA MENU & FIXED DROPDOWNS */}
      <nav className="bg-[#333333] border-b-4 border-[#009CA6] px-8 py-4 flex justify-between items-center relative z-40 shadow-md">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-3">
             <BookOpen size={36} className="text-[#D1007B]" strokeWidth={2.5} />
             <div>
                <div className="text-[#D1007B] text-2xl font-black italic tracking-tighter leading-none">THINK</div>
                <p className="text-white text-[8px] tracking-[0.2em] font-bold uppercase mt-0.5">EduNova Academy</p>
             </div>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-6 text-xs font-bold text-white uppercase tracking-wider">
          <Link href="#" className="hover:text-[#009CA6]">Home</Link>
          
          {/* About Dropdown */}
          <div className="relative group py-2">
            <button className="hover:text-[#009CA6] flex items-center gap-1">About <ChevronDown size={12}/></button>
            <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2">
              <ul className="space-y-3">
                {["About us", "Our key services", "Prospectus", "Accreditation and certification", "Countries and regions", "Awards and recognition", "Reviews", "Media releases", "Contact us"].map((item, i) => (
                  <li key={i}><Link href="#" className="flex items-center gap-2 text-[#333] hover:text-[#D1007B]"><span className="w-1.5 h-1.5 rounded-full bg-[#D1007B]"></span> {item}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Curricula MEGA MENU */}
          <div className="relative group py-2">
            <button className="bg-[#D1007B] text-white px-4 py-1.5 rounded-full flex items-center gap-1">Curricula <ChevronDown size={12}/></button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[700px] bg-white rounded-xl shadow-2xl border border-gray-100 p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2">
              <div className="grid grid-cols-3 gap-8 text-left">
                
                {/* Column 1: South African CAPS */}
                <div>
                  <h4 className="text-[#333] font-bold border-b border-gray-100 pb-2 mb-3 text-sm">South African CAPS</h4>
                  <ul className="space-y-2">
                    {["Overview", "Primary (Grades R – 7)", "High (Grades 8 – 12)", "Adult Matric", "FAQs"].map((item, i) => (
                      <li key={i}><Link href="#" className="text-sm text-gray-500 hover:text-[#D1007B] flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#D1007B]"></span> {item}</Link></li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: British International */}
                <div>
                  <h4 className="text-[#333] font-bold border-b border-gray-100 pb-2 mb-3 text-sm">British International</h4>
                  <ul className="space-y-2">
                    {["Overview", "Early Years – Stage R", "Lower Primary (Stages 1 – 3)", "Upper Primary (Stages 4 – 6)", "Lower Secondary (Stages 7 – 8)", "IGCSE", "AS Level", "FAQs"].map((item, i) => (
                      <li key={i}><Link href="#" className="text-sm text-gray-500 hover:text-[#D1007B] flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#D1007B]"></span> {item}</Link></li>
                    ))}
                  </ul>
                </div>

                {/* Column 3: United States GED */}
                <div>
                  <h4 className="text-[#333] font-bold border-b border-gray-100 pb-2 mb-3 text-sm">United States GED</h4>
                  <ul className="space-y-2">
                    {["Overview", "Mathematical Reasoning", "Reasoning Through Language Arts", "Science", "Social Studies", "FAQs"].map((item, i) => (
                      <li key={i}><Link href="#" className="text-sm text-gray-500 hover:text-[#D1007B] flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#D1007B]"></span> {item}</Link></li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>

          {/* Courses Dropdown */}
          <div className="relative group py-2">
            <button className="hover:text-[#009CA6] flex items-center gap-1">Courses <ChevronDown size={12}/></button>
            <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2">
              <ul className="space-y-3">
                {["Winter School – Maths and Science for matrics", "Coding and Robotics", "Mind Power for Kids", "Mind Power for Teens", "Social Media for Kids", "Social Media for Teens"].map((item, i) => (
                  <li key={i}><Link href="#" className="flex items-center gap-2 text-[#333] hover:text-[#D1007B]"><span className="w-1.5 h-1.5 rounded-full bg-[#D1007B]"></span> {item}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Fees Dropdown */}
          <div className="relative group py-2">
            <button className="hover:text-[#009CA6] flex items-center gap-1">Fees <ChevronDown size={12}/></button>
            <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2">
              <ul className="space-y-3">
                {["Annual tuition fees", "Fee calculator", "Short course and winter school fees", "Special offers"].map((item, i) => (
                  <li key={i}><Link href="#" className="flex items-center gap-2 text-[#333] hover:text-[#D1007B]"><span className="w-1.5 h-1.5 rounded-full bg-[#D1007B]"></span> {item}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Info Dropdown */}
          <div className="relative group py-2">
            <button className="hover:text-[#009CA6] flex items-center gap-1">Info <ChevronDown size={12}/></button>
            <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2">
              <ul className="space-y-3">
                {["How to get started", "Stationery and equipment", "Suggested school terms", "Glossary of terms used"].map((item, i) => (
                  <li key={i}><Link href="#" className="flex items-center gap-2 text-[#333] hover:text-[#D1007B]"><span className="w-1.5 h-1.5 rounded-full bg-[#D1007B]"></span> {item}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQs Dropdown */}
          <div className="relative group py-2">
            <button className="hover:text-[#009CA6] flex items-center gap-1">FAQs <ChevronDown size={12}/></button>
            <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2">
              <ul className="space-y-3">
                {["General", "Fees and payment", "Cambridge International", "South African CAPS", "United States GED"].map((item, i) => (
                  <li key={i}><Link href="#" className="flex items-center gap-2 text-[#333] hover:text-[#D1007B]"><span className="w-1.5 h-1.5 rounded-full bg-[#D1007B]"></span> {item}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Read Dropdown */}
          <div className="relative group py-2">
            <button className="hover:text-[#009CA6] flex items-center gap-1">Read <ChevronDown size={12}/></button>
            <div className="absolute top-full right-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2">
              <ul className="space-y-3">
                {["Think Tank blog", "Reading Room", "Think Digital News"].map((item, i) => (
                  <li key={i}><Link href="#" className="flex items-center gap-2 text-[#333] hover:text-[#D1007B]"><span className="w-1.5 h-1.5 rounded-full bg-[#D1007B]"></span> {item}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Dropdown */}
          <div className="relative group py-2">
            <button className="hover:text-[#009CA6] flex items-center gap-1">Social <ChevronDown size={12}/></button>
            <div className="absolute top-full right-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2">
              <ul className="space-y-3">
                {["About our clubs", "Art Club", "Cartoon and Anime Club", "Dance Club", "Drama Stars Club", "Jewels and Jems Club", "Mathletes Club", "Movement Society", "Pilates Club", "Science Club", "The Zen Club", "Time Travellers Club", "Yoga Club"].map((item, i) => (
                  <li key={i}><Link href="#" className="flex items-center gap-2 text-[#333] hover:text-[#D1007B]"><span className="w-1.5 h-1.5 rounded-full bg-[#D1007B]"></span> {item}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Hubs Dropdown */}
          <div className="relative group py-2">
            <button className="hover:text-[#009CA6] flex items-center gap-1">Hubs <ChevronDown size={12}/></button>
            <div className="absolute top-full right-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2">
              <ul className="space-y-3">
                {["Find a coaching hub", "Register a coaching hub"].map((item, i) => (
                  <li key={i}><Link href="#" className="flex items-center gap-2 text-[#333] hover:text-[#D1007B]"><span className="w-1.5 h-1.5 rounded-full bg-[#D1007B]"></span> {item}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          <button className="text-white hover:text-[#009CA6]"><Search size={16}/></button>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <section className="relative bg-[#4A5D6B] overflow-hidden py-20 px-8 border-b-8 border-[#D1007B]">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/blackboard.png")' }}></div>
        
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-12 items-center relative z-10">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800" 
              alt="Learning" 
              className="rounded-xl shadow-2xl object-cover h-[400px] w-full border-4 border-white"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#F39C12] text-white p-4 rounded-full font-bold text-xl shadow-lg border-4 border-white rotate-12">
              Extended Early Bird Special!
            </div>
          </div>

          <div className="bg-[#D1007B] text-white p-10 rounded-2xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-bl-full"></div>
            <div className="inline-block bg-white/20 text-white text-[10px] font-bold px-3 py-1.5 rounded-full mb-6 backdrop-blur-sm border border-white/30">
              🏆 VIRTUAL SCHOOL OF THE YEAR
            </div>
            <h1 className="text-4xl font-bold leading-tight mb-6">
              Award-winning online education for Schools, Colleges & Universities
            </h1>
            <p className="text-sm text-pink-100 mb-8 leading-relaxed">
              EduNova Academy is South Africa's leading AI-powered virtual school. We provide the <strong>CAPS</strong>, <strong>British International</strong>, <strong>GED</strong>, and <strong>University</strong> curricula in an integrated, engaging way.
            </p>
            <div className="space-y-3">
              <Link href="/login" className="w-full bg-[#009CA6] hover:bg-[#00828A] text-white py-3 rounded-full font-bold text-sm flex justify-center items-center gap-2 transition-colors">More info <ArrowRight size={16}/></Link>
              <Link href="/login" className="w-full bg-[#E67E22] hover:bg-[#D35400] text-white py-3 rounded-full font-bold text-sm flex justify-center items-center gap-2 transition-colors">Our fees <ArrowRight size={16}/></Link>
              <Link href="/trial" className="w-full bg-white text-[#D1007B] hover:bg-gray-100 py-3 rounded-full font-bold text-sm flex justify-center items-center gap-2 transition-colors">Free trial <ArrowRight size={16}/></Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FLOATING ACTION BUTTON STRIP */}
      <div className="max-w-[1200px] mx-auto relative z-20 -mt-8">
        <div className="grid grid-cols-4 gap-4">
          <Link href="#" className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center justify-between hover:-translate-y-1 transition-transform group">
            <span className="text-sm font-bold text-gray-700">Fee calculator</span>
            <ArrowRight size={16} className="text-[#F39C12] group-hover:translate-x-1 transition-transform"/>
          </Link>
          <Link href="/trial" className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center justify-between hover:-translate-y-1 transition-transform group">
            <span className="text-sm font-bold text-gray-700">Free trial</span>
            <ArrowRight size={16} className="text-[#009CA6] group-hover:translate-x-1 transition-transform"/>
          </Link>
          <Link href="/enrol" className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center justify-between hover:-translate-y-1 transition-transform group">
            <span className="text-sm font-bold text-gray-700">Enrol</span>
            <ArrowRight size={16} className="text-[#D1007B] group-hover:translate-x-1 transition-transform"/>
          </Link>
          <Link href="#" className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center justify-between hover:-translate-y-1 transition-transform group">
            <span className="text-sm font-bold text-gray-700">Request a call back</span>
            <ArrowRight size={16} className="text-emerald-500 group-hover:translate-x-1 transition-transform"/>
          </Link>
        </div>
      </div>

      {/* 5. FREE TRIAL BANNER */}
      <section className="bg-[#333333] py-16 text-center text-white mt-8">
        <h2 className="text-xl font-medium mb-6">Request a free 14-day trial and explore our virtual campus.</h2>
        <Link href="/trial" className="inline-block bg-[#D1007B] hover:bg-[#A3005F] px-8 py-2.5 rounded-full font-bold text-sm transition-colors">
          Free trial →
        </Link>
      </section>

      {/* 6. CURRICULUM SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <p className="text-[#009CA6] font-bold tracking-widest text-[10px] uppercase mb-2">OUR CURRICULA</p>
          <h2 className="text-3xl font-medium text-[#333333] mb-4">World-class curricula for every stage</h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto mb-16">
            Whether you are in primary school or completing a postgraduate degree, EduNova Academy provides the curriculum and AI support you need.
          </p>

          <div className="grid grid-cols-3 gap-6 text-left">
            {/* CAPS Card */}
            <div className="bg-[#009CA6] rounded-xl overflow-hidden shadow-lg flex flex-col">
              <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=600" alt="CAPS" className="h-48 w-full object-cover" />
              <div className="p-6 text-white flex-grow flex flex-col">
                <h3 className="text-xl font-medium mb-3">South African CAPS</h3>
                <p className="text-xs text-teal-100 mb-6 flex-grow">
                  The Curriculum and Assessment Policy Statement (CAPS) from Grades R – 12. Complete this standard South African curriculum from anywhere.
                </p>
                <Link href="#" className="inline-block bg-white text-[#009CA6] px-6 py-2 rounded-full font-bold text-xs w-max hover:bg-gray-100 transition-colors">Curriculum info →</Link>
              </div>
            </div>

            {/* British Card */}
            <div className="bg-[#009CA6] rounded-xl overflow-hidden shadow-lg flex flex-col">
              <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600" alt="British" className="h-48 w-full object-cover" />
              <div className="p-6 text-white flex-grow flex flex-col">
                <h3 className="text-xl font-medium mb-3">British International</h3>
                <p className="text-xs text-teal-100 mb-6 flex-grow">
                  A highly structured international curriculum designed to meet the needs of all students. Recognised globally.
                </p>
                <Link href="#" className="inline-block bg-white text-[#009CA6] px-6 py-2 rounded-full font-bold text-xs w-max hover:bg-gray-100 transition-colors">Curriculum info →</Link>
              </div>
            </div>

            {/* GED Card */}
            <div className="bg-[#009CA6] rounded-xl overflow-hidden shadow-lg flex flex-col">
              <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600" alt="GED" className="h-48 w-full object-cover" />
              <div className="p-6 text-white flex-grow flex flex-col">
                <h3 className="text-xl font-medium mb-3">United States GED</h3>
                <p className="text-xs text-teal-100 mb-6 flex-grow">
                  The GED® is the internationally recognised higher secondary certificate, accepted by almost all universities globally.
                </p>
                <Link href="#" className="inline-block bg-white text-[#009CA6] px-6 py-2 rounded-full font-bold text-xs w-max hover:bg-gray-100 transition-colors">Curriculum info →</Link>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-6 text-left mt-6">
            {/* Colleges & TVET */}
            <div className="bg-[#009CA6] rounded-xl overflow-hidden shadow-lg flex flex-col">
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600" alt="College" className="h-48 w-full object-cover" />
              <div className="p-6 text-white flex-grow flex flex-col">
                <h3 className="text-xl font-medium mb-3">Colleges & TVET</h3>
                <p className="text-xs text-teal-100 mb-6 flex-grow">
                  N-Levels, Diplomas, and vocational skills for the modern workforce. Gain practical skills and step-by-step guidance.
                </p>
                <Link href="#" className="inline-block bg-white text-[#009CA6] px-6 py-2 rounded-full font-bold text-xs w-max hover:bg-gray-100 transition-colors">Curriculum info →</Link>
              </div>
            </div>

            {/* University */}
            <div className="bg-[#009CA6] rounded-xl overflow-hidden shadow-lg flex flex-col">
              <img src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=600" alt="University" className="h-48 w-full object-cover" />
              <div className="p-6 text-white flex-grow flex flex-col">
                <h3 className="text-xl font-medium mb-3">University</h3>
                <p className="text-xs text-teal-100 mb-6 flex-grow">
                  Undergraduate and Postgraduate modules. Access advanced research support, academic resources, and AI tutors.
                </p>
                <Link href="#" className="inline-block bg-white text-[#009CA6] px-6 py-2 rounded-full font-bold text-xs w-max hover:bg-gray-100 transition-colors">Curriculum info →</Link>
              </div>
            </div>
            
            {/* Short Courses */}
            <div className="bg-[#009CA6] rounded-xl overflow-hidden shadow-lg flex flex-col">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600" alt="Short Courses" className="h-48 w-full object-cover" />
              <div className="p-6 text-white flex-grow flex flex-col">
                <h3 className="text-xl font-medium mb-3">Short Courses</h3>
                <p className="text-xs text-teal-100 mb-6 flex-grow">
                  Focused skills and programmes designed to upskill you quickly for the job market. Learn at your own pace.
                </p>
                <Link href="#" className="inline-block bg-white text-[#009CA6] px-6 py-2 rounded-full font-bold text-xs w-max hover:bg-gray-100 transition-colors">Curriculum info →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BLOG SECTION */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-[#009CA6] font-bold tracking-widest text-[10px] uppercase mb-2">FROM THE THINK TANK</p>
            <h2 className="text-3xl font-medium text-[#333333]">Ideas, tips and news for learning at home</h2>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {[
              { tag: "ONLINE SCHOOLING", tagColor: "bg-[#009CA6]", title: "Online schooling South Africa 2026: why families are switching", img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=600" },
              { tag: "SOUTH AFRICAN CAPS", tagColor: "bg-[#D1007B]", title: "Matric exam stress: how parents can help (not hover)", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600" },
              { tag: "TIPS FOR PARENTS", tagColor: "bg-[#E67E22]", title: "The homework table is not a battlefield", img: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=600" },
            ].map((post, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className={`absolute top-4 left-4 ${post.tagColor} text-white text-[9px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider`}>{post.tag}</span>
                </div>
                <div className="p-6">
                  <p className="text-[10px] text-gray-400 font-bold mb-2 uppercase">18 SEP 2026 · 10 MIN READ</p>
                  <h3 className="text-lg font-medium text-[#009CA6] mb-3 group-hover:underline leading-tight">{post.title}</h3>
                  <p className="text-xs text-gray-500 mb-4 line-clamp-2">Discover practical, research-backed ways to help your child study smarter and make learning less stressful.</p>
                  <span className="text-xs font-bold text-[#009CA6] flex items-center gap-1">Read article <ArrowRight size={12}/></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE US */}
      <section className="py-24 bg-[#222222] text-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-[#009CA6] font-bold tracking-widest text-[10px] uppercase mb-2">WHY FAMILIES CHOOSE US</p>
            <h2 className="text-3xl font-medium mb-4">Education success starts with us</h2>
            <div className="w-16 h-1 bg-[#D1007B] mx-auto"></div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-[#D1007B] p-6 rounded-2xl shadow-xl">
              <ul className="space-y-3">
                {["AI Tutors available 24/7", "Expert human tutors", "Live interactive classrooms", "Multilingual support", "Printable study notes", "Assessments and feedback", "Weekly e-mailed reports", "Quarterly reports", "Student Forum", "Virtual clubs", "Past papers", "Study guides"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium border-b border-white/20 pb-2"><CheckCircle2 size={16} className="text-white shrink-0"/> {item}</li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1571260899304-425dea5cfd41?auto=format&fit=crop&q=80&w=600" alt="Student 1" className="rounded-2xl h-64 w-full object-cover" />
               <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600" alt="Student 2" className="rounded-2xl h-64 w-full object-cover mt-8" />
               <div className="col-span-2 bg-[#009CA6] p-8 rounded-2xl mt-4">
                  <h3 className="text-2xl font-medium mb-2">Get social with our clubs and fraternities</h3>
                  <p className="text-sm text-teal-100 mb-6">Worried about missing out on socialising while studying online? We regularly host meet and greets, have matric dances, and have clubs you can join!</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Art Club", "Cartoon and Anime Club", "Dance Club", "Drama Stars Club", "Jewels and Gems Club", "Mathletes Club", "Movement Society", "Pilates Club", "Science Club", "The Zen Club"].map((club, i) => (
                      <span key={i} className="bg-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/30 cursor-pointer hover:bg-white/30">{club}</span>
                    ))}
                  </div>
                  <button className="bg-white text-[#009CA6] px-6 py-2 rounded-full font-bold text-sm">Social info →</button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FOOTER - EXACT MATCH TO SOURCE CODE */}
      <footer className="bg-[#009CA6] text-white pt-16 pb-8 px-8 border-t-8 border-[#D1007B]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 gap-12 mb-12">
          
          {/* Left Side: Brand & CTA */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-teal-200 mb-2 block">Think Digital Academy</span>
            <h1 className="text-3xl font-bold tracking-tight mb-4">The future is digital</h1>
            <p className="text-sm text-teal-100 leading-relaxed mb-6 max-w-md">
              Think Digital Academy is the first international virtual school providing a state of the art e-learning environment. We provide the United States GED, British International and South African CAPS curricula in an integrated, engaging and effective way.
            </p>
            <div className="flex gap-3 mb-8">
              <Link href="/trial" className="bg-[#E67E22] hover:bg-[#D35400] px-6 py-2 rounded-md text-sm font-bold transition-colors">Free trial</Link>
              <Link href="/enrol" className="bg-[#D1007B] hover:bg-[#A3005F] px-6 py-2 rounded-md text-sm font-bold transition-colors">Continue enrolment</Link>
              <Link href="/login" className="bg-transparent border border-white hover:bg-white hover:text-[#009CA6] px-6 py-2 rounded-md text-sm font-bold transition-colors">Login</Link>
              <button className="bg-white text-[#009CA6] hover:bg-gray-100 px-6 py-2 rounded-md text-sm font-bold transition-colors">Subscribe</button>
            </div>
            <div className="flex gap-2">
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 cursor-pointer">f</span>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 cursor-pointer">X</span>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 cursor-pointer">▶</span>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 cursor-pointer">📷</span>
            </div>
          </div>

          {/* Right Side: "We are a message away" Cards */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-teal-200 mb-2 block">Connect with us</span>
            <h2 className="text-3xl font-bold tracking-tight mb-6">We are a message away</h2>
            
            <div className="grid grid-cols-2 gap-4">
              {/* Email Card */}
              <div className="bg-white/10 p-4 rounded-xl border border-white/20 flex items-center gap-4">
                <div className="bg-white p-2 rounded-full text-[#D1007B]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-teal-200">Email</p>
                  <p className="text-sm font-bold">hello@edunovaacademy.org</p>
                </div>
              </div>

              {/* Call Back Card */}
              <div className="bg-white/10 p-4 rounded-xl border border-white/20 flex items-center gap-4">
                <div className="bg-white p-2 rounded-full text-[#E67E22]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-teal-200">Request a call back</p>
                  <p className="text-sm font-bold">We will phone you</p>
                </div>
              </div>

              {/* Regional Numbers Card */}
              <div className="col-span-2 bg-white/10 p-4 rounded-xl border border-white/20 flex items-start gap-4">
                <div className="bg-white p-2 rounded-full text-[#009CA6] mt-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>
                </div>
                <div className="flex-grow">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-teal-200 mb-2">Regional office phone numbers</p>
                  <div className="flex justify-between items-center border-b border-white/10 pb-1 mb-1">
                    <span className="text-xs text-teal-100">United States</span>
                    <span className="text-sm font-bold">+1 239 238 4411</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-teal-100">South Africa</span>
                    <span className="text-sm font-bold">+27 12 998 1472</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="col-span-2 bg-white/10 p-4 rounded-xl border border-white/20 flex items-start gap-4 mt-2">
                <div className="bg-green-500 p-2 rounded-full text-white mt-1">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.2 14c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.8-1c.2-.2.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.8-.1 1.4Z"/></svg>
                </div>
                <div className="flex-grow">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-teal-200 mb-2">WhatsApp</p>
                  <div className="flex justify-between items-center border-b border-white/10 pb-1 mb-1">
                    <span className="text-xs text-teal-100">English</span>
                    <span className="text-sm font-bold">+27 71 408 4677</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-teal-100">Afrikaans</span>
                    <span className="text-sm font-bold">+27 67 912 7838</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto pt-8 border-t border-teal-500 flex flex-wrap justify-between items-center text-[11px] text-teal-100 gap-4">
          <p>© Copyright – Think Digital Academy. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 uppercase font-bold tracking-wider">
            <Link href="#" className="hover:text-white">Terms and conditions</Link>
            <Link href="#" className="hover:text-white">Privacy policy</Link>
            <Link href="#" className="hover:text-white">Cookie policy</Link>
            <Link href="#" className="hover:text-white">PAIA</Link>
            <Link href="#" className="hover:text-white">Anti-spam policy</Link>
            <Link href="#" className="hover:text-white">Search</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}