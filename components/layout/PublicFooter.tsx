import Link from "next/link";
import { Layers } from "lucide-react";

export default function PublicFooter() {
  const sections = [
    { title: "Product", links: ["Products", "Features", "Pricing", "Releases", "Security", "Demo Centre"] },
    { title: "Company", links: ["About", "Company", "Company Policy", "Workplace Policy", "Careers"] },
    { title: "Trust", links: ["Trust & Commitments", "DEI", "Environmental", "Social Impact", "Career Growth", "Work-Life Balance"] },
    { title: "Legal", links: ["Legal Centre", "Terms of Service", "Privacy Policy", "Cookie Policy", "Acceptable Use"] },
    { title: "Resources", links: ["Documentation", "FAQ", "Help Centre", "Blog", "Community", "Education News", "Testimonials", "Partners", "Contact"] },
  ];

  return (
    <footer className="bg-black text-slate-400 py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-8">
        <div className="col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white">
              <Layers size={14} />
            </div>
            <span className="font-bold text-lg text-white tracking-tight">AcadCoreOS</span>
          </Link>
          <p className="text-sm leading-relaxed max-w-xs mb-6">
            The all-in-one operating system for modern schools. Manage campuses, academics, and student life in a single workspace.
          </p>
        </div>
        {sections.map((section) => (
          <div key={section.title}>
            <h4 className="text-sm font-semibold text-white mb-4">{section.title}</h4>
            <ul className="space-y-2 text-sm">
              {section.links.map((link) => (
                <li key={link}><Link href="#" className="hover:text-white transition-colors">{link}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs">© 2026 AcadCoreOS. All rights reserved.</p>
        <div className="flex gap-4 text-xs">
          <Link href="#" className="hover:text-white">Terms</Link>
          <Link href="#" className="hover:text-white">Privacy</Link>
          <Link href="#" className="hover:text-white">Cookies</Link>
        </div>
        <p className="text-xs flex items-center gap-1">
          Made with <span className="text-red-500">♥</span> by Blueman Designs
        </p>
      </div>
    </footer>
  );
}