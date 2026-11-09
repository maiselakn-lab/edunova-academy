"use client";

import { useState } from 'react';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { ArrowRight, Building2, Globe2, CheckCircle2, Handshake, BarChart3, Users, Loader2, CheckCircle } from 'lucide-react';

export default function Institutions() {
  const [formData, setFormData] = useState({ institution: '', email: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleDemoRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await fetch('https://edunova-academy-qkk5.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.institution,
          email: formData.email,
          subject: 'Institutional Partnership',
          message: 'Requesting a demo of AcadCoreOS for our institution.'
        })
      });
      setSuccess(true);
      setFormData({ institution: '', email: '' });
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      
      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <div className="max-w-3xl">
            <p className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4">For Schools & Institutions</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">Partner with Think EduNova.</h1>
            <p className="text-xl text-gray-200 mb-8">
              We collaborate with schools, colleges, NGOs, and universities to provide additional academic support to their students and integrate our technology into their operations.
            </p>
            <a href="#enquiry" className="bg-brand-gold text-brand-navy px-8 py-4 rounded-sm font-bold text-lg hover:bg-yellow-500 transition-all inline-flex items-center gap-2 shadow-lg">
              Request a Consultation <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-grey">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">How We Support Institutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">We provide the technology, tutoring, and academic resources to help your students succeed.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Users className="text-brand-royal mb-4" size={32} />
              <h3 className="text-xl font-bold text-brand-navy mb-2">Bulk Enrollments</h3>
              <p className="text-gray-600">Register entire classes or cohorts and manage billing centrally through a single institutional account.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Globe2 className="text-brand-royal mb-4" size={32} />
              <h3 className="text-xl font-bold text-brand-navy mb-2">AcadCoreOS Integration</h3>
              <p className="text-gray-600">Sync student records, timetables, and academic results seamlessly with the AcadCoreOS management platform.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <BarChart3 className="text-brand-royal mb-4" size={32} />
              <h3 className="text-xl font-bold text-brand-navy mb-2">Custom Reporting</h3>
              <p className="text-gray-600">Receive detailed academic progress reports and tutor feedback tailored to your institution's requirements.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="enquiry" className="py-24 bg-brand-navy text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Handshake className="text-brand-gold mb-6" size={48} />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Why Partner With Us?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><CheckCircle2 className="text-brand-teal shrink-0 mt-1" size={20} /><div><h4 className="font-bold text-white">Improve Student Outcomes</h4><p className="text-gray-300 text-sm">Boost pass rates and academic performance through dedicated tutoring.</p></div></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-brand-teal shrink-0 mt-1" size={20} /><div><h4 className="font-bold text-white">Reduce Teacher Workload</h4><p className="text-gray-300 text-sm">Our tutors handle extra lessons and exam prep, freeing up your staff.</p></div></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-brand-teal shrink-0 mt-1" size={20} /><div><h4 className="font-bold text-white">Zero Setup Costs</h4><p className="text-gray-300 text-sm">We provide the platform and the tutors. You just provide the students.</p></div></li>
              </ul>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur-sm">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Institutional Enquiry</h3>
              
              {success ? (
                <div className="bg-brand-teal/20 text-brand-teal p-6 rounded-lg text-center">
                  <CheckCircle className="mx-auto mb-2" size={32} />
                  <p className="font-bold">Request Received!</p>
                  <p className="text-sm">Our partnerships team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleDemoRequest} className="space-y-4">
                  <input type="text" required placeholder="Institution Name" value={formData.institution} onChange={(e) => setFormData({...formData, institution: e.target.value})} className="w-full p-3 bg-brand-navy/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                  <input type="email" required placeholder="Official Email Address" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-3 bg-brand-navy/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                  <button type="submit" disabled={isLoading} className="w-full bg-brand-gold text-brand-navy font-bold py-3 rounded-lg hover:bg-yellow-500 transition-colors flex justify-center items-center gap-2">
                    {isLoading ? <Loader2 className="animate-spin" size={18}/> : 'Request a Demo'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}