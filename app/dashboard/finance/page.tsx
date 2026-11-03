"use client";
import { useState } from "react";
import { Plus, Search, CreditCard, TrendingUp, AlertCircle } from "lucide-react";
import Modal from "@/components/ui/Modal";

export default function FinancePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock data for now
  const invoices = [
    { id: "INV-001", student: "John Doe", amount: "R 5,000.00", status: "Paid", date: "2026-10-24" },
    { id: "INV-002", student: "Jane Smith", amount: "R 5,000.00", status: "Pending", date: "2026-10-25" },
    { id: "INV-003", student: "Mike Johnson", amount: "R 2,500.00", status: "Overdue", date: "2026-10-20" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Finance & Fees</h1>
          <p className="text-sm text-muted-foreground">Manage invoices, payments, and debtors.</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
          <Plus size={16} /> Record Payment
        </button>
      </div>

      {/* Finance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card p-6 rounded-xl border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center"><TrendingUp size={20} /></div>
            <p className="text-sm font-medium text-muted-foreground">Total Collected</p>
          </div>
          <p className="text-2xl font-bold text-foreground">R 125,000.00</p>
        </div>
        <div className="bg-card p-6 rounded-xl border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center"><AlertCircle size={20} /></div>
            <p className="text-sm font-medium text-muted-foreground">Pending Invoices</p>
          </div>
          <p className="text-2xl font-bold text-foreground">R 42,500.00</p>
        </div>
        <div className="bg-card p-6 rounded-xl border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center"><CreditCard size={20} /></div>
            <p className="text-sm font-medium text-muted-foreground">Overdue Fees</p>
          </div>
          <p className="text-2xl font-bold text-foreground">R 12,000.00</p>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden mt-8">
        <div className="p-4 border-b border-border flex items-center gap-2">
          <Search size={18} className="text-muted-foreground" />
          <input type="text" placeholder="Search invoices..." className="bg-transparent border-none outline-none text-sm w-full placeholder:text-muted-foreground text-foreground" />
        </div>
        <table className="w-full text-sm text-left">
          <thead className="bg-muted/50 border-b border-border text-muted-foreground">
            <tr>
              <th className="px-6 py-3 font-medium">Invoice ID</th>
              <th className="px-6 py-3 font-medium">Student</th>
              <th className="px-6 py-3 font-medium">Amount</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-foreground">
            {invoices.map((inv) => (
              <tr key={inv.id} className="hover:bg-muted/30">
                <td className="px-6 py-4 font-medium">{inv.id}</td>
                <td className="px-6 py-4">{inv.student}</td>
                <td className="px-6 py-4">{inv.amount}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    inv.status === 'Paid' ? 'bg-emerald-500/10 text-emerald-500' :
                    inv.status === 'Pending' ? 'bg-orange-500/10 text-orange-500' :
                    'bg-red-500/10 text-red-500'
                  }`}>
                    {inv.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-muted-foreground">{inv.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Record Payment">
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1">Student</label>
            <select className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none">
              <option>John Doe</option>
              <option>Jane Smith</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1">Amount (R)</label>
            <input type="number" required placeholder="5000.00" className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none" />
          </div>
          <div className="flex justify-end gap-2 pt-4">
            <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted">Cancel</button>
            <button type="submit" className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90">Save Payment</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}