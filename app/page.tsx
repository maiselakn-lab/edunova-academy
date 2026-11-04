"use client";
import Link from "next/link";
import PublicLayout from "@/components/layout/PublicLayout";
import { 
  GraduationCap, ArrowRight, Users, BookOpen, 
  Laptop, LayoutDashboard, CheckCircle2, Star,
  MonitorPlay, ShieldCheck, Microscope, Library
} from "lucide-react";

export default function Home() {
  return (
    <PublicLayout>
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#F8FAFC] pt-20 pb-28 px-6 overflow-hidden border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs font-bold mb-6">
              <Star size={14} className="fill-blue-700" /> Learn • Teach • Research • Empower
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Unlock Your <br />
              <span className="text-blue-600">Academic Potential</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              Personalised learning, expert tutors, academic development, and research support in one place. From primary school to university, we have a pathway for you.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link href="/get-started" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20">
                Explore the Academy <ArrowRight size={18} />
              </Link>
              <Link href="#explore" className="bg-white text-slate-900 border border-slate-200 px-8 py-3.5 rounded-lg font-bold flex items-center gap-2 hover:bg-slate-50 transition-all">
                View Pathways
              </Link>
            </div>
          </div>

          <div className="relative animate-fade-in-up delay-200">
            <div className="absolute inset-0 bg-blue-600 rounded-3xl transform translate-x-4 translate-y-4 opacity-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
              alt="Students learning together" 
              className="relative rounded-3xl shadow-2xl object-cover h-[480px] w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 border border-slate-100">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">World-Class Standards</p>
                <p className="text-xs text-slate-500">Trusted by parents globally</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXPLORE THE ACADEMY */}
      <section id="explore" className="py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Explore the Academy</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">One integrated platform. Four distinct educational divisions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Primary */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-4">
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800" alt="Primary Academy" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Primary Academy</h3>
              <p className="text-slate-500 font-medium">Foundational learning</p>
            </div>
            
            {/* Secondary */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-4">
                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800" alt="Secondary Academy" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Secondary Academy</h3>
              <p className="text-slate-500 font-medium">School subject support</p>
            </div>

            {/* College */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-4">
                <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=800" alt="College Academy" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">College Academy</h3>
              <p className="text-slate-500 font-medium">Technical and vocational learning</p>
            </div>

            {/* University */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-4">
                <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800" alt="University Academy" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">University Academy</h3>
              <p className="text-slate-500 font-medium">Higher education support</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TUTORS & RESEARCH */}
      <section className="py-24 px-6 bg-[#F8FAFC] border-t border-slate-100">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Become a Tutor */}
          <div className="flex gap-6 items-start bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt="Tutor" className="w-24 h-24 rounded-xl object-cover" />
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Become a Tutor</h3>
              <p className="text-sm text-slate-600 mb-4">Share your knowledge, demonstrate your competence, and build your teaching career.</p>
              <Link href="/apply-tutor" className="text-blue-600 font-bold text-sm flex items-center gap-2 hover:underline">Apply Now <ArrowRight size={16} /></Link>
            </div>
          </div>

          {/* Research Support */}
          <div className="flex gap-6 items-start bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=200" alt="Research" className="w-24 h-24 rounded-xl object-cover" />
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Research Support Centre</h3>
              <p className="text-sm text-slate-600 mb-4">Academic research guidance, methodology support, and specialist tutoring.</p>
              <Link href="/research" className="text-blue-600 font-bold text-sm flex items-center gap-2 hover:underline">Learn More <ArrowRight size={16} /></Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. PORTAL ACCESS */}
      <section className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Portal Access</h2>
            <p className="text-slate-500 mt-2">Sign in to your dedicated Think EduNova portal.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/login?role=parent" className="flex items-center justify-center gap-3 bg-[#F8FAFC] border border-slate-200 p-6 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all group">
              <Users size={20} className="text-slate-400 group-hover:text-blue-600" />
              <span className="font-bold text-slate-700 group-hover:text-blue-700">Parent Portal</span>
            </Link>
            <Link href="/login?role=learner" className="flex items-center justify-center gap-3 bg-[#F8FAFC] border border-slate-200 p-6 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all group">
              <GraduationCap size={20} className="text-slate-400 group-hover:text-blue-600" />
              <span className="font-bold text-slate-700 group-hover:text-blue-700">Learner Portal</span>
            </Link>
            <Link href="/login?role=tutor" className="flex items-center justify-center gap-3 bg-[#F8FAFC] border border-slate-200 p-6 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all group">
              <MonitorPlay size={20} className="text-slate-400 group-hover:text-blue-600" />
              <span className="font-bold text-slate-700 group-hover:text-blue-700">Tutor Portal</span>
            </Link>
            <Link href="/login?role=admin" className="flex items-center justify-center gap-3 bg-[#F8FAFC] border border-slate-200 p-6 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all group">
              <ShieldCheck size={20} className="text-slate-400 group-hover:text-blue-600" />
              <span className="font-bold text-slate-700 group-hover:text-blue-700">Admin Portal</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <section className="bg-slate-900 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Ready to unlock your potential?</h2>
          <p className="text-slate-400 mb-10 text-lg">Join Think EduNova Academy and get access to world-class tutors, AI learning, and research support.</p>
          <Link href="/get-started" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold inline-flex items-center justify-center gap-2 transition-colors shadow-xl">
            Start Your Journey <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
}