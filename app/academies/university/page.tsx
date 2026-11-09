import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { ArrowRight, CheckCircle2, Microscope, BarChart3, GraduationCap, Building2 } from 'lucide-react';

export default function UniversityAcademy() {
  const faculties = [
    { name: "Engineering & Built Environment", desc: "Electrical, Mechanical, Civil, Chemical, Mining, Architecture." },
    { name: "Natural & Applied Sciences", desc: "Mathematics, Physics, Chemistry, Biology, Computer Science, AI." },
    { name: "Health Sciences", desc: "Medicine, Nursing, Pharmacy, Physiotherapy, Public Health." },
    { name: "Commerce & Business", desc: "Accounting, Economics, Finance, Business Management, Marketing." },
    { name: "Humanities & Social Sciences", desc: "Psychology, Sociology, Political Science, History, Education." },
    { name: "Law", desc: "LLB, Constitutional Law, Criminal Law, Commercial Law." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      
      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <div className="max-w-3xl border-l-4 border-brand-gold pl-6 md:pl-8">
            <p className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4">University & Postgraduate Faculty</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">University & Research</h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Advanced academic assistance for undergraduate and postgraduate students. Research guidance, statistical analysis, and specialist module tutoring.
            </p>
            <Link href="/register" className="bg-brand-gold text-brand-navy px-8 py-4 rounded-sm font-bold text-lg hover:bg-yellow-500 transition-all inline-flex items-center gap-2 shadow-lg">
              Apply for Support <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-grey">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h2 className="text-3xl font-serif font-bold text-brand-navy mb-8 text-center">Undergraduate Faculties</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculties.map((fac, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-brand-royal transition-colors">
                <h3 className="text-lg font-bold text-brand-navy mb-2">{fac.name}</h3>
                <p className="text-sm text-gray-600">{fac.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-navy mb-8 mt-16 text-center">Postgraduate & Research</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-brand-navy p-8 rounded-xl shadow-lg text-white text-center">
              <GraduationCap className="mx-auto text-brand-gold mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Honours Degrees</h3>
              <p className="text-sm text-gray-300">NQF Level 8. Specialisations in Science, Commerce, Engineering, Humanities.</p>
            </div>
            <div className="bg-brand-navy p-8 rounded-xl shadow-lg text-white text-center">
              <Microscope className="mx-auto text-brand-gold mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Master's Degrees</h3>
              <p className="text-sm text-gray-300">NQF Level 9. MBA, MSc, MEd, MA. Coursework and research routes available.</p>
            </div>
            <div className="bg-brand-navy p-8 rounded-xl shadow-lg text-white text-center">
              <Building2 className="mx-auto text-brand-gold mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Doctoral (PhD)</h3>
              <p className="text-sm text-gray-300">NQF Level 10. Advanced research across all academic disciplines.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}