import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { ArrowRight, Microscope, FileText, BarChart3, BookOpen, Users, Globe, ShieldCheck } from 'lucide-react';

export default function Research() {
  const services = [
    { title: "Research Proposal Guidance", icon: <FileText size={28} />, desc: "Help structuring your introduction, problem statement, and research questions." },
    { title: "Literature Review", icon: <BookOpen size={28} />, desc: "Assistance with finding, evaluating, and synthesizing academic sources." },
    { title: "Methodology Design", icon: <Microscope size={28} />, desc: "Guidance on quantitative, qualitative, and mixed-methods research designs." },
    { title: "Statistical Analysis", icon: <BarChart3 size={28} />, desc: "Tutoring on SPSS, R, or Python to analyze and interpret your data." },
    { title: "Academic Writing", icon: <FileText size={28} />, desc: "Support with structuring your thesis, dissertation, or research paper." },
    { title: "Referencing & Citations", icon: <BookOpen size={28} />, desc: "Guidance on APA, Harvard, and other citation styles to avoid plagiarism." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      
      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <div className="max-w-3xl">
            <p className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4">Postgraduate & Research</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">Research & Innovation</h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Specialist research assistance for university students, honours, masters, and PhD candidates. We support legitimate academic development and research excellence.
            </p>
            <Link href="/register" className="bg-brand-gold text-brand-navy px-8 py-4 rounded-sm font-bold text-lg hover:bg-yellow-500 transition-all inline-flex items-center gap-2 shadow-lg">
              Book a Consultation <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-grey">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">Research Support Centre</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Ethical, structured academic guidance every step of the way.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="text-brand-royal mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 text-center">
          <ShieldCheck className="mx-auto text-brand-gold mb-6" size={64} />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Academic Integrity First</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We do not write assignments for students or facilitate plagiarism. Our services are strictly for tutoring, guidance, and academic development. We help you understand the research process and produce your own original work.
          </p>
        </div>
      </section>
    </div>
  );
}