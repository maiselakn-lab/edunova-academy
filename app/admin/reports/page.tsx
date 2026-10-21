"use client";
import AdminSidebar from "@/components/sidebars/AdminSidebar";
import TopNav from "@/components/TopNav";
import { Download, TrendingUp, Users, DollarSign, Calendar } from "lucide-react";

export default function AdminReportsPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <AdminSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1200px] mx-auto">
          
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">Platform Reports</h1>
              <p className="text-sm text-gray-500">Financial performance and user engagement analytics.</p>
            </div>
            <button className="flex items-center gap-2 bg-[#1E1B4B] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-900 transition-colors">
              <Download size={16} /> Export Data (CSV)
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
             <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-3"><DollarSign size={24}/></div>
                <p className="text-3xl font-bold text-gray-800">R 245,000</p>
                <p className="text-sm text-gray-500 font-medium mt-1">Total Revenue (YTD)</p>
             </div>
             <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-3"><TrendingUp size={24}/></div>
                <p className="text-3xl font-bold text-gray-800">+ 24%</p>
                <p className="text-sm text-gray-500 font-medium mt-1">Growth vs Last Year</p>
             </div>
             <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3"><Users size={24}/></div>
                <p className="text-3xl font-bold text-gray-800">8,400</p>
                <p className="text-sm text-gray-500 font-medium mt-1">Active Subscriptions</p>
             </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h2 className="font-bold text-gray-800 mb-6">Monthly Revenue Breakdown</h2>
            <div className="space-y-6">
              {[
                { month: "October 2026", value: "R 45,000", width: "80%", color: "bg-indigo-500" },
                { month: "September 2026", value: "R 38,000", width: "65%", color: "bg-indigo-400" },
                { month: "August 2026", value: "R 32,000", width: "55%", color: "bg-indigo-300" },
                { month: "July 2026", value: "R 28,000", width: "45%", color: "bg-indigo-200" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 font-medium flex items-center gap-2"><Calendar size={14} className="text-gray-400"/> {item.month}</span>
                    <span className="font-bold text-gray-800">{item.value}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3"><div className={`${item.color} h-3 rounded-full`} style={{ width: item.width }}></div></div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}