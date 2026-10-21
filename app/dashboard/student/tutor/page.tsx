"use client";
import { useState } from "react";
import StudentSidebar from "@/components/sidebars/StudentSidebar";
import TopNav from "@/components/TopNav";
import { Send, Bot, User, Paperclip, Globe, Sparkles } from "lucide-react";

export default function StudentTutorPage() {
  const [messages, setMessages] = useState([{ id: "1", sender: "ai", text: "Hello! I am your AI Research Tutor. How can I assist with your university modules today?" }]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now().toString(), sender: "user", text: input }]);
    setInput("");
    // Simulate AI Response
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now().toString(), sender: "ai", text: "That is a great research question. When we connect the API, I will provide a full academic breakdown." }]);
    }, 1000);
  };

  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <StudentSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] flex-grow flex flex-col bg-white border-l border-gray-200 h-[calc(100vh-72px)]">
        <div className="h-14 border-b flex items-center justify-between px-6 bg-white shrink-0">
          <div className="flex items-center gap-3"><div className="bg-indigo-100 p-1.5 rounded-full text-indigo-600"><Bot size={20} /></div><div><h2 className="font-bold text-gray-800 text-sm">AI Research Tutor</h2></div></div>
        </div>
        <div className="flex-grow overflow-y-auto p-6 space-y-6 min-h-0 bg-[#F8FAFC]">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-4 ${msg.sender === "user" ? "flex-row-reverse" : ""}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.sender === "ai" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-600"}`}>{msg.sender === "ai" ? <Bot size={18} /> : <User size={18} />}</div>
              <div className={`max-w-[75%] p-4 rounded-xl text-sm ${msg.sender === "ai" ? "bg-white text-gray-800 rounded-tl-none border shadow-sm" : "bg-indigo-600 text-white rounded-tr-none"}`}>{msg.text}</div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t bg-white shrink-0">
          <form onSubmit={handleSend} className="flex items-end gap-2 bg-gray-50 border rounded-xl p-2">
            <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask a research question..." className="flex-grow bg-transparent outline-none resize-none min-h-[44px] py-2.5 px-1 text-sm" rows={1} />
            <button type="submit" className="bg-indigo-600 text-white p-3 rounded-lg"><Send size={18} /></button>
          </form>
        </div>
      </main>
    </div>
  );
}