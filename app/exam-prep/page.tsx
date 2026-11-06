import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { Target, ArrowRight } from 'lucide-react';

export default function ExamPrep() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="max-w-3xl">
            <p className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4">Ace Your Exams</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">Examination Preparation</h1>
            <p className="text-xl text-gray-300 mb-8">Intensive revision, past paper walkthroughs, and exam techniques for Grade 12, NATED, and University exams.</p>
            <Link href="/register" className="bg-brand-gold text-brand-navy px-8 py-4 rounded-sm font-bold text-lg hover:bg-yellow-500 transition-all inline-flex items-center gap-2 shadow-lg">Book Exam Prep <ArrowRight size={20} /></Link>
          </div>
        </div>
      </section>
      <section className="py-24 bg-brand-grey text-center">
        <div className="max-w-[800px] mx-auto px-6">
           <Target className="mx-auto text-brand-royal mb-6" size={64} />
           <h2 className="text-3xl font-bold text-brand-navy mb-4">Maximize Your Results</h2>
           <p className="text-lg text-gray-600">Our tutors focus on time management, understanding question structures, and mastering the most frequently tested concepts.</p>
        </div>
      </section>
    </div>
  );
}