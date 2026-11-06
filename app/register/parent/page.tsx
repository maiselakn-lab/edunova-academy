"use client";

import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { Users, Mail, Lock, User, Phone, BookOpen, ArrowRight } from 'lucide-react';

export default function ParentRegister() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      <div className="flex-grow flex items-center justify-center p-6 py-12">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-2xl border border-gray-100">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-brand-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-brand-navy" size={32} />
            </div>
            <h1 className="text-3xl font-serif font-bold text-brand-navy mb-2">Parent Registration</h1>
            <p className="text-gray-500">Create an account to manage your child's education.</p>
          </div>
          
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-brand-navy mb-2">First Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="text" placeholder="First Name" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-navy" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-navy mb-2">Last Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="text" placeholder="Last Name" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-navy" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-brand-navy mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="email" placeholder="parent@example.com" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-navy" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-brand-navy mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="tel" placeholder="+27 12 345 6789" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-navy" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-navy mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="password" placeholder="••••••••" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-navy" />
                </div>
              </div>
            </div>

            <div className="bg-brand-navy/5 p-4 rounded-lg border border-brand-navy/10 mt-6">
              <h3 className="font-bold text-brand-navy mb-3 flex items-center gap-2"><BookOpen size={18} /> Add Your First Child (Optional)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Child's Full Name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-navy" />
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-navy text-gray-600">
                  <option value="">Select Grade</option>
                  <option value="r">Grade R</option>
                  <option value="1-7">Grade 1 - 7 (Primary)</option>
                  <option value="8-12">Grade 8 - 12 (Secondary)</option>
                </select>
              </div>
            </div>

            <button type="button" className="w-full bg-brand-navy text-white font-bold py-4 rounded-lg hover:bg-opacity-90 transition-colors shadow-md mt-6 flex justify-center items-center gap-2">
              Create Parent Account <ArrowRight size={18} />
            </button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-gray-500 text-sm">Already have an account? <Link href="/login/parent" className="text-brand-royal font-bold hover:underline">Log in here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}