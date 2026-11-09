export default function MyStudents() {
  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-navy mb-6">My Students</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { name: "Siphelele Blose", grade: "Grade 11", subject: "Mathematics", progress: 85 },
          { name: "Lerato Ndlovu", grade: "Grade 8", subject: "Physical Sciences", progress: 72 },
          { name: "Thabo Mokoena", grade: "Grade 12", subject: "Mathematics", progress: 91 },
        ].map((student, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-brand-navy">{student.name}</h3>
                <p className="text-sm text-gray-500">{student.grade} • {student.subject}</p>
              </div>
              <span className="bg-brand-teal/10 text-brand-teal text-xs font-bold px-3 py-1 rounded-full">{student.progress}% Avg</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div className="bg-brand-teal h-2 rounded-full" style={{ width: `${student.progress}%` }}></div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 bg-brand-royal text-white py-2 rounded text-sm font-bold">View Progress</button>
              <button className="flex-1 border border-gray-300 text-gray-600 py-2 rounded text-sm font-bold hover:bg-gray-50">Message</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}