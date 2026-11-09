import PublicNavbar from '@/components/layout/PublicNavbar';
import { Calendar } from 'lucide-react';

export default function History() {
  const timeline = [
    { year: "2024", title: "The Concept", desc: "Think EduNova was conceptualized to bridge the gap between school learners, university students, and qualified tutors across South Africa." },
    { year: "2025", title: "Platform Development", desc: "Development began on the integrated platform, combining the AcadCoreOS management system with a state-of-the-art online learning environment." },
    { year: "2026", title: "Official Launch", desc: "Opening admissions for Primary, Secondary, College, and University academies, alongside our institutional partnerships." },
    { year: "2027", title: "National Expansion", desc: "Targeting partnerships with 50+ schools and reaching 10,000 active learners across all 9 provinces." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Our History</h1>
          <p className="text-xl text-gray-300 max-w-3xl">The journey of building a premier digital institution.</p>
        </div>
      </section>

      <section className="py-24 max-w-[1000px] mx-auto px-6 sm:px-12 lg:px-16 w-full">
        <div className="space-y-12 border-l-4 border-brand-gold pl-8 ml-4">
          {timeline.map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-12 top-1 w-8 h-8 bg-brand-navy rounded-full border-4 border-white flex items-center justify-center text-white">
                <Calendar size={14} />
              </div>
              <span className="text-brand-royal font-bold text-sm tracking-widest uppercase">{item.year}</span>
              <h3 className="text-2xl font-serif font-bold text-brand-navy mt-1 mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}