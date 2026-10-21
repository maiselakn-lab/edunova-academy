"use client";
import TutorSidebar from "@/components/sidebars/TutorSidebar";
import TopNav from "@/components/TopNav";
import { Save, PlusCircle, BookOpen, FileText, CheckCircle2 } from "lucide-react";

export default function CreateLessonPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <TutorSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[900px] mx-auto">
          
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">Create New Lesson</h1>
            <p className="text-sm text-gray-500">Add content to the academic library. All lessons are reviewed before publishing.</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
             <form className="space-y-6">
                
                {/* Basic Info */}
                <div className="space-y-4">
                   <h2 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-2 flex items-center gap-2"><BookOpen size={18} className="text-emerald-500"/> Lesson Information</h2>
                   <div className="grid grid-cols-2 gap-4">
                      <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">Lesson Title</label>
                         <input type="text" placeholder="e.g. Introduction to Quadratic Equations" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500" />
                      </div>
                      <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">Subject & Grade</label>
                         <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 bg-white">
                            <option>Mathematics - Grade 10</option>
                            <option>Physical Sciences - Grade 10</option>
                            <option>English - Grade 10</option>
                         </select>
                      </div>
                   </div>
                   <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Learning Objectives (What will the student learn?)</label>
                      <textarea rows={2} placeholder="e.g. Understand the standard form of a quadratic equation..." className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500"></textarea>
                   </div>
                </div>

                {/* Content */}
                <div className="space-y-4 pt-4">
                   <h2 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-2 flex items-center gap-2"><FileText size={18} className="text-emerald-500"/> Lesson Content</h2>
                   <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Detailed Explanation</label>
                      <textarea rows={8} placeholder="Write the main content here. You can use the AI to help draft this." className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500"></textarea>
                      <p className="text-[10px] text-gray-500 mt-1 flex items-center gap-1"><CheckCircle2 size={10}/> AI-Assisted Drafting is available.</p>
                   </div>
                   <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Practice Questions (Separated by comma)</label>
                      <textarea rows={3} placeholder="1. Solve x² + 5x + 6 = 0..." className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500"></textarea>
                   </div>
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-gray-100 flex justify-end gap-3">
                   <button type="button" className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">Save as Draft</button>
                   <button type="submit" className="px-6 py-2 bg-[#10B981] text-white rounded-lg text-sm font-bold hover:bg-emerald-700 flex items-center gap-2"><Save size={16}/> Submit for Review</button>
                </div>
             </form>
          </div>

        </div>
      </main>
    </div>
  );
}