import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { FileText, Download, Award, CheckCircle2 } from 'lucide-react';

export default function StudentRecords() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      
      <section className="bg-brand-navy py-20 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl font-serif font-bold text-white mb-4">Student Records</h1>
          <p className="text-xl text-gray-300">View your academic history.</p>
        </div>
      </section>

      <section className="py-20 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 w-full">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4">
            <div className="w-12 h-12 bg-brand-royal/10 text-brand-royal rounded-full flex items-center justify-center"><FileText size={24} /></div>
            <div><p className="text-sm text-gray-500 font-medium">Current Grade</p><p className="text-2xl font-bold text-brand-navy">Grade 11</p></div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4">
            <div className="w-12 h-12 bg-brand-teal/10 text-brand-teal rounded-full flex items-center justify-center"><CheckCircle2 size={24} /></div>
            <div><p className="text-sm text-gray-500 font-medium">Attendance</p><p className="text-2xl font-bold text-brand-navy">98%</p></div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4">
            <div className="w-12 h-12 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center"><Award size={24} /></div>
            <div><p className="text-sm text-gray-500 font-medium">Average</p><p className="text-2xl font-bold text-brand-navy">78% (B)</p></div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-xl font-bold text-brand-navy">Academic Transcript</h2>
            <button className="text-brand-royal bg-brand-royal/10 px-4 py-2 rounded font-bold text-sm flex items-center gap-2 hover:bg-brand-royal hover:text-white transition-colors"><Download size={16}/> Download PDF</button>
          </div>
          <table className="w-full text-left">
            <thead className="bg-brand-grey text-gray-500 text-sm">
              <tr><th className="p-4 font-bold">Subject</th><th className="p-4 font-bold">Term 1</th><th className="p-4 font-bold">Term 2</th><th className="p-4 font-bold">Term 3</th><th className="p-4 font-bold text-right">Final Mark</th></tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-gray-100"><td className="p-4 font-bold text-brand-navy">Mathematics</td><td className="p-4">85%</td><td className="p-4">88%</td><td className="p-4">90%</td><td className="p-4 text-right font-bold text-brand-teal">88%</td></tr>
              <tr className="border-b border-gray-100"><td className="p-4 font-bold text-brand-navy">Physical Sciences</td><td className="p-4">72%</td><td className="p-4">75%</td><td className="p-4">78%</td><td className="p-4 text-right font-bold text-brand-royal">75%</td></tr>
              <tr className="border-b border-gray-100"><td className="p-4 font-bold text-brand-navy">English</td><td className="p-4">88%</td><td className="p-4">90%</td><td className="p-4">92%</td><td className="p-4 text-right font-bold text-brand-teal">90%</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}