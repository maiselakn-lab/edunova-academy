export default function UserManagement() {
  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-navy mb-6">User Management</h1>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <input type="text" placeholder="Search users..." className="p-2 border border-gray-300 rounded text-sm focus:outline-none" />
          <button className="bg-brand-royal text-white px-4 py-2 rounded text-sm font-bold">+ Add New User</button>
        </div>
        <table className="w-full text-left">
          <thead className="bg-brand-grey border-b border-gray-200 text-gray-500 text-sm">
            <tr><th className="p-4 font-bold">Name</th><th className="p-4 font-bold">Email</th><th className="p-4 font-bold">Role</th><th className="p-4 font-bold text-right">Actions</th></tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-gray-100"><td className="p-4 font-bold text-brand-navy">Norman Maisela</td><td className="p-4 text-gray-500">student@test.com</td><td className="p-4"><span className="bg-brand-royal/10 text-brand-royal px-2 py-1 rounded text-xs font-bold">Student</span></td><td className="p-4 text-right"><button className="text-brand-royal font-bold hover:underline">Edit</button></td></tr>
            <tr className="border-b border-gray-100"><td className="p-4 font-bold text-brand-navy">Sarah Ndlovu</td><td className="p-4 text-gray-500">parent@test.com</td><td className="p-4"><span className="bg-brand-navy/10 text-brand-navy px-2 py-1 rounded text-xs font-bold">Parent</span></td><td className="p-4 text-right"><button className="text-brand-royal font-bold hover:underline">Edit</button></td></tr>
            <tr className="border-b border-gray-100"><td className="p-4 font-bold text-brand-navy">Thabo Nkosi</td><td className="p-4 text-gray-500">tutor@test.com</td><td className="p-4"><span className="bg-brand-teal/10 text-brand-teal px-2 py-1 rounded text-xs font-bold">Tutor</span></td><td className="p-4 text-right"><button className="text-brand-royal font-bold hover:underline">Edit</button></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}