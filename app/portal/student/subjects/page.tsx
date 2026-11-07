import Link from 'next/link';

export default function Subjects() {
  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-navy mb-6">My Subjects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {["Mathematics", "Physical Sciences", "Life Sciences", "English", "Afrikaans", "History"].map((sub, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-brand-navy mb-2">{sub}</h3>
            <p className="text-sm text-gray-500 mb-4">View your notes, past papers, and upcoming lessons for {sub}.</p>
            <button className="text-brand-royal font-bold text-sm hover:underline">Enter Subject &rarr;</button>
          </div>
        ))}
      </div>
    </div>
  );
}