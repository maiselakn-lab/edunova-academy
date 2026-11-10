"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Search, Download, Loader2 } from 'lucide-react';

export default function AuditLogs() {
  const [logs, setLogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLogs = async () => {
      const token = localStorage.getItem('edunova_token');
      try {
        const response = await fetch('https://edunova-academy-qkk5.onrender.com/api/admin/audit-logs', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) setLogs(await response.json());
      } catch (err) { console.error(err); } 
      finally { setIsLoading(false); }
    };
    fetchLogs();
  }, []);

  if (isLoading) return <div className="p-8 text-gray-500">Loading logs...</div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link href="/portal/admin" className="text-gray-400 hover:text-brand-navy"><ArrowLeft size={24} /></Link>
          <h1 className="text-3xl font-serif font-bold text-brand-navy">System Audit Logs</h1>
        </div>
        <button className="text-sm font-bold text-brand-royal flex items-center gap-2 hover:underline"><Download size={16}/> Export Logs</button>
      </div>

      <div className="bg-[#081020] rounded-xl border border-white/10 shadow-lg overflow-hidden">
        <div className="p-4 border-b border-white/10">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input type="text" placeholder="Search logs..." className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold" />
          </div>
        </div>
        <div className="p-6 overflow-x-auto">
          <table className="w-full text-left font-mono text-sm text-green-400">
            <thead className="text-gray-400 border-b border-white/10">
              <tr>
                <th className="pb-3 font-bold">Timestamp</th>
                <th className="pb-3 font-bold">Action</th>
                <th className="pb-3 font-bold">Description</th>
                <th className="pb-3 font-bold">Actor</th>
                <th className="pb-3 font-bold">IP Address</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id} className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-3">{log.timestamp}</td>
                  <td className="py-3 text-brand-gold">{log.action}</td>
                  <td className="py-3 text-gray-300">{log.description}</td>
                  <td className="py-3">{log.actor}</td>
                  <td className="py-3 text-gray-500">{log.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}