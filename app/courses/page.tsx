import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { ArrowRight } from 'lucide-react';

export default function Courses() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Explore Programmes</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Find the perfect course or subject for your academic journey.</p>
        </div>
      </section>
      <section className="py-24 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/academies/primary" className="border border-gray-200 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
             <h3 className="text-xl font-bold text-brand-navy">Primary School</h3>
          </Link>
          <Link href="/academies/secondary" className="border border-gray-200 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
             <h3 className="text-xl font-bold text-brand-navy">High School</h3>
          </Link>
          <Link href="/academies/college" className="border border-gray-200 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
             <h3 className="text-xl font-bold text-brand-navy">College & TVET</h3>
          </Link>
          <Link href="/academies/university" className="border border-gray-200 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
             <h3 className="text-xl font-bold text-brand-navy">University</h3>
          </Link>
        </div>
      </section>
    </div>
  );
}