import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { Users, GraduationCap, ArrowRight, User } from 'lucide-react';

export default function Register() {
  const roles = [
    {
      title: "Parent / Guardian",
      description: "Register to monitor your child's academic progress, manage lesson bookings, and communicate with tutors.",
      icon: <Users size={32} className="text-brand-royal" />,
      href: "/register/parent",
      color: "border-brand-royal/30 hover:border-brand-royal"
    },
    {
      title: "Student (Learner)",
      description: "Access your courses, join live virtual classrooms, complete assessments, and use the AI learning assistant.",
      icon: <GraduationCap size={32} className="text-brand-sky" />,
      href: "/register/student",
      color: "border-brand-sky/30 hover:border-brand-sky"
    },
    {
      title: "Tutor Applicant",
      description: "Apply to join our faculty. Upload your qualifications, undergo competency assessments, and teach online.",
      icon: <User size={32} className="text-brand-gold" />,
      href: "/become-a-tutor",
      color: "border-brand-gold/30 hover:border-brand-gold"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      
      <main className="flex-grow py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-navy mb-4">Admissions & Registration</h1>
            <p className="text-lg text-gray-600">Select the account type you wish to create to begin your journey with Think EduNova Academy.</p>
          </div>

          <div className="space-y-4">
            {roles.map((role, index) => (
              <Link 
                key={index} 
                href={role.href}
                className={`block bg-white p-6 md:p-8 rounded-lg border-2 transition-all shadow-sm hover:shadow-md ${role.color} group`}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-brand-grey rounded-full">
                      {role.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-brand-navy mb-2">{role.title}</h2>
                      <p className="text-gray-600 max-w-xl">{role.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-brand-grey group-hover:bg-brand-navy group-hover:text-white transition-colors">
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