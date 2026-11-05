import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { FileText } from 'lucide-react';

export default function StudentRecords() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      <section className="bg-brand-navy py-20 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl font-serif font-bold mb-4">Student Records</h1>
          <p className="text-xl text-gray-300">View your academic history.</p>
        </div>
      </section>
      <section className="py-20 max-w-[800px] mx-auto px-6 w-full">
        <div className="bg-white p-10 rounded-xl shadow-lg text-center">
          <FileText className="mx-auto text-brand-royal mb-4" size={48} />
          <h2 className="text-2xl font-bold text-brand-navy mb-4">Secure Access Only</h2>
          <p className="text-gray-600 mb-6">Your academic transcripts, grades, and attendance records are protected.</p>
          <Link href="/login" className="bg-brand-royal text-white px-8 py-3 rounded font-bold hover:bg-blue-700">Log In</Link>
        </div>
      </section>
    </div>
  );
}