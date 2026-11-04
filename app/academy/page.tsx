import PublicLayout from "@/components/layout/PublicLayout";
import Link from "next/link";
import { ArrowLeft, Globe, BookOpen, GraduationCap, Laptop, Users, CheckCircle2, Award } from "lucide-react";

export default function AcademyAboutPage() {
  return (
    <PublicLayout>
      {/* Header */}
      <section className="py-20 px-6 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-orange-500/20">
            <GraduationCap size={14} /> The Academy
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">About Think EduNova</h1>
          <p className="text-2xl text-orange-500 font-medium mb-4">Internationally Acclaimed Online School</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-invert prose-orange max-w-none">
          <p className="text-xl text-slate-300 leading-relaxed font-medium">
            Think Digital Academy (EduNova) is an online school that prides itself in providing world-class online learning to students all over the world. We present our online content in an interactive, engaging, and effective way for virtual school students.
          </p>
          <p className="text-slate-400 leading-relaxed mt-6 text-lg">
            We are also the first online school not only providing the United States GED but also the British International and South African CAPS curricula, as well as other exciting courses.
          </p>

          <div className="bg-[#0F1926] border border-white/10 p-8 rounded-2xl my-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[40px] rounded-full"></div>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Laptop className="text-orange-500" size={28} /> Our Name & Philosophy
            </h2>
            <p className="text-slate-300 leading-relaxed italic text-lg relative z-10">
              "Our name derives from our strong belief that 'Thinking' is one of the most important skills a child can be taught. We have so much information at our fingertips, but young students need to learn how to think creatively to use this information to plan, design, innovate – for anything they wish to pursue in their lives. With this online school, all this and more is possible."
            </p>
          </div>

          <h2 className="text-3xl font-bold text-white mb-8 mt-12">Our Curriculums</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0F1926] border border-white/5 p-6 rounded-2xl">
              <BookOpen className="text-orange-500 mb-4" size={28} />
              <h3 className="text-lg font-bold text-white mb-2">South African CAPS</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Complete the National Curriculum Statement Grades R – 12 from anywhere in the world.</p>
            </div>
            <div className="bg-[#0F1926] border border-white/5 p-6 rounded-2xl">
              <Globe className="text-blue-500 mb-4" size={28} />
              <h3 className="text-lg font-bold text-white mb-2">British International</h3>
              <p className="text-sm text-slate-400 leading-relaxed">A structured curriculum designed to meet the needs of all students through differentiated teaching.</p>
            </div>
            <div className="bg-[#0F1926] border border-white/5 p-6 rounded-2xl">
              <Award className="text-purple-500 mb-4" size={28} />
              <h3 className="text-lg font-bold text-white mb-2">United States GED</h3>
              <p className="text-sm text-slate-400 leading-relaxed">The most recognised higher secondary certificate, accepted by universities globally.</p>
            </div>
          </div>

          <hr className="border-white/10 my-12" />

          <h2 className="text-3xl font-bold text-white mb-6">What Makes Us Unique</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0"><GraduationCap size={20} /></div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Beyond High School</h3>
                <p className="text-sm text-slate-400 leading-relaxed">We go beyond traditional schooling, providing pathways to universities and colleges globally.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0"><Users size={20} /></div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Tutor Opportunities</h3>
                <p className="text-sm text-slate-400 leading-relaxed">Tutors can apply directly through our platform to teach online. Join our global faculty.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0"><Globe size={20} /></div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Global Reach</h3>
                <p className="text-sm text-slate-400 leading-relaxed">Students from all over the world join our virtual campus to learn and grow together.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0"><CheckCircle2 size={20} /></div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Recognized Certificates</h3>
                <p className="text-sm text-slate-400 leading-relaxed">Graduate with internationally recognized qualifications (CAPS, British, GED).</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center bg-gradient-to-r from-orange-500/20 to-orange-500/5 border border-orange-500/30 rounded-2xl p-10">
             <h3 className="text-2xl font-bold text-white mb-4">Join Our Virtual Campus</h3>
             <p className="text-slate-400 mb-8 text-lg">Experience world-class education from anywhere in the world.</p>
             <Link href="/get-started" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-500/20">
               Request a Free Trial <ArrowRight size={18} />
             </Link>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}