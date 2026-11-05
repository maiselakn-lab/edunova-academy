import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import Logo from '@/components/Logo';
import { BookOpen, GraduationCap, Users, Microscope, ShieldCheck, Award, ArrowRight, CheckCircle2, LayoutDashboard, Database, Cpu } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />

      <main className="flex-grow">
        
        {/* Hero Section */}
        <section className="relative bg-brand-navy text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
              alt="South African students learning" 
              className="w-full h-full object-cover object-center opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/60"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
            <div className="max-w-3xl">
              <div className="inline-block bg-brand-gold/20 border border-brand-gold/50 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
                <p className="text-brand-gold font-bold tracking-wider uppercase text-xs">Welcome to Think EduNova Academy</p>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.15] text-white">
                Leading Academic Excellence for a <span className="text-brand-gold">Digital Future.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-100 mb-10 leading-relaxed max-w-2xl">
                A premier integrated online institution providing rigorous academic support, expert tutoring, and research guidance across Primary, Secondary, College, and University levels.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register" className="bg-brand-royal text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-lg text-center flex items-center justify-center gap-2">
                  Apply for Admission <ArrowRight size={18} />
                </Link>
                <Link href="/courses" className="bg-transparent border-2 border-white/70 text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-white hover:text-brand-navy hover:-translate-y-0.5 transition-all text-center">
                  Explore Programmes
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Data Bar */}
        <section className="bg-brand-grey border-b border-gray-200 py-8 relative z-10 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-300 text-center">
              <div className="hover:-translate-y-1 transition-transform cursor-default">
                <p className="text-4xl font-bold text-brand-navy">4</p>
                <p className="text-xs font-bold text-gray-500 uppercase mt-1 tracking-wider">Academic Divisions</p>
              </div>
              <div className="hover:-translate-y-1 transition-transform cursor-default">
                <p className="text-4xl font-bold text-brand-navy">19</p>
                <p className="text-xs font-bold text-gray-500 uppercase mt-1 tracking-wider">Integrated Modules</p>
              </div>
              <div className="hover:-translate-y-1 transition-transform cursor-default">
                <p className="text-4xl font-bold text-brand-navy">100%</p>
                <p className="text-xs font-bold text-gray-500 uppercase mt-1 tracking-wider">Verified Tutors</p>
              </div>
              <div className="hover:-translate-y-1 transition-transform cursor-default">
                <p className="text-4xl font-bold text-brand-navy">24/7</p>
                <p className="text-xs font-bold text-gray-500 uppercase mt-1 tracking-wider">Digital Campus</p>
              </div>
            </div>
          </div>
        </section>

        {/* Faculties */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-4">
              <div>
                <h2 className="text-3xl font-bold text-brand-navy">Our Academic Faculties</h2>
                <p className="text-gray-600 mt-2">Structured educational pathways for every stage of your academic journey.</p>
              </div>
              <Link href="/academies" className="hidden md:flex items-center gap-1 text-brand-royal font-bold hover:underline">
                View All Faculties <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Faculty 1 */}
              <div className="border border-gray-200 p-8 hover:border-brand-royal hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group bg-white cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-royal/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                <div className="flex items-start gap-5 relative z-10">
                  <div className="bg-brand-navy p-3 rounded-sm text-white group-hover:bg-brand-royal transition-colors">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-royal transition-colors">Primary Academy</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">Foundational education focusing on literacy, numeracy, and core academic development for young learners.</p>
                    <span className="text-sm font-bold text-brand-royal uppercase tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all">View Programmes <ArrowRight size={14} /></span>
                  </div>
                </div>
              </div>

              {/* Faculty 2 */}
              <div className="border border-gray-200 p-8 hover:border-brand-royal hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group bg-white cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-royal/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                <div className="flex items-start gap-5 relative z-10">
                  <div className="bg-brand-navy p-3 rounded-sm text-white group-hover:bg-brand-royal transition-colors">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-royal transition-colors">Secondary Academy</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">Comprehensive high school support, examination preparation, and subject-specific tutoring for Grades 8-12.</p>
                    <span className="text-sm font-bold text-brand-royal uppercase tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all">View Programmes <ArrowRight size={14} /></span>
                  </div>
                </div>
              </div>

              {/* Faculty 3 */}
              <div className="border border-gray-200 p-8 hover:border-brand-royal hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group bg-white cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-royal/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                <div className="flex items-start gap-5 relative z-10">
                  <div className="bg-brand-navy p-3 rounded-sm text-white group-hover:bg-brand-royal transition-colors">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-royal transition-colors">College & TVET Academy</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">Technical and vocational education support, engineering fundamentals, and specialised college modules.</p>
                    <span className="text-sm font-bold text-brand-royal uppercase tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all">View Programmes <ArrowRight size={14} /></span>
                  </div>
                </div>
              </div>

              {/* Faculty 4 */}
              <div className="border border-gray-200 p-8 hover:border-brand-royal hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group bg-white cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-royal/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                <div className="flex items-start gap-5 relative z-10">
                  <div className="bg-brand-navy p-3 rounded-sm text-white group-hover:bg-brand-royal transition-colors">
                    <Microscope size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-royal transition-colors">University & Research</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">Advanced academic assistance, statistical analysis, postgraduate support, and comprehensive research guidance.</p>
                    <span className="text-sm font-bold text-brand-royal uppercase tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all">View Programmes <ArrowRight size={14} /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW SECTION: AcadCoreOS Institutional Integration */}
        <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-brand-navy to-brand-navy"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Text Content */}
              <div>
                <div className="inline-block bg-brand-royal/20 border border-brand-royal/50 px-3 py-1 rounded-sm mb-6">
                  <p className="text-brand-sky font-bold tracking-wider uppercase text-xs">Powered by AcadCoreOS</p>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  The Intelligent OS for <span className="text-brand-gold">Modern Schools.</span>
                </h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Think EduNova doesn't just teach students—we power the institutions behind them. We are proud to integrate <strong>AcadCoreOS</strong>, a comprehensive school management platform unifying academics, finance, HR, scheduling, and AI into a single, scalable workspace.
                </p>
                
                <div className="space-y-4 mb-10">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-teal shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-white">19 Integrated Core Modules</h4>
                      <p className="text-sm text-gray-400">From AcademicCore and FinanceCore to Admissions and HR.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-teal shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-white">Built for African Institutions</h4>
                      <p className="text-sm text-gray-400">Secure, multi-tenant cloud architecture designed to scale from 100 to 1000+ students.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-teal shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-white">AcadAI Intelligence Layer</h4>
                      <p className="text-sm text-gray-400">Smart insights, automated reporting, and AI-powered productivity tools.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://acadcoreos.base44.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-brand-gold text-brand-navy px-8 py-4 rounded-sm font-bold text-lg hover:bg-yellow-500 transition-all text-center flex items-center justify-center gap-2"
                  >
                    Explore AcadCoreOS <ArrowRight size={18} />
                  </a>
                  <Link href="/contact" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-white/20 transition-all text-center">
                    Request a Demo
                  </Link>
                </div>
              </div>

              {/* Visual Graphic / Module Grid */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-6 text-white text-center">The 19 Core Modules</h3>
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
                    <div key={i} className="flex items-center gap-2 bg-brand-navy/50 border border-white/10 px-3 py-2 rounded text-sm text-gray-200">
                      <span className="text-brand-sky">{mod.icon}</span> {mod.name}
                    </div>
                  ))}
                  <div className="flex items-center justify-center bg-brand-royal/20 border border-brand-royal/30 px-3 py-2 rounded text-sm text-brand-sky font-bold col-span-2">
                    + 11 More Integrated Modules
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-xs text-gray-400">Trusted by schools across Africa. Powered by AcadAI.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Institutional Quality & Tutor Careers */}
        <section className="py-20 bg-brand-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16">
            <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-brand-navy mb-4 flex items-center gap-3">
                <ShieldCheck className="text-brand-teal" size={28} /> Institutional Quality Assurance
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Think EduNova Academy maintains rigorous academic standards. All tutors undergo a strict recruitment process including qualification verification, subject competency assessments, and teaching demonstrations. We ensure that our students receive instruction from verified, capable professionals.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-brand-charcoal font-medium"><span className="w-2 h-2 bg-brand-teal rounded-full mr-3"></span> Verified Qualifications</li>
                <li className="flex items-center text-brand-charcoal font-medium"><span className="w-2 h-2 bg-brand-teal rounded-full mr-3"></span> Competency Assessments</li>
                <li className="flex items-center text-brand-charcoal font-medium"><span className="w-2 h-2 bg-brand-teal rounded-full mr-3"></span> Continuous Performance Monitoring</li>
              </ul>
            </div>
            
            <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-brand-navy mb-4 flex items-center gap-3">
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

        {/* Newsroom */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-10 border-b border-gray-200 pb-4">
              <h2 className="text-3xl font-bold text-brand-navy">Latest from the Academy</h2>
              <Link href="/news" className="text-brand-royal font-bold hover:underline flex items-center gap-1">View Newsroom <ArrowRight size={16} /></Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white border border-gray-200 group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" alt="SA Campus" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-brand-gold text-brand-navy text-xs font-bold px-3 py-1 uppercase tracking-wider shadow-sm">Announcements</div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-royal transition-colors">Launch of the 2026 Academic Year</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Think EduNova Academy officially opens registrations for all four academic divisions.</p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white border border-gray-200 group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop" alt="SA Research" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-brand-royal text-white text-xs font-bold px-3 py-1 uppercase tracking-wider shadow-sm">Research</div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-royal transition-colors">New Research Support Services</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Expanding our postgraduate support with specialist statistical analysis tutoring.</p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-white border border-gray-200 group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" alt="SA Tutors" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-brand-teal text-white text-xs font-bold px-3 py-1 uppercase tracking-wider shadow-sm">Tutor Network</div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-royal transition-colors">Welcoming Our New Verified Tutors</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Meet the latest graduates and professionals who have joined our teaching faculty.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-brand-navy text-gray-300 py-16 border-t-[8px] border-brand-royal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Logo className="w-10 h-10" />
              <h3 className="text-white font-bold text-xl">EduNova</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4">Empowering Minds. Transforming Futures.</p>
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