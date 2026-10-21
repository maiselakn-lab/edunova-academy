"use client";
import { useState, useRef, useEffect } from "react";
import LearnerSidebar from "@/components/sidebars/LearnerSidebar";
import TopNav from "@/components/TopNav";
import { Send, Bot, User, Paperclip, Globe, Sparkles } from "lucide-react";

type Message = { id: string; sender: "ai" | "user"; text: string; };

export default function LearnerTutorPage() {
  const [messages, setMessages] = useState<Message[]>([{ id: "1", sender: "ai", text: "Hello Maisela! I am your EduNova AI Study Buddy. What subject or question would you like to learn about today?" }]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState("English");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, isLoading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    const currentInput = input;
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: currentInput, language: language, grade_level: "Grade 10" }),
      });
      if (!response.ok) throw new Error("Failed");
      const data = await response.json();
      setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), sender: "ai", text: data.reply }]);
    } catch (error) {
      setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), sender: "ai", text: "Error: Could not connect to the Python backend." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <LearnerSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] flex-grow flex flex-col bg-white border-l border-gray-200 h-[calc(100vh-72px)]">
        <div className="h-14 border-b border-gray-200 flex items-center justify-between px-6 bg-white shrink-0">
          <div className="flex items-center gap-3"><div className="bg-[#E0F2FE] p-1.5 rounded-full text-[#0284C7]"><Bot size={20} /></div><div><h2 className="font-bold text-gray-800 text-sm">EduNova AI Tutor</h2><p className="text-[10px] text-green-500 font-medium flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Connected</p></div></div>
          <div className="flex items-center gap-2 text-xs border border-gray-300 rounded-md px-2 py-1 text-gray-600 bg-gray-50"><Globe size={14} /> <select value={language} onChange={(e) => setLanguage(e.target.value)} className="bg-transparent outline-none cursor-pointer font-medium"><option value="English">English</option><option value="isiZulu">isiZulu</option><option value="Sepedi">Sepedi</option></select></div>
        </div>
        <div className="flex-grow overflow-y-auto p-6 space-y-6 min-h-0 bg-[#F8FAFC]">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-4 ${msg.sender === "user" ? "flex-row-reverse" : ""}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.sender === "ai" ? "bg-[#3B82F6] text-white" : "bg-gray-200 text-gray-600"}`}>{msg.sender === "ai" ? <Bot size={18} /> : <User size={18} />}</div>
              <div className={`max-w-[75%] p-4 rounded-xl text-sm leading-relaxed whitespace-pre-wrap ${msg.sender === "ai" ? "bg-white text-gray-800 rounded-tl-none border border-gray-200 shadow-sm" : "bg-[#3B82F6] text-white rounded-tr-none"}`}>{msg.text}</div>
            </div>
          ))}
          {isLoading && (<div className="flex gap-4"><div className="w-8 h-8 rounded-full bg-[#3B82F6] text-white flex items-center justify-center shrink-0"><Bot size={18} /></div><div className="bg-white p-4 rounded-xl rounded-tl-none border border-gray-200 shadow-sm flex items-center gap-1.5"><span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span><span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span><span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span></div></div>)}
          <div ref={messagesEndRef} />
        </div>
        <div className="p-4 border-t border-gray-200 bg-white shrink-0">
          <form onSubmit={handleSend} className="flex items-end gap-2 bg-gray-50 border border-gray-300 rounded-xl p-2 focus-within:ring-2 focus-within:ring-[#3B82F6]">
            <button type="button" className="p-2 text-gray-500 hover:text-[#3B82F6]"><Paperclip size={20} /></button>
            <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder={`Ask anything in ${language}...`} className="flex-grow bg-transparent border-none outline-none resize-none max-h-32 min-h-[44px] py-2.5 px-1 text-sm" rows={1} />
            <button type="submit" disabled={!input.trim() || isLoading} className="bg-[#3B82F6] hover:bg-blue-700 text-white p-3 rounded-lg disabled:opacity-50"><Send size={18} /></button>
          </form>
          <p className="text-[10px] text-gray-400 flex items-center justify-center gap-1 mt-2"><Sparkles size={12} /> AI Tutor can make mistakes. Always verify important information.</p>
        </div>
      </main>
    </div>
  );
}