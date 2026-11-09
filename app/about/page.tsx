import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { Target, Eye, Heart, ArrowRight, Users, Globe, ShieldCheck, History } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      
      {/* Hero */}
      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <div className="max-w-3xl">
            <p className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4">About EduNova</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              A Premier Digital Institution.
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Think EduNova Academy is not just a tutoring website. We are a comprehensive digital institution combining academic teaching, learning resources, AI-assisted education, and employment opportunities for qualified graduates.
            </p>
            <Link href="/register" className="bg-brand-gold text-brand-navy px-8 py-4 rounded-sm font-bold text-lg hover:bg-yellow-500 transition-all inline-flex items-center gap-2 shadow-lg">
              Apply for Admission <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-brand-grey p-8 rounded-xl border border-gray-200">
              <div className="w-14 h-14 bg-brand-royal/10 text-brand-royal rounded-full flex items-center justify-center mb-6"><Target size={28} /></div>
              <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">To provide accessible, quality, and personalised education to people who need assistance with their academic development, from Grade R to PhD level.</p>
            </div>
            <div className="bg-brand-grey p-8 rounded-xl border border-gray-200">
              <div className="w-14 h-14 bg-brand-royal/10 text-brand-royal rounded-full flex items-center justify-center mb-6"><Eye size={28} /></div>
              <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">To establish a trusted, scalable digital academy that combines quality education, technology, employment opportunities, and academic empowerment across Africa.</p>
            </div>
            <div className="bg-brand-grey p-8 rounded-xl border border-gray-200">
              <div className="w-14 h-14 bg-brand-royal/10 text-brand-royal rounded-full flex items-center justify-center mb-6"><Heart size={28} /></div>
              <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4">Our Values</h2>
              <p className="text-gray-600 leading-relaxed">Academic excellence, integrity, safeguarding of minors, and the empowerment of graduates through meaningful employment opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links to Sub-pages */}
      <section className="py-24 bg-brand-grey border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">Explore Our Institution</h2>
            <p className="text-lg text-gray-600">Learn more about our leadership, history, and governance.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/about/leadership" className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-brand-royal transition-all duration-300 group">
              <Users className="text-brand-royal mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold text-brand-navy mb-2">Leadership</h3>
              <p className="text-sm text-gray-600">Meet our Executive Management and Academic Council.</p>
            </Link>
            <Link href="/about/history" className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-brand-royal transition-all duration-300 group">
              <History className="text-brand-royal mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold text-brand-navy mb-2">Our History</h3>
              <p className="text-sm text-gray-600">The journey of building a premier digital institution.</p>
            </Link>
            <Link href="/about/strategy" className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-brand-royal transition-all duration-300 group">
              <Globe className="text-brand-royal mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold text-brand-navy mb-2">Strategic Plan</h3>
              <p className="text-sm text-gray-600">Our roadmap to transforming digital education.</p>
            </Link>
            <Link href="/about/facts" className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-brand-royal transition-all duration-300 group">
              <ShieldCheck className="text-brand-royal mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold text-brand-navy mb-2">Facts & Figures</h3>
              <p className="text-sm text-gray-600">The scale and reach of Think EduNova Academy.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}