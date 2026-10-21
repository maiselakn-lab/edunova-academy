"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, Loader2, BookOpen } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); 
    setIsLoading(true);
    
    try {
      // UPDATED TO LIVE RENDER URL
      const res = await fetch("https://edunova-academy-qkk5.onrender.com/api/login", {
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify({ email, password }),
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Invalid email or password");
      
      localStorage.setItem("edunova_role", data.user.role);
      
      if (data.user.role === "admin") router.push("/dashboard/admin");
      else if (data.user.role === "tutor") router.push("/dashboard/tutor");
      else if (data.user.role === "student") router.push("/dashboard/student");
      else router.push("/dashboard/learner");
      
    } catch (err: any) { 
      setError(err.message); 
    } finally { 
      setIsLoading(false); 
    }
  };

  return (
    <div className="min-h-screen bg-[#009CA6] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#007A82] rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00B8C4] rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

      <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm p-8 relative z-10">
        
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex flex-col items-center mb-6">
             <BookOpen size={48} className="text-[#D1007B] mb-1" strokeWidth={2.5} />
             <div className="text-[#D1007B] text-3xl font-black italic tracking-tighter leading-none">THINK</div>
             <p className="text-gray-400 text-[9px] tracking-[0.3em] font-bold uppercase mt-1">EduNova Academy</p>
          </Link>
          <h1 className="text-xl font-bold text-[#333]">Login</h1>
        </div>

        {error && <div className="p-3 bg-red-50 text-red-600 text-xs rounded-lg border border-red-100 mb-4 text-center">{error}</div>}

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="relative border-b border-gray-300 pb-2">
            <div className="absolute top-1 left-0 text-gray-400"><Mail size={16}/></div>
            <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full pl-8 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400" placeholder="User Name / Email" />
          </div>
          
          <div className="relative border-b border-gray-300 pb-2">
            <div className="absolute top-1 left-0 text-gray-400"><Lock size={16}/></div>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full pl-8 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400" placeholder="Password" />
          </div>
          
          <div className="flex items-center gap-2">
            <input type="checkbox" id="remember" className="accent-[#009CA6] w-4 h-4" />
            <label htmlFor="remember" className="text-xs text-gray-500">Remember me</label>
          </div>
          
          <button type="submit" disabled={isLoading} className="w-full bg-[#009CA6] hover:bg-[#00828A] text-white py-3 rounded-md font-bold text-sm mt-4 transition-colors flex justify-center items-center">
            {isLoading ? <Loader2 size={18} className="animate-spin" /> : "LOGIN"}
          </button>
        </form>

        <div className="mt-8 flex justify-between text-xs text-[#009CA6] font-medium">
          <Link href="/enrol" className="hover:underline">Register With Us</Link>
          <Link href="#" className="hover:underline">Privacy Policy</Link>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-white relative z-10 w-full max-w-sm flex justify-between">
        <span>THINK DIGITAL ACADEMY</span>
        <span>© 2026, Made By THINK Digital Academy</span>
      </div>
    </div>
  );
}