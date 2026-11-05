import Link from 'next/link';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { ArrowRight, Bot, Zap, Shield, Cpu } from 'lucide-react';

export default function AIAssistant() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      
      <section className="bg-brand-navy py-24 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <div className="max-w-3xl">
            <p className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4">Powered by AcadAI</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">Your 24/7 AI Learning Assistant</h1>
            <p className="text-xl text-gray-300 mb-8">
              Get instant explanations, generate practice questions, and receive personalised study recommendations. Our AI is trained to guide you toward understanding, not just give answers.
            </p>
            <Link href="/register" className="bg-brand-gold text-brand-navy px-8 py-4 rounded-sm font-bold text-lg hover:bg-yellow-500 transition-all inline-flex items-center gap-2 shadow-lg">
              Try It Out <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <Bot className="mx-auto text-brand-royal mb-4" size={48} />
              <h3 className="text-xl font-bold text-brand-navy mb-3">Academic Q&A</h3>
              <p className="text-gray-600">Ask complex questions across Mathematics, Sciences, and Humanities.</p>
            </div>
            <div className="p-8">
              <Zap className="mx-auto text-brand-royal mb-4" size={48} />
              <h3 className="text-xl font-bold text-brand-navy mb-3">Instant Revision</h3>
              <p className="text-gray-600">Generate flashcards, quizzes, and summaries from your learning materials.</p>
            </div>
            <div className="p-8">
              <Shield className="mx-auto text-brand-royal mb-4" size={48} />
              <h3 className="text-xl font-bold text-brand-navy mb-3">Safe & Ethical</h3>
              <p className="text-gray-600">Built with strict safeguarding protocols. No inappropriate content. POPIA compliant.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}