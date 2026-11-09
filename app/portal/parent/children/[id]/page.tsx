"use client";

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, User, FileText, CheckCircle2, Loader2 } from 'lucide-react';

export default function ChildProfile() {
  const router = useRouter();
  const params = useParams();
  const childId = params.id;
  
  const [childData, setChildData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchChild = async () => {
      const token = localStorage.getItem('edunova_token');
      if (!token) { router.replace('/login/parent'); return; }

      try {
        const response = await fetch(`https://edunova-academy-qkk5.onrender.com/api/parent/child/${childId}`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });

        if (response.ok) {
          setChildData(await response.json());
        } else {
          setError("Access Denied. You are not authorized to view this child.");
        }
      } catch (err) {
        setError("Failed to load child profile.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchChild();
  }, [childId, router]);

  if (isLoading) return <div className="p-8 text-gray-500">Loading profile...</div>;
  if (error) return <div className="p-8 text-red-500 font-bold">{error}</div>;

  return (
    <div>
      <Link href="/portal/parent/children" className="text-sm font-bold text-brand-royal hover:underline flex items-center gap-2 mb-6">
        <ArrowLeft size={16} /> Back to My Children
      </Link>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8 flex flex-col md:flex-row items-center gap-8">
        <div className="w-24 h-24 bg-brand-royal/10 text-brand-royal rounded-full flex items-center justify-center font-bold text-4xl shrink-0">
          {childData.name.charAt(0)}
        </div>
        <div>
          <h1 className="text-3xl font-serif font-bold text-brand-navy mb-2">{childData.name}</h1>
          <p className="text-gray-500 font-medium">{childData.email}</p>
          <span className="inline-block mt-2 bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Learner Account</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <FileText className="text-brand-royal mb-4" size={24} />
          <p className="text-sm text-gray-500 font-bold mb-1">Average Grade</p>
          <p className="text-3xl font-bold text-brand-navy">{childData.average}</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <CheckCircle2 className="text-brand-teal mb-4" size={24} />
          <p className="text-sm text-gray-500 font-bold mb-1">Attendance</p>
          <p className="text-3xl font-bold text-brand-navy">{childData.attendance}</p>
        </div>
        <div className="bg-brand-navy p-6 rounded-xl shadow-lg text-white">
          <User className="text-brand-gold mb-4" size={24} />
          <p className="text-sm text-gray-400 font-bold mb-1">Tutor Feedback</p>
          <p className="text-sm text-gray-200 italic">"{childData.recent_feedback}"</p>
        </div>
      </div>
    </div>
  );
}