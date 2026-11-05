import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { ArrowRight, BookOpen, CheckCircle2, UserCheck } from 'lucide-react';

export default function PrimaryAcademy() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      
      {/* Faculty Hero */}
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="max-w-3xl">
            <p className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4">Faculty of Primary Education</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">Primary Academy</h1>
            <p className="text-xl text-gray-300 mb-8">
              Foundational education focusing on literacy, numeracy, and core academic development for young learners (Grades R-7).
            </p>
            <Link href="/register" className="bg-brand-gold text-brand-navy px-8 py-4 rounded-sm font-bold text-lg hover:bg-yellow-500 transition-all inline-flex items-center gap-2 shadow-lg">
              Enrol Your Child <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Subjects & Curriculum */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">Subjects & Curriculum</h2>
              <p className="text-lg text-gray-600 mb-8">Our primary curriculum is designed to build a strong foundation for lifelong learning, aligned with the South African CAPS curriculum.</p>
              
              <div className="grid grid-cols-2 gap-4">
                {["Mathematics", "English Home Language", "Afrikaans / isiZulu", "Natural Sciences & Technology", "Social Sciences", "Life Skills"].map((subject, i) => (
                  <div key={i} className="flex items-center gap-3 bg-brand-grey p-4 rounded-lg border border-gray-200">
                    <CheckCircle2 className="text-brand-teal shrink-0" size={20} />
                    <span className="font-semibold text-brand-charcoal">{subject}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-brand-navy p-10 rounded-xl text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-royal/20 rounded-bl-full -mr-8 -mt-8"></div>
              <h3 className="text-2xl font-serif font-bold mb-6 relative z-10">How We Teach</h3>
              <ul className="space-y-6 relative z-10">
                <li className="flex gap-4">
                  <BookOpen className="text-brand-gold shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-lg">Interactive Lessons</h4>
                    <p className="text-gray-300 text-sm mt-1">Using digital whiteboards and multimedia to keep young minds engaged.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <UserCheck className="text-brand-gold shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-lg">Verified Tutors</h4>
                    <p className="text-gray-300 text-sm mt-1">All tutors are vetted, patient, and specifically trained for foundational phases.</p>
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