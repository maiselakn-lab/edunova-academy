"use client";

import { useState, useEffect } from 'react';
import { FileText, Download } from 'lucide-react';

export default function Marks() {
  const [marks, setMarks] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMarks = async () => {
      const token = localStorage.getItem('edunova_token');
      try {
        const response = await fetch('https://edunova-academy-qkk5.onrender.com/api/learner/marks', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) {
          setMarks(await response.json());
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMarks();
  }, []);

  if (isLoading) return <div className="p-8 text-gray-500">Loading marks...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-serif font-bold text-brand-navy">My Marks</h1>
        <button className="bg-brand-royal text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-blue-700 transition-colors">
          <Download size={16} /> Download Report
        </button>
      </div>
      
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-brand-grey border-b border-gray-200 text-gray-500 text-sm">
            <tr>
              <th className="p-4 font-bold">Subject</th>
              <th className="p-4 font-bold">Assessment</th>
              <th className="p-4 font-bold">Date</th>
              <th className="p-4 font-bold text-right">Score</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {marks.map((mark) => (
              <tr key={mark.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4 font-bold text-brand-navy">{mark.subject}</td>
                <td className="p-4 text-gray-600">{mark.assessment}</td>
                <td className="p-4 text-gray-500">{mark.date}</td>
                <td className={`p-4 text-right font-bold ${mark.color}`}>{mark.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}