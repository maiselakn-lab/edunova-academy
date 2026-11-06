import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { ArrowRight, Microscope, FileText, BarChart3, BookOpen, Users, Globe } from 'lucide-react';

export default function Research() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      
      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Research & Innovation</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Pioneering academic research and providing specialist support for postgraduate students and institutional partners across South Africa.</p>
        </div>
      </section>

      <section className="py-24 bg-brand-grey">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">Research Support Centre</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Ethical, structured academic guidance for honours, masters, and PhD candidates.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FileText size={28} />, title: "Proposal Guidance", desc: "Structuring your introduction, problem statement, and research questions." },
              { icon: <BookOpen size={28} />, title: "Literature Review", desc: "Finding, evaluating, and synthesizing academic sources." },
              { icon: <Microscope size={28} />, title: "Methodology Design", desc: "Quantitative, qualitative, and mixed-methods research designs." },
              { icon: <BarChart3 size={28} />, title: "Statistical Analysis", desc: "Tutoring on SPSS, R, or Python to analyze your data." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="text-brand-royal mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}