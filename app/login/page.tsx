"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GraduationCap, ArrowRight, Loader2, ShieldCheck, User, Users, BookOpen } from "lucide-react";

export default function LoginPortalPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles = [
    { id: "admin", label: "Administrator", icon: ShieldCheck, desc: "School management & finance" },
    { id: "tutor", label: "Tutor / Teacher", icon: BookOpen, desc: "Classes, grades & attendance" },
    { id: "student", label: "Student", icon: User, desc: "Timetables, results & resources" },
    { id: "parent", label: "Parent / Guardian", icon: Users, desc: "Child's progress & fees" },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRole) return;
    
    setLoading(true);
    // Simulate backend login and routing based on role
    setTimeout(() => {
      if (selectedRole === "admin") router.push("/dashboard");
      else if (selectedRole === "tutor") router.push("/dashboard"); // We will build tutor portal later
      else if (selectedRole === "student") router.push("/dashboard"); // We will build student portal later
      else if (selectedRole === "parent") router.push("/dashboard"); // We will build parent portal later
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#08101A] flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-2xl bg-[#0F1926] border border-white/10 rounded-2xl p-8 shadow-2xl">
        
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <GraduationCap size={24} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Welcome to THINK EduNova</h1>
          <p className="text-sm text-slate-400">Select your portal to sign in to your workspace.</p>
        </div>

        <form onSubmit={handleLogin}>
          {/* Role Selector Grid */}
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
                      ? "bg-orange-500/10 border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.1)]" 
                      : "bg-[#08101A] border-white/5 hover:border-white/20"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    isSelected ? "bg-orange-500 text-white" : "bg-white/5 text-slate-400"
                  }`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className={`text-sm font-bold ${isSelected ? "text-white" : "text-slate-200"}`}>{role.label}</p>
                    <p className="text-xs text-slate-400 mt-1">{role.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Credentials Form */}
          <div className="space-y-4 border-t border-white/5 pt-6">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Email Address</label>
              <input required type="email" placeholder="you@thinkedunova.edu" className="w-full bg-[#08101A] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500" />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Password</label>
              <input required type="password" placeholder="••••••••" className="w-full bg-[#08101A] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500" />
            </div>
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-slate-400 cursor-pointer">
                <input type="checkbox" className="rounded bg-[#08101A] border-white/10 text-orange-500 focus:ring-orange-500" />
                Remember me
              </label>
              <a href="#" className="text-orange-500 hover:underline">Forgot password?</a>
            </div>
            
            <button 
              disabled={loading || !selectedRole} 
              type="submit" 
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:hover:bg-orange-500 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors mt-6"
            >
              {loading ? <Loader2 size={18} className="animate-spin" /> : `Sign in as ${selectedRole ? roles.find(r => r.id === selectedRole)?.label : '...'}`}
              {!loading && <ArrowRight size={18} />}
            </button>
          </div>
        </form>

        <p className="text-center text-xs text-slate-500 mt-8">
          Don't have a portal account? <Link href="/get-started" className="text-orange-500 hover:underline">Apply for Admission</Link>
        </p>
      </div>
    </div>
  );
}