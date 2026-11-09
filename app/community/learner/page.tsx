"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { ArrowRight, Search, Plus, FileText, Download, MessageCircle, ThumbsUp, ShieldCheck, Filter, Loader2, X } from 'lucide-react';

export default function LearnerCommunity() {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newCategory, setNewCategory] = useState('Question');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://edunova-academy-qkk5.onrender.com/api/community/posts/learner');
      if (response.ok) setPosts(await response.json());
    } catch (error) { console.error(error); } 
    finally { setIsLoading(false); }
  };

  useEffect(() => { fetchPosts(); }, []);

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const token = localStorage.getItem('edunova_token');
    try {
      const response = await fetch('https://edunova-academy-qkk5.onrender.com/api/community/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ title: newTitle, content: newContent, category: newCategory, post_type: 'learner' }),
      });
      if (response.ok) {
        setShowCreateModal(false); setNewTitle(''); setNewContent(''); fetchPosts();
      } else { alert("Please log in to post."); }
    } catch (error) { console.error(error); } 
    finally { setIsSubmitting(false); }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      
      <div className="bg-brand-navy py-12 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/community" className="text-brand-gold text-sm font-bold hover:underline mb-2 inline-block">&larr; Back to Community Hub</Link>
            <h1 className="text-3xl font-serif font-bold text-white">Learner Community</h1>
          </div>
          <button onClick={() => setShowCreateModal(true)} className="bg-brand-gold text-brand-navy px-6 py-3 rounded-sm font-bold flex items-center gap-2 hover:bg-yellow-500 transition-colors shadow-lg">
            <Plus size={18} /> Create New Post
          </button>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 py-12 w-full grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-bold text-brand-navy mb-4 text-sm uppercase tracking-wider">Categories</h3>
            <ul className="space-y-2">
              <li><button className="w-full text-left flex items-center justify-between text-brand-royal font-bold bg-brand-royal/5 px-3 py-2 rounded"><span>All Posts</span> <span>{posts.length}</span></button></li>
            </ul>
          </div>
          <div className="bg-brand-navy p-6 rounded-xl shadow-sm text-white text-sm">
            <ShieldCheck className="text-brand-teal mb-3" size={24} />
            <h3 className="font-bold mb-2">Safe Space</h3>
            <p className="text-gray-400 text-xs leading-relaxed">This community is monitored 24/7. Do not share personal information.</p>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-6">
          {showCreateModal && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-brand-navy">Create a New Post</h2>
                  <button onClick={() => setShowCreateModal(false)} className="text-gray-400 hover:text-red-500"><X size={24}/></button>
                </div>
                <form onSubmit={handleCreatePost} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-brand-navy mb-1">Title</label>
                    <input type="text" required value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-navy mb-1">Content</label>
                    <textarea required value={newContent} onChange={(e) => setNewContent(e.target.value)} className="w-full p-2 border border-gray-300 rounded h-24"></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-navy mb-1">Category</label>
                    <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)} className="w-full p-2 border border-gray-300 rounded">
                      <option>Question</option>
                      <option>Study Notes</option>
                      <option>Past Paper</option>
                    </select>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-brand-royal text-white font-bold py-2 rounded flex justify-center items-center gap-2">
                    {isSubmitting ? <Loader2 className="animate-spin" size={18}/> : 'Post to Community'}
                  </button>
                </form>
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input type="text" placeholder="Search discussions..." className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-royal bg-white shadow-sm" />
            </div>
          </div>

          {isLoading ? (
            <div className="text-center py-12 text-gray-500">Loading posts...</div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
              <p className="text-gray-500">No posts yet. Be the first to share something!</p>
            </div>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-royal/10 text-brand-royal rounded-full flex items-center justify-center font-bold">{post.author_name.charAt(0)}</div>
                    <div>
                      <p className="font-bold text-brand-navy text-sm">{post.author_name} <span className="text-xs font-normal text-gray-500 ml-2 capitalize">{post.author_role}</span></p>
                      <p className="text-xs text-gray-400">{post.created_at}</p>
                    </div>
                  </div>
                  <span className="bg-brand-grey text-gray-600 text-xs font-bold px-3 py-1 rounded-full border border-gray-200">{post.category}</span>
                </div>
                <h2 className="text-xl font-bold text-brand-navy mb-2">{post.title}</h2>
                <p className="text-gray-600 text-sm mb-6">{post.content}</p>
                <div className="flex items-center gap-6 border-t border-gray-100 pt-4 text-sm font-bold text-gray-500">
                  <button className="flex items-center gap-2 hover:text-brand-royal transition-colors"><ThumbsUp size={18} /> 0</button>
                  <button className="flex items-center gap-2 hover:text-brand-royal transition-colors"><MessageCircle size={18} /> 0 Replies</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}