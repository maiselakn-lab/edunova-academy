"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function PublicNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Academies', href: '/academies' },
    { name: 'Courses', href: '/courses' },
    { name: 'Tutoring', href: '/tutoring' },
    { name: 'Research', href: '/research' },
    { name: 'Become a Tutor', href: '/become-a-tutor' },
    { name: 'Institutions', href: '/institutions' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-brand-navy text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              Think <span className="text-brand-sky">EduNova</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium hover:text-brand-sky transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden xl:flex items-center space-x-4">
            <Link href="/login" className="text-sm font-medium hover:text-brand-sky transition-colors">
              Login
            </Link>
            <Link 
              href="/register" 
              className="bg-brand-royal text-white px-5 py-2.5 rounded-md text-sm font-bold hover:bg-opacity-90 transition-all shadow-sm"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-brand-sky focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="xl:hidden bg-brand-navy border-t border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="block px-3 py-2 text-base font-medium text-white hover:text-brand-sky hover:bg-white/5 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col space-y-3">
              <Link href="/login" className="block text-center px-3 py-2 text-base font-medium text-white border border-white rounded-md" onClick={() => setIsOpen(false)}>
                Login
              </Link>
              <Link href="/register" className="block text-center px-3 py-2 text-base font-bold text-white bg-brand-royal rounded-md" onClick={() => setIsOpen(false)}>
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}