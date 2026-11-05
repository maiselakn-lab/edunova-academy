import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { BookOpen, GraduationCap, Building2, Microscope, ArrowRight } from 'lucide-react';

export default function AcademiesHub() {
  const faculties = [
    { title: "Primary Academy", desc: "Foundational education focusing on literacy, numeracy, and core academic development for young learners (Grades R-7).", icon: <BookOpen size={40} />, href: "/academies/primary" },
    { title: "Secondary Academy", desc: "Comprehensive high school support, examination preparation, and subject-specific tutoring for Grades 8-12.", icon: <GraduationCap size={40} />, href: "/academies/secondary" },
    { title: "College & TVET Academy", desc: "Technical and vocational education support, engineering fundamentals, and specialised college modules.", icon: <Building2 size={40} />, href: "/academies/college" },
    { title: "University & Research", desc: "Advanced academic assistance, statistical analysis, postgraduate support, and comprehensive research guidance.", icon: <Microscope size={40} />, href: "/academies/university" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      
      {/* Page Header */}
      <section className="bg-brand-navy py-20 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <p className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4">Academic Faculties</p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Explore Our Academies</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Structured educational pathways for every stage of your academic journey. Discover the right faculty for your needs.
          </p>
        </div>
      </section>

      {/* Faculties Grid */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid md:grid-cols-2 gap-8">
            {faculties.map((faculty, i) => (
              <div key={i} className="group bg-white p-10 rounded-lg shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="bg-brand-navy/5 w-20 h-20 rounded-2xl flex items-center justify-center text-brand-navy group-hover:bg-brand-royal group-hover:text-white transition-colors mb-8">
                    {faculty.icon}
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-brand-navy mb-4">{faculty.title}</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{faculty.desc}</p>
                </div>
                <Link href={faculty.href} className="inline-flex items-center gap-2 text-brand-royal font-bold uppercase tracking-widest text-sm group-hover:gap-4 transition-all">
                  Explore Programmes <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}