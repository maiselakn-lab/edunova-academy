import Link from 'next/link';
import { Bot, ArrowRight } from 'lucide-react';
export default function AI() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[60vh]">
      <Bot className="text-brand-gold mb-6" size={64} />
      <h1 className="text-3xl font-serif font-bold text-brand-navy mb-4">EduNova AI Assistant</h1>
      <p className="text-gray-500 mb-8 max-w-md text-center">Ask questions, generate practice questions, and understand complex topics instantly.</p>
      <Link href="/ai-assistant" className="bg-brand-navy text-white px-8 py-3 rounded font-bold flex items-center gap-2 hover:bg-opacity-90">Open AI Chat <ArrowRight size={18}/></Link>
    </div>
  );
}