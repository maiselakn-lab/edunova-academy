"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';

export default function PublicNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About EduNova', href: '/about' },
    { name: 'Faculties', href: '/academies' },
    { name: 'Admissions', href: '/register' },
    { name: 'Research', href: '/research' },
    { name: 'Tutor Careers', href: '/become-a-tutor' },
    { name: 'Institutional Partners', href: '/institutions' },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-200">
      {/* Institutional Top Utility Bar */}
      <div className="bg-brand-navy text-gray-300 text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-4">
            <Link href="/portal" className="hover:text-white transition-colors">Student Portal</Link>
            <Link href="/portal" className="hover:text-white transition-colors">Staff Portal</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/login" className="hover:text-white transition-colors font-medium">Login</Link>
            <Link href="/register" className="text-brand-gold hover:text-white transition-colors font-medium">Apply Now</Link>
          </div>
        </div>
      </div>

      {/* Main Institutional Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Crest / Logo Area */}
          <div className="flex-shrink-0 flex items-center gap-3">
            {/* Placeholder for a proper institutional crest */}
            <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center text-brand-gold font-serif font-bold text-xl border-2 border-brand-gold">
              EN
            </div>
            <div className="flex flex-col">
              <Link href="/" className="text-xl md:text-2xl font-bold text-brand-navy tracking-tight leading-none">
                Think EduNova
              </Link>
              <span className="text-xs text-brand-royal font-semibold tracking-widest uppercase mt-1">
                Academy & Research
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-sm font-semibold text-brand-charcoal hover:text-brand-royal transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button className="text-brand-charcoal hover:text-brand-royal">
              <Search size={20} />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-navy hover:text-brand-royal focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="block px-3 py-3 text-base font-semibold text-brand-navy hover:bg-brand-grey rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}