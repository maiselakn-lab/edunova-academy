import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { ArrowRight, CheckCircle2, Wrench, Cpu, Presentation } from 'lucide-react';

export default function CollegeAcademy() {
  const ncvtPrograms = ["Engineering & Related Design", "Electrical Infrastructure", "Civil Engineering", "Information Technology", "Finance & Accounting", "Hospitality", "Tourism", "Primary Agriculture"];
  const natedPrograms = ["N1-N6 Electrical Engineering", "N1-N6 Mechanical Engineering", "N1-N6 Civil Engineering", "N4-N6 Business Management", "N4-N6 Financial Management", "N4-N6 Human Resource Management", "N4-N6 Marketing Management"];
  const trades = ["Electrician", "Fitter and Turner", "Millwright", "Motor Mechanic", "Welder", "Plumber", "Bricklayer", "Carpenter", "Refrigeration Technician"];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      
      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <div className="max-w-3xl border-l-4 border-brand-gold pl-6 md:pl-8">
            <p className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4">College & TVET Faculty</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">College & TVET</h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Building the technical and vocational skills for the future workforce. Support for NATED, NC(V), and specialised college modules.
            </p>
            <Link href="/register" className="bg-brand-gold text-brand-navy px-8 py-4 rounded-sm font-bold text-lg hover:bg-yellow-500 transition-all inline-flex items-center gap-2 shadow-lg">
              Enrol Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-grey">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 space-y-12">
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-brand-navy mb-6 flex items-center gap-2"><Cpu className="text-brand-royal"/> National Certificate (Vocational)</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {ncvtPrograms.map((prog, i) => (
                <div key={i} className="flex items-center gap-2 bg-brand-grey p-3 rounded"><CheckCircle2 className="text-brand-teal shrink-0" size={16} /><span className="text-sm font-medium">{prog}</span></div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-brand-navy mb-6 flex items-center gap-2"><Presentation className="text-brand-royal"/> NATED / Report 191 Programmes</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {natedPrograms.map((prog, i) => (
                <div key={i} className="flex items-center gap-2 bg-brand-grey p-3 rounded"><CheckCircle2 className="text-brand-teal shrink-0" size={16} /><span className="text-sm font-medium">{prog}</span></div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-brand-navy mb-6 flex items-center gap-2"><Wrench className="text-brand-royal"/> Trade & Artisan Training</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {trades.map((prog, i) => (
                <div key={i} className="flex items-center gap-2 bg-brand-grey p-3 rounded"><CheckCircle2 className="text-brand-teal shrink-0" size={16} /><span className="text-sm font-medium">{prog}</span></div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}