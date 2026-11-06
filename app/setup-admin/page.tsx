"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShieldCheck, Mail, Lock, User, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function SetupAdmin() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    secretCode: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // A simple secret code to prevent anyone from finding this page and making themselves admin.
  // In a real app, this would be a complex environment variable.
  const MASTER_SECRET = "EDUNOVA-ROOT-2026";

  const handleSetup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (formData.secretCode !== MASTER_SECRET) {
      setError("Invalid Master Secret Code.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('https://edunova-academy-qkk5.onrender.com/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          password: formData.password,
          role: 'admin',
          school_id: 1
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Admin creation failed');
      }

      setSuccess(true);
      
      setTimeout(() => {
        router.push('/login/admin');
      }, 2000);
      
    } catch (err: any) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#081020] items-center justify-center p-6">
      <div className="bg-brand-navy p-10 rounded-2xl shadow-2xl w-full max-w-md border border-white/10">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="text-brand-gold" size={32} />
          </div>
          <h1 className="text-3xl font-serif font-bold text-white mb-2">Root Admin Setup</h1>
          <p className="text-gray-400">Create the master administrator account.</p>
        </div>

        {error && (
          <div className="bg-red-500/10 text-red-400 p-4 rounded-lg mb-6 flex items-start gap-3 border border-red-500/20">
            <AlertCircle size={20} className="shrink-0 mt-0.5" />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        {success && (
          <div className="bg-brand-teal/10 text-brand-teal p-4 rounded-lg mb-6 flex items-start gap-3 border border-brand-teal/20">
            <CheckCircle2 size={20} className="shrink-0 mt-0.5" />
            <p className="text-sm font-medium">Root Admin created! Redirecting to login...</p>
          </div>
        )}
        
        <form onSubmit={handleSetup} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-white mb-2">First Name</label>
              <input 
                type="text" required
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-gold" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-white mb-2">Last Name</label>
              <input 
                type="text" required
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-gold" 
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-white mb-2">Admin Email</label>
            <input 
              type="email" required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-gold" 
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-white mb-2">Password</label>
            <input 
              type="password" required
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-gold" 
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-brand-gold mb-2">Master Secret Code</label>
            <input 
              type="password" required
              value={formData.secretCode}
              onChange={(e) => setFormData({...formData, secretCode: e.target.value})}
              placeholder="Enter secret code"
              className="w-full p-3 bg-brand-gold/10 border border-brand-gold/30 rounded-lg text-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold" 
            />
            <p className="text-xs text-gray-400 mt-2">Hint: EDUNOVA-ROOT-2026</p>
          </div>

          <button 
            type="submit" disabled={isLoading || success}
            className="w-full bg-brand-gold text-brand-navy font-bold py-3.5 rounded-lg hover:bg-yellow-500 transition-colors shadow-md flex justify-center items-center gap-2 disabled:opacity-70 mt-4"
          >
            {isLoading ? <><Loader2 className="animate-spin" size={20}/> Creating...</> : 'Create Admin Account'}
          </button>
        </form>
      </div>
    </div>
  );
}