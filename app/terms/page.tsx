import PublicNavbar from '@/components/layout/PublicNavbar';
export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Policies & Terms</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Terms of Use, Privacy Policy, and Refund Policies.</p>
        </div>
      </section>
      <section className="py-24 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 prose prose-lg text-gray-600">
         <p>By using Think EduNova Academy, you agree to our institutional policies.</p>
      </section>
    </div>
  );
}