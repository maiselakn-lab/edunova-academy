import PublicNavbar from '@/components/layout/PublicNavbar';
export default function Reports() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Annual Reports</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Transparency in our growth and financial performance.</p>
        </div>
      </section>
      <section className="py-24 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
         <div className="border border-gray-200 p-6 rounded-lg mb-4 flex justify-between items-center hover:bg-brand-grey cursor-pointer">
           <span className="font-bold text-brand-navy">2025 Annual Report (PDF)</span>
           <span className="text-brand-royal font-bold">Download</span>
         </div>
      </section>
    </div>
  );
}