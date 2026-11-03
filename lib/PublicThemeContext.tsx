"use client";
import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

export type PublicTheme = { theme_key: string; theme_name: string; vars?: Record<string, string>; css_class?: string; };
type Mode = "light" | "dark" | "night" | "system";

type PublicThemeCtx = {
  allThemes: PublicTheme[]; activeTheme: PublicTheme | null;
  mode: Mode; setMode: (m: Mode) => void;
  applyTheme: (t: PublicTheme | null) => void; resetTheme: () => void;
  useSystemTheme: () => void; favourites: string[]; toggleFavourite: (key: string) => void;
  galleryOpen: boolean; setGalleryOpen: (o: boolean) => void;
};

const PublicThemeContext = createContext<PublicThemeCtx | null>(null);

export function PublicThemeProvider({ children }: { children: ReactNode }) {
  const [activeTheme, setActiveTheme] = useState<PublicTheme | null>(null);
  const [mode, setMode] = useState<Mode>("dark");
  const [favourites, setFavourites] = useState<string[]>([]);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [allThemes, setAllThemes] = useState<PublicTheme[]>([]);

  const applyTheme = useCallback((theme: PublicTheme | null) => {
    const root = document.documentElement;
    if (!theme) {
      root.removeAttribute("data-public-theme");
      setActiveTheme(null);
      return;
    }
    if (theme.vars) Object.entries(theme.vars).forEach(([k, v]) => root.style.setProperty(k, v));
    if (theme.css_class) root.classList.add(theme.css_class);
    root.setAttribute("data-public-theme", theme.theme_key);
    setActiveTheme(theme);
  }, []);

  const resetTheme = useCallback(() => applyTheme(null), [applyTheme]);
  const useSystemTheme = useCallback(() => { setMode("system"); applyTheme(null); }, [applyTheme]);

  useEffect(() => {
    const root = document.documentElement;
    const applyMode = () => {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const isDark = mode === "dark" || mode === "night" || (mode === "system" && prefersDark);
      root.classList.toggle("dark", isDark);
      root.classList.toggle("night-shift", mode === "night");
    };
    applyMode();
  }, [mode]);

  const toggleFavourite = useCallback((key: string) => {
    setFavourites((prev) => prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]);
  }, []);

  return (
    <PublicThemeContext.Provider value={{
      allThemes, activeTheme, mode, setMode, applyTheme, resetTheme, useSystemTheme,
      favourites, toggleFavourite, galleryOpen, setGalleryOpen,
    }}>
      {children}
    </PublicThemeContext.Provider>
  );
}

export function usePublicTheme() {
  const ctx = useContext(PublicThemeContext);
  return ctx || { allThemes: [], activeTheme: null, mode: "dark" as Mode, setMode: () => {}, applyTheme: () => {}, resetTheme: () => {}, useSystemTheme: () => {}, favourites: [], toggleFavourite: () => {}, galleryOpen: false, setGalleryOpen: () => {} };
}