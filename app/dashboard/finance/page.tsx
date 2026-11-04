"use client";
import { useState } from "react";
import { Plus, Search, Download, X, ArrowUpRight, TrendingUp, AlertCircle } from "lucide-react";

export default function FinancePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  const invoices = [
    { id: "INV-001", student: "John Doe", amount: "R 5,000.00", status: "Paid", date: "2026-10-24" },
    { id: "INV-002", student: "Jane Smith", amount: "R 5,000.00", status: "Pending", date: "2026-10-25" },
    { id: "INV-003", student: "Mike Johnson", amount: "R 2,500.00", status: "Overdue", date: "2026-10-20" },
    { id: "INV-004", student: "Sarah Williams", amount: "R 5,000.00", status: "Paid", date: "2026-10-18" },
  ];

  const filteredInvoices = activeTab === "all" ? invoices : invoices.filter(i => i.status.toLowerCase() === activeTab);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Finance & Fees</h1>
          <p className="text-sm text-slate-400 mt-1">Manage invoices, payments, and debtors.</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all shadow-lg shadow-orange-500/20">
          <Plus size={16} /> Record Payment
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#0F1926] p-6 rounded-xl border border-white/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center"><TrendingUp size={20} /></div>
            <p className="text-sm font-medium text-slate-400">Total Collected</p>
          </div>
          <p className="text-2xl font-bold text-white">R 125,000.00</p>
        </div>
        <div className="bg-[#0F1926] p-6 rounded-xl border border-white/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center"><AlertCircle size={20} /></div>
            <p className="text-sm font-medium text-slate-400">Pending Invoices</p>
          </div>
          <p className="text-2xl font-bold text-white">R 42,500.00</p>
        </div>
        <div className="bg-[#0F1926] p-6 rounded-xl border border-white/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center"><AlertCircle size={20} /></div>
            <p className="text-sm font-medium text-slate-400">Overdue Fees</p>
          </div>
          <p className="text-2xl font-bold text-white">R 12,000.00</p>
        </div>
      </div>

      {/* Table Area */}
      <div className="bg-[#0F1926] border border-white/5 rounded-xl overflow-hidden">
        <div className="p-4 border-b border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex gap-2">
            {["all", "paid", "pending", "overdue"].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium capitalize rounded-lg transition-colors ${
                  activeTab === tab ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input type="text" placeholder="Search invoices..." className="w-full bg-[#162233] border border-white/5 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500/50" />
            </div>
            <button className="p-2 border border-white/5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors" title="Export CSV">
              <Download size={18} />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-white/5 border-b border-white/5 text-slate-400">
              <tr>
                <th className="px-6 py-3 font-medium">Invoice ID</th>
                <th className="px-6 py-3 font-medium">Student</th>
                <th className="px-6 py-3 font-medium">Amount</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Date</th>
                <th className="px-6 py-3 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-200">
              {filteredInvoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-medium">{inv.id}</td>
                  <td className="px-6 py-4">{inv.student}</td>
                  <td className="px-6 py-4 font-medium">{inv.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                      inv.status === 'Paid' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                      inv.status === 'Pending' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' :
                      'bg-red-500/10 text-red-400 border-red-500/20'
                    }`}>
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-400">{inv.date}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-orange-500 hover:underline text-xs font-medium">View Receipt</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Record Payment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#0F1926] border border-white/10 rounded-2xl w-full max-w-md p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">Record Payment</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white transition-colors"><X size={20} /></button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Student</label>
                <select className="w-full bg-[#08101A] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500">
                  <option>John Doe (INV-001)</option>
                  <option>Jane Smith (INV-002)</option>
                  <option>Mike Johnson (INV-003)</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Amount (R)</label>
                  <input required type="number" placeholder="5000.00" className="w-full bg-[#08101A] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Payment Method</label>
                  <select className="w-full bg-[#08101A] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500">
                    <option>Bank Transfer</option>
                    <option>Cash</option>
                    <option>Card</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Reference / Notes</label>
                <input type="text" placeholder="e.g. Term 1 fees" className="w-full bg-[#08101A] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500" />
              </div>
              <div className="pt-4 flex justify-end gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">Cancel</button>
                <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Save Payment</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}