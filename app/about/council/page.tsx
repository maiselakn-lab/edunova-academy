import PublicNavbar from '@/components/layout/PublicNavbar';
import { ShieldCheck, BookOpen, CheckCircle2, UserPlus } from 'lucide-react';
import Link from 'next/link';

export default function Council() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Academic Council</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Overseeing the quality and integrity of our curriculum.</p>
        </div>
      </section>

      <section className="py-24 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 w-full">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4">Our Mandate</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Academic Council is the highest academic authority within Think EduNova Academy. We are responsible for maintaining the rigorous standards of our tutoring, verifying the qualifications of all faculty members, and ensuring that every curriculum aligns with national CAPS, IEB, and NQF standards.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every tutor who joins the academy must pass our Council-approved competency assessments before they are permitted to teach.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h2 className="text-2xl font-serif font-bold text-brand-navy mb-6">Core Responsibilities</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="text-brand-teal shrink-0 mt-1" size={20} />
                  <div><h4 className="font-bold text-brand-navy">Quality Assurance</h4><p className="text-sm text-gray-600">Auditing lesson reports and tutor performance to ensure academic excellence.</p></div>
                </li>
                <li className="flex items-start gap-3">
                  <BookOpen className="text-brand-royal shrink-0 mt-1" size={20} />
                  <div><h4 className="font-bold text-brand-navy">Curriculum Design</h4><p className="text-sm text-gray-600">Developing and updating learning materials to match the latest educational standards.</p></div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={20} />
                  <div><h4 className="font-bold text-brand-navy">Tutor Vetting</h4><p className="text-sm text-gray-600">Reviewing competency assessment results and approving final tutor appointments.</p></div>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-brand-navy text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-8 -mt-8"></div>
              <h3 className="text-xl font-bold mb-4 relative z-10">Council Members</h3>
              <p className="text-sm text-gray-300 mb-6 relative z-10">The Council is currently being constituted. We are actively recruiting experienced academics to fill these roles.</p>
              
              <div className="space-y-4 relative z-10">
                <div className="bg-white/10 p-4 rounded-lg border border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-gold text-brand-navy rounded-full flex items-center justify-center font-bold">A</div>
                  <div><p className="font-bold text-sm">Academic Director</p><p className="text-xs text-brand-gold">Position Vacant</p></div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg border border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-gold text-brand-navy rounded-full flex items-center justify-center font-bold">S</div>
                  <div><p className="font-bold text-sm">Subject Specialists</p><p className="text-xs text-brand-gold">Multiple Vacancies</p></div>
                </div>
              </div>

              <Link href="/become-a-tutor" className="mt-8 w-full block text-center bg-brand-gold text-brand-navy font-bold py-3 rounded-lg hover:bg-yellow-500 transition-colors relative z-10">
                Apply to Join
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}