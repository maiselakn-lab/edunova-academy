export default function LiveMonitor() {
  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-navy mb-6">Live Class Monitor</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-brand-navy p-6 rounded-xl shadow-lg text-white border-l-4 border-red-500">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold bg-red-500 px-2 py-1 rounded uppercase tracking-wider animate-pulse">Live Now</span>
            <span className="text-xs text-gray-400">Started 15 mins ago</span>
          </div>
          <h3 className="text-xl font-bold mb-1">Grade 11 Mathematics</h3>
          <p className="text-sm text-gray-300 mb-4">Tutor: Mr. T. Nkosi • Student: Siphelele B.</p>
          <button className="w-full bg-brand-teal text-white py-2 rounded font-bold">Observe Session</button>
        </div>
      </div>
    </div>
  );
}