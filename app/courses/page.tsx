import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { ArrowRight, BookOpen, GraduationCap, Building2, Microscope } from 'lucide-react';

export default function Courses() {
  const programmes = [
    { title: "Primary Academy", level: "Grades R - 7", desc: "Foundational education focusing on literacy, numeracy, and core academic development.", icon: <BookOpen size={32} />, href: "/academies/primary" },
    { title: "Secondary Academy", level: "Grades 8 - 12", desc: "Comprehensive high school support, exam preparation, and subject-specific tutoring.", icon: <GraduationCap size={32} />, href: "/academies/secondary" },
    { title: "College & TVET", level: "NATED / NC(V)", desc: "Technical and vocational education support, engineering fundamentals, and artisan training.", icon: <Building2 size={32} />, href: "/academies/college" },
    { title: "University & Research", level: "Undergrad & Postgrad", desc: "Advanced academic assistance, statistical analysis, and postgraduate research guidance.", icon: <Microscope size={32} />, href: "/academies/university" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Explore Programmes</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Find the perfect course or subject for your academic journey.</p>
        </div>
      </section>

      <section className="py-24 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 w-full">
        <div className="grid md:grid-cols-2 gap-8">
          {programmes.map((prog, i) => (
            <Link href={prog.href} key={i} className="group bg-white p-10 rounded-2xl shadow-sm border border-gray-200 hover:border-brand-royal hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-brand-royal/10 text-brand-royal p-4 rounded-xl">{prog.icon}</div>
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-brand-navy">{prog.title}</h2>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">{prog.level}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">{prog.desc}</p>
              </div>
              <div className="flex items-center gap-2 text-brand-royal font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                View Programmes <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}