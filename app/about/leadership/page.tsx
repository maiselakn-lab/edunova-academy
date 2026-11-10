import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { Mail, Globe, Quote, Briefcase, ArrowRight, UserPlus } from 'lucide-react';

export default function Leadership() {
  const vacantRoles = [
    {
      title: "Academic Director",
      desc: "Oversee curriculum design, academic quality assurance, and tutor competency assessments.",
      icon: <Briefcase size={24} />,
      link: "/contact"
    },
    {
      title: "Chief Technology Officer",
      desc: "Drive the technical vision of the platform, overseeing the AcadCoreOS integration and AI systems.",
      icon: <Briefcase size={24} />,
      link: "/careers/software-engineer"
    },
    {
      title: "Head of Institutional Partnerships",
      desc: "Build relationships with schools, colleges, and universities to expand our B2B footprint.",
      icon: <Briefcase size={24} />,
      link: "/contact"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      
      {/* Hero Section */}
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Our Leadership</h1>
          <p className="text-xl text-gray-300 max-w-3xl">The team guiding the strategic vision of the academy.</p>
        </div>
      </section>

      {/* Founder Section (Featured) */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 w-full">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row relative">
          
          {/* Founder Image */}
          <div className="lg:w-5/12 relative min-h-[500px]">
            <img 
              src="/founder.png" 
              alt="Maisela Kholofelo Norman" 
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* Premium Overlay Text on the Image */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#0B132B] via-[#0B132B]/80 to-transparent pt-20 pb-6 px-6">
               <div className="border-l-4 border-brand-gold pl-4">
                  <h3 className="text-white font-bold text-xl">Maisela Kholofelo Norman</h3>
                  <p className="text-brand-gold text-sm font-bold">Founder & Strategic Director</p>
               </div>
            </div>
          </div>

          {/* Founder Message */}
          <div className="lg:w-7/12 p-10 lg:p-16 flex flex-col justify-center relative">
            <Quote className="absolute top-10 right-10 text-gray-50" size={140} />
            
            <div className="relative z-10">
              <p className="text-brand-royal font-bold tracking-widest uppercase text-sm mb-2">A Message from the Founder</p>
              
              <div className="prose prose-lg text-gray-600 mb-8 mt-6">
                <p className="mb-4">
                  "I founded Think EduNova Academy because I believe education has the power to change individual lives, strengthen communities and contribute to the development of society.
                </p>
                <p className="mb-4">
                  My academic and professional journey has taught me the importance of knowledge, innovation, discipline and continuous development. I want to bring these principles into an education platform that does more than deliver lessons.
                </p>
                <p className="mb-4">
                  Our ambition is to create an environment where learners can access quality academic support, educators can share their expertise, graduates can find meaningful opportunities and institutions can benefit from modern educational technology.
                </p>
                <p className="font-bold text-brand-navy">
                  Think EduNova Academy represents a long-term commitment to developing people, unlocking potential and transforming the future of education."
                </p>
              </div>

              <div className="flex gap-3">
                <a href="mailto:founder@thinkedunova.co.za" className="w-12 h-12 bg-brand-grey rounded-full flex items-center justify-center text-brand-navy hover:bg-brand-royal hover:text-white transition-colors">
                  <Mail size={20}/>
                </a>
                <a href="#" className="w-12 h-12 bg-brand-grey rounded-full flex items-center justify-center text-brand-navy hover:bg-brand-royal hover:text-white transition-colors">
                  <Globe size={20}/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vacant Positions / Join the Team */}
      <section className="pb-24 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-brand-navy">Join Our Leadership Team</h2>
          <p className="text-gray-600 mt-2">We are actively recruiting for key positions to help scale the academy.</p>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {vacantRoles.map((role, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand-grey rounded-full flex items-center justify-center text-brand-royal mb-6">
                {role.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">{role.title}</h3>
              <span className="bg-brand-gold/20 text-brand-gold text-xs font-bold px-3 py-1 rounded-full mb-4">Position Vacant</span>
              <p className="text-gray-600 text-sm mb-6 flex-grow">{role.desc}</p>
              <Link href={role.link} className="text-brand-royal font-bold text-sm uppercase tracking-wider hover:underline flex items-center gap-2">
                Apply Now <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-brand-navy rounded-2xl p-8 text-center text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-2xl font-serif font-bold mb-2">Don't see a role for you?</h3>
            <p className="text-gray-300">We are always looking for passionate educators and professionals to join our team.</p>
          </div>
          <Link href="/become-a-tutor" className="bg-brand-gold text-brand-navy px-8 py-4 rounded-sm font-bold hover:bg-yellow-500 transition-colors flex items-center gap-2 whitespace-nowrap">
            <UserPlus size={20} /> View All Careers
          </Link>
        </div>
      </section>
    </div>
  );
}