import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { CheckCircle2, ArrowRight, Award, ShieldCheck, UserCheck, Briefcase } from 'lucide-react';

export default function BecomeTutor() {
  const steps = [
    { title: "1. Apply Online", desc: "Submit your CV, qualifications, and subject specialisations.", icon: <UserCheck size={24} /> },
    { title: "2. Verification", desc: "Our HR team verifies your qualifications and eligibility.", icon: <ShieldCheck size={24} /> },
    { title: "3. Competency Assessment", desc: "Complete a subject-specific assessment to prove your knowledge.", icon: <Award size={24} /> },
    { title: "4. Teaching Demo", desc: "Conduct a short virtual teaching demonstration.", icon: <Briefcase size={24} /> },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      
      {/* Hero */}
      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <div className="max-w-3xl">
            <p className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4">Tutor Careers</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">Turn Your Knowledge Into Opportunity.</h1>
            <p className="text-xl text-gray-300 mb-8">
              Are you a graduate, qualified professional or subject specialist? Join Think EduNova Academy and become part of a growing network of educators dedicated to transforming lives through education.
            </p>
            <Link href="/become-a-tutor/apply" className="bg-brand-gold text-brand-navy px-8 py-4 rounded-sm font-bold text-lg hover:bg-yellow-500 transition-all inline-flex items-center gap-2 shadow-lg">
              Start Your Application <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-24 bg-brand-grey">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">Your Journey to EduNova</h2>
            <p className="text-lg text-gray-600">We maintain rigorous standards to ensure our students receive the best education.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center relative">
                <div className="w-16 h-16 bg-brand-navy text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">Why Teach With Us?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-brand-teal shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-brand-navy text-lg">Earn Competitive Income</h4>
                    <p className="text-gray-600">Set your availability and earn based on completed lessons and approved pricing rules.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-brand-teal shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-brand-navy text-lg">Flexible Schedule</h4>
                    <p className="text-gray-600">Teach from anywhere in the world. You control your timetable.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-brand-teal shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-brand-navy text-lg">World-Class Tools</h4>
                    <p className="text-gray-600">Access our virtual classroom, AI lesson planners, and integrated student management systems.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop" alt="Tutor teaching" className="rounded-xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}