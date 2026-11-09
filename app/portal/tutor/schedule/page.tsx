export default function Schedule() {
  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-navy mb-6">My Schedule</h1>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h2 className="text-xl font-bold text-brand-navy mb-4">Today's Lessons</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg">
            <div className="w-16 h-16 bg-brand-navy text-white rounded-lg flex flex-col items-center justify-center shrink-0">
              <span className="text-xs font-bold uppercase">Today</span>
              <span className="text-lg font-bold">14:00</span>
            </div>
            <div className="flex-grow">
              <h3 className="font-bold text-brand-navy">Mathematics: Calculus</h3>
              <p className="text-sm text-gray-500">Student: Siphelele B. (Grade 11)</p>
            </div>
            <button className="bg-brand-teal text-white px-4 py-2 rounded font-bold text-sm">Start Class</button>
          </div>
          <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg">
            <div className="w-16 h-16 bg-brand-navy text-white rounded-lg flex flex-col items-center justify-center shrink-0">
              <span className="text-xs font-bold uppercase">Today</span>
              <span className="text-lg font-bold">16:30</span>
            </div>
            <div className="flex-grow">
              <h3 className="font-bold text-brand-navy">Physical Sciences: Mechanics</h3>
              <p className="text-sm text-gray-500">Student: Lerato N. (Grade 8)</p>
            </div>
            <button className="border border-brand-navy text-brand-navy px-4 py-2 rounded font-bold text-sm">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}