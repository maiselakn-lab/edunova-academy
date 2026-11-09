import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { ArrowRight, Laptop, Megaphone, Video, Heart, CheckCircle2 } from 'lucide-react';

export default function Jobs() {
  const positions = [
    {
      title: "Software Engineers",
      type: "Full-Time",
      desc: "Developers to help us scale the Next.js frontend and FastAPI backend.",
      icon: <Laptop size={28} />,
      color: "text-brand-sky"
    },
    {
      title: "Content Creators",
      type: "Freelance",
      desc: "Writers, videographers, and designers to build our digital curriculum.",
      icon: <Video size={28} />,
      color: "text-brand-gold"
    },
    {
      title: "Marketing Ambassadors",
      type: "Commission-Based",
      desc: "Drive student enrolments on campuses and in schools across South Africa.",
      icon: <Megaphone size={28} />,
      color: "text-brand-teal"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      
      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <div className="max-w-3xl">
            <p className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4">Join Our Team</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">Build the Future of Education With Us.</h1>
            <p className="text-xl text-gray-200 mb-8">
              We are looking for passionate engineers, creators, and volunteers to help us transform the educational landscape in South Africa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-grey">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600">Help us build the #1 digital academy in Africa.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {positions.map((role, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow flex flex-col items-start gap-6">
                <div className={`bg-brand-grey p-4 rounded-xl ${role.color}`}>
                  {role.icon}
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-serif font-bold text-brand-navy">{role.title}</h3>
                  </div>
                  <span className="bg-brand-grey text-gray-600 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">{role.type}</span>
                  <p className="text-gray-600 mb-6">{role.desc}</p>
                  <Link href="/contact" className="text-brand-royal font-bold text-sm uppercase tracking-wider hover:underline flex items-center gap-2">
                    Apply Now <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Volunteer Section */}
          <div className="mt-16 bg-brand-navy rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 flex flex-col justify-center">
              <Heart className="text-brand-gold mb-6" size={48} />
              <h2 className="text-3xl font-serif font-bold text-white mb-4">Volunteer With Us</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Not looking for a full-time role, but want to make a difference? We need volunteers to help with tutoring underprivileged learners, moderating community forums, and assisting with research projects.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-200"><CheckCircle2 className="text-brand-teal" size={20}/> Flexible hours</li>
                <li className="flex items-center gap-3 text-gray-200"><CheckCircle2 className="text-brand-teal" size={20}/> Receive a certificate of service</li>
              </ul>
              <Link href="/contact" className="bg-brand-gold text-brand-navy px-8 py-4 rounded-sm font-bold text-lg hover:bg-yellow-500 transition-all inline-flex items-center gap-2 shadow-lg w-fit">
                Apply to Volunteer <ArrowRight size={20} />
              </Link>
            </div>
            <div className="lg:w-1/2 relative min-h-[300px]">
              <img src="https://images.unsplash.com/photo-1593113589914-07599018dd2a?q=80&w=2070&auto=format&fit=crop" alt="Volunteers" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}