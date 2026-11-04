import { CORE_MODULES } from "@/lib/coreModules";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

export default function ModulesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">19 Core Modules</h1>
        <p className="text-sm text-slate-400">The central source of truth for AcadCoreOS.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CORE_MODULES.map((mod) => {
          const Icon = mod.icon;
          const isLive = mod.status === "live";
          const isBeta = mod.status === "beta";
          
          return (
            <Card key={mod.key} className="bg-[#0F1926] border-white/5 hover:border-white/10 transition-colors flex flex-col">
              <CardHeader className="flex flex-row items-start justify-between pb-2">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <Badge variant="outline" className={
                  isLive 
                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
                    : isBeta 
                      ? "bg-blue-500/10 text-blue-400 border-blue-500/20" 
                      : "bg-slate-500/10 text-slate-400 border-slate-500/20"
                }>
                  {mod.status}
                </Badge>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{mod.name}</p>
                <CardTitle className="text-lg text-white mb-1">{mod.title}</CardTitle>
                <CardDescription className="text-sm text-slate-400 mb-4">{mod.tagline}</CardDescription>
                <ul className="space-y-1.5 mt-auto">
                  {mod.capabilities.slice(0, 3).map((cap, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={14} className="text-orange-500 shrink-0 mt-0.5" /> {cap}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}