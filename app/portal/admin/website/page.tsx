"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Save, Loader2, CheckCircle2 } from 'lucide-react';

export default function EditWebsite() {
  const [formData, setFormData] = useState({
    homepage_hero_title: '',
    homepage_hero_subtitle: '',
    contact_email: '',
    contact_phone: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchContent = async () => {
      const token = localStorage.getItem('edunova_token');
      try {
        const response = await fetch('https://edunova-academy-qkk5.onrender.com/api/admin/website-content', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) setFormData(await response.json());
      } catch (err) { console.error(err); } 
      finally { setIsLoading(false); }
    };
    fetchContent();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSuccess(false);
    const token = localStorage.getItem('edunova_token');
    try {
      const response = await fetch('https://edunova-academy-qkk5.onrender.com/api/admin/website-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(formData)
      });
      if (response.ok) setSuccess(true);
    } catch (err) { console.error(err); } 
    finally { setIsSaving(false); setTimeout(() => setSuccess(false), 3000); }
  };

  if (isLoading) return <div className="p-8 text-gray-500">Loading content...</div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-serif font-bold text-brand-navy">Edit Website Content</h1>
        <Link href="/portal/admin" className="text-brand-royal font-bold text-sm flex items-center gap-2 hover:underline"><ArrowLeft size={16} /> Back</Link>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 max-w-3xl">
        {success && <div className="bg-brand-teal/10 text-brand-teal p-3 rounded-lg mb-6 flex items-center gap-2"><CheckCircle2 size={18}/> Content updated successfully!</div>}
        
        <form onSubmit={handleSave} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-brand-navy mb-2">Homepage Hero Title</label>
            <input type="text" value={formData.homepage_hero_title} onChange={(e) => setFormData({...formData, homepage_hero_title: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-royal" />
          </div>
          <div>
            <label className="block text-sm font-bold text-brand-navy mb-2">Homepage Hero Subtitle</label>
            <textarea value={formData.homepage_hero_subtitle} onChange={(e) => setFormData({...formData, homepage_hero_subtitle: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-brand-royal" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-brand-navy mb-2">Contact Email</label>
              <input type="email" value={formData.contact_email} onChange={(e) => setFormData({...formData, contact_email: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-royal" />
            </div>
            <div>
              <label className="block text-sm font-bold text-brand-navy mb-2">Contact Phone</label>
              <input type="text" value={formData.contact_phone} onChange={(e) => setFormData({...formData, contact_phone: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-royal" />
            </div>
          </div>
          <button type="submit" disabled={isSaving} className="bg-brand-navy text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-opacity-90 disabled:opacity-70">
            {isSaving ? <Loader2 className="animate-spin" size={18}/> : <Save size={18}/>} Publish Changes
          </button>
        </form>
      </div>
    </div>
  );
}