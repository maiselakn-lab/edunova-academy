"use client";
import { useState, useEffect } from "react";
import { Plus, Search, User, Loader2 } from "lucide-react";
import { fetchApi } from "@/lib/api";

export default function StudentsPage() {
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loadStudents = async () => {
    try {
      const data = await fetchApi("/students");
      setStudents(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleAddStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetchApi("/students", {
        method: "POST",
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
        }),
      });
      // Reset and close
      setFirstName("");
      setLastName("");
      setEmail("");
      setIsModalOpen(false);
      loadStudents(); // Refresh list
    } catch (err) {
      alert("Failed to add student. Check if you are logged in.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Students</h1>
          <p className="text-sm text-muted-foreground">Manage student records and enrollment.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
        >
          <Plus size={16} /> Add Student
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-3 py-2 max-w-md">
        <Search size={18} className="text-muted-foreground" />
        <input 
          type="text" 
          placeholder="Search students..." 
          className="bg-transparent border-none outline-none text-sm w-full placeholder:text-muted-foreground text-foreground"
        />
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        {loading ? (
          <div className="p-12 flex justify-center text-muted-foreground"><Loader2 className="animate-spin" /></div>
        ) : students.length === 0 ? (
          <div className="p-12 text-center text-muted-foreground">
            No students found. Click "Add Student" to create one.
          </div>
        ) : (
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/50 border-b border-border text-muted-foreground">
              <tr>
                <th className="px-6 py-3 font-medium">Name</th>
                <th className="px-6 py-3 font-medium">Email</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-foreground">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-muted/30">
                  <td className="px-6 py-4 font-medium flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <User size={14} />
                    </div>
                    {student.first_name} {student.last_name}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{student.email || "No email"}</td>
                  <td className="px-6 py-4">
                    <span className="bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded-full text-xs font-medium">Active</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary hover:underline text-sm font-medium">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Add Student Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-md p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Add New Student</h2>
            <form onSubmit={handleAddStudent} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1">First Name</label>
                  <input required value={firstName} onChange={e => setFirstName(e.target.value)} className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1">Last Name</label>
                  <input required value={lastName} onChange={e => setLastName(e.target.value)} className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Email (Optional)</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none" />
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted">Cancel</button>
                <button type="submit" disabled={isSubmitting} className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 flex items-center gap-2">
                  {isSubmitting && <Loader2 size={14} className="animate-spin" />} Save Student
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}