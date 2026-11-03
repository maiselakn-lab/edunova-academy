"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight, Menu, LogOut, Building2, Layers } from "lucide-react";
import { SIDEBAR_SECTIONS } from "@/lib/coreModules";
import ThemeToggle from "./ThemeToggle";

export default function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const sidebarContent = (
    <div className={`flex flex-col h-full bg-[#0A1420] border-r border-white/5 text-white transition-all duration-300 ${collapsed ? 'w-[68px]' : 'w-[260px]'}`}>
      {/* Logo */}
      <Link href="/dashboard" className="flex items-center gap-3 px-4 py-5 border-b border-white/5 hover:bg-white/5 transition-colors">
        <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white flex-shrink-0">
          <Layers size={18} />
        </div>
        {!collapsed && (
          <div className="min-w-0">
            <h1 className="text-sm font-bold tracking-wide text-white truncate">THINK Academy</h1>
            <p className="text-[10px] text-slate-400 truncate">AcadCoreOS</p>
          </div>
        )}
      </Link>

      {/* School / Campus Selector */}
      {!collapsed && (
        <div className="px-4 py-4 border-b border-white/5">
          <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">Current School</p>
          <div className="flex items-center gap-2 text-sm text-slate-200 bg-white/5 px-3 py-2 rounded-lg border border-white/5">
            <Building2 size={14} className="text-orange-500" />
            <span className="truncate">THINK Academy</span>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-4 mb-2">Viewing As</p>
          <div className="flex items-center gap-2 text-sm text-slate-200 bg-white/5 px-3 py-2 rounded-lg border border-white/5">
            <span className="truncate">School Administrator</span>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 space-y-6 overflow-y-auto custom-scrollbar">
        {SIDEBAR_SECTIONS.map((section) => (
          <div key={section.title}>
            {!collapsed && <p className="text-[10px] uppercase tracking-widest text-slate-500 px-3 mb-2">{section.title}</p>}
            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const fullPath = `/dashboard${item.path}`;
                const isActive = pathname === fullPath || (item.path === "/dashboard" && pathname === "/dashboard");
                
                return (
                  <Link
                    key={item.path}
                    href={fullPath}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                      isActive
                        ? "bg-orange-500/10 text-orange-500 font-medium border border-orange-500/20"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon size={18} className="flex-shrink-0" />
                    {!collapsed && <span className="truncate">{item.label}</span>}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="border-t border-white/5 px-3 py-3 space-y-1">
        <Link
          href="/login"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 w-full transition-colors"
        >
          <LogOut size={18} className="flex-shrink-0" />
          {!collapsed && <span>Logout</span>}
        </Link>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-500 hover:text-white hover:bg-white/5 w-full transition-colors"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          {!collapsed && <span>Collapse Menu</span>}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-3 left-3 z-50 p-2 bg-[#0A1420] text-white rounded-lg shadow-lg border border-white/10"
      >
        <Menu size={20} />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="relative z-50 h-full bg-[#0A1420]">
            {sidebarContent}
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:block h-screen sticky top-0">
        {sidebarContent}
      </div>
    </>
  );
}