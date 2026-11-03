"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePublicTheme } from "@/lib/PublicThemeContext";

export default function PublicNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setGalleryOpen } = usePublicTheme();

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Features", to: "/products/features" },
    { label: "Explore Demo", to: "/explore" },
    { label: "Pricing", to: "/pricing" },
    { label: "Education News", to: "/education-news" },
    { label: "Community", to: "/community" },
    { label: "Blog", to: "/blog" },
    { label: "About", to: "/about" },
    { label: "Resources", to: "/resources" },
    { label: "Contact", to: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-sm">
              A
            </div>
            <span className="font-bold text-lg text-foreground tracking-tight">AcadCoreOS</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.to} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setGalleryOpen(true)}
              className="w-9 h-9 rounded-lg border border-border hover:bg-accent flex items-center justify-center transition-colors text-muted-foreground"
              title="Theme Gallery"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="13.5" cy="6.5" r="2.5" /><circle cx="19" cy="13" r="2.5" /><circle cx="6.5" cy="6.5" r="2.5" /><circle cx="10.5" cy="19" r="2.5" />
                <path d="M12 2a10 10 0 0 0 0 20c1 0 2-.5 2-1.5 0-.7-.3-1-.6-1.4-.3-.4-.5-.8-.5-1.3 0-1 1-1.8 2-1.8h2.1A4.9 4.9 0 0 0 22 12C22 6.5 17.5 2 12 2Z" />
              </svg>
            </button>
            <Link href="/login" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Login
            </Link>
            <Link href="/get-started" className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button className="p-2 rounded-lg bg-background border border-border" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.to} onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-muted-foreground hover:text-primary">
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-border flex flex-col gap-2">
            <Link href="/login" className="text-center text-sm font-medium border border-border py-2 rounded-lg text-foreground hover:bg-accent">
              Login
            </Link>
            <Link href="/get-started" className="text-center text-sm font-medium bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}