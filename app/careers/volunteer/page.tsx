"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { Heart, User, Mail, ArrowRight, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function VolunteerApply() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', email: '', motivation: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    setError(''); 
    setIsLoading(true);
    
    try {
      const response = await fetch('https://edunova-academy-qkk5.onrender.com/api/careers/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name: formData.name, 
          email: formData.email, 
          role: 'Volunteer', 
          details: formData.motivation 
        })
      });

      if (!response.ok) throw new Error('Application failed. Please try again.');
      
      setSuccess(true);
      setTimeout(() => router.push('/careers'), 3000);
    } catch (err: any) { 
      setError(err.message); 
    } finally { 
      setIsLoading(false); 
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      <div className="flex-grow flex items-center justify-center p-6 py-12">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-xl border border-gray-100">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-brand-teal" size={32} />
            </div>
            <h1 className="text-3xl font-serif font-bold text-brand-navy mb-2">Volunteer Application</h1>
            <p className="text-gray-500">Help us make a difference in education.</p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 flex items-start gap-3 border border-red-100">
              <AlertCircle size={20} className="shrink-0 mt-0.5" />
              <p className="text-sm font-medium">{error}</p>
            </div>
          )}

          {success && (
            <div className="bg-brand-teal/10 text-brand-teal p-4 rounded-lg mb-6 flex items-start gap-3 border border-brand-teal/20">
              <CheckCircle2 size={20} className="shrink-0 mt-0.5" />
              <p className="text-sm font-medium">Application received! We will contact you soon.</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-brand-navy mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  required 
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  placeholder="Your Name" 
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal" 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-brand-navy mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="email" 
                  required 
                  value={formData.email} 
                  onChange={(e) => setFormData({...formData, email: e.target.value})} 
                  placeholder="you@example.com" 
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal" 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-brand-navy mb-2">Why do you want to volunteer?</label>
              <textarea 
                required 
                value={formData.motivation} 
                onChange={(e) => setFormData({...formData, motivation: e.target.value})} 
                placeholder="Tell us a bit about yourself..." 
                className="w-full p-3 border border-gray-300 rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-brand-teal" 
              />
            </div>

            <button 
              type="submit" 
              disabled={isLoading || success} 
              className="w-full bg-brand-teal text-white font-bold py-4 rounded-lg hover:bg-teal-600 transition-colors shadow-md mt-6 flex justify-center items-center gap-2 disabled:opacity-70"
            >
              {isLoading ? <><Loader2 className="animate-spin" size={20}/> Submitting...</> : <>Submit Application <ArrowRight size={18} /></>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}