import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { ArrowRight, CheckCircle2, UserCheck, Wrench, Cpu, Presentation } from 'lucide-react';

export default function CollegeAcademy() {
  const subjects = [
    "Engineering Fundamentals", "Electrical Engineering", "Mechanical Engineering",
    "Mathematics (N1 - N6)", "Programming & Coding", "Computer Literacy",
    "Business Management", "Technical Drawing"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      
      {/* Hero */}
      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <div className="max-w-3xl border-l-4 border-brand-gold pl-6 md:pl-8">
            <p className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4">College & TVET Faculty</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">College & TVET Academy</h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Building the technical and vocational skills for the future workforce. Support for NATED, NCV, and specialised college modules.
            </p>
            <Link href="/register" className="bg-brand-gold text-brand-navy px-8 py-4 rounded-sm font-bold text-lg hover:bg-yellow-500 transition-all inline-flex items-center gap-2 shadow-lg">
              Enrol Now <ArrowRight size={20} />
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
              <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">Subjects & Modules</h2>
              <p className="text-lg text-gray-600 mb-8">
                We provide specialised tutoring for technical, vocational, and engineering subjects, helping students pass their trade tests and college exams.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {subjects.map((subject, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                    <CheckCircle2 className="text-brand-teal shrink-0" size={16} />
                    <span className="font-semibold text-sm text-brand-charcoal">{subject}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-brand-royal/10 p-6 rounded-lg border border-brand-royal/20">
                <h4 className="font-bold text-brand-navy mb-2 flex items-center gap-2"><Cpu size={18} className="text-brand-royal"/> Tech & Engineering Focus</h4>
                <p className="text-sm text-gray-700">Our tutors are industry professionals and engineering graduates who understand the practical application of these subjects.</p>
              </div>
            </div>
            
            {/* How We Teach */}
            <div className="bg-white p-10 rounded-xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-serif font-bold text-brand-navy mb-8">Our Teaching Approach</h3>
              <ul className="space-y-8">
                <li className="flex gap-5">
                  <div className="bg-brand-navy/5 p-3 rounded-lg text-brand-royal h-fit">
                    <Wrench size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-brand-navy mb-1">Practical Application</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">We focus on problem-solving and real-world application of technical concepts, not just theory.</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="bg-brand-navy/5 p-3 rounded-lg text-brand-royal h-fit">
                    <Presentation size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-brand-navy mb-1">Exam & Trade Test Prep</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Targeted preparation for NATED exams and trade tests, including practical simulations and past papers.</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="bg-brand-navy/5 p-3 rounded-lg text-brand-royal h-fit">
                    <UserCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-brand-navy mb-1">Industry Mentorship</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Tutors provide guidance on career pathways, apprenticeships, and opportunities in the technical sector.</p>
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