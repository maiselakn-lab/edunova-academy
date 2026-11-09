"use client";

import { useState } from 'react';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Enquiry',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccess(false);
    setError('');

    try {
      const response = await fetch('https://edunova-academy-qkk5.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.detail || 'Failed to send message.');
      
      setSuccess(true);
      setFormData({ name: '', email: '', subject: 'General Enquiry', message: '' });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Get in touch with our admissions, support, or institutional partnership teams.</p>
        </div>
      </section>

      <section className="py-24 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 w-full">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-serif font-bold text-brand-navy mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">We are here to help you with any questions regarding admissions, tutoring, or our platform.</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-royal/10 text-brand-royal rounded-full flex items-center justify-center shrink-0"><Mail size={24} /></div>
                <div>
                  <h3 className="font-bold text-brand-navy">Email Us</h3>
                  <p className="text-sm text-gray-600 mt-1">info@thinkedunova.co.za</p>
                  <p className="text-sm text-gray-600">founder@thinkedunova.co.za</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-royal/10 text-brand-royal rounded-full flex items-center justify-center shrink-0"><Phone size={24} /></div>
                <div>
                  <h3 className="font-bold text-brand-navy">Call Us</h3>
                  <p className="text-sm text-gray-600 mt-1">+27 (0) 12 345 6789</p>
                  <p className="text-sm text-gray-600">Mon-Fri: 08:00 - 17:00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-royal/10 text-brand-royal rounded-full flex items-center justify-center shrink-0"><MapPin size={24} /></div>
                <div>
                  <h3 className="font-bold text-brand-navy">Location</h3>
                  <p className="text-sm text-gray-600 mt-1">Pretoria, Gauteng<br/>South Africa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200">
              <h2 className="text-2xl font-serif font-bold text-brand-navy mb-6">Send us a Message</h2>
              
              {success && (
                <div className="bg-brand-teal/10 text-brand-teal p-4 rounded-lg mb-6 flex items-center gap-2 border border-brand-teal/20">
                  <CheckCircle2 size={20} /> Message sent! We will respond within 24 hours.
                </div>
              )}
              {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 flex items-center gap-2 border border-red-100">
                  <AlertCircle size={20} /> {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-brand-navy mb-2">Full Name</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-royal" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-navy mb-2">Email Address</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-royal" placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-navy mb-2">Subject</label>
                  <select value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-royal text-gray-600">
                    <option>General Enquiry</option>
                    <option>Admissions</option>
                    <option>Tutor Application</option>
                    <option>Institutional Partnership</option>
                    <option>Technical Support</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-navy mb-2">Message</label>
                  <textarea required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-brand-royal" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" disabled={isLoading} className="bg-brand-royal text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-md disabled:opacity-70">
                  {isLoading ? <><Loader2 className="animate-spin" size={18}/> Sending...</> : <><Send size={18}/> Send Message</>}
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}