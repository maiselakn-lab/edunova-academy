import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { UserCheck, DollarSign, FileText } from 'lucide-react';

export default function TutorPortalMock() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      <section className="bg-brand-navy py-20 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Tutor Portal</h1>
          <p className="text-xl text-gray-300">Manage your teaching career.</p>
        </div>
      </section>
      <section className="py-20 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 w-full">
        <div className="bg-white p-10 rounded-xl shadow-md border border-gray-100 mb-8 text-center">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">Tutor Login Required</h2>
          <Link href="/login" className="bg-brand-royal text-white px-8 py-3 rounded font-bold hover:bg-blue-700">Login Here</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/portal/earnings" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-brand-royal transition-all">
            <DollarSign className="text-brand-royal mb-4" size={32} />
            <h3 className="font-bold text-lg text-brand-navy">Tutor Earnings</h3>
          </Link>
          <Link href="/portal/reports" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-brand-royal transition-all">
            <FileText className="text-brand-royal mb-4" size={32} />
            <h3 className="font-bold text-lg text-brand-navy">Submit Lesson Report</h3>
          </Link>
          <Link href="/become-a-tutor" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-brand-royal transition-all">
            <UserCheck className="text-brand-royal mb-4" size={32} />
            <h3 className="font-bold text-lg text-brand-navy">My Tutor Profile</h3>
          </Link>
        </div>
      </section>
    </div>
  );
}