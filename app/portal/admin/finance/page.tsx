export default function Finance() {
  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-navy mb-6">Finance & Billing</h1>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"><p className="text-sm text-gray-500 mb-1">Total Revenue</p><p className="text-3xl font-bold text-brand-navy">R 142,500</p></div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"><p className="text-sm text-gray-500 mb-1">Tutor Liabilities</p><p className="text-3xl font-bold text-red-500">R 45,200</p></div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"><p className="text-sm text-gray-500 mb-1">Academy Profit</p><p className="text-3xl font-bold text-brand-teal">R 97,300</p></div>
      </div>
    </div>
  );
}