"use client";

import { useState } from 'react';
import { Heart, Loader2, ShieldCheck } from 'lucide-react';

export default function DonatePage() {
  const [amount, setAmount] = useState<number | string>(100);
  const [customAmount, setCustomAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePresetClick = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setAmount('');
  };

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const finalAmount = customAmount ? parseFloat(customAmount) : Number(amount);

    if (isNaN(finalAmount) || finalAmount < 10) {
      alert("Please enter a valid amount (minimum R10).");
      setIsLoading(false);
      return;
    }

    try {
      // In a real app, this fetches the payment URL from your FastAPI backend
      const response = await fetch('https://edunova-academy-qkk5.onrender.com/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: finalAmount })
      });

      const data = await response.json();

      if (response.ok && data.payment_url) {
        // Redirect the user to the payment gateway (PayFast/Yoco)
        window.location.href = data.payment_url;
      } else {
        alert("Payment gateway setup incomplete. Check backend.");
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-grey flex flex-col">
      
      {/* Header Section */}
      <div className="bg-brand-navy py-20 px-4 text-center">
        <Heart className="mx-auto text-brand-gold mb-6" size={48} />
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
          Support Our Mission
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Your donation helps provide scholarships and academic support to underprivileged learners across South Africa.
        </p>
      </div>

      {/* Donation Form Section */}
      <div className="flex-grow flex items-center justify-center px-4 -mt-10 pb-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 w-full max-w-lg">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Make a Contribution</h2>
          
          <form onSubmit={handleDonate}>
            {/* Preset Buttons */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[100, 500, 1000].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => handlePresetClick(val)}
                  className={`py-3 rounded-lg font-bold border-2 transition-all ${
                    amount === val 
                      ? 'border-brand-royal bg-brand-royal/5 text-brand-royal' 
                      : 'border-gray-200 text-gray-600 hover:border-brand-royal/50'
                  }`}
                >
                  R{val}
                </button>
              ))}
            </div>

            {/* Custom Amount Input */}
            <div className="mb-6">
              <input
                type="number"
                placeholder="Custom Amount (ZAR)"
                value={customAmount}
                onChange={handleCustomChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-royal focus:border-transparent"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-brand-royal text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors flex justify-center items-center gap-2 shadow-lg shadow-brand-royal/30"
            >
              {isLoading ? (
                <><Loader2 className="animate-spin" size={20} /> Processing...</>
              ) : (
                <>Proceed to Payment</>
              )}
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
            <ShieldCheck size={16} className="text-brand-teal" />
            Secure 256-bit SSL Encrypted Payment
          </div>
        </div>
      </div>
    </div>
  );
}