"use client";
import StudentSidebar from "@/components/sidebars/StudentSidebar";
import TopNav from "@/components/TopNav";
import { Send } from "lucide-react";

export default function StudentMessagesPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <StudentSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow p-8">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm h-full flex flex-col">
           <div className="p-4 border-b"><h2 className="font-bold text-gray-800">Messages</h2></div>
           <div className="flex-grow p-6 bg-[#F8FAFC]"><div className="bg-white p-3 rounded-xl shadow-sm max-w-[70%] text-sm border">Hello! Let me know if you need help with the assignment.</div></div>
           <div className="p-4 border-t flex gap-3"><input type="text" placeholder="Type a message..." className="flex-grow bg-gray-50 border rounded-lg px-4 py-2 text-sm" /><button className="bg-indigo-600 p-3 rounded-lg text-white"><Send size={18}/></button></div>
        </div>
      </main>
    </div>
  );
}