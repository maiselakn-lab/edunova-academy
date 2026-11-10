"use client";
import Link from 'next/link';
import { useState } from 'react';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { ArrowRight, Loader2, CheckCircle2, Laptop } from 'lucide-react';

export default function SoftwareEngineerApply() {
  const [formData, setFormData] = useState({ name: '', email: '', portfolio: '', github: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setIsLoading(true);
    try {
      await fetch('https://edunova-academy-qkk5.onrender.com/api/careers/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name, email: formData.email, role: 'Software Engineer', details: JSON.stringify(formData) })
      });
      setSuccess(true);
    } catch (err) { console.error(err); } 
    finally { setIsLoading(false); }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      <div className="flex-grow flex items-center justify-center p-6 py-12">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-xl border border-gray-100">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-brand-sky/10 rounded-full flex items-center justify-center mx-auto mb-4"><Laptop className="text-brand-sky" size={32} /></div>
            <h1 className="text-3xl font-serif font-bold text-brand-navy mb-2">Software Engineer Application</h1>
            <p className="text-gray-500">Help us scale the Next.js frontend and FastAPI backend.</p>
          </div>

          {success ? (
            <div className="text-center py-8"><CheckCircle2 className="mx-auto text-brand-teal mb-4" size={48} /><p className="font-bold text-brand-navy">Application received! We'll be in touch.</p></div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Full Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg" />
              <input type="email" placeholder="Email Address" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg" />
              <input type="url" placeholder="Portfolio URL" value={formData.portfolio} onChange={(e) => setFormData({...formData, portfolio: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg" />
              <input type="url" placeholder="GitHub Profile URL" value={formData.github} onChange={(e) => setFormData({...formData, github: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg" />
              <button type="submit" disabled={isLoading} className="w-full bg-brand-navy text-white font-bold py-3 rounded-lg flex justify-center items-center gap-2">
                {isLoading ? <Loader2 className="animate-spin" size={18}/> : <>Submit Application <ArrowRight size={18}/></>}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}