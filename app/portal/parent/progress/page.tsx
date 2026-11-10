"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FileText, TrendingUp, BarChart3, Loader2, ArrowRight } from 'lucide-react';

export default function AcademicProgress() {
  const [children, setChildren] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchChildren = async () => {
      const token = localStorage.getItem('edunova_token');
      try {
        const response = await fetch('https://edunova-academy-qkk5.onrender.com/api/parent/dashboard', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) {
          const data = await response.json();
          setChildren(data.children);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchChildren();
  }, []);

  if (isLoading) return <div className="p-8 text-gray-500">Loading progress...</div>;

  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-navy mb-6">Academic Progress</h1>

      {children.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center shadow-sm">
          <FileText className="mx-auto text-gray-300 mb-4" size={48} />
          <h2 className="text-xl font-bold text-brand-navy mb-2">No Children Linked</h2>
          <p className="text-gray-500 mb-6">You need to link a learner to your account to view their progress.</p>
          <Link href="/portal/parent/children" className="bg-brand-royal text-white px-6 py-3 rounded font-bold hover:bg-blue-700 transition-colors">
            Link a Child Account
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          {children.map((child) => (
            <div key={child.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-brand-navy p-6 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-white">{child.name} {child.surname}</h2>
                  <p className="text-gray-300 text-sm">{child.grade} • {child.school}</p>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white/10 rounded-lg p-3 text-center min-w-[90px]">
                    <p className="text-xs text-gray-300">Average</p>
                    <p className="text-xl font-bold text-brand-gold">{child.average}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center min-w-[90px]">
                    <p className="text-xs text-gray-300">Attendance</p>
                    <p className="text-xl font-bold text-brand-teal">{child.attendance}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
                  <BarChart3 className="text-brand-royal" size={20} />
                  <h3 className="text-lg font-bold text-brand-navy">Subject Performance</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { subject: "Mathematics", score: 85, color: "bg-brand-teal" },
                    { subject: "Physical Sciences", score: 72, color: "bg-brand-royal" },
                    { subject: "English", score: 90, color: "bg-brand-teal" },
                    { subject: "History", score: 65, color: "bg-brand-gold" },
                  ].map((sub, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-1">
                        <p className="font-bold text-sm text-brand-navy">{sub.subject}</p>
                        <span className="font-bold text-sm text-brand-royal">{sub.score}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className={`h-2 rounded-full ${sub.color}`} style={{ width: `${sub.score}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href={`/portal/parent/children/${child.id}`} className="mt-6 text-brand-royal font-bold text-sm hover:underline flex items-center gap-2">
                  View Full Profile <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}