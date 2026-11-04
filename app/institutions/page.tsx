import PublicLayout from "@/components/layout/PublicLayout";
import Link from "next/link";
import { Building2, GraduationCap, School, ArrowRight, ShieldCheck, LayoutDashboard, Users } from "lucide-react";

export default function InstitutionsPage() {
  return (
    <PublicLayout>
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-orange-500/20">
            <Building2 size={14} /> For Institutions
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">Manage Your Institution with AcadCoreOS</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Whether you run a primary school, a college, or a university, our powerful School Management Operating System handles the administrative heavy lifting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#0F1926] border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors">
            <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 mb-6"><School size={28} /></div>
            <h3 className="text-xl font-bold text-white mb-3">Primary Schools</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Manage admissions, attendance, fees, and foundational learning progress for young learners.</p>
          </div>
          <div className="bg-[#0F1926] border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors">
            <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-6"><GraduationCap size={28} /></div>
            <h3 className="text-xl font-bold text-white mb-3">Colleges & Universities</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Handle faculty management, programme registration, semester modules, and academic transcripts.</p>
          </div>
          <div className="bg-[#0F1926] border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors">
            <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 mb-6"><LayoutDashboard size={28} /></div>
            <h3 className="text-xl font-bold text-white mb-3">Multi-Campus Groups</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Oversee multiple campuses, HR, finance, and analytics from one central dashboard.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500/20 to-orange-500/5 border border-orange-500/30 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to digitize your institution?</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto text-lg">Join the AcadCoreOS platform and get access to all 19 core modules for your school, college, or university.</p>
          <div className="flex justify-center gap-4">
            <Link href="/get-started" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
              Register Institution <ArrowRight size={18} />
            </Link>
            <Link href="/login" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-3 rounded-lg font-bold inline-flex items-center gap-2 transition-colors">
              Institution Login
            </Link>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}