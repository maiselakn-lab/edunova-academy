"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { themePresets } from "./themePresets";
import { hexToHslString } from "./colorUtils";

type Mode = "light" | "dark" | "night" | "system";
type ThemeCtx = { mode: Mode; setMode: (m: Mode) => void };

const ThemeContext = createContext<ThemeCtx | null>(null);

export function ThemeProvider({ school, children }: { school?: any; children: ReactNode }) {
  const [mode, setModeState] = useState<Mode>("dark");

  useEffect(() => {
    const saved = localStorage.getItem("themeMode") as Mode;
    if (saved) setModeState(saved);
  }, []);

  const setMode = (newMode: Mode) => {
    setModeState(newMode);
    if (typeof window !== "undefined") localStorage.setItem("themeMode", newMode);
  };

  useEffect(() => {
    if (!school || typeof document === "undefined") return;
    const preset = themePresets[school.theme_preset] || themePresets.modern;
    const root = document.documentElement;
    root.style.setProperty("--primary", hexToHslString(school.primary_color || preset.primary));
  }, [school]);

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

  return <ThemeContext.Provider value={{ mode, setMode }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  return ctx || { mode: "dark" as Mode, setMode: () => {} };
}