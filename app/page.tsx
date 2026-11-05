import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { BookOpen, GraduationCap, Users, Microscope, ShieldCheck, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />

      <main className="flex-grow">
        
        {/* Section 1: Institutional Hero */}
        {/* Added pt-32 and lg:pt-40 to accommodate the mega-menu dropdowns cleanly */}
        <section className="relative bg-brand-navy text-white pt-32 pb-24 lg:pt-40 lg:pb-32">
          <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-brand-gold font-bold tracking-wider uppercase mb-4 text-sm">Welcome to Think EduNova Academy</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                Leading Academic Excellence for a Digital Future.
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                A premier integrated online institution providing rigorous academic support, expert tutoring, and research guidance across Primary, Secondary, College, and University levels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register" className="bg-brand-royal text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg text-center">
                  Apply for Admission
                </Link>
                <Link href="/courses" className="bg-transparent border border-white text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-white hover:text-brand-navy transition-all text-center">
                  Explore Programmes
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The Institutional Data Bar */}
        <section className="bg-brand-grey border-b border-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-300 text-center">
              <div>
                <p className="text-3xl font-bold text-brand-navy">4</p>
                <p className="text-sm font-semibold text-gray-500 uppercase mt-1">Academic Divisions</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-navy">19</p>
                <p className="text-sm font-semibold text-gray-500 uppercase mt-1">Integrated Modules</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-navy">100%</p>
                <p className="text-sm font-semibold text-gray-500 uppercase mt-1">Verified Tutors</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-navy">24/7</p>
                <p className="text-sm font-semibold text-gray-500 uppercase mt-1">Digital Campus Access</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Academic Faculties (University Style) */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-4">
              <div>
                <h2 className="text-3xl font-bold text-brand-navy">Our Academic Faculties</h2>
                <p className="text-gray-600 mt-2">Structured educational pathways for every stage of your academic journey.</p>
              </div>
              <Link href="/academies" className="hidden md:block text-brand-royal font-bold hover:underline">View All Faculties &rarr;</Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Faculty 1 */}
              <div className="border border-gray-200 p-8 hover:border-brand-royal transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-navy p-3 rounded-sm text-white group-hover:bg-brand-royal transition-colors">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2">Primary Academy</h3>
                    <p className="text-sm text-gray-600 mb-4">Foundational education focusing on literacy, numeracy, and core academic development for young learners.</p>
                    <Link href="/academies/primary" className="text-sm font-bold text-brand-royal uppercase tracking-wide group-hover:underline">View Programmes</Link>
                  </div>
                </div>
              </div>

              {/* Faculty 2 */}
              <div className="border border-gray-200 p-8 hover:border-brand-royal transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-navy p-3 rounded-sm text-white group-hover:bg-brand-royal transition-colors">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2">Secondary Academy</h3>
                    <p className="text-sm text-gray-600 mb-4">Comprehensive high school support, examination preparation, and subject-specific tutoring for Grades 8-12.</p>
                    <Link href="/academies/secondary" className="text-sm font-bold text-brand-royal uppercase tracking-wide group-hover:underline">View Programmes</Link>
                  </div>
                </div>
              </div>

              {/* Faculty 3 */}
              <div className="border border-gray-200 p-8 hover:border-brand-royal transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-navy p-3 rounded-sm text-white group-hover:bg-brand-royal transition-colors">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2">College & TVET Academy</h3>
                    <p className="text-sm text-gray-600 mb-4">Technical and vocational education support, engineering fundamentals, and specialised college modules.</p>
                    <Link href="/academies/college" className="text-sm font-bold text-brand-royal uppercase tracking-wide group-hover:underline">View Programmes</Link>
                  </div>
                </div>
              </div>

              {/* Faculty 4 */}
              <div className="border border-gray-200 p-8 hover:border-brand-royal transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-navy p-3 rounded-sm text-white group-hover:bg-brand-royal transition-colors">
                    <Microscope size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2">University & Research</h3>
                    <p className="text-sm text-gray-600 mb-4">Advanced academic assistance, statistical analysis, postgraduate support, and comprehensive research guidance.</p>
                    <Link href="/academies/university" className="text-sm font-bold text-brand-royal uppercase tracking-wide group-hover:underline">View Programmes</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Institutional Quality & Tutor Careers */}
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

        {/* Section 5: Latest from the Academy (Newsroom feel) */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-10 border-b border-gray-200 pb-4">
              <h2 className="text-3xl font-bold text-brand-navy">Latest from the Academy</h2>
              <Link href="/news" className="text-brand-royal font-bold hover:underline">View Newsroom &rarr;</Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-gray-200 group cursor-pointer">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <p className="text-xs font-bold text-brand-royal uppercase tracking-wider mb-2">Announcements</p>
                  <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-royal">Launch of the 2026 Academic Year</h3>
                  <p className="text-sm text-gray-600">Think EduNova Academy officially opens registrations for all four academic divisions.</p>
                </div>
              </div>
              <div className="border border-gray-200 group cursor-pointer">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <p className="text-xs font-bold text-brand-royal uppercase tracking-wider mb-2">Research</p>
                  <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-royal">New Research Support Services</h3>
                  <p className="text-sm text-gray-600">Expanding our postgraduate support with specialist statistical analysis tutoring.</p>
                </div>
              </div>
              <div className="border border-gray-200 group cursor-pointer">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <p className="text-xs font-bold text-brand-royal uppercase tracking-wider mb-2">Tutor Network</p>
                  <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-royal">Welcoming Our New Verified Tutors</h3>
                  <p className="text-sm text-gray-600">Meet the latest graduates and professionals who have joined our teaching faculty.</p>
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
            <h3 className="text-white font-bold text-xl mb-4">Think EduNova</h3>
            <p className="text-sm text-gray-400 mb-4">Empowering Minds. Transforming Futures.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Faculties</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/academies/primary" className="hover:text-white">Primary Academy</Link></li>
              <li><Link href="/academies/secondary" className="hover:text-white">Secondary Academy</Link></li>
              <li><Link href="/academies/college" className="hover:text-white">College & TVET</Link></li>
              <li><Link href="/academies/university" className="hover:text-white">University & Research</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/admissions" className="hover:text-white">Admissions</Link></li>
              <li><Link href="/tutoring" className="hover:text-white">Tutoring</Link></li>
              <li><Link href="/become-a-tutor" className="hover:text-white">Tutor Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Governance</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/popia" className="hover:text-white">POPIA Compliance</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Use</Link></li>
              <li><Link href="/audit" className="hover:text-white">Audit & Reports</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contact</h4>
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