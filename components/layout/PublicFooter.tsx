import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function PublicFooter() {
  const sections = [
    {
      title: "The Academy",
      links: [
        { label: "About Think EduNova", href: "#about" },
        { label: "Our Curriculums", href: "#curriculum" },
        { label: "Admissions", href: "#admissions" },
        { label: "Tutor Application", href: "#tutor-apply" },
        { label: "Contact Us", href: "#contact" },
      ],
    },
    {
      title: "Portals",
      links: [
        { label: "Student Portal", href: "/login" },
        { label: "Parent Portal", href: "/login" },
        { label: "Tutor Portal", href: "/login" },
        { label: "Admin Portal", href: "/login" },
      ],
    },
    {
      title: "AcadCoreOS (Platform)",
      links: [
        { label: "About AcadCoreOS", href: "/about" }, // Links to the page you just sent
        { label: "19 Core Modules", href: "#features" },
        { label: "Security & Trust", href: "/security" },
        { label: "Pricing", href: "/pricing" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { label: "Think Tank Blog", href: "#news" },
        { label: "Social & Clubs", href: "#social" },
        { label: "Track Application", href: "/track" },
        { label: "FAQs", href: "/faq" },
      ],
    },
  ];

  return (
    <footer className="bg-[#04080F] text-slate-400 py-16 px-6 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 max-w-sm">
            <Link href="/" className="flex items-center gap-2.5 mb-6 group">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white transition-transform group-hover:scale-105">
                <GraduationCap size={22} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white tracking-tight leading-tight">Think EduNova</span>
                <span className="text-xs text-orange-500 font-medium tracking-wider uppercase">Academy</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Internationally acclaimed online school providing world-class learning through CAPS, British International, and GED curricula.
            </p>
            <div className="flex gap-2">
                {[1,2,3,4].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-orange-500 hover:border-orange-500/50 cursor-pointer transition-all">
                    <span className="text-xs font-bold">{["F", "X", "I", "L"][i]}</span>
                  </div>
                ))}
            </div>
          </div>

          {/* Links Columns */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-bold text-white mb-5 tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-3.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500 font-medium">
            © 2026 Think EduNova Academy. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4 text-xs text-slate-500 font-medium bg-white/5 px-4 py-2 rounded-full border border-white/5">
            <span>Powered by</span>
            <Link href="/about" className="text-white font-bold tracking-tight hover:text-orange-400 transition-colors">AcadCoreOS</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}