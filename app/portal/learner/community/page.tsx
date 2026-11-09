import Link from 'next/link';
import { Users, ArrowRight } from 'lucide-react';
export default function Community() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[60vh]">
      <Users className="text-brand-sky mb-6" size={64} />
      <h1 className="text-3xl font-serif font-bold text-brand-navy mb-4">Learner Community</h1>
      <p className="text-gray-500 mb-8 max-w-md text-center">Share study notes, get help with homework, and collaborate with other learners.</p>
      <Link href="/community/learner" className="bg-brand-navy text-white px-8 py-3 rounded font-bold flex items-center gap-2 hover:bg-opacity-90">Enter Forum <ArrowRight size={18}/></Link>
    </div>
  );
}