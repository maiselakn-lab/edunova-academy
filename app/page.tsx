import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <PublicNavbar />

      <main className="flex-grow">
        
        {/* Section 1: Hero Banner */}
        <section className="relative bg-brand-navy text-white py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Your Future Starts With <span className="text-brand-sky">Better Learning.</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Discover a smarter way to learn with expert tutors, personalised academic support, AI-powered learning and comprehensive educational resources. From primary school to university and research, Think EduNova is your partner in academic success.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/academies" className="bg-brand-royal text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg">
                Explore Our Academies
              </Link>
              <Link href="/tutors" className="bg-white text-brand-navy px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">
                Find a Tutor
              </Link>
            </div>
            <div className="mt-6">
              <Link href="/become-a-tutor" className="text-brand-sky hover:text-white font-medium underline underline-offset-4">
                Become a Tutor
              </Link>
            </div>
          </div>
        </section>

        {/* Section 2: Welcome & Value Propositions */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Welcome to Think EduNova</h2>
            <p className="text-brand-charcoal max-w-2xl mx-auto mb-16 text-lg">
              We are a comprehensive online education platform designed to provide academic teaching, tutoring, learning resources, and educational development for every stage of your journey.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-brand-grey p-8 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-brand-sky/20 rounded-lg flex items-center justify-center mb-6 text-brand-royal font-bold text-xl">1</div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Personalised Learning</h3>
                <p className="text-gray-600">Learning support based on individual academic needs and development, tailored to your pace.</p>
              </div>
              <div className="bg-brand-grey p-8 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-brand-teal/20 rounded-lg flex items-center justify-center mb-6 text-brand-teal font-bold text-xl">2</div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Expert Human Tutors</h3>
                <p className="text-gray-600">Qualified tutors who have undergone rigorous recruitment and competency assessments.</p>
              </div>
              <div className="bg-brand-grey p-8 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-6 text-brand-gold font-bold text-xl">3</div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">AI-Powered Education</h3>
                <p className="text-gray-600">Intelligent learning assistance that helps students understand concepts and improve performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Our Four Educational Divisions */}
        <section className="py-20 bg-brand-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Our Four Educational Divisions</h2>
              <p className="text-brand-charcoal max-w-2xl mx-auto">From foundational education to postgraduate research, we have a dedicated academy for your level.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Primary Academy', desc: 'Mathematics, English, Literacy, Numeracy, Natural Sciences, Homework assistance.' },
                { title: 'Secondary Academy', desc: 'Maths, Physical Sciences, Life Sciences, Accounting, Geography, Exam preparation.' },
                { title: 'College & TVET', desc: 'Engineering subjects, Mathematics, Technical subjects, Programming, Vocational support.' },
                { title: 'University Academy', desc: 'Engineering, IT, Business, Statistics, Computer Science, Research methodology.' },
              ].map((division, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-brand-navy mb-3">{division.title}</h3>
                  <p className="text-sm text-gray-600 mb-6">{division.desc}</p>
                  <Link href="/academies" className="text-brand-royal text-sm font-bold hover:underline">View Details &rarr;</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 & 5: Tutoring and AI */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Online Tutoring That Works</h2>
              <p className="text-gray-600 mb-6">Access individual and group tutoring with qualified professionals. Our online classrooms offer flexible schedules, subject-specific tutoring, and rigorous progress monitoring.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-brand-charcoal"><span className="text-brand-teal mr-3">✓</span> One-on-one and group lessons</li>
                <li className="flex items-center text-brand-charcoal"><span className="text-brand-teal mr-3">✓</span> Interactive online classrooms</li>
                <li className="flex items-center text-brand-charcoal"><span className="text-brand-teal mr-3">✓</span> Tutor feedback and progress reports</li>
              </ul>
              <Link href="/tutors" className="bg-brand-navy text-white px-6 py-3 rounded-md font-bold hover:bg-opacity-90">Find Your Tutor</Link>
            </div>
            <div className="bg-brand-royal/10 p-10 rounded-2xl">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">AI-Powered Learning Assistant</h2>
              <p className="text-gray-600 mb-6">Our AI complements human tutoring by providing on-demand academic support 24/7.</p>
              <ul className="space-y-2 text-sm text-brand-charcoal">
                <li>• Ask academic questions & get explanations</li>
                <li>• Practise difficult subjects & generate revision exercises</li>
                <li>• Receive personalised learning recommendations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: Research Support Centre */}
        <section className="py-20 bg-brand-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Support Centre</h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-10">Specialist research assistance for university students and researchers. We help you navigate complex academic requirements.</p>
            <div className="grid md:grid-cols-3 gap-4 text-sm font-medium">
              <div className="bg-white/10 p-4 rounded-lg">Research Proposal Guidance</div>
              <div className="bg-white/10 p-4 rounded-lg">Research Methodology</div>
              <div className="bg-white/10 p-4 rounded-lg">Literature Review Support</div>
              <div className="bg-white/10 p-4 rounded-lg">Quantitative & Qualitative Research</div>
              <div className="bg-white/10 p-4 rounded-lg">Statistical Analysis Tutoring</div>
              <div className="bg-white/10 p-4 rounded-lg">Academic Writing & Referencing</div>
            </div>
          </div>
        </section>

        {/* Section 7: Become a Tutor */}
        <section className="py-20 bg-brand-gold/10 border-y border-brand-gold/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Turn Your Knowledge Into Opportunity.</h2>
            <p className="text-lg text-brand-charcoal mb-8">Are you a graduate, qualified professional or subject specialist? Join Think EduNova Academy and become part of a growing network of educators dedicated to transforming lives through education.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 text-sm font-medium text-brand-navy">
              <span className="bg-white px-4 py-2 rounded-full shadow-sm">Tutor Application</span>
              <span className="bg-white px-4 py-2 rounded-full shadow-sm">Qualification Verification</span>
              <span className="bg-white px-4 py-2 rounded-full shadow-sm">Competency Assessments</span>
              <span className="bg-white px-4 py-2 rounded-full shadow-sm">Earning Opportunities</span>
            </div>
            <Link href="/become-a-tutor" className="bg-brand-navy text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-opacity-90 shadow-lg">
              Apply to Become a Tutor
            </Link>
          </div>
        </section>

        {/* Section 8: Parent & Institutional Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
            <div className="border border-gray-100 p-8 rounded-xl bg-brand-grey">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">For Parents</h3>
              <p className="text-gray-600 mb-4">Monitor your child's academic performance, receive direct tutor feedback, track attendance, and participate actively in their learning journey through our dedicated Parent Portal.</p>
              <Link href="/register" className="text-brand-royal font-bold hover:underline">Register as a Parent &rarr;</Link>
            </div>
            <div className="border border-gray-100 p-8 rounded-xl bg-brand-grey">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">For Institutions</h3>
              <p className="text-gray-600 mb-4">Partner with Think EduNova to provide additional academic support to your students. We integrate seamlessly with your existing institutional management systems.</p>
              <Link href="/institutions" className="text-brand-royal font-bold hover:underline">Partner With Us &rarr;</Link>
            </div>
          </div>
        </section>

        {/* Section 10: Final CTA */}
        <section className="py-24 bg-brand-navy text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Take the Next Step Towards Academic Success.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/register" className="bg-brand-sky text-brand-navy px-8 py-4 rounded-md font-bold text-lg hover:bg-white transition-colors">
                Register as a Learner
              </Link>
              <Link href="/register?role=parent" className="bg-brand-royal text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-opacity-90 transition-colors">
                Register as a Parent
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Section 11: Footer */}
      <footer className="bg-[#0f223d] text-gray-300 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Think EduNova</h3>
            <p className="text-sm text-gray-400">Empowering Minds. Transforming Futures. A comprehensive online education platform.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Academies</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/academies/primary" className="hover:text-brand-sky">Primary</Link></li>
              <li><Link href="/academies/secondary" className="hover:text-brand-sky">Secondary</Link></li>
              <li><Link href="/academies/college" className="hover:text-brand-sky">College & TVET</Link></li>
              <li><Link href="/academies/university" className="hover:text-brand-sky">University</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tutoring" className="hover:text-brand-sky">Online Tutoring</Link></li>
              <li><Link href="/research" className="hover:text-brand-sky">Research Support</Link></li>
              <li><Link href="/become-a-tutor" className="hover:text-brand-sky">Become a Tutor</Link></li>
              <li><Link href="/institutions" className="hover:text-brand-sky">Institutions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal & Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="hover:text-brand-sky">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-brand-sky">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-brand-sky">Terms & Conditions</Link></li>
              <li><Link href="/popia" className="hover:text-brand-sky">POPIA Information</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/10 text-sm text-center">
          © 2026 Think EduNova Academy. All rights reserved.
        </div>
      </footer>
    </div>
  );
}