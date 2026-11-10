"use client";

import { useState } from 'react';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { ArrowRight, Microscope, FileText, BarChart3, BookOpen, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

export default function Research() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Research Consultation', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleBook = async (e: React.FormEvent) => {
    e.preventDefault(); setIsLoading(true); setSuccess(false); setError('');
    try {
      const response = await fetch('https://edunova-academy-qkk5.onrender.com/api/research/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!response.ok) throw new Error('Booking failed');
      setSuccess(true);
      setFormData({ name: '', email: '', subject: 'Research Consultation', message: '' });
    } catch (err: any) { setError(err.message); } 
    finally { setIsLoading(false); }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      
      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Research & Innovation</h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl">Specialist research assistance for university students, honours, masters, and PhD candidates. We support legitimate academic development and research excellence.</p>
          <a href="#booking" className="bg-brand-gold text-brand-navy px-8 py-4 rounded-sm font-bold text-lg hover:bg-yellow-500 transition-all inline-flex items-center gap-2 shadow-lg">
            Book a Consultation <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <section className="py-24 bg-brand-grey">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">Research Support Centre</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Ethical, structured academic guidance every step of the way.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { icon: <FileText size={28} />, title: "Proposal Guidance", desc: "Structuring your introduction, problem statement, and research questions." },
              { icon: <BookOpen size={28} />, title: "Literature Review", desc: "Finding, evaluating, and synthesizing academic sources." },
              { icon: <Microscope size={28} />, title: "Methodology Design", desc: "Quantitative, qualitative, and mixed-methods research designs." },
              { icon: <BarChart3 size={28} />, title: "Statistical Analysis", desc: "Tutoring on SPSS, R, or Python to analyze your data." },
              { icon: <FileText size={28} />, title: "Academic Writing", desc: "Support with structuring your thesis, dissertation, or paper." },
              { icon: <BookOpen size={28} />, title: "Referencing & Citations", desc: "Guidance on APA, Harvard, and other citation styles." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="text-brand-royal mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Booking Form */}
          <div id="booking" className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-bold text-brand-navy mb-2">Book a Research Consultation</h3>
              <p className="text-gray-500">Tell us about your research project and we will match you with a specialist tutor.</p>
            </div>

            {error && <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 flex items-center gap-2"><AlertCircle size={20}/>{error}</div>}
            {success && <div className="bg-brand-teal/10 text-brand-teal p-4 rounded-lg mb-6 flex items-center gap-2"><CheckCircle2 size={20}/>Consultation booked! We will contact you within 24 hours.</div>}

            <form onSubmit={handleBook} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-brand-navy mb-1">Full Name</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-royal" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-navy mb-1">Email Address</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-royal" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-navy mb-1">Research Area</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-royal text-gray-600">
                  <option>Statistical Analysis (SPSS/R)</option>
                  <option>Methodology Design</option>
                  <option>Literature Review</option>
                  <option>Academic Writing Support</option>
                  <option>General Research Guidance</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-navy mb-1">Briefly describe your project</label>
                <textarea required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-brand-royal" placeholder="e.g. I need help analyzing my survey data for my Masters thesis."></textarea>
              </div>
              <button type="submit" disabled={isLoading} className="w-full bg-brand-royal text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors flex justify-center items-center gap-2 disabled:opacity-70">
                {isLoading ? <Loader2 className="animate-spin" size={18}/> : 'Book Consultation'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}