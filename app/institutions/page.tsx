import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { ArrowRight, Building2, Globe2, CheckCircle2 } from 'lucide-react';

export default function Institutions() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="max-w-3xl">
            <p className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4">Institutional Partnerships</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">Partner with Think EduNova.</h1>
            <p className="text-xl text-gray-300 mb-8">
              We collaborate with schools, colleges, NGOs, and universities to provide additional academic support to their students and integrate our technology into their operations.
            </p>
            <Link href="/contact" className="bg-brand-gold text-brand-navy px-8 py-4 rounded-sm font-bold text-lg hover:bg-yellow-500 transition-all inline-flex items-center gap-2 shadow-lg">
              Request a Consultation <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-grey">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">How We Support Institutions</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <Building2 className="text-brand-royal mb-4" size={32} />
              <h3 className="text-xl font-bold text-brand-navy mb-2">Bulk Enrollments</h3>
              <p className="text-gray-600">Register entire classes or cohorts and manage billing centrally through a single institutional account.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <Globe2 className="text-brand-royal mb-4" size={32} />
              <h3 className="text-xl font-bold text-brand-navy mb-2">AcadCoreOS Integration</h3>
              <p className="text-gray-600">Sync student records, timetables, and academic results seamlessly with the AcadCoreOS management platform.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <CheckCircle2 className="text-brand-royal mb-4" size={32} />
              <h3 className="text-xl font-bold text-brand-navy mb-2">Custom Reporting</h3>
              <p className="text-gray-600">Receive detailed academic progress reports and tutor feedback tailored to your institution's requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}