import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { BookOpen, CheckCircle2, ArrowRight, Heart, Sparkles, UserCheck } from 'lucide-react';

export default function PrimaryAcademy() {
  const foundationPhase = ["Mathematics", "Home Language", "First Additional Language", "Life Skills", "Beginning Knowledge", "Creative Arts"];
  const intermediatePhase = ["Mathematics", "Home Language", "First Additional Language", "Natural Sciences & Technology", "Social Sciences", "Life Skills"];
  const seniorPhase = ["Mathematics", "Natural Sciences", "Technology", "Social Sciences", "EMS", "Life Orientation", "Creative Arts", "Languages"];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      
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

      <section className="py-24 bg-brand-grey">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">Curriculum & Subjects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Fully aligned with the South African CAPS curriculum, ensuring your child stays on track with their schoolwork.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-brand-navy mb-6 border-b border-gray-100 pb-3">Foundation Phase (Grades R-3)</h3>
              <div className="grid grid-cols-2 gap-3">
                {foundationPhase.map((sub, i) => (
                  <div key={i} className="flex items-center gap-2"><CheckCircle2 className="text-brand-teal shrink-0" size={16} /><span className="text-sm font-medium text-gray-700">{sub}</span></div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-brand-navy mb-6 border-b border-gray-100 pb-3">Intermediate Phase (Grades 4-6)</h3>
              <div className="grid grid-cols-2 gap-3">
                {intermediatePhase.map((sub, i) => (
                  <div key={i} className="flex items-center gap-2"><CheckCircle2 className="text-brand-teal shrink-0" size={16} /><span className="text-sm font-medium text-gray-700">{sub}</span></div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 mb-12">
            <h3 className="text-xl font-bold text-brand-navy mb-6 border-b border-gray-100 pb-3">Senior Phase (Grade 7)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {seniorPhase.map((sub, i) => (
                <div key={i} className="flex items-center gap-2"><CheckCircle2 className="text-brand-teal shrink-0" size={16} /><span className="text-sm font-medium text-gray-700">{sub}</span></div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-brand-navy text-white p-6 rounded-xl">
              <Heart className="text-brand-gold mb-4" size={24}/>
              <h4 className="font-bold text-lg mb-2 text-white">Nurturing Environment</h4>
              <p className="text-sm text-gray-300">Tutors trained to be patient and encouraging.</p>
            </div>
            <div className="bg-brand-navy text-white p-6 rounded-xl">
              <Sparkles className="text-brand-gold mb-4" size={24}/>
              <h4 className="font-bold text-lg mb-2 text-white">Interactive Learning</h4>
              <p className="text-sm text-gray-300">Digital whiteboards and educational games.</p>
            </div>
            <div className="bg-brand-navy text-white p-6 rounded-xl">
              <UserCheck className="text-brand-gold mb-4" size={24}/>
              <h4 className="font-bold text-lg mb-2 text-white">Parental Oversight</h4>
              <p className="text-sm text-gray-300">Detailed progress reports after every lesson.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}