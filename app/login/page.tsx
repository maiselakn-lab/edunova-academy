import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { Users, GraduationCap, Presentation, ShieldCheck, ArrowRight } from 'lucide-react';

export default function LoginGateway() {
  const portals = [
    { title: "Student Portal", desc: "Access classes, assessments, and the AI assistant.", icon: <GraduationCap size={32} />, href: "/login/student", color: "border-brand-royal hover:bg-brand-royal" },
    { title: "Parent Portal", desc: "Monitor your child's progress and manage payments.", icon: <Users size={32} />, href: "/login/parent", color: "border-brand-navy hover:bg-brand-navy" },
    { title: "Tutor Portal", desc: "Manage your schedule, students, and earnings.", icon: <Presentation size={32} />, href: "/login/tutor", color: "border-brand-teal hover:bg-brand-teal" },
    { title: "Admin Portal", desc: "Institutional management and AcadCoreOS integration.", icon: <ShieldCheck size={32} />, href: "/login/admin", color: "border-brand-charcoal hover:bg-brand-charcoal" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      
      <main className="flex-grow flex items-center justify-center py-20 px-6">
        <div className="max-w-5xl w-full">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-4">Secure Login</h1>
            <p className="text-lg text-gray-600">Select your portal to continue to your dashboard.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {portals.map((portal, index) => (
              <Link 
                key={index} 
                href={portal.href}
                className={`group bg-white border-2 p-8 rounded-xl transition-all duration-300 flex flex-col items-start ${portal.color}`}
              >
                <div className="text-brand-navy group-hover:text-white transition-colors mb-6">
                  {portal.icon}
                </div>
                <h2 className="text-2xl font-bold text-brand-navy group-hover:text-white transition-colors mb-2">{portal.title}</h2>
                <p className="text-gray-500 group-hover:text-gray-100 transition-colors mb-8">{portal.desc}</p>
                <div className="mt-auto flex items-center gap-2 text-sm font-bold text-brand-royal group-hover:text-white transition-colors uppercase tracking-wider">
                  Login Now <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Don't have an account? <Link href="/register" className="text-brand-royal font-bold hover:underline">Apply for Admission</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}