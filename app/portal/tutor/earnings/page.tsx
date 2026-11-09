"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { DollarSign, Download, TrendingUp, ArrowLeft, Loader2, CheckCircle2 } from 'lucide-react';

export default function Earnings() {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('edunova_token');
      if (!token) { router.replace('/login/tutor'); return; }

      try {
        const response = await fetch('https://edunova-academy-qkk5.onrender.com/api/tutor/dashboard', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) {
          setData(await response.json());
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [router]);

  if (isLoading) return <div className="p-8 text-gray-500">Loading earnings...</div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-serif font-bold text-brand-navy">My Earnings</h1>
        <Link href="/portal/tutor" className="text-brand-royal font-bold text-sm flex items-center gap-2 hover:underline">
          <ArrowLeft size={16} /> Back to Dashboard
        </Link>
      </div>

      {/* Top Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-brand-navy p-6 rounded-xl shadow-lg text-white border-t-4 border-brand-gold">
          <p className="text-sm text-gray-400 mb-1">Available Balance</p>
          <p className="text-4xl font-bold text-brand-teal mb-4">{data?.pending_earnings || 'R 0.00'}</p>
          <button className="w-full bg-brand-gold text-brand-navy font-bold py-2.5 rounded hover:bg-yellow-500 transition-colors">Withdraw Funds</button>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="w-10 h-10 bg-brand-royal/10 text-brand-royal rounded-full flex items-center justify-center mb-4"><TrendingUp size={20}/></div>
          <p className="text-sm text-gray-500 mb-1">Total Earned (2026)</p>
          <p className="text-3xl font-bold text-brand-navy">R 28,500</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="w-10 h-10 bg-brand-teal/10 text-brand-teal rounded-full flex items-center justify-center mb-4"><CheckCircle2 size={20}/></div>
          <p className="text-sm text-gray-500 mb-1">Lessons Completed</p>
          <p className="text-3xl font-bold text-brand-navy">{data?.completed_lessons || 0}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Earnings Breakdown */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-xl font-bold text-brand-navy mb-6">Earnings Breakdown</h2>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between items-center pb-2 border-b border-gray-100">
              <span className="text-gray-500">Rate per Lesson</span>
              <span className="font-bold text-brand-navy">R 150.00</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-gray-100">
              <span className="text-gray-500">Lessons Completed</span>
              <span className="font-bold text-brand-navy">{data?.completed_lessons || 0}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-gray-100">
              <span className="text-gray-500">Tutor Rating</span>
              <span className="font-bold text-brand-teal">{data?.rating || 'N/A'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Platform Fee</span>
              <span className="font-bold text-red-500">- 15%</span>
            </div>
          </div>
        </div>

        {/* Recent Payouts */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-xl font-bold text-brand-navy mb-6">Recent Payouts</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <div>
                <p className="font-bold text-brand-navy">PAY-2026-02</p>
                <p className="text-xs text-gray-500">28 Feb 2026</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold text-brand-teal">R 3,500.00</span>
                <button className="p-2 bg-brand-grey rounded hover:bg-gray-200 transition-colors"><Download size={14} className="text-brand-royal"/></button>
              </div>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <div>
                <p className="font-bold text-brand-navy">PAY-2026-01</p>
                <p className="text-xs text-gray-500">31 Jan 2026</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold text-brand-teal">R 4,200.00</span>
                <button className="p-2 bg-brand-grey rounded hover:bg-gray-200 transition-colors"><Download size={14} className="text-brand-royal"/></button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}