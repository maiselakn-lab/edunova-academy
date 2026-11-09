export default function Marks() {
  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-navy mb-6">My Marks</h1>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-brand-grey border-b border-gray-200 text-gray-500 text-sm">
            <tr><th className="p-4 font-bold">Subject</th><th className="p-4 font-bold">Assessment</th><th className="p-4 font-bold">Date</th><th className="p-4 font-bold text-right">Mark</th></tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-gray-100"><td className="p-4 font-bold text-brand-navy">Mathematics</td><td className="p-4">Term 1 Test</td><td className="p-4 text-gray-500">Mar 16, 2026</td><td className="p-4 text-right font-bold text-brand-teal">92%</td></tr>
            <tr className="border-b border-gray-100"><td className="p-4 font-bold text-brand-navy">English</td><td className="p-4">Poetry Essay</td><td className="p-4 text-gray-500">Mar 10, 2026</td><td className="p-4 text-right font-bold text-brand-teal">85%</td></tr>
            <tr className="border-b border-gray-100"><td className="p-4 font-bold text-brand-navy">Natural Sciences</td><td className="p-4">Photosynthesis Quiz</td><td className="p-4 text-gray-500">Mar 05, 2026</td><td className="p-4 text-right font-bold text-brand-royal">78%</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}