import PublicNavbar from '@/components/layout/PublicNavbar';
export default function Status() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Check Application Status</h1>
        </div>
      </section>
      <section className="py-24 max-w-[600px] mx-auto px-6 w-full">
        <div className="bg-white p-10 rounded-xl shadow-lg">
          <label className="block text-sm font-bold text-brand-navy mb-2">Student ID / Passport Number</label>
          <input type="text" className="w-full border border-gray-300 p-3 rounded mb-6" placeholder="Enter your ID" />
          <button className="w-full bg-brand-royal text-white font-bold py-3 rounded hover:bg-blue-700">Check Status</button>
        </div>
      </section>
    </div>
  );
}