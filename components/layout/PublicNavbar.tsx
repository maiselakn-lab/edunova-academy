"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Target, Layers, ChevronDown, Monitor } from "lucide-react";
import { usePublicTheme } from "@/lib/PublicThemeContext";

export default function PublicNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setGalleryOpen } = usePublicTheme();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "#features" },
    { label: "Explore Demo", href: "#demo" },
    { label: "Pricing", href: "#pricing" },
    { label: "Education News", href: "#news" },
    { label: "Community", href: "#community" },
    { label: "Blog", href: "#blog" },
    { label: "About", href: "#about" },
    { label: "Company", href: "#company" },
    { label: "Resources", href: "#resources" },
    { label: "FAQs", href: "#faq" },
    { label: "Partners", href: "#partners" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#08101A]/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-[#1E293B] rounded flex items-center justify-center text-white">
              <Layers size={18} />
            </div>
            <span className="font-bold text-lg text-white tracking-tight hidden sm:block">AcadCoreOS</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.slice(0, 9).map((link) => (
              <Link key={link.label} href={link.href} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
            <div className="relative group">
              <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1">
                More <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-[#0F1926] border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {navLinks.slice(9).map((link) => (
                  <Link key={link.label} href={link.href} className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setGalleryOpen(true)}
              className="p-2 text-slate-400 hover:text-white transition-colors border border-white/10 rounded-lg"
              title="Theme Gallery"
            >
              <Target size={18} />
            </button>
            <button className="p-2 text-slate-400 hover:text-white transition-colors border border-white/10 rounded-lg">
              <Monitor size={18} />
            </button>
            <Link href="/login" className="text-sm font-medium text-white hover:text-orange-400 px-3">
              Login
            </Link>
            <Link href="/track" className="bg-transparent border border-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors">
              Track Application
            </Link>
            <Link href="/get-started" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button className="p-2 rounded-lg text-white" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#08101A] px-6 py-4 space-y-3 h-[calc(100vh-4rem)] overflow-y-auto">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-slate-300 hover:text-white py-2 border-b border-white/5">
              {link.label}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <Link href="/login" className="text-center text-sm font-medium border border-white/20 py-2 rounded-lg text-white">
              Login
            </Link>
            <Link href="/track" className="text-center text-sm font-medium border border-white/20 py-2 rounded-lg text-white">
              Track Application
            </Link>
            <Link href="/get-started" className="text-center text-sm font-medium bg-orange-500 text-white py-2 rounded-lg">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}