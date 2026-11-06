import PublicNavbar from '@/components/layout/PublicNavbar';
export default function Leadership() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Executive Management</h1>
          <p className="text-xl text-gray-300 max-w-3xl">The team guiding the strategic vision of the academy.</p>
        </div>
      </section>
      <section className="py-24 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-brand-grey rounded-lg overflow-hidden border border-gray-200 text-center p-8">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6"></div>
            <h3 className="text-xl font-bold text-brand-navy">Executive Name</h3>
            <p className="text-brand-royal font-bold text-sm mb-2">Chief Executive Officer</p>
            <p className="text-gray-600 text-sm">Leading the academy towards a digital future.</p>
          </div>
        ))}
      </section>
    </div>
  );
}