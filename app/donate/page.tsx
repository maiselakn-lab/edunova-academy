import PublicNavbar from '@/components/layout/PublicNavbar';
import { Heart, CheckCircle2 } from 'lucide-react';

export default function Donate() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      <section className="bg-brand-navy py-24 text-white text-center">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <Heart className="mx-auto text-brand-gold mb-6" size={48} />
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Support Our Mission</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Your donation helps provide scholarships and academic support to underprivileged learners across South Africa.</p>
        </div>
      </section>
      <section className="py-24 max-w-[800px] mx-auto px-6">
        <div className="bg-brand-grey p-10 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Make a Contribution</h2>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {["R100", "R500", "R1000"].map(amount => (
              <button key={amount} className="border-2 border-brand-navy text-brand-navy font-bold py-4 rounded hover:bg-brand-navy hover:text-white transition-colors">{amount}</button>
            ))}
          </div>
          <input type="text" placeholder="Custom Amount (ZAR)" className="w-full p-4 border border-gray-300 rounded mb-6" />
          <button className="w-full bg-brand-royal text-white font-bold text-lg py-4 rounded hover:bg-blue-700 transition-colors">Proceed to Payment</button>
        </div>
      </section>
    </div>
  );
}