"use client";
import Link from "next/link";
import PublicLayout from "@/components/layout/PublicLayout";
import { 
  LayoutDashboard, Monitor, Users, Brain, Building2, 
  ShieldCheck, Globe, BookOpen, PlayCircle, ArrowRight, Star, 
  Sparkles, Target, Calendar, Zap, ChevronDown, Mail, Phone, 
  MessageSquare, MapPin, Clock, Layers, Video, MonitorPlay, Lightbulb,
  FileText
} from "lucide-react";
import { CORE_MODULES } from "@/lib/coreModules";

export default function Home() {
  return (
    <PublicLayout>
      {/* 1. HERO SECTION */}
      <section className="py-20 lg:py-28 px-6 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-3 py-1.5 rounded-full text-xs font-medium mb-6 border border-orange-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> The Intelligent Operating System for Modern Schools
            </div>
            <h1 className="text-5xl lg:text-[4.5rem] font-bold text-white leading-[1.05] mb-6 tracking-tight">
              The Intelligent OS <br /> for <span className="text-orange-500">Modern Schools</span>
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
              AcadCoreOS unifies 19 Core modules — academics, assessment, admissions, people, attendance, finance, HR, scheduling, CBT, communication, reports, verification, and the AcadAI intelligence layer — in a single, scalable, multi-tenant workspace.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link href="/get-started" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
                <PlayCircle size={18} /> Explore AcadCoreOS
              </Link>
              <Link href="/get-started" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
                Get Started Free <ArrowRight size={18} />
              </Link>
            </div>
            <p className="text-sm text-slate-500 mb-6">
              See how AcadCoreOS works for school administrators, teachers, parents, and students — no registration required.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 bg-[#0F1926] border border-white/10 text-slate-300 px-4 py-2 rounded-lg text-sm hover:border-orange-500/50 transition-colors">
                <MonitorPlay size={16} className="text-orange-500" /> Explore as Administrator
              </button>
              <button className="flex items-center gap-2 bg-[#0F1926] border border-white/10 text-slate-300 px-4 py-2 rounded-lg text-sm hover:border-orange-500/50 transition-colors">
                <MonitorPlay size={16} className="text-emerald-500" /> Explore as Teacher
              </button>
              <button className="flex items-center gap-2 bg-[#0F1926] border border-white/10 text-slate-300 px-4 py-2 rounded-lg text-sm hover:border-orange-500/50 transition-colors">
                <MonitorPlay size={16} className="text-yellow-500" /> Explore as Parent
              </button>
            </div>
          </div>

          {/* Mockup */}
          <div className="relative">
            <div className="bg-[#0F1926] border border-white/10 rounded-2xl p-4 shadow-2xl relative z-10">
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-slate-500 font-mono">acadcoreos.com/dashboard</div>
              </div>
              <div className="space-y-4">
                <div className="bg-[#162233] rounded-xl p-4 flex items-center gap-4 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/20 text-orange-500 flex items-center justify-center">
                    <LayoutDashboard size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">All-in-One Workspace</h4>
                    <p className="text-xs text-slate-400">Academics, Finance, HR & more</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#162233] rounded-xl p-4 border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-500 flex items-center justify-center mb-3">
                      <Monitor size={16} />
                    </div>
                    <h4 className="text-white font-medium text-sm">CBT Platform</h4>
                    <p className="text-xs text-slate-400">Computer-based tests</p>
                  </div>
                  <div className="bg-[#162233] rounded-xl p-4 border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-500 flex items-center justify-center mb-3">
                      <Users size={16} />
                    </div>
                    <h4 className="text-white font-medium text-sm">Parent Portal</h4>
                    <p className="text-xs text-slate-400">Real-time access</p>
                  </div>
                  <div className="bg-[#162233] rounded-xl p-4 border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-500 flex items-center justify-center mb-3">
                      <Brain size={16} />
                    </div>
                    <h4 className="text-white font-medium text-sm">AI Assistant</h4>
                    <p className="text-xs text-slate-400">Smart insights</p>
                  </div>
                  <div className="bg-[#162233] rounded-xl p-4 border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-500 flex items-center justify-center mb-3">
                      <Building2 size={16} />
                    </div>
                    <h4 className="text-white font-medium text-sm">Multi-Campus</h4>
                    <p className="text-xs text-slate-400">Scale effortlessly</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-500/10 blur-[100px] -z-10 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 2. BUILT FOR AFRICAN SCHOOLS */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#0A1420]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Built for African Schools</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              AcadCoreOS empowers educational institutions with secure, scalable, cloud-based technology designed to simplify administration, strengthen collaboration, and improve learning outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0F1926] border border-white/5 p-8 rounded-xl">
              <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500 mb-6"><Layers size={20} /></div>
              <h3 className="text-xl font-bold text-white mb-3">All-in-One School Platform</h3>
              <p className="text-slate-400 leading-relaxed">Manage academics, administration, communication, finance, admissions, attendance, examinations, reports, and more from a unified workspace.</p>
            </div>
            <div className="bg-[#0F1926] border border-white/5 p-8 rounded-xl">
              <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500 mb-6"><Building2 size={20} /></div>
              <h3 className="text-xl font-bold text-white mb-3">Designed for Schools of Every Size</h3>
              <p className="text-slate-400 leading-relaxed">Whether managing a small private school or a multi-campus institution, AcadCoreOS scales alongside your organisation.</p>
            </div>
            <div className="bg-[#0F1926] border border-white/5 p-8 rounded-xl">
              <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500 mb-6"><ShieldCheck size={20} /></div>
              <h3 className="text-xl font-bold text-white mb-3">Secure by Design</h3>
              <p className="text-slate-400 leading-relaxed">Protect student, parent, teacher, and institutional data through modern security practices, role-based permissions, encrypted storage, audit logs, and regular backups.</p>
            </div>
            <div className="bg-[#0F1926] border border-white/5 p-8 rounded-xl">
              <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500 mb-6"><Zap size={20} /></div>
              <h3 className="text-xl font-bold text-white mb-3">Future-Ready Platform</h3>
              <p className="text-slate-400 leading-relaxed">Continuous innovation, AI-powered productivity tools, automation, integrations, analytics, and cloud infrastructure prepare schools for the future of education.</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="#features" className="text-orange-500 font-medium hover:underline flex items-center justify-center gap-2">
              View Full Summary <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. 19 CORE MODULES */}
      <section id="features" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs font-medium mb-4">
              <Layers size={14} /> 19 Core Modules
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">One platform, every Core module</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              AcadCoreOS is organized around 19 Core modules — from AcademicCore and AssessmentCore to ConnectCore, VerifyCore, and the AcadAI intelligence layer. Live modules work today; roadmap modules are plan-ready.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_MODULES.slice(0, 9).map((mod) => (
              <div key={mod.key} className="bg-[#0F1926] border border-white/5 p-6 rounded-xl hover:border-white/10 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center">
                    <mod.icon size={20} />
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full border ${
                    mod.status === 'live' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                    mod.status === 'beta' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 
                    'bg-slate-500/10 text-slate-400 border-slate-500/20'
                  }`}>
                    {mod.status === 'live' ? 'Live' : mod.status === 'beta' ? 'Beta' : 'Roadmap'}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">{mod.name}</h3>
                <h4 className="text-lg font-bold text-white mb-2">{mod.title}</h4>
                <p className="text-sm text-slate-400 mb-4">{mod.tagline}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {mod.capabilities.slice(0, 3).map((cap, i) => (
                    <span key={i} className="text-[10px] bg-white/5 text-slate-400 px-2 py-1 rounded border border-white/5">{cap}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="#features" className="text-orange-500 font-medium hover:underline flex items-center justify-center gap-2">
              Explore all 19 Core modules <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. PLATFORM SHOWCASE */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#0A1420]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs font-medium mb-4">
              <Sparkles size={14} /> Platform Showcase
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Explore What AcadCoreOS Can Do</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Discover how AcadCoreOS simplifies every aspect of school management through powerful, integrated modules designed for modern educational institutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Manage Admissions", desc: "Streamline your entire admissions process — from online application forms to...", image: true },
              { title: "Track Attendance", desc: "Record daily attendance in seconds with real-time sync across classes, campuses,...", image: false },
              { title: "Generate Results", desc: "Compute CA scores, exam scores, and generate professional report cards...", image: false },
              { title: "Parent Portal", desc: "Give parents real-time access to their children's attendance, results,...", image: false, realImage: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=400" },
            ].map((item, i) => (
              <div key={i} className="bg-[#0F1926] border border-white/5 rounded-xl overflow-hidden group flex flex-col">
                {item.realImage ? (
                  <div className="h-40 overflow-hidden"><img src={item.realImage} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                ) : (
                  <div className="h-40 bg-[#162233] flex items-center justify-center border-b border-white/5">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500"><ArrowRight size={24} /></div>
                  </div>
                )}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-400 mb-4 line-clamp-2 flex-1">{item.desc}</p>
                  <div className="flex justify-between items-center text-xs mt-auto">
                    <span className="text-slate-500">4 benefits</span>
                    <button className="text-orange-500 flex items-center gap-1 hover:underline">Explore <ArrowRight size={12} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DEMO CENTRE */}
      <section id="demo" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs font-medium mb-4">
              <MonitorPlay size={14} /> Demo Centre
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Experience the Platform Firsthand</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">Explore AcadCoreOS through videos, screenshots, interactive demos, and personalised demonstrations.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-[#0F1926] border border-white/5 p-5 rounded-xl">
              <Video size={20} className="text-blue-500 mb-3" />
              <h4 className="text-sm font-bold text-white mb-1">Watch Demo Videos</h4>
              <p className="text-xs text-slate-400">Watch guided videos showcasing platform features.</p>
            </div>
            <div className="bg-[#0F1926] border border-white/5 p-5 rounded-xl">
              <Monitor size={20} className="text-emerald-500 mb-3" />
              <h4 className="text-sm font-bold text-white mb-1">Explore Screenshots</h4>
              <p className="text-xs text-slate-400">Browse screenshots of key modules and dashboards.</p>
            </div>
            <div className="bg-[#0F1926] border border-white/5 p-5 rounded-xl">
              <Lightbulb size={20} className="text-yellow-500 mb-3" />
              <h4 className="text-sm font-bold text-white mb-1">Read Feature Highlights</h4>
              <p className="text-xs text-slate-400">Quick summaries of every major platform module.</p>
            </div>
            <div className="bg-[#0F1926] border border-white/5 p-5 rounded-xl">
              <Calendar size={20} className="text-purple-500 mb-3" />
              <h4 className="text-sm font-bold text-white mb-1">Request Live Demonstration</h4>
              <p className="text-xs text-slate-400">Book a personalised walkthrough with our team.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="relative bg-[#0F1926] border border-white/5 rounded-xl overflow-hidden group cursor-pointer">
                {i === 0 && <div className="absolute top-3 right-3 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded z-10">Featured</div>}
                <div className="h-32 flex items-center justify-center bg-[#162233]">
                  <div className="w-12 h-12 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                    <PlayCircle size={20} />
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-bold text-white mb-1">{i === 0 ? "AcadCoreOS Platform Overview" : i === 1 ? "Admissions Management Demo" : "Finance & Fee Management"}</h4>
                  <p className="text-xs text-slate-500">{i === 0 ? "5:32" : i === 1 ? "3:45" : "4:12"}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#0F1926] border border-white/5 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-2">Start Interactive Demo</h3>
            <p className="text-sm text-slate-400 mb-6">Choose a role and explore a fully populated demo school with realistic sample data. No registration required.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="flex items-center gap-3 bg-[#162233] border border-white/5 p-4 rounded-lg hover:border-orange-500/50 transition-colors text-left">
                <MonitorPlay size={20} className="text-blue-500" />
                <div><p className="text-sm font-medium text-white">Administrator Demo</p><p className="text-xs text-slate-500">Full admin access</p></div>
              </button>
              <button className="flex items-center gap-3 bg-[#162233] border border-white/5 p-4 rounded-lg hover:border-orange-500/50 transition-colors text-left">
                <MonitorPlay size={20} className="text-emerald-500" />
                <div><p className="text-sm font-medium text-white">Teacher Demo</p><p className="text-xs text-slate-500">Classroom tools</p></div>
              </button>
              <button className="flex items-center gap-3 bg-[#162233] border border-white/5 p-4 rounded-lg hover:border-orange-500/50 transition-colors text-left">
                <MonitorPlay size={20} className="text-yellow-500" />
                <div><p className="text-sm font-medium text-white">Parent Demo</p><p className="text-xs text-slate-500">Parent portal view</p></div>
              </button>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="#demo" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 transition-colors">
              Explore Full Demo Centre <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#0A1420]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs font-medium mb-4">
              <MessageSquare size={14} /> Testimonials
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">What Schools Say About Us</h2>
            <p className="text-slate-400 text-lg">Verified testimonials from educators using AcadCoreOS across Africa.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0F1926] border border-white/5 p-8 rounded-xl">
              <div className="flex text-orange-500 mb-4">{[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}</div>
              <p className="text-slate-300 italic mb-6">"AcadCoreOS has transformed how we manage our school. From admissions to results, everything is in one place. The parent portal has improved our communication significantly."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center font-bold">M</div>
                <div><p className="text-sm font-bold text-white">Mrs. Adunni Okoye</p><p className="text-xs text-slate-500">Principal, Bright Future Academy</p></div>
                <span className="ml-auto text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">Verified</span>
              </div>
            </div>
            <div className="bg-[#0F1926] border border-white/5 p-8 rounded-xl">
              <div className="flex text-orange-500 mb-4">{[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}</div>
              <p className="text-slate-300 italic mb-6">"The attendance tracking and automated parent notifications have saved us hours of work. We can now focus on what matters most — teaching and learning."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center font-bold">M</div>
                <div><p className="text-sm font-bold text-white">Mr. Tunde Bello</p><p className="text-xs text-slate-500">School Administrator, Grace Land College</p></div>
                <span className="ml-auto text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">Verified</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="#testimonials" className="text-orange-500 font-medium hover:underline flex items-center justify-center gap-2">View All Testimonials <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* 7. PRICING */}
      <section id="pricing" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Simple, Transparent Pricing</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">AcadCoreOS uses capacity-based pricing, allowing schools to pay primarily according to their expected student population while choosing optional premium services that suit their operational needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Starter", capacity: "1–100 Students", price: "₦15,000", per: "/mo", yearly: "or ₦150,000/yr", popular: false },
              { name: "Growth", capacity: "101–300 Students", price: "₦35,000", per: "/mo", yearly: "or ₦350,000/yr", popular: true },
              { name: "Professional", capacity: "301–600 Students", price: "₦120,000", per: "/mo", yearly: "or ₦1,200,000/yr", popular: false },
              { name: "Enterprise", capacity: "601–1000 Students", price: "₦350,000", per: "/mo", yearly: "or ₦3,500,000/yr", popular: false },
              { name: "Enterprise Plus", capacity: "Custom Capacity", price: "Custom", per: "", yearly: "Contact Sales", popular: false },
            ].map((plan, i) => (
              <div key={i} className={`relative bg-[#0F1926] p-6 rounded-xl border flex flex-col ${plan.popular ? 'border-orange-500' : 'border-white/5'}`}>
                {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full">Most Popular</div>}
                <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-xs text-slate-400 mb-6">{plan.capacity}</p>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-white">{plan.price}</span><span className="text-sm text-slate-400">{plan.per}</span>
                  <p className="text-[10px] text-slate-500 mt-1">{plan.yearly}</p>
                </div>
                <button className={`w-full py-2 rounded-lg text-sm font-medium transition-colors mt-auto ${plan.popular ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-white/5 text-white hover:bg-white/10'}`}>Get Started</button>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="#pricing" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-2 rounded-lg font-medium inline-flex items-center gap-2 transition-colors">View Full Pricing <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* 8. EDUCATION NEWS */}
      <section id="news" className="py-24 px-6 border-t border-white/5 bg-[#0A1420]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs font-medium mb-4"><BookOpen size={14} /> Stay Informed</div>
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Education News & Updates</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">Latest headlines, trending education news, policy updates, and platform releases from trusted sources.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-[#0F1926] border border-white/5 rounded-xl overflow-hidden flex flex-col">
              <div className="h-64 bg-slate-800 relative"><div className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded">Product Update</div></div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-orange-500 mb-3"><span className="font-medium">AcadCoreOS Product Updates</span> <span className="text-slate-500">7/7/2026</span></div>
                <h3 className="text-2xl font-bold text-white mb-2">AcadCoreOS Launches AI-Powered CBT Module</h3>
                <p className="text-slate-400 text-sm mb-4">AcadCoreOS has released a new AI-powered Computer-Based Testing module with adaptive question generation, real-time analytics, and anti-cheating safeguards for schools.</p>
                <button className="text-orange-500 flex items-center gap-1 hover:underline text-sm font-medium">Read More <ArrowRight size={14} /></button>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-[#0F1926] border border-white/5 rounded-xl p-6">
                <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2"><BookOpen size={16} className="text-orange-500" /> Latest Headlines</h4>
                <ul className="space-y-4">
                  {["New STEM Competition for Senior Secondary Students Launches", "Lagos State Government Announces Free WAEC Registration for Public School Students", "AcadCoreOS Introduces Parent Portal Mobile App", "Federal Ministry of Education Launches Digital Literacy Initiative"].map((title, i) => (
                    <li key={i} className="group cursor-pointer"><p className="text-sm font-medium text-slate-300 group-hover:text-orange-400 transition-colors leading-tight mb-1">{title}</p><p className="text-[10px] text-slate-500">7/3/2026</p></li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#0F1926] border border-white/5 rounded-xl p-6">
                <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2"><Zap size={16} className="text-orange-500" /> Trending</h4>
                <ul className="space-y-3">
                  {["AcadCoreOS Launches AI-Powered CBT Module", "WAEC Releases 2026 May/June WASSCE Timetable", "JAMB Announces New UTME Registration Guidelines for 2026", "Full Scholarship Available: Chevening Scholarship 2026/27 Now Open"].map((title, i) => (
                    <li key={i} className="flex gap-3 group cursor-pointer"><span className="text-orange-500 font-bold text-xs">{i+1}</span><p className="text-xs text-slate-400 group-hover:text-white transition-colors leading-tight">{title}</p></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-[#0F1926] border border-white/5 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500"><Zap size={20} /></div>
              <div><h4 className="text-sm font-bold text-white">Latest AcadCoreOS Releases</h4><p className="text-xs text-slate-400">AcadCoreOS Launches AI-Powered CBT Module</p></div>
            </div>
            <button className="text-orange-500 text-sm font-medium hover:underline flex items-center gap-1">View All News <ArrowRight size={14} /></button>
          </div>
        </div>
      </section>

      {/* 9. RESOURCES / BLOG */}
      <section id="resources" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs font-medium mb-4"><FileText size={14} /> Resources</div>
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Latest Blog Articles & Resources</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">Featured guides, popular resources, recent documentation, and latest product updates.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { type: "Article", title: "New STEM Competition for Senior Secondary Students Launches", desc: "A new national STEM competition focused on robotics and artificial intelligence has been...", date: "7/3/2026" },
              { type: "WAEC", title: "Lagos State Government Announces Free WAEC Registration for Public School...", desc: "The Lagos State Government has announced that it will cover the WAEC registration fees for all public...", date: "7/3/2026" },
              { type: "Product Update", title: "AcadCoreOS Launches AI-Powered CBT Module", desc: "AcadCoreOS has released a new AI-powered Computer-Based Testing module with adaptive...", date: "7/1/2026" },
              { type: "Product Update", title: "AcadCoreOS Introduces Parent Portal Mobile App", desc: "AcadCoreOS has launched a dedicated Parent Portal mobile app for iOS and Android, allowing...", date: "6/28/2026", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400" },
              { type: "WAEC", title: "WAEC Releases 2026 May/June WASSCE Timetable", desc: "The West African Examinations Council has officially released the timetable for the 2026...", date: "6/28/2026" },
              { type: "JAMB", title: "JAMB Announces New UTME Registration Guidelines for 2026", desc: "The Joint Admissions and Matriculation Board has introduced updated registration guidelines for the...", date: "6/25/2026" },
            ].map((article, i) => (
              <div key={i} className="bg-[#0F1926] border border-white/5 rounded-xl overflow-hidden group hover:border-white/10 transition-colors flex flex-col">
                {article.image ? <div className="h-40 overflow-hidden"><img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div> : <div className="h-40 bg-[#162233] border-b border-white/5 flex items-center justify-center"><BookOpen size={32} className="text-slate-600" /></div>}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs mb-3"><span className="text-orange-500 font-medium">{article.type}</span><span className="text-slate-500">• {article.date}</span></div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-orange-400 transition-colors">{article.title}</h3>
                  <p className="text-sm text-slate-400 mb-4 flex-1 line-clamp-2">{article.desc}</p>
                  <button className="text-orange-500 flex items-center gap-1 hover:underline text-sm font-medium mt-auto">Read More <ArrowRight size={14} /></button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-10">
            <button className="bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2"><BookOpen size={14} /> Featured Guides</button>
            <button className="bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2"><FileText size={14} /> Documentation</button>
            <button className="bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2"><Zap size={14} /> Product Updates</button>
          </div>
        </div>
      </section>

      {/* 10. COMMUNITY */}
      <section id="community" className="py-24 px-6 border-t border-white/5 bg-[#0A1420]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs font-medium mb-4"><MessageSquare size={14} /> Join the Community</div>
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Connect with Educators Worldwide</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">Join the AcadCoreOS Community — a collaborative space for teachers, school leaders, and edtech enthusiasts to share knowledge, ask questions, and grow together.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-[#0F1926] border border-white/5 p-8 rounded-xl text-center">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center mx-auto mb-4"><Users size={24} /></div>
              <h3 className="text-lg font-bold text-white mb-2">Network</h3>
              <p className="text-sm text-slate-400">Build professional connections with educators and leaders.</p>
            </div>
            <div className="bg-[#0F1926] border border-white/5 p-8 rounded-xl text-center">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center mx-auto mb-4"><MessageSquare size={24} /></div>
              <h3 className="text-lg font-bold text-white mb-2">Ask & Answer</h3>
              <p className="text-sm text-slate-400">Get expert answers and share your knowledge with the community.</p>
            </div>
            <div className="bg-[#0F1926] border border-white/5 p-8 rounded-xl text-center">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center mx-auto mb-4"><FileText size={24} /></div>
              <h3 className="text-lg font-bold text-white mb-2">Publish</h3>
              <p className="text-sm text-slate-400">Submit articles to the AcadCoreOS Blog and build your reputation.</p>
            </div>
          </div>
          <div className="text-center">
            <Link href="#community" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 transition-colors">Join the Community <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section id="faq" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-slate-400 text-lg">Everything you need to know about AcadCoreOS.</p>
          </div>
          <div className="space-y-3">
            {["How does pricing work?", "Can I manage multiple campuses?", "Is my school data secure?", "Can parents and students access the platform?", "Do you support Nigerian school systems?", "Can I cancel anytime?", "Do you offer training and onboarding?", "What are add-ons?", "What happens to my data if I cancel?"].map((faq, i) => (
              <div key={i} className="bg-[#0F1926] border border-white/5 rounded-xl overflow-hidden group cursor-pointer">
                <div className="px-6 py-4 flex justify-between items-center">
                  <h4 className="text-sm font-medium text-white group-hover:text-orange-400 transition-colors">{faq}</h4>
                  <ChevronDown size={18} className="text-slate-500 group-hover:text-orange-400 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. PARTNERS */}
      <section id="partners" className="py-24 px-6 border-t border-white/5 bg-[#0A1420]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Partners & Affiliations</h2>
            <p className="text-slate-400 text-lg mb-10">Working with education bodies and organizations across the region.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Nigeria Education Board", "Lagos State Ministry of Education", "EdTech Nigeria", "School Administrators Forum", "West African Examinations Council", "Association of Private Schools", "Tech for Education Africa", "Nigerian Teachers Association"].map((partner, i) => (
                <div key={i} className="bg-[#0F1926] border border-white/5 rounded-lg py-4 px-2 flex items-center justify-center text-center">
                  <span className="text-sm font-medium text-slate-400">{partner}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mb-12 mt-20">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs font-medium mb-4"><Target size={14} /> Roadmap Concept</div>
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">The AcadCoreOS Partner Network</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">A future-facing ecosystem of partners extending AcadCoreOS across regions, industries, and technologies. We're building the framework — expressions of interest are welcome.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Building2 />, title: "Referral Partners", desc: "Earn recurring commissions by referring schools to AcadCoreOS. For consultants, education advisors, and influencers." },
              { icon: <Users />, title: "Implementation Partners", desc: "Help schools onboard, migrate data, and configure AcadCoreOS. For IT firms and education consultants." },
              { icon: <BookOpen />, title: "Training Partners", desc: "Deliver certified training programs to school staff on the AcadCoreOS platform. For training institutes and educators." },
              { icon: <Target />, title: "Technology Partners", desc: "Build integrations and extensions on the AcadCoreOS platform. For edtech vendors and software developers." },
              { icon: <Globe />, title: "Regional Partners", desc: "Represent AcadCoreOS in specific regions and countries. For local education businesses and distributors." },
              { icon: <Monitor size={20} />, title: "ICT & Hardware Partners", desc: "Bundle AcadCoreOS with devices, servers, and connectivity for schools. For hardware vendors and ISPs." },
            ].map((partner, i) => (
              <div key={i} className="bg-[#0F1926] border border-white/5 p-6 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center mb-4">{partner.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{partner.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{partner.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 bg-orange-500/5 border border-orange-500/20 rounded-full py-2 px-6 inline-flex mx-auto items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            <span className="text-sm text-orange-400">Partner registration opens soon — this is a roadmap concept, not a live program.</span>
          </div>
        </div>
      </section>

      {/* 13. CONTACT */}
      <section id="contact" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Get in touch</h2>
            <p className="text-slate-400 mb-8">Have questions? Want a demo? We're here to help.</p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0"><Mail size={20} /></div>
                <div><p className="text-sm font-bold text-white mb-1">Email</p><p className="text-sm text-slate-400">acadcoreos@gmail.com</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0"><Phone size={20} /></div>
                <div><p className="text-sm font-bold text-white mb-1">Phone</p><p className="text-sm text-slate-400">+234 811 781 3456</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0"><MessageSquare size={20} /></div>
                <div><p className="text-sm font-bold text-white mb-1">WhatsApp</p><p className="text-sm text-slate-400">+234 816 995 9980</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0"><MapPin size={20} /></div>
                <div><p className="text-sm font-bold text-white mb-1">Office Address</p><p className="text-sm text-slate-400">1, Col. Akporokah's Close, Mosogar, Delta State, Nigeria</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0"><Clock size={20} /></div>
                <div><p className="text-sm font-bold text-white mb-1">Support Hours</p><p className="text-sm text-slate-400">Mondays - Fridays (8am - 5pm)</p></div>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-sm font-bold text-white mb-3">Follow Us</p>
              <div className="flex gap-2">
                {[1,2,3,4,5].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-orange-500 hover:border-orange-500/50 cursor-pointer transition-colors"><Globe size={14} /></div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-[#0F1926] border border-white/5 p-8 rounded-xl">
            <form className="space-y-4">
              <div><label className="block text-sm font-medium text-white mb-1">Name</label><input type="text" placeholder="Your name" className="w-full bg-[#0A1420] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500" /></div>
              <div><label className="block text-sm font-medium text-white mb-1">Email</label><input type="email" placeholder="you@example.com" className="w-full bg-[#0A1420] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500" /></div>
              <div><label className="block text-sm font-medium text-white mb-1">Message</label><textarea rows={4} placeholder="How can we help?" className="w-full bg-[#0A1420] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"></textarea></div>
              <button type="button" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors"><MessageSquare size={16} /> Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* 14. CTA BANNER */}
      <section className="bg-orange-500 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Ready to transform your school?</h2>
        <p className="text-orange-100 mb-8 text-lg">Start your 14-day free trial today. No credit card required.</p>
        <div className="flex justify-center gap-4">
          <Link href="/get-started" className="bg-[#08101A] text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-black transition-colors">Get Started Free <ArrowRight size={18} /></Link>
          <Link href="#pricing" className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">View Pricing</Link>
        </div>
      </section>
    </PublicLayout>
  );
}