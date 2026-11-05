import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { BookOpen, GraduationCap, Users, Microscope, ShieldCheck, Award, ArrowRight, CheckCircle2, LayoutDashboard, Database, Cpu, Calendar, MapPin, Phone, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />

      <main className="flex-grow">
        
        {/* 1. FULL-WIDTH HERO BANNER (Like TUT) */}
        <section className="relative w-full h-[65vh] min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
              alt="University Campus" 
              className="w-full h-full object-cover object-center"
            />
            {/* Dark overlay so text is readable */}
            <div className="absolute inset-0 bg-brand-navy/70"></div>
          </div>
          
          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="max-w-3xl border-l-4 border-brand-gold pl-6 md:pl-8">
              <p className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4">Welcome to EduNova</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-6 leading-[1.1] text-white">
                Leading Academic Excellence.
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                A premier integrated online institution providing rigorous academic support, expert tutoring, and research guidance across Primary, Secondary, College, and University levels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register" className="bg-brand-royal text-white px-8 py-4 rounded-sm font-bold text-base hover:bg-blue-700 transition-all shadow-lg text-center flex items-center justify-center gap-2">
                  Apply for Admission <ArrowRight size={18} />
                </Link>
                <Link href="/courses" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-sm font-bold text-base hover:bg-white hover:text-brand-navy transition-all text-center">
                  Explore Programmes
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. QUICK LINKS / FACTS BAR (Edge to Edge) */}
        <section className="bg-brand-navy border-t border-white/10 w-full py-6">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-white/20 text-center">
              <div>
                <p className="text-3xl font-serif font-bold text-brand-gold">4</p>
                <p className="text-xs font-bold text-white uppercase mt-1 tracking-wider">Academic Divisions</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-brand-gold">19</p>
                <p className="text-xs font-bold text-white uppercase mt-1 tracking-wider">Integrated Modules</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-brand-gold">100%</p>
                <p className="text-xs font-bold text-white uppercase mt-1 tracking-wider">Verified Tutors</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-brand-gold">24/7</p>
                <p className="text-xs font-bold text-white uppercase mt-1 tracking-wider">Digital Campus</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. ASYMMETRICAL WELCOME SECTION (Fills the screen) */}
        <section className="w-full flex flex-col lg:flex-row bg-brand-grey">
          {/* Text Block */}
          <div className="w-full lg:w-1/2 p-10 md:p-16 lg:p-24 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6 leading-tight">
              Empowering Minds.<br />Transforming Futures.
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Think EduNova Academy is not just a tutoring website. It is a comprehensive digital institution combining academic teaching, learning resources, AI-assisted education, and employment opportunities for qualified graduates.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether you are a parent seeking foundational support for your child, a university student requiring advanced research guidance, or a graduate looking to teach, EduNova provides the structured environment you need to succeed.
            </p>
            <Link href="/about" className="text-brand-royal font-bold text-lg hover:underline flex items-center gap-2">
              Read Our Strategic Plan <ArrowRight size={18} />
            </Link>
          </div>
          
          {/* Image Block */}
          <div className="w-full lg:w-1/2 min-h-[400px] relative">
            <img 
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop" 
              alt="Students collaborating" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Decorative Gold Box */}
            <div className="absolute bottom-0 left-0 bg-brand-gold p-8 text-brand-navy max-w-sm">
              <p className="font-serif font-bold text-2xl mb-2">Our Mission</p>
              <p className="text-sm font-medium">To provide accessible, quality, and personalised education to people who need assistance with their academic development.</p>
            </div>
          </div>
        </section>

        {/* 4. FACULTIES (Full Width Grid) */}
        <section className="py-24 bg-white w-full">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-navy mb-4">Our Academic Faculties</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Structured educational pathways for every stage of your academic journey.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Primary Academy", desc: "Foundational education focusing on literacy, numeracy, and core academic development for young learners (Grades R-7).", icon: <BookOpen size={32} />, href: "/academies/primary" },
                { title: "Secondary Academy", desc: "Comprehensive high school support, examination preparation, and subject-specific tutoring for Grades 8-12.", icon: <GraduationCap size={32} />, href: "/academies/secondary" },
                { title: "College & TVET", desc: "Technical and vocational education support, engineering fundamentals, and specialised college modules.", icon: <Users size={32} />, href: "/academies/college" },
                { title: "University & Research", desc: "Advanced academic assistance, statistical analysis, postgraduate support, and comprehensive research guidance.", icon: <Microscope size={32} />, href: "/academies/university" },
              ].map((faculty, i) => (
                <div key={i} className="group border border-gray-200 p-8 hover:border-brand-royal hover:shadow-2xl transition-all duration-300 bg-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-royal/5 rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-150"></div>
                  <div className="flex items-start gap-6 relative z-10">
                    <div className="bg-brand-navy p-4 text-white group-hover:bg-brand-royal transition-colors">
                      {faculty.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-brand-navy mb-3 group-hover:text-brand-royal transition-colors">{faculty.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{faculty.desc}</p>
                      <Link href={faculty.href} className="text-sm font-bold text-brand-royal uppercase tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all">
                        Explore Programmes <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. ACADCOREOS SHOWCASE (Full Width Background) */}
        <section className="w-full bg-brand-navy text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          
          <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-brand-royal/20 border border-brand-royal/50 px-4 py-1.5 rounded-full mb-6">
                  <Database size={14} className="text-brand-sky" />
                  <p className="text-brand-sky font-bold tracking-wider uppercase text-xs">Powered by AcadCoreOS</p>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                  The Intelligent OS for <span className="text-brand-gold">Modern Schools.</span>
                </h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  We power the institutions behind the students. <strong>AcadCoreOS</strong> is a comprehensive school management platform unifying academics, finance, HR, scheduling, and AI into a single workspace.
                </p>
                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-teal" size={20} />
                    <span className="text-gray-200">19 Integrated Core Modules</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-teal" size={20} />
                    <span className="text-gray-200">Built for African Institutions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-teal" size={20} />
                    <span className="text-gray-200">AcadAI Intelligence Layer</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://acadcoreos.base44.app/" target="_blank" rel="noopener noreferrer" className="bg-brand-gold text-brand-navy px-8 py-4 rounded-sm font-bold hover:bg-yellow-500 transition-all text-center flex items-center justify-center gap-2">
                    Explore AcadCoreOS <ArrowRight size={18} />
                  </a>
                  <Link href="/contact" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-sm font-bold hover:bg-white/20 transition-all text-center">
                    Request a Demo
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {["AcademicCore", "FinanceCore", "AdmissionsCore", "AssessmentCore", "AttendanceCore", "PeopleCore", "ScheduleCore", "ExamCore (CBT)"].map((mod, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 px-4 py-3 rounded text-sm text-gray-200">
                    {mod}
                  </div>
                ))}
                <div className="col-span-2 text-center bg-brand-royal/20 border border-brand-royal/30 px-4 py-3 rounded text-sm text-brand-sky font-bold">
                  + 11 More Integrated Modules
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. NEWSROOM (Full Width) */}
        <section className="w-full py-24 bg-brand-grey">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="flex justify-between items-end mb-12 border-b border-gray-300 pb-4">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy">News & Announcements</h2>
              <Link href="/news" className="text-brand-royal font-bold hover:underline flex items-center gap-1">View All News <ArrowRight size={16} /></Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { date: "15 Jan 2026", title: "Launch of the 2026 Academic Year", desc: "Think EduNova Academy officially opens registrations for all four academic divisions.", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" },
                { date: "08 Jan 2026", title: "New Research Support Services", desc: "Expanding our postgraduate support with specialist statistical analysis tutoring.", img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop" },
                { date: "02 Jan 2026", title: "Welcoming Our New Verified Tutors", desc: "Meet the latest graduates and professionals who have joined our teaching faculty.", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" }
              ].map((news, i) => (
                <div key={i} className="bg-white border border-gray-200 group cursor-pointer hover:shadow-xl transition-all duration-300">
                  <div className="h-56 overflow-hidden">
                    <img src={news.img} alt="News" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold text-gray-500 mb-2">{news.date}</p>
                    <h3 className="text-xl font-serif font-bold text-brand-navy mb-2 group-hover:text-brand-royal">{news.title}</h3>
                    <p className="text-sm text-gray-600">{news.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* 7. THE RESTORED INSTITUTIONAL FOOTER */}
      <footer className="bg-brand-navy text-gray-300 border-t-[6px] border-brand-royal">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            
            {/* Column 1: Logo & Info */}
            <div className="col-span-2 lg:col-span-1">
              <div className="bg-white p-2 rounded inline-block mb-6">
                <img src="/logo.png" alt="EduNova Logo" className="h-12 w-auto object-contain" />
              </div>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">Empowering Minds. Transforming Futures. A premier integrated online institution.</p>
            </div>

            {/* Column 2: Faculties */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Faculties</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/academies/primary" className="hover:text-white transition-colors">Primary Academy</Link></li>
                <li><Link href="/academies/secondary" className="hover:text-white transition-colors">Secondary Academy</Link></li>
                <li><Link href="/academies/college" className="hover:text-white transition-colors">College & TVET</Link></li>
                <li><Link href="/academies/university" className="hover:text-white transition-colors">University & Research</Link></li>
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
                <li><Link href="/tutoring" className="hover:text-white transition-colors">Tutoring</Link></li>
                <li><Link href="/become-a-tutor" className="hover:text-white transition-colors">Tutor Careers</Link></li>
              </ul>
            </div>

            {/* Column 4: Governance */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Governance</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/popia" className="hover:text-white transition-colors">POPIA Compliance</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
                <li><Link href="/audit" className="hover:text-white transition-colors">Audit & Reports</Link></li>
              </ul>
            </div>

            {/* Column 5: Contact */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-brand-gold mt-1 shrink-0" />
                  <span>South Africa</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-brand-gold shrink-0" />
                  <span>+27 (0) 12 345 6789</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-brand-gold shrink-0" />
                  <span>info@thinkedunova.co.za</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2026 Think EduNova Academy. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Registered Educational Institution.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}