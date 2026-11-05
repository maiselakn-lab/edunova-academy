import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { ShieldCheck, Mail, Lock } from 'lucide-react';

export default function AdminLogin() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      <div className="flex-grow flex items-center justify-center p-6 py-20">
        <div className="bg-brand-navy p-10 rounded-2xl shadow-2xl w-full max-w-md border border-white/10">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="text-brand-gold" size={32} />
            </div>
            <h1 className="text-3xl font-serif font-bold text-white mb-2">Admin Portal</h1>
            <p className="text-gray-400">Restricted Institutional Access.</p>
          </div>
          
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-white mb-2">Admin Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="email" placeholder="admin@thinkedunova.co.za" className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-gold" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-white mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="password" placeholder="••••••••" className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-gold" />
              </div>
            </div>
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 text-gray-400"><input type="checkbox" className="rounded bg-white/10 border-white/20" /> Remember me</label>
              <a href="#" className="text-brand-gold font-bold hover:underline">Forgot password?</a>
            </div>
            <button type="button" className="w-full bg-brand-gold text-brand-navy font-bold py-3.5 rounded-lg hover:bg-yellow-500 transition-colors shadow-md">Secure Login</button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <Link href="/login" className="text-gray-400 text-sm hover:text-white">&larr; Back to Portal Selection</Link>
          </div>
        </div>
      </div>
    </div>
  );
}