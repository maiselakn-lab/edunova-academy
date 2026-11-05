import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <PublicNavbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-brand-navy text-white py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6">
              Unlock Your Academic <span className="text-brand-gold">Potential</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              A premium, integrated online academy for Primary, Secondary, College, and University students. Expert human tutors, AI-assisted learning, and comprehensive progress tracking.
            </p>
            <div className="flex justify-center gap-4">
              <Link 
                href="/register" 
                className="bg-brand-gold text-brand-navy px-8 py-4 rounded-md font-bold text-lg hover:bg-brand-goldHover transition-colors"
              >
                Start Learning Today
              </Link>
              <Link 
                href="/tutors" 
                className="border border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-brand-navy transition-colors"
              >
                Find a Tutor
              </Link>
            </div>
          </div>
        </section>

        {/* Trust/Stats Section */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-serif font-bold text-brand-navy">4</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide mt-2">Educational Divisions</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-brand-navy">19</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide mt-2">Integrated Modules</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-brand-navy">100%</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide mt-2">Verified Tutors</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-brand-navy">24/7</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide mt-2">AI Learning Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-brand-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">Why Choose EduNova?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">We merge academic excellence with cutting-edge technology to deliver a world-class learning experience.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-brand-navy mb-4">Expert Tutoring</h3>
                <p className="text-gray-600">Connect with rigorously vetted, qualified professionals across all academic levels.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-brand-navy mb-4">Parent Monitoring</h3>
                <p className="text-gray-600">A dedicated portal for parents to track progress, book lessons, and view financial statements.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-brand-navy mb-4">AI-Assisted Learning</h3>
                <p className="text-gray-600">Smart learning recommendations and practice activities powered by our proprietary AI engine.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-navy text-gray-400 py-12 border-t border-brand-navyLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-serif font-bold text-brand-gold">Think EduNova Academy</span>
            <p className="text-sm mt-2">© 2026 Think EduNova Academy. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}