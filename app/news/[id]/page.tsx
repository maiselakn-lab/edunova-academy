"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { Calendar, ArrowLeft, Quote } from 'lucide-react';

// We match the IDs from the previous file to load the full content
const allArticles: Record<string, any> = {
  "2026-launch": {
    date: "15 January 2026",
    category: "Institutional",
    title: "Think EduNova Academy Officially Launches for the 2026 Academic Year",
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
    author: "Think EduNova Admin",
    content: [
      "Think EduNova Academy is proud to announce the official opening of admissions for the 2026 academic year. This milestone marks the culmination of months of dedicated development, bringing together a unified platform that seamlessly integrates AI-driven learning, verified human tutoring, and comprehensive institutional management.",
      "Our platform is designed to serve four distinct academic divisions: Primary, Secondary, TVET, and University. Each division is equipped with tailored resources, ensuring that every learner receives the support they need to excel. The integration of our AI tutor, EduNova, alongside our rigorous human tutoring network, provides a dual-layered approach to academic success.",
      "Institutional partners will also benefit from the newly implemented AcadCoreOS integration, allowing for seamless syncing of student records, billing, and academic reports. We believe that by combining advanced technology with human expertise, we can provide an unparalleled educational experience for students across South Africa.",
      "Admissions are now officially open. Prospective students and parents are encouraged to explore our faculties, review our curriculum offerings, and begin their application process today."
    ]
  },
  "research-services": {
    date: "08 Jan 2026",
    category: "Research",
    title: "New Research Support Services Launched",
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
    author: "Academic Directorate",
    content: [
      "We are thrilled to announce the launch of our dedicated Research Support Services, aimed specifically at postgraduate students and academic researchers. This new division expands our academic offerings beyond standard tutoring to include specialist statistical analysis, methodology guidance, and academic writing support.",
      "Research can often be a solitary and challenging journey. Our new services are designed to bridge the gap between theory and practical application. We have assembled a team of tutors who have not only completed their own dissertations but are actively involved in academic research themselves.",
      "Services offered include one-on-one guidance on research design, assistance with data analysis software such as SPSS and R, and comprehensive review services for academic papers and theses. All support is delivered with the highest standards of academic integrity and ethical research practices."
    ]
  },
  "new-tutors": {
    date: "02 Jan 2026",
    category: "Faculty",
    title: "Welcoming Our New Verified Tutors",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    author: "HR & Faculty Management",
    content: [
      "As we step into the new academic year, Think EduNova Academy is proud to welcome a new cohort of highly qualified tutors to our faculty. These educators have successfully navigated our rigorous vetting process, which includes background checks, competency assessments, and practical teaching evaluations.",
      "Our onboarding process is designed to ensure that every tutor who joins the platform is not only an expert in their field but also possesses the empathy and communication skills necessary to connect with students from diverse backgrounds.",
      "This new group of tutors brings expertise across multiple disciplines, including Mathematics, Physical Sciences, Engineering, and the Humanities. They are now available for booking in the student and parent portals. We invite learners to explore their profiles and discover the perfect match for their academic needs."
    ]
  },
  "acadcore-integration": {
    date: "20 Dec 2025",
    category: "Technology",
    title: "AcadCoreOS Integration Complete",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    author: "Tech Infrastructure Team",
    content: [
      "The technology team at Think EduNova has successfully completed the integration of AcadCoreOS into our core ecosystem. This significant technical milestone enables seamless, real-time synchronization of critical data for our institutional partners.",
      "AcadCoreOS serves as the backbone for institutional management. With this integration, partner schools and colleges can now instantly sync student enrollment records, manage financial billing, and generate comprehensive academic reports directly through the EduNova platform.",
      "This breakthrough eliminates the administrative bottleneck that often plagues traditional learning management systems. By automating these workflows, teachers and administrators can focus on what matters most: providing quality education to their students."
    ]
  },
  "popia-compliance": {
    date: "12 Dec 2025",
    category: "Safeguarding",
    title: "New POPIA Compliance Protocols",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    author: "Legal & Compliance",
    content: [
      "In an era where digital learning is paramount, the protection of personal information is non-negotiable. Think EduNova Academy has therefore implemented new, industry-leading data protection protocols in strict accordance with the Protection of Personal Information Act (POPIA).",
      "These measures go beyond simply locking down databases. We have introduced strict role-based access controls (RBAC), ensuring that only authorized personnel can access sensitive data. Furthermore, all communications involving minors are monitored and logged, creating an iron-clad safeguarding environment.",
      "Parents and guardians can rest assured knowing that their children's academic records, personal details, and online interactions are secured by enterprise-grade encryption. Our commitment to privacy is absolute, and we will continue to update our protocols as technology evolves."
    ]
  }
};

export default function ArticlePage() {
  const params = useParams();
  const id = params.id as string;
  const article = allArticles[id];

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-brand-grey">
        <h1 className="text-3xl font-serif font-bold text-brand-navy mb-4">Article Not Found</h1>
        <Link href="/news" className="text-brand-royal font-bold hover:underline">
          Return to News
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />

      {/* Hero Section */}
      <section className="bg-brand-navy py-16 md:py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Link href="/news" className="inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors mb-8 font-bold text-sm">
            <ArrowLeft size={16} /> Back to News
          </Link>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-300 font-bold mb-6">
            <span className="bg-brand-royal px-4 py-1.5 rounded-full text-white uppercase tracking-wider text-xs">
              {article.category}
            </span>
            <span className="flex items-center gap-2"><Calendar size={16} /> {article.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-8">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 bg-brand-gold text-brand-navy rounded-full flex items-center justify-center font-bold text-xl">
              {article.author.charAt(0)}
            </div>
            <div className="text-left">
              <p className="font-bold text-white">{article.author}</p>
              <p className="text-xs text-gray-400">Think EduNova Academy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-6 w-full -mt-12 relative z-20 mb-16">
        <img 
          src={article.img} 
          alt={article.title} 
          className="w-full h-[300px] md:h-[500px] object-cover rounded-2xl shadow-2xl border-4 border-white"
        />
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-6 pb-24 w-full">
        <div className="prose prose-lg prose-brand max-w-none text-gray-700">
          {/* Render the first paragraph with a drop cap */}
          <p className="text-xl leading-relaxed mb-8 first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-brand-navy first-letter:mr-3 first-letter:float-left">
            {article.content[0]}
          </p>
          
          {/* Render the rest of the paragraphs */}
          {article.content.slice(1).map((paragraph: string, index: number) => (
            <p key={index} className="text-lg leading-relaxed mb-8 text-gray-700">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 mb-6 font-medium">Thank you for reading Think EduNova Academy News.</p>
          <Link href="/news" className="inline-flex items-center gap-2 bg-brand-navy text-white px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all">
            <ArrowLeft size={18} /> Back to All News
          </Link>
        </div>
      </article>
    </div>
  );
}