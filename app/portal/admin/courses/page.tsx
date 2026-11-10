"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Plus, Loader2, CheckCircle2 } from 'lucide-react';

export default function AdminCourses() {
  const [formData, setFormData] = useState({ title: '', description: '', faculty: 'Secondary', price: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setIsLoading(true); setSuccess(false);
    const token = localStorage.getItem('edunova_token');
    try {
      const response = await fetch('https://edunova-academy-qkk5.onrender.com/api/admin/courses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ ...formData, price: parseInt(formData.price) })
      });
      if (response.ok) {
        setSuccess(true);
        setFormData({ title: '', description: '', faculty: 'Secondary', price: '' });
      }
    } catch (err) { console.error(err); } 
    finally { setIsLoading(false); }
  };

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Link href="/portal/admin" className="text-gray-400 hover:text-brand-navy"><ArrowLeft size={24} /></Link>
        <h1 className="text-3xl font-serif font-bold text-brand-navy">Course Manager</h1>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 max-w-2xl">
        <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
          <BookOpen className="text-brand-royal" size={24} />
          <h2 className="text-xl font-bold text-brand-navy">Create a New Course</h2>
        </div>

        {success && <div className="bg-brand-teal/10 text-brand-teal p-3 rounded-lg mb-6 flex items-center gap-2"><CheckCircle2 size={18}/> Course created successfully!</div>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-brand-navy mb-2">Course Title</label>
            <input type="text" required value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg" placeholder="e.g. Grade 11 Mathematics Masterclass" />
          </div>
          <div>
            <label className="block text-sm font-bold text-brand-navy mb-2">Description</label>
            <textarea required value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg h-24" placeholder="What will students learn?"></textarea>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-brand-navy mb-2">Faculty</label>
              <select value={formData.faculty} onChange={(e) => setFormData({...formData, faculty: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg text-gray-600">
                <option>Primary</option>
                <option>Secondary</option>
                <option>TVET</option>
                <option>University</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-brand-navy mb-2">Price (ZAR)</label>
              <input type="number" required value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg" placeholder="e.g. 1500" />
            </div>
          </div>
          <button type="submit" disabled={isLoading} className="w-full bg-brand-navy text-white font-bold py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-opacity-90">
            {isLoading ? <Loader2 className="animate-spin" size={18}/> : <><Plus size={18}/> Create Course</>}
          </button>
        </form>
      </div>
    </div>
  );
}