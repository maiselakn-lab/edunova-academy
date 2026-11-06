import PublicNavbar from '@/components/layout/PublicNavbar';
export default function Fees() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Student Fees Guide</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Transparent pricing for lessons, courses, and packages.</p>
        </div>
      </section>
      <section className="py-24 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-gray-200 p-8 rounded-xl text-center">
            <h3 className="text-xl font-bold text-brand-navy mb-2">Single Lesson</h3>
            <p className="text-4xl font-bold text-brand-royal mb-4">R250</p>
            <p className="text-gray-600">One-on-one tutoring with a verified expert.</p>
          </div>
          <div className="border-2 border-brand-gold p-8 rounded-xl text-center relative shadow-xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-navy text-xs font-bold px-3 py-1 rounded-b">MOST POPULAR</div>
            <h3 className="text-xl font-bold text-brand-navy mb-2 mt-4">Monthly Package</h3>
            <p className="text-4xl font-bold text-brand-royal mb-4">R850</p>
            <p className="text-gray-600">4 lessons per month + AI learning assistant access.</p>
          </div>
          <div className="border border-gray-200 p-8 rounded-xl text-center">
            <h3 className="text-xl font-bold text-brand-navy mb-2">Institutional</h3>
            <p className="text-4xl font-bold text-brand-royal mb-4">Custom</p>
            <p className="text-gray-600">Bulk student enrollments for schools and universities.</p>
          </div>
        </div>
      </section>
    </div>
  );
}