"use client";

import { useState, useEffect } from 'react';
import { Search, MoreVertical, Loader2 } from 'lucide-react';

export default function UserManagement() {
  const [users, setUsers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem('edunova_token');
      try {
        const response = await fetch('https://edunova-academy-qkk5.onrender.com/api/admin/users', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) {
          setUsers(await response.json());
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (isLoading) return <div className="p-8 text-gray-500">Loading users...</div>;

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
              <th className="p-4 font-bold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {users.map((u) => (
              <tr key={u.id} className="border-b border-gray-100">
                <td className="p-4 font-bold text-brand-navy">{u.name}</td>
                <td className="p-4 text-gray-500">{u.email}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold capitalize ${u.role === 'admin' ? 'bg-brand-charcoal text-white' : 'bg-brand-royal/10 text-brand-royal'}`}>
                    {u.role}
                  </span>
                </td>
                <td className="p-4 text-right"><button><MoreVertical size={16} className="text-gray-400"/></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}