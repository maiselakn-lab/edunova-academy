"use client";
import { useState } from "react";
import Link from "next/link";
import { BookOpen, ArrowLeft, CheckCircle2, User, Lock } from "lucide-react";

export default function EnrolPage() {
  const [view, setView] = useState("select-curriculum");
  const [selectedBank, setSelectedBank] = useState("");
  const [selectedCurriculum, setSelectedCurriculum] = useState("");

  return (
    <div className="min-h-screen bg-[#E6F9F9] flex items-center justify-center p-4 py-12">
      
      {/* MAIN SELECTION VIEW (Picture 2) */}
      {view === "select-curriculum" && (
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl p-8">
           
           {/* FIXED LOGO SECTION */}
           <div className="text-center mb-8">
              <Link href="/" className="inline-flex flex-col items-center">
                 <BookOpen size={48} className="text-[#D1007B] mb-1" strokeWidth={2.5} />
                 <div className="text-[#D1007B] text-3xl font-black italic tracking-tighter leading-none">THINK</div>
                 <p className="text-gray-400 text-[9px] tracking-[0.3em] font-bold uppercase mt-1">EduNova Academy</p>
              </Link>
           </div>

           <div className="text-center mb-8">
              <h1 className="text-xl font-bold text-[#333]">Select your curriculum</h1>
              <p className="text-xs text-gray-500 mt-1">Choose the pathway that fits your learner.</p>
           </div>

           {/* Bank Selection */}
           <div className="mb-8">
             <h3 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2"><span className="w-4 h-4 bg-gray-200 rounded"></span> Select your bank</h3>
             <div className="grid grid-cols-3 gap-2">
               {["TymeBank", "Standard Bank", "Nedbank", "FNB", "Capitec"].map(bank => (
                 <button key={bank} onClick={() => setSelectedBank(bank)} className={`py-2 px-4 rounded-lg border text-sm font-bold ${selectedBank === bank ? 'border-[#009CA6] bg-teal-50 text-[#009CA6]' : 'border-gray-200 text-gray-600'}`}>{bank}</button>
               ))}
             </div>
           </div>

           {/* Curriculum Selection */}
           <div className="mb-8">
             <h3 className="text-sm font-bold text-gray-700 mb-3">CURRICULUM</h3>
             <div className="grid grid-cols-2 gap-4">
                <button onClick={() => setSelectedCurriculum("CAPS")} className={`p-6 rounded-xl text-left border-2 ${selectedCurriculum === "CAPS" ? 'border-[#009CA6] bg-[#009CA6] text-white' : 'border-teal-200 bg-teal-500 text-white opacity-80'}`}>
                  <h4 className="font-bold text-lg">CAPS</h4>
                  <p className="text-xs opacity-90">South African National Curriculum</p>
                </button>
                <button onClick={() => setSelectedCurriculum("SHORT")} className={`p-6 rounded-xl text-left border-2 ${selectedCurriculum === "SHORT" ? 'border-[#D1007B] bg-[#D1007B] text-white' : 'border-pink-200 bg-[#D1007B] text-white opacity-80'}`}>
                  <h4 className="font-bold text-lg">SHORT COURSES</h4>
                  <p className="text-xs opacity-90">Focused skills & programmes</p>
                </button>
             </div>
           </div>

           <div className="flex justify-between">
             <Link href="/login" className="text-sm font-bold text-gray-500 hover:text-[#009CA6] flex items-center gap-1"><ArrowLeft size={16}/> Back</Link>
             <button onClick={() => setView("new-student")} disabled={!selectedBank || !selectedCurriculum} className="bg-[#009CA6] text-white px-8 py-2.5 rounded-full font-bold disabled:opacity-50">Continue</button>
           </div>
        </div>
      )}

      {/* WHICH OPTION (Picture 3) */}
      {view === "new-student" && (
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl p-10 text-center">
           <h1 className="text-xl font-bold text-[#333] mb-2">Student Registration & Payment — {selectedCurriculum}</h1>
           <p className="text-xs text-gray-500 mb-8">Which option is for you?</p>
           
           <div className="flex items-center justify-center gap-6">
             {/* New Student (Picture 4) */}
             <button onClick={() => setView("form")} className="bg-[#009CA6] text-white p-8 rounded-xl w-64 text-left hover:bg-[#00828A] transition-colors relative">
               <div className="bg-black/20 w-10 h-10 rounded-full flex items-center justify-center mb-4"><User size={20}/></div>
               <h3 className="font-bold text-lg">New student</h3>
               <p className="text-xs opacity-90 mt-1">Create a new profile on the EduNova Academy portal.</p>
             </button>

             <span className="font-bold text-gray-400">OR</span>

             {/* Registered Student (Picture 5) */}
             <button onClick={() => setView("registered-student")} className="bg-[#00828A] text-white p-8 rounded-xl w-64 text-left hover:bg-[#006B72] transition-colors">
               <div className="bg-black/20 w-10 h-10 rounded-full flex items-center justify-center mb-4"><Lock size={20}/></div>
               <h3 className="font-bold text-lg">Registered student</h3>
               <p className="text-xs opacity-90 mt-1">I already have a profile — sign in below to continue.</p>
             </button>
           </div>
        </div>
      )}

      {/* REGISTERED STUDENT LOGIN (Picture 5) */}
      {view === "registered-student" && (
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-10">
           <div className="text-center mb-6">
             <h1 className="text-lg font-bold text-[#333]">Welcome back</h1>
             <p className="text-xs text-gray-500">Enter your portal username and password. We'll load your details for re-registration.</p>
           </div>
           <div className="bg-[#E6F9F9] p-6 rounded-xl border border-[#B2E8E8]">
             <div className="mb-4"><label className="block text-xs font-bold text-gray-700 mb-1">Username</label><input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#009CA6]" /></div>
             <div className="mb-6"><label className="block text-xs font-bold text-gray-700 mb-1">Password</label><input type="password" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#009CA6]" /></div>
             <button onClick={() => setView("form")} className="w-full bg-[#009CA6] text-white py-2.5 rounded-lg font-bold">Re-register</button>
           </div>
           <button onClick={() => setView("new-student")} className="w-full mt-4 text-xs text-[#009CA6] hover:underline">Start over</button>
        </div>
      )}

      {/* NEW STUDENT FORM (Picture 4) */}
      {view === "form" && (
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl p-10">
           <div className="flex items-center justify-between mb-8">
              <h1 className="text-xl font-bold text-[#333]">Student Registration & Payment — {selectedCurriculum}</h1>
           </div>
           
           {/* Progress Bar */}
           <div className="flex justify-between items-center relative mb-10 px-12">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -z-10"></div>
              {[1, 2, 3, 4].map(num => (
                <div key={num} className="flex flex-col items-center bg-white px-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 ${num === 1 ? 'border-[#009CA6] bg-[#009CA6] text-white' : 'border-gray-300 bg-white text-gray-400'}`}>{num}</div>
                  <span className={`text-[10px] font-bold mt-2 ${num === 1 ? 'text-[#009CA6]' : 'text-gray-400'}`}>{["LEARNER & PARENT", "INVOICING", "SCHOOLING", "COST BREAKDOWN"][num-1]}</span>
                </div>
              ))}
           </div>

           {/* The massive form from Picture 4 */}
           <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <div><label className="block text-xs font-bold text-gray-700 mb-1">Name:</label><input type="text" placeholder="Learner's name" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" /></div>
              <div><label className="block text-xs font-bold text-gray-700 mb-1">Surname:</label><input type="text" placeholder="Learner's surname" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" /></div>
              
              <div><label className="block text-xs font-bold text-gray-700 mb-1">ID Number:</label><input type="text" placeholder="Learner's ID Number" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" /></div>
              <div><label className="block text-xs font-bold text-gray-700 mb-1">Username:</label><input type="text" placeholder="Auto-Generated field" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-gray-100" disabled /></div>

              <div><label className="block text-xs font-bold text-gray-700 mb-1">Parent Email:</label><input type="email" placeholder="Parent or Tutor's email" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" /></div>
              <div><label className="block text-xs font-bold text-gray-700 mb-1">Parent Phone:</label><div className="flex"><select className="border border-gray-300 rounded-l-lg px-2 bg-gray-50 text-sm"><option>ZA</option></select><input type="text" placeholder="Phone number" className="w-full border border-gray-300 border-l-0 rounded-r-lg px-3 py-2 text-sm" /></div></div>

              <div><label className="block text-xs font-bold text-gray-700 mb-1">Date of Birth (Learner):</label><input type="date" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-500" /></div>
              <div><label className="block text-xs font-bold text-gray-700 mb-1">Learner Email:</label><input type="email" placeholder="Learner email" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" /></div>

              <div className="col-span-2 mt-4"><label className="block text-xs font-bold text-gray-700 mb-1">Street address *</label><input type="text" placeholder="Search and select from suggestions" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" /></div>
              
              <div><label className="block text-xs font-bold text-gray-700 mb-1">City:</label><input type="text" placeholder="City" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" /></div>
              <div><label className="block text-xs font-bold text-gray-700 mb-1">Province/State:</label><input type="text" placeholder="Province" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" /></div>
              <div><label className="block text-xs font-bold text-gray-700 mb-1">ZIP/Postal code:</label><input type="text" placeholder="Optional" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" /></div>
              <div><label className="block text-xs font-bold text-gray-700 mb-1">Country:</label><input type="text" placeholder="Country" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" /></div>
           </div>

           <div className="flex justify-center gap-4 mt-8 pt-6 border-t border-gray-100">
             <button onClick={() => setView("new-student")} className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-600 font-bold hover:bg-gray-50">Start over</button>
             <button onClick={() => alert("Registration logic goes here!")} className="px-8 py-2.5 bg-[#009CA6] text-white rounded-lg font-bold hover:bg-[#00828A]">Next</button>
           </div>
        </div>
      )}
    </div>
  );
}