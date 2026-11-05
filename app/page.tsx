import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { BookOpen, GraduationCap, Users, Microscope, ShieldCheck, Award, ArrowRight, CheckCircle2, LayoutDashboard, Database, Cpu, Calendar, Globe, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />

      <main className="flex-grow">
        
        {/* Institutional Split-Screen Hero (Full Width) */}
        <section className="relative bg-brand-navy overflow-hidden w-full">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-brand-navy w-full md:w-[55%] z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
              alt="South African students" 
              className="absolute inset-0 w-full h-full object-cover object-center md:left-[55%] md:w-[45%] opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy to-transparent md:w-2/3 z-10"></div>
          </div>
          
          <div className="relative z-20 max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 w-full py-24 lg:py-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
                <p className="text-white font-semibold tracking-wide text-xs uppercase">Admissions Open for 2026</p>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-6 leading-[1.1] text-white">
                Leading Academic Excellence.
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Think EduNova Academy is a premier integrated online institution providing rigorous academic support, expert tutoring, and research guidance across Primary, Secondary, College, and University levels.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register" className="bg-brand-royal text-white px-8 py-4 rounded-sm font-bold text-base hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-lg text-center flex items-center justify-center gap-2">
                  Apply for Admission <ArrowRight size={18} />
                </Link>
                <Link href="/courses" className="bg-white/5 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-sm font-bold text-base hover:bg-white hover:text-brand-navy hover:-translate-y-0.5 transition-all text-center">
                  Explore Programmes
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Institutional Facts & Figures Bar (Wider Layout) */}
        <section className="bg-brand-grey border-b border-gray-200 py-10 relative z-30">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-gray-300 text-center">
              <div className="hover:-translate-y-1 transition-transform cursor-default">
                <p className="text-5xl font-serif font-bold text-brand-navy">4</p>
                <p className="text-sm font-bold text-gray-500 uppercase mt-2 tracking-widest">Academic Divisions</p>
              </div>
              <div className="hover:-translate-y-1 transition-transform cursor-default">
                <p className="text-5xl font-serif font-bold text-brand-navy">19</p>
                <p className="text-sm font-bold text-gray-500 uppercase mt-2 tracking-widest">Integrated Modules</p>
              </div>
              <div className="hover:-translate-y-1 transition-transform cursor-default">
                <p className="text-5xl font-serif font-bold text-brand-navy">100%</p>
                <p className="text-sm font-bold text-gray-500 uppercase mt-2 tracking-widest">Verified Tutors</p>
              </div>
              <div className="hover:-translate-y-1 transition-transform cursor-default">
                <p className="text-5xl font-serif font-bold text-brand-navy">24/7</p>
                <p className="text-sm font-bold text-gray-500 uppercase mt-2 tracking-widest">Digital Campus</p>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome / Introduction Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <p className="text-brand-royal font-bold tracking-widest uppercase text-sm mb-3">Welcome to EduNova</p>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-6 leading-tight">
                  Empowering Minds. <br/>Transforming Futures.
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
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-royal/10 rounded-2xl transform rotate-2"></div>
                <img 
                  src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop" 
                  alt="Students collaborating" 
                  className="relative rounded-2xl shadow-2xl object-cover h-[500px] w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Faculties (Full Width Grid) */}
        <section className="py-24 bg-brand-grey">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-4">Our Academic Faculties</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Structured educational pathways for every stage of your academic journey, guided by verified professionals.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Faculty 1 */}
              <div className="group bg-white border border-gray-200 p-10 hover:border-brand-royal hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden rounded-xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-royal/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150"></div>
                <div className="flex items-start gap-6 relative z-10">
                  <div className="bg-brand-navy p-4 rounded-xl text-white group-hover:bg-brand-royal transition-colors shadow-lg">
                    <BookOpen size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-brand-navy mb-3 group-hover:text-brand-royal transition-colors">Primary Academy</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">Foundational education focusing on literacy, numeracy, and core academic development for young learners (Grades R-7).</p>
                    <Link href="/academies/primary" className="text-sm font-bold text-brand-royal uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                      Explore Programmes <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Faculty 2 */}
              <div className="group bg-white border border-gray-200 p-10 hover:border-brand-royal hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden rounded-xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-royal/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150"></div>
                <div className="flex items-start gap-6 relative z-10">
                  <div className="bg-brand-navy p-4 rounded-xl text-white group-hover:bg-brand-royal transition-colors shadow-lg">
                    <GraduationCap size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-brand-navy mb-3 group-hover:text-brand-royal transition-colors">Secondary Academy</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">Comprehensive high school support, examination preparation, and subject-specific tutoring for Grades 8-12.</p>
                    <Link href="/academies/secondary" className="text-sm font-bold text-brand-royal uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                      Explore Programmes <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Faculty 3 */}
              <div className="group bg-white border border-gray-200 p-10 hover:border-brand-royal hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden rounded-xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-royal/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150"></div>
                <div className="flex items-start gap-6 relative z-10">
                  <div className="bg-brand-navy p-4 rounded-xl text-white group-hover:bg-brand-royal transition-colors shadow-lg">
                    <Users size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-brand-navy mb-3 group-hover:text-brand-royal transition-colors">College & TVET</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">Technical and vocational education support, engineering fundamentals, and specialised college modules.</p>
                    <Link href="/academies/college" className="text-sm font-bold text-brand-royal uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                      Explore Programmes <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Faculty 4 */}
              <div className="group bg-white border border-gray-200 p-10 hover:border-brand-royal hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden rounded-xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-royal/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150"></div>
                <div className="flex items-start gap-6 relative z-10">
                  <div className="bg-brand-navy p-4 rounded-xl text-white group-hover:bg-brand-royal transition-colors shadow-lg">
                    <Microscope size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-brand-navy mb-3 group-hover:text-brand-royal transition-colors">University & Research</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">Advanced academic assistance, statistical analysis, postgraduate support, and comprehensive research guidance.</p>
                    <Link href="/academies/university" className="text-sm font-bold text-brand-royal uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                      Explore Programmes <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AcadCoreOS Institutional Integration */}
        <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/80"></div>
          
          <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              
              <div>
                <div className="inline-flex items-center gap-2 bg-brand-royal/20 border border-brand-royal/50 px-4 py-1.5 rounded-full mb-6">
                  <Database size={14} className="text-brand-sky" />
                  <p className="text-brand-sky font-bold tracking-widest uppercase text-xs">Powered by AcadCoreOS</p>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                  The Intelligent OS for <span className="text-brand-gold">Modern Schools.</span>
                </h2>
                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                  Think EduNova doesn't just teach students—we power the institutions behind them. We integrate <strong>AcadCoreOS</strong>, a comprehensive school management platform unifying academics, finance, HR, scheduling, and AI into a single, scalable workspace.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="text-brand-teal" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xl mb-1">19 Integrated Core Modules</h4>
                      <p className="text-gray-400">From AcademicCore and FinanceCore to Admissions and HR.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="text-brand-teal" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xl mb-1">Built for African Institutions</h4>
                      <p className="text-gray-400">Secure, multi-tenant cloud architecture designed to scale from 100 to 1000+ students.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="text-brand-teal" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xl mb-1">AcadAI Intelligence Layer</h4>
                      <p className="text-gray-400">Smart insights, automated reporting, and AI-powered productivity tools.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <a 
                    href="https://acadcoreos.base44.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-brand-gold text-brand-navy px-10 py-4 rounded-sm font-bold text-lg hover:bg-yellow-500 transition-all text-center flex items-center justify-center gap-2 shadow-lg"
                  >
                    Explore AcadCoreOS <ArrowRight size={18} />
                  </a>
                  <Link href="/contact" className="bg-white/10 border border-white/20 text-white px-10 py-4 rounded-sm font-bold text-lg hover:bg-white/20 transition-all text-center">
                    Request a Demo
                  </Link>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-md shadow-2xl">
                <h3 className="text-2xl font-bold mb-8 text-white font-serif">The 19 Core Modules</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "AcademicCore", icon: <BookOpen size={18} /> },
                    { name: "FinanceCore", icon: <LayoutDashboard size={18} /> },
                    { name: "AdmissionsCore", icon: <Users size={18} /> },
                    { name: "AssessmentCore", icon: <Award size={18} /> },
                    { name: "AttendanceCore", icon: <CheckCircle2 size={18} /> },
                    { name: "PeopleCore", icon: <Users size={18} /> },
                    { name: "ScheduleCore", icon: <Database size={18} /> },
                    { name: "ExamCore (CBT)", icon: <Cpu size={18} /> },
                  ].map((mod, i) => (
                    <div key={i} className="flex items-center gap-3 bg-brand-navy/60 border border-white/10 px-4 py-4 rounded-lg text-base text-gray-200 hover:bg-brand-royal/20 transition-colors cursor-default">
                      <span className="text-brand-sky">{mod.icon}</span> {mod.name}
                    </div>
                  ))}
                  <div className="flex items-center justify-center bg-brand-royal/20 border border-brand-royal/30 px-4 py-4 rounded-lg text-base text-brand-sky font-bold col-span-2">
                    + 11 More Integrated Modules
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Institutional Quality & Tutor Careers */}
        <section className="py-24 bg-white">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 grid md:grid-cols-2 gap-16">
            <div className="bg-brand-grey p-12 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
              <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6 flex items-center gap-3">
                <ShieldCheck className="text-brand-teal" size={32} /> Institutional Quality Assurance
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Think EduNova Academy maintains rigorous academic standards. All tutors undergo a strict recruitment process including qualification verification, subject competency assessments, and teaching demonstrations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-brand-charcoal font-medium text-lg"><span className="w-2.5 h-2.5 bg-brand-teal rounded-full mr-4"></span> Verified Qualifications</li>
                <li className="flex items-center text-brand-charcoal font-medium text-lg"><span className="w-2.5 h-2.5 bg-brand-teal rounded-full mr-4"></span> Competency Assessments</li>
                <li className="flex items-center text-brand-charcoal font-medium text-lg"><span className="w-2.5 h-2.5 bg-brand-teal rounded-full mr-4"></span> Continuous Performance Monitoring</li>
              </ul>
            </div>
            
            <div className="bg-brand-grey p-12 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
              <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6 flex items-center gap-3">
                <Award className="text-brand-gold" size={32} /> Tutor Careers & Empowerment
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We provide employment opportunities for graduates and qualified professionals. Join our network of educators, share your knowledge, and earn income through our structured teaching platform.
              </p>
              <Link href="/become-a-tutor" className="inline-block bg-brand-navy text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-opacity-90 transition-colors shadow-md">
                Apply to Become a Tutor
              </Link>
            </div>
          </div>
        </section>

        {/* Professional Newsroom */}
        <section className="py-24 bg-brand-grey border-t border-gray-200">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20">
            <div className="flex justify-between items-end mb-12 border-b border-gray-300 pb-6">
              <div>
                <h2 className="text-4xl font-serif font-bold text-brand-navy">News & Announcements</h2>
                <p className="text-gray-600 mt-2 text-lg">The latest updates from across the Academy.</p>
              </div>
              <Link href="/news" className="text-brand-royal font-bold text-lg hover:underline flex items-center gap-2">View All News <ArrowRight size={18} /></Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* News Card 1 */}
              <div className="bg-white border border-gray-200 group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-64 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" alt="Campus" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-brand-navy text-white text-xs font-bold px-4 py-1.5 uppercase tracking-widest shadow-sm">Institutional</div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 font-medium">
                    <Calendar size={16} /> <span>15 Jan 2026</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-brand-navy mb-3 group-hover:text-brand-royal transition-colors leading-snug">Launch of the 2026 Academic Year</h3>
                  <p className="text-gray-600 leading-relaxed">Think EduNova Academy officially opens registrations for all four academic divisions.</p>
                </div>
              </div>

              {/* News Card 2 */}
              <div className="bg-white border border-gray-200 group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-64 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop" alt="Research" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-brand-navy text-white text-xs font-bold px-4 py-1.5 uppercase tracking-widest shadow-sm">Research</div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 font-medium">
                    <Calendar size={16} /> <span>08 Jan 2026</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-brand-navy mb-3 group-hover:text-brand-royal transition-colors leading-snug">New Research Support Services</h3>
                  <p className="text-gray-600 leading-relaxed">Expanding our postgraduate support with specialist statistical analysis tutoring.</p>
                </div>
              </div>

              {/* News Card 3 */}
              <div className="bg-white border border-gray-200 group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-64 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" alt="Tutors" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-brand-navy text-white text-xs font-bold px-4 py-1.5 uppercase tracking-widest shadow-sm">Faculty</div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 font-medium">
                    <Calendar size={16} /> <span>02 Jan 2026</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-brand-navy mb-3 group-hover:text-brand-royal transition-colors leading-snug">Welcoming Our New Verified Tutors</h3>
                  <p className="text-gray-600 leading-relaxed">Meet the latest graduates and professionals who have joined our teaching faculty.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}