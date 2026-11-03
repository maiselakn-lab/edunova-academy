"use client";
import PublicNavbar from "./PublicNavbar";
import PublicFooter from "./PublicFooter";
import { PublicThemeProvider } from "@/lib/PublicThemeContext";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <PublicThemeProvider>
      <div className="min-h-screen bg-[#08101A] text-slate-200 flex flex-col font-sans selection:bg-orange-500/30">
        <PublicNavbar />
        <main className="flex-1">{children}</main>
        <PublicFooter />
      </div>
    </PublicThemeProvider>
  );
}