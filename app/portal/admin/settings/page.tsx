export default function Settings() {
  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-navy mb-6">System Settings</h1>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 max-w-2xl">
        <div className="mb-6">
          <label className="block text-sm font-bold text-brand-navy mb-2">Platform Name</label>
          <input type="text" defaultValue="Think EduNova Academy" className="w-full p-3 border border-gray-300 rounded" />
        </div>
        <button className="bg-brand-royal text-white px-6 py-3 rounded font-bold">Save Settings</button>
      </div>
    </div>
  );
}