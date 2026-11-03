"use client";
import { X, Sparkles } from "lucide-react";
import { usePublicTheme } from "@/lib/PublicThemeContext";

export default function ThemeGalleryModal() {
  const { galleryOpen, setGalleryOpen } = usePublicTheme();
  if (!galleryOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setGalleryOpen(false)} />
      <div className="relative bg-[#0F1926] border border-white/10 rounded-2xl w-full max-w-2xl p-8 shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="text-orange-500" /> Theme Gallery
          </h2>
          <button onClick={() => setGalleryOpen(false)} className="text-slate-400 hover:text-white"><X size={20} /></button>
        </div>
        <p className="text-slate-400 text-sm mb-6">Themes are a Base44 feature. Once we wire up the Base44 DB, this modal will display your 19 themes.</p>
        <div className="bg-[#162233] border border-white/5 p-6 rounded-xl text-center text-slate-500 text-sm">
          No themes loaded yet.
        </div>
      </div>
    </div>
  );
}