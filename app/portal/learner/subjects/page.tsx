export default function Subjects() {
  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-navy mb-6">My Subjects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Mathematics", color: "bg-brand-royal/10 text-brand-royal" },
          { name: "English", color: "bg-brand-teal/10 text-brand-teal" },
          { name: "Natural Sciences", color: "bg-brand-gold/10 text-brand-gold" },
          { name: "Social Sciences", color: "bg-brand-sky/10 text-brand-sky" },
          { name: "Life Orientation", color: "bg-brand-navy/10 text-brand-navy" },
          { name: "Technology", color: "bg-brand-royal/10 text-brand-royal" },
        ].map((sub, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
            <div className={`w-16 h-16 ${sub.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
              <span className="text-2xl font-bold">{sub.name.charAt(0)}</span>
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-2">{sub.name}</h3>
            <button className="text-brand-royal font-bold text-sm hover:underline">Open Subject &rarr;</button>
          </div>
        ))}
      </div>
    </div>
  );
}