import { MonitorPlay } from 'lucide-react';
export default function Classroom() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[60vh]">
      <MonitorPlay className="text-brand-royal mb-6" size={64} />
      <h1 className="text-3xl font-serif font-bold text-brand-navy mb-4">Virtual Classroom</h1>
      <p className="text-gray-500 mb-8 text-center max-w-md">You have no active lessons right now. Your next English Literature class starts at 14:00.</p>
      <button className="bg-brand-royal text-white px-8 py-3 rounded font-bold opacity-50 cursor-not-allowed">Waiting for Class...</button>
    </div>
  );
}