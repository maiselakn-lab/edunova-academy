"use client";

import Link from "next/link";
import { 
  Search, ArrowRight, CheckCircle2, MessageCircle, ChevronDown, BookOpen
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F4F4F4] font-sans">
      
      {/* 1. TOP BAR */}
      <div className="bg-[#009CA6] text-white text-xs py-2 px-8 flex justify-between items-center relative z-50">
        <p className="flex items-center gap-2 font-medium">
          <span className="w-2 h-2 rounded-full bg-[#A2E8E6]"></span>
          International online school - study from anywhere in the world
        </p>
        <div className="flex items-center gap-3">
          <Link href="/trial" className="bg-[#F39C12] hover:bg-[#E67E22] px-4 py-1.5 rounded-full font-bold transition-colors">Free trial</Link>
          <Link href="/enrol" className="bg-[#D1007B] hover:bg-[#A3005F] px-4 py-1.5 rounded-full font-bold transition-colors flex items-center gap-1">Enrol now <ArrowRight size={12}/></Link>
          <Link href="/login" className="bg-[#E2E8F0] text-[#0B132B] hover:bg-white px-4 py-1.5 rounded-full font-bold transition-colors">Login</Link>
        </div>
      </div>

      {/* 2. NAVBAR WITH DROPDOWNS */}
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

          <div className="relative group py-2">
            <button className="bg-[#D1007B] text-white px-4 py-1.5 rounded-full flex items-center gap-1">Curricula <ChevronDown size={12}/></button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-xl shadow-2xl border border-gray-100 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2">
              <div className="grid grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="text-[#333] font-bold border-b border-gray-100 pb-2 mb-3">School (CAPS & IEB)</h4>
                  <ul className="space-y-2">
                    {["Foundation (R-3)", "Intermediate (4-6)", "Senior (7-9)", "FET / Matric (10-12)", "NCV Options", "FAQs"].map((item, i) => (
                      <li key={i}><Link href="#" className="text-sm text-gray-500 hover:text-[#D1007B] flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#D1007B]"></span> {item}</Link></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[#333] font-bold border-b border-gray-100 pb-2 mb-3">TVET & Colleges</h4>
                  <ul className="space-y-2">
                    {["NCV Programmes", "NATED / Report 191", "NQF Level 5 & 6", "Engineering Studies", "Business Studies", "FAQs"].map((item, i) => (
                      <li key={i}><Link href="#" className="text-sm text-gray-500 hover:text-[#D1007B] flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#D1007B]"></span> {item}</Link></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[#333] font-bold border-b border-gray-100 pb-2 mb-3">Universities</h4>
                  <ul className="space-y-2">
                    {["Bachelor's (NQF 7)", "Honours (NQF 8)", "Master's (NQF 9)", "Doctoral (NQF 10)", "APS & NBT Prep", "FAQs"].map((item, i) => (
                      <li key={i}><Link href="#" className="text-sm text-gray-500 hover:text-[#D1007B] flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#D1007B]"></span> {item}</Link></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group py-2">
            <button className="hover:text-[#009CA6] flex items-center gap-1">Courses <ChevronDown size={12}/></button>
            <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2">
              <ul className="space-y-3">
                {["Winter School - Maths and Science for matric", "Coding and Robotics", "Mind Power for Kids", "Mind Power for Teens", "Social Media for Kids", "Social Media for Teens"].map((item, i) => (
                  <li key={i}><Link href="#" className="flex items-center gap-2 text-[#333] hover:text-[#D1007B]"><span className="w-1.5 h-1.5 rounded-full bg-[#D1007B]"></span> {item}</Link></li>
                ))}
              </ul>
            </div>
          </div>

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

          <div className="relative group py-2">
            <button className="hover:text-[#009CA6] flex items-center gap-1">FAQs <ChevronDown size={12}/></button>
            <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2">
              <ul className="space-y-3">
                {["General", "Fees and payment", "CAPS & IEB", "TVET & NATED", "University"].map((item, i) => (
                  <li key={i}><Link href="#" className="flex items-center gap-2 text-[#333] hover:text-[#D1007B]"><span className="w-1.5 h-1.5 rounded-full bg-[#D1007B]"></span> {item}</Link></li>
                ))}
              </ul>
            </div>
          </div>

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
              Award-winning online education from Grade R to PhD
            </h1>
            <p className="text-sm text-pink-100 mb-8 leading-relaxed">
              EduNova Academy is South Africa's leading AI-powered virtual school. We provide the <strong>CAPS</strong>, <strong>NCV</strong>, <strong>NATED</strong>, and <strong>University</strong> curricula in an integrated, engaging way.
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

      {/* 6. CURRICULUM SECTION - UPDATED SA STRUCTURE */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <p className="text-[#009CA6] font-bold tracking-widest text-[10px] uppercase mb-2">OUR CURRICULA</p>
          <h2 className="text-3xl font-medium text-[#333333] mb-4">South African pathways for every stage</h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto mb-16">
            From CAPS foundation phase to NQF Level 10 Doctoral degrees, EduNova provides the curriculum, AI support, and administrative structure for South African learners and students.
          </p>

          <div className="grid grid-cols-3 gap-6 text-left">
            {/* School Streams */}
            <div className="bg-[#009CA6] rounded-xl overflow-hidden shadow-lg flex flex-col">
              <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=600" alt="CAPS" className="h-48 w-full object-cover" />
              <div className="p-6 text-white flex-grow flex flex-col">
                <h3 className="text-xl font-medium mb-3">School (CAPS & IEB)</h3>
                <p className="text-xs text-teal-100 mb-6 flex-grow">
                  Foundation Phase (R-3), Intermediate (4-6), Senior (7-9), and FET (10-12). Includes CAPS, IEB, and NCV options. We support SA-SAMS reporting for public school compliance.
                </p>
                <Link href="#" className="inline-block bg-white text-[#009CA6] px-6 py-2 rounded-full font-bold text-xs w-max hover:bg-gray-100 transition-colors">Curriculum info →</Link>
              </div>
            </div>

            {/* TVET Streams */}
            <div className="bg-[#009CA6] rounded-xl overflow-hidden shadow-lg flex flex-col">
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600" alt="TVET" className="h-48 w-full object-cover" />
              <div className="p-6 text-white flex-grow flex flex-col">
                <h3 className="text-xl font-medium mb-3">TVET & NATED</h3>
                <p className="text-xs text-teal-100 mb-6 flex-grow">
                  NCV (National Certificate Vocational) and NATED/Report 191 programmes. Engineering, Business, and Utility Studies. NQF Levels 5-6 (Higher Certificate & Advanced Certificate).
                </p>
                <Link href="#" className="inline-block bg-white text-[#009CA6] px-6 py-2 rounded-full font-bold text-xs w-max hover:bg-gray-100 transition-colors">Curriculum info →</Link>
              </div>
            </div>

            {/* University Streams */}
            <div className="bg-[#009CA6] rounded-xl overflow-hidden shadow-lg flex flex-col">
              <img src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=600" alt="University" className="h-48 w-full object-cover" />
              <div className="p-6 text-white flex-grow flex flex-col">
                <h3 className="text-xl font-medium mb-3">University (NQF 7-10)</h3>
                <p className="text-xs text-teal-100 mb-6 flex-grow">
                  Bachelor's (NQF 7), Honours (NQF 8), Master's (NQF 9), and Doctoral (NQF 10). We support APS tracking and NBT preparation for university entrance.
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

      {/* 9. FOOTER */}
      <footer className="bg-[#009CA6] text-white pt-16 pb-8 px-8 border-t-8 border-[#D1007B]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 gap-12 mb-12">
          <div>
            <h1 className="text-2xl font-bold tracking-tight mb-4">The future is digital</h1>
            <p className="text-sm text-teal-100 leading-relaxed mb-6 max-w-md">EduNova Academy is the first international virtual school providing a state of the art e-learning environment. We provide CAPS, NCV, NATED, and University curricula in an integrated, engaging and effective way.</p>
            <div className="flex gap-3">
              <Link href="/trial" className="bg-[#E67E22] hover:bg-[#D35400] px-6 py-2 rounded-full text-sm font-bold transition-colors">Free Trial</Link>
              <Link href="/enrol" className="bg-[#D1007B] hover:bg-[#A3005F] px-6 py-2 rounded-full text-sm font-bold transition-colors">Enrol now</Link>
              <Link href="#" className="bg-white text-[#009CA6] hover:bg-gray-100 px-6 py-2 rounded-full text-sm font-bold transition-colors">Subscribe</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-white/10 p-4 rounded-xl border border-white/20 flex items-center gap-4"><div className="bg-white p-2 rounded-full text-[#D1007B]"><MessageCircle size={20}/></div><div><p className="text-[10px] font-bold uppercase tracking-wider text-teal-200">Email</p><p className="text-sm font-bold">hello@edunovaacademy.org</p></div></div>
             <div className="bg-white/10 p-4 rounded-xl border border-white/20 flex items-center gap-4"><div className="bg-white p-2 rounded-full text-[#E67E22]"><MessageCircle size={20}/></div><div><p className="text-[10px] font-bold uppercase tracking-wider text-teal-200">WhatsApp</p><p className="text-sm font-bold">+27 71 408 4677</p></div></div>
             <div className="bg-white/10 p-4 rounded-xl border border-white/20 flex items-center gap-4 col-span-2"><div className="bg-white p-2 rounded-full text-[#009CA6]"><MessageCircle size={20}/></div><div><p className="text-[10px] font-bold uppercase tracking-wider text-teal-200">Regional Office Numbers</p><p className="text-sm font-bold">South Africa: +27 12 998 1472</p></div></div>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto pt-8 border-t border-teal-500 flex flex-wrap justify-between items-center text-[10px] text-teal-100 gap-4">
          <p>© Copyright - EduNova Academy. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 uppercase font-bold tracking-wider">
            <Link href="#" className="hover:text-white">Terms and conditions</Link><Link href="#" className="hover:text-white">Privacy policy</Link><Link href="#" className="hover:text-white">Cookie policy</Link><Link href="#" className="hover:text-white">PAIA</Link><Link href="#" className="hover:text-white">Anti-spam policy</Link><Link href="#" className="hover:text-white">Search</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}