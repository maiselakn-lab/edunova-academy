import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { CreditCard, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Fees() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Fees & Funding</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Transparent pricing for lessons, courses, and packages.</p>
        </div>
      </section>

      <section className="py-24 bg-brand-grey">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Single Lesson */}
            <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-bold text-brand-navy mb-2">Single Lesson</h3>
              <p className="text-4xl font-bold text-brand-royal mb-4">R250</p>
              <p className="text-gray-600 mb-8">One-on-one tutoring with a verified expert.</p>
              <ul className="space-y-3 text-sm text-gray-600 mb-8 text-left">
                <li className="flex items-center gap-2"><CheckCircle2 className="text-brand-teal" size={16}/> 60-minute session</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-brand-teal" size={16}/> Session recording</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-brand-teal" size={16}/> Progress report</li>
              </ul>
              <Link href="/register" className="block w-full bg-brand-royal text-white font-bold py-3 rounded hover:bg-blue-700 transition-colors">Book Now</Link>
            </div>

            {/* Monthly Package */}
            <div className="bg-brand-navy border-2 border-brand-gold p-8 rounded-xl shadow-xl text-center text-white relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-navy text-xs font-bold px-4 py-1 rounded-b-lg">MOST POPULAR</div>
              <h3 className="text-xl font-bold mb-2 mt-4">Monthly Package</h3>
              <p className="text-4xl font-bold text-brand-gold mb-4">R850</p>
              <p className="text-gray-300 mb-8">4 lessons per month + AI learning assistant access.</p>
              <ul className="space-y-3 text-sm text-gray-200 mb-8 text-left">
                <li className="flex items-center gap-2"><CheckCircle2 className="text-brand-teal" size={16}/> 4 x 60-minute sessions</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-brand-teal" size={16}/> Priority tutor matching</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-brand-teal" size={16}/> 24/7 AI Tutor access</li>
              </ul>
              <Link href="/register" className="block w-full bg-brand-gold text-brand-navy font-bold py-3 rounded hover:bg-yellow-500 transition-colors">Subscribe Now</Link>
            </div>

            {/* Institutional */}
            <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-bold text-brand-navy mb-2">Institutional</h3>
              <p className="text-4xl font-bold text-brand-royal mb-4">Custom</p>
              <p className="text-gray-600 mb-8">Bulk student enrollments for schools and universities.</p>
              <ul className="space-y-3 text-sm text-gray-600 mb-8 text-left">
                <li className="flex items-center gap-2"><CheckCircle2 className="text-brand-teal" size={16}/> Dedicated account manager</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-brand-teal" size={16}/> AcadCoreOS integration</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-brand-teal" size={16}/> Custom reporting</li>
              </ul>
              <Link href="/institutions" className="block w-full border border-brand-navy text-brand-navy font-bold py-3 rounded hover:bg-brand-navy hover:text-white transition-colors">Contact Sales</Link>
            </div>
          </div>

          <div className="mt-16 bg-white p-8 rounded-xl border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <ShieldCheck className="text-brand-teal" size={48} />
              <div>
                <h3 className="text-xl font-bold text-brand-navy">Secure Payments</h3>
                <p className="text-gray-600">All transactions are secured with industry-standard encryption. We accept EFT, Credit Card, and Instant EFT.</p>
              </div>
            </div>
            <div className="flex gap-4 text-2xl text-gray-400 font-bold">
              <span>VISA</span>
              <span>MasterCard</span>
              <span>EFT</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}