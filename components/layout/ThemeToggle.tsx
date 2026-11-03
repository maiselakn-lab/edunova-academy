"use client";
import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";

export default function ThemeToggle({ collapsed }: { collapsed?: boolean }) {
  const { mode, setMode } = useTheme();

  const modes = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Monitor, label: 'System' },
  ] as const;

  if (collapsed) {
    return (
      <div className="flex justify-center px-1">
        {modes.map((m) => {
          const Icon = m.icon;
          return (
            <button
              key={m.value}
              onClick={() => setMode(m.value)}
              className={`p-1.5 rounded-md transition-colors ${
                mode === m.value ? 'text-white bg-white/10' : 'text-sidebar-foreground/50 hover:text-white'
              }`}
              title={m.label}
            >
              <Icon size={14} />
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 p-1 rounded-lg bg-black/20">
      {modes.map((m) => {
        const Icon = m.icon;
        return (
          <button
            key={m.value}
            onClick={() => setMode(m.value)}
            className={`flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-md text-xs transition-colors ${
              mode === m.value ? 'text-white bg-white/10 font-medium' : 'text-sidebar-foreground/60 hover:text-white'
            }`}
          >
            <Icon size={14} />
            {m.label}
          </button>
        );
      })}
    </div>
  );
}