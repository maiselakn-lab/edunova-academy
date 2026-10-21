"use client";
import { Mail, Phone, MapPin, ShieldCheck, Globe } from "lucide-react";
import Link from "next/link";

export default function AcademyFooter() {
  return (
    <footer className="bg-[#0B132B] text-white pt-12 pb-6 px-8 border-t border-slate-800 mt-auto">
      <div className="max-w-[1400px] mx-auto grid grid-cols-4 gap-8 mb-12">
        
        {/* Brand & Mission */}
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L24 2L28 6L32 4L34 8L38 10L36 14L40 18L36 22V28L30 30L28 36L22 34L18 38L14 34L8 36L6 30L2 28V22L4 18L0 14L4 10L6 4L10 6L14 2L18 6Z" fill="#38BDF8" opacity="0.3"/>
              <path d="M20 10C20 10 15 15 5 15V30C15 30 20 25 20 25C20 25 25 30 35 30V15C25 15 20 10 20 10Z" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M20 25V10" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="20" cy="5" r="2" fill="#38BDF8" />
            </svg>
            <h1 className="text-2xl font-bold tracking-tight">Edu<span className="text-[#38BDF8]">Nova</span></h1>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed mb-6">
            Empowering every learner across South Africa with world-class AI tutoring, CAPS-aligned content, and expert human support.
          </p>
          <div className="flex gap-4 text-sm font-bold text-slate-400">
            <a href="#" className="hover:text-[#38BDF8] transition-colors">Facebook</a>
            <a href="#" className="hover:text-[#38BDF8] transition-colors">Twitter</a>
            <a href="#" className="hover:text-[#38BDF8] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[#38BDF8] transition-colors">YouTube</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-slate-200">Academy</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link href="#" className="hover:text-[#38BDF8] transition-colors">About Us</Link></li>
            <li><Link href="#" className="hover:text-[#38BDF8] transition-colors">Our Curriculum</Link></li>
            <li><Link href="#" className="hover:text-[#38BDF8] transition-colors">Meet the Tutors</Link></li>
            <li><Link href="#" className="hover:text-[#38BDF8] transition-colors">Careers</Link></li>
            <li><Link href="#" className="hover:text-[#38BDF8] transition-colors">Blog & News</Link></li>
          </ul>
        </div>

        {/* Support & Legal */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-slate-200">Support</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link href="#" className="hover:text-[#38BDF8] transition-colors">Help Center</Link></li>
            <li><Link href="#" className="hover:text-[#38BDF8] transition-colors">Contact Support</Link></li>
            <li><Link href="#" className="hover:text-[#38BDF8] transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-[#38BDF8] transition-colors">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-[#38BDF8] transition-colors">POPIA Compliance</Link></li>
          </ul>
        </div>

        {/* Contact & Trust */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-slate-200">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-slate-400 mb-6">
            <li className="flex items-center gap-2"><Mail size={16}/> support@edunova.co.za</li>
            <li className="flex items-center gap-2"><Phone size={16}/> +27 (0) 10 123 4567</li>
            <li className="flex items-center gap-2"><MapPin size={16}/> Sandton, Johannesburg, SA</li>
          </ul>
          <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-800/50 p-2 rounded-lg border border-slate-700">
             <ShieldCheck size={16} className="text-emerald-500"/> 
             <span>Secure & POPIA Compliant</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1400px] mx-auto pt-6 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} EduNova Academy. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><Globe size={12}/> English (South Africa)</span>
          <span>Designed for South African Learners</span>
        </div>
      </div>
    </footer>
  );
}