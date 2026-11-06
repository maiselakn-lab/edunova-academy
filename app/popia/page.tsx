import PublicNavbar from '@/components/layout/PublicNavbar';
export default function POPIA() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">POPIA Compliance</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Protecting your personal information.</p>
        </div>
      </section>
      <section className="py-24 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 prose prose-lg text-gray-600">
         <p>Think EduNova Academy is fully committed to compliance with the Protection of Personal Information Act (POPIA).</p>
         <p>We ensure that all data regarding parents, learners, and tutors is securely stored, processed lawfully, and protected against unauthorized access.</p>
      </section>
    </div>
  );
}