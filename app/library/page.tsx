import PublicNavbar from '@/components/layout/PublicNavbar';
export default function Library() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Digital Library</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Access our repository of learning materials, past papers, and academic resources.</p>
        </div>
      </section>
      <section className="py-24 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
         <p className="text-lg text-gray-600">Library content coming soon.</p>
      </section>
    </div>
  );
}