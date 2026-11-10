"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Video, Mic, MicOff, VideoOff, PhoneOff, MessageSquare, Send, Shield } from 'lucide-react';

export default function VirtualClassroom() {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'Mr. T. Nkosi', text: 'Hello! Ready for our Calculus lesson today?', time: '14:01' }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    setMessages([...messages, { sender: 'You', text: chatMessage, time: '14:02' }]);
    setChatMessage('');
  };

  return (
    <div className="flex flex-col h-screen bg-[#081020] text-white overflow-hidden">
      <header className="h-16 bg-[#0B132B] border-b border-white/10 flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-4">
          <Link href="/portal/student" className="text-gray-400 hover:text-white transition-colors"><ArrowLeft size={20} /></Link>
          <div>
            <h1 className="font-bold text-white leading-tight">Mathematics: Calculus</h1>
            <p className="text-xs text-brand-teal font-medium flex items-center gap-1"><span className="w-2 h-2 bg-brand-teal rounded-full animate-pulse"></span> Live Session</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white/10 px-4 py-1.5 rounded-full text-sm font-mono">00:25:43</div>
          <div className="flex items-center gap-2 text-xs text-gray-400"><Shield size={14} className="text-brand-gold" /> Safeguarded Session</div>
        </div>
      </header>

      <div className="flex-grow flex flex-col lg:flex-row overflow-hidden">
        <div className="flex-grow relative bg-black flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076&auto=format&fit=crop')] bg-cover bg-center opacity-80"></div>
          <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
            <p className="text-sm font-bold text-white">Mr. T. Nkosi (Tutor)</p>
          </div>
          <div className="absolute top-6 right-6 w-48 h-32 bg-brand-charcoal rounded-lg border-2 border-white/20 overflow-hidden shadow-2xl flex items-center justify-center">
            <p className="text-xs text-gray-400">Your Camera</p>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/60 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
            <button onClick={() => setIsMuted(!isMuted)} className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${isMuted ? 'bg-red-500 hover:bg-red-600' : 'bg-white/20 hover:bg-white/30'}`}>
              {isMuted ? <MicOff size={20} /> : <Mic size={20} />}
            </button>
            <button onClick={() => setIsVideoOff(!isVideoOff)} className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${isVideoOff ? 'bg-red-500 hover:bg-red-600' : 'bg-white/20 hover:bg-white/30'}`}>
              {isVideoOff ? <VideoOff size={20} /> : <Video size={20} />}
            </button>
            <Link href="/portal/student" className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition-colors">
              <PhoneOff size={20} />
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-80 bg-[#0B132B] border-l border-white/10 flex flex-col shrink-0">
          <div className="p-4 border-b border-white/10 flex items-center gap-2">
            <MessageSquare size={18} className="text-brand-sky" />
            <h2 className="font-bold text-white">Session Chat</h2>
          </div>
          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i}>
                <p className="text-xs text-gray-400 mb-1">{msg.sender} • {msg.time}</p>
                <div className={`p-3 rounded-lg text-sm ${msg.sender === 'You' ? 'bg-brand-royal text-white' : 'bg-white/10 text-gray-200'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10">
            <div className="relative">
              <input type="text" value={chatMessage} onChange={(e) => setChatMessage(e.target.value)} placeholder="Type a message..." className="w-full bg-white/5 border border-white/20 rounded-lg py-3 pl-4 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-brand-sky hover:text-white"><Send size={18} /></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}