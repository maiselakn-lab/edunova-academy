export default function Timetable() {
  const schedule = [
    { time: "14:00", Mon: "Mathematics", Tue: "Physics", Wed: "Maths", Thu: "Biology", Fri: "English" },
    { time: "15:00", Mon: "Physics", Tue: "Maths", Wed: "Chemistry", Thu: "English", Fri: "Maths" },
    { time: "16:00", Mon: "English", Tue: "Bio", Wed: "Maths", Thu: "Physics", Fri: "Bio" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-navy mb-6">My Timetable</h1>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 overflow-x-auto">
        <div className="grid grid-cols-6 gap-4 min-w-[800px]">
          <div className="font-bold text-gray-500 uppercase text-xs tracking-wider py-2">Time</div>
          {["Mon", "Tue", "Wed", "Thu", "Fri"].map(day => (
            <div key={day} className="font-bold text-brand-navy text-center py-2 border-b border-gray-200">{day}</div>
          ))}
          
          {schedule.map((row, i) => (
            <>
              <div key={`time-${i}`} className="py-4 font-bold text-sm text-gray-500">{row.time}</div>
              <div className="bg-brand-royal/10 border border-brand-royal/20 rounded-lg p-3 text-center text-sm font-bold text-brand-royal mb-2">{row.Mon}</div>
              <div className="bg-brand-sky/10 border border-brand-sky/20 rounded-lg p-3 text-center text-sm font-bold text-brand-sky mb-2">{row.Tue}</div>
              <div className="bg-brand-teal/10 border border-brand-teal/20 rounded-lg p-3 text-center text-sm font-bold text-brand-teal mb-2">{row.Wed}</div>
              <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-lg p-3 text-center text-sm font-bold text-brand-gold mb-2">{row.Thu}</div>
              <div className="bg-brand-navy/10 border border-brand-navy/20 rounded-lg p-3 text-center text-sm font-bold text-brand-navy mb-2">{row.Fri}</div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}