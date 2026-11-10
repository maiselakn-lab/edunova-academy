"use client";

import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Video, User } from 'lucide-react';

export default function LessonBookings() {
  const upcoming = [
    { id: 1, subject: "Mathematics: Calculus", tutor: "Mr. T. Nkosi", student: "Junior Dlamini", date: "Tomorrow", time: "15:00" },
    { id: 2, subject: "Physical Sciences", tutor: "Dr. A. Smith", student: "Junior Dlamini", date: "Friday", time: "16:30" }
  ];

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Link href="/portal/parent" className="text-gray-400 hover:text-brand-navy"><ArrowLeft size={24} /></Link>
        <h1 className="text-3xl font-serif font-bold text-brand-navy">Lesson Bookings</h1>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-brand-navy">Upcoming Lessons</h2>
          <button className="bg-brand-royal text-white px-4 py-2 rounded-lg font-bold text-sm">Book New Lesson</button>
        </div>
        <div className="space-y-4">
          {upcoming.map(lesson => (
            <div key={lesson.id} className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg hover:border-brand-royal transition-colors bg-brand-grey/30">
              <div className="w-16 h-16 bg-brand-navy text-white rounded-lg flex flex-col items-center justify-center shrink-0">
                <span className="text-xs font-bold uppercase">{lesson.date}</span>
                <span className="text-lg font-bold">{lesson.time}</span>
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-brand-navy">{lesson.subject}</h3>
                <p className="text-sm text-gray-500 flex items-center gap-2"><User size={14}/>{lesson.tutor} • Student: {lesson.student}</p>
              </div>
              <button className="flex items-center gap-2 bg-brand-teal text-white px-4 py-2 rounded text-sm font-bold hover:bg-teal-600"><Video size={16}/> Join</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}