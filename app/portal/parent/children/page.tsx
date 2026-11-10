"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Users, Plus, CheckCircle2, AlertCircle, Loader2, ArrowLeft } from 'lucide-react';

export default function MyChildren() {
  const [children, setChildren] = useState<any[]>([]);
  const [linkCode, setLinkCode] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  const fetchChildren = async () => {
    const token = localStorage.getItem('edunova_token');
    try {
      const response = await fetch('https://edunova-academy-qkk5.onrender.com/api/parent/children', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) setChildren((await response.json()).children);
    } catch (err) { console.error(err); } 
    finally { setIsFetching(false); }
  };

  useEffect(() => { fetchChildren(); }, []);

  const handleLink = async (e: React.FormEvent) => {
    e.preventDefault(); setError(''); setMessage(''); setIsLoading(true);
    const token = localStorage.getItem('edunova_token');
    try {
      const response = await fetch(`https://edunova-academy-qkk5.onrender.com/api/parent/link-child?link_code=${linkCode.toUpperCase()}`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.detail);
      setMessage(data.message); setLinkCode(''); fetchChildren();
    } catch (err: any) { setError(err.message); } 
    finally { setIsLoading(false); }
  };

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Link href="/portal/parent" className="text-gray-400 hover:text-brand-navy"><ArrowLeft size={24} /></Link>
        <h1 className="text-3xl font-serif font-bold text-brand-navy">My Children</h1>
      </div>
      
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-8">
        <h2 className="text-xl font-bold text-brand-navy mb-2">Link a Learner Account</h2>
        <p className="text-sm text-gray-500 mb-6">Ask your child to log into their Learner Portal and copy the <strong>Link Code</strong> shown on their dashboard.</p>
        
        {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 flex items-center gap-2"><AlertCircle size={18} />{error}</div>}
        {message && <div className="bg-brand-teal/10 text-brand-teal p-3 rounded-lg mb-4 flex items-center gap-2"><CheckCircle2 size={18} />{message}</div>}
        
        <form onSubmit={handleLink} className="flex gap-3">
          <input 
            type="text" 
            value={linkCode}
            onChange={(e) => setLinkCode(e.target.value)}
            placeholder="e.g. LNK-8842"
            required
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-royal uppercase" 
          />
          <button type="submit" disabled={isLoading} className="bg-brand-royal text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-blue-700 disabled:opacity-70">
            {isLoading ? <Loader2 className="animate-spin" size={18}/> : <Plus size={18}/>} Link Child
          </button>
        </form>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {isFetching ? (
          <p className="text-gray-500">Loading children...</p>
        ) : children.length === 0 ? (
          <p className="text-gray-500 col-span-2 text-center py-8">You haven't linked any children yet.</p>
        ) : (
          children.map((child, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4">
              <div className="w-16 h-16 bg-brand-royal/10 text-brand-royal rounded-full flex items-center justify-center font-bold text-2xl shrink-0">
                {child.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-1">{child.name} {child.surname}</h3>
                <p className="text-sm text-gray-500 mb-4">{child.email}</p>
                <Link href={`/portal/parent/children/${child.id}`} className="text-brand-royal font-bold text-sm hover:underline">
                  View Full Profile &rarr;
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}