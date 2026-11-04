"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { GraduationCap, ArrowRight, Loader2, Users, BookOpen, MonitorPlay, ShieldCheck } from "lucide-react";

export default function LoginPortalPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialRole = searchParams.get("role") || "learner";
  
  const [loading, setLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string>(initialRole);

  useEffect(() => {
    const roleParam = searchParams.get("role");
    if (roleParam) setSelectedRole(roleParam);
  }, [searchParams]);

  const roles = [
    { id: "parent", label: "Parent Portal", icon: Users, desc: "Progress, fees & bookings" },
    { id: "learner", label: "Learner / Student", icon: GraduationCap, desc: "Lessons, AI & resources" },
    { id: "tutor", label: "Tutor Portal", icon: MonitorPlay, desc: "Teaching, earnings & apps" },
    { id: "admin", label: "Admin Portal", icon: ShieldCheck, desc: "Management & finance" },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push(`/dashboard/${selectedRole}`);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl p-8 shadow-xl">
        
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <GraduationCap size={24} className="text-white" />
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 mb-2">Think EduNova Academy</h1>
          <p className="text-sm text-slate-500">Select your portal to sign in.</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {roles.map((role) => {
              const Icon = role.icon;
              const isSelected = selectedRole === role.id;
              return (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setSelectedRole(role.id)}
                  className={`flex items-start gap-4 p-4 rounded-xl border text-left transition-all ${
                    isSelected 
                      ? "bg-blue-50 border-blue-500 shadow-sm" 
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    isSelected ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-400"
                  }`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className={`text-sm font-bold ${isSelected ? "text-blue-900" : "text-slate-700"}`}>{role.label}</p>
                    <p className="text-xs text-slate-500 mt-1">{role.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="space-y-4 border-t border-slate-100 pt-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
              <input required type="email" placeholder="you@thinkedunova.edu" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Password</label>
              <input required type="password" placeholder="••••••••" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
            </div>
            
            <button 
              disabled={loading || !selectedRole} 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors mt-6 shadow-md shadow-blue-600/20"
            >
              {loading ? <Loader2 size={18} className="animate-spin" /> : `Sign in to ${roles.find(r => r.id === selectedRole)?.label}`}
              {!loading && <ArrowRight size={18} />}
            </button>
          </div>
        </form>

        <p className="text-center text-xs text-slate-500 mt-8">
          Don't have a portal account? <Link href="/get-started" className="text-blue-600 font-bold hover:underline">Register now</Link>
        </p>
      </div>
    </div>
  );
}