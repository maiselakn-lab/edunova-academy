import { DollarSign, Download, TrendingUp } from 'lucide-react';

export default function Earnings() {
  const payouts = [
    { id: "PAY-2026-02", date: "28 Feb 2026", amount: "R 3,500.00", status: "Completed" },
    { id: "PAY-2026-01", date: "31 Jan 2026", date2: "31 Jan 2026", amount: "R 4,200.00", status: "Completed" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-navy mb-6">My Earnings</h1>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-brand-navy p-6 rounded-xl shadow-lg text-white border-t-4 border-brand-gold">
          <p className="text-sm text-gray-400 mb-1">Available Balance</p>
          <p className="text-3xl font-bold text-brand-teal mb-4">R 4,250.00</p>
          <button className="w-full bg-brand-gold text-brand-navy font-bold py-2 rounded">Withdraw Funds</button>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 mb-1">Total Earned (2026)</p>
          <p className="text-3xl font-bold text-brand-navy">R 28,500</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 mb-1">Lessons Completed</p>
          <p className="text-3xl font-bold text-brand-navy">190</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h2 className="text-xl font-bold text-brand-navy mb-4">Recent Payouts</h2>
        <div className="space-y-3">
          {payouts.map(p => (
            <div key={p.id} className="flex justify-between items-center border-b border-gray-100 pb-3">
              <div><p className="font-bold text-brand-navy">{p.id}</p><p className="text-xs text-gray-500">{p.date}</p></div>
              <div className="flex items-center gap-4"><span className="font-bold text-brand-teal">{p.amount}</span><button><Download size={16} className="text-brand-royal"/></button></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}