import PublicNavbar from '@/components/layout/PublicNavbar';
export default function History() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Our History</h1>
          <p className="text-xl text-gray-300 max-w-3xl">The journey of building a premier digital institution.</p>
        </div>
      </section>
      <section className="py-24 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="border-l-4 border-brand-gold pl-8 space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-brand-navy">2024 - The Concept</h3>
            <p className="text-gray-600 mt-2">Think EduNova was conceptualized to bridge the gap between school learners, university students, and qualified tutors across South Africa.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-brand-navy">2025 - Platform Development</h3>
            <p className="text-gray-600 mt-2">Development began on the integrated platform, combining the AcadCoreOS management system with a state-of-the-art online learning environment.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-brand-navy">2026 - Official Launch</h3>
            <p className="text-gray-600 mt-2">Opening admissions for Primary, Secondary, College, and University academies, alongside our institutional partnerships.</p>
          </div>
        </div>
      </section>
    </div>
  );
}