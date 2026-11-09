import PublicNavbar from '@/components/layout/PublicNavbar';
import { Calendar as CalendarIcon, Download } from 'lucide-react';

export default function Calendar() {
  const terms = [
    { term: "Term 1: 2026", start: "15 January 2026", halfTerm: "20 March 2026", end: "10 April 2026", exams: "01 April - 08 April" },
    { term: "Term 2: 2026", start: "28 April 2026", halfTerm: "15 June 2026", end: "07 August 2026", exams: "25 July - 05 August" },
    { term: "Term 3: 2026", start: "25 August 2026", halfTerm: "05 October 2026", end: "11 December 2026", exams: "23 November - 09 December" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Academic Calendar</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Important dates, examination periods, and term schedules for the 2026 academic year.</p>
        </div>
      </section>

      <section className="py-24 max-w-[1000px] mx-auto px-6 sm:px-12 lg:px-16 w-full">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-brand-navy text-white">
              <tr>
                <th className="p-4 font-bold border-b border-white/10">Term</th>
                <th className="p-4 font-bold border-b border-white/10">Start Date</th>
                <th className="p-4 font-bold border-b border-white/10">Half-Term Break</th>
                <th className="p-4 font-bold border-b border-white/10">Exams</th>
                <th className="p-4 font-bold border-b border-white/10">End Date</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-600">
              {terms.map((t, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 font-bold text-brand-navy">{t.term}</td>
                  <td className="p-4">{t.start}</td>
                  <td className="p-4">{t.halfTerm}</td>
                  <td className="p-4 text-brand-royal font-bold">{t.exams}</td>
                  <td className="p-4">{t.end}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex justify-end">
          <button className="bg-brand-royal text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-blue-700 transition-colors">
            <Download size={18} /> Download PDF Calendar
          </button>
        </div>
      </section>
    </div>
  );
}