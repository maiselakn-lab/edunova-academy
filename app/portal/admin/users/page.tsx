"use client";

import { useState, useEffect } from 'react';
import { Search, MoreVertical } from 'lucide-react';

export default function UserManagement() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    // In a real app, this would fetch from /api/admin/users
    // For now, we simulate fetching real data
    setUsers([
      { name: "Norman Maisela", email: "student@test.com", role: "Student", joined: "Jan 15, 2026" },
      { name: "Sarah Ndlovu", email: "parent@test.com", role: "Parent", joined: "Jan 10, 2026" },
      { name: "Thabo Nkosi", email: "tutor@test.com", role: "Tutor", joined: "Jan 05, 2026" },
      { name: "Junior Dlamini", email: "learner@test.com", role: "Learner", joined: "Jan 20, 2026" },
      { name: "Root Admin", email: "admin@test.com", role: "Admin", joined: "Jan 01, 2026" },
    ]);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-navy mb-6">User Management</h1>
      
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input type="text" placeholder="Search users..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none" />
          </div>
          <button className="bg-brand-royal text-white px-4 py-2 rounded text-sm font-bold">+ Add User</button>
        </div>
        <table className="w-full text-left">
          <thead className="bg-brand-grey text-gray-500 text-sm">
            <tr>
              <th className="p-4 font-bold">Name</th>
              <th className="p-4 font-bold">Email</th>
              <th className="p-4 font-bold">Role</th>
              <th className="p-4 font-bold">Joined</th>
              <th className="p-4 font-bold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {users.map((u, i) => (
              <tr key={i} className="border-b border-gray-100">
                <td className="p-4 font-bold text-brand-navy">{u.name}</td>
                <td className="p-4 text-gray-500">{u.email}</td>
                <td className="p-4"><span className={`px-2 py-1 rounded text-xs font-bold ${u.role === 'Admin' ? 'bg-brand-charcoal text-white' : 'bg-brand-royal/10 text-brand-royal'}`}>{u.role}</span></td>
                <td className="p-4 text-gray-500">{u.joined}</td>
                <td className="p-4 text-right"><button><MoreVertical size={16} className="text-gray-400"/></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}