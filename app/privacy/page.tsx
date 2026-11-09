import PublicNavbar from '@/components/layout/PublicNavbar';
import { ShieldCheck, Lock, Eye, Server } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-300 max-w-3xl">How Think EduNova Academy collects, uses, and protects your information.</p>
        </div>
      </section>

      <section className="py-24 max-w-[1000px] mx-auto px-6 sm:px-12 lg:px-16 w-full">
        <div className="prose prose-lg text-gray-600 max-w-none">
          
          <div className="bg-brand-grey p-8 rounded-xl border border-gray-200 mb-12 flex items-start gap-4">
            <ShieldCheck className="text-brand-teal shrink-0 mt-1" size={32} />
            <div>
              <h3 className="text-brand-navy font-bold m-0">Commitment to Privacy</h3>
              <p className="mb-0">We are committed to protecting your privacy and ensuring the security of your personal information in accordance with POPIA and global best practices.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-4 flex items-center gap-2"><Lock size={24}/> 1. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Information:</strong> Name, email address, phone number, and physical address.</li>
            <li><strong>Academic Information:</strong> Grade level, school, assessments, and tutor reports.</li>
            <li><strong>Financial Information:</strong> Payment history and invoicing details.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, and device information.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-4 flex items-center gap-2"><Eye size={24}/> 2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and improve our educational services.</li>
            <li>Process payments and manage your account.</li>
            <li>Communicate with you regarding lessons, assessments, and platform updates.</li>
            <li>Ensure the safety and security of our users, particularly minors.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-4 flex items-center gap-2"><Server size={24}/> 3. Data Sharing and Disclosure</h2>
          <p>We do not sell your personal information. We may share your information with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Qualified tutors assigned to you or your child.</li>
            <li>Payment processors (e.g., PayFast, Yoco) for secure transactions.</li>
            <li>Law enforcement or regulatory bodies if required by law.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-4">4. Data Security</h2>
          <p>We implement industry-standard security measures, including encryption, secure servers, and access controls, to protect your data from unauthorized access or disclosure.</p>

          <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-4">5. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at <a href="mailto:privacy@thinkedunova.co.za" className="text-brand-royal underline">privacy@thinkedunova.co.za</a>.</p>
        </div>
      </section>
    </div>
  );
}