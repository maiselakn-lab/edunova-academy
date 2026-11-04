import PublicLayout from "@/components/layout/PublicLayout";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Zap, Heart, Users, Globe, CheckCircle2 } from "lucide-react";

export default function AboutAcadCoreOS() {
  return (
    <PublicLayout>
      <div className="max-w-4xl mx-auto px-6 py-20">
        
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">About AcadCoreOS</h1>
          <p className="text-xl text-orange-500 font-medium">Transforming School Management Through Intelligent Technology</p>
          <p className="text-sm text-slate-500 mt-4">Last updated: 26th June, 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-orange max-w-none">
          <p className="text-lg text-slate-300 leading-relaxed">
            AcadCoreOS is a modern cloud-based School Management Operating System (SchoolOS) designed to simplify, streamline, and strengthen every aspect of school administration. From admissions and student records to academic management, finance, communication, and analytics, AcadCoreOS provides a secure, intelligent, and unified digital workspace where school owners, administrators, teachers, students, parents, and support staff work together efficiently.
          </p>
          <p className="text-slate-400 leading-relaxed mt-4">
            We believe schools should spend less time managing paperwork and fragmented systems, and more time focusing on quality education, student development, and institutional growth. AcadCoreOS was created to make that possible.
          </p>

          <hr className="border-white/10 my-10" />

          <h2 className="text-2xl font-bold text-white mb-4">Why AcadCoreOS Exists</h2>
          <p className="text-slate-400 leading-relaxed">
            Many educational institutions continue to rely on disconnected software, spreadsheets, paper records, and manual administrative processes. These methods consume valuable time, increase operational costs, create data inconsistencies, and make collaboration difficult.
          </p>
          <p className="text-slate-400 leading-relaxed mt-4">
            AcadCoreOS was built to solve these challenges by bringing every essential school operation into one secure platform.
          </p>
          <p className="text-slate-400 leading-relaxed mt-4">
            Whether you're managing a nursery school, primary school, secondary school, college, or a multi-campus educational institution, AcadCoreOS provides the tools needed to manage your organization with confidence and efficiency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <div className="bg-[#0F1926] border border-white/5 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Our Vision</h3>
              <p className="text-sm text-slate-400">To become Africa's most trusted and intelligent digital operating system for educational institutions, empowering schools to deliver better learning experiences through innovation, efficiency, and secure technology.</p>
            </div>
            <div className="bg-[#0F1926] border border-white/5 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Our Mission</h3>
              <p className="text-sm text-slate-400">To simplify educational administration by providing a reliable, secure, and scalable platform that connects every stakeholder within the educational ecosystem while enabling schools to operate more efficiently and make informed decisions through data.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">What AcadCoreOS Offers</h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            AcadCoreOS provides an integrated suite of modules designed to support the complete lifecycle of school operations, including:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
              <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 size={14} className="text-orange-500" /> {item}
              </div>
            ))}
          </div>

          <hr className="border-white/10 my-10" />

          <h2 className="text-2xl font-bold text-white mb-4">A Secure Multi-Tenant Platform</h2>
          <p className="text-slate-400 leading-relaxed">
            Each school operates within its own secure and isolated workspace while benefiting from the reliability of the AcadCoreOS platform. Every school receives its own branded environment with:
          </p>
          <ul className="space-y-2 mt-4 text-slate-300">
            <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-orange-500" /> School logo</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-orange-500" /> School colours and themes</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-orange-500" /> Academic calendar</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-orange-500" /> User permissions</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-orange-500" /> School settings</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-orange-500" /> Data isolation</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-orange-500" /> Custom branding</li>
          </ul>

          <hr className="border-white/10 my-10" />

          <h2 className="text-2xl font-bold text-white mb-6">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: <Zap />, title: "Innovation", desc: "We continuously improve our platform to meet the changing needs of modern education." },
              { icon: <Heart />, title: "Simplicity", desc: "Technology should simplify work, not complicate it." },
              { icon: <ShieldCheck />, title: "Security", desc: "Protecting institutional and personal data is central to everything we do." },
              { icon: <Users />, title: "Reliability", desc: "Schools depend on us every day, and we are committed to delivering dependable services." },
              { icon: <Globe />, title: "Collaboration", desc: "Education succeeds when administrators, teachers, students, and parents work together." },
              { icon: <CheckCircle2 />, title: "Excellence", desc: "We strive for quality in our platform, our support, and every experience we provide." },
            ].map((val, i) => (
              <div key={i} className="bg-[#0F1926] border border-white/5 p-5 rounded-xl">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center mb-3">{val.icon}</div>
                <h3 className="text-sm font-bold text-white mb-1">{val.title}</h3>
                <p className="text-xs text-slate-400">{val.desc}</p>
              </div>
            ))}
          </div>

          <hr className="border-white/10 my-10" />

          <h2 className="text-2xl font-bold text-white mb-4">Join the AcadCoreOS Community</h2>
          <p className="text-slate-400 leading-relaxed">
            Whether you're starting a new school, modernizing an existing institution, or managing multiple campuses, AcadCoreOS is designed to help you operate more efficiently and focus on what matters most—education.
          </p>
          <p className="text-slate-400 leading-relaxed mt-4 mb-8">
            We invite school owners, administrators, educators, parents, and partners to join us as we shape the future of educational management through secure, intelligent, and innovative technology.
          </p>
          
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 text-center">
            <p className="text-lg font-bold text-white">AcadCoreOS — The Intelligent Operating System for Modern Schools.</p>
          </div>

        </div>
      </div>
    </PublicLayout>
  );
}