"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Clock, ArrowRight, Loader2 } from "lucide-react";

export default function NewsPage() {
  const [articles, setArticles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("https://edunova-academy-qkk5.onrender.com/api/news");
        if (res.ok) {
          setArticles(await res.json());
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-grey">
        <Loader2 className="animate-spin text-brand-royal" size={40} />
      </div>
    );
  }

  // Take the first article as the "Featured" story
  const featuredArticle = articles[0];
  const remainingArticles = articles.slice(1);

  return (
    <div className="bg-brand-grey min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-brand-navy py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">News & Media</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            The latest announcements, press releases, and academic updates from Think EduNova Academy.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-8">
        
        {/* Featured Article */}
        {featuredArticle && (
          <Link href={`/news/${featuredArticle.id}`} className="block bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow mb-12">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto bg-gray-200 relative">
                <img 
                  src={featuredArticle.image_url || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"} 
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-brand-gold text-brand-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Featured Story
                </span>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="font-bold text-brand-royal uppercase tracking-wider">{featuredArticle.category}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {featuredArticle.date}</span>
                </div>
                <h2 className="text-3xl font-serif font-bold text-brand-navy mb-4 leading-tight">
                  {featuredArticle.title}
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {featuredArticle.content}
                </p>
                <span className="text-brand-royal font-bold flex items-center gap-2 group">
                  Read Full Story <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {remainingArticles.map((article) => (
            <Link href={`/news/${article.id}`} key={article.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
              <div className="h-56 overflow-hidden">
                <img 
                  src={article.image_url || "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="font-bold text-brand-royal uppercase tracking-wider">{article.category}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {article.date}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-brand-navy mb-3 group-hover:text-brand-royal transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {article.content}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-sm">
                  <span className="text-gray-500">By {article.author}</span>
                  <span className="text-brand-royal font-bold flex items-center gap-1">
                    Read <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}