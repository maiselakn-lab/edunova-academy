"use client";

import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { UserPlus, Mail, Lock, User, Phone, BookOpen, Upload, ArrowRight } from 'lucide-react';

export default function TutorApply() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      <div className="flex-grow flex items-center justify-center p-6 py-12">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-2xl border border-gray-100">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserPlus className="text-brand-gold" size={32} />
            </div>
            <h1 className="text-3xl font-serif font-bold text-brand-navy mb-2">Tutor Application</h1>
            <p className="text-gray-500">Join our faculty of expert educators.</p>
          </div>
          
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-brand-navy mb-2">First Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="text" placeholder="First Name" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-navy mb-2">Last Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="text" placeholder="Last Name" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-brand-navy mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="email" placeholder="Email" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-navy mb-2">Phone</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="tel" placeholder="Phone" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-brand-navy mb-2">Subject Specialisation</label>
              <div className="relative">
                <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="text" placeholder="e.g. Mathematics & Physical Sciences" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-brand-navy mb-2">Upload Qualifications (CV & Certificates)</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-brand-gold transition-colors cursor-pointer bg-brand-grey/50">
                <Upload className="mx-auto text-gray-400 mb-3" size={32} />
                <p className="text-sm font-bold text-brand-navy">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500 mt-1">PDF, JPG, or PNG (Max 10MB)</p>
              </div>
            </div>

            <button type="button" className="w-full bg-brand-gold text-brand-navy font-bold py-4 rounded-lg hover:bg-yellow-500 transition-colors shadow-md mt-6 flex justify-center items-center gap-2">
              Submit Application <ArrowRight size={18} />
            </button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-gray-500 text-sm">Already applied? <Link href="/login/tutor" className="text-brand-royal font-bold hover:underline">Check Status</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}