"use client";
import PublicNavbar from "./PublicNavbar";
import PublicFooter from "./PublicFooter";
import { PublicThemeProvider } from "@/lib/PublicThemeContext";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <PublicThemeProvider>
      <div className="min-h-screen bg-background text-foreground flex flex-col public-theme-root">
        <PublicNavbar />
        <main className="flex-1">{children}</main>
        <PublicFooter />
      </div>
    </PublicThemeProvider>
  );
}