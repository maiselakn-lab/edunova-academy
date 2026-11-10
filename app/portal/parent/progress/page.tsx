"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Loader2, FileText } from 'lucide-react';

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
      } catch (err) { console.error(err); } 
      finally { setIsLoading(false); }
    };
    fetchChildren();
  }, []);

  if (isLoading) return <div className="p-8 text-gray-500">Loading...</div>;

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
        <div className="grid md:grid-cols-2 gap-6">
          {children.map((child) => (
            <div key={child.id} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-brand-royal/10 text-brand-royal rounded-full flex items-center justify-center font-bold text-2xl">
                  {child.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-navy">{child.name} {child.surname}</h3>
                  <p className="text-sm text-gray-500">{child.grade} • {child.school}</p>
                </div>
              </div>
              <Link href={`/portal/parent/progress/${child.id}`} className="mt-4 inline-flex items-center gap-2 text-brand-royal font-bold text-sm hover:underline">
                View Academic Progress <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}