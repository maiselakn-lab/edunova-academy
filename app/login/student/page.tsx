import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';

export default function StudentLogin() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      <div className="flex-grow flex items-center justify-center p-6 py-24">
        <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md">
          <h1 className="text-3xl font-serif font-bold text-brand-navy mb-2 text-center">Student Portal</h1>
          <p className="text-gray-500 text-center mb-8">Log in to access your classes.</p>
          <input type="email" placeholder="Student Email" className="w-full p-4 border border-gray-300 rounded mb-4" />
          <input type="password" placeholder="Password" className="w-full p-4 border border-gray-300 rounded mb-6" />
          <button className="w-full bg-brand-royal text-white font-bold py-4 rounded hover:bg-blue-700 transition-colors">Log In</button>
        </div>
      </div>
    </div>
  );
}