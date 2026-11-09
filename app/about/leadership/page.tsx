import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { ArrowRight, Mail, Globe, Users } from 'lucide-react';

export default function Leadership() {
  const executives = [
    { 
      name: "Dr. Sipho Ndlovu", 
      role: "Chief Executive Officer", 
      bio: "Over 20 years of experience in educational leadership and digital transformation across Africa.", 
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" 
    },
    { 
      name: "Prof. Thandi Mokoena", 
      role: "Academic Director", 
      bio: "Former Dean of Education at a leading South African university. Expert in CAPS and IEB curriculum design.", 
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" 
    },
    { 
      name: "Mr. Johan van der Merwe", 
      role: "Chief Technology Officer", 
      bio: "Architect of the AcadCoreOS ecosystem and driving force behind EduNova's AI integration.", 
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" 
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Executive Management</h1>
          <p className="text-xl text-gray-300 max-w-3xl">The team guiding the strategic vision of the academy.</p>
        </div>
      </section>

      <section className="py-24 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 w-full">
        <div className="grid md:grid-cols-3 gap-8">
          {executives.map((exec, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img 
                  src={exec.img} 
                  alt={exec.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-serif font-bold text-brand-navy mb-1">{exec.name}</h3>
                <p className="text-brand-royal font-bold text-sm uppercase tracking-wider mb-4">{exec.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{exec.bio}</p>
                <div className="flex justify-center gap-3">
                  <a href="#" className="w-10 h-10 bg-brand-grey rounded-full flex items-center justify-center text-brand-navy hover:bg-brand-royal hover:text-white transition-colors">
                    <Mail size={18}/>
                  </a>
                  <a href="#" className="w-10 h-10 bg-brand-grey rounded-full flex items-center justify-center text-brand-navy hover:bg-brand-royal hover:text-white transition-colors">
                    <Globe size={18}/>
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