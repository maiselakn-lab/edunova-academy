"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FileText, CheckCircle2, Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function LessonReports() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    studentName: '',
    subject: '',
    topicCovered: '',
    studentPerformance: '',
    homeworkAssigned: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess(false);

    const token = localStorage.getItem('edunova_token');
    try {
      const response = await fetch('https://edunova-academy-qkk5.onrender.com/api/tutor/reports', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          student_name: formData.studentName,
          subject: formData.subject,
          topic_covered: formData.topicCovered,
          student_performance: formData.studentPerformance,
          homework_assigned: formData.homeworkAssigned
        }),
      });

      if (!response.ok) throw new Error("Failed to submit report.");
      
      setSuccess(true);
      setFormData({ studentName: '', subject: '', topicCovered: '', studentPerformance: '', homeworkAssigned: '' });
      
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-serif font-bold text-brand-navy">Lesson Reports</h1>
        <Link href="/portal/tutor" className="text-brand-royal font-bold text-sm flex items-center gap-2 hover:underline">
          <ArrowLeft size={16} /> Back to Dashboard
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 max-w-3xl">
        <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
          <FileText className="text-brand-royal" size={24} />
          <h2 className="text-xl font-bold text-brand-navy">Submit a New Report</h2>
        </div>

        {error && <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 border border-red-100 font-medium">{error}</div>}
        {success && <div className="bg-brand-teal/10 text-brand-teal p-4 rounded-lg mb-6 border border-brand-teal/20 font-medium flex items-center gap-2"><CheckCircle2 size={18}/> Report submitted successfully!</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-brand-navy mb-2">Student Name</label>
              <input type="text" required value={formData.studentName} onChange={(e) => setFormData({...formData, studentName: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal" placeholder="e.g. Siphelele Blose" />
            </div>
            <div>
              <label className="block text-sm font-bold text-brand-navy mb-2">Subject</label>
              <input type="text" required value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal" placeholder="e.g. Mathematics: Calculus" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-brand-navy mb-2">Topic Covered</label>
            <input type="text" required value={formData.topicCovered} onChange={(e) => setFormData({...formData, topicCovered: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal" placeholder="What was taught in this lesson?" />
          </div>

          <div>
            <label className="block text-sm font-bold text-brand-navy mb-2">Student Performance & Feedback</label>
            <textarea required value={formData.studentPerformance} onChange={(e) => setFormData({...formData, studentPerformance: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-brand-teal" placeholder="How did the student perform?"></textarea>
          </div>

          <div>
            <label className="block text-sm font-bold text-brand-navy mb-2">Homework Assigned</label>
            <textarea required value={formData.homeworkAssigned} onChange={(e) => setFormData({...formData, homeworkAssigned: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg h-20 focus:outline-none focus:ring-2 focus:ring-brand-teal" placeholder="What tasks were assigned?"></textarea>
          </div>

          <button type="submit" disabled={isLoading} className="w-full bg-brand-navy text-white font-bold py-3.5 rounded-lg hover:bg-opacity-90 transition-colors shadow-md flex justify-center items-center gap-2 disabled:opacity-70">
            {isLoading ? <><Loader2 className="animate-spin" size={18}/> Submitting...</> : 'Submit Report'}
          </button>
        </form>
      </div>
    </div>
  );
}