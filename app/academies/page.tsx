"use client";

import Link from 'next/link';
import { useState } from 'react';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { BookOpen, GraduationCap, Building2, Microscope, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AcademiesHub() {
  const [activeTab, setActiveTab] = useState('primary');

  const tabs = [
    { id: 'primary', label: 'Primary & High School', icon: <BookOpen size={18} /> },
    { id: 'college', label: 'College & TVET', icon: <Building2 size={18} /> },
    { id: 'university', label: 'University', icon: <GraduationCap size={18} /> },
    { id: 'postgrad', label: 'Postgraduate & Research', icon: <Microscope size={18} /> },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      
      {/* Hero */}
      <section className="bg-brand-navy py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Academic Programmes</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Explore our comprehensive curriculum from Grade R to PhD, aligned with CAPS, IEB, TVET, and University standards.</p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12 bg-white w-full border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="flex flex-wrap gap-4 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
                  activeTab === tab.id 
                    ? 'bg-brand-navy text-white shadow-md' 
                    : 'bg-brand-grey text-brand-navy hover:bg-gray-200'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-20 w-full">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          
          {/* Primary & High School */}
          {activeTab === 'primary' && (
            <div className="animate-in fade-in duration-300">
              <h2 className="text-3xl font-serif font-bold text-brand-navy mb-8 border-b border-gray-300 pb-4">Primary & High School (Grades R - 12)</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-brand-navy mb-4 text-brand-royal">Foundation & Intermediate Phase (R-6)</h3>
                  <ul className="space-y-3">
                    {["Mathematics", "Home Language", "First Additional Language", "Life Skills", "Natural Sciences & Technology", "Social Sciences"].map((sub, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-600"><CheckCircle2 size={16} className="text-brand-teal"/> {sub}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-brand-navy mb-4 text-brand-royal">Senior & FET Phase (7-12)</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {["Mathematics", "Mathematical Literacy", "Physical Sciences", "Life Sciences", "Accounting", "Business Studies", "Economics", "Geography", "History", "Information Technology", "Engineering Graphics & Design", "Visual Arts"].map((sub, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600 text-sm list-none"><CheckCircle2 size={14} className="text-brand-teal shrink-0"/> {sub}</li>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* College & TVET */}
          {activeTab === 'college' && (
            <div className="animate-in fade-in duration-300">
              <h2 className="text-3xl font-serif font-bold text-brand-navy mb-8 border-b border-gray-300 pb-4">College & TVET Programmes</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Engineering & Related Design", desc: "Mechanical, manufacturing, and design." },
                  { title: "Electrical Infrastructure", desc: "Electrical installation and systems." },
                  { title: "Civil Engineering & Building", desc: "Construction and civil engineering." },
                  { title: "Information Technology", desc: "Programming, computer systems, networking." },
                  { title: "Finance, Economics & Accounting", desc: "Accounting, finance, economics." },
                  { title: "Hospitality & Tourism", desc: "Food preparation, hospitality, travel services." },
                  { title: "NATED Business Management", desc: "Business management, entrepreneurship." },
                  { title: "Trade & Artisan Training", desc: "Electrician, mechanic, welder, plumber." },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-brand-royal transition-colors">
                    <h3 className="font-bold text-brand-navy mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* University */}
          {activeTab === 'university' && (
            <div className="animate-in fade-in duration-300">
              <h2 className="text-3xl font-serif font-bold text-brand-navy mb-8 border-b border-gray-300 pb-4">University Undergraduate Faculties</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Engineering & Built Environment", desc: "Electrical, Mechanical, Civil, Chemical, Mining, Architecture." },
                  { title: "Natural & Applied Sciences", desc: "Mathematics, Physics, Chemistry, Biology, Computer Science, AI." },
                  { title: "Health Sciences", desc: "Medicine, Nursing, Pharmacy, Physiotherapy, Public Health." },
                  { title: "Commerce & Business", desc: "Accounting, Economics, Finance, Business Management, Marketing." },
                  { title: "Humanities & Social Sciences", desc: "Psychology, Sociology, Political Science, History, Education." },
                  { title: "Law", desc: "LLB, Constitutional Law, Criminal Law, Commercial Law." },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-brand-royal transition-colors">
                    <h3 className="font-bold text-brand-navy mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Postgraduate */}
          {activeTab === 'postgrad' && (
            <div className="animate-in fade-in duration-300">
              <h2 className="text-3xl font-serif font-bold text-brand-navy mb-8 border-b border-gray-300 pb-4">Postgraduate & Research</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-brand-navy text-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-brand-gold">Honours Degrees</h3>
                  <p className="text-sm text-gray-300 mb-4">NQF Level 8. Specialisations in Science, Commerce, Engineering, Humanities.</p>
                </div>
                <div className="bg-brand-navy text-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-brand-gold">Master's Degrees</h3>
                  <p className="text-sm text-gray-300 mb-4">NQF Level 9. MBA, MSc, MEd, MA. Coursework and research routes available.</p>
                </div>
                <div className="bg-brand-navy text-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-brand-gold">Doctoral (PhD)</h3>
                  <p className="text-sm text-gray-300 mb-4">NQF Level 10. Advanced research across all academic disciplines.</p>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}