import PublicNavbar from '@/components/layout/PublicNavbar';
export default function AcadCoreOS() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">AcadCoreOS Integration</h1>
          <p className="text-xl text-gray-300 max-w-3xl">The Intelligent OS powering our institutional management.</p>
        </div>
      </section>
      <section className="py-24 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
         <p className="text-lg text-gray-600 mb-6">Think EduNova Academy is proud to integrate AcadCoreOS, a comprehensive 19-module school management platform.</p>
         <a href="https://acadcoreos.base44.app/" target="_blank" rel="noopener noreferrer" className="bg-brand-royal text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-blue-700 transition-all inline-block">Visit AcadCoreOS</a>
      </section>
    </div>
  );
}