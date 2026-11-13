import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { Calendar, ArrowRight } from 'lucide-react';

// Expanded data with full content
const featuredNews = {
  id: "2026-launch",
  date: "15 January 2026",
  category: "Institutional",
  title: "Think EduNova Academy Officially Launches for the 2026 Academic Year",
  desc: "We are proud to announce the official opening of admissions for all four academic divisions. The platform integrates AI-driven learning, verified human tutoring, and comprehensive institutional management.",
  img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
  content: [
    "Think EduNova Academy is proud to announce the official opening of admissions for the 2026 academic year. This milestone marks the culmination of months of dedicated development, bringing together a unified platform that seamlessly integrates AI-driven learning, verified human tutoring, and comprehensive institutional management.",
    "Our platform is designed to serve four distinct academic divisions: Primary, Secondary, TVET, and University. Each division is equipped with tailored resources, ensuring that every learner receives the support they need to excel. The integration of our AI tutor, EduNova, alongside our rigorous human tutoring network, provides a dual-layered approach to academic success.",
    "Institutional partners will also benefit from the newly implemented AcadCoreOS integration, allowing for seamless syncing of student records, billing, and academic reports. We believe that by combining advanced technology with human expertise, we can provide an unparalleled educational experience for students across South Africa.",
    "Admissions are now officially open. Prospective students and parents are encouraged to explore our faculties, review our curriculum offerings, and begin their application process today."
  ]
};

const news = [
  { 
    id: "research-services",
    date: "08 Jan 2026", 
    cat: "Research", 
    title: "New Research Support Services Launched", 
    desc: "Expanding our postgraduate support with specialist statistical analysis tutoring and methodology guidance.", 
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
    content: [
      "We are thrilled to announce the launch of our dedicated Research Support Services, aimed specifically at postgraduate students and academic researchers. This new division expands our academic offerings beyond standard tutoring to include specialist statistical analysis, methodology guidance, and academic writing support.",
      "Research can often be a solitary and challenging journey. Our new services are designed to bridge the gap between theory and practical application. We have assembled a team of tutors who have not only completed their own dissertations but are actively involved in academic research themselves.",
      "Services offered include one-on-one guidance on research design, assistance with data analysis software such as SPSS and R, and comprehensive review services for academic papers and theses. All support is delivered with the highest standards of academic integrity and ethical research practices."
    ]
  },
  { 
    id: "new-tutors",
    date: "02 Jan 2026", 
    cat: "Faculty", 
    title: "Welcoming Our New Verified Tutors", 
    desc: "Meet the latest graduates and professionals who have successfully passed our rigorous competency assessments.", 
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    content: [
      "As we step into the new academic year, Think EduNova Academy is proud to welcome a new cohort of highly qualified tutors to our faculty. These educators have successfully navigated our rigorous vetting process, which includes background checks, competency assessments, and practical teaching evaluations.",
      "Our onboarding process is designed to ensure that every tutor who joins the platform is not only an expert in their field but also possesses the empathy and communication skills necessary to connect with students from diverse backgrounds.",
      "This new group of tutors brings expertise across multiple disciplines, including Mathematics, Physical Sciences, Engineering, and the Humanities. They are now available for booking in the student and parent portals. We invite learners to explore their profiles and discover the perfect match for their academic needs."
    ]
  },
  { 
    id: "acadcore-integration",
    date: "20 Dec 2025", 
    cat: "Technology", 
    title: "AcadCoreOS Integration Complete", 
    desc: "Our institutional partners can now seamlessly sync student records, billing, and academic reports.", 
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    content: [
      "The technology team at Think EduNova has successfully completed the integration of AcadCoreOS into our core ecosystem. This significant technical milestone enables seamless, real-time synchronization of critical data for our institutional partners.",
      "AcadCoreOS serves as the backbone for institutional management. With this integration, partner schools and colleges can now instantly sync student enrollment records, manage financial billing, and generate comprehensive academic reports directly through the EduNova platform.",
      "This breakthrough eliminates the administrative bottleneck that often plagues traditional learning management systems. By automating these workflows, teachers and administrators can focus on what matters most: providing quality education to their students."
    ]
  },
  { 
    id: "popia-compliance",
    date: "12 Dec 2025", 
    cat: "Safeguarding", 
    title: "New POPIA Compliance Protocols", 
    desc: "We have implemented industry-leading data protection measures to ensure the safety of all parents and minors.", 
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    content: [
      "In an era where digital learning is paramount, the protection of personal information is non-negotiable. Think EduNova Academy has therefore implemented new, industry-leading data protection protocols in strict accordance with the Protection of Personal Information Act (POPIA).",
      "These measures go beyond simply locking down databases. We have introduced strict role-based access controls (RBAC), ensuring that only authorized personnel can access sensitive data. Furthermore, all communications involving minors are monitored and logged, creating an iron-clad safeguarding environment.",
      "Parents and guardians can rest assured knowing that their children's academic records, personal details, and online interactions are secured by enterprise-grade encryption. Our commitment to privacy is absolute, and we will continue to update our protocols as technology evolves."
    ]
  },
];

export default function News() {
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
        <Link href={`/news/${featuredNews.id}`} className="block group">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-16 grid lg:grid-cols-2 cursor-pointer transition-transform duration-300 hover:shadow-xl">
            <div className="h-80 lg:h-auto bg-gray-200 relative overflow-hidden">
              <img src={featuredNews.img} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-6 left-6 bg-brand-gold text-brand-navy text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-md">
                Featured Story
              </div>
            </div>
            <div className="p-10 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm text-gray-500 font-bold mb-4">
                <span className="text-brand-royal">{featuredNews.category}</span>
                <span className="flex items-center gap-1"><Calendar size={14} /> {featuredNews.date}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4 leading-tight group-hover:text-brand-royal transition-colors">{featuredNews.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-8">{featuredNews.desc}</p>
              <div className="text-brand-royal font-bold flex items-center gap-2 group-hover:gap-3 transition-all w-fit">
                Read Full Story <ArrowRight size={18} />
              </div>
            </div>
          </div>
        </Link>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {news.map((item, i) => (
            <Link href={`/news/${item.id}`} key={i} className="block group">
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col">
                <div className="h-56 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-500 font-bold mb-3">
                    <span className="text-brand-royal uppercase tracking-wider">{item.cat}</span>
                    <span className="flex items-center gap-1"><Calendar size={12} /> {item.date}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-brand-navy mb-3 group-hover:text-brand-royal transition-colors leading-snug">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.desc}</p>
                </div>
                <div className="px-8 pb-8 mt-auto pt-4 border-t border-gray-100">
                   <span className="text-brand-royal text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Full Story <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}