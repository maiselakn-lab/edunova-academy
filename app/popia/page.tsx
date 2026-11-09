import PublicNavbar from '@/components/layout/PublicNavbar';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

export default function POPIA() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">POPIA & Privacy</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Protecting your personal information in accordance with South African law.</p>
        </div>
      </section>

      <section className="py-24 max-w-[1000px] mx-auto px-6 sm:px-12 lg:px-16 w-full">
        <div className="prose prose-lg text-gray-600 max-w-none">
          
          <div className="bg-brand-grey p-8 rounded-xl border border-gray-200 mb-12 flex items-start gap-4">
            <ShieldCheck className="text-brand-teal shrink-0 mt-1" size={32} />
            <div>
              <h3 className="text-brand-navy font-bold m-0">Our Commitment to Privacy</h3>
              <p className="mb-0">Think EduNova Academy is fully committed to compliance with the Protection of Personal Information Act (POPIA) of South Africa. We ensure that all data regarding parents, learners, and tutors is securely stored and processed lawfully.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-4 flex items-center gap-2"><Lock size={24}/> 1. What Information Do We Collect?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Information:</strong> Names, ID numbers, contact details, and addresses.</li>
            <li><strong>Academic Information:</strong> Grades, school records, assessment results, and tutor feedback.</li>
            <li><strong>Financial Information:</strong> Payment history and billing details (note: we do not store credit card numbers on our servers).</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-4 flex items-center gap-2"><Eye size={24}/> 2. How We Use Your Information</h2>
          <p>We process your information to provide our educational services, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Matching learners with qualified tutors.</li>
            <li>Tracking academic progress and generating reports.</li>
            <li>Processing payments and managing billing.</li>
            <li>Communicating important updates and safeguarding alerts.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-4 flex items-center gap-2"><FileText size={24}/> 3. Safeguarding of Minors</h2>
          <p>Because we serve learners under the age of 18, we apply strict safeguarding protocols. Parents or guardians must consent to the processing of their child's information. Communication between tutors and minors is monitored and recorded to ensure safety.</p>

          <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-4">4. Your Rights</h2>
          <p>Under POPIA, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request access to the personal information we hold about you.</li>
            <li>Request corrections to inaccurate information.</li>
            <li>Request the deletion of your information (subject to legal retention requirements).</li>
            <li>Withdraw consent for processing.</li>
          </ul>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="font-bold text-brand-navy">If you have any concerns regarding your data privacy, please contact our Information Officer at: <a href="mailto:privacy@thinkedunova.co.za" className="text-brand-royal underline">privacy@thinkedunova.co.za</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}