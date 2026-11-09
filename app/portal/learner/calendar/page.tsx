export default function Calendar() {
  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-navy mb-6">My Calendar</h1>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h2 className="text-xl font-bold text-brand-navy mb-4">This Week</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-4 p-4 bg-brand-royal/5 rounded-lg border-l-4 border-brand-royal">
            <div className="w-20 font-bold text-brand-navy">Mon, Mar 16</div>
            <div>
              <p className="font-bold text-brand-navy">Mathematics Test</p>
              <p className="text-sm text-gray-500">10:00 - 11:30</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-brand-grey/50 rounded-lg">
            <div className="w-20 font-bold text-brand-navy">Tue, Mar 17</div>
            <div>
              <p className="font-bold text-brand-navy">English Class</p>
              <p className="text-sm text-gray-500">14:00 - 15:00</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-brand-grey/50 rounded-lg">
            <div className="w-20 font-bold text-brand-navy">Wed, Mar 18</div>
            <div>
              <p className="font-bold text-brand-navy">Natural Sciences Homework Due</p>
              <p className="text-sm text-gray-500">Before 17:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}