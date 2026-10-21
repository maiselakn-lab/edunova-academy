"use client";

import { useState, useEffect } from "react";
import AdminSidebar from "@/components/sidebars/AdminSidebar";
import TopNav from "@/components/TopNav";
import { 
  CheckCircle2, XCircle, FileText, Search, Mail, 
  DollarSign, Users, Calendar, MoreHorizontal, 
  Send, CreditCard, ShieldCheck, Download
} from "lucide-react";

export default function AdminTutorsPage() {
  const [activeTab, setActiveTab] = useState("Applicants");
  const [searchTerm, setSearchTerm] = useState("");
  const [applicants, setApplicants] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetching applications from our Python Backend
  const fetchApplicants = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/admin/tutor-applications");
      const data = await res.json();
      setApplicants(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchApplicants(); }, []);

  const handleAction = async (id: number, action: "approve" | "reject") => {
    try {
      await fetch(`http://localhost:8000/api/admin/${action}-tutor/${id}`, { method: "POST" });
      fetchApplicants();
    } catch (err) { console.error(err); }
  };

  // Mock data for Active Tutors (This would normally come from a database endpoint)
  const activeTutors = [
    { id: 1, name: "Dr. Thabo Nkosi", email: "thabo@edunova.com", subject: "Mathematics", students: 14, earnings: "R 4,250", pendingPayout: "R 1,500", status: "Active" },
    { id: 2, name: "Sarah Jenkins", email: "sarah@edunova.com", subject: "English", students: 8, earnings: "R 2,100", pendingPayout: "R 0", status: "Active" },
    { id: 3, name: "Prof. David Oosthuizen", email: "david@edunova.com", subject: "Physics", students: 22, earnings: "R 8,400", pendingPayout: "R 3,200", status: "Active" },
  ];

  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <AdminSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1400px] mx-auto">
          
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">Manage Tutors</h1>
              <p className="text-sm text-gray-500">Approve applicants, assign students, and manage payouts.</p>
            </div>
            <div className="flex items-center bg-white rounded-lg px-4 py-2 w-72 border border-gray-300 shadow-sm">
              <Search size={18} className="text-gray-400" />
              <input 
                type="text" 
                placeholder="Search tutors..." 
                className="bg-transparent border-none outline-none ml-3 w-full text-sm text-gray-700" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 border-b border-gray-200 mb-6">
            {["Applicants", "Active Tutors", "Payouts"].map((tab) => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)} 
                className={`pb-3 text-sm font-bold transition-colors border-b-2 ${
                  activeTab === tab ? "border-indigo-600 text-indigo-600" : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* TAB 1: APPLICANTS */}
          {activeTab === "Applicants" && (
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              {loading ? (
                <div className="p-8 text-center text-gray-500">Loading applications...</div>
              ) : applicants.length === 0 ? (
                <div className="p-12 text-center">
                  <FileText size={48} className="mx-auto text-gray-300 mb-4" />
                  <h3 className="text-lg font-bold text-gray-800">No Applications</h3>
                  <p className="text-sm text-gray-500">Tutors who apply will appear here.</p>
                </div>
              ) : (
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 font-medium">
                    <tr>
                      <th className="px-6 py-4">Applicant</th>
                      <th className="px-6 py-4">Subjects</th>
                      <th className="px-6 py-4">Qualifications</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {applicants.filter(a => a.first_name.toLowerCase().includes(searchTerm.toLowerCase())).map((app) => (
                      <tr key={app.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <p className="font-bold text-gray-800">{app.first_name} {app.last_name}</p>
                          <p className="text-xs text-gray-500 flex items-center gap-1"><Mail size={12}/> {app.email}</p>
                        </td>
                        <td className="px-6 py-4 text-gray-600 font-medium">{app.subjects}</td>
                        <td className="px-6 py-4 text-gray-600 text-xs">{app.qualifications}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                            app.status === "Approved" ? "bg-emerald-100 text-emerald-700" : 
                            app.status === "Rejected" ? "bg-red-100 text-red-700" : 
                            "bg-amber-100 text-amber-700"
                          }`}>{app.status}</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          {app.status === "Pending" && (
                            <div className="flex justify-end gap-2">
                              <button onClick={() => handleAction(app.id, "approve")} className="flex items-center gap-1 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 text-xs font-bold"><CheckCircle2 size={14}/> Approve</button>
                              <button onClick={() => handleAction(app.id, "reject")} className="flex items-center gap-1 px-3 py-1.5 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 text-xs font-bold"><XCircle size={14}/> Reject</button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}

          {/* TAB 2: ACTIVE TUTORS (Manage & Assign) */}
          {activeTab === "Active Tutors" && (
            <div className="grid grid-cols-3 gap-6">
              {activeTutors.map((tutor) => (
                <div key={tutor.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-lg">{tutor.name.charAt(0)}</div>
                      <div>
                        <h3 className="font-bold text-gray-800">{tutor.name}</h3>
                        <p className="text-xs text-gray-500">{tutor.subject}</p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal size={18}/></button>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm"><span className="text-gray-500">Students Assigned:</span><span className="font-bold text-gray-800 flex items-center gap-1"><Users size={14}/> {tutor.students}</span></div>
                    <div className="flex justify-between text-sm"><span className="text-gray-500">Total Earnings:</span><span className="font-bold text-emerald-600">{tutor.earnings}</span></div>
                    <div className="flex justify-between text-sm"><span className="text-gray-500">Pending Payout:</span><span className="font-bold text-amber-600">{tutor.pendingPayout}</span></div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-indigo-50 text-indigo-700 py-2 rounded-lg text-xs font-bold hover:bg-indigo-100 flex items-center justify-center gap-1"><Users size={14}/> Assign Student</button>
                    <button className="flex-1 bg-emerald-50 text-emerald-700 py-2 rounded-lg text-xs font-bold hover:bg-emerald-100 flex items-center justify-center gap-1"><DollarSign size={14}/> Pay Out</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: PAYOUTS (Financials) */}
          {activeTab === "Payouts" && (
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h2 className="font-bold text-gray-800">Pending Tutor Payouts</h2>
                <button className="bg-[#0F172A] text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-800"><Download size={16}/> Export CSV</button>
              </div>
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 font-medium">
                  <tr>
                    <th className="px-6 py-4">Tutor</th>
                    <th className="px-6 py-4">Bank Details</th>
                    <th className="px-6 py-4">Amount Owed</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {activeTutors.filter(t => t.pendingPayout !== "R 0").map((tutor, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-bold text-gray-800">{tutor.name}</td>
                      <td className="px-6 py-4 text-xs text-gray-500">FNB • **** 4521</td>
                      <td className="px-6 py-4 font-bold text-amber-600">{tutor.pendingPayout}</td>
                      <td className="px-6 py-4"><span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs font-bold">Pending Approval</span></td>
                      <td className="px-6 py-4 text-right">
                        <button className="bg-emerald-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-emerald-700 flex items-center gap-1 ml-auto"><Send size={12}/> Approve Payout</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}