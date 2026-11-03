import { CORE_MODULES } from "@/lib/coreModules";
import { CheckCircle2 } from "lucide-react";

export default function ModulesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">19 Core Modules</h1>
        <p className="text-sm text-muted-foreground">The central source of truth for AcadCoreOS.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CORE_MODULES.map((mod) => {
          const Icon = mod.icon;
          const isLive = mod.status === "live";
          return (
            <div key={mod.key} className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase ${isLive ? 'bg-emerald-500/10 text-emerald-500' : 'bg-orange-500/10 text-orange-500'}`}>
                  {mod.status}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{mod.name}</h3>
              <p className="text-sm font-medium text-muted-foreground mb-4">{mod.title}</p>
              <p className="text-xs text-muted-foreground mb-6 flex-1">{mod.description}</p>
              
              <ul className="space-y-1.5 mt-auto">
                {mod.capabilities.slice(0, 3).map((cap, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-foreground">
                    <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" /> {cap}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}