"use client";

import { useState, useRef, useEffect } from 'react';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { Bot, Send, User, Loader2, AlertCircle } from 'lucide-react';

type Message = { id: string; role: 'user' | 'assistant'; content: string; };

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'assistant', content: "Hello! I'm EduNova, your AI academic assistant. You can ask me to explain complex concepts, help you prepare for exams, or generate practice questions. What would you like to learn today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  useEffect(() => { scrollToBottom(); }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const userMessage = input.trim();
    setInput(''); setError('');
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('https://edunova-academy-qkk5.onrender.com/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, language: "English", grade_level: "Grade 11" }),
      });
      if (!response.ok) throw new Error('Failed to get a response.');
      const data = await response.json();
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'assistant', content: data.reply }]);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      <main className="flex-grow flex justify-center py-8 px-4">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl border border-gray-200 flex flex-col h-[80vh] overflow-hidden">
          <div className="bg-brand-navy p-6 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center"><Bot className="text-brand-gold" size={28} /></div>
              <div>
                <h1 className="text-xl font-serif font-bold text-white">EduNova AI Assistant</h1>
                <p className="text-brand-sky text-xs font-medium flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span> Online</p>
              </div>
            </div>
          </div>
          <div className="flex-grow overflow-y-auto p-6 space-y-6 bg-brand-grey/30">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-4 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-brand-royal text-white' : 'bg-brand-navy text-brand-gold'}`}>
                    {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-brand-royal text-white rounded-tr-sm' : 'bg-white border border-gray-200 text-brand-charcoal rounded-tl-sm shadow-sm'}`}>
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && <div className="flex justify-start"><div className="flex gap-4"><div className="w-10 h-10 rounded-full bg-brand-navy text-brand-gold flex items-center justify-center"><Bot size={20} /></div><div className="p-4 rounded-2xl bg-white border border-gray-200 flex items-center gap-2"><Loader2 className="animate-spin text-brand-royal" size={18} /><span className="text-gray-500 text-sm">Thinking...</span></div></div></div>}
            {error && <div className="flex justify-center"><div className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm">{error}</div></div>}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 bg-white border-t border-gray-200 shrink-0">
            <form onSubmit={handleSend} className="flex gap-4">
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask me anything..." className="flex-grow p-4 bg-brand-grey border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-royal" disabled={isLoading} />
              <button type="submit" disabled={!input.trim() || isLoading} className="bg-brand-royal text-white px-6 rounded-xl font-bold hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center"><Send size={20} /></button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}