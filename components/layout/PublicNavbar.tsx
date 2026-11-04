"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react";

export default function PublicNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/academy" },
    { label: "Curriculums", href: "#curriculum" },
    { label: "Why Choose Us", href: "#features" },
    { label: "For Institutions", href: "/institutions" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <div className="w-10 h-10 bg-[#0B132B] rounded-lg flex items-center justify-center text-white transition-transform group-hover:scale-105">
              <GraduationCap size={22} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-[18px] text-[#0B132B] tracking-tight leading-tight">Think EduNova</span>
              <span className="text-[10px] text-blue-600 font-bold tracking-wider uppercase">Academy</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className="text-[14px] font-semibold text-slate-600 hover:text-[#0B132B] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/login" className="text-[14px] font-bold text-slate-700 hover:text-[#0B132B] transition-colors">
              Login
            </Link>
            <Link href="/get-started" className="bg-[#0B132B] hover:bg-slate-800 text-white px-6 py-2.5 rounded-lg text-[14px] font-bold transition-all shadow-md">
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-[90vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white border-t border-slate-100 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="block text-[14px] font-semibold text-slate-600 hover:text-[#0B132B] py-3 border-b border-slate-50">
              {link.label}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <Link href="/login" onClick={() => setMobileOpen(false)} className="text-center text-[14px] font-bold border border-slate-200 py-3 rounded-lg text-slate-700 hover:bg-slate-50">
              Login
            </Link>
            <Link href="/get-started" onClick={() => setMobileOpen(false)} className="text-center text-[14px] font-bold bg-[#0B132B] text-white py-3 rounded-lg hover:bg-slate-800 shadow-md">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}