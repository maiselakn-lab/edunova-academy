import PublicNavbar from '@/components/layout/PublicNavbar';
import { Target, Eye, Heart } from 'lucide-react';

export default function Vision() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Vision, Mission & Values</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Discover the guiding principles that drive Think EduNova Academy.</p>
        </div>
      </section>
      <section className="py-24 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-brand-grey rounded-xl border border-gray-200"><Target className="text-brand-royal mb-4" size={32}/><h2 className="text-2xl font-bold text-brand-navy mb-4">Vision</h2><p className="text-gray-600">To establish a trusted, scalable digital academy that combines quality education, technology, and academic empowerment across Africa.</p></div>
          <div className="p-8 bg-brand-grey rounded-xl border border-gray-200"><Eye className="text-brand-royal mb-4" size={32}/><h2 className="text-2xl font-bold text-brand-navy mb-4">Mission</h2><p className="text-gray-600">To provide accessible, quality, and personalised education to people who need assistance with their academic development.</p></div>
          <div className="p-8 bg-brand-grey rounded-xl border border-gray-200"><Heart className="text-brand-royal mb-4" size={32}/><h2 className="text-2xl font-bold text-brand-navy mb-4">Values</h2><p className="text-gray-600">Academic excellence, integrity, safeguarding of minors, and the empowerment of graduates through meaningful employment.</p></div>
        </div>
      </section>
    </div>
  );
}