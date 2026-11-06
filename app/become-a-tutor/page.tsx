import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { ArrowRight, UserPlus, CheckCircle2, ShieldCheck, Award, Presentation, Briefcase } from 'lucide-react';

export default function BecomeTutor() {
  const steps = [
    { step: "01", title: "Online Application", desc: "Submit your CV, qualifications, transcripts, and subject specialisations.", icon: <UserPlus size={24} /> },
    { step: "02", title: "Qualification Verification", desc: "Our HR team verifies your academic credentials and ID.", icon: <ShieldCheck size={24} /> },
    { step: "03", title: "Competency Assessment", desc: "Complete a rigorous subject-specific assessment to prove your knowledge.", icon: <Award size={24} /> },
    { step: "04", title: "Teaching Demonstration", desc: "Conduct a short virtual teaching demonstration with our academic panel.", icon: <Presentation size={24} /> },
    { step: "05", title: "Appointment & Onboarding", desc: "Receive your contract, set your rate, and activate your tutor dashboard.", icon: <Briefcase size={24} /> },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      
      {/* Hero */}
      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <div className="max-w-3xl">
            <p className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4">Join Our Faculty</p>
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

      {/* Recruitment Process */}
      <section className="py-24 bg-brand-grey">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">Our 5-Step Recruitment Process</h2>
            <p className="text-lg text-gray-600">We maintain rigorous standards to ensure our students receive world-class instruction.</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 relative group hover:border-brand-royal transition-colors">
                <div className="text-4xl font-serif font-bold text-gray-100 absolute top-4 right-4 group-hover:text-brand-royal/10 transition-colors">{step.step}</div>
                <div className="w-12 h-12 bg-brand-navy/5 text-brand-royal rounded-lg flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2 relative z-10">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-8">Why Teach With EduNova?</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <CheckCircle2 className="text-brand-teal shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-brand-navy text-lg">Competitive Earnings</h4>
                  <p className="text-gray-600">Earn a competitive rate per lesson. Rates are transparently set and approved before you start.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="text-brand-teal shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-brand-navy text-lg">Flexible Scheduling</h4>
                  <p className="text-gray-600">Teach from anywhere in South Africa. You control your availability and timetable.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="text-brand-teal shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-brand-navy text-lg">World-Class Technology</h4>
                  <p className="text-gray-600">Use our integrated virtual classroom, AI lesson planners, and automated earnings tracker.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop" alt="Tutor teaching" className="rounded-2xl shadow-2xl" />
          </div>
        </div>
      </section>
    </div>
  );
}