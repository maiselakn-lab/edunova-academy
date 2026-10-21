import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import { Hammer } from "lucide-react";

export default function PlaceholderPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <Sidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow flex items-center justify-center">
        <div className="text-center bg-white p-12 rounded-2xl shadow-sm border border-gray-200">
          <Hammer size={48} className="text-[#0070F3] mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Coming Soon</h1>
          <p className="text-gray-500 max-w-sm mx-auto">We are currently building this module. Check back soon for updates!</p>
        </div>
      </main>
    </div>
  );
}