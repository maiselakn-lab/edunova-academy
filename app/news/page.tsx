import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { Calendar, ArrowRight } from 'lucide-react';

export default function News() {
  const featuredNews = {
    date: "15 January 2026",
    category: "Institutional",
    title: "Think EduNova Academy Officially Launches for the 2026 Academic Year",
    desc: "We are proud to announce the official opening of admissions for all four academic divisions. The platform integrates AI-driven learning, verified human tutoring, and comprehensive institutional management.",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
  };

  const news = [
    { date: "08 Jan 2026", cat: "Research", title: "New Research Support Services Launched", desc: "Expanding our postgraduate support with specialist statistical analysis tutoring and methodology guidance.", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" },
    { date: "02 Jan 2026", cat: "Faculty", title: "Welcoming Our New Verified Tutors", desc: "Meet the latest graduates and professionals who have successfully passed our rigorous competency assessments.", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" },
    { date: "20 Dec 2025", cat: "Technology", title: "AcadCoreOS Integration Complete", desc: "Our institutional partners can now seamlessly sync student records, billing, and academic reports.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" },
    { date: "12 Dec 2025", cat: "Safeguarding", title: "New POPIA Compliance Protocols", desc: "We have implemented industry-leading data protection measures to ensure the safety of all parents and minors.", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      
      <section className="bg-brand-navy py-20 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">News & Media</h1>
          <p className="text-xl text-gray-300">The latest announcements, press releases, and academic updates.</p>
        </div>
      </section>

      <section className="py-20 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 w-full">
        
        {/* Featured Article */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-16 grid lg:grid-cols-2">
          <div className="h-80 lg:h-auto bg-gray-200 relative">
            <img src={featuredNews.img} alt="Featured" className="w-full h-full object-cover" />
            <div className="absolute top-6 left-6 bg-brand-gold text-brand-navy text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-md">
              Featured Story
            </div>
          </div>
          <div className="p-10 flex flex-col justify-center">
            <div className="flex items-center gap-4 text-sm text-gray-500 font-bold mb-4">
              <span className="text-brand-royal">{featuredNews.category}</span>
              <span className="flex items-center gap-1"><Calendar size={14} /> {featuredNews.date}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4 leading-tight">{featuredNews.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-8">{featuredNews.desc}</p>
            <button className="text-brand-royal font-bold flex items-center gap-2 hover:gap-3 transition-all w-fit">
              Read Full Story <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {news.map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="h-56 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-gray-500 font-bold mb-3">
                  <span className="text-brand-royal uppercase tracking-wider">{item.cat}</span>
                  <span className="flex items-center gap-1"><Calendar size={12} /> {item.date}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-navy mb-3 group-hover:text-brand-royal transition-colors leading-snug">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}