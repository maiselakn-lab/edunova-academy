"use client";
import PublicNavbar from "./PublicNavbar";
import PublicFooter from "./PublicFooter";
import { PublicThemeProvider } from "@/lib/PublicThemeContext";
import ThemeGalleryModal from "@/components/public-theme/ThemeGalleryModal";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <PublicThemeProvider>
      <div className="min-h-screen bg-[#08101A] text-slate-200 flex flex-col font-sans selection:bg-orange-500/30 public-theme-root">
        <PublicNavbar />
        <main className="flex-1">{children}</main>
        <PublicFooter />
        <ThemeGalleryModal />
      </div>
    </PublicThemeProvider>
  );
}