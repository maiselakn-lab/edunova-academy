import { CreditCard, Download, CheckCircle2 } from 'lucide-react';

export default function Billing() {
  const invoices = [
    { id: "INV-2026-003", date: "01 Mar 2026", amount: "R 850.00", status: "Paid" },
    { id: "INV-2026-002", date: "01 Feb 2026", amount: "R 850.00", status: "Paid" },
    { id: "INV-2026-001", date: "01 Jan 2026", amount: "R 850.00", status: "Paid" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-navy mb-6">Payments & Invoices</h1>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-brand-navy p-6 rounded-xl shadow-lg text-white">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><CreditCard size={20}/> Outstanding Balance</h2>
          <p className="text-4xl font-bold text-brand-gold mb-2">R 450.00</p>
          <p className="text-sm text-gray-300 mb-6">Due by 25 March 2026</p>
          <button className="w-full bg-brand-gold text-brand-navy font-bold py-3 rounded">Pay Now</button>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-lg font-bold text-brand-navy mb-4">Payment Method</h2>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-8 bg-brand-navy rounded flex items-center justify-center text-white text-xs font-bold">VISA</div>
            <div><p className="font-bold text-brand-navy">**** **** **** 4242</p><p className="text-xs text-gray-500">Expires 12/28</p></div>
          </div>
          <button className="text-sm font-bold text-brand-royal hover:underline">Update Card Details</button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-brand-navy">Invoice History</h2>
        </div>
        <table className="w-full text-left">
          <thead className="bg-brand-grey text-gray-500 text-sm">
            <tr><th className="p-4 font-bold">Invoice ID</th><th className="p-4 font-bold">Date</th><th className="p-4 font-bold">Amount</th><th className="p-4 font-bold">Status</th><th className="p-4 font-bold text-right">Download</th></tr>
          </thead>
          <tbody className="text-sm">
            {invoices.map(inv => (
              <tr key={inv.id} className="border-b border-gray-100">
                <td className="p-4 font-bold text-brand-navy">{inv.id}</td>
                <td className="p-4 text-gray-500">{inv.date}</td>
                <td className="p-4 font-bold">{inv.amount}</td>
                <td className="p-4"><span className="bg-brand-teal/10 text-brand-teal px-2 py-1 rounded text-xs font-bold flex items-center gap-1 w-fit"><CheckCircle2 size={12}/> {inv.status}</span></td>
                <td className="p-4 text-right"><button><Download size={16} className="text-brand-royal"/></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}