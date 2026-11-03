import {
  LayoutDashboard, LayoutGrid, BookOpen, Calendar, ClipboardCheck, Award,
  UserPlus, GraduationCap, Users, UserCog, Wallet, CreditCard, Store, Receipt,
  Briefcase, MonitorPlay, Package, Library, Building2, Bus, DoorOpen,
  MessageSquare, FileText, ShieldCheck, BarChart3, Sparkles, Bot, Newspaper,
  Clock, Database, School, Settings, Palette, Rocket, QrCode, Network, Cpu,
  TrendingUp, Trash2, MailPlus,
} from 'lucide-react';
import type { LucideIcon } from "lucide-react";

export type CoreModule = {
  key: string; name: string; title: string; icon: LucideIcon;
  status: "live" | "beta" | "roadmap"; tagline: string; description: string;
  capabilities: string[]; navItems: { label: string; icon: LucideIcon; path: string }[];
  related: string[]; aiFeatures?: string[]; portalLink?: boolean;
};

export type SidebarSection = {
  title: string;
  items: { label: string; icon: LucideIcon; path: string; platformOnly?: boolean; adminOnly?: boolean }[];
};

export const CORE_MODULES: CoreModule[] = [
  {
    key: 'academic', name: 'AcademicCore', title: 'Academic Management', icon: BookOpen, status: 'live',
    tagline: 'Sessions, terms, classes, subjects & curriculum', description: 'The academic backbone.',
    capabilities: ['Sessions & terms', 'Class levels'], navItems: [{ label: 'Classes', icon: BookOpen, path: '/classes' }], related: ['assessment']
  },
];

export const SIDEBAR_SECTIONS: SidebarSection[] = [
  {
    title: 'Overview',
    items: [
      { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
      { label: 'Core Modules', icon: LayoutGrid, path: '/modules' },
      { label: 'AcadAI Hub', icon: Sparkles, path: '/acad-ai' },
    ],
  },
  {
    title: 'AcademicCore',
    items: [
      { label: 'Classes', icon: BookOpen, path: '/classes' },
      { label: 'Academics', icon: Calendar, path: '/academics' },
      { label: 'Results', icon: Award, path: '/results' },
    ],
  },
];