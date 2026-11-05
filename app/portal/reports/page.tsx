import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { FileText } from 'lucide-react';

export default function LessonReports() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white p-12 rounded-xl shadow-lg text-center max-w-lg">
          <FileText className="mx-auto text-brand-gold mb-6" size={64} />
          <h1 className="text-3xl font-serif font-bold text-brand-navy mb-4">Lesson Reports</h1>
          <p className="text-gray-600 mb-8">Submit feedback and progress reports for your students after every lesson.</p>
          <Link href="/login" className="bg-brand-navy text-white font-bold px-8 py-3 rounded hover:bg-opacity-90">Log In to Submit</Link>
        </div>
      </div>
    </div>
  );
}