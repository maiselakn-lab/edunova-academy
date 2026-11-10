"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, DollarSign, CreditCard, Download, Loader2, CheckCircle2, Plus, X } from 'lucide-react';

export default function AdminFinance() {
  const [financeData, setFinanceData] = useState<any>(null);
  const [tutors, setTutors] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Payout Modal State
  const [showPayoutModal, setShowPayoutModal] = useState(false);
  const [payoutForm, setPayoutForm] = useState({ tutor_id: '', amount: '' });
  const [isProcessing, setIsProcessing] = useState(false);
  const [payoutSuccess, setPayoutSuccess] = useState('');

  const fetchData = async () => {
    const token = localStorage.getItem('edunova_token');
    try {
      const [financeRes, usersRes] = await Promise.all([
        fetch('https://edunova-academy-qkk5.onrender.com/api/admin/finance', { headers: { 'Authorization': `Bearer ${token}` } }),
        fetch('https://edunova-academy-qkk5.onrender.com/api/admin/users', { headers: { 'Authorization': `Bearer ${token}` } })
      ]);
      
      if (financeRes.ok) setFinanceData(await financeRes.json());
      if (usersRes.ok) {
        const allUsers = await usersRes.json();
        setTutors(allUsers.filter((u: any) => u.role === 'tutor'));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const handleProcessPayout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    const token = localStorage.getItem('edunova_token');
    try {
      const response = await fetch(`https://edunova-academy-qkk5.onrender.com/api/admin/payouts/process?tutor_id=${payoutForm.tutor_id}&amount=${payoutForm.amount}`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        setPayoutSuccess(`Payout of R${payoutForm.amount} processed successfully.`);
        setTimeout(() => { setShowPayoutModal(false); setPayoutSuccess(''); }, 2000);
        fetchData(); // Refresh finance data
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  if (isLoading) return <div className="p-8 text-gray-500">Loading financial data...</div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-serif font-bold text-brand-navy">Finance & Billing</h1>
        <div className="flex gap-3">
          <button onClick={() => setShowPayoutModal(true)} className="bg-brand-teal text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-teal-600 transition-colors">
            <Plus size={16} /> Process Payout
          </button>
          <Link href="/portal/admin" className="text-brand-royal font-bold text-sm flex items-center gap-2 hover:underline">
            <ArrowLeft size={16} /> Back
          </Link>
        </div>
      </div>

      {/* Top Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm border-t-4 border-t-brand-royal">
          <div className="w-10 h-10 bg-brand-royal/10 text-brand-royal rounded-full flex items-center justify-center mb-4"><TrendingUp size={20}/></div>
          <p className="text-sm text-gray-500 font-bold mb-1">Total Revenue</p>
          <p className="text-3xl font-bold text-brand-navy">{financeData?.total_revenue || 'R 0.00'}</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm border-t-4 border-t-red-500">
          <div className="w-10 h-10 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-4"><DollarSign size={20}/></div>
          <p className="text-sm text-gray-500 font-bold mb-1">Tutor Liabilities</p>
          <p className="text-3xl font-bold text-brand-navy">{financeData?.tutor_liabilities || 'R 0.00'}</p>
        </div>

        <div className="bg-brand-navy p-6 rounded-xl shadow-lg text-white border-t-4 border-brand-gold">
          <div className="w-10 h-10 bg-white/10 text-brand-gold rounded-full flex items-center justify-center mb-4"><CreditCard size={20}/></div>
          <p className="text-sm text-gray-400 font-bold mb-1">Academy Profit</p>
          <p className="text-3xl font-bold text-brand-teal">{financeData?.academy_profit || 'R 0.00'}</p>
        </div>
      </div>

      {/* Transaction Ledger */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold text-brand-navy">Recent Transactions</h2>
          <button className="text-sm font-bold text-brand-royal flex items-center gap-2 hover:underline"><Download size={16}/> Export CSV</button>
        </div>
        <table className="w-full text-left">
          <thead className="bg-brand-grey text-gray-500 text-sm">
            <tr>
              <th className="p-4 font-bold">Transaction ID</th>
              <th className="p-4 font-bold">Type</th>
              <th className="p-4 font-bold">Amount</th>
              <th className="p-4 font-bold text-right">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {financeData?.recent_transactions?.map((txn: any, i: number) => (
              <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4 font-bold text-brand-navy">{txn.id}</td>
                <td className="p-4 text-gray-600">{txn.type}</td>
                <td className={`p-4 font-bold ${txn.amount.startsWith('-') ? 'text-red-500' : 'text-brand-teal'}`}>{txn.amount}</td>
                <td className="p-4 text-right">
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-bold ${txn.status === 'Cleared' ? 'bg-brand-teal/10 text-brand-teal' : 'bg-brand-royal/10 text-brand-royal'}`}>
                    {txn.status === 'Cleared' && <CheckCircle2 size={12}/>}
                    {txn.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Payout Modal */}
      {showPayoutModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-brand-navy">Process Tutor Payout</h2>
              <button onClick={() => setShowPayoutModal(false)} className="text-gray-400 hover:text-red-500"><X size={24}/></button>
            </div>

            {payoutSuccess ? (
              <div className="bg-brand-teal/10 text-brand-teal p-4 rounded-lg text-center flex items-center justify-center gap-2">
                <CheckCircle2 size={20}/> {payoutSuccess}
              </div>
            ) : (
              <form onSubmit={handleProcessPayout} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-brand-navy mb-1">Select Tutor</label>
                  <select required value={payoutForm.tutor_id} onChange={(e) => setPayoutForm({...payoutForm, tutor_id: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg">
                    <option value="">Choose a tutor...</option>
                    {tutors.map(t => (
                      <option key={t.id} value={t.id}>{t.name} ({t.email})</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-navy mb-1">Amount (R)</label>
                  <input type="number" required value={payoutForm.amount} onChange={(e) => setPayoutForm({...payoutForm, amount: e.target.value})} placeholder="e.g. 4250" className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>
                <button type="submit" disabled={isProcessing} className="w-full bg-brand-teal text-white font-bold py-3 rounded-lg flex justify-center items-center gap-2">
                  {isProcessing ? <Loader2 className="animate-spin" size={18}/> : 'Confirm Payout'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}