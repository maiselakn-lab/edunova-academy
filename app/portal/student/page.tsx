import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { MonitorPlay, Calendar, FileText, ArrowRight } from 'lucide-react';

export default function StudentPortalMock() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      <section className="bg-brand-navy py-20 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Student Portal</h1>
          <p className="text-xl text-gray-300">Welcome to your virtual campus.</p>
        </div>
      </section>
      <section className="py-20 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 w-full">
        <div className="bg-white p-10 rounded-xl shadow-md border border-gray-100 mb-8 text-center">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">You are not logged in</h2>
          <p className="text-gray-600 mb-6">Please log in to access your classes and records.</p>
          <Link href="/login" className="bg-brand-royal text-white px-8 py-3 rounded font-bold hover:bg-blue-700">Login Here</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/portal/classroom" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-brand-royal hover:shadow-md transition-all">
            <MonitorPlay className="text-brand-royal mb-4" size={32} />
            <h3 className="font-bold text-lg text-brand-navy">Virtual Classroom</h3>
            <p className="text-sm text-gray-500 mt-2">Join your live lessons.</p>
          </Link>
          <Link href="/calendar" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-brand-royal hover:shadow-md transition-all">
            <Calendar className="text-brand-royal mb-4" size={32} />
            <h3 className="font-bold text-lg text-brand-navy">Academic Calendar</h3>
            <p className="text-sm text-gray-500 mt-2">View upcoming schedules.</p>
          </Link>
          <Link href="/portal/records" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-brand-royal hover:shadow-md transition-all">
            <FileText className="text-brand-royal mb-4" size={32} />
            <h3 className="font-bold text-lg text-brand-navy">Student Records</h3>
            <p className="text-sm text-gray-500 mt-2">Access your grades and reports.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}