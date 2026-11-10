"use client";

import { useState, useEffect } from 'react';
import { BookOpen, Loader2, CheckCircle2, ArrowRight } from 'lucide-react';

export default function StudentSubjects() {
  const [courses, setCourses] = useState<any[]>([]);
  const [enrolments, setEnrolments] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');

  const fetchData = async () => {
    const token = localStorage.getItem('edunova_token');
    try {
      const [coursesRes, enrolmentsRes] = await Promise.all([
        fetch('https://edunova-academy-qkk5.onrender.com/api/courses'),
        fetch('https://edunova-academy-qkk5.onrender.com/api/my-enrolments', { headers: { 'Authorization': `Bearer ${token}` } })
      ]);
      if (coursesRes.ok) setCourses(await coursesRes.json());
      if (enrolmentsRes.ok) setEnrolments(await enrolmentsRes.json());
    } catch (err) { console.error(err); } 
    finally { setIsLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const handleEnrol = async (courseId: number) => {
    const token = localStorage.getItem('edunova_token');
    try {
      const response = await fetch(`https://edunova-academy-qkk5.onrender.com/api/enrol/${courseId}`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.detail);
      setMessage(data.message);
      fetchData(); // Refresh list
    } catch (err: any) {
      setMessage(err.message);
    }
  };

  if (isLoading) return <div className="p-8 text-gray-500">Loading courses...</div>;

  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-navy mb-6">Course Catalogue</h1>
      
      {message && <div className="bg-brand-royal/10 text-brand-royal p-3 rounded-lg mb-6 font-bold">{message}</div>}

      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((course) => {
          const isEnrolled = enrolments.some(e => e.course_title === course.title);
          
          return (
            <div key={course.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-brand-royal/10 p-3 rounded-lg text-brand-royal"><BookOpen size={24} /></div>
                  <span className="bg-brand-grey text-gray-600 text-xs font-bold px-2 py-1 rounded">{course.faculty}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                <p className="text-lg font-bold text-brand-teal mb-4">R {course.price}</p>
              </div>
              
              {isEnrolled ? (
                <div className="w-full py-2 bg-brand-teal/10 text-brand-teal text-center rounded font-bold flex items-center justify-center gap-2">
                  <CheckCircle2 size={16} /> Enrolled
                </div>
              ) : (
                <button onClick={() => handleEnrol(course.id)} className="w-full py-2 bg-brand-royal text-white rounded font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  Enrol Now <ArrowRight size={16} />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}