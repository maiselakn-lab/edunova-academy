"use client";

import { useState, useEffect } from 'react';
import { Users, Mail, FileText, ArrowRight } from 'lucide-react';

export default function MyStudents() {
  const [students, setStudents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      const token = localStorage.getItem('edunova_token');
      try {
        const response = await fetch('https://edunova-academy-qkk5.onrender.com/api/tutor/students', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) {
          setStudents(await response.json());
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchStudents();
  }, []);

  if (isLoading) return <div className="p-8 text-gray-500">Loading students...</div>;

  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-navy mb-6">My Students</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {students.map((student) => (
          <div key={student.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-brand-navy">{student.name}</h3>
                <p className="text-sm text-gray-500">{student.grade} • {student.subject}</p>
                <p className="text-xs text-gray-400 mt-1 flex items-center gap-1"><Mail size={12}/> {student.email}</p>
              </div>
              <span className="bg-brand-teal/10 text-brand-teal text-xs font-bold px-3 py-1 rounded-full">{student.progress}% Avg</span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div className="bg-brand-teal h-2 rounded-full" style={{ width: `${student.progress}%` }}></div>
            </div>
            
            <div className="flex gap-2">
              <button className="flex-grow bg-brand-royal text-white py-2 rounded text-sm font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"><FileText size={16}/> View Reports</button>
              <button className="flex-grow border border-gray-300 text-gray-600 py-2 rounded text-sm font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"><Mail size={16}/> Message</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}