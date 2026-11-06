"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Search, ChevronDown, Heart } from 'lucide-react';

export default function PublicNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const megaMenus = {
    about: {
      columns: [
        {
          heading: "Introducing the Academy",
          links: [
            { name: "Welcome", href: "/about" },
            { name: "Vision, Mission & Values", href: "/about/vision" },
            { name: "Our History", href: "/about/history" },
            { name: "Strategic Plan", href: "/about/strategy" },
            { name: "Facts and Figures", href: "/about/facts" },
          ]
        },
        {
          heading: "Leadership",
          links: [
            { name: "Executive Management", href: "/about/leadership" },
            { name: "Academic Council", href: "/about/council" },
            { name: "Student Representative Council", href: "/about/src" },
            { name: "Annual Reports", href: "/about/reports" },
          ]
        },
        {
          heading: "Governance",
          links: [
            { name: "Institutional Partners", href: "/institutions" },
            { name: "AcadCoreOS Integration", href: "/about/acadcoreos" },
            { name: "POPIA Compliance", href: "/popia" },
            { name: "Policies & Terms", href: "/terms" },
          ]
        }
      ]
    },
    faculties: {
      columns: [
        {
          heading: "School Level",
          links: [
            { name: "Primary Academy", href: "/academies/primary" },
            { name: "Secondary Academy", href: "/academies/secondary" },
          ]
        },
        {
          heading: "Tertiary Level",
          links: [
            { name: "College & TVET Academy", href: "/academies/college" },
            { name: "University Academy", href: "/academies/university" },
          ]
        },
        {
          heading: "Specialised Support",
          links: [
            { name: "Research Support Centre", href: "/research" },
            { name: "AI Learning Assistant", href: "/ai-assistant" },
            { name: "Examination Preparation", href: "/exam-prep" },
            { name: "Online Tutoring", href: "/tutoring" },
          ]
        }
      ]
    },
    portals: {
      columns: [
        {
          heading: "Prospective Students",
          links: [
            { name: "Apply for Admission", href: "/register" },
            { name: "Check Application Status", href: "/status" },
            { name: "Student Fees Guide", href: "/fees" },
            { name: "Student Enquiries", href: "/contact" },
          ]
        },
        {
          heading: "Current Students",
          links: [
            { name: "Student Portal Login", href: "/login/student" },
            { name: "Virtual Classroom", href: "/portal/classroom" },
            { name: "Academic Calendar", href: "/calendar" },
            { name: "Student Records", href: "/portal/records" },
          ]
        },
        {
          heading: "Staff & Institutional",
          links: [
            { name: "Tutor Portal Login", href: "/login/tutor" },
            { name: "AcadCoreOS System", href: "https://acadcoreos.base44.app/" },
            { name: "Tutor Earnings", href: "/portal/earnings" },
            { name: "Submit Lesson Report", href: "/portal/reports" },
          ]
        }
      ]
    }
  };

  const handleMouseEnter = (menu: string) => setActiveDropdown(menu);
  const handleMouseLeave = () => setActiveDropdown(null);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-200 font-sans">
      
      {/* 1. Top Utility Bar */}
      <div className="bg-brand-navy text-gray-300 text-xs py-1.5">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-5">
            <Link href="/login/student" className="hover:text-white transition-colors">Student Portal</Link>
            <Link href="/login/tutor" className="hover:text-white transition-colors">Tutor Portal</Link>
            <a href="https://acadcoreos.base44.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-brand-gold font-medium">AcadCoreOS Login</a>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>
          <div className="flex space-x-5 items-center">
            <Link href="/search" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Search size={14} /> Search
            </Link>
            <Link href="/login" className="hover:text-white transition-colors font-medium border-l border-gray-600 pl-5">Login</Link>
            <Link href="/donate" className="bg-brand-gold text-brand-navy px-4 py-1 rounded font-bold hover:bg-yellow-500 transition-colors flex items-center gap-1">
              <Heart size={12} /> Donate
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main Header Area */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <img 
                src="/logo.png" 
                alt="Think EduNova Academy Logo" 
                className="h-16 md:h-20 w-auto object-contain" 
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex space-x-1 items-center h-full">
            <Link href="/" className="px-3 py-2 text-sm font-semibold text-brand-charcoal hover:text-brand-royal transition-colors">
              Home
            </Link>
            
            {/* About Dropdown */}
            <div 
              className="relative h-full flex items-center px-2 cursor-pointer group"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <span className="text-sm font-semibold text-brand-charcoal group-hover:text-brand-royal flex items-center gap-1 py-8">
                About Us <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
              </span>
              {activeDropdown === 'about' && (
                <div className="absolute top-[88px] left-0 w-[750px] bg-white shadow-2xl border-t-[3px] border-brand-gold p-8 grid grid-cols-3 gap-8 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {megaMenus.about.columns.map((col, idx) => (
                    <div key={idx}>
                      <h4 className="font-bold text-brand-navy mb-4 text-xs uppercase tracking-wider border-b border-gray-100 pb-2">{col.heading}</h4>
                      <ul className="space-y-3">
                        {col.links.map((link) => (
                          <li key={link.name}>
                            <Link href={link.href} className="text-sm text-gray-600 hover:text-brand-royal hover:translate-x-1 transition-all inline-block">{link.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Faculties Dropdown */}
            <div 
              className="relative h-full flex items-center px-2 cursor-pointer group"
              onMouseEnter={() => handleMouseEnter('faculties')}
              onMouseLeave={handleMouseLeave}
            >
              <span className="text-sm font-semibold text-brand-charcoal group-hover:text-brand-royal flex items-center gap-1 py-8">
                Faculties <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'faculties' ? 'rotate-180' : ''}`} />
              </span>
              {activeDropdown === 'faculties' && (
                <div className="absolute top-[88px] left-0 w-[750px] bg-white shadow-2xl border-t-[3px] border-brand-gold p-8 grid grid-cols-3 gap-8 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {megaMenus.faculties.columns.map((col, idx) => (
                    <div key={idx}>
                      <h4 className="font-bold text-brand-navy mb-4 text-xs uppercase tracking-wider border-b border-gray-100 pb-2">{col.heading}</h4>
                      <ul className="space-y-3">
                        {col.links.map((link) => (
                          <li key={link.name}>
                            <Link href={link.href} className="text-sm text-gray-600 hover:text-brand-royal hover:translate-x-1 transition-all inline-block">{link.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Portals Dropdown */}
            <div 
              className="relative h-full flex items-center px-2 cursor-pointer group"
              onMouseEnter={() => handleMouseEnter('portals')}
              onMouseLeave={handleMouseLeave}
            >
              <span className="text-sm font-semibold text-brand-charcoal group-hover:text-brand-royal flex items-center gap-1 py-8">
                Students & Staff <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'portals' ? 'rotate-180' : ''}`} />
              </span>
              {activeDropdown === 'portals' && (
                <div className="absolute top-[88px] right-0 w-[750px] bg-white shadow-2xl border-t-[3px] border-brand-gold p-8 grid grid-cols-3 gap-8 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {megaMenus.portals.columns.map((col, idx) => (
                    <div key={idx}>
                      <h4 className="font-bold text-brand-navy mb-4 text-xs uppercase tracking-wider border-b border-gray-100 pb-2">{col.heading}</h4>
                      <ul className="space-y-3">
                        {col.links.map((link) => (
                          <li key={link.name}>
                            {link.href.startsWith('http') ? (
                              <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-brand-royal hover:translate-x-1 transition-all inline-flex items-center gap-1">
                                {link.name} <span className="text-xs text-brand-royal">↗</span>
                              </a>
                            ) : (
                              <Link href={link.href} className="text-sm text-gray-600 hover:text-brand-royal hover:translate-x-1 transition-all inline-block">{link.name}</Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/community" className="px-3 py-2 text-sm font-semibold text-brand-charcoal hover:text-brand-royal transition-colors whitespace-nowrap">
              Community
            </Link>
            <Link href="/research" className="px-3 py-2 text-sm font-semibold text-brand-charcoal hover:text-brand-royal transition-colors whitespace-nowrap">
              Research
            </Link>
            <Link href="/library" className="px-3 py-2 text-sm font-semibold text-brand-charcoal hover:text-brand-royal transition-colors">
              Library
            </Link>
            <Link href="/news" className="px-3 py-2 text-sm font-semibold text-brand-charcoal hover:text-brand-royal transition-colors whitespace-nowrap">
              News
            </Link>
            <Link href="/become-a-tutor" className="px-3 py-2 text-sm font-semibold text-brand-charcoal hover:text-brand-royal transition-colors whitespace-nowrap">
              Tutor Careers
            </Link>
          </nav>

          {/* 3. The Gold CTA Block */}
          <div className="hidden lg:flex h-full">
            <Link href="/register" className="bg-brand-gold hover:bg-yellow-600 text-brand-navy font-bold text-sm px-8 flex items-center justify-center transition-colors">
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-navy hover:text-brand-royal focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link href="/" className="block px-3 py-3 text-base font-semibold text-brand-navy hover:bg-brand-grey rounded-md" onClick={() => setIsOpen(false)}>Home</Link>
            
            <div className="px-3 py-3">
              <span className="block text-base font-bold text-brand-navy mb-2">About Us</span>
              <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                {megaMenus.about.columns.flatMap(c => c.links).map(link => (
                  <Link key={link.name} href={link.href} className="block py-1 text-sm text-gray-600" onClick={() => setIsOpen(false)}>{link.name}</Link>
                ))}
              </div>
            </div>

            <div className="px-3 py-3">
              <span className="block text-base font-bold text-brand-navy mb-2">Faculties</span>
              <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                {megaMenus.faculties.columns.flatMap(c => c.links).map(link => (
                  <Link key={link.name} href={link.href} className="block py-1 text-sm text-gray-600" onClick={() => setIsOpen(false)}>{link.name}</Link>
                ))}
              </div>
            </div>

            <div className="px-3 py-3">
              <span className="block text-base font-bold text-brand-navy mb-2">Students & Staff</span>
              <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                {megaMenus.portals.columns.flatMap(c => c.links).map(link => (
                  link.href.startsWith('http') ? (
                    <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-gray-600" onClick={() => setIsOpen(false)}>{link.name} ↗</a>
                  ) : (
                    <Link key={link.name} href={link.href} className="block py-1 text-sm text-gray-600" onClick={() => setIsOpen(false)}>{link.name}</Link>
                  )
                ))}
              </div>
            </div>

            <Link href="/community" className="block px-3 py-3 text-base font-semibold text-brand-navy hover:bg-brand-grey rounded-md" onClick={() => setIsOpen(false)}>Community</Link>
            <Link href="/research" className="block px-3 py-3 text-base font-semibold text-brand-navy hover:bg-brand-grey rounded-md" onClick={() => setIsOpen(false)}>Research</Link>
            <Link href="/library" className="block px-3 py-3 text-base font-semibold text-brand-navy hover:bg-brand-grey rounded-md" onClick={() => setIsOpen(false)}>Library</Link>
            <Link href="/news" className="block px-3 py-3 text-base font-semibold text-brand-navy hover:bg-brand-grey rounded-md" onClick={() => setIsOpen(false)}>News</Link>
            <Link href="/become-a-tutor" className="block px-3 py-3 text-base font-semibold text-brand-navy hover:bg-brand-grey rounded-md" onClick={() => setIsOpen(false)}>Tutor Careers</Link>
            
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2">
              <Link href="/register" className="block w-full text-center bg-brand-gold text-brand-navy font-bold px-4 py-3 rounded-md" onClick={() => setIsOpen(false)}>
                Apply Now
              </Link>
              <Link href="/donate" className="block w-full text-center bg-brand-navy text-white font-bold px-4 py-3 rounded-md" onClick={() => setIsOpen(false)}>
                Donate
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}