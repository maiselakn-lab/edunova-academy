"use client";
import { useRouter } from "next/navigation";
import { 
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator 
} from '@/components/ui/dropdown-menu';
import { User, Settings, Briefcase, Building2, History, SlidersHorizontal, Bell, ShieldCheck, LogOut } from 'lucide-react';

export default function ProfileMenu() {
  const router = useRouter();
  const base = "/dashboard";

  const name = "School Admin";
  const email = "admin@thinkacademy.edu";
  const role = "admin";
  const initials = "SA";

  const items = [
    { key: 'profile', icon: User, label: 'Profile', to: `${base}/settings` },
    { key: 'account', icon: Settings, label: 'Account', to: `${base}/settings` },
    { key: 'role', icon: Briefcase, label: 'Role', to: `${base}/settings` },
    { key: 'tenant', icon: Building2, label: 'Tenant', to: `${base}/settings` },
  ];
  const items2 = [
    { key: 'activity', icon: History, label: 'Activity', to: `${base}/activity` },
    { key: 'preferences', icon: SlidersHorizontal, label: 'Preferences', to: `${base}/notification-settings` },
    { key: 'notifications', icon: Bell, label: 'Notifications', to: `${base}/notifications` },
    { key: 'security', icon: ShieldCheck, label: 'Security', to: `${base}/settings` },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-9 w-9 rounded-full overflow-hidden border border-border hover:ring-2 hover:ring-primary/30 transition-all flex items-center justify-center bg-primary/10 text-primary text-sm font-semibold outline-none">
          {initials}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 bg-card border-border">
        <DropdownMenuLabel>
          <div className="font-normal space-y-1">
            <p className="text-sm font-medium text-foreground">{name}</p>
            {email && <p className="text-xs text-muted-foreground truncate">{email}</p>}
            {role && (
              <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary capitalize">{role.replace(/_/g, ' ')}</span>
            )}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {items.map(i => (
          <DropdownMenuItem key={i.key} onClick={() => router.push(i.to)}>
            <i.icon size={15} className="mr-2" />{i.label}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        {items2.map(i => (
          <DropdownMenuItem key={i.key} onClick={() => router.push(i.to)}>
            <i.icon size={15} className="mr-2" />{i.label}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push("/login")} className="text-red-600 focus:text-red-600">
          <LogOut size={15} className="mr-2" />Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}