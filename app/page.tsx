import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import Logo from '@/components/Logo';
import { BookOpen, GraduationCap, Users, Microscope, ShieldCheck, Award, ArrowRight, CheckCircle2, LayoutDashboard, Database, Cpu, Calendar, Globe } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />

      <main className="flex-grow">
        
        {/* Institutional Split-Screen Hero */}
        <section className="relative bg-brand-navy min-h-[85vh] flex items-center">
          <div className="absolute inset-0 z-0">
            {/* Split background: Solid Navy on left, Image on right */}
            <div className="absolute inset-0 bg-brand-navy w-full md:w-1/2 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
              alt="South African students" 
              className="absolute inset-0 w-full h-full object-cover object-center md:left-1/2 md:w-1/2 opacity-80"
            />
            {/* Soft gradient overlay to blend the split */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-transparent md:w-3/4 z-10"></div>
          </div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-32">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
                <p className="text-white font-semibold tracking-wide text-xs uppercase">Admissions Open for 2026</p>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-6 leading-[1.1] text-white">
                Leading Academic Excellence.
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
                Think EduNova Academy is a premier integrated online institution providing rigorous academic support, expert tutoring, and research guidance across Primary, Secondary, College, and University levels.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register" className="bg-brand-royal text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-lg text-center flex items-center justify-center gap-2">
                  Apply for Admission <ArrowRight size={18} />
                </Link>
                <Link href="/courses" className="bg-white/5 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-white hover:text-brand-navy hover:-translate-y-0.5 transition-all text-center">
                  Explore Programmes
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Institutional Facts & Figures Bar */}
        <section className="bg-white border-b border-gray-200 py-10 relative z-30 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-200 text-center">
              <div className="hover:-translate-y-1 transition-transform cursor-default">
                <p className="text-4xl font-serif font-bold text-brand-navy">4</p>
                <p className="text-xs font-bold text-gray-500 uppercase mt-2 tracking-widest">Academic Divisions</p>
              </div>
              <div className="hover:-translate-y-1 transition-transform cursor-default">
                <p className="text-4xl font-serif font-bold text-brand-navy">19</p>
                <p className="text-xs font-bold text-gray-500 uppercase mt-2 tracking-widest">Integrated Modules</p>
              </div>
              <div className="hover:-translate-y-1 transition-transform cursor-default">
                <p className="text-4xl font-serif font-bold text-brand-navy">100%</p>
                <p className="text-xs font-bold text-gray-500 uppercase mt-2 tracking-widest">Verified Tutors</p>
              </div>
              <div className="hover:-translate-y-1 transition-transform cursor-default">
                <p className="text-4xl font-serif font-bold text-brand-navy">24/7</p>
                <p className="text-xs font-bold text-gray-500 uppercase mt-2 tracking-widest">Digital Campus</p>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome / Introduction Section */}
        <section className="py-20 bg-brand-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-brand-royal font-bold tracking-wider uppercase text-sm mb-2">Welcome to EduNova</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6 leading-tight">
                  Empowering Minds. Transforming Futures.
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Think EduNova Academy is not just a tutoring website. It is a comprehensive digital institution combining academic teaching, learning resources, AI-assisted education, and employment opportunities for qualified graduates.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Whether you are a parent seeking foundational support for your child, a university student requiring advanced research guidance, or a graduate looking to teach, EduNova provides the structured environment you need to succeed.
                </p>
                <Link href="/about" className="text-brand-royal font-bold hover:underline flex items-center gap-2">
                  Read Our Strategic Plan <ArrowRight size={16} />
                </Link>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-royal/10 rounded-lg transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop" 
                  alt="Students collaborating" 
                  className="relative rounded-lg shadow-xl object-cover h-[400px] w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Faculties */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">Our Academic Faculties</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Structured educational pathways for every stage of your academic journey, guided by verified professionals.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Faculty 1 */}
              <div className="group border border-gray-200 p-8 hover:border-brand-royal hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white relative overflow-hidden rounded-lg">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-royal/5 rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-150"></div>
                <div className="flex items-start gap-6 relative z-10">
                  <div className="bg-brand-navy p-4 rounded-lg text-white group-hover:bg-brand-royal transition-colors shadow-md">
                    <BookOpen size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-brand-navy mb-3 group-hover:text-brand-royal transition-colors">Primary Academy</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">Foundational education focusing on literacy, numeracy, and core academic development for young learners (Grades R-7).</p>
                    <Link href="/academies/primary" className="text-sm font-bold text-brand-royal uppercase tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all">
                      Explore Programmes <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Faculty 2 */}
              <div className="group border border-gray-200 p-8 hover:border-brand-royal hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white relative overflow-hidden rounded-lg">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-royal/5 rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-150"></div>
                <div className="flex items-start gap-6 relative z-10">
                  <div className="bg-brand-navy p-4 rounded-lg text-white group-hover:bg-brand-royal transition-colors shadow-md">
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-brand-navy mb-3 group-hover:text-brand-royal transition-colors">Secondary Academy</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">Comprehensive high school support, examination preparation, and subject-specific tutoring for Grades 8-12.</p>
                    <Link href="/academies/secondary" className="text-sm font-bold text-brand-royal uppercase tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all">
                      Explore Programmes <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Faculty 3 */}
              <div className="group border border-gray-200 p-8 hover:border-brand-royal hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white relative overflow-hidden rounded-lg">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-royal/5 rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-150"></div>
                <div className="flex items-start gap-6 relative z-10">
                  <div className="bg-brand-navy p-4 rounded-lg text-white group-hover:bg-brand-royal transition-colors shadow-md">
                    <Users size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-brand-navy mb-3 group-hover:text-brand-royal transition-colors">College & TVET</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">Technical and vocational education support, engineering fundamentals, and specialised college modules.</p>
                    <Link href="/academies/college" className="text-sm font-bold text-brand-royal uppercase tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all">
                      Explore Programmes <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Faculty 4 */}
              <div className="group border border-gray-200 p-8 hover:border-brand-royal hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white relative overflow-hidden rounded-lg">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-royal/5 rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-150"></div>
                <div className="flex items-start gap-6 relative z-10">
                  <div className="bg-brand-navy p-4 rounded-lg text-white group-hover:bg-brand-royal transition-colors shadow-md">
                    <Microscope size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-brand-navy mb-3 group-hover:text-brand-royal transition-colors">University & Research</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">Advanced academic assistance, statistical analysis, postgraduate support, and comprehensive research guidance.</p>
                    <Link href="/academies/university" className="text-sm font-bold text-brand-royal uppercase tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all">
                      Explore Programmes <ArrowRight size={16} />
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
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                  Think EduNova doesn't just teach students—we power the institutions behind them. We integrate <strong>AcadCoreOS</strong>, a comprehensive school management platform unifying academics, finance, HR, scheduling, and AI into a single, scalable workspace.
                </p>
                
                <div className="space-y-5 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="text-brand-teal" size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">19 Integrated Core Modules</h4>
                      <p className="text-sm text-gray-400">From AcademicCore and FinanceCore to Admissions and HR.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="text-brand-teal" size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">Built for African Institutions</h4>
                      <p className="text-sm text-gray-400">Secure, multi-tenant cloud architecture designed to scale from 100 to 1000+ students.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="text-brand-teal" size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">AcadAI Intelligence Layer</h4>
                      <p className="text-sm text-gray-400">Smart insights, automated reporting, and AI-powered productivity tools.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://acadcoreos.base44.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-brand-gold text-brand-navy px-8 py-4 rounded-sm font-bold text-lg hover:bg-yellow-500 transition-all text-center flex items-center justify-center gap-2 shadow-lg"
                  >
                    Explore AcadCoreOS <ArrowRight size={18} />
                  </a>
                  <Link href="/contact" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-white/20 transition-all text-center">
                    Request a Demo
                  </Link>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md shadow-2xl">
                <h3 className="text-xl font-bold mb-6 text-white text-center font-serif">The 19 Core Modules</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "AcademicCore", icon: <BookOpen size={16} /> },
                    { name: "FinanceCore", icon: <LayoutDashboard size={16} /> },
                    { name: "AdmissionsCore", icon: <Users size={16} /> },
                    { name: "AssessmentCore", icon: <Award size={16} /> },
                    { name: "AttendanceCore", icon: <CheckCircle2 size={16} /> },
                    { name: "PeopleCore", icon: <Users size={16} /> },
                    { name: "ScheduleCore", icon: <Database size={16} /> },
                    { name: "ExamCore (CBT)", icon: <Cpu size={16} /> },
                  ].map((mod, i) => (
                    <div key={i} className="flex items-center gap-2 bg-brand-navy/60 border border-white/10 px-3 py-3 rounded text-sm text-gray-200 hover:bg-brand-royal/20 transition-colors cursor-default">
                      <span className="text-brand-sky">{mod.icon}</span> {mod.name}
                    </div>
                  ))}
                  <div className="flex items-center justify-center bg-brand-royal/20 border border-brand-royal/30 px-3 py-3 rounded text-sm text-brand-sky font-bold col-span-2">
                    + 11 More Integrated Modules
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Institutional Quality & Tutor Careers */}
        <section className="py-20 bg-brand-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16">
            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4 flex items-center gap-3">
                <ShieldCheck className="text-brand-teal" size={28} /> Institutional Quality Assurance
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Think EduNova Academy maintains rigorous academic standards. All tutors undergo a strict recruitment process including qualification verification, subject competency assessments, and teaching demonstrations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-brand-charcoal font-medium"><span className="w-2 h-2 bg-brand-teal rounded-full mr-3"></span> Verified Qualifications</li>
                <li className="flex items-center text-brand-charcoal font-medium"><span className="w-2 h-2 bg-brand-teal rounded-full mr-3"></span> Competency Assessments</li>
                <li className="flex items-center text-brand-charcoal font-medium"><span className="w-2 h-2 bg-brand-teal rounded-full mr-3"></span> Continuous Performance Monitoring</li>
              </ul>
            </div>
            
            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4 flex items-center gap-3">
                <Award className="text-brand-gold" size={28} /> Tutor Careers & Empowerment
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We provide employment opportunities for graduates and qualified professionals. Join our network of educators, share your knowledge, and earn income through our structured teaching platform.
              </p>
              <Link href="/become-a-tutor" className="inline-block bg-brand-navy text-white px-6 py-3 rounded-sm font-bold hover:bg-opacity-90 transition-colors">
                Apply to Become a Tutor
              </Link>
            </div>
          </div>
        </section>

        {/* Professional Newsroom */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-4">
              <div>
                <h2 className="text-3xl font-serif font-bold text-brand-navy">News & Announcements</h2>
                <p className="text-gray-500 mt-2 text-sm">The latest updates from across the Academy.</p>
              </div>
              <Link href="/news" className="text-brand-royal font-bold hover:underline flex items-center gap-1">View All News <ArrowRight size={16} /></Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* News Card 1 */}
              <div className="bg-white border border-gray-200 group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-56 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" alt="Campus" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-brand-navy text-white text-xs font-bold px-3 py-1 uppercase tracking-wider shadow-sm">Institutional</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <Calendar size={14} /> <span>15 Jan 2026</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-brand-navy mb-3 group-hover:text-brand-royal transition-colors leading-snug">Launch of the 2026 Academic Year</h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">Think EduNova Academy officially opens registrations for all four academic divisions.</p>
                </div>
              </div>

              {/* News Card 2 */}
              <div className="bg-white border border-gray-200 group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-56 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop" alt="Research" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-brand-navy text-white text-xs font-bold px-3 py-1 uppercase tracking-wider shadow-sm">Research</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <Calendar size={14} /> <span>08 Jan 2026</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-brand-navy mb-3 group-hover:text-brand-royal transition-colors leading-snug">New Research Support Services</h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">Expanding our postgraduate support with specialist statistical analysis tutoring.</p>
                </div>
              </div>

              {/* News Card 3 */}
              <div className="bg-white border border-gray-200 group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-56 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" alt="Tutors" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-brand-navy text-white text-xs font-bold px-3 py-1 uppercase tracking-wider shadow-sm">Faculty</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <Calendar size={14} /> <span>02 Jan 2026</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-brand-navy mb-3 group-hover:text-brand-royal transition-colors leading-snug">Welcoming Our New Verified Tutors</h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">Meet the latest graduates and professionals who have joined our teaching faculty.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Institutional Footer */}
      <footer className="bg-brand-navy text-gray-300 py-16 border-t-[8px] border-brand-royal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Logo className="w-10 h-10" />
              <h3 className="text-white font-serif font-bold text-xl">EduNova</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4">Empowering Minds. Transforming Futures.</p>
            <p className="text-xs text-gray-500">A premier integrated online institution providing rigorous academic support.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Faculties</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/academies/primary" className="hover:text-white transition-colors">Primary Academy</Link></li>
              <li><Link href="/academies/secondary" className="hover:text-white transition-colors">Secondary Academy</Link></li>
              <li><Link href="/academies/college" className="hover:text-white transition-colors">College & TVET</Link></li>
              <li><Link href="/academies/university" className="hover:text-white transition-colors">University & Research</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
              <li><Link href="/tutoring" className="hover:text-white transition-colors">Tutoring</Link></li>
              <li><Link href="/become-a-tutor" className="hover:text-white transition-colors">Tutor Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Governance</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/popia" className="hover:text-white transition-colors">POPIA Compliance</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
              <li><Link href="/audit" className="hover:text-white transition-colors">Audit & Reports</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Contact</h4>
            <p className="text-sm text-gray-400 mb-2">South Africa</p>
            <p className="text-sm text-gray-400 mb-2">info@thinkedunova.co.za</p>
            <Link href="/contact" className="text-brand-gold hover:underline text-sm font-bold mt-2 inline-block">Get in Touch</Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/10 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 Think EduNova Academy. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Registered Educational Institution.</p>
        </div>
      </footer>
    </div>
  );
}