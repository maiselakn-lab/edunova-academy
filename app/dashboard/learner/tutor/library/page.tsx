"use client";
import TutorSidebar from "@/components/sidebars/TutorSidebar";
import TopNav from "@/components/TopNav";
import { BookOpen, Search, Filter, FileText, PlayCircle, MoreVertical, Plus, Folder } from "lucide-react";
import Link from "next/link";

export default function TutorLibraryPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <TutorSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1400px] mx-auto">
          
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">My Library</h1>
              <p className="text-sm text-gray-500">Access and manage all your lessons, notes, and resources.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"><Filter size={16}/> Filter</button>
              <Link href="/dashboard/tutor/create-lesson" className="flex items-center gap-2 bg-[#10B981] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-emerald-700 transition-colors">
                <Plus size={16} /> New Lesson
              </Link>
            </div>
          </div>

          {/* Folders */}
          <div className="mb-8">
            <h2 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">Folders</h2>
            <div className="flex gap-4">
              {[
                { name: "Grade 10 Mathematics", count: 12 },
                { name: "Grade 11 Physics", count: 8 },
                { name: "Drafts", count: 3 },
              ].map((folder, i) => (
                <div key={i} className="bg-white px-4 py-3 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3 cursor-pointer hover:border-emerald-400 transition-colors min-w-[200px]">
                  <Folder className="text-emerald-500" size={20}/>
                  <div>
                    <p className="text-sm font-bold text-gray-800">{folder.name}</p>
                    <p className="text-[10px] text-gray-500">{folder.count} items</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content List */}
          <div className="flex items-center bg-white rounded-lg px-4 py-2 w-full max-w-md border border-gray-300 shadow-sm mb-6">
            <Search size={18} className="text-gray-400" />
            <input type="text" placeholder="Search your library..." className="bg-transparent border-none outline-none ml-3 w-full text-sm text-gray-700" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Introduction to Quadratic Equations", type: "Lesson", subject: "Mathematics - Gr 10", status: "Published", color: "bg-emerald-100 text-emerald-700" },
              { title: "Newton's Laws of Motion", type: "Video Lesson", subject: "Physics - Gr 11", status: "Published", color: "bg-emerald-100 text-emerald-700" },
              { title: "Trigonometry Basics", type: "Worksheet", subject: "Mathematics - Gr 10", status: "Draft", color: "bg-amber-100 text-amber-700" },
              { title: "Chemical Reactions Notes", type: "Notes", subject: "Science - Gr 10", status: "Published", color: "bg-emerald-100 text-emerald-700" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.type === 'Video Lesson' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                    {item.type === 'Video Lesson' ? <PlayCircle size={20}/> : <FileText size={20}/>}
                  </div>
                  <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16}/></button>
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 mb-3">{item.subject}</p>
                <div className="mt-auto flex justify-between items-center">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${item.color}`}>{item.status}</span>
                  <button className="text-xs font-bold text-emerald-600 hover:underline">Edit</button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}