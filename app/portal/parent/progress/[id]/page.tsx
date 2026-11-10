"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Loader2, Quote, CheckCircle2 } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function ChildProgress() {
  const params = useParams();
  const childId = params.id;
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProgress = async () => {
      const token = localStorage.getItem('edunova_token');
      try {
        const response = await fetch(`https://edunova-academy-qkk5.onrender.com/api/parent/child/${childId}/progress`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) {
          setData(await response.json());
        } else {
          setError("Unable to load progress. You may not be authorized.");
        }
      } catch (err) {
        setError("Network error. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProgress();
  }, [childId]);

  if (isLoading) return <div className="p-8 text-gray-500">Loading progress...</div>;
  if (error) return <div className="p-8 text-red-500 font-bold">{error}</div>;

  return (
    <div>
      <Link href="/portal/parent/progress" className="text-sm font-bold text-brand-royal hover:underline flex items-center gap-2 mb-6">
        <ArrowLeft size={16} /> Back to Progress Overview
      </Link>

      <div className="bg-brand-navy rounded-2xl p-8 text-white mb-8 relative overflow-hidden shadow-lg">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-royal/20 rounded-bl-full -mr-10 -mt-10"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-serif font-bold text-white">{data.child_name}</h1>
              <span className="bg-brand-gold/20 text-brand-gold text-xs font-bold px-2 py-1 rounded border border-brand-gold/30">{data.grade}</span>
            </div>
            <p className="text-gray-300">School: {data.school}</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white/10 rounded-lg p-3 text-center min-w-[100px] border border-white/10"><p className="text-sm text-gray-300 font-medium">Average</p><p className="text-xl font-bold text-brand-gold">{data.average}</p></div>
            <div className="bg-white/10 rounded-lg p-3 text-center min-w-[100px] border border-white/10"><p className="text-sm text-gray-300 font-medium">Attendance</p><p className="text-xl font-bold text-brand-teal">{data.attendance}</p></div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-brand-navy mb-6">Subject Performance</h2>
        <div className="space-y-4">
          {data.subjects.map((sub: any, i: number) => (
            <div key={i}>
              <div className="flex justify-between items-center mb-1">
                <p className="font-bold text-sm text-brand-navy">{sub.name}</p>
                <span className="font-bold text-sm text-brand-royal">{sub.score}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`h-2 rounded-full ${sub.color}`} style={{ width: `${sub.score}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-brand-navy rounded-xl p-6 text-white">
        <Quote className="text-brand-gold mb-4 opacity-50" size={32} />
        <p className="text-gray-200 italic mb-4">"{data.recent_feedback}"</p>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <CheckCircle2 size={16} className="text-brand-teal" />
          Latest Tutor Feedback
        </div>
      </div>
    </div>
  );
}