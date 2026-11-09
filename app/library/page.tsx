import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { Search, Book, FileText, Video, Download, Filter } from 'lucide-react';

export default function Library() {
  const resources = [
    { title: "Grade 12 Maths P1 (Nov 2025)", type: "Past Paper", icon: <FileText size={24} />, size: "2.4 MB", category: "Secondary" },
    { title: "Physical Sciences Mechanics Notes", type: "Study Notes", icon: <Book size={24} />, size: "1.8 MB", category: "Secondary" },
    { title: "Calculus Video Lecture", type: "Video", icon: <Video size={24} />, size: "45 mins", category: "Secondary" },
    { title: "Accounting Financial Statements", type: "Study Notes", icon: <Book size={24} />, size: "3.1 MB", category: "College" },
    { title: "English Literature Poetry Guide", type: "Past Paper", icon: <FileText size={24} />, size: "1.2 MB", category: "Secondary" },
    { title: "University Statistics Tutorial", type: "Video", icon: <Video size={24} />, size: "1h 10m", category: "University" },
    { title: "TVET Electrical Engineering N3", type: "Past Paper", icon: <FileText size={24} />, size: "1.5 MB", category: "College" },
    { title: "Primary School Numeracy Workbook", type: "Study Notes", icon: <Book size={24} />, size: "4.2 MB", category: "Primary" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Digital Library</h1>
          <p className="text-xl text-gray-300 max-w-3xl mb-8">Access our repository of learning materials, past papers, and academic resources.</p>
          
          <div className="max-w-3xl relative">
            {/* FIXED: Added bg-white */}
            <input 
              type="text" 
              placeholder="Search for subjects, past papers, or textbooks..." 
              className="w-full p-5 pl-14 rounded-lg bg-white text-brand-navy font-medium text-lg focus:outline-none focus:ring-4 focus:ring-brand-gold/50 shadow-lg" 
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
          </div>
        </div>
      </section>

      <section className="py-24 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 w-full">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <div className="w-full md:w-64 shrink-0 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-bold text-brand-navy mb-4 flex items-center gap-2"><Filter size={18}/> Filter by Level</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-brand-royal font-bold">All Resources</a></li>
                <li><a href="#" className="text-gray-600 hover:text-brand-navy">Primary School</a></li>
                <li><a href="#" className="text-gray-600 hover:text-brand-navy">High School</a></li>
                <li><a href="#" className="text-gray-600 hover:text-brand-navy">College & TVET</a></li>
                <li><a href="#" className="text-gray-600 hover:text-brand-navy">University</a></li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-bold text-brand-navy mb-4 flex items-center gap-2"><Filter size={18}/> Filter by Type</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-brand-navy">Past Exam Papers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-brand-navy">Textbooks & Notes</a></li>
                <li><a href="#" className="text-gray-600 hover:text-brand-navy">Video Lectures</a></li>
              </ul>
            </div>
          </div>

          {/* Resource Grid */}
          <div className="flex-grow grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-brand-royal bg-brand-royal/10 p-3 rounded-lg">{item.icon}</div>
                    <span className="bg-brand-grey text-gray-600 text-xs font-bold px-2 py-1 rounded">{item.type}</span>
                  </div>
                  <h3 className="font-bold text-brand-navy mb-2 leading-snug">{item.title}</h3>
                  <p className="text-xs text-gray-500 mb-4">{item.category} • {item.size}</p>
                </div>
                <button className="w-full border border-brand-royal text-brand-royal font-bold py-2 rounded hover:bg-brand-royal hover:text-white transition-colors flex justify-center items-center gap-2">
                  <Download size={16} /> Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}