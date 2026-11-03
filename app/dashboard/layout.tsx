"use client";
import AppSidebar from "@/components/layout/AppSidebar";
import ProfileMenu from "@/components/layout/ProfileMenu";
import { Bell, Search } from "lucide-react";
import { ThemeProvider } from "@/lib/ThemeContext";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen bg-[#08101A] text-slate-200 font-sans">
        <AppSidebar />
        
        <main className="flex-1 min-w-0 flex flex-col">
          {/* Top Bar */}
          <div className="sticky top-0 z-30 bg-[#08101A]/90 backdrop-blur-md border-b border-white/5 h-16 flex items-center justify-between px-6 lg:px-8">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative w-full max-w-md hidden md:block">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input 
                  type="text" 
                  placeholder="Search students, staff, or modules..." 
                  className="w-full bg-[#0F1926] border border-white/5 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500/50"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full border-2 border-[#08101A]"></span>
              </button>
              <div className="h-6 w-px bg-white/10"></div>
              <ProfileMenu />
            </div>
          </div>

          {/* Page Content */}
          <div className="p-6 lg:p-8 max-w-[1400px] mx-auto w-full flex-1">
            {children}
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}