"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Layers, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

export default function GetStartedPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      setLoading(true);
      // Simulate registration
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-[#08101A] flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-lg bg-[#0F1926] border border-white/10 rounded-2xl p-8 shadow-2xl">
        
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Layers size={24} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Start Your 14-Day Free Trial</h1>
          <p className="text-sm text-slate-400">No credit card required. Setup your school in 2 minutes.</p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-8">
          <div className={`flex items-center gap-2 text-sm font-medium ${step >= 1 ? 'text-orange-500' : 'text-slate-500'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 1 ? 'bg-orange-500 text-white' : 'bg-slate-800 text-slate-400'}`}>1</span> School Info
          </div>
          <div className="w-8 h-px bg-white/10"></div>
          <div className={`flex items-center gap-2 text-sm font-medium ${step >= 2 ? 'text-orange-500' : 'text-slate-500'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 2 ? 'bg-orange-500 text-white' : 'bg-slate-800 text-slate-400'}`}>2</span> Admin Account
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">School Name</label>
                <input required type="text" placeholder="e.g. THINK Academy" className="w-full bg-[#08101A] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">School Address</label>
                <input required type="text" placeholder="e.g. Sandton, Johannesburg" className="w-full bg-[#08101A] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Expected Student Capacity</label>
                <select className="w-full bg-[#08101A] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500">
                  <option>1–100 Students (Starter)</option>
                  <option>101–300 Students (Growth)</option>
                  <option>301–600 Students (Professional)</option>
                  <option>601–1000 Students (Enterprise)</option>
                </select>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">First Name</label>
                  <input required type="text" placeholder="Maisela" className="w-full bg-[#08101A] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Last Name</label>
                  <input required type="text" placeholder="Norman" className="w-full bg-[#08101A] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Email Address</label>
                <input required type="email" placeholder="admin@yourschool.com" className="w-full bg-[#08101A] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Create Password</label>
                <input required type="password" placeholder="••••••••" className="w-full bg-[#08101A] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500" />
              </div>
            </>
          )}

          <div className="pt-4">
            <button disabled={loading} type="submit" className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
              {loading ? <Loader2 size={18} className="animate-spin" /> : step === 1 ? "Continue to Account Setup" : "Create School Account"}
              {!loading && <ArrowRight size={18} />}
            </button>
          </div>
        </form>

        {step === 2 && (
          <button onClick={() => setStep(1)} className="w-full text-center text-xs text-slate-500 hover:text-white mt-4 transition-colors">
            Back to School Info
          </button>
        )}

        <p className="text-center text-xs text-slate-500 mt-8">
          Already have an account? <Link href="/login" className="text-orange-500 hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}