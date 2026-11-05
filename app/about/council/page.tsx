import PublicNavbar from '@/components/layout/PublicNavbar';
export default function Council() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Academic Council</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Overseeing the quality and integrity of our curriculum.</p>
        </div>
      </section>
      <section className="py-24 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
         <p className="text-lg text-gray-600">The Academic Council is responsible for maintaining the high standards of our tutoring, verifying qualifications, and ensuring all curricula align with national standards.</p>
      </section>
    </div>
  );
}