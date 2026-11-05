import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { MonitorPlay } from 'lucide-react';

export default function VirtualClassroom() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-navy text-white">
      <PublicNavbar />
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white/10 border border-white/20 p-12 rounded-2xl text-center max-w-lg backdrop-blur-md">
          <MonitorPlay className="mx-auto text-brand-gold mb-6" size={64} />
          <h1 className="text-3xl font-serif font-bold mb-4">Virtual Classroom</h1>
          <p className="text-gray-300 mb-8">Your live video classroom will launch here once you are logged in and a lesson is in progress.</p>
          <Link href="/login" className="bg-brand-gold text-brand-navy font-bold px-8 py-3 rounded hover:bg-yellow-500 transition-colors inline-block">Login to Access</Link>
        </div>
      </div>
    </div>
  );
}