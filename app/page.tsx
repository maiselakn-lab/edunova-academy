"use client";
import Link from "next/link";
import PublicLayout from "@/components/layout/PublicLayout";
import { 
  GraduationCap, ArrowRight, Users, BookOpen, 
  MonitorPlay, ShieldCheck, TrendingUp, Sparkles, 
  CheckCircle2, Award, Globe
} from "lucide-react";

export default function Home() {
  return (
    <PublicLayout>
      {/* 1. PREMIUM HERO SECTION (Deep Navy) */}
      <section className="relative bg-[#0B132B] pt-24 pb-32 px-6 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
        
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-white/10 backdrop-blur-md">
              <Award size={14} /> Centralised Online Education Ecosystem
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Unlock Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Academic Potential</span>
            </h1>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-xl">
              Personalised learning, expert tutors, academic development, and research support in one place. From primary school to university, we have a pathway for you.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/get-started" className="bg-white text-[#0B132B] hover:bg-slate-100 px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all shadow-xl hover:-translate-y-0.5">
                Explore the Academy <ArrowRight size={20} />
              </Link>
              <Link href="#portals" className="bg-transparent text-white border border-white/20 hover:bg-white/5 px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all">
                Access Portals
              </Link>
            </div>
          </div>

          {/* Hero Image Card */}
          <div className="relative animate-fade-in-up delay-200">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-teal-500/20 rounded-3xl transform translate-x-4 translate-y-4 blur-lg"></div>
             <div className="relative bg-white/5 p-2 rounded-3xl border border-white/10 backdrop-blur-sm">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                  alt="Students learning together" 
                  className="rounded-2xl object-cover h-[450px] w-full shadow-2xl"
                />
                {/* Floating Stat */}
                <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-2xl flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-[#0B132B]">98%</p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Pass Rate</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. THE 4 PORTALS (Overlapping the Hero) */}
      <section id="portals" className="relative -mt-16 px-6 z-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Parent Portal", desc: "Progress, payments & bookings", icon: <Users size={20} />, color: "text-blue-600", bg: "bg-blue-50", link: "/login?role=parent" },
            { title: "Learner Portal", desc: "Lessons, AI & resources", icon: <GraduationCap size={20} />, color: "text-teal-600", bg: "bg-teal-50", link: "/login?role=learner" },
            { title: "Tutor Portal", desc: "Teaching, earnings & apps", icon: <MonitorPlay size={20} />, color: "text-purple-600", bg: "bg-purple-50", link: "/login?role=tutor" },
            { title: "Admin Portal", desc: "Management & finance", icon: <ShieldCheck size={20} />, color: "text-orange-600", bg: "bg-orange-50", link: "/login?role=admin" },
          ].map((portal, i) => (
            <Link key={i} href={portal.link} className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group border border-slate-100">
              <div className={`w-12 h-12 ${portal.bg} ${portal.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {portal.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0B132B] mb-1">{portal.title}</h3>
              <p className="text-sm text-slate-500 font-medium">{portal.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. EXPLORE THE ACADEMY */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B132B] mb-4">Explore the Academy</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">One integrated platform. Four distinct educational divisions tailored to your stage of learning.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Primary Academy", desc: "Foundational learning and literacy.", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800" },
              { title: "Secondary Academy", desc: "School subject support and exam prep.", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800" },
              { title: "College Academy", desc: "Technical and vocational learning.", img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=800" },
              { title: "University Academy", desc: "Higher education and research support.", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800" },
            ].map((div, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden cursor-pointer">
                <img src={div.img} alt={div.title} className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/90 via-[#0B132B]/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-bold text-white mb-2">{div.title}</h3>
                  <p className="text-slate-300 font-medium">{div.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ACADEMIC PROGRESS INTELLIGENCE */}
      <section className="py-24 px-6 bg-[#F8FAFC] border-t border-slate-100">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles size={14} /> Academic Intelligence
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B132B] mb-6 leading-tight">
              Track Progress. <br/> Bridge the Gap.
            </h2>
            <p className="text-slate-600 mb-8 text-lg">
              Parents get a dedicated progress comparison dashboard. See exactly how your child is performing in school versus their EduNova assessments, and identify areas for intervention instantly.
            </p>
            <ul className="space-y-4 mb-8">
              {["School vs Academy comparison", "AI-driven intervention alerts", "Real-time tutor feedback", "Downloadable term reports"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 size={20} className="text-blue-600 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl relative">
             <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-4">Learner Progress Example</h3>
             
             <div className="mb-8">
                <p className="text-5xl font-extrabold text-green-600 mb-2">72%</p>
                <p className="text-sm font-bold text-slate-600">Current EduNova Assessment</p>
             </div>

             <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm font-bold text-slate-700 mb-2">
                    <span>School Result</span>
                    <span>54%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-400 rounded-full" style={{ width: '54%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-bold text-slate-700 mb-2">
                    <span>EduNova Result</span>
                    <span>72%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '72%' }}></div>
                  </div>
                </div>
             </div>

             <div className="mt-8 bg-green-50 text-green-700 font-bold px-4 py-3 rounded-xl text-sm flex items-center gap-2">
               <TrendingUp size={18} /> 18 percentage-point improvement
             </div>
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto bg-[#0B132B] rounded-[2rem] p-12 text-center relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full"></div>
           <div className="relative z-10">
             <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to shape your future?</h2>
             <p className="text-slate-300 mb-8 text-lg max-w-2xl mx-auto">Join thousands of learners and expert tutors on the most advanced education ecosystem in Africa.</p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link href="/get-started" className="bg-white text-[#0B132B] hover:bg-slate-100 px-8 py-4 rounded-xl font-bold transition-all shadow-lg">
                 Apply Now
               </Link>
               <Link href="/login" className="bg-transparent text-white border border-white/20 hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition-all">
                 Portal Login
               </Link>
             </div>
           </div>
        </div>
      </section>
    </PublicLayout>
  );
}