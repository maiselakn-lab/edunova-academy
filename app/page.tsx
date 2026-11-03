import PublicLayout from "@/components/layout/PublicLayout";
import Link from "next/link";
import { CheckCircle2, LayoutDashboard, Monitor, Users, Brain, Building2, ShieldCheck, Globe, BookOpen, ArrowRight, PlayCircle } from "lucide-react";

export default function Home() {
  return (
    <PublicLayout>
      {/* HERO SECTION */}
      <section className="py-24 px-6 border-b border-border bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-[1000px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-medium mb-6 border border-primary/20">
            <CheckCircle2 size={14} /> The Intelligent OS for Modern Schools
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6 font-heading">
            The Intelligent OS for Modern Schools
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            AcadCoreOS unifies 19 Core modules — academics, assessment, admissions, people, attendance, finance, HR, scheduling, CBT, communication, reports, verification, and the AcadAI intelligence layer — in a single, scalable, multi-tenant workspace.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link href="/get-started" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors">
              Start Free Trial
            </Link>
            <Link href="#showcase" className="bg-card border border-border hover:bg-accent text-foreground px-8 py-3 rounded-lg font-medium transition-colors">
              See how AcadCoreOS works
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">No credit card required. 14-day free trial.</p>
        </div>
      </section>

      {/* HIGHLIGHTS ROW */}
      <section className="py-12 px-6 border-b border-border">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3 text-primary">
              <LayoutDashboard size={24} />
            </div>
            <h3 className="font-semibold text-sm text-foreground">All-in-One Workspace</h3>
            <p className="text-xs text-muted-foreground mt-1">Academics, Finance, HR & more</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3 text-purple-500">
              <Monitor size={24} />
            </div>
            <h3 className="font-semibold text-sm text-foreground">CBT Platform</h3>
            <p className="text-xs text-muted-foreground mt-1">Computer-based tests</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-emerald-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3 text-emerald-500">
              <Users size={24} />
            </div>
            <h3 className="font-semibold text-sm text-foreground">Parent Portal</h3>
            <p className="text-xs text-muted-foreground mt-1">Real-time access</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3 text-orange-500">
              <Brain size={24} />
            </div>
            <h3 className="font-semibold text-sm text-foreground">AI Assistant</h3>
            <p className="text-xs text-muted-foreground mt-1">Smart insights</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-teal-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3 text-teal-500">
              <Building2 size={24} />
            </div>
            <h3 className="font-semibold text-sm text-foreground">Multi-Campus</h3>
            <p className="text-xs text-muted-foreground mt-1">Scale effortlessly</p>
          </div>
        </div>
      </section>

      {/* BUILT FOR AFRICAN SCHOOLS */}
      <section className="py-24 px-6 bg-[#0A1628] text-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-heading">Built for African Schools</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">AcadCoreOS empowers educational institutions with secure, scalable, cloud-based technology designed to simplify administration and improve learning outcomes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <BookOpen className="text-blue-400 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">All-in-One Platform</h3>
              <p className="text-sm text-slate-400">Manage academics, administration, finance, admissions, attendance, and more.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <Building2 className="text-emerald-400 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Designed for Every Size</h3>
              <p className="text-sm text-slate-400">From small private schools to multi-campus institutions, AcadCoreOS scales alongside you.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <ShieldCheck className="text-purple-400 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Secure by Design</h3>
              <p className="text-sm text-slate-400">Role-based permissions, encrypted storage, audit logs, and regular backups.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <Globe className="text-orange-400 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Future-Ready Platform</h3>
              <p className="text-sm text-slate-400">Continuous innovation, AI-powered productivity, and cloud infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section id="showcase" className="py-24 px-6 bg-background">
        <div className="max-w-[1100px] mx-auto text-center">
          <p className="text-primary font-bold tracking-widest text-xs uppercase mb-2">Platform Showcase</p>
          <h2 className="text-4xl font-bold text-foreground mb-4 font-heading">Explore What AcadCoreOS Can Do</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">Discover how AcadCoreOS simplifies every aspect of school management through powerful, integrated modules.</p>
          
          <div className="bg-card rounded-2xl border border-border p-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6 text-primary">
              <PlayCircle size={32} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Start Interactive Demo</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">Choose a role and explore a fully populated demo school with realistic sample data. No registration required.</p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-lg font-medium transition-colors">
              Launch Demo
            </button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}