import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { ArrowRight, BookOpen, GraduationCap, ShieldCheck, MessageSquare, Upload } from 'lucide-react';

export default function CommunityHub() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      
      <section className="bg-brand-navy py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <MessageSquare className="mx-auto text-brand-gold mb-6" size={48} />
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">The EduNova Community</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Don't study alone. Join thousands of peers sharing notes, past papers, and solving academic challenges together.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 w-full">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Learner Community Card */}
          <Link href="/community/learner" className="group bg-white p-10 rounded-2xl border-2 border-transparent hover:border-brand-royal shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-brand-royal/10 text-brand-royal rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <BookOpen size={32} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-brand-navy mb-3">Learner Community</h2>
            <p className="text-gray-600 mb-6">For High School learners (Grades 8-12). Share CAPS study notes, past papers, and get help with homework.</p>
            <div className="flex items-center gap-2 text-sm font-bold text-brand-royal uppercase tracking-wider">
              Enter Learner Space <ArrowRight size={16} />
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
              <ShieldCheck size={14} className="text-brand-teal" /> Monitored by Safeguarding Officers
            </div>
          </Link>

          {/* Student Community Card */}
          <Link href="/community/student" className="group bg-white p-10 rounded-2xl border-2 border-transparent hover:border-brand-sky shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-brand-sky/10 text-brand-sky rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <GraduationCap size={32} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-brand-navy mb-3">Student Community</h2>
            <p className="text-gray-600 mb-6">For College & University students. Discuss modules, share research papers, and collaborate on complex assignments.</p>
            <div className="flex items-center gap-2 text-sm font-bold text-brand-sky uppercase tracking-wider">
              Enter Student Space <ArrowRight size={16} />
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
              <ShieldCheck size={14} className="text-brand-teal" /> Academic Integrity Rules Apply
            </div>
          </Link>

        </div>
      </section>
    </div>
  );
}