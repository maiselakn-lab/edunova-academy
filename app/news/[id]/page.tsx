"use client";

import { useState, useEffect, Suspense } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Share2, Loader2 } from "lucide-react";

function ArticleContent() {
  const params = useParams();
  const articleId = params.id;
  const [article, setArticle] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        // Fetch all news and find the matching one (since we don't have a specific /api/news/:id endpoint yet)
        const res = await fetch("https://edunova-academy-qkk5.onrender.com/api/news");
        if (res.ok) {
          const data = await res.json();
          const found = data.find((a: any) => a.id.toString() === articleId);
          setArticle(found);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchArticle();
  }, [articleId]);

  if (isLoading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-brand-royal" size={40} /></div>;
  if (!article) return <div className="min-h-screen flex items-center justify-center text-brand-navy font-bold text-xl">Article not found.</div>;

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Article Header */}
      <div className="bg-brand-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/news" className="inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors mb-8 font-bold text-sm">
            <ArrowLeft size={16} /> Back to News
          </Link>
          <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
            <span className="bg-brand-royal px-3 py-1 rounded-full text-white font-bold uppercase tracking-wider text-xs">
              {article.category}
            </span>
            <span className="flex items-center gap-1"><Clock size={14} /> {article.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
            {article.title}
          </h1>
          <div className="flex items-center gap-3 border-t border-white/20 pt-6">
            <div className="w-10 h-10 bg-brand-gold text-brand-navy rounded-full flex items-center justify-center font-bold">
              {article.author.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-white">{article.author}</p>
              <p className="text-xs text-gray-400">Think EduNova Academy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className="max-w-5xl mx-auto px-4 -mt-10 mb-12 relative z-10">
        <img 
          src={article.image_url || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"} 
          alt={article.title}
          className="w-full h-[400px] object-cover rounded-xl shadow-2xl border-4 border-white"
        />
      </div>

      {/* Article Body */}
      <div className="max-w-3xl mx-auto px-4">
        <div className="prose prose-lg prose-brand max-w-none text-gray-700">
          {/* Split content by newlines to render paragraphs properly */}
          {article.content.split('\n').map((paragraph: string, index: number) => (
            <p key={index} className="mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        
        {/* Share Button */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
          <p className="text-gray-500 font-medium">Share this article</p>
          <button className="flex items-center gap-2 bg-brand-grey text-brand-navy px-4 py-2 rounded-lg font-bold hover:bg-gray-200 transition-colors">
            <Share2 size={18} /> Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ArticlePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-brand-royal" size={40} /></div>}>
      <ArticleContent />
    </Suspense>
  );
}