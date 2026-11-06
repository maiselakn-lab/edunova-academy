"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { Users, Mail, Lock, User, ArrowRight, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function ParentRegister() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('https://edunova-academy-qkk5.onrender.com/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          password: formData.password,
          role: 'parent',
          school_id: 1
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Registration failed');
      }

      setSuccess(true);
      
      setTimeout(() => {
        router.push('/login/parent');
      }, 2000);
      
    } catch (err: any) {
      setError(err.message || 'Something went wrong.');
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
            <div className="w-16 h-16 bg-brand-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-brand-navy" size={32} />
            </div>
            <h1 className="text-3xl font-serif font-bold text-brand-navy mb-2">Parent Registration</h1>
            <p className="text-gray-500">Create an account to monitor your child's progress.</p>
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
              <p className="text-sm font-medium">Account created! Redirecting to login...</p>
            </div>
          )}
          
          <form onSubmit={handleRegister} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-brand-navy mb-2">First Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="text" required
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    placeholder="First Name" 
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-navy" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-navy mb-2">Last Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="text" required
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    placeholder="Last Name" 
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-navy" 
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-brand-navy mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="email" required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="parent@example.com" 
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-navy" 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-brand-navy mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="password" required
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  placeholder="••••••••" 
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-navy" 
                />
              </div>
            </div>

            <button 
              type="submit" disabled={isLoading || success}
              className="w-full bg-brand-navy text-white font-bold py-4 rounded-lg hover:bg-opacity-90 transition-colors shadow-md mt-6 flex justify-center items-center gap-2 disabled:opacity-70"
            >
              {isLoading ? <><Loader2 className="animate-spin" size={20}/> Creating Account...</> : <>Create Parent Account <ArrowRight size={18} /></>}
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