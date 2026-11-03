"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight, Menu, LogOut, Building2 } from "lucide-react";
import { SIDEBAR_SECTIONS } from "@/lib/coreModules";
import ThemeToggle from "./ThemeToggle";

export default function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const sidebarContent = (
    <div className={`flex flex-col h-full bg-sidebar text-white transition-all duration-300 ${collapsed ? 'w-[68px]' : 'w-[260px]'}`}>
      {/* Logo */}
      <Link href="/dashboard" className="flex items-center gap-3 px-4 py-5 border-b border-sidebar-border hover:bg-sidebar-accent transition-colors">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
          A
        </div>
        {!collapsed && (
          <div className="min-w-0">
            <h1 className="text-sm font-bold tracking-wide text-white truncate">AcadCoreOS</h1>
            <p className="text-[10px] text-sidebar-foreground/70 truncate">The Intelligent OS</p>
          </div>
        )}
      </Link>

      {/* School selector placeholder */}
      {!collapsed && (
        <div className="px-3 py-3 border-b border-sidebar-border">
          <p className="text-[10px] uppercase tracking-widest text-sidebar-foreground/50 mb-1.5">School</p>
          <p className="text-xs font-medium text-sidebar-foreground truncate flex items-center gap-2">
            <Building2 size={12} /> THINK Academy
          </p>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 py-3 px-2 space-y-4 overflow-y-auto">
        {SIDEBAR_SECTIONS.map((section) => (
          <div key={section.title}>
            {!collapsed && <p className="text-[10px] uppercase tracking-widest text-sidebar-foreground/50 px-3 mb-1">{section.title}</p>}
            <div className="space-y-0.5">
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
                        ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium"
                        : "text-sidebar-foreground hover:text-white hover:bg-sidebar-accent"
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

      {/* Theme Toggle & Collapse */}
      <div className="border-t border-sidebar-border px-3 py-2">
        <ThemeToggle collapsed={collapsed} />
      </div>

      <div className="border-t border-sidebar-border px-2 py-3 space-y-1">
        <Link
          href="/login"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-sidebar-foreground hover:text-white hover:bg-sidebar-accent w-full"
        >
          <LogOut size={18} className="flex-shrink-0" />
          {!collapsed && <span>Logout</span>}
        </Link>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-sidebar-foreground/70 hover:text-white hover:bg-sidebar-accent w-full"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          {!collapsed && <span>Collapse</span>}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-3 left-3 z-50 p-2 bg-sidebar text-white rounded-lg shadow-lg"
      >
        <Menu size={20} />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="relative z-50 h-full bg-sidebar">
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