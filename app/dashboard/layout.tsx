"use client";
import AppSidebar from "@/components/layout/AppSidebar";
import ProfileMenu from "@/components/layout/ProfileMenu";
import { Bell } from "lucide-react";
import { ThemeProvider } from "@/lib/ThemeContext";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen bg-background text-foreground">
        <AppSidebar />
        
        <main className="flex-1 min-w-0 flex flex-col">
          {/* Top Bar */}
          <div className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-border h-14 flex items-center justify-end gap-3 px-4 lg:px-8">
            <div className="flex items-center gap-4 text-muted-foreground mr-2">
              <button className="p-2 hover:bg-accent rounded-full transition-colors relative">
                <Bell size={18} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full"></span>
              </button>
            </div>
            <ProfileMenu />
          </div>

          {/* Page Content */}
          <div className="p-4 lg:p-8 max-w-[1400px] mx-auto w-full flex-1">
            {children}
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}