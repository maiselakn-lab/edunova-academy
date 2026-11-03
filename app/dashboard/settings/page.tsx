"use client";
import { useState } from "react";
import { Save, Upload } from "lucide-react";

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-foreground">School Settings</h1>
        <p className="text-sm text-muted-foreground">Manage your school's branding and configuration.</p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <div className="bg-card border border-border rounded-xl p-6 space-y-4">
          <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">Branding</h2>
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center border border-border">
              <span className="text-muted-foreground text-xs">Logo</span>
            </div>
            <button type="button" className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors">
              <Upload size={16} /> Upload New Logo
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">School Name</label>
              <input type="text" defaultValue="THINK Academy" className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none" />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Primary Color</label>
              <div className="flex gap-2">
                <input type="color" defaultValue="#0F766E" className="h-10 w-12 rounded cursor-pointer bg-background border border-border" />
                <input type="text" defaultValue="#0F766E" className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 space-y-4">
          <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">Contact Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Email Address</label>
              <input type="email" defaultValue="admin@think.edu.ng" className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none" />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Phone Number</label>
              <input type="text" defaultValue="+27 12 345 6789" className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1">Address</label>
            <textarea rows={2} defaultValue="123 Education Lane, Sandton, Johannesburg" className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none"></textarea>
          </div>
        </div>

        <div className="flex justify-end">
          <button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
            <Save size={16} /> {saved ? "Saved!" : "Save Settings"}
          </button>
        </div>
      </form>
    </div>
  );
}