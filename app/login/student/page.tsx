import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { GraduationCap, Mail, Lock } from 'lucide-react';

export default function StudentLogin() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      <div className="flex-grow flex items-center justify-center p-6 py-20">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-brand-royal/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="text-brand-royal" size={32} />
            </div>
            <h1 className="text-3xl font-serif font-bold text-brand-navy mb-2">Student Login</h1>
            <p className="text-gray-500">Access your virtual classroom.</p>
          </div>
          
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-brand-navy mb-2">Student Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="email" placeholder="student@example.com" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-royal" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-brand-navy mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="password" placeholder="••••••••" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-royal" />
              </div>
            </div>
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 text-gray-600"><input type="checkbox" className="rounded" /> Remember me</label>
              <a href="#" className="text-brand-royal font-bold hover:underline">Forgot password?</a>
            </div>
            <button type="button" className="w-full bg-brand-royal text-white font-bold py-3.5 rounded-lg hover:bg-blue-700 transition-colors shadow-md">Log In to Portal</button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <Link href="/login" className="text-gray-500 text-sm hover:text-brand-navy">&larr; Back to Portal Selection</Link>
          </div>
        </div>
      </div>
    </div>
  );
}