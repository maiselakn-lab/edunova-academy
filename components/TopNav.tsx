import { Search, Bell, ChevronDown, Globe } from "lucide-react";

export default function TopNav() {
  return (
    <header className="h-[72px] bg-white border-b border-gray-200 flex items-center justify-between px-8 ml-[260px] fixed top-0 right-0 left-0 z-20">
      {/* Search Bar */}
      <div className="flex items-center bg-white rounded-lg px-4 py-2 w-[450px] border border-gray-300 shadow-sm">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search for subjects, topics, courses..."
          className="bg-transparent border-none outline-none ml-3 w-full text-sm text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 text-sm text-gray-700 border border-gray-300 rounded-md px-3 py-1.5 hover:bg-gray-50 bg-white shadow-sm transition-colors">
          <Globe size={16} className="text-gray-500" />
          English
          <ChevronDown size={14} className="text-gray-500 ml-1" />
        </button>

        <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#EF4444] text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
            3
          </span>
        </button>

        <div className="flex items-center gap-3 cursor-pointer pl-4 border-l border-gray-200">
          <img 
            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=150&h=150" 
            alt="Maisela Norman" 
            className="w-10 h-10 rounded-full object-cover border border-gray-200"
          />
          <div className="text-sm">
            <p className="font-semibold text-gray-800 leading-tight">Maisela Norman</p>
            <p className="text-xs text-gray-500">Learner</p>
          </div>
          <ChevronDown size={14} className="text-gray-400 ml-1" />
        </div>
      </div>
    </header>
  );
}