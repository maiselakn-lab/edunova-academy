"use client";
import TutorSidebar from "@/components/sidebars/TutorSidebar";
import TopNav from "@/components/TopNav";
import { Search, Send, Paperclip, Phone, Video, MoreVertical } from "lucide-react";
import { useState } from "react";

export default function TutorMessagesPage() {
  const [selected, setSelected] = useState(1);

  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <TutorSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow flex overflow-hidden p-6 gap-4">
        
        {/* Inbox */}
        <div className="w-80 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">
           <div className="p-4 border-b border-gray-200">
              <h2 className="font-bold text-gray-800 mb-3">Messages</h2>
              <div className="flex items-center bg-gray-50 rounded-lg px-3 py-2 border border-gray-200">
                <Search size={16} className="text-gray-400" />
                <input type="text" placeholder="Search conversations..." className="bg-transparent border-none outline-none ml-2 w-full text-xs" />
              </div>
           </div>
           <div className="flex-grow overflow-y-auto">
              {[
                { id: 1, name: "Maisela Norman", msg: "Thank you Dr. Thabo! I understand it now.", time: "10:30", unread: true },
                { id: 2, name: "Sipho Dlamini", msg: "Can we reschedule our Friday session?", time: "09:15", unread: true },
                { id: 3, name: "EduNova Admin", msg: "Your payout of R 4,250 was processed.", time: "Yesterday", unread: false },
                { id: 4, name: "Lerato Khumalo", msg: "I need help with the last question.", time: "Mon", unread: false },
              ].map((chat) => (
                <div key={chat.id} onClick={() => setSelected(chat.id)} className={`p-4 border-b border-gray-100 cursor-pointer flex gap-3 items-center ${selected === chat.id ? 'bg-emerald-50' : 'hover:bg-gray-50'}`}>
                   <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-sm shrink-0">{chat.name.charAt(0)}</div>
                   <div className="flex-grow min-w-0">
                     <div className="flex justify-between items-center mb-0.5">
                       <h4 className={`text-sm truncate ${chat.unread ? 'font-bold text-gray-900' : 'font-medium text-gray-700'}`}>{chat.name}</h4>
                       <span className="text-[10px] text-gray-400">{chat.time}</span>
                     </div>
                     <p className={`text-xs truncate ${chat.unread ? 'font-semibold text-gray-800' : 'text-gray-500'}`}>{chat.msg}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Chat Area */}
        <div className="flex-grow bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">
           <div className="h-16 border-b border-gray-200 flex items-center justify-between px-6 bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-sm">M</div>
                <div>
                  <h2 className="font-bold text-gray-800 text-sm">Maisela Norman</h2>
                  <p className="text-[10px] text-emerald-600 font-medium flex items-center gap-1"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Online</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-gray-500 hover:bg-gray-200 rounded-lg"><Phone size={18}/></button>
                <button className="p-2 text-gray-500 hover:bg-gray-200 rounded-lg"><Video size={18}/></button>
                <button className="p-2 text-gray-500 hover:bg-gray-200 rounded-lg"><MoreVertical size={18}/></button>
              </div>
           </div>

           <div className="flex-grow bg-[#F8FAFC] p-6 overflow-y-auto flex flex-col gap-4">
             <div className="self-start bg-white p-3 rounded-xl rounded-tl-none shadow-sm max-w-[70%] text-sm text-gray-800 border border-gray-100">
               Hello Maisela! I reviewed your homework submission. You did very well on the first few questions.
             </div>
             <div className="self-end bg-emerald-600 p-3 rounded-xl rounded-tr-none shadow-sm max-w-[70%] text-sm text-white">
               Thank you Dr. Thabo! I struggled with question 5 though.
             </div>
             <div className="self-start bg-white p-3 rounded-xl rounded-tl-none shadow-sm max-w-[70%] text-sm text-gray-800 border border-gray-100">
               That's a common one. Let's go over it in our session tomorrow at 15:00. I'll prepare some extra examples.
             </div>
             <div className="self-end bg-emerald-600 p-3 rounded-xl rounded-tr-none shadow-sm max-w-[70%] text-sm text-white">
               Thank you Dr. Thabo! I understand it now.
             </div>
           </div>

           <div className="p-4 bg-white border-t border-gray-200 flex items-center gap-3">
             <button className="p-2 text-gray-500 hover:text-emerald-600 rounded-lg"><Paperclip size={20}/></button>
             <input type="text" placeholder="Type a message..." className="flex-grow bg-gray-50 border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500" />
             <button className="bg-emerald-600 p-3 rounded-lg text-white hover:bg-emerald-700"><Send size={18}/></button>
           </div>
        </div>
      </main>
    </div>
  );
}