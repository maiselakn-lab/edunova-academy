"use client";
import { Home, BookOpen, Bot, Video, ClipboardList, Users, Calendar, MessageSquare, Settings, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function LearnerSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const navGroups = [
    { title: "Learning", items: [
      { name: "Dashboard", icon: Home, href: "/dashboard/learner" },
      { name: "AI Tutor", icon: Bot, href: "/dashboard/learner/tutor" },
      { name: "My Subjects", icon: BookOpen, href: "/dashboard/learner/subjects" },
      { name: "Live Classes", icon: Video, href: "/dashboard/learner/live" },
      { name: "Practice Tests", icon: ClipboardList, href: "/dashboard/learner/practice" },
    ]},
    { title: "Tutoring", items: [
      { name: "Request a Tutor", icon: Users, href: "/dashboard/learner/tutors" },
      { name: "My Sessions", icon: Calendar, href: "/dashboard/learner/sessions" },
    ]},
    { title: "Account", items: [
      { name: "Messages", icon: MessageSquare, href: "/dashboard/learner/messages", badge: 3 },
      { name: "Settings", icon: Settings, href: "/dashboard/learner/settings" },
    ]}
  ];

  return (
    <aside className="w-[260px] bg-[#333333] text-white h-screen flex flex-col fixed left-0 top-0 border-r border-gray-700 z-30">
      
      {/* LOGO SECTION */}
      <div className="pt-6 pb-4 flex flex-col items-center border-b border-gray-700 shrink-0">
         <div className="flex flex-col items-center mb-4">
            <BookOpen size={36} className="text-[#D1007B] mb-1" strokeWidth={2.5} />
            <div className="text-[#D1007B] text-2xl font-black italic tracking-tighter leading-none">THINK</div>
            <p className="text-gray-400 text-[8px] tracking-[0.3em] font-bold uppercase mt-1">EduNova Academy</p>
         </div>
         <span className="bg-[#009CA6] text-white text-[9px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">Learner Portal</span>
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 px-3 space-y-4 overflow-y-auto pb-4 pt-4">
        {navGroups.map((group, idx) => (
          <div key={idx}>
            <p className="px-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">{group.title}</p>
            <div className="space-y-0.5">
              {group.items.map((item) => (
                <Link key={item.name} href={item.href} className={`flex items-center justify-between px-3 py-2 text-[13px] rounded-lg transition-colors ${pathname === item.href ? "bg-[#009CA6] text-white font-medium shadow-md" : "text-gray-300 hover:bg-white/10"}`}>
                  <div className="flex items-center gap-3"><item.icon size={16} />{item.name}</div>
                  {item.badge && <span className="bg-[#D1007B] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">{item.badge}</span>}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* SIGN OUT */}
      <div className="p-3 border-t border-gray-700">
        <button onClick={() => router.push("/login")} className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-[#D1007B] hover:bg-red-500/10 transition-colors text-[13px] font-medium">
          <LogOut size={16} /> Sign Out
        </button>
      </div>
    </aside>
  );
}