"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { Presentation, Mail, Lock, Loader2, AlertCircle } from 'lucide-react';

export default function TutorLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('https://edunova-academy-qkk5.onrender.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role: 'tutor' }),
      });

      if (!response.ok) {
        throw new Error('Invalid email or password');
      }

      const data = await response.json();
      
      localStorage.setItem('edunova_token', data.access_token);
      localStorage.setItem('edunova_user', JSON.stringify(data.user));

      router.push('/portal/tutor');
      
    } catch (err: any) {
      setError(err.message || 'Login failed.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      <div className="flex-grow flex items-center justify-center p-6 py-20">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Presentation className="text-brand-teal" size={32} />
            </div>
            <h1 className="text-3xl font-serif font-bold text-brand-navy mb-2">Tutor Portal</h1>
            <p className="text-gray-500">Manage your teaching career.</p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 flex items-start gap-3 border border-red-100">
              <AlertCircle size={20} className="shrink-0 mt-0.5" />
              <p className="text-sm font-medium">{error}</p>
            </div>
          )}
          
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-brand-navy mb-2">Tutor Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="email" required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tutor@example.com" 
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal text-brand-charcoal" 
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-brand-navy mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="password" required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal text-brand-charcoal" 
                />
              </div>
            </div>
            <button 
              type="submit" disabled={isLoading}
              className="w-full bg-brand-teal text-white font-bold py-3.5 rounded-lg hover:bg-teal-700 transition-colors shadow-md flex justify-center items-center gap-2 disabled:opacity-70"
            >
              {isLoading ? <><Loader2 className="animate-spin" size={20}/> Logging in...</> : 'Log In to Portal'}
            </button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <Link href="/login" className="text-gray-500 text-sm hover:text-brand-navy">&larr; Back to Portal Selection</Link>
          </div>
        </div>
      </div>
    </div>
  );
}