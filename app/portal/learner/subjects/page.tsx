"use client";

import { useState, useEffect } from 'react';
import { BookOpen, User, TrendingUp, ArrowRight } from 'lucide-react';

export default function MySubjects() {
  const [subjects, setSubjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSubjects = async () => {
      const token = localStorage.getItem('edunova_token');
      try {
        const response = await fetch('https://edunova-academy-qkk5.onrender.com/api/learner/subjects', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) {
          setSubjects(await response.json());
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSubjects();
  }, []);

  if (isLoading) return <div className="p-8 text-gray-500">Loading subjects...</div>;

  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-navy mb-6">My Subjects</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <div key={subject.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-14 h-14 ${subject.color}/10 rounded-xl flex items-center justify-center`}>
                <BookOpen className={`${subject.color.replace('bg-', 'text-')}`} size={28} />
              </div>
              <span className="bg-brand-grey text-gray-600 text-xs font-bold px-3 py-1 rounded-full">{subject.code}</span>
            </div>
            
            <h3 className="text-xl font-bold text-brand-navy mb-1 group-hover:text-brand-royal transition-colors">{subject.name}</h3>
            <p className="text-sm text-gray-500 flex items-center gap-1 mb-4"><User size={14}/> {subject.teacher}</p>
            
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-bold text-gray-500">Progress</span>
                <span className="text-xs font-bold text-brand-navy">{subject.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`h-2 rounded-full ${subject.color}`} style={{ width: `${subject.progress}%` }}></div>
              </div>
            </div>

            <button className="w-full border border-brand-royal text-brand-royal font-bold py-2 rounded text-sm hover:bg-brand-royal hover:text-white transition-colors flex items-center justify-center gap-2">
              Open Subject <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}