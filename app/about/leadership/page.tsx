import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { Mail, Globe, Quote, Briefcase, Award } from 'lucide-react';

export default function Leadership() {
  const executives = [
    { 
      name: "Prof. Thandi Mokoena", 
      role: "Academic Director", 
      bio: "Former Dean of Education at a leading South African university. Expert in CAPS and IEB curriculum design.", 
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      name: "Mr. Johan van der Merwe", 
      role: "Chief Technology Officer", 
      bio: "Architect of the AcadCoreOS ecosystem and driving force behind EduNova's AI integration.", 
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      name: "Mrs. Sarah Ndlovu", 
      role: "Head of Institutional Partnerships", 
      bio: "Over 15 years of experience in B2B educational partnerships and school management across South Africa.", 
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" 
    },
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

      {/* Executive Team */}
      <section className="pb-24 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-brand-navy">Executive Management</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {executives.map((exec, i) => (
            <div key={i} className="bg-brand-navy rounded-2xl shadow-lg border border-brand-navyLight overflow-hidden group">
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={exec.img} 
                  alt={exec.name} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-serif font-bold text-white mb-1">{exec.name}</h3>
                <p className="text-brand-gold font-bold text-xs uppercase tracking-wider mb-4">{exec.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">{exec.bio}</p>
                <div className="flex justify-center gap-3">
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-brand-royal hover:text-white transition-colors">
                    <Mail size={16}/>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-brand-royal hover:text-white transition-colors">
                    <Globe size={16}/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}