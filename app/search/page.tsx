import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { Search } from 'lucide-react';

export default function SearchPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Search the Academy</h1>
          <div className="relative max-w-3xl">
            <input 
              type="text" 
              placeholder="Search for courses, subjects, tutors, or policies..." 
              className="w-full p-5 pl-14 rounded-lg bg-white text-brand-navy font-medium text-lg focus:outline-none focus:ring-4 focus:ring-brand-gold/50 shadow-lg" 
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
          </div>
        </div>
      </section>

      <section className="py-24 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 w-full">
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">Enter a keyword above to search across the entire platform.</p>
        </div>
      </section>
    </div>
  );
}