"use client";
import { useState, useRef, useEffect } from "react";
import { User, Settings, LogOut, Bell, History, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="h-9 w-9 rounded-full overflow-hidden border border-white/10 hover:ring-2 hover:ring-orange-500/30 transition-all flex items-center justify-center bg-orange-500/10 text-orange-500 text-sm font-bold"
      >
        SA
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-64 rounded-xl border border-white/10 bg-[#0F1926] shadow-2xl z-50 py-2">
          <div className="px-4 py-3 border-b border-white/5 mb-2">
            <p className="text-sm font-bold text-white">School Admin</p>
            <p className="text-xs text-slate-400 truncate">admin@thinkacademy.edu</p>
            <span className="inline-block mt-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-500 uppercase">
              Administrator
            </span>
          </div>
          
          <div className="px-2 space-y-1">
            <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2 text-sm text-slate-300 rounded-lg hover:bg-white/5 hover:text-white transition-colors">
              <User size={16} className="text-slate-500" /> Profile
            </Link>
            <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2 text-sm text-slate-300 rounded-lg hover:bg-white/5 hover:text-white transition-colors">
              <Settings size={16} className="text-slate-500" /> Account Settings
            </Link>
            <Link href="/dashboard/notifications" className="flex items-center gap-3 px-3 py-2 text-sm text-slate-300 rounded-lg hover:bg-white/5 hover:text-white transition-colors">
              <Bell size={16} className="text-slate-500" /> Notifications
            </Link>
            <Link href="/dashboard/activity" className="flex items-center gap-3 px-3 py-2 text-sm text-slate-300 rounded-lg hover:bg-white/5 hover:text-white transition-colors">
              <History size={16} className="text-slate-500" /> Activity Log
            </Link>
            <Link href="/dashboard/security" className="flex items-center gap-3 px-3 py-2 text-sm text-slate-300 rounded-lg hover:bg-white/5 hover:text-white transition-colors">
              <ShieldCheck size={16} className="text-slate-500" /> Security
            </Link>
          </div>
          
          <div className="border-t border-white/5 mt-2 pt-2 px-2">
            <Link href="/login" className="flex items-center gap-3 px-3 py-2 text-sm text-red-400 rounded-lg hover:bg-red-500/10 transition-colors">
              <LogOut size={16} /> Sign out
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}