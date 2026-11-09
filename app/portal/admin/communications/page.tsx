"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, ShieldCheck, CheckCircle2, XCircle } from 'lucide-react';

export default function CommunicationAudit() {
  const [messages, setMessages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      const token = localStorage.getItem('edunova_token');
      try {
        const response = await fetch('https://edunova-academy-qkk5.onrender.com/api/admin/flagged-messages', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) setMessages(await response.json());
      } catch (err) { console.error(err); } 
      finally { setIsLoading(false); }
    };
    fetchMessages();
  }, []);

  if (isLoading) return <div className="p-8 text-gray-500">Loading flagged messages...</div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-serif font-bold text-brand-navy">Communication Audit</h1>
        <Link href="/portal/admin" className="text-brand-royal font-bold text-sm flex items-center gap-2 hover:underline">
          <ArrowLeft size={16} /> Back
        </Link>
      </div>

      <div className="bg-brand-navy/5 border border-brand-navy/20 p-6 rounded-xl mb-8 flex items-start gap-4">
        <ShieldCheck className="text-brand-navy shrink-0 mt-1" size={32} />
        <div>
          <h3 className="text-lg font-bold text-brand-navy m-0">Safeguarding Protocol</h3>
          <p className="text-gray-700 text-sm mt-1">All communications between tutors and minors are monitored. If a tutor attempts to move a conversation off-platform, or discusses inappropriate topics, you will see it here.</p>
        </div>
      </div>

      {messages.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center shadow-sm">
          <CheckCircle2 className="mx-auto text-brand-teal mb-4" size={48} />
          <h2 className="text-xl font-bold text-brand-navy mb-2">All Clear</h2>
          <p className="text-gray-500">There are no flagged messages requiring review.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className={`px-6 py-3 flex justify-between items-center ${msg.severity === 'high' ? 'bg-red-50 border-b border-red-100' : 'bg-orange-50 border-b border-orange-100'}`}>
                <div className="flex items-center gap-2">
                  <AlertTriangle className={msg.severity === 'high' ? 'text-red-500' : 'text-orange-500'} size={18} />
                  <span className={`text-sm font-bold uppercase tracking-wider ${msg.severity === 'high' ? 'text-red-600' : 'text-orange-600'}`}>{msg.severity} Risk Flag</span>
                </div>
                <span className="text-xs font-bold text-gray-500">{msg.timestamp}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 font-medium">
                  <span className="text-brand-navy font-bold">{msg.sender}</span> ({msg.sender_role}) &rarr; 
                  <span className="text-brand-navy font-bold">{msg.receiver}</span> ({msg.receiver_role})
                </div>
                <div className="bg-brand-grey p-4 rounded-lg border border-gray-200 mb-4">
                  <p className="text-gray-800 italic">"{msg.message}"</p>
                </div>
                <div className="flex items-start gap-2 text-sm text-red-600 font-medium mb-6">
                  <AlertTriangle size={16} className="shrink-0 mt-0.5" />
                  <span>Reason: {msg.reason}</span>
                </div>
                <div className="flex gap-3">
                  <button className="bg-brand-teal text-white px-6 py-2 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-teal-600"><CheckCircle2 size={16} /> Resolve</button>
                  <button className="bg-red-500 text-white px-6 py-2 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-red-600"><XCircle size={16} /> Suspend Tutor</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}