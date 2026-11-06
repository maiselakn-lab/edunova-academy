"use client";

import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { BookOpen, Mail, Lock, User, ArrowRight } from 'lucide-react';

export default function LearnerRegister() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      <div className="flex-grow flex items-center justify-center p-6 py-12">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-xl border border-gray-100">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-brand-royal/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-brand-royal" size={32} />
            </div>
            <h1 className="text-3xl font-serif font-bold text-brand-navy mb-2">Learner Registration</h1>
            <p className="text-gray-500">Join the academy and start learning.</p>
          </div>
          
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-brand-navy mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="text" placeholder="Your Full Name" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-royal" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-brand-navy mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="email" placeholder="your.email@example.com" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-royal" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-brand-navy mb-2">Grade</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-royal text-gray-600">
                  <option value="">Select Grade</option>
                  <option value="r">Grade R</option>
                  <option value="1-7">Grade 1 - 7</option>
                  <option value="8-12">Grade 8 - 12</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-navy mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="password" placeholder="••••••••" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-royal" />
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-100 p-4 rounded-lg text-sm text-orange-800">
              Note: If you are under 18, a parent or guardian must verify your account. We will send them an email to approve your registration.
            </div>

            <button type="button" className="w-full bg-brand-royal text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-md flex justify-center items-center gap-2">
              Register as Learner <ArrowRight size={18} />
            </button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-gray-500 text-sm">Already have an account? <Link href="/login/learner" className="text-brand-royal font-bold hover:underline">Log in here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}