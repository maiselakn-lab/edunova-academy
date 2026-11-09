import PublicNavbar from '@/components/layout/PublicNavbar';
import { Target, Users, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function Strategy() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Strategic Plan</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Our roadmap to transforming digital education in South Africa.</p>
        </div>
      </section>

      <section className="py-24 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-brand-grey p-10 rounded-2xl border border-gray-200">
            <Target className="text-brand-royal mb-6" size={40} />
            <h2 className="text-2xl font-bold text-brand-navy mb-4">Objective 1: Education</h2>
            <p className="text-gray-600 leading-relaxed">Provide accessible, quality, and personalised education through human tutors and AI-assisted learning, ensuring every learner has the support they need to succeed.</p>
          </div>
          <div className="bg-brand-grey p-10 rounded-2xl border border-gray-200">
            <Users className="text-brand-royal mb-6" size={40} />
            <h2 className="text-2xl font-bold text-brand-navy mb-4">Objective 2: Employment</h2>
            <p className="text-gray-600 leading-relaxed">Create a structured platform where graduates can apply, demonstrate competency, teach, and earn income, empowering the next generation of educators.</p>
          </div>
        </div>

        <div className="bg-brand-navy rounded-3xl p-10 md:p-16 text-white flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif font-bold text-white mb-6">The 2026-2030 Roadmap</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-brand-teal shrink-0 mt-1" size={24} />
                <div><h3 className="font-bold text-lg">Phase 1: National Launch</h3><p className="text-gray-300 text-sm mt-1">Establish a strong presence in all 9 provinces and partner with 50+ schools.</p></div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-brand-teal shrink-0 mt-1" size={24} />
                <div><h3 className="font-bold text-lg">Phase 2: AI Integration</h3><p className="text-gray-300 text-sm mt-1">Deploy advanced AI tutors for Mathematics and Science across all divisions.</p></div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-brand-teal shrink-0 mt-1" size={24} />
                <div><h3 className="font-bold text-lg">Phase 3: International Expansion</h3><p className="text-gray-300 text-sm mt-1">Expand our services to the broader African continent and international markets.</p></div>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Strategic Meeting" className="rounded-xl shadow-2xl" />
          </div>
        </div>
      </section>
    </div>
  );
}