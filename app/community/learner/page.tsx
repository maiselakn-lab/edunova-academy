"use client";

import Link from 'next/link';
import { useState } from 'react';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { ArrowRight, Search, Plus, FileText, Download, MessageCircle, ThumbsUp, ShieldCheck, Filter, BookOpen } from 'lucide-react';

export default function LearnerCommunity() {
  const posts = [
    { id: 1, author: "Thabo M.", grade: "Grade 11", time: "2 hours ago", title: "Grade 11 Maths: Calculus Past Paper (Nov 2025)", desc: "I've uploaded the November 2025 paper with the memo. The last question on optimization is tricky, let's discuss it here.", type: "Past Paper", likes: 45, replies: 12 },
    { id: 2, author: "Lerato N.", grade: "Grade 8", time: "5 hours ago", title: "Natural Sciences: Photosynthesis Summary", desc: "I made a quick summary of the photosynthesis process. It includes the light-dependent and light-independent reactions.", type: "Notes", likes: 32, replies: 5 },
    { id: 3, author: "Siphelele B.", grade: "Grade 11", time: "1 day ago", title: "Need help with Physics: Newton's Second Law", desc: "Can someone explain how to solve this specific problem? I keep getting 15N but the memo says 20N.", type: "Question", likes: 8, replies: 24 },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      
      <div className="bg-brand-navy py-12 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/community" className="text-brand-gold text-sm font-bold hover:underline mb-2 inline-block">&larr; Back to Community Hub</Link>
            <h1 className="text-3xl font-serif font-bold text-white">Learner Community</h1>
          </div>
          <button className="bg-brand-gold text-brand-navy px-6 py-3 rounded-sm font-bold flex items-center gap-2 hover:bg-yellow-500 transition-colors shadow-lg">
            <Plus size={18} /> Create New Post
          </button>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 py-12 w-full grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-bold text-brand-navy mb-4 text-sm uppercase tracking-wider">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="flex items-center justify-between text-brand-royal font-bold bg-brand-royal/5 px-3 py-2 rounded"><span>All Posts</span> <span>142</span></Link></li>
              <li><Link href="#" className="flex items-center justify-between text-gray-600 hover:text-brand-navy px-3 py-2 rounded transition-colors"><span>Past Papers</span> <span>45</span></Link></li>
              <li><Link href="#" className="flex items-center justify-between text-gray-600 hover:text-brand-navy px-3 py-2 rounded transition-colors"><span>Study Notes</span> <span>67</span></Link></li>
              <li><Link href="#" className="flex items-center justify-between text-gray-600 hover:text-brand-navy px-3 py-2 rounded transition-colors"><span>Homework Help</span> <span>30</span></Link></li>
            </ul>
          </div>
          
          <div className="bg-brand-navy p-6 rounded-xl shadow-sm text-white text-sm">
            <ShieldCheck className="text-brand-teal mb-3" size={24} />
            <h3 className="font-bold mb-2">Safe Space</h3>
            <p className="text-gray-400 text-xs leading-relaxed">This community is monitored 24/7. Do not share personal information. To report a post, click the flag icon.</p>
          </div>
        </div>

        {/* Main Feed */}
        <div className="lg:col-span-3 space-y-6">
          {/* Search and Filter */}
          <div className="flex gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input type="text" placeholder="Search discussions, past papers..." className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-royal bg-white shadow-sm" />
            </div>
            <button className="bg-white border border-gray-200 px-4 py-3 rounded-lg shadow-sm hover:bg-gray-50 flex items-center gap-2 text-gray-600 font-medium">
              <Filter size={18} /> Filter
            </button>
          </div>

          {/* Posts */}
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-royal/10 text-brand-royal rounded-full flex items-center justify-center font-bold">{post.author.charAt(0)}</div>
                  <div>
                    <p className="font-bold text-brand-navy text-sm">{post.author} <span className="text-xs font-normal text-gray-500 ml-2">{post.grade}</span></p>
                    <p className="text-xs text-gray-400">{post.time}</p>
                  </div>
                </div>
                <span className="bg-brand-grey text-gray-600 text-xs font-bold px-3 py-1 rounded-full border border-gray-200">{post.type}</span>
              </div>
              
              <h2 className="text-xl font-bold text-brand-navy mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-6">{post.desc}</p>
              
              {post.type === 'Past Paper' && (
                <div className="bg-brand-grey rounded-lg p-4 mb-6 flex items-center justify-between border border-gray-200">
                  <div className="flex items-center gap-3">
                    <FileText className="text-brand-royal" size={24} />
                    <div>
                      <p className="font-bold text-brand-navy text-sm">Maths_Nov_2025_P1.pdf</p>
                      <p className="text-xs text-gray-500">2.4 MB</p>
                    </div>
                  </div>
                  <button className="text-brand-royal bg-white border border-gray-200 p-2 rounded hover:bg-brand-royal hover:text-white transition-colors"><Download size={18} /></button>
                </div>
              )}

              <div className="flex items-center gap-6 border-t border-gray-100 pt-4 text-sm font-bold text-gray-500">
                <button className="flex items-center gap-2 hover:text-brand-royal transition-colors"><ThumbsUp size={18} /> {post.likes}</button>
                <button className="flex items-center gap-2 hover:text-brand-royal transition-colors"><MessageCircle size={18} /> {post.replies} Replies</button>
                <Link href="#" className="ml-auto text-brand-royal hover:underline flex items-center gap-1">View Discussion <ArrowRight size={16} /></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}