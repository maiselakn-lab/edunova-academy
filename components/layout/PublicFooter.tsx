import Link from "next/link";
import { Layers } from "lucide-react";

export default function PublicFooter() {
  const sections = [
    {
      title: "Product",
      links: [
        { label: "Products", href: "/products" },
        { label: "Features", href: "/products/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Releases", href: "/products/releases" },
        { label: "Security", href: "/security" },
        { label: "Demo Centre", href: "/demo" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Company", href: "/company" },
        { label: "Company Policy", href: "/company/policy" },
        { label: "Workplace Policy", href: "/company/workplace" },
        { label: "Careers", href: "/company/careers" },
      ],
    },
    {
      title: "Trust",
      links: [
        { label: "Trust & Commitments", href: "/trust" },
        { label: "DEI", href: "/trust/dei" },
        { label: "Environmental", href: "/trust/environment" },
        { label: "Social Impact", href: "/trust/social-impact" },
        { label: "Career Growth", href: "/trust/career-growth" },
        { label: "Work-Life Balance", href: "/trust/work-life-balance" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Legal Centre", href: "/legal" },
        { label: "Terms of Service", href: "/legal/terms" },
        { label: "Privacy Policy", href: "/legal/privacy" },
        { label: "Cookie Policy", href: "/legal/cookies" },
        { label: "Acceptable Use", href: "/legal/acceptable-use" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/resources/docs" },
        { label: "FAQ", href: "/resources/faq" },
        { label: "Help Centre", href: "/resources/help" },
        { label: "Blog", href: "/blog" },
        { label: "Community", href: "/community" },
        { label: "Education News", href: "/education-news" },
        { label: "Testimonials", href: "/testimonials" },
        { label: "Partners", href: "/resources/partners" },
        { label: "Contact", href: "/#contact" },
      ],
    },
  ];

  return (
    <footer className="bg-black text-slate-400 py-16 px-6 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">
          
          {/* Brand Column (Spans 2 on mobile, 3 on desktop) */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 max-w-xs">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white transition-transform group-hover:scale-105">
                <Layers size={18} />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">AcadCoreOS</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              The all-in-one operating system for modern schools. Manage campuses, academics, and student life in a single workspace.
            </p>
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
            © 2026 AcadCoreOS. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-xs text-slate-500 font-medium">
            <Link href="/legal/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/legal/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>

          <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
            Made with <span className="text-red-500">♥</span> by Blueman Designs
          </p>
        </div>

      </div>
    </footer>
  );
}