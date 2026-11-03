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
    key: 'academic',
    name: 'AcademicCore',
    title: 'Academic Management',
    icon: BookOpen,
    status: 'live',
    tagline: 'Sessions, terms, classes, subjects & curriculum',
    description: 'The academic backbone — configure sessions, terms, class levels, subjects, and the curriculum structure that every other module builds on.',
    capabilities: ['Sessions & terms', 'Class levels & sections', 'Subject catalog', 'Curriculum mapping', 'Academic calendar'],
    navItems: [
      { label: 'Classes', icon: BookOpen, path: '/classes' },
      { label: 'Academics', icon: Calendar, path: '/academics' },
    ],
    related: ['assessment', 'schedule', 'people'],
  },
  {
    key: 'assessment',
    name: 'AssessmentCore',
    title: 'Assessment & Grading',
    icon: Award,
    status: 'live',
    tagline: 'CA/exam entry, grades, cognitive·affective·psychomotor domains',
    description: 'Enter scores, auto-calculate grades, and generate report cards with configurable cognitive, affective, and psychomotor assessment domains.',
    capabilities: ['CA & exam score entry', 'Automatic grade calculation', 'Cognitive / affective / psychomotor domains', 'AI-assisted result comments', 'Result workflow & approval pipeline'],
    navItems: [
      { label: 'Results', icon: Award, path: '/results' },
    ],
    aiFeatures: ['Personalized result comments', 'Performance analysis', 'Report-card generation'],
    related: ['academic', 'report', 'intelligence'],
  },
  {
    key: 'admissions',
    name: 'AdmissionsCore',
    title: 'Admissions & Enrollment',
    icon: UserPlus,
    status: 'live',
    tagline: 'Online applications → acceptance → enrollment',
    description: 'Streamline the full admissions-to-enrollment journey — from public application forms through capacity-based intake to confirmed enrollment.',
    capabilities: ['Public application portal', 'Capacity-based intake', 'Application tracking & review', 'Admissions-to-enrollment workflow', 'Automated confirmation emails'],
    navItems: [
      { label: 'Enrollment Center', icon: UserPlus, path: '/enrollment' },
    ],
    related: ['people', 'academic', 'finance'],
  },
  {
    key: 'people',
    name: 'PeopleCore',
    title: 'People Management',
    icon: Users,
    status: 'live',
    tagline: 'Students, staff & multi-child parent accounts',
    description: 'The people layer — manage the full student lifecycle, staff records, and multi-child parent accounts with role-based access.',
    capabilities: ['Student lifecycle', 'Staff records & assignments', 'Multi-child parent accounts', 'Role-based access control', 'Student profiles'],
    navItems: [
      { label: 'Students', icon: GraduationCap, path: '/students' },
      { label: 'Staff', icon: Users, path: '/staff' },
      { label: 'Parents', icon: UserCog, path: '/parents' },
    ],
    related: ['attendance', 'assessment', 'finance'],
  },
  {
    key: 'attendance',
    name: 'AttendanceCore',
    title: 'Attendance Tracking',
    icon: ClipboardCheck,
    status: 'live',
    tagline: 'Real-time attendance with parent alerts',
    description: 'Record daily attendance in seconds with real-time sync, automated parent alerts, and attendance analytics.',
    capabilities: ['One-click class attendance', 'Per-student history', 'Attendance analytics', 'Automated parent alerts', 'Multi-campus sync'],
    navItems: [
      { label: 'Attendance', icon: ClipboardCheck, path: '/attendance' },
    ],
    related: ['people', 'connect', 'insight'],
  },
  {
    key: 'finance',
    name: 'FinanceCore',
    title: 'Finance & Fees',
    icon: Wallet,
    status: 'live',
    tagline: 'Fees, payments, debtor reconciliation & expenses',
    description: 'Track fees, record payments via configurable workflows (manual receipt, Paystack, cash), manage expenses, and reconcile debtors.',
    capabilities: ['Fee structures', 'Configurable payment workflows', 'Debtor reconciliation', 'Expense tracking', 'Financial reports'],
    navItems: [
      { label: 'Finance', icon: Wallet, path: '/finance' },
      { label: 'Subscription', icon: CreditCard, path: '/subscription' },
      { label: 'Add-on Marketplace', icon: Store, path: '/add-ons' },
      { label: 'Billing History', icon: Receipt, path: '/billing' },
    ],
    related: ['admissions', 'people', 'report'],
  },
  {
    key: 'hr',
    name: 'HRCore',
    title: 'HR & Employment',
    icon: Briefcase,
    status: 'live',
    tagline: 'Vacancies, applications, talent pool & payroll',
    description: 'Manage job vacancies, employment applications, talent pool, and staff HR records with payroll on the roadmap.',
    capabilities: ['Vacancy management', 'Application tracking', 'Talent pool', 'Staff HR records', 'Payroll processing (roadmap)'],
    navItems: [
      { label: 'Employment', icon: Briefcase, path: '/employment' },
    ],
    related: ['people', 'finance'],
  },
  {
    key: 'schedule',
    name: 'ScheduleCore',
    title: 'Scheduling & Timetable',
    icon: Calendar,
    status: 'beta',
    tagline: 'Events, calendar & AI timetable generation',
    description: 'Manage school events and the academic calendar. AI-assisted timetable generation with conflict detection is on the roadmap.',
    capabilities: ['Event management', 'Academic calendar', 'Term scheduling', 'AI timetable generation (roadmap)', 'Conflict detection (roadmap)'],
    navItems: [
      { label: 'Events', icon: Calendar, path: '/event-manager' },
    ],
    related: ['academic', 'assessment'],
  },
  {
    key: 'exam',
    name: 'ExamCore / CBT',
    title: 'Examinations & CBT',
    icon: MonitorPlay,
    status: 'live',
    tagline: 'Computer-based testing with question banks',
    description: 'Conduct computer-based tests with question banks, timed exams, and automatic grading. Offline-capable architecture is on the roadmap.',
    capabilities: ['Question banks', 'Timed exams', 'Auto-grading', 'Secure testing', 'Offline-capable mode (roadmap)'],
    navItems: [],
    portalLink: true,
    related: ['assessment', 'report', 'intelligence'],
  },
  {
    key: 'inventory',
    name: 'InventoryCore',
    title: 'Inventory & Assets',
    icon: Package,
    status: 'roadmap',
    tagline: 'Asset tracking & stock management',
    description: 'Track school assets, supplies, and equipment across campuses with real-time stock levels and low-stock alerts.',
    capabilities: ['Asset catalog', 'Stock movements', 'Low-stock alerts', 'Purchase orders', 'Multi-campus inventory'],
    navItems: [],
    related: ['finance'],
  },
  {
    key: 'library',
    name: 'LibraryCore',
    title: 'Library Management',
    icon: Library,
    status: 'roadmap',
    tagline: 'Books, borrowing & catalog',
    description: 'Track books, manage borrowing, and organise your school library collection with ISBN scanning and overdue alerts.',
    capabilities: ['Book catalog', 'Borrowing system', 'ISBN scanning', 'Due date tracking', 'Overdue alerts'],
    navItems: [],
    related: ['people', 'report'],
  },
  {
    key: 'hostel',
    name: 'HostelCore',
    title: 'Hostel & Boarding',
    icon: Building2,
    status: 'roadmap',
    tagline: 'Room allocation & resident management',
    description: 'Manage boarding facilities, room allocations, and hostel resident records with hostel billing and maintenance requests.',
    capabilities: ['Bed management', 'Room allocation', 'Check-in/out', 'Hostel billing', 'Maintenance requests'],
    navItems: [],
    related: ['people', 'finance'],
  },
  {
    key: 'transport',
    name: 'TransportCore',
    title: 'Transport & Routes',
    icon: Bus,
    status: 'roadmap',
    tagline: 'Buses, routes, drivers & transport fees',
    description: 'Manage school buses, routes, drivers, and student transportation assignments with transport billing.',
    capabilities: ['Route planning', 'Driver management', 'Student assignments', 'Transport fees', 'Vehicle tracking'],
    navItems: [],
    related: ['people', 'finance'],
  },
  {
    key: 'frontdesk',
    name: 'FrontDeskCore',
    title: 'Front Desk & Visitors',
    icon: DoorOpen,
    status: 'roadmap',
    tagline: 'Visitor management & front-desk logs',
    description: 'Manage visitor check-in/out, front-desk logs, and reception operations with photo capture and visitor badges.',
    capabilities: ['Visitor check-in/out', 'Visitor badges', 'Front-desk logs', 'Appointment scheduling', 'Security alerts'],
    navItems: [],
    related: ['connect', 'people'],
  },
  {
    key: 'connect',
    name: 'ConnectCore',
    title: 'Communication & Connect',
    icon: MessageSquare,
    status: 'live',
    tagline: 'WhatsApp, SMS, email & push notifications',
    description: 'Centralised multi-channel communication — notifications, announcements, and smart reminders across WhatsApp, SMS, email, and push.',
    capabilities: ['Multi-channel notifications', 'WhatsApp / SMS / email / push', 'Role-based targeting', 'Smart reminders', 'Digest & quiet hours'],
    navItems: [
      { label: 'Notifications', icon: MessageSquare, path: '/notifications' },
      { label: 'Reminders', icon: Clock, path: '/reminders' },
      { label: 'Notification Settings', icon: Settings, path: '/notification-settings' },
    ],
    related: ['people', 'insight'],
  },
  {
    key: 'report',
    name: 'ReportCore',
    title: 'Reports & Documents',
    icon: FileText,
    status: 'live',
    tagline: 'Report cards, broadsheets & QR-verified documents',
    description: 'Generate professional report cards, broadsheets, and official school documents with QR/digital verification for authenticity.',
    capabilities: ['Report card generation', 'Result broadsheets', 'AI executive reports', 'QR document verification', 'PDF export'],
    navItems: [],
    related: ['assessment', 'verify', 'intelligence'],
  },
  {
    key: 'verify',
    name: 'VerifyCore',
    title: 'Verification & Trust',
    icon: ShieldCheck,
    status: 'live',
    tagline: 'School verification & QR document authentication',
    description: 'Mandatory school verification (CAC, Ministry, ID) before activation, plus QR/digital verification for official documents.',
    capabilities: ['School verification (CAC, Ministry, ID)', 'QR document verification', 'Document authenticity', 'Audit trail', 'NDPC / privacy readiness'],
    navItems: [
      { label: 'Verification', icon: ShieldCheck, path: '/verification' },
    ],
    related: ['report', 'insight'],
  },
  {
    key: 'insight',
    name: 'InsightCore',
    title: 'Insights & Analytics',
    icon: BarChart3,
    status: 'live',
    tagline: 'Smart insights, health scores & performance analytics',
    description: 'Comprehensive dashboards and analytics — smart insights, workspace health scores, academic performance, and result-readiness.',
    capabilities: ['Smart insights engine', 'Workspace health score', 'Academic performance analytics', 'Result-readiness dashboards', 'Enrollment & finance trends'],
    navItems: [
      { label: 'Smart Insights', icon: BarChart3, path: '/smart-insights' },
    ],
    related: ['intelligence', 'report'],
  },
  {
    key: 'intelligence',
    name: 'IntelligenceCore / AcadAI',
    title: 'AcadAI Intelligence Layer',
    icon: Sparkles,
    status: 'beta',
    tagline: 'Evidence-based AI across every Core module',
    description: 'The intelligence layer — AI analyzes actual school data to generate result comments, lesson plans, schemes of work, worksheets, quizzes, and executive reports.',
    capabilities: ['AI result comments', 'AI report-card generation', 'AI lesson plans & schemes of work', 'AI worksheets & quizzes', 'AI executive reports', 'School-controlled AI tutor (roadmap)'],
    navItems: [
      { label: 'AcadAI Hub', icon: Sparkles, path: '/acad-ai' },
    ],
    aiFeatures: ['Personalized result comments', 'Lesson plans', 'Schemes of work', 'Worksheets', 'Quiz generation', 'Executive reports', 'Performance analysis'],
    related: ['assessment', 'report', 'insight', 'academic'],
  },
];

export const SIDEBAR_SECTIONS: SidebarSection[] = [
  {
    title: 'Overview',
    items: [
      { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
      { label: 'Core Modules', icon: LayoutGrid, path: '/modules' },
      { label: 'AcadAI Hub', icon: Sparkles, path: '/acad-ai' },
      { label: 'News & Updates', icon: Newspaper, path: '/news-updates' },
      { label: 'Smart Insights', icon: BarChart3, path: '/smart-insights' },
      { label: 'Notifications', icon: MessageSquare, path: '/notifications' },
    ],
  },
  {
    title: 'AcademicCore',
    items: [
      { label: 'Classes', icon: BookOpen, path: '/classes' },
      { label: 'Academics', icon: Calendar, path: '/academics' },
      { label: 'Attendance', icon: ClipboardCheck, path: '/attendance' },
      { label: 'Results', icon: Award, path: '/results' },
      { label: 'Events', icon: Calendar, path: '/event-manager' },
    ],
  },
  {
    title: 'PeopleCore',
    items: [
      { label: 'Students', icon: GraduationCap, path: '/students' },
      { label: 'Staff', icon: Users, path: '/staff' },
      { label: 'Parents', icon: UserCog, path: '/parents' },
      { label: 'Invitations', icon: MailPlus, path: '/invitations' },
      { label: 'Enrollment', icon: UserPlus, path: '/enrollment' },
      { label: 'Employment', icon: Briefcase, path: '/employment' },
    ],
  },
  {
    title: 'FinanceCore',
    items: [
      { label: 'Finance', icon: Wallet, path: '/finance' },
      { label: 'Subscription', icon: CreditCard, path: '/subscription' },
      { label: 'Add-ons', icon: Store, path: '/add-ons' },
      { label: 'Billing History', icon: Receipt, path: '/billing' },
      { label: 'Verification', icon: ShieldCheck, path: '/verification' },
    ],
  },
  {
    title: 'Operations',
    items: [
      { label: 'Schools', icon: School, path: '/schools', platformOnly: true },
      { label: 'Campuses', icon: Building2, path: '/campuses' },
      { label: 'Setup Center', icon: Rocket, path: '/onboarding', adminOnly: true },
      { label: 'Reminders', icon: Clock, path: '/reminders' },
      { label: 'Data Migration', icon: Database, path: '/data-migration' },
      { label: 'Recycle Bin', icon: Trash2, path: '/recycle-bin' },
    ],
  },
  {
    title: 'System',
    items: [
      { label: 'Settings', icon: Settings, path: '/settings' },
      { label: 'Branding', icon: Palette, path: '/branding' },
      { label: 'Notification Settings', icon: Settings, path: '/notification-settings' },
    ],
  },
];

export function getModuleByKey(key: string) {
  return CORE_MODULES.find((m) => m.key === key);
}

export function getLiveModules() {
  return CORE_MODULES.filter((m) => m.status === 'live');
}

export function getRoadmapModules() {
  return CORE_MODULES.filter((m) => m.status === 'roadmap');
}

export function getBetaModules() {
  return CORE_MODULES.filter((m) => m.status === 'beta');
}

export const STATUS_META = {
  live: { label: 'Live', color: 'emerald', badge: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800' },
  beta: { label: 'Beta', color: 'blue', badge: 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 border-blue-200 dark:border-blue-800' },
  roadmap: { label: 'Roadmap', color: 'slate', badge: 'bg-slate-100 text-slate-600 dark:bg-slate-800/60 dark:text-slate-400 border-slate-200 dark:border-slate-700' },
};