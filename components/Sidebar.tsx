"use client";

import { 
  Home, BookOpen, Bot, Video, Library, FileText, MessageSquare, 
  Settings, Globe, ClipboardList, ChevronRight, Users, Calendar, 
  Award, ShieldCheck, LogOut
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navGroups = [
    {
      title: "Learning",
      items: [
        { name: "Home", icon: Home, href: "/" },
        { name: "My Learning", icon: BookOpen, href: "/learning" },
        { name: "AI Tutor", icon: Bot, href: "/tutor" },
        { name: "Live Classes", icon: Video, href: "/live" },
        { name: "Courses & Subjects", icon: Library, href: "/courses" },
        { name: "Practice & Assessments", icon: ClipboardList, href: "/practice" },
        { name: "Homework Help", icon: FileText, href: "/homework" },
        { name: "Resources Library", icon: BookOpen, href: "/resources" },
      ]
    },
    {
      title: "Tutoring Marketplace",
      items: [
        { name: "Request a Tutor", icon: Users, href: "/tutors" },
        { name: "My Tutoring", icon: Calendar, href: "/my-tutoring" },
        { name: "Become a Tutor", icon: Award, href: "/become-a-tutor" },
      ]
    },
    {
      title: "Account & System",
      items: [
        { name: "Progress & Reports", icon: ClipboardList, href: "/progress" },
        { name: "Messages", icon: MessageSquare, href: "/messages", badge: 3 },
        { name: "Settings", icon: Settings, href: "/settings" },
      ]
    },
    {
      title: "Administration",
      items: [
        { name: "Admin Dashboard", icon: ShieldCheck, href: "/admin/tutors" },
      ]
    }
  ];

  return (
    <aside className="w-[260px] bg-[#0A192F] text-white h-screen flex flex-col fixed left-0 top-0 border-r border-gray-800 z-30">
      
      {/* Logo Area */}
      <div className="pt-6 pb-4 flex flex-col items-center border-b border-gray-800/50 shrink-0">
        <div className="flex items-center gap-2 mb-1">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L24 2L28 6L32 4L34 8L38 10L36 14L40 18L36 22V28L30 30L28 36L22 34L18 38L14 34L8 36L6 30L2 28V22L4 18L0 14L4 10L6 4L10 6L14 2L18 6Z" fill="#0070F3" opacity="0.3"/>
            <path d="M20 10C20 10 15 15 5 15V30C15 30 20 25 20 25C20 25 25 30 35 30V15C25 15 20 10 20 10Z" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <path d="M20 25V10" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="20" cy="5" r="2" fill="#0070F3" />
          </svg>
          <h1 className="text-[24px] font-bold tracking-tight">
            Edu<span className="text-[#38BDF8]">Nova</span>
          </h1>
        </div>
        <p className="text-[10px] tracking-[0.3em] text-gray-400 font-semibold uppercase">Academy</p>
      </div>

      {/* Navigation Links grouped by category */}
      <nav className="flex-1 px-3 space-y-4 overflow-y-auto pb-4 pt-4 custom-scrollbar">
        {navGroups.map((group, idx) => (
          <div key={idx}>
            <p className="px-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">{group.title}</p>
            <div className="space-y-0.5">
              {group.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center justify-between px-3 py-2 text-[13px] rounded-lg transition-colors ${
                      isActive ? "bg-[#1D4ED8] text-white font-medium shadow-sm" : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon size={16} className={isActive ? "text-white" : "text-gray-400"} />
                      <span>{item.name}</span>
                    </div>
                    {item.badge && (
                      <span className="bg-[#EF4444] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Bottom Sidebar Section */}
      <div className="p-3 mt-auto border-t border-gray-800/50 bg-[#0A192F] shrink-0">
        <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#112240] border border-gray-700/50 cursor-pointer text-sm hover:bg-[#1A2E4C] transition-colors mb-2">
          <div className="flex items-center gap-2">
            <Globe size={16} className="text-blue-400" />
            <div>
              <p className="text-white font-medium text-xs">English</p>
            </div>
          </div>
          <ChevronRight size={14} className="text-gray-400" />
        </div>
        <Link href="/login" className="flex items-center gap-2 px-3 py-2 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors text-[13px] font-medium">
          <LogOut size={16} /> Sign Out
        </Link>
      </div>
    </aside>
  );
}