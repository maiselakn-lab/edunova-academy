export default function AcademicManagement() {
  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-navy mb-6">Academic Management</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {["Manage Subjects", "Manage Courses", "Manage Curriculum", "Manage Lesson Content"].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md cursor-pointer">
            <h3 className="text-xl font-bold text-brand-navy mb-2">{item}</h3>
            <p className="text-sm text-gray-500">Add, edit, or remove {item.toLowerCase()} across the platform.</p>
          </div>
        ))}
      </div>
    </div>
  );
}