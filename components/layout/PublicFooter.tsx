import Link from "next/link";

export default function PublicFooter() {
  const sections = [
    { title: "Product", links: [{ label: "Features", to: "/products/features" }, { label: "Pricing", to: "/pricing" }, { label: "Security", to: "/security" }] },
    { title: "Company", links: [{ label: "About", to: "/about" }, { label: "Careers", to: "/company/careers" }] },
    { title: "Legal", links: [{ label: "Terms", to: "/legal/terms" }, { label: "Privacy", to: "/legal/privacy" }] },
    { title: "Resources", links: [{ label: "FAQ", to: "/resources/faq" }, { label: "Blog", to: "/blog" }, { label: "Contact", to: "/#contact" }] },
  ];

  return (
    <footer className="bg-[#0A1628] text-slate-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-white font-bold text-xs">A</div>
              <span className="font-bold text-lg text-white">AcadCoreOS</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-slate-400">
              The all-in-one operating system for modern schools. Manage campuses, academics, and student life in a single workspace.
            </p>
          </div>
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-white mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.to} className="text-sm hover:text-white transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs">© 2026 AcadCoreOS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}