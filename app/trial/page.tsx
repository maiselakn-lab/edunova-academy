"use client";
import { useState } from "react";
import Link from "next/link";
import { BookOpen, ArrowLeft, CheckCircle2, MapPin, Loader2 } from "lucide-react";

export default function FreeTrialPage() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [parentName, setParentName] = useState("");
  const [parentSurname, setParentSurname] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [parentCell, setParentCell] = useState("");
  const [hearAboutUs, setHearAboutUs] = useState("");
  const [curriculum, setCurriculum] = useState("");
  const [language, setLanguage] = useState("English");
  const [grade, setGrade] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [agreeMarketing, setAgreeMarketing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#F4F4F4] flex items-center justify-center p-4">
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-md w-full">
          <CheckCircle2 size={64} className="text-[#009CA6] mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-[#333] mb-2">Trial Started!</h2>
          <p className="text-gray-500 mb-8 text-sm">We have emailed your login details. Welcome to the EduNova virtual campus.</p>
          <Link href="/login" className="bg-[#009CA6] text-white px-8 py-3 rounded-full font-bold w-full block hover:bg-[#00828A] transition-colors">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#E6F9F9] flex flex-col items-center justify-center p-4 py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#009CA6 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl p-10 relative z-10">
        
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex flex-col items-center">
             <BookOpen size={48} className="text-[#D1007B] mb-1" strokeWidth={2.5} />
             <div className="text-[#D1007B] text-3xl font-black italic tracking-tighter leading-none">THINK</div>
             <p className="text-gray-400 text-[9px] tracking-[0.3em] font-bold uppercase mt-1">EduNova Academy</p>
          </Link>
          <h1 className="text-2xl font-bold text-[#333] mt-4">Start your free 14-day trial</h1>
          <p className="text-sm text-gray-500 mt-1">Full access to one grade for 14 days. No payment details needed.</p>
        </div>

        <div className="flex justify-between items-center relative mb-10 px-8">
          <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200 -z-10"></div>
          {[1, 2, 3].map(num => (
            <div key={num} className="flex flex-col items-center bg-white px-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step > num ? 'bg-[#009CA6] text-white' : step === num ? 'bg-[#009CA6] text-white ring-4 ring-teal-100' : 'bg-gray-200 text-gray-400'}`}>
                {step > num ? <CheckCircle2 size={16}/> : num}
              </div>
              <span className={`text-[10px] font-bold mt-2 ${step >= num ? 'text-[#009CA6]' : 'text-gray-400'}`}>{num === 1 ? "Parent" : num === 2 ? "Learner & school" : "Address & start"}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="font-bold text-[#333] text-lg">First, tell us about you</h2>
              <p className="text-xs text-gray-500 -mt-3">We'll email the learner's login details to you.</p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div><label className="block text-xs font-medium text-gray-700 mb-1">Parent name</label><input type="text" required value={parentName} onChange={(e) => setParentName(e.target.value)} placeholder="e.g. Thandi" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#009CA6]" /></div>
                <div><label className="block text-xs font-medium text-gray-700 mb-1">Parent surname</label><input type="text" required value={parentSurname} onChange={(e) => setParentSurname(e.target.value)} placeholder="e.g. Dlamini" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#009CA6]" /></div>
              </div>
              <div><label className="block text-xs font-medium text-gray-700 mb-1">Parent email</label><input type="email" required value={parentEmail} onChange={(e) => setParentEmail(e.target.value)} placeholder="name@example.com" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#009CA6]" /></div>
              <div><label className="block text-xs font-medium text-gray-700 mb-1">Parent cell number</label><div className="flex"><select className="border border-gray-300 rounded-l-lg px-3 bg-gray-50 text-sm outline-none"><option>za (+27)</option></select><input type="tel" required value={parentCell} onChange={(e) => setParentCell(e.target.value)} placeholder="Cell number" className="w-full border border-gray-300 border-l-0 rounded-r-lg px-3 py-2.5 text-sm outline-none focus:border-[#009CA6]" /></div></div>
              <div><label className="block text-xs font-medium text-gray-700 mb-1">How did you hear about us? (optional)</label><select value={hearAboutUs} onChange={(e) => setHearAboutUs(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none bg-white focus:border-[#009CA6]"><option value="">Please select</option><option value="google">Google Search</option><option value="facebook">Facebook</option></select></div>
              <div className="flex justify-end pt-6"><button type="button" onClick={() => setStep(2)} className="bg-[#009CA6] hover:bg-[#00828A] text-white px-8 py-2.5 rounded-full font-bold text-sm transition-colors">Continue</button></div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="font-bold text-[#333] text-lg">Which grade should we set up?</h2>
              <p className="text-xs text-gray-500 -mt-3">Pick the curriculum and grade your learner will try out.</p>
              <div className="space-y-4 pt-2">
                <div><label className="block text-xs font-medium text-gray-700 mb-1">Curriculum</label><select required value={curriculum} onChange={(e) => setCurriculum(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none bg-white focus:border-[#009CA6]"><option value="">Please select a curriculum</option><option value="CAPS">South African CAPS</option><option value="British">British International</option><option value="GED">United States GED</option></select></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-xs font-medium text-gray-700 mb-1">Language of study</label><select value={language} onChange={(e) => setLanguage(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none bg-white focus:border-[#009CA6]"><option>English</option><option>Afrikaans</option></select></div>
                  <div><label className="block text-xs font-medium text-gray-700 mb-1">Grade</label><select required disabled={!curriculum} value={grade} onChange={(e) => setGrade(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none bg-white disabled:bg-gray-100 focus:border-[#009CA6]"><option value="">{curriculum ? "Select grade" : "Choose curriculum first"}</option><option value="1">Grade 1</option><option value="8">Grade 8</option><option value="10">Grade 10</option><option value="12">Grade 12</option></select></div>
                </div>
                <div className="bg-[#E6F9F9] border border-[#B2E8E8] p-5 rounded-xl mt-6"><h4 className="font-bold text-[#009CA6] text-sm mb-2">What's in the trial</h4><ul className="text-xs text-gray-600 space-y-1.5 list-disc pl-4"><li>14 days of full access</li><li>Login details emailed straight away</li><li>No payment details</li></ul></div>
              </div>
              <div className="flex justify-between pt-6"><button type="button" onClick={() => setStep(1)} className="border border-gray-300 text-gray-700 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-gray-50 flex items-center gap-2"><ArrowLeft size={16}/> Back</button><button type="button" onClick={() => setStep(3)} disabled={!curriculum || !grade} className="bg-[#009CA6] hover:bg-[#00828A] text-white px-8 py-2.5 rounded-full font-bold text-sm disabled:opacity-50">Continue</button></div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="font-bold text-[#333] text-lg">Lastly, where are you based?</h2>
              <p className="text-xs text-gray-500 -mt-3">Start typing your street address and we'll fill in the rest.</p>
              <div className="space-y-4 pt-2">
                <div><div className="flex justify-between items-center mb-1"><label className="block text-xs font-medium text-gray-700">Street address</label><button type="button" className="text-[10px] text-[#009CA6] font-bold flex items-center gap-1 bg-teal-50 px-2 py-1 rounded-full border border-teal-100"><MapPin size={10}/> Use my location</button></div><input type="text" required value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Start typing your street address" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#009CA6]" /></div>
                <div className="grid grid-cols-2 gap-4"><div><label className="block text-xs font-medium text-gray-700 mb-1">City</label><input type="text" required value={city} onChange={(e) => setCity(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#009CA6]" /></div><div><label className="block text-xs font-medium text-gray-700 mb-1">Province / state</label><input type="text" required value={province} onChange={(e) => setProvince(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#009CA6]" /></div></div>
                <div className="grid grid-cols-2 gap-4"><div><label className="block text-xs font-medium text-gray-700 mb-1">Country</label><input type="text" required value={country} onChange={(e) => setCountry(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#009CA6]" /></div><div><label className="block text-xs font-medium text-gray-700 mb-1">ZIP / postal code</label><input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#009CA6]" /></div></div>
                <div className="flex items-start gap-2 pt-2"><input type="checkbox" id="marketing" checked={agreeMarketing} onChange={(e) => setAgreeMarketing(e.target.checked)} className="mt-0.5 accent-[#009CA6] w-4 h-4" /><label htmlFor="marketing" className="text-xs text-gray-500 leading-relaxed">Yes, keep me in the loop! I agree to receive marketing updates.</label></div>
              </div>
              <div className="flex justify-between items-center pt-6 mt-4 border-t border-gray-100"><button type="button" onClick={() => setStep(2)} className="border border-gray-300 text-gray-700 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-gray-50 flex items-center gap-2"><ArrowLeft size={16}/> Back</button><button type="submit" disabled={isLoading} className="bg-[#009CA6] hover:bg-[#00828A] text-white px-8 py-2.5 rounded-full font-bold text-sm flex items-center gap-2">{isLoading ? <Loader2 size={18} className="animate-spin" /> : "Start my free trial"}</button></div>
            </div>
          )}
        </form>
      </div>
      
      <div className="mt-8 text-center text-xs text-gray-500 relative z-10 w-full max-w-2xl flex justify-between px-4">
        <span className="text-[#009CA6] font-bold">Think Digital Academy</span>
        <span>© 2026 , Made By Think Digital Academy</span>
      </div>
    </div>
  );
}