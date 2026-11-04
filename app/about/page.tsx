import PublicLayout from "@/components/layout/PublicLayout";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Zap, Heart, Users, Globe, CheckCircle2, LayoutDashboard, Cpu, Rocket } from "lucide-react";

export default function AboutAcadCoreOS() {
  return (
    <PublicLayout>
      {/* Header */}
      <section className="py-20 px-6 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-orange-500/20">
            <LayoutDashboard size={14} /> The Platform
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">About AcadCoreOS</h1>
          <p className="text-2xl text-orange-500 font-medium mb-4">Transforming School Management Through Intelligent Technology</p>
          <p className="text-sm text-slate-500">Last updated: 26th June, 2026</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-invert prose-orange max-w-none">
          <p className="text-xl text-slate-300 leading-relaxed font-medium">
            AcadCoreOS is a modern cloud-based School Management Operating System (SchoolOS) designed to simplify, streamline, and strengthen every aspect of school administration. From admissions and student records to academic management, finance, communication, and analytics, AcadCoreOS provides a secure, intelligent, and unified digital workspace where school owners, administrators, teachers, students, parents, and support staff work together efficiently.
          </p>
          <p className="text-slate-400 leading-relaxed mt-6 text-lg">
            We believe schools should spend less time managing paperwork and fragmented systems, and more time focusing on quality education, student development, and institutional growth. AcadCoreOS was created to make that possible.
          </p>

          <hr className="border-white/10 my-12" />

          <h2 className="text-3xl font-bold text-white mb-6">Why AcadCoreOS Exists</h2>
          <p className="text-slate-400 leading-relaxed text-lg">
            Many educational institutions continue to rely on disconnected software, spreadsheets, paper records, and manual administrative processes. These methods consume valuable time, increase operational costs, create data inconsistencies, and make collaboration difficult.
          </p>
          <p className="text-slate-400 leading-relaxed mt-4 text-lg">
            AcadCoreOS was built to solve these challenges by bringing every essential school operation into one secure platform. Whether you're managing a nursery school, primary school, secondary school, college, or a multi-campus educational institution, AcadCoreOS provides the tools needed to manage your organization with confidence and efficiency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <div className="bg-[#0F1926] border border-white/10 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 mb-6"><Rocket size={24} /></div>
              <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-slate-400 leading-relaxed">To become Africa's most trusted and intelligent digital operating system for educational institutions, empowering schools to deliver better learning experiences through innovation, efficiency, and secure technology.</p>
            </div>
            <div className="bg-[#0F1926] border border-white/10 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 mb-6"><Target size={24} /></div>
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-slate-400 leading-relaxed">To simplify educational administration by providing a reliable, secure, and scalable platform that connects every stakeholder within the educational ecosystem while enabling schools to operate more efficiently and make informed decisions through data.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">What AcadCoreOS Offers</h2>
          <p className="text-slate-400 leading-relaxed mb-8 text-lg">
            AcadCoreOS provides an integrated suite of modules designed to support the complete lifecycle of school operations.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Admissions Management", "Student Information Management", "Staff & Human Resource Management", 
              "Academic Records & Results", "Attendance Management", "Finance & Fee Management",
              "Parent Portal", "Student Portal", "Teacher Workspace", "Communication & Announcements",
              "Event & Calendar Management", "Library Management", "Inventory & Assets",
              "Discipline & Behaviour Records", "Transport Management", "Hostel Management (Future)",
              "Healthcare & Clinic Records (Future)", "Learning Management & E-learning",
              "AI-powered Productivity Tools", "Reporting & Analytics", "Multi-campus Management",
              "Secure Role-Based Access Control"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-[#0F1926] border border-white/5 p-4 rounded-xl">
                <CheckCircle2 size={18} className="text-orange-500 shrink-0" />
                <span className="text-sm font-medium text-slate-300">{item}</span>
              </div>
            ))}
          </div>

          <hr className="border-white/10 my-12" />

          <h2 className="text-3xl font-bold text-white mb-6">A Secure Multi-Tenant Platform</h2>
          <p className="text-slate-400 leading-relaxed text-lg mb-6">
            Each school operates within its own secure and isolated workspace while benefiting from the reliability of the AcadCoreOS platform. Every school receives its own branded environment.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "School logo", "School colours", "Academic calendar", "User permissions", 
              "School settings", "Data isolation", "Custom branding", "Role-based access"
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/5 rounded-lg p-3 text-center">
                <span className="text-xs font-medium text-slate-300">{item}</span>
              </div>
            ))}
          </div>

          <hr className="border-white/10 my-12" />

          <h2 className="text-3xl font-bold text-white mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: <Zap />, title: "Innovation", desc: "We continuously improve our platform to meet the changing needs of modern education." },
              { icon: <Heart />, title: "Simplicity", desc: "Technology should simplify work, not complicate it." },
              { icon: <ShieldCheck />, title: "Security", desc: "Protecting institutional and personal data is central to everything we do." },
              { icon: <Users />, title: "Reliability", desc: "Schools depend on us every day, and we are committed to delivering dependable services." },
              { icon: <Globe />, title: "Collaboration", desc: "Education succeeds when administrators, teachers, students, and parents work together." },
              { icon: <Award />, title: "Excellence", desc: "We strive for quality in our platform, our support, and every experience we provide." },
            ].map((val, i) => (
              <div key={i} className="bg-[#0F1926] border border-white/5 p-6 rounded-2xl">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center mb-4">{val.icon}</div>
                <h3 className="text-base font-bold text-white mb-2">{val.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>

          <hr className="border-white/10 my-12" />

          <h2 className="text-3xl font-bold text-white mb-6">Join the AcadCoreOS Community</h2>
          <p className="text-slate-400 leading-relaxed text-lg">
            Whether you're starting a new school, modernizing an existing institution, or managing multiple campuses, AcadCoreOS is designed to help you operate more efficiently and focus on what matters most—education.
          </p>
          <p className="text-slate-400 leading-relaxed mt-4 mb-10 text-lg">
            We invite school owners, administrators, educators, parents, and partners to join us as we shape the future of educational management through secure, intelligent, and innovative technology.
          </p>
          
          <div className="bg-gradient-to-r from-orange-500/20 to-orange-500/5 border border-orange-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">AcadCoreOS</h3>
            <p className="text-lg font-medium text-orange-400">The Intelligent Operating System for Modern Schools.</p>
            <Link href="/get-started" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold mt-6 transition-colors">
              Start Your Journey <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </div>
    </PublicLayout>
  );
}

// Adding missing icons
import { Target, Award, ArrowRight } from "lucide-react";