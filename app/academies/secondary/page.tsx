import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { ArrowRight, BookOpen, CheckCircle2, UserCheck, Target, TrendingUp } from 'lucide-react';

export default function SecondaryAcademy() {
  const subjects = [
    "Mathematics", "Mathematical Literacy", "Physical Sciences", "Life Sciences",
    "Accounting", "Business Studies", "Economics", "Geography",
    "History", "English", "Afrikaans", "isiZulu"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      
      {/* Hero */}
      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2104&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <div className="max-w-3xl border-l-4 border-brand-gold pl-6 md:pl-8">
            <p className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4">Faculty of Secondary Education</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">Secondary Academy</h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Mastering the high school years. From Grade 8 to Matric, we provide rigorous academic support, exam preparation, and subject-specific tutoring.
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
              <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">Subjects & Curriculum</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our high school faculty covers the full spectrum of CAPS and IEB subjects, preparing learners for their final examinations and tertiary education.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {subjects.map((subject, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                    <CheckCircle2 className="text-brand-teal shrink-0" size={16} />
                    <span className="font-semibold text-sm text-brand-charcoal">{subject}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-brand-navy p-6 rounded-lg text-white">
                <h4 className="font-bold mb-2 flex items-center gap-2"><Target size={18} className="text-brand-gold"/> Matric Exam Preparation</h4>
                <p className="text-sm text-gray-300">Intensive revision courses, past paper walkthroughs, and exam techniques for Grade 12 learners.</p>
              </div>
            </div>
            
            {/* How We Teach */}
            <div className="bg-white p-10 rounded-xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-serif font-bold text-brand-navy mb-8">Our Teaching Approach</h3>
              <ul className="space-y-8">
                <li className="flex gap-5">
                  <div className="bg-brand-navy/5 p-3 rounded-lg text-brand-royal h-fit">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-brand-navy mb-1">Deep Subject Mastery</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Tutors break down complex concepts (like Calculus or Organic Chemistry) into digestible, step-by-step logic.</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="bg-brand-navy/5 p-3 rounded-lg text-brand-royal h-fit">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-brand-navy mb-1">Progress Tracking</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">We continuously assess understanding through quizzes and mini-tests to ensure learners are improving.</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="bg-brand-navy/5 p-3 rounded-lg text-brand-royal h-fit">
                    <UserCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-brand-navy mb-1">Exam Techniques</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">We teach learners how to manage their time, read questions properly, and structure answers to maximize marks.</p>
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