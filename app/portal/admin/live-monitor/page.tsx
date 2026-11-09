"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Video, Eye, Clock, User, Loader2, ShieldAlert } from 'lucide-react';

export default function LiveMonitor() {
  const [sessions, setSessions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSessions = async () => {
      const token = localStorage.getItem('edunova_token');
      try {
        const response = await fetch('https://edunova-academy-qkk5.onrender.com/api/admin/live-sessions', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) {
          setSessions(await response.json());
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSessions();
  }, []);

  if (isLoading) return <div className="p-8 text-gray-500">Loading live monitor...</div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-serif font-bold text-brand-navy">Live Class Monitor</h1>
          <p className="text-gray-500 mt-1">Monitor active sessions for quality assurance and safeguarding.</p>
        </div>
        <Link href="/portal/admin" className="text-brand-royal font-bold text-sm flex items-center gap-2 hover:underline">
          <ArrowLeft size={16} /> Back to Command Center
        </Link>
      </div>

      {sessions.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center shadow-sm">
          <Video className="mx-auto text-gray-300 mb-4" size={48} />
          <h2 className="text-xl font-bold text-brand-navy mb-2">No Active Sessions</h2>
          <p className="text-gray-500">There are currently no lessons taking place on the platform.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sessions.map((session) => (
            <div key={session.id} className="bg-brand-navy rounded-2xl shadow-lg border border-white/10 overflow-hidden text-white relative">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
              
              <div className="p-6 relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <span className="flex items-center gap-2 bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> Live Now
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1"><Clock size={12}/> {session.duration}</span>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{session.subject}</h3>
                  <p className="text-sm text-gray-300 flex items-center gap-2 mb-1"><User size={14}/> Tutor: {session.tutor_name}</p>
                  <p className="text-sm text-gray-300 flex items-center gap-2"><User size={14}/> Student: {session.student_name}</p>
                </div>

                <div className="flex gap-2">
                  <button className="flex-grow bg-brand-teal text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-teal-600 transition-colors shadow-md">
                    <Eye size={18} /> Observe
                  </button>
                  <button className="bg-red-500/20 text-red-400 p-2.5 rounded-lg hover:bg-red-500/30 transition-colors" title="Flag for Review">
                    <ShieldAlert size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}