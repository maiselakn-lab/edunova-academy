import PublicNavbar from '@/components/layout/PublicNavbar';
import { MapPin, Phone, Mail } from 'lucide-react';
export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Get in touch with our admissions and support teams.</p>
        </div>
      </section>
      <section className="py-24 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Get in Touch</h2>
          <ul className="space-y-6">
            <li className="flex items-center gap-4"><MapPin className="text-brand-royal" /> South Africa</li>
            <li className="flex items-center gap-4"><Phone className="text-brand-royal" /> +27 (0) 12 345 6789</li>
            <li className="flex items-center gap-4"><Mail className="text-brand-royal" /> info@thinkedunova.co.za</li>
          </ul>
        </div>
        <div className="bg-brand-grey p-8 rounded-xl border border-gray-200">
          <input type="text" placeholder="Full Name" className="w-full mb-4 p-3 border border-gray-300 rounded" />
          <input type="email" placeholder="Email Address" className="w-full mb-4 p-3 border border-gray-300 rounded" />
          <textarea placeholder="Message" className="w-full mb-4 p-3 border border-gray-300 rounded h-32"></textarea>
          <button className="bg-brand-royal text-white font-bold px-8 py-3 rounded hover:bg-blue-700">Send Message</button>
        </div>
      </section>
    </div>
  );
}