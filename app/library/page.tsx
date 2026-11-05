import PublicNavbar from '@/components/layout/PublicNavbar';
import { Book, FileText, Video } from 'lucide-react';

export default function Library() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Digital Library</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Access our repository of learning materials, past papers, and academic resources.</p>
        </div>
      </section>
      <section className="py-24 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-gray-200 p-8 rounded-xl text-center hover:shadow-lg transition-shadow cursor-pointer">
            <Book className="mx-auto text-brand-royal mb-4" size={40} />
            <h3 className="text-xl font-bold text-brand-navy">E-Books & Textbooks</h3>
          </div>
          <div className="border border-gray-200 p-8 rounded-xl text-center hover:shadow-lg transition-shadow cursor-pointer">
            <FileText className="mx-auto text-brand-royal mb-4" size={40} />
            <h3 className="text-xl font-bold text-brand-navy">Past Exam Papers</h3>
          </div>
          <div className="border border-gray-200 p-8 rounded-xl text-center hover:shadow-lg transition-shadow cursor-pointer">
            <Video className="mx-auto text-brand-royal mb-4" size={40} />
            <h3 className="text-xl font-bold text-brand-navy">Recorded Lectures</h3>
          </div>
        </div>
      </section>
    </div>
  );
}