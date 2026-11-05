import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { ArrowRight, Microscope, FileText, BarChart3, BookOpen } from 'lucide-react';

export default function ResearchSupport() {
  const services = [
    { title: "Research Proposal Guidance", icon: <FileText size={28} />, desc: "Help structuring your introduction, problem statement, and research questions." },
    { title: "Literature Review", icon: <BookOpen size={28} />, desc: "Assistance with finding, evaluating, and synthesizing academic sources." },
    { title: "Methodology Design", icon: <Microscope size={28} />, desc: "Guidance on quantitative, qualitative, and mixed-methods research designs." },
    { title: "Statistical Analysis", icon: <BarChart3 size={28} />, desc: "Tutoring on SPSS, R, or Python to analyze and interpret your data." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      
      {/* Hero */}
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="max-w-3xl">
            <p className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4">Postgraduate & Research</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">Research Support Centre</h1>
            <p className="text-xl text-gray-300 mb-8">
              Specialist research assistance for university students, honours, masters, and PhD candidates. We support legitimate academic development and research excellence.
            </p>
            <Link href="/register" className="bg-brand-royal text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-blue-700 transition-all inline-flex items-center gap-2 shadow-lg">
              Book a Consultation <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-brand-grey">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">Our Research Services</h2>
            <p className="text-lg text-gray-600">Ethical, structured academic guidance every step of the way.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-brand-royal mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}