import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { 
  BookOpen, GraduationCap, Users, Microscope, ArrowRight, CheckCircle2, 
  LayoutDashboard, Database, Calendar, MapPin, Phone, Mail, Quote, 
  Building2, Globe2, MonitorPlay, Share2, MessageCircle, Globe, 
  Search, Bot, FileText, BrainCircuit, PenTool, LineChart, PlayCircle,
  Star, Award, ShieldCheck
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />

      <main className="flex-grow">
        
        {/* 1. HERO BANNER */}
        <section className="relative w-full h-[80vh] min-h-[600px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
              alt="South African students learning" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-brand-navy/80"></div>
          </div>
          
          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 pt-10 pb-20">
            <div className="max-w-3xl border-l-4 border-brand-gold pl-6 md:pl-8">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
                <p className="text-white font-semibold tracking-wide text-xs uppercase">Admissions Open for 2026</p>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-6 leading-[1.1] text-white">
                Leading Academic Excellence.
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed font-light">
                A premier integrated online institution providing rigorous academic support, expert tutoring, and research guidance across Primary, Secondary, College, and University levels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register" className="bg-brand-gold text-brand-navy px-8 py-4 rounded-sm font-bold text-lg hover:bg-yellow-500 transition-all shadow-lg text-center flex items-center justify-center gap-2">
                  Apply for Admission <ArrowRight size={20} />
                </Link>
                <Link href="/courses" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-white hover:text-brand-navy transition-all text-center">
                  Explore Programmes
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. TRUST SIGNALS BAR */}
        <section className="bg-brand-grey border-b border-gray-200 py-6">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-gray-300 text-center">
              <div>
                <p className="text-brand-navy font-bold text-lg">CAPS Aligned</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Curriculum</p>
              </div>
              <div>
                <p className="text-brand-navy font-bold text-lg">IEB Support</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Exam Prep</p>
              </div>
              <div>
                <p className="text-brand-navy font-bold text-lg">Verified Tutors</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">100% Vetted</p>
              </div>
              <div>
                <p className="text-brand-navy font-bold text-lg">NQF Aligned</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Tertiary Standards</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHAT WOULD YOU LIKE TO DO TODAY? */}
        <section className="py-24 bg-white w-full">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-12">What would you like to do today?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Link href="/academies" className="group p-8 border border-gray-200 rounded-xl hover:border-brand-royal hover:shadow-xl transition-all duration-300 bg-white">
                <BookOpen className="mx-auto text-brand-royal mb-4 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-lg font-bold text-brand-navy mb-2">Learn</h3>
                <p className="text-sm text-gray-500">Access subjects, lessons and study materials.</p>
              </Link>
              <Link href="/tutors" className="group p-8 border border-gray-200 rounded-xl hover:border-brand-royal hover:shadow-xl transition-all duration-300 bg-white">
                <Search className="mx-auto text-brand-royal mb-4 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-lg font-bold text-brand-navy mb-2">Find a Tutor</h3>
                <p className="text-sm text-gray-500">Connect with qualified academic tutors.</p>
              </Link>
              <Link href="/courses" className="group p-8 border border-gray-200 rounded-xl hover:border-brand-royal hover:shadow-xl transition-all duration-300 bg-white">
                <GraduationCap className="mx-auto text-brand-royal mb-4 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-lg font-bold text-brand-navy mb-2">Programmes</h3>
                <p className="text-sm text-gray-500">Explore academic and professional programmes.</p>
              </Link>
              <Link href="/research" className="group p-8 border border-gray-200 rounded-xl hover:border-brand-royal hover:shadow-xl transition-all duration-300 bg-white">
                <Microscope className="mx-auto text-brand-royal mb-4 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-lg font-bold text-brand-navy mb-2">Research</h3>
                <p className="text-sm text-gray-500">Get research and postgraduate assistance.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* 4. WELCOME & STATS SECTION */}
        <section className="py-24 bg-brand-grey border-y border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-6 leading-tight">
                  Empowering Minds.<br />Transforming Futures.
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Think EduNova Academy is not just a tutoring website. It is a comprehensive digital institution combining academic teaching, learning resources, AI-assisted education, and employment opportunities for qualified graduates.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Whether you are a parent seeking foundational support for your child, a university student requiring advanced research guidance, or a graduate looking to teach, EduNova provides the structured environment you need to succeed.
                </p>
                <div className="grid grid-cols-2 gap-6 border-t border-gray-300 pt-8">
                  <div>
                    <p className="text-4xl font-serif font-bold text-brand-royal">15+</p>
                    <p className="text-sm font-bold text-gray-500 uppercase mt-1 tracking-wider">Subjects Covered</p>
                  </div>
                  <div>
                    <p className="text-4xl font-serif font-bold text-brand-royal">100%</p>
                    <p className="text-sm font-bold text-gray-500 uppercase mt-1 tracking-wider">Online Accessible</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px]">
                <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop" alt="Students collaborating" className="w-full h-full object-cover rounded-lg shadow-xl" />
                <div className="absolute -bottom-8 -left-8 bg-brand-navy p-8 rounded-lg shadow-2xl max-w-sm border-l-4 border-brand-gold">
                  <Quote className="text-brand-gold mb-4 opacity-50" size={32} />
                  <p className="text-white font-serif italic text-lg leading-relaxed mb-4">"Education is the most powerful weapon which you can use to change the world."</p>
                  <p className="text-brand-gold font-bold text-sm tracking-widest uppercase">— Nelson Mandela</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. ACADEMIC FACULTIES */}
        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-navy mb-4">Our Academic Faculties</h2>
                <p className="text-lg text-gray-600">Structured educational pathways for every stage of your academic journey, guided by verified professionals.</p>
              </div>
              <Link href="/academies" className="mt-6 md:mt-0 bg-brand-navy text-white px-6 py-3 rounded-sm font-bold hover:bg-opacity-90 transition-colors flex items-center gap-2">
                View All Faculties <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Primary Academy", desc: "Foundational education focusing on literacy, numeracy, and core academic development for young learners (Grades R-7).", icon: <BookOpen size={32} />, href: "/academies/primary" },
                { title: "Secondary Academy", desc: "Comprehensive high school support, examination preparation, and subject-specific tutoring for Grades 8-12.", icon: <GraduationCap size={32} />, href: "/academies/secondary" },
                { title: "College & TVET", desc: "Technical and vocational education support, engineering fundamentals, and specialised college modules.", icon: <Building2 size={32} />, href: "/academies/college" },
                { title: "University & Research", desc: "Advanced academic assistance, statistical analysis, postgraduate support, and comprehensive research guidance.", icon: <Microscope size={32} />, href: "/academies/university" },
              ].map((faculty, i) => (
                <div key={i} className="group bg-brand-grey p-10 rounded-lg shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-200">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="bg-brand-navy/5 p-4 rounded-xl text-brand-navy group-hover:bg-brand-royal group-hover:text-white transition-colors">
                      {faculty.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-brand-navy mb-3">{faculty.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{faculty.desc}</p>
                      <Link href={faculty.href} className="text-sm font-bold text-brand-royal uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                        Explore Programmes <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. AI LEARNING SHOWCASE */}
        <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-transparent"></div>
          
          <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-brand-royal/20 border border-brand-royal/50 px-4 py-1.5 rounded-full mb-6">
                  <BrainCircuit size={16} className="text-brand-sky" />
                  <p className="text-brand-sky font-bold tracking-wider uppercase text-xs">AcadAI Intelligence</p>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight text-white">
                  AI-Powered <span className="text-brand-gold">Academic Support.</span>
                </h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Our AI doesn't just give answers; it teaches. Connect with intelligent academic assistants that help you understand complex topics, prepare for exams, and improve your writing.
                </p>
                <Link href="/ai-assistant" className="bg-brand-gold text-brand-navy px-8 py-4 rounded-sm font-bold text-lg hover:bg-yellow-500 transition-all inline-flex items-center gap-2 shadow-lg">
                  Explore AI Tools <ArrowRight size={18} />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Bot size={20} />, title: "Maths Tutor" },
                  { icon: <Microscope size={20} />, title: "Science Tutor" },
                  { icon: <PenTool size={20} />, title: "Writing Assistant" },
                  { icon: <FileText size={20} />, title: "Exam Prep" },
                  { icon: <Calendar size={20} />, title: "Study Planner" },
                  { icon: <LineChart size={20} />, title: "Research Assistant" },
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 border border-white/20 rounded-lg p-4 flex items-center gap-3 hover:bg-white/20 transition-colors cursor-default backdrop-blur-md">
                    <div className="text-brand-gold">{item.icon}</div>
                    <span className="font-bold text-sm text-white">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. TESTIMONIALS */}
        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">What Our Community Says</h2>
            <p className="text-lg text-gray-600 mb-12">Trusted by parents, students, and tutors across South Africa.</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-brand-grey p-8 rounded-xl border border-gray-200 relative">
                <Quote className="text-brand-gold mb-4" size={32} />
                <p className="text-gray-600 mb-6 italic">"The integration of human tutoring with the AI assistant has transformed how my son studies. His Maths marks have improved from 55% to 78% in just one term."</p>
                <div className="flex items-center justify-center gap-2 text-brand-gold mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="font-bold text-brand-navy">Mrs. Ndlovu</p>
                <p className="text-xs text-gray-500">Parent of Grade 11 Learner</p>
              </div>
              
              <div className="bg-brand-grey p-8 rounded-xl border border-gray-200 relative">
                <Quote className="text-brand-gold mb-4" size={32} />
                <p className="text-gray-600 mb-6 italic">"As a university student, the research support and statistical analysis tutoring saved my dissertation. The tutors are incredibly knowledgeable."</p>
                <div className="flex items-center justify-center gap-2 text-brand-gold mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="font-bold text-brand-navy">Thabo M.</p>
                <p className="text-xs text-gray-500">Postgraduate Student</p>
              </div>

              <div className="bg-brand-grey p-8 rounded-xl border border-gray-200 relative">
                <Quote className="text-brand-gold mb-4" size={32} />
                <p className="text-gray-600 mb-6 italic">"Teaching on this platform is seamless. The scheduling system, virtual classroom, and automated earnings tracker make it a joy to work here."</p>
                <div className="flex items-center justify-center gap-2 text-brand-gold mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="font-bold text-brand-navy">Mr. T. Nkosi</p>
                <p className="text-xs text-gray-500">Maths & Physics Tutor</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. ACADCOREOS SHOWCASE */}
        <section className="w-full bg-brand-navy text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          
          <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-brand-royal/20 border border-brand-royal/50 px-4 py-1.5 rounded-full mb-6">
                  <Database size={14} className="text-brand-sky" />
                  <p className="text-brand-sky font-bold tracking-wider uppercase text-xs">Powered by AcadCoreOS</p>
                </div>
                
                {/* FIXED VISIBILITY HERE */}
                <div className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight text-white">
                  The Intelligent OS for <span className="text-brand-gold">Modern Schools.</span>
                </div>
                
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  We power the institutions behind the students. <strong>AcadCoreOS</strong> is a comprehensive school management platform unifying academics, finance, HR, scheduling, and AI into a single workspace.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://acadcoreos.base44.app/" target="_blank" rel="noopener noreferrer" className="bg-brand-gold text-brand-navy px-8 py-4 rounded-sm font-bold hover:bg-yellow-500 transition-all text-center flex items-center justify-center gap-2 shadow-lg">
                    Explore AcadCoreOS <ArrowRight size={18} />
                  </a>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                {["AcademicCore", "FinanceCore", "AdmissionsCore", "AssessmentCore", "AttendanceCore", "PeopleCore", "ScheduleCore", "ExamCore (CBT)"].map((mod, i) => (
                  <div key={i} className="bg-brand-navy/50 border border-white/5 px-4 py-3 rounded-lg text-sm text-gray-200 flex items-center gap-3 hover:bg-brand-royal/20 transition-colors cursor-default">
                    <span className="w-2 h-2 rounded-full bg-brand-sky"></span> {mod}
                  </div>
                ))}
                <div className="col-span-2 text-center bg-brand-royal/20 border border-brand-royal/30 px-4 py-3 rounded-lg text-sm text-brand-sky font-bold cursor-pointer hover:bg-brand-royal/40 transition-colors">
                  + 11 More Integrated Modules
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. NEWS & ANNOUNCEMENTS */}
        <section className="w-full py-24 bg-brand-grey">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-300 pb-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy">News & Announcements</h2>
                <p className="text-gray-600 mt-2">The latest updates from across the Academy.</p>
              </div>
              <Link href="/news" className="mt-4 md:mt-0 text-brand-royal font-bold hover:underline flex items-center gap-1">View All News <ArrowRight size={16} /></Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { date: "15 Jan 2026", cat: "Institutional", title: "Launch of the 2026 Academic Year", desc: "Think EduNova Academy officially opens registrations for all four academic divisions.", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" },
                { date: "08 Jan 2026", cat: "Research", title: "New Research Support Services", desc: "Expanding our postgraduate support with specialist statistical analysis tutoring.", img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop" },
                { date: "02 Jan 2026", cat: "Faculty", title: "Welcoming Our New Verified Tutors", desc: "Meet the latest graduates and professionals who have joined our teaching faculty.", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" }
              ].map((news, i) => (
                <div key={i} className="bg-white border border-gray-200 group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="h-56 overflow-hidden relative">
                    <img src={news.img} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-brand-navy text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">{news.cat}</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3 font-bold"><Calendar size={14} /> <span>{news.date}</span></div>
                    <h3 className="text-xl font-serif font-bold text-brand-navy mb-2 group-hover:text-brand-royal transition-colors leading-snug">{news.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{news.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. FINAL CTA */}
        <section className="py-20 bg-brand-gold">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-navy mb-6">Take the Next Step Towards Academic Success.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link href="/register" className="bg-brand-navy text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg">
                Register as a Learner
              </Link>
              <Link href="/become-a-tutor" className="bg-white text-brand-navy px-8 py-4 rounded-sm font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">
                Apply as a Tutor
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#081020] text-gray-400 border-t-[6px] border-brand-royal">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white p-2 rounded inline-block mb-6"><img src="/logo.png" alt="EduNova Logo" className="h-14 w-auto object-contain" /></div>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-sm">Think EduNova Academy is a premier integrated online institution. We combine academic teaching, tutoring, research support, and institutional management software to transform education.</p>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-royal hover:text-white transition-all cursor-pointer text-gray-400"><Share2 size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-royal hover:text-white transition-all cursor-pointer text-gray-400"><MessageCircle size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-royal hover:text-white transition-all cursor-pointer text-gray-400"><Globe size={18} /></a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider font-serif">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/about" className="hover:text-brand-gold transition-colors">About the Academy</Link></li>
                <li><Link href="/admissions" className="hover:text-brand-gold transition-colors">Admissions</Link></li>
                <li><Link href="/tutoring" className="hover:text-brand-gold transition-colors">Online Tutoring</Link></li>
                <li><Link href="/research" className="hover:text-brand-gold transition-colors">Research Support</Link></li>
                <li><Link href="/become-a-tutor" className="hover:text-brand-gold transition-colors">Tutor Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider font-serif">Governance</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/popia" className="hover:text-brand-gold transition-colors">POPIA Compliance</Link></li>
                <li><Link href="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-brand-gold transition-colors">Terms of Use</Link></li>
                <li><Link href="/audit" className="hover:text-brand-gold transition-colors">Audit & Annual Reports</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider font-serif">Contact Us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3"><MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" /><span>South Africa</span></li>
                <li className="flex items-center gap-3"><Phone size={18} className="text-brand-gold shrink-0" /><span>+27 (0) 12 345 6789</span></li>
                <li className="flex items-center gap-3"><Mail size={18} className="text-brand-gold shrink-0" /><span>info@thinkedunova.co.za</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 py-6 bg-black/40">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>© 2026 Think EduNova Academy. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Registered Educational Institution. Powered by AcadCoreOS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}