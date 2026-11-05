import PublicNavbar from '@/components/layout/PublicNavbar';
export default function Calendar() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Academic Calendar</h1>
        </div>
      </section>
      <section className="py-24 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
         <div className="bg-brand-grey rounded-lg border border-gray-200 p-8">
           <h2 className="text-2xl font-bold text-brand-navy mb-6">Term 1: 2026</h2>
           <ul className="space-y-4">
             <li className="flex justify-between border-b border-gray-300 pb-2"><span className="font-medium">Term Starts</span><span className="font-bold">15 January 2026</span></li>
             <li className="flex justify-between border-b border-gray-300 pb-2"><span className="font-medium">Half-Term Break</span><span className="font-bold">20 March 2026</span></li>
             <li className="flex justify-between border-b border-gray-300 pb-2"><span className="font-medium">Term Ends</span><span className="font-bold">10 April 2026</span></li>
           </ul>
         </div>
      </section>
    </div>
  );
}