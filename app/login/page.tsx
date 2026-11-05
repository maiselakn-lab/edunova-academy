import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { Users, GraduationCap, Presentation, ShieldCheck } from 'lucide-react';

export default function Login() {
  const portals = [
    { title: "Student Portal", icon: <GraduationCap size={24} />, href: "/login/student", color: "bg-brand-royal hover:bg-blue-700" },
    { title: "Parent Portal", icon: <Users size={24} />, href: "/login/parent", color: "bg-brand-navy hover:bg-brand-navyLight" },
    { title: "Tutor Portal", icon: <Presentation size={24} />, href: "/login/tutor", color: "bg-brand-teal hover:bg-teal-700" },
    { title: "Admin Portal", icon: <ShieldCheck size={24} />, href: "/login/admin", color: "bg-brand-charcoal hover:bg-gray-800" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      
      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          
          {/* Left Side: Branding */}
          <div className="bg-brand-navy text-white p-12 md:w-1/2 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Welcome Back.</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Access your dedicated portal to continue your academic journey, manage your lessons, or oversee the institution.
              </p>
              <div className="space-y-3 text-sm text-brand-sky">
                <p>✓ Secure, role-based access control</p>
                <p>✓ POPIA compliant data protection</p>
                <p>✓ Integrated AcadCoreOS syncing</p>
              </div>
            </div>
          </div>

          {/* Right Side: Portal Selection */}
          <div className="p-12 md:w-1/2 bg-white">
            <h3 className="text-2xl font-bold text-brand-navy mb-2">Select Your Portal</h3>
            <p className="text-gray-500 mb-8 text-sm">Choose the environment you want to log into.</p>
            
            <div className="space-y-4">
              {portals.map((portal, index) => (
                <Link 
                  key={index} 
                  href={portal.href}
                  className={`flex items-center gap-4 w-full p-4 rounded-lg text-white font-medium transition-colors ${portal.color}`}
                >
                  {portal.icon}
                  {portal.title}
                </Link>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account? <Link href="/register" className="text-brand-royal font-bold hover:underline">Apply for Admission</Link>
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}