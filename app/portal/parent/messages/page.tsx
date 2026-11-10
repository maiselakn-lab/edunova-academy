"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Send, User } from 'lucide-react';

export default function Messages() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Mr. T. Nkosi', role: 'Maths Tutor', text: 'Good morning. Thabo did very well in today\'s lesson.', time: '09:15' },
    { id: 2, sender: 'You', role: 'Parent', text: 'That\'s great to hear! Thank you.', time: '09:20' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), sender: 'You', role: 'Parent', text: input, time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }]);
    setInput('');
  };

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Link href="/portal/parent" className="text-gray-400 hover:text-brand-navy"><ArrowLeft size={24} /></Link>
        <h1 className="text-3xl font-serif font-bold text-brand-navy">Messages</h1>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm h-[60vh] flex flex-col">
        <div className="flex-grow p-6 space-y-6 overflow-y-auto bg-brand-grey/30">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[75%] ${msg.sender === 'You' ? 'bg-brand-royal text-white rounded-tr-sm' : 'bg-white border border-gray-200 text-brand-charcoal rounded-tl-sm'} p-4 rounded-2xl shadow-sm`}>
                <div className="flex justify-between items-center mb-1 gap-4">
                  <span className="text-xs font-bold opacity-75">{msg.sender} ({msg.role})</span>
                  <span className="text-xs opacity-50">{msg.time}</span>
                </div>
                <p className="text-sm leading-relaxed">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-gray-200 bg-white">
          <form onSubmit={handleSend} className="flex gap-3">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." className="flex-grow p-3 bg-brand-grey border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-royal" />
            <button type="submit" className="bg-brand-royal text-white px-6 rounded-lg font-bold hover:bg-blue-700"><Send size={18}/></button>
          </form>
        </div>
      </div>
    </div>
  );
}