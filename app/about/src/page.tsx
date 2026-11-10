import PublicNavbar from '@/components/layout/PublicNavbar';
import { Users, MessageSquare, Calendar, ArrowRight, UserPlus } from 'lucide-react';
import Link from 'next/link';

export default function SRC() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Student Representative Council</h1>
          <p className="text-xl text-gray-300 max-w-3xl">The voice of our learners and students.</p>
        </div>
      </section>

      <section className="py-24 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 w-full">
        
        {/* Mission Banner */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200 mb-12 flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 bg-brand-royal/10 text-brand-royal rounded-full flex items-center justify-center shrink-0">
            <Users size={48} />
          </div>
          <div>
            <h2 className="text-2xl font-serif font-bold text-brand-navy mb-2">Empowering the Student Voice</h2>
            <p className="text-gray-600 leading-relaxed">The SRC ensures that student feedback is heard by management, organizes virtual student events, and advocates for learner needs across the platform.</p>
          </div>
        </div>

        {/* What We Do */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
            <MessageSquare className="mx-auto text-brand-royal mb-4" size={32} />
            <h3 className="text-lg font-bold text-brand-navy mb-2">Student Advocacy</h3>
            <p className="text-sm text-gray-600">We represent your concerns and feedback directly to the academy's leadership.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
            <Calendar className="mx-auto text-brand-royal mb-4" size={32} />
            <h3 className="text-lg font-bold text-brand-navy mb-2">Virtual Events</h3>
            <p className="text-sm text-gray-600">Organizing study groups, social events, and academic webinars for all learners.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
            <Users className="mx-auto text-brand-royal mb-4" size={32} />
            <h3 className="text-lg font-bold text-brand-navy mb-2">Community Building</h3>
            <p className="text-sm text-gray-600">Fostering a supportive and connected environment across all digital campuses.</p>
          </div>
        </div>

        {/* Elections Call to Action */}
        <div className="bg-brand-navy rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-royal/20 rounded-bl-full -mr-10 -mt-10"></div>
          <h2 className="text-3xl font-serif font-bold mb-4 relative z-10">SRC Elections Coming Soon</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">The first SRC elections will be held at the start of the 2026 academic year. If you are a registered student and want to make a difference, consider nominating yourself.</p>
          <button className="bg-brand-gold text-brand-navy px-8 py-4 rounded-sm font-bold text-lg hover:bg-yellow-500 transition-all inline-flex items-center gap-2 shadow-lg relative z-10">
            <UserPlus size={20} /> Register Your Interest
          </button>
        </div>
      </section>
    </div>
  );
}