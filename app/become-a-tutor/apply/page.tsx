"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { ArrowRight, ArrowLeft, Loader2, CheckCircle2, UserPlus, BookOpen, Award, Video, Check } from 'lucide-react';

export default function TutorApplyWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', password: '',
    qualifications: '', specialization: '', experience: '',
    demoLink: '', agreedToTerms: false
  });

  const handleNext = () => setStep(prev => Math.min(prev + 1, 5));
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      // Create the user account first
      const response = await fetch('https://edunova-academy-qkk5.onrender.com/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: formData.firstName, last_name: formData.lastName,
          email: formData.email, password: formData.password, role: 'tutor', school_id: 1
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || 'Registration failed');
      }
      
      setSuccess(true);
      setTimeout(() => router.push('/login/tutor'), 3000);
    } catch (err: any) {
      alert(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const steps = [
    { num: 1, title: "Application", icon: <UserPlus size={20}/> },
    { num: 2, title: "Qualifications", icon: <Award size={20}/> },
    { num: 3, title: "Assessment", icon: <BookOpen size={20}/> },
    { num: 4, title: "Teaching Demo", icon: <Video size={20}/> },
    { num: 5, title: "Onboarding", icon: <Check size={20}/> },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      <div className="flex-grow flex items-center justify-center p-6 py-12">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl border border-gray-100 overflow-hidden">
          
          {/* Progress Bar */}
          <div className="bg-brand-navy p-6">
            <div className="flex justify-between items-center">
              {steps.map((s) => (
                <div key={s.num} className="flex flex-col items-center relative z-10">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${step >= s.num ? 'bg-brand-gold text-brand-navy' : 'bg-white/20 text-gray-400'}`}>
                    {step > s.num ? <Check size={20} /> : s.icon}
                  </div>
                  <span className={`text-xs mt-2 font-bold hidden md:block ${step >= s.num ? 'text-white' : 'text-gray-400'}`}>{s.title}</span>
                </div>
              ))}
              {/* Connecting line */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-white/20 -z-0" style={{ width: '80%', left: '10%' }}></div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            {success ? (
              <div className="text-center py-12">
                <CheckCircle2 className="mx-auto text-brand-teal mb-6" size={64} />
                <h2 className="text-3xl font-serif font-bold text-brand-navy mb-4">Application Submitted!</h2>
                <p className="text-gray-600 mb-8">Your application has been received. We will review your qualifications and contact you for the competency assessment.</p>
                <Link href="/login/tutor" className="bg-brand-royal text-white px-8 py-3 rounded-lg font-bold">Go to Login</Link>
              </div>
            ) : (
              <>
                {/* Step 1: Basic Info */}
                {step === 1 && (
                  <div className="space-y-4">
                    <h2 className="text-2xl font-serif font-bold text-brand-navy mb-6">Step 1: Personal Information</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input type="text" placeholder="First Name" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg" />
                      <input type="text" placeholder="Last Name" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg" />
                    </div>
                    <input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg" />
                    <input type="password" placeholder="Create Password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg" />
                  </div>
                )}

                {/* Step 2: Qualifications */}
                {step === 2 && (
                  <div className="space-y-4">
                    <h2 className="text-2xl font-serif font-bold text-brand-navy mb-6">Step 2: Qualifications</h2>
                    <input type="text" placeholder="Highest Qualification (e.g. BSc Mathematics)" value={formData.qualifications} onChange={(e) => setFormData({...formData, qualifications: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg" />
                    <input type="text" placeholder="Subject Specialisation (e.g. Mathematics & Physics)" value={formData.specialization} onChange={(e) => setFormData({...formData, specialization: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg" />
                    <textarea placeholder="Brief teaching experience..." value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg h-24" />
                  </div>
                )}

                {/* Step 3: Competency Assessment */}
                {step === 3 && (
                  <div className="space-y-4">
                    <h2 className="text-2xl font-serif font-bold text-brand-navy mb-6">Step 3: Competency Assessment</h2>
                    <p className="text-gray-600 mb-4">Once you submit this application, our HR team will send you a subject-specific competency assessment via email. You must pass this to proceed to the teaching demo.</p>
                    <div className="bg-brand-grey p-4 rounded-lg border border-gray-200">
                      <p className="text-sm font-bold text-brand-navy">What to expect:</p>
                      <ul className="list-disc pl-6 text-sm text-gray-600 mt-2">
                        <li>30-minute multiple-choice test</li>
                        <li>Subject-specific questions</li>
                        <li>Pass mark: 80%</li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Step 4: Teaching Demo */}
                {step === 4 && (
                  <div className="space-y-4">
                    <h2 className="text-2xl font-serif font-bold text-brand-navy mb-6">Step 4: Teaching Demonstration</h2>
                    <p className="text-gray-600 mb-4">Qualified candidates will be invited to a 15-minute virtual teaching demonstration with our academic panel.</p>
                    <input type="url" placeholder="Link to a sample teaching video (optional)" value={formData.demoLink} onChange={(e) => setFormData({...formData, demoLink: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg" />
                  </div>
                )}

                {/* Step 5: Review & Submit */}
                {step === 5 && (
                  <div className="space-y-4">
                    <h2 className="text-2xl font-serif font-bold text-brand-navy mb-6">Step 5: Review & Submit</h2>
                    <div className="bg-brand-grey p-6 rounded-lg border border-gray-200 text-sm">
                      <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                      <p><strong>Email:</strong> {formData.email}</p>
                      <p><strong>Qualification:</strong> {formData.qualifications}</p>
                      <p><strong>Specialisation:</strong> {formData.specialization}</p>
                    </div>
                    <label className="flex items-start gap-3">
                      <input type="checkbox" checked={formData.agreedToTerms} onChange={(e) => setFormData({...formData, agreedToTerms: e.target.checked})} className="mt-1" />
                      <span className="text-sm text-gray-600">I confirm that the information provided is accurate and I agree to the academy's safeguarding and academic integrity policies.</span>
                    </label>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                  <button onClick={handleBack} disabled={step === 1} className={`flex items-center gap-2 px-6 py-2 rounded-lg font-bold ${step === 1 ? 'text-gray-400' : 'text-brand-navy hover:bg-gray-100'}`}>
                    <ArrowLeft size={18}/> Back
                  </button>
                  {step < 5 ? (
                    <button onClick={handleNext} className="flex items-center gap-2 px-8 py-3 bg-brand-royal text-white rounded-lg font-bold hover:bg-blue-700">
                      Next <ArrowRight size={18}/>
                    </button>
                  ) : (
                    <button onClick={handleSubmit} disabled={isLoading || !formData.agreedToTerms} className="flex items-center gap-2 px-8 py-3 bg-brand-teal text-white rounded-lg font-bold hover:bg-teal-600 disabled:opacity-50">
                      {isLoading ? <Loader2 className="animate-spin" size={18}/> : 'Submit Application'}
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}