export default function Assessments() {
  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-navy mb-6">Assessments & Marks</h1>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-brand-grey border-b border-gray-200 text-gray-500 text-sm">
            <tr><th className="p-4 font-bold">Subject</th><th className="p-4 font-bold">Assessment</th><th className="p-4 font-bold">Date</th><th className="p-4 font-bold text-right">Score</th></tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-gray-100"><td className="p-4 font-bold text-brand-navy">Mathematics</td><td className="p-4">Term 1 Test</td><td className="p-4 text-gray-500">2 days ago</td><td className="p-4 text-right font-bold text-brand-teal">85%</td></tr>
            <tr className="border-b border-gray-100"><td className="p-4 font-bold text-brand-navy">Physical Sciences</td><td className="p-4">Mechanics Quiz</td><td className="p-4 text-gray-500">1 week ago</td><td className="p-4 text-right font-bold text-brand-royal">72%</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}