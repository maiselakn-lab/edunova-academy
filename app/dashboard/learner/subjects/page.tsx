"use client";
import LearnerSidebar from "@/components/sidebars/LearnerSidebar";
import TopNav from "@/components/TopNav";
import { Calculator, Atom, BookOpen, Activity, Globe, ArrowRight, Target, PlayCircle } from "lucide-react";
import Link from "next/link";

export default function LearnerSubjectsPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <LearnerSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1400px] mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div><h1 className="text-2xl font-bold text-gray-800 mb-1">My School Subjects</h1><p className="text-sm text-gray-500">Continue where you left off.</p></div>
            <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-bold text-sm border border-blue-200 flex items-center gap-2"><Target size={18}/> Grade 10</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Mathematics", code: "Gr 10", progress: 70, next: "Quadratic Equations", color: "bg-blue-500", icon: <Calculator size={24}/> },
              { title: "Physical Sciences", code: "Gr 10", progress: 45, next: "Newton's Laws", color: "bg-emerald-500", icon: <Atom size={24}/> },
              { title: "English", code: "Gr 10", progress: 85, next: "Poetry Analysis", color: "bg-purple-500", icon: <BookOpen size={24}/> },
            ].map((subject, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col">
                <div className="flex justify-between items-start mb-4"><div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${subject.color}`}>{subject.icon}</div><span className="bg-gray-100 text-gray-600 text-xs font-bold px-2.5 py-1 rounded-full">{subject.code}</span></div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{subject.title}</h3>
                <p className="text-xs text-gray-500 mb-6 flex items-center gap-1"><ArrowRight size={12}/> Next: {subject.next}</p>
                <div className="mt-auto">
                  <div className="flex justify-between text-xs font-bold text-gray-700 mb-1.5"><span>Progress</span><span>{subject.progress}%</span></div>
                  <div className="w-full bg-gray-100 rounded-full h-2 mb-4"><div className={`h-2 rounded-full ${subject.color}`} style={{ width: `${subject.progress}%` }}></div></div>
                  <Link href="/dashboard/learner/tutor" className="w-full py-2.5 rounded-lg border-2 border-gray-200 text-gray-700 font-bold text-sm flex items-center justify-center hover:bg-gray-50"><PlayCircle size={16} className="mr-2"/> Continue</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}