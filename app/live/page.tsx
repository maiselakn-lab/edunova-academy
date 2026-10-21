"use client";
import { useState } from "react";
import { Mic, MicOff, Video, VideoOff, MonitorUp, PhoneOff, PenTool, Eraser, Square, Circle, Type, Send, Users, MessageSquare } from "lucide-react";

export default function LiveClassroomPage() {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [activeTool, setActiveTool] = useState("pen");
  const [chatInput, setChatInput] = useState("");

  return (
    <div className="h-screen bg-[#0F172A] flex flex-col overflow-hidden text-white">
      
      {/* Top Bar */}
      <div className="h-14 bg-[#1E293B] border-b border-slate-700 flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <h1 className="font-bold text-sm">Mathematics - Grade 10: Quadratic Equations</h1>
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-300">
          <span className="flex items-center gap-1"><Users size={16}/> 4 Students</span>
          <span className="bg-slate-700 px-3 py-1 rounded-md text-xs font-mono">00:45:12</span>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-grow flex p-4 gap-4 overflow-hidden">
        
        {/* Whiteboard & Video Area */}
        <div className="flex-grow flex flex-col gap-4 relative">
          
          {/* Whiteboard */}
          <div className="flex-grow bg-white rounded-xl shadow-2xl relative overflow-hidden flex flex-col">
            {/* Toolbar */}
            <div className="h-12 border-b border-gray-200 flex items-center gap-2 px-4 bg-gray-50 shrink-0">
              <button onClick={() => setActiveTool("pen")} className={`p-1.5 rounded ${activeTool === 'pen' ? 'bg-emerald-100 text-emerald-600' : 'text-gray-500 hover:bg-gray-200'}`}><PenTool size={18}/></button>
              <button onClick={() => setActiveTool("eraser")} className={`p-1.5 rounded ${activeTool === 'eraser' ? 'bg-emerald-100 text-emerald-600' : 'text-gray-500 hover:bg-gray-200'}`}><Eraser size={18}/></button>
              <div className="w-px h-6 bg-gray-300 mx-1"></div>
              <button className="p-1.5 rounded text-gray-500 hover:bg-gray-200"><Square size={18}/></button>
              <button className="p-1.5 rounded text-gray-500 hover:bg-gray-200"><Circle size={18}/></button>
              <button className="p-1.5 rounded text-gray-500 hover:bg-gray-200"><Type size={18}/></button>
              <div className="w-px h-6 bg-gray-300 mx-1"></div>
              <button className="px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-200 rounded">Undo</button>
              <button className="px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-200 rounded">Clear</button>
            </div>

            {/* Whiteboard Canvas */}
            <div className="flex-grow flex items-center justify-center bg-[#F8FAFC]" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
               <div className="text-center bg-white/80 p-8 rounded-2xl backdrop-blur-sm shadow-sm border border-gray-200">
                 <h2 className="text-4xl font-serif italic text-gray-800 mb-4">Solving Quadratic Equations</h2>
                 <p className="text-2xl font-mono text-gray-700">x = (-b ± √(b² - 4ac)) / 2a</p>
               </div>
            </div>
          </div>

          {/* Video Feed (Floating) */}
          <div className="absolute bottom-6 right-6 w-64 h-48 bg-gray-800 rounded-xl border border-slate-600 overflow-hidden shadow-2xl z-20">
             <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" 
              alt="Tutor" 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> You (Tutor)
            </div>
          </div>

          {/* Controls */}
          <div className="h-16 bg-[#1E293B] rounded-xl flex items-center justify-center gap-4 shrink-0 shadow-lg border border-slate-700">
            <button onClick={() => setIsMicOn(!isMicOn)} className={`p-3 rounded-full ${isMicOn ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-red-500 text-white hover:bg-red-600'}`}>
              {isMicOn ? <Mic size={20}/> : <MicOff size={20}/>}
            </button>
            <button onClick={() => setIsVideoOn(!isVideoOn)} className={`p-3 rounded-full ${isVideoOn ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-red-500 text-white hover:bg-red-600'}`}>
              {isVideoOn ? <Video size={20}/> : <VideoOff size={20}/>}
            </button>
            <button className="p-3 rounded-full bg-slate-700 text-white hover:bg-slate-600">
              <MonitorUp size={20}/>
            </button>
            <button className="px-6 py-3 rounded-full bg-red-500 text-white hover:bg-red-600 font-medium text-sm flex items-center gap-2 ml-4">
              <PhoneOff size={18}/> End Class
            </button>
          </div>
        </div>

        {/* Live Chat Sidebar */}
        <div className="w-80 bg-[#1E293B] border border-slate-700 rounded-xl flex flex-col shrink-0">
          <div className="h-12 border-b border-slate-700 flex items-center px-4">
            <h3 className="font-bold text-sm text-slate-200 flex items-center gap-2"><MessageSquare size={16}/> Live Chat</h3>
          </div>
          
          <div className="flex-grow overflow-y-auto p-4 space-y-4">
             <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center shrink-0 text-[10px] font-bold">M</div>
                <div>
                  <p className="text-xs font-bold text-slate-300 mb-0.5">Maisela N.</p>
                  <div className="bg-slate-700 p-2.5 rounded-lg rounded-tl-none text-xs text-slate-200">
                    Sir, why do we divide by 2a at the end?
                  </div>
                </div>
             </div>
             <div className="flex gap-2 flex-row-reverse">
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 text-[10px] font-bold">T</div>
                <div className="text-right">
                  <p className="text-xs font-bold text-slate-300 mb-0.5">You (Tutor)</p>
                  <div className="bg-emerald-600 text-white p-2.5 rounded-lg rounded-tr-none text-xs">
                    Great question! The 2a comes from the formula derivation. I'll show you on the board.
                  </div>
                </div>
             </div>
          </div>

          <div className="p-3 border-t border-slate-700 bg-[#0F172A] rounded-b-xl">
            <div className="flex items-center gap-2 bg-slate-700 border border-slate-600 rounded-lg p-1.5 focus-within:ring-2 focus-within:ring-emerald-500">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-grow bg-transparent border-none outline-none text-xs px-2 text-white placeholder-slate-400"
              />
              <button className="p-1.5 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
                <Send size={14}/>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}