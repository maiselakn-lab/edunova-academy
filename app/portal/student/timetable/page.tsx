export default function Timetable() {
  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-navy mb-6">My Timetable</h1>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <div className="grid grid-cols-5 gap-4 text-center">
          {["Mon", "Tue", "Wed", "Thu", "Fri"].map(day => (
            <div key={day} className="font-bold text-brand-navy border-b border-gray-200 pb-2">{day}</div>
          ))}
          
          {/* Monday */}
          <div className="bg-brand-grey p-3 rounded text-sm"><p className="font-bold text-brand-royal">14:00</p><p>Maths</p></div>
          <div className="bg-brand-grey p-3 rounded text-sm"><p className="font-bold text-brand-royal">15:00</p><p>Physics</p></div>
          <div className="bg-brand-grey p-3 rounded text-sm"><p className="font-bold text-brand-royal">14:00</p><p>English</p></div>
          <div className="bg-brand-grey p-3 rounded text-sm"><p className="font-bold text-brand-royal">10:00</p><p>History</p></div>
          <div className="bg-brand-grey p-3 rounded text-sm"><p className="font-bold text-brand-royal">09:00</p><p>Maths</p></div>
          
          <div className="bg-brand-grey p-3 rounded text-sm"><p className="font-bold text-brand-royal">16:30</p><p>Bio</p></div>
          <div className="bg-brand-grey p-3 rounded text-sm"></div>
          <div className="bg-brand-grey p-3 rounded text-sm"><p className="font-bold text-brand-royal">16:00</p><p>Maths</p></div>
          <div className="bg-brand-grey p-3 rounded text-sm"></div>
          <div className="bg-brand-grey p-3 rounded text-sm"></div>
        </div>
      </div>
    </div>
  );
}