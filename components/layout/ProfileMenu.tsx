"use client";
import { useState, useRef, useEffect } from "react";
import { User, Settings, LogOut, ShieldCheck, Bell } from "lucide-react";
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
        className="h-9 w-9 rounded-full overflow-hidden border border-border hover:ring-2 hover:ring-primary/30 transition-all flex items-center justify-center bg-primary/10 text-primary text-sm font-semibold"
      >
        SA
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-56 rounded-lg border border-border bg-card shadow-lg z-50 py-1">
          <div className="px-3 py-2 border-b border-border">
            <p className="text-sm font-medium text-foreground">School Admin</p>
            <p className="text-xs text-muted-foreground truncate">admin@think.edu.ng</p>
            <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary capitalize">Admin</span>
          </div>
          <Link href="/dashboard/settings" className="flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-accent">
            <User size={15} /> Profile
          </Link>
          <Link href="/dashboard/settings" className="flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-accent">
            <Settings size={15} /> Account Settings
          </Link>
          <Link href="/dashboard/notifications" className="flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-accent">
            <Bell size={15} /> Notifications
          </Link>
          <div className="border-t border-border my-1" />
          <Link href="/login" className="flex items-center gap-2 px-3 py-2 text-sm text-red-500 hover:bg-red-500/10">
            <LogOut size={15} /> Sign out
          </Link>
        </div>
      )}
    </div>
  );
}