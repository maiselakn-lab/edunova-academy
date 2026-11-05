import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { ArrowRight, BookOpen, CheckCircle2, UserCheck, Heart, Sparkles } from 'lucide-react';

export default function PrimaryAcademy() {
  const subjects = [
    "Mathematics", "English Home Language", "Afrikaans / isiZulu", 
    "Natural Sciences & Technology", "Social Sciences", "Life Skills"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      
      {/* Hero */}
      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <div className="max-w-3xl border-l-4 border-brand-gold pl-6 md:pl-8">
            <p className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4">Faculty of Primary Education</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">Primary Academy</h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Building strong foundations for lifelong learning. We provide a nurturing, structured, and engaging online environment for learners in Grades R to 7.
            </p>
            <Link href="/register" className="bg-brand-gold text-brand-navy px-8 py-4 rounded-sm font-bold text-lg hover:bg-yellow-500 transition-all inline-flex items-center gap-2 shadow-lg">
              Enrol Your Child <ArrowRight size={20} />
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
                Our primary curriculum is fully aligned with the South African CAPS curriculum, ensuring your child stays on track with their schoolwork while building confidence.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {subjects.map((subject, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <CheckCircle2 className="text-brand-teal shrink-0" size={20} />
                    <span className="font-semibold text-brand-charcoal">{subject}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-brand-royal/10 p-6 rounded-lg border border-brand-royal/20">
                <h4 className="font-bold text-brand-navy mb-2 flex items-center gap-2"><Sparkles size={18} className="text-brand-royal"/> AI Learning Support</h4>
                <p className="text-sm text-gray-700">Primary learners get safe, controlled access to our AI assistant for spelling, basic math, and reading comprehension practice.</p>
              </div>
            </div>
            
            {/* How We Teach */}
            <div className="bg-white p-10 rounded-xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-serif font-bold text-brand-navy mb-8">Our Teaching Approach</h3>
              <ul className="space-y-8">
                <li className="flex gap-5">
                  <div className="bg-brand-navy/5 p-3 rounded-lg text-brand-royal h-fit">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-brand-navy mb-1">Nurturing Environment</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Our tutors are trained to be patient, encouraging, and supportive, ensuring young learners never feel overwhelmed.</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="bg-brand-navy/5 p-3 rounded-lg text-brand-royal h-fit">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-brand-navy mb-1">Interactive Learning</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">We use digital whiteboards, educational games, and visual aids to make online lessons fun and engaging.</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="bg-brand-navy/5 p-3 rounded-lg text-brand-royal h-fit">
                    <UserCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-brand-navy mb-1">Parental Oversight</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Parents receive detailed progress reports after every lesson and can monitor all communications through the Parent Portal.</p>
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