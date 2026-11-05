import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { DollarSign } from 'lucide-react';

export default function TutorEarnings() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white p-12 rounded-xl shadow-lg text-center max-w-lg">
          <DollarSign className="mx-auto text-brand-teal mb-6" size={64} />
          <h1 className="text-3xl font-serif font-bold text-brand-navy mb-4">Tutor Earnings</h1>
          <p className="text-gray-600 mb-8">Log in to view your completed lessons, pending earnings, and payment history.</p>
          <Link href="/login" className="bg-brand-navy text-white font-bold px-8 py-3 rounded hover:bg-opacity-90">Log In to View</Link>
        </div>
      </div>
    </div>
  );
}