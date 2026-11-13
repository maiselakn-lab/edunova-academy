"use client";

import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const amount = searchParams.get('amount') || "0";

  return (
    <div className="min-h-screen bg-brand-grey flex items-center justify-center p-4">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-md w-full text-center border-t-8 border-brand-teal">
        <CheckCircle2 size={64} className="text-brand-teal mx-auto mb-6" />
        <h1 className="text-3xl font-serif font-bold text-brand-navy mb-2">Thank You!</h1>
        <p className="text-gray-600 mb-6">
          Your contribution of <span className="font-bold text-brand-navy">R{amount}</span> has been received. 
          You are helping change lives in South Africa.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 text-brand-royal font-bold hover:underline">
          Return to Homepage <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}