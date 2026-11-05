import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { Target, Eye, Heart, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      
      {/* Hero */}
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">About Think EduNova</h1>
            <p className="text-xl text-gray-300">
              We are a comprehensive digital institution combining academic teaching, learning resources, AI-assisted education, and employment opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <Target className="text-brand-royal mb-4" size={40} />
              <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">To provide accessible, quality, and personalised education to people who need assistance with their academic development.</p>
            </div>
            <div>
              <Eye className="text-brand-royal mb-4" size={40} />
              <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">To establish a trusted, scalable digital academy that combines quality education, technology, employment opportunities, and academic empowerment.</p>
            </div>
            <div>
              <Heart className="text-brand-royal mb-4" size={40} />
              <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4">Our Values</h2>
              <p className="text-gray-600 leading-relaxed">Academic excellence, integrity, safeguarding of minors, and the empowerment of graduates through meaningful employment.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}