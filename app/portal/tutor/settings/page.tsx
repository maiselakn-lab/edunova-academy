export default function Settings() {
  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-navy mb-6">Tutor Settings</h1>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 max-w-2xl">
        <div className="mb-6">
          <label className="block text-sm font-bold text-brand-navy mb-2">Email</label>
          <input type="email" value="tutor@test.com" disabled className="w-full p-3 bg-brand-grey border border-gray-200 rounded text-gray-500" />
        </div>
        <button className="bg-brand-royal text-white px-6 py-3 rounded font-bold">Save Changes</button>
      </div>
    </div>
  );
}