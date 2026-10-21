"use client";
import TutorSidebar from "@/components/sidebars/TutorSidebar";
import TopNav from "@/components/TopNav";
import { DollarSign, ArrowUpRight, ArrowDownRight, Download, Wallet, TrendingUp } from "lucide-react";

export default function TutorEarningsPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <TutorSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1200px] mx-auto">
          
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">Earnings & Payouts</h1>
              <p className="text-sm text-gray-500">Track your income and request withdrawals.</p>
            </div>
            <button className="flex items-center gap-2 bg-[#10B981] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-emerald-700 transition-colors">
              <Wallet size={16} /> Request Payout
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
             <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-50 rounded-bl-full -z-0"></div>
               <p className="text-xs text-gray-500 font-bold mb-1 uppercase tracking-wider">Available Balance</p>
               <p className="text-3xl font-bold text-gray-800 mb-2">R 4,250.00</p>
               <p className="text-xs text-emerald-600 font-medium flex items-center gap-1"><ArrowUpRight size={12}/> Ready to withdraw</p>
             </div>
             <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
               <p className="text-xs text-gray-500 font-bold mb-1 uppercase tracking-wider">Total Earned (YTD)</p>
               <p className="text-3xl font-bold text-gray-800 mb-2">R 42,800.00</p>
               <p className="text-xs text-emerald-600 font-medium flex items-center gap-1"><TrendingUp size={12}/> +15% this month</p>
             </div>
             <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
               <p className="text-xs text-gray-500 font-bold mb-1 uppercase tracking-wider">Pending Clearance</p>
               <p className="text-3xl font-bold text-gray-800 mb-2">R 1,500.00</p>
               <p className="text-xs text-amber-600 font-medium flex items-center gap-1">Clears in 3 days</p>
             </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm">
               <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="font-bold text-gray-800">Recent Transactions</h2>
                  <button className="text-xs text-emerald-600 font-medium hover:underline flex items-center gap-1"><Download size={12}/> Export</button>
               </div>
               <table className="w-full text-left text-sm">
                 <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 font-medium">
                   <tr>
                     <th className="px-6 py-3">Date</th>
                     <th className="px-6 py-3">Description</th>
                     <th className="px-6 py-3">Amount</th>
                     <th className="px-6 py-3">Status</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-100">
                   {[
                     { date: "12 Oct 2026", desc: "Maths Session - Maisela N.", amount: "+ R 350.00", status: "Completed", color: "text-emerald-600" },
                     { date: "11 Oct 2026", desc: "Physics Session - Sipho D.", amount: "+ R 400.00", status: "Completed", color: "text-emerald-600" },
                     { date: "10 Oct 2026", desc: "Payout to Bank Account", amount: "- R 2,000.00", status: "Processed", color: "text-gray-600" },
                     { date: "09 Oct 2026", desc: "Maths Group Session", amount: "+ R 800.00", status: "Completed", color: "text-emerald-600" },
                   ].map((txn, i) => (
                     <tr key={i} className="hover:bg-gray-50">
                       <td className="px-6 py-4 text-gray-500">{txn.date}</td>
                       <td className="px-6 py-4 font-medium text-gray-800">{txn.desc}</td>
                       <td className={`px-6 py-4 font-bold ${txn.color}`}>{txn.amount}</td>
                       <td className="px-6 py-4"><span className={`text-xs font-bold ${txn.status === 'Completed' ? 'text-emerald-600' : 'text-gray-500'}`}>{txn.status}</span></td>
                     </tr>
                   ))}
                 </tbody>
               </table>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
               <h2 className="font-bold text-gray-800 mb-4">Payout Method</h2>
               <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-4">
                 <div className="flex items-center gap-3 mb-2">
                   <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded flex items-center justify-center"><DollarSign size={16}/></div>
                   <div>
                     <p className="text-sm font-bold text-gray-800">FNB Bank Account</p>
                     <p className="text-xs text-gray-500">**** **** 4521</p>
                   </div>
                 </div>
                 <p className="text-[10px] text-gray-500">Payouts are processed within 3-5 business days.</p>
               </div>
               <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">Update Bank Details</button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}