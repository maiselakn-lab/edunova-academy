"use client";

import Link from "next/link";
import { 
  CheckCircle2, LayoutDashboard, Monitor, Users, Brain, Building2,
  ShieldCheck, Globe, ArrowRight, Star, PlayCircle, BookOpen, FileText
} from "lucide-react";

export default function AcadCoreOSHomePage() {
  const coreModules = [
    { title: "AcademicCore", subtitle: "Academic Management", desc: "Sessions, terms, classes, subjects & curriculum", features: ["Sessions & terms", "Class levels & sections", "Subject catalog"], status: "Live" },
    { title: "AssessmentCore", subtitle: "Assessment & Grading", desc: "CA/exam entry, grades, cognitive·affective·psychomotor domains", features: ["CA & exam score entry", "Automatic grade calculation", "Cognitive / affective / psychomotor domains"], status: "Live" },
    { title: "AdmissionsCore", subtitle: "Admissions & Enrollment", desc: "Online applications → acceptance → enrollment", features: ["Public application portal", "Capacity-based intake", "Application tracking & review"], status: "Live" },
    { title: "PeopleCore", subtitle: "People Management", desc: "Students, staff & multi-child parent accounts", features: ["Student lifecycle", "Staff records & assignments", "Multi-child parent accounts"], status: "Live" },
    { title: "AttendanceCore", subtitle: "Attendance Tracking", desc: "Real-time attendance with parent alerts", features: ["One-click class attendance", "Per-student history", "Attendance analytics"], status: "Live" },
    { title: "FinanceCore", subtitle: "Finance & Fees", desc: "Fees, payments, debtor reconciliation & expenses", features: ["Fee structures", "Configurable payment workflows", "Debtor reconciliation"], status: "Live" },
    { title: "HRCore", subtitle: "HR & Employment", desc: "Vacancies, applications, talent pool & payroll", features: ["Vacancy management", "Application tracking", "Talent pool"], status: "Beta" },
    { title: "ScheduleCore", subtitle: "Scheduling & Timetable", desc: "Events, calendar & AI timetable generation", features: ["Event management", "Academic calendar", "Term scheduling"], status: "Live" },
    { title: "ExamCore / CBT", subtitle: "Examinations & CBT", desc: "Computer-based testing with question banks", features: ["Question banks", "Timed exams", "Auto-grading"], status: "Beta" },
  ];

  const pricingPlans = [
    { name: "Starter", capacity: "1–100 Students", price: "₦15,000", per: "/mo", yearly: "or ₦150,000/yr", popular: false },
    { name: "Growth", capacity: "101–300 Students", price: "₦35,000", per: "/mo", yearly: "or ₦350,000/yr", popular: true },
    { name: "Professional", capacity: "301–600 Students", price: "₦120,000", per: "/mo", yearly: "or ₦1,200,000/yr", popular: false },
    { name: "Enterprise", capacity: "601–1000 Students", price: "₦350,000", per: "/mo", yearly: "or ₦3,500,000/yr", popular: false },
    { name: "Enterprise Plus", capacity: "Custom Capacity", price: "Custom", per: "", yearly: "Contact Sales", popular: false },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* NAVIGATION */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0B132B] rounded-lg flex items-center justify-center text-white">
              <span className="font-bold text-sm">A</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-[#0B132B]">AcadCoreOS</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link href="#modules" className="hover:text-gray-900 transition-colors">Modules</Link>
            <Link href="#showcase" className="hover:text-gray-900 transition-colors">Showcase</Link>
            <Link href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</Link>
            <Link href="#partners" className="hover:text-gray-900 transition-colors">Partners</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Login
            </Link>
            <Link href="/trial" className="bg-[#0B132B] hover:bg-[#1e293b] text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors">
              Start Free Trial
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="py-24 px-6 border-b border-gray-100 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-[1000px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-medium mb-6 border border-blue-100">
            <CheckCircle2 size={14} /> The Intelligent OS for Modern Schools
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#0B132B] leading-tight mb-6">
            The Intelligent OS for Modern Schools
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            AcadCoreOS unifies 19 Core modules — academics, assessment, admissions, people, attendance, finance, HR, scheduling, CBT, communication, reports, verification, and the AcadAI intelligence layer — in a single, scalable, multi-tenant workspace.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link href="/trial" className="bg-[#0B132B] hover:bg-[#1e293b] text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Start Free Trial
            </Link>
            <Link href="#showcase" className="bg-white border border-gray-300 hover:bg-gray-50 text-[#0B132B] px-8 py-3 rounded-lg font-medium transition-colors">
              See how AcadCoreOS works
            </Link>
          </div>
          <p className="text-sm text-gray-500">No credit card required. 14-day free trial.</p>
        </div>
      </section>

      {/* HIGHLIGHTS ROW */}
      <section className="py-12 px-6 border-b border-gray-100">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-3 text-blue-600">
              <LayoutDashboard size={24}/>
            </div>
            <h3 className="font-semibold text-sm text-[#0B132B]">All-in-One Workspace</h3>
            <p className="text-xs text-gray-500 mt-1">Academics, Finance, HR & more</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-purple-50 w-12 h-12 rounded-lg flex items-center justify-center mb-3 text-purple-600">
              <Monitor size={24}/>
            </div>
            <h3 className="font-semibold text-sm text-[#0B132B]">CBT Platform</h3>
            <p className="text-xs text-gray-500 mt-1">Computer-based tests</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-emerald-50 w-12 h-12 rounded-lg flex items-center justify-center mb-3 text-emerald-600">
              <Users size={24}/>
            </div>
            <h3 className="font-semibold text-sm text-[#0B132B]">Parent Portal</h3>
            <p className="text-xs text-gray-500 mt-1">Real-time access</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-orange-50 w-12 h-12 rounded-lg flex items-center justify-center mb-3 text-orange-600">
              <Brain size={24}/>
            </div>
            <h3 className="font-semibold text-sm text-[#0B132B]">AI Assistant</h3>
            <p className="text-xs text-gray-500 mt-1">Smart insights</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-teal-50 w-12 h-12 rounded-lg flex items-center justify-center mb-3 text-teal-600">
              <Building2 size={24}/>
            </div>
            <h3 className="font-semibold text-sm text-[#0B132B]">Multi-Campus</h3>
            <p className="text-xs text-gray-500 mt-1">Scale effortlessly</p>
          </div>
        </div>
      </section>

      {/* BUILT FOR AFRICAN SCHOOLS */}
      <section className="py-24 px-6 bg-[#0B132B] text-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Built for African Schools</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">AcadCoreOS empowers educational institutions with secure, scalable, cloud-based technology designed to simplify administration and improve learning outcomes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <BookOpen className="text-blue-400 mb-4" size={32}/>
              <h3 className="font-bold text-lg mb-2">All-in-One School Platform</h3>
              <p className="text-sm text-gray-400">Manage academics, administration, communication, finance, admissions, attendance, examinations, reports, and more.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <Building2 className="text-emerald-400 mb-4" size={32}/>
              <h3 className="font-bold text-lg mb-2">Designed for Every Size</h3>
              <p className="text-sm text-gray-400">From small private schools to multi-campus institutions, AcadCoreOS scales alongside your organisation.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <ShieldCheck className="text-purple-400 mb-4" size={32}/>
              <h3 className="font-bold text-lg mb-2">Secure by Design</h3>
              <p className="text-sm text-gray-400">Role-based permissions, encrypted storage, audit logs, and regular backups protect all institutional data.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <Globe className="text-orange-400 mb-4" size={32}/>
              <h3 className="font-bold text-lg mb-2">Future-Ready Platform</h3>
              <p className="text-sm text-gray-400">Continuous innovation, AI-powered productivity, automation, and cloud infrastructure prepare schools for the future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 19 CORE MODULES */}
      <section id="modules" className="py-24 px-6 bg-gray-50">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2">19 Core Modules</p>
            <h2 className="text-4xl font-bold text-[#0B132B] mb-4">One platform, every Core module</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">AcadCoreOS is organized around 19 Core modules — from AcademicCore and AssessmentCore to ConnectCore, VerifyCore, and the AcadAI intelligence layer.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreModules.map((mod, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase ${mod.status === 'Live' ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'}`}>{mod.status}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0B132B] mb-1">{mod.title}</h3>
                <p className="text-sm font-medium text-gray-700 mb-2">{mod.subtitle}</p>
                <p className="text-xs text-gray-500 mb-4">{mod.desc}</p>
                <ul className="space-y-1.5 mt-auto">
                  {mod.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-0.5" /> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section id="showcase" className="py-24 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto text-center">
          <p className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2">Platform Showcase</p>
          <h2 className="text-4xl font-bold text-[#0B132B] mb-4">Explore What AcadCoreOS Can Do</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12">Discover how AcadCoreOS simplifies every aspect of school management through powerful, integrated modules.</p>
          
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6 text-blue-600">
              <PlayCircle size={32}/>
            </div>
            <h3 className="text-2xl font-bold text-[#0B132B] mb-3">Start Interactive Demo</h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">Choose a role and explore a fully populated demo school with realistic sample data. No registration required.</p>
            <button className="bg-[#0B132B] hover:bg-[#1e293b] text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
              Launch Demo
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2">Testimonials</p>
            <h2 className="text-4xl font-bold text-[#0B132B]">What Schools Say About Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex text-yellow-500 mb-4"><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/></div>
              <p className="text-gray-700 italic mb-6">"AcadCoreOS has transformed how we manage our school. From admissions to results, everything is in one place. The parent portal has improved our communication significantly."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">M</div>
                <div>
                  <p className="font-bold text-[#0B132B] text-sm">Mrs. Adunni Okoye</p>
                  <p className="text-xs text-gray-500">Principal, Bright Future Academy</p>
                </div>
                <span className="ml-auto text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Verified</span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex text-yellow-500 mb-4"><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/></div>
              <p className="text-gray-700 italic mb-6">"The attendance tracking and automated parent notifications have saved us hours of work. We can now focus on what matters most — teaching and learning."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold">M</div>
                <div>
                  <p className="font-bold text-[#0B132B] text-sm">Mr. Tunde Bello</p>
                  <p className="text-xs text-gray-500">School Administrator, Grace Land College</p>
                </div>
                <span className="ml-auto text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Verified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2">Pricing</p>
            <h2 className="text-4xl font-bold text-[#0B132B] mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Capacity-based pricing, allowing schools to pay primarily according to their expected student population.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {pricingPlans.map((plan, i) => (
              <div key={i} className={`relative bg-white p-6 rounded-xl border ${plan.popular ? 'border-blue-600 shadow-lg' : 'border-gray-200 shadow-sm'} flex flex-col`}>
                {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full">Most Popular</div>}
                <h3 className="text-lg font-bold text-[#0B132B] mb-1">{plan.name}</h3>
                <p className="text-xs text-gray-500 mb-4">{plan.capacity}</p>
                <p className="text-2xl font-bold text-[#0B132B] mb-1">{plan.price}<span className="text-sm font-normal text-gray-500">{plan.per}</span></p>
                <p className="text-[10px] text-gray-400 mb-6">{plan.yearly}</p>
                <button className={`w-full py-2 rounded-lg text-sm font-medium transition-colors mt-auto ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>Get Started</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-[1100px] mx-auto text-center">
          <p className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2">Join the Community</p>
          <h2 className="text-4xl font-bold text-[#0B132B] mb-4">Connect with Educators Worldwide</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12">Join the AcadCoreOS Community — a collaborative space for teachers, school leaders, and edtech enthusiasts.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <Users className="text-blue-500 mb-4" size={28}/>
              <h3 className="font-bold text-lg text-[#0B132B] mb-2">Network</h3>
              <p className="text-sm text-gray-500">Build professional connections with educators and leaders.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <Brain className="text-emerald-500 mb-4" size={28}/>
              <h3 className="font-bold text-lg text-[#0B132B] mb-2">Ask & Answer</h3>
              <p className="text-sm text-gray-500">Get expert answers and share your knowledge with the community.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <FileText className="text-purple-500 mb-4" size={28}/>
              <h3 className="font-bold text-lg text-[#0B132B] mb-2">Publish</h3>
              <p className="text-sm text-gray-500">Submit articles to the AcadCoreOS Blog and build your reputation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 py-12 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#0B132B] rounded flex items-center justify-center text-white text-xs font-bold">A</div>
            <span className="font-bold text-lg text-[#0B132B]">AcadCoreOS</span>
          </div>
          <p className="text-xs text-gray-500">© Copyright – AcadCoreOS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}