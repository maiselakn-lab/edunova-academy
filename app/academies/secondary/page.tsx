import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { ArrowRight, CheckCircle2, Target, TrendingUp, UserCheck } from 'lucide-react';

export default function SecondaryAcademy() {
  const subjects = {
    languages: ["English Home Language", "English First Additional Language", "Afrikaans", "isiZulu", "isiXhosa", "Sepedi", "Sesotho", "Setswana", "Siswati", "Tshivenda", "Xitsonga", "isiNdebele"],
    sciences: ["Mathematics", "Mathematical Literacy", "Physical Sciences", "Life Sciences", "Agricultural Sciences"],
    commerce: ["Accounting", "Business Studies", "Economics"],
    humanities: ["Geography", "History", "Religious Studies"],
    technology: ["Information Technology", "Computer Applications Technology", "Engineering Graphics and Design"],
    arts: ["Visual Arts", "Dramatic Arts", "Music", "Design", "Dance Studies"],
    technical: ["Civil Technology", "Electrical Technology", "Mechanical Technology"],
    other: ["Consumer Studies", "Hospitality Studies", "Tourism", "Life Orientation"]
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      
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

      <section className="py-24 bg-brand-grey">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">Subjects Offered (Grades 10-12)</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">We cover the full spectrum of CAPS and IEB subjects, preparing learners for their final examinations.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(subjects).map(([category, list], i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold text-brand-navy mb-4 capitalize border-b border-gray-100 pb-2">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {list.map((sub, j) => (
                    <span key={j} className="bg-brand-grey text-gray-700 text-xs font-bold px-3 py-1.5 rounded-full border border-gray-200">{sub}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}