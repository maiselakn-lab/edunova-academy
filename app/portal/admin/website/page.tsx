export default function EditWebsite() {
  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-navy mb-6">Edit Website Content</h1>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 max-w-3xl">
        <div className="mb-6">
          <label className="block text-sm font-bold text-brand-navy mb-2">Homepage Welcome Text</label>
          <textarea className="w-full p-3 border border-gray-300 rounded-lg h-24">Welcome to Think EduNova Academy. Leading Academic Excellence.</textarea>
        </div>
        <button className="bg-brand-royal text-white px-6 py-3 rounded font-bold">Publish Changes</button>
      </div>
    </div>
  );
}