import PublicNavbar from '@/components/layout/PublicNavbar';
import { Search, User } from 'lucide-react';

export default function Tutors() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Find a Tutor</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Browse our directory of verified, expert educators.</p>
        </div>
      </section>
      <section className="py-20 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8 flex gap-4">
          <div className="relative flex-grow">
            <input type="text" placeholder="Search by subject or name..." className="w-full p-4 pl-12 border border-gray-300 rounded" />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <button className="bg-brand-royal text-white px-8 py-4 rounded font-bold hover:bg-blue-700">Search</button>
        </div>
        <div className="text-center py-20 bg-white rounded-xl border border-gray-200">
          <User className="mx-auto text-gray-300 mb-4" size={48} />
          <p className="text-gray-500">Tutor directory is loading...</p>
        </div>
      </section>
    </div>
  );
}