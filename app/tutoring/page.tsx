import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { ArrowRight, Users, MonitorPlay } from 'lucide-react';

export default function Tutoring() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="max-w-3xl">
            <p className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4">1-on-1 & Group Sessions</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">Online Tutoring</h1>
            <p className="text-xl text-gray-300 mb-8">Connect with verified, expert tutors in our interactive virtual classrooms.</p>
            <Link href="/tutors" className="bg-brand-royal text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-blue-700 transition-all inline-flex items-center gap-2 shadow-lg">Find a Tutor <ArrowRight size={20} /></Link>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 grid md:grid-cols-2 gap-8">
        <div className="border border-gray-200 p-8 rounded-xl">
          <Users className="text-brand-royal mb-4" size={40} />
          <h2 className="text-2xl font-bold text-brand-navy mb-2">1-on-1 Tutoring</h2>
          <p className="text-gray-600">Personalised attention tailored exactly to the learner's pace and specific challenges.</p>
        </div>
        <div className="border border-gray-200 p-8 rounded-xl">
          <MonitorPlay className="text-brand-royal mb-4" size={40} />
          <h2 className="text-2xl font-bold text-brand-navy mb-2">Group Sessions</h2>
          <p className="text-gray-600">Interactive group classes for up to 5 learners, fostering collaboration and reducing costs.</p>
        </div>
      </section>
    </div>
  );
}