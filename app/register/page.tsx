import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { Users, GraduationCap, UserPlus, ArrowRight } from 'lucide-react';

export default function RegisterGateway() {
  const roles = [
    { title: "Parent / Guardian", desc: "Register to monitor your child's academic progress, book lessons, and communicate with tutors.", icon: <Users size={32} />, href: "/register/parent", color: "text-brand-navy" },
    { title: "Student (Learner)", desc: "Access your courses, join live virtual classrooms, complete assessments, and use the AI learning assistant.", icon: <GraduationCap size={32} />, href: "/register/student", color: "text-brand-royal" },
    { title: "Tutor Applicant", desc: "Apply to join our faculty. Upload your qualifications, undergo competency assessments, and teach online.", icon: <UserPlus size={32} />, href: "/become-a-tutor", color: "text-brand-gold" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      
      <main className="flex-grow py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-4">Admissions & Registration</h1>
            <p className="text-lg text-gray-600">Select the account type you wish to create to begin your journey with Think EduNova Academy.</p>
          </div>

          <div className="space-y-4">
            {roles.map((role, index) => (
              <Link 
                key={index} 
                href={role.href}
                className="group block bg-white p-6 md:p-8 rounded-xl border border-gray-200 hover:border-brand-royal hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex items-start gap-6">
                    <div className={`p-4 bg-brand-grey rounded-full ${role.color} group-hover:bg-white transition-colors`}>
                      {role.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-brand-navy mb-2">{role.title}</h2>
                      <p className="text-gray-600 max-w-xl leading-relaxed">{role.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-brand-grey group-hover:bg-brand-royal group-hover:text-white transition-colors shrink-0">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Already have an account? <Link href="/login" className="text-brand-royal font-bold hover:underline">Log in here</Link>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}