"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Plus, Edit, Trash2 } from 'lucide-react';

export default function AcademicManagement() {
  const [subjects] = useState([
    { id: 1, name: "Mathematics", level: "Secondary", code: "MATH-11" },
    { id: 2, name: "Physical Sciences", level: "Secondary", code: "PHYS-11" },
    { id: 3, name: "English Home Language", level: "Primary", code: "ENG-07" },
    { id: 4, name: "Electrical Engineering", level: "TVET", code: "ELEC-N3" },
    { id: 5, name: "Computer Science", level: "University", code: "CS-101" },
  ]);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link href="/portal/admin" className="text-gray-400 hover:text-brand-navy"><ArrowLeft size={24} /></Link>
          <h1 className="text-3xl font-serif font-bold text-brand-navy">Academic Management</h1>
        </div>
        <button className="bg-brand-royal text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-blue-700 transition-colors">
          <Plus size={16} /> Add New Subject
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 font-bold mb-1">Total Subjects</p>
          <p className="text-3xl font-bold text-brand-navy">{subjects.length}</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 font-bold mb-1">Active Courses</p>
          <p className="text-3xl font-bold text-brand-navy">12</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 font-bold mb-1">Enrolled Learners</p>
          <p className="text-3xl font-bold text-brand-navy">142</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-brand-grey text-gray-500 text-sm">
            <tr>
              <th className="p-4 font-bold">Subject Name</th>
              <th className="p-4 font-bold">Level</th>
              <th className="p-4 font-bold">Code</th>
              <th className="p-4 font-bold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {subjects.map((sub) => (
              <tr key={sub.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4 font-bold text-brand-navy flex items-center gap-2">
                  <BookOpen size={16} className="text-brand-royal" /> {sub.name}
                </td>
                <td className="p-4 text-gray-600">{sub.level}</td>
                <td className="p-4 text-gray-500 font-mono">{sub.code}</td>
                <td className="p-4 text-right flex justify-end gap-2">
                  <button className="p-2 text-brand-royal hover:bg-brand-royal/10 rounded"><Edit size={16} /></button>
                  <button className="p-2 text-red-500 hover:bg-red-50 rounded"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}