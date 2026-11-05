import PublicNavbar from '@/components/layout/PublicNavbar';
export default function Facts() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Facts & Figures</h1>
          <p className="text-xl text-gray-300 max-w-3xl">The scale and reach of Think EduNova Academy.</p>
        </div>
      </section>
      <section className="py-24 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div><p className="text-5xl font-serif font-bold text-brand-royal">4</p><p className="font-bold text-gray-500 mt-2">Academic Divisions</p></div>
        <div><p className="text-5xl font-serif font-bold text-brand-royal">19</p><p className="font-bold text-gray-500 mt-2">Integrated Modules</p></div>
        <div><p className="text-5xl font-serif font-bold text-brand-royal">100%</p><p className="font-bold text-gray-500 mt-2">Verified Tutors</p></div>
        <div><p className="text-5xl font-serif font-bold text-brand-royal">24/7</p><p className="font-bold text-gray-500 mt-2">Digital Campus</p></div>
      </section>
    </div>
  );
}