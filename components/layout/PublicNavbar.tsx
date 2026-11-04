"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Target, BookOpen, ChevronDown, Monitor, GraduationCap } from "lucide-react";
import { usePublicTheme } from "@/lib/PublicThemeContext";

export default function PublicNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setGalleryOpen } = usePublicTheme();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#about" },
    { label: "Academics", href: "#features" },
    { label: "Admissions", href: "#admissions" },
    { label: "School Life", href: "#demo" },
    { label: "News & Events", href: "#news" },
    { label: "Contact", href: "#contact" },
    { label: "FAQs", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#08101A]/95 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* School Logo & Name */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group mr-4">
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white transition-transform group-hover:scale-105">
              <GraduationCap size={18} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[16px] text-white tracking-tight leading-tight">THINK EduNova</span>
              <span className="text-[10px] text-orange-500 font-medium tracking-wider uppercase">Academy</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className="text-[14px] font-medium text-slate-300 hover:text-white px-3 py-2 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-2 ml-4">
            <button
              onClick={() => setGalleryOpen(true)}
              className="w-9 h-9 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all border border-white/10 rounded-lg"
              title="Theme Gallery"
            >
              <Target size={17} />
            </button>
            
            <div className="w-px h-6 bg-white/10 mx-2"></div>

            <Link href="/login" className="text-[14px] font-medium text-white hover:text-orange-400 px-3 transition-colors">
              Parent Portal
            </Link>
            <Link href="/track" className="bg-transparent border border-white/20 text-white px-4 py-2 rounded-lg text-[14px] font-medium hover:bg-white/5 transition-all">
              Track Application
            </Link>
            <Link href="/get-started" className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg text-[14px] font-medium transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 ml-1">
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-[#08101A] border-t border-white/10 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="block text-[14px] font-medium text-slate-300 hover:text-white py-2.5 border-b border-white/5">
              {link.label}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <Link href="/login" onClick={() => setMobileOpen(false)} className="text-center text-[14px] font-medium border border-white/20 py-2.5 rounded-lg text-white hover:bg-white/5">
              Parent Portal
            </Link>
            <Link href="/track" onClick={() => setMobileOpen(false)} className="text-center text-[14px] font-medium border border-white/20 py-2.5 rounded-lg text-white hover:bg-white/5">
              Track Application
            </Link>
            <Link href="/get-started" onClick={() => setMobileOpen(false)} className="text-center text-[14px] font-medium bg-orange-500 text-white py-2.5 rounded-lg hover:bg-orange-600 shadow-lg shadow-orange-500/20">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}