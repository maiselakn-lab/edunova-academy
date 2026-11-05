import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import Logo from '@/components/Logo';
import { BookOpen, GraduationCap, Users, Microscope, ShieldCheck, Award, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />

      <main className="flex-grow">
        
        {/* Hero Section - Fixed Layout */}
        <section className="relative bg-brand-navy text-white overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
              alt="Students learning together" 
              className="w-full h-full object-cover object-center"
            />
            {/* Dark gradient overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/40"></div>
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
            <div className="max-w-3xl">
              <div className="inline-block bg-brand-gold/10 border border-brand-gold/30 px-3 py-1 rounded-full mb-6">
                <p className="text-brand-gold font-bold tracking-wider uppercase text-xs">Welcome to Think EduNova Academy</p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                Leading Academic Excellence for a <br className="hidden md:block" />
                <span className="text-brand-gold">Digital Future.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
                A premier integrated online institution providing rigorous academic support, expert tutoring, and research guidance across Primary, Secondary, College, and University levels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register" className="bg-brand-royal text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-blue-700 transition-all shadow-lg text-center flex items-center justify-center gap-2">
                  Apply for Admission <ArrowRight size={18} />
                </Link>
                <Link href="/courses" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-white hover:text-brand-navy transition-all text-center">
                  Explore Programmes
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Data Bar */}
        <section className="bg-brand-grey border-b border-gray-200 py-8 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-300 text-center">
              <div>
                <p className="text-4xl font-bold text-brand-navy">4</p>
                <p className="text-xs font-bold text-gray-500 uppercase mt-1 tracking-wider">Academic Divisions</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-brand-navy">19</p>
                <p className="text-xs font-bold text-gray-500 uppercase mt-1 tracking-wider">Integrated Modules</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-brand-navy">100%</p>
                <p className="text-xs font-bold text-gray-500 uppercase mt-1 tracking-wider">Verified Tutors</p>
              </div>
              <div>
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
              <div className="border border-gray-200 p-8 hover:border-brand-royal hover:shadow-lg transition-all duration-300 group bg-white cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-royal/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                <div className="flex items-start gap-5 relative z-10">
                  <div className="bg-brand-navy p-3 rounded-sm text-white group-hover:bg-brand-royal transition-colors">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-royal transition-colors">Primary Academy</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">Foundational education focusing on literacy, numeracy, and core academic development for young learners.</p>
                    <span className="text-sm font-bold text-brand-royal uppercase tracking-wide flex items-center gap-1">View Programmes <ArrowRight size={14} /></span>
                  </div>
                </div>
              </div>

              {/* Faculty 2 */}
              <div className="border border-gray-200 p-8 hover:border-brand-royal hover:shadow-lg transition-all duration-300 group bg-white cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-royal/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                <div className="flex items-start gap-5 relative z-10">
                  <div className="bg-brand-navy p-3 rounded-sm text-white group-hover:bg-brand-royal transition-colors">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-royal transition-colors">Secondary Academy</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">Comprehensive high school support, examination preparation, and subject-specific tutoring for Grades 8-12.</p>
                    <span className="text-sm font-bold text-brand-royal uppercase tracking-wide flex items-center gap-1">View Programmes <ArrowRight size={14} /></span>
                  </div>
                </div>
              </div>

              {/* Faculty 3 */}
              <div className="border border-gray-200 p-8 hover:border-brand-royal hover:shadow-lg transition-all duration-300 group bg-white cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-royal/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                <div className="flex items-start gap-5 relative z-10">
                  <div className="bg-brand-navy p-3 rounded-sm text-white group-hover:bg-brand-royal transition-colors">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-royal transition-colors">College & TVET Academy</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">Technical and vocational education support, engineering fundamentals, and specialised college modules.</p>
                    <span className="text-sm font-bold text-brand-royal uppercase tracking-wide flex items-center gap-1">View Programmes <ArrowRight size={14} /></span>
                  </div>
                </div>
              </div>

              {/* Faculty 4 */}
              <div className="border border-gray-200 p-8 hover:border-brand-royal hover:shadow-lg transition-all duration-300 group bg-white cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-royal/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                <div className="flex items-start gap-5 relative z-10">
                  <div className="bg-brand-navy p-3 rounded-sm text-white group-hover:bg-brand-royal transition-colors">
                    <Microscope size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-royal transition-colors">University & Research</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">Advanced academic assistance, statistical analysis, postgraduate support, and comprehensive research guidance.</p>
                    <span className="text-sm font-bold text-brand-royal uppercase tracking-wide flex items-center gap-1">View Programmes <ArrowRight size={14} /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Institutional Quality & Tutor Careers */}
        <section className="py-20 bg-brand-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16">
            <div>
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
            
            <div className="bg-white p-8 border border-gray-200 shadow-sm">
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
              <div className="bg-white border border-gray-200 group cursor-pointer hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" alt="Campus" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-brand-gold text-brand-navy text-xs font-bold px-3 py-1 uppercase tracking-wider">Announcements</div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-royal transition-colors">Launch of the 2026 Academic Year</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Think EduNova Academy officially opens registrations for all four academic divisions.</p>
                </div>
              </div>
              <div className="bg-white border border-gray-200 group cursor-pointer hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" alt="Research" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-brand-royal text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">Research</div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-royal transition-colors">New Research Support Services</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Expanding our postgraduate support with specialist statistical analysis tutoring.</p>
                </div>
              </div>
              <div className="bg-white border border-gray-200 group cursor-pointer hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop" alt="Tutor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-brand-teal text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">Tutor Network</div>
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