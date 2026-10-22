"use client";
import Link from "next/link";
import { BookOpen, ArrowLeft, Users } from "lucide-react";

export default function SocialPage() {
  return (
    <div className="min-h-screen bg-[#F4F4F4] font-sans">
      <div className="bg-[#009CA6] text-white py-4 px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <BookOpen size={32} className="text-white" />
          <div>
            <div className="text-2xl font-black italic tracking-tighter">THINK</div>
            <p className="text-[8px] tracking-[0.2em] font-bold uppercase">EduNova Academy</p>
          </div>
        </Link>
        <Link href="/login" className="bg-white text-[#009CA6] px-4 py-1.5 rounded-full font-bold text-sm">Login</Link>
      </div>
      
      <main className="flex items-center justify-center min-h-[80vh] p-4">
        <div className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-lg w-full">
          <div className="bg-green-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users size={40} className="text-[#009CA6]" />
          </div>
          <h1 className="text-3xl font-bold text-[#333] mb-4">Clubs & Fraternities</h1>
          <p className="text-gray-500 mb-8">Join our virtual clubs, from Art and Science to Dance and Yoga.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-[#009CA6] text-white px-8 py-3 rounded-full font-bold hover:bg-[#00828A] transition-colors">
            <ArrowLeft size={18}/> Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}