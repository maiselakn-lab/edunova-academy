import PublicNavbar from '@/components/layout/PublicNavbar';
import { FileText, AlertTriangle, Scale, Users } from 'lucide-react';

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Terms of Use</h1>
          <p className="text-xl text-gray-300 max-w-3xl">The rules and guidelines for using Think EduNova Academy.</p>
        </div>
      </section>

      <section className="py-24 max-w-[1000px] mx-auto px-6 sm:px-12 lg:px-16 w-full">
        <div className="prose prose-lg text-gray-600 max-w-none">
          
          <div className="bg-brand-grey p-8 rounded-xl border border-gray-200 mb-12 flex items-start gap-4">
            <Scale className="text-brand-royal shrink-0 mt-1" size={32} />
            <div>
              <h3 className="text-brand-navy font-bold m-0">Agreement to Terms</h3>
              <p className="mb-0">By accessing or using Think EduNova Academy, you agree to be bound by these Terms of Use and our Privacy Policy.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-4 flex items-center gap-2"><FileText size={24}/> 1. Use of the Platform</h2>
          <p>You agree to use the platform only for lawful purposes and in accordance with these Terms. You must not:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the platform in any way that violates applicable laws or regulations.</li>
            <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the platform.</li>
            <li>Attempt to gain unauthorized access to the platform or its related systems.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-4 flex items-center gap-2"><Users size={24}/> 2. User Accounts</h2>
          <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>

          <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-4 flex items-center gap-2"><AlertTriangle size={24}/> 3. Academic Integrity</h2>
          <p>We are committed to academic integrity. You agree not to use the platform to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Plagiarize or submit work that is not your own.</li>
            <li>Request that tutors complete assignments on your behalf.</li>
            <li>Share copyrighted materials without permission.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-4">4. Payments and Refunds</h2>
          <p>All payments are processed securely through our payment partners. Refund policies are outlined during the booking process and are subject to our discretion.</p>

          <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-4">5. Termination</h2>
          <p>We reserve the right to suspend or terminate your account if you violate these Terms or engage in conduct that we deem harmful to the platform or its users.</p>
        </div>
      </section>
    </div>
  );
}