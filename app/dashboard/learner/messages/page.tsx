"use client";
import LearnerSidebar from "@/components/sidebars/LearnerSidebar";
import TopNav from "@/components/TopNav";
import { Search, Send, Paperclip } from "lucide-react";
import { useState } from "react";

export default function LearnerMessagesPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <LearnerSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow flex overflow-hidden p-6 gap-4">
        <div className="w-80 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col">
           <div className="p-4 border-b"><h2 className="font-bold text-gray-800 mb-3">Messages</h2><div className="flex items-center bg-gray-50 rounded-lg px-3 py-2 border"><Search size={16} className="text-gray-400" /><input type="text" placeholder="Search..." className="bg-transparent border-none outline-none ml-2 w-full text-xs" /></div></div>
           <div className="flex-grow overflow-y-auto">
              <div className="p-4 border-b bg-blue-50 cursor-pointer flex gap-3 items-center"><div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">M</div><div><h4 className="text-sm font-bold">Mr. Smith (Maths)</h4><p className="text-xs text-gray-500">Well done on the test!</p></div></div>
           </div>
        </div>
        <div className="flex-grow bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col">
           <div className="h-16 border-b flex items-center px-6 bg-gray-50"><h2 className="font-bold text-gray-800 text-sm">Mr. Smith (Maths)</h2></div>
           <div className="flex-grow bg-[#F8FAFC] p-6"><div className="bg-white p-3 rounded-xl shadow-sm max-w-[70%] text-sm text-gray-800 border">Well done on the test!</div></div>
           <div className="p-4 border-t flex items-center gap-3"><input type="text" placeholder="Type a message..." className="flex-grow bg-gray-50 border rounded-lg px-4 py-2.5 text-sm outline-none" /><button className="bg-blue-600 p-3 rounded-lg text-white"><Send size={18}/></button></div>
        </div>
      </main>
    </div>
  );
}