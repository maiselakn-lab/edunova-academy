"use client";
import AdminSidebar from "@/components/sidebars/AdminSidebar";
import TopNav from "@/components/TopNav";
import { DollarSign, ArrowUpRight, ArrowDownRight, CreditCard, Download, Search, Filter } from "lucide-react";

export default function AdminPaymentsPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <AdminSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1400px] mx-auto">
          
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">Financials & Payments</h1>
              <p className="text-sm text-gray-500">Track subscriptions, tutor payouts, and platform revenue.</p>
            </div>
            <button className="flex items-center gap-2 bg-[#1E1B4B] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-900 transition-colors">
              <Download size={16} /> Export Financials
            </button>
          </div>

          {/* Financial Stats */}
          <div className="grid grid-cols-4 gap-6 mb-8">
             <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
               <div className="flex justify-between items-start mb-2">
                 <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600"><DollarSign size={20}/></div>
                 <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded flex items-center gap-1"><ArrowUpRight size={12}/> +15%</span>
               </div>
               <p className="text-2xl font-bold text-gray-800">R 245,500</p>
               <p className="text-xs text-gray-500 font-medium">Total Revenue (YTD)</p>
             </div>
             <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
               <div className="flex justify-between items-start mb-2">
                 <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600"><CreditCard size={20}/></div>
               </div>
               <p className="text-2xl font-bold text-gray-800">1,240</p>
               <p className="text-xs text-gray-500 font-medium">Active Subscriptions</p>
             </div>
             <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
               <div className="flex justify-between items-start mb-2">
                 <div className="bg-amber-100 p-2 rounded-lg text-amber-600"><ArrowDownRight size={20}/></div>
               </div>
               <p className="text-2xl font-bold text-gray-800">R 85,200</p>
               <p className="text-xs text-gray-500 font-medium">Tutor Payouts (Pending)</p>
             </div>
             <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
               <div className="flex justify-between items-start mb-2">
                 <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><DollarSign size={20}/></div>
               </div>
               <p className="text-2xl font-bold text-gray-800">R 160,300</p>
               <p className="text-xs text-gray-500 font-medium">Net Platform Profit</p>
             </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="font-bold text-gray-800">Recent Transactions</h2>
                <div className="flex gap-2">
                   <button className="p-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50"><Filter size={16}/></button>
                   <div className="flex items-center bg-gray-50 rounded-lg px-3 py-1.5 border border-gray-300">
                     <Search size={16} className="text-gray-400" />
                     <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none ml-2 w-40 text-xs" />
                   </div>
                </div>
              </div>
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 font-medium">
                  <tr>
                    <th className="px-6 py-3">Transaction ID</th>
                    <th className="px-6 py-3">User</th>
                    <th className="px-6 py-3">Type</th>
                    <th className="px-6 py-3">Amount</th>
                    <th className="px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { id: "TXN-8901", user: "Maisela Norman", type: "Monthly Sub", amount: "R 299.00", status: "Completed", color: "text-emerald-600" },
                    { id: "TXN-8902", user: "Dr. Thabo Nkosi", type: "Tutor Payout", amount: "- R 1,500.00", status: "Processing", color: "text-amber-600" },
                    { id: "TXN-8903", user: "Sipho Dlamini", type: "University Sub", amount: "R 599.00", status: "Completed", color: "text-emerald-600" },
                    { id: "TXN-8904", user: "Lerato Khumalo", type: "Monthly Sub", amount: "R 299.00", status: "Failed", color: "text-red-600" },
                  ].map((txn, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-mono text-xs text-gray-500">{txn.id}</td>
                      <td className="px-6 py-4 font-bold text-gray-800">{txn.user}</td>
                      <td className="px-6 py-4 text-gray-600">{txn.type}</td>
                      <td className="px-6 py-4 font-bold text-gray-800">{txn.amount}</td>
                      <td className="px-6 py-4"><span className={`font-bold text-xs ${txn.color}`}>{txn.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="font-bold text-gray-800 mb-4">Subscription Breakdown</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1"><span className="text-gray-600 font-medium">Learner (R299/mo)</span><span className="font-bold text-gray-800">850</span></div>
                  <div className="w-full bg-gray-100 rounded-full h-2"><div className="bg-blue-500 h-2 rounded-full" style={{ width: '68%' }}></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1"><span className="text-gray-600 font-medium">Student (R599/mo)</span><span className="font-bold text-gray-800">320</span></div>
                  <div className="w-full bg-gray-100 rounded-full h-2"><div className="bg-indigo-500 h-2 rounded-full" style={{ width: '35%' }}></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1"><span className="text-gray-600 font-medium">Institutional</span><span className="font-bold text-gray-800">70</span></div>
                  <div className="w-full bg-gray-100 rounded-full h-2"><div className="bg-purple-500 h-2 rounded-full" style={{ width: '15%' }}></div></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}