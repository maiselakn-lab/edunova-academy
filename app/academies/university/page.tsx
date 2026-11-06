import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { ArrowRight, BookOpen, CheckCircle2, Microscope, BarChart3, GraduationCap } from 'lucide-react';

export default function UniversityAcademy() {
  const subjects = [
    "Engineering (Civil, Mechanical)", "Computer Science & IT", "Business & Management",
    "Accounting & Finance", "Mathematics & Statistics", "Research Methodology",
    "Postgraduate Support", "Data Analysis (SPSS, R, Python)"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      
      {/* Hero */}
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

      {/* Curriculum & Approach */}
      <section className="py-24 bg-brand-grey">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Subjects */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">Academic Disciplines</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our university tutors are highly qualified professionals (many with Masters and PhDs) who can assist with complex, high-level academic material.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {subjects.map((subject, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                    <CheckCircle2 className="text-brand-teal shrink-0" size={16} />
                    <span className="font-semibold text-sm text-brand-charcoal">{subject}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-brand-navy p-6 rounded-lg text-white">
                <h4 className="font-bold mb-2 flex items-center gap-2"><GraduationCap size={18} className="text-brand-gold"/> Postgraduate Research</h4>
                <p className="text-sm text-gray-300">Dedicated support for Honours, Masters, and PhD candidates, including literature reviews and proposal guidance.</p>
              </div>
            </div>
            
            {/* How We Teach */}
            <div className="bg-white p-10 rounded-xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-serif font-bold text-brand-navy mb-8">Our Teaching Approach</h3>
              <ul className="space-y-8">
                <li className="flex gap-5">
                  <div className="bg-brand-navy/5 p-3 rounded-lg text-brand-royal h-fit">
                    <Microscope size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-brand-navy mb-1">Research Excellence</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">We guide students through the academic research process, ensuring methodologies are sound and ethical.</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="bg-brand-navy/5 p-3 rounded-lg text-brand-royal h-fit">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-brand-navy mb-1">Statistical Analysis</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Tutoring on software like SPSS, R, and Python to help students interpret complex data for their theses.</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="bg-brand-navy/5 p-3 rounded-lg text-brand-royal h-fit">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-brand-navy mb-1">Exam & Assignment Prep</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Support with complex assignments, academic writing structure, and preparation for rigorous university exams.</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}