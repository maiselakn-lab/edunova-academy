"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Layers, ArrowRight, Loader2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate backend login
    setTimeout(() => {
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#08101A] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#0F1926] border border-white/10 rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Layers size={24} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-sm text-slate-400">Sign in to your AcadCoreOS workspace</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Email Address</label>
            <input required type="email" placeholder="admin@thinkacademy.edu" className="w-full bg-[#08101A] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500" />
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
          <button disabled={loading} type="submit" className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors mt-6">
            {loading ? <Loader2 size={18} className="animate-spin" /> : "Sign In"}
            {!loading && <ArrowRight size={18} />}
          </button>
        </form>

        <p className="text-center text-xs text-slate-500 mt-8">
          Don't have a school account? <Link href="/trial" className="text-orange-500 hover:underline">Start a free trial</Link>
        </p>
      </div>
    </div>
  );
}