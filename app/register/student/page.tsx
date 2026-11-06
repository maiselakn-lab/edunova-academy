"use client";

import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { GraduationCap, Mail, Lock, User, Building2, ArrowRight } from 'lucide-react';

export default function StudentRegister() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      <div className="flex-grow flex items-center justify-center p-6 py-12">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-xl border border-gray-100">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-brand-sky/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="text-brand-sky" size={32} />
            </div>
            <h1 className="text-3xl font-serif font-bold text-brand-navy mb-2">Student Registration</h1>
            <p className="text-gray-500">Access tertiary modules and research support.</p>
          </div>
          
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-brand-navy mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="text" placeholder="Your Full Name" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-sky" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-brand-navy mb-2">Student Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="email" placeholder="student@university.ac.za" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-sky" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-brand-navy mb-2">Institution / University</label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="text" placeholder="e.g. University of Pretoria" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-sky" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-brand-navy mb-2">Year of Study</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-sky text-gray-600">
                  <option value="">Select Year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="postgrad">Postgraduate</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-navy mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="password" placeholder="••••••••" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                </div>
              </div>
            </div>

            <button type="button" className="w-full bg-brand-sky text-white font-bold py-4 rounded-lg hover:bg-blue-500 transition-colors shadow-md mt-6 flex justify-center items-center gap-2">
              Create Student Account <ArrowRight size={18} />
            </button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-gray-500 text-sm">Already have an account? <Link href="/login/student" className="text-brand-royal font-bold hover:underline">Log in here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}