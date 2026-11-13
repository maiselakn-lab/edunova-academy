"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ChevronDown, ChevronRight, FileText, Home, CreditCard, 
  User, Mail, Phone, MapPin, DollarSign, ArrowLeft, Download
} from 'lucide-react';

export default function StudentProfile() {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Mock student data matching the screenshot
  const student = {
    name: "KHOLOFELO NORMAN, MAISELA",
    studentNumber: "217022464",
    gender: "Male",
    birthdate: "21-Dec-1993",
    idNumber: "9312216043083",
    maritalStatus: "Single",
    homeLanguage: "SOTHONORTH",
    citizenship: "SOUTH AFRICA",
    email: "217022464@edu.vut.ac.za",
    cellphone: "0721440772",
    postalAddress: "PO BOX 955 NEBO PHOKWANE MAKOSHALA 1059",
    studyAddress: "Same as postal address",
    currentBalance: "R 0.00"
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      
      {/* Top Header matching VUT style but with EduNova branding */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
        <div className="flex justify-between items-center px-4 md:px-8 h-20">
          <div className="flex items-center gap-4">
             <img src="/logo.png" alt="EduNova" className="h-12 w-auto object-contain" />
             <div className="border-l border-gray-300 h-8 mx-2 hidden md:block"></div>
             <h1 className="text-xl font-bold text-brand-navy hidden md:block">Student Records Portal</h1>
          </div>
          <div className="text-sm font-bold text-brand-navy">
            Friday, 13th November 2026
          </div>
        </div>
      </header>

      <div className="flex max-w-[1600px] mx-auto p-4 md:p-8 gap-8">
        
        {/* Left Sidebar Navigation (Matches the screenshot) */}
        <aside className="w-64 hidden lg:block shrink-0">
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="bg-brand-royal text-white px-4 py-3 font-bold text-sm">
              Student iEnabler Menu
            </div>
            
            <nav className="flex flex-col text-sm text-gray-600 py-2">
              <button className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 text-left font-medium">
                Application <ChevronDown size={14} />
              </button>
              <button className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 text-left font-medium">
                Returning Students Application <ChevronDown size={14} />
              </button>
              <button className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 text-left font-medium">
                Academic Registration <ChevronDown size={14} />
              </button>
              <button className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 text-left font-medium">
                Residence Registration <ChevronDown size={14} />
              </button>
              <button className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 text-left font-medium bg-blue-50 text-brand-royal border-l-4 border-brand-royal">
                Student Admin <ChevronDown size={14} />
              </button>
              <button className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 text-left font-medium pl-8">
                Financial Aid
              </button>
              <button className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 text-left font-medium pl-8">
                Student Enquiry
              </button>
              <button className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 text-left font-medium pl-8">
                Maintain Banking details
              </button>
              <button className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 text-left font-medium pl-8">
                SID Instant EFT Payments
              </button>
              <button className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 text-left font-medium pl-8">
                Student Finance
              </button>
              <button className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 text-left font-medium pl-8">
                Verify Biographical Detail
              </button>
              <button className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 text-left font-medium">
                Higher Degrees <ChevronDown size={14} />
              </button>
              
              <div className="px-4 pt-4 pb-2">
                 <button onClick={() => router.push('/portal/parent')} className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 rounded flex justify-center items-center gap-2 transition-colors">
                    Logout
                 </button>
              </div>
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-grow flex flex-col lg:flex-row gap-8">
          
          {/* Center Column: Profile Details Table */}
          <div className="flex-grow bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            
            {/* Profile Picture Placeholder */}
            <div className="h-48 bg-gray-100 flex items-center justify-center border-b border-gray-200 relative">
               <User size={64} className="text-gray-300" />
               <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold text-gray-500 rounded shadow-sm border border-gray-200">
                 Student Photo
               </div>
            </div>

            {/* Data Table */}
            <div className="w-full text-sm">
              <div className="bg-brand-navy text-white px-6 py-4 font-bold tracking-wider">
                {student.name}
              </div>
              
              <div className="divide-y divide-gray-100">
                <div className="flex px-6 py-3 hover:bg-gray-50 transition-colors">
                  <span className="w-1/3 font-bold text-gray-700">Student Nbr</span>
                  <span className="w-2/3 text-gray-600">{student.studentNumber}</span>
                </div>
                <div className="flex px-6 py-3 hover:bg-gray-50 transition-colors bg-gray-50/50">
                  <span className="w-1/3 font-bold text-gray-700">Gender</span>
                  <span className="w-2/3 text-gray-600">{student.gender}</span>
                </div>
                <div className="flex px-6 py-3 hover:bg-gray-50 transition-colors">
                  <span className="w-1/3 font-bold text-gray-700">Birthdate</span>
                  <span className="w-2/3 text-gray-600">{student.birthdate}</span>
                </div>
                <div className="flex px-6 py-3 hover:bg-gray-50 transition-colors bg-gray-50/50">
                  <span className="w-1/3 font-bold text-gray-700">ID Nbr</span>
                  <span className="w-2/3 text-gray-600">{student.idNumber}</span>
                </div>
                <div className="flex px-6 py-3 hover:bg-gray-50 transition-colors">
                  <span className="w-1/3 font-bold text-gray-700">Marital Status</span>
                  <span className="w-2/3 text-gray-600">{student.maritalStatus}</span>
                </div>
                <div className="flex px-6 py-3 hover:bg-gray-50 transition-colors bg-gray-50/50">
                  <span className="w-1/3 font-bold text-gray-700">Home Lang</span>
                  <span className="w-2/3 text-gray-600">{student.homeLanguage}</span>
                </div>
                <div className="flex px-6 py-3 hover:bg-gray-50 transition-colors">
                  <span className="w-1/3 font-bold text-gray-700">Citizenship</span>
                  <span className="w-2/3 text-gray-600">{student.citizenship}</span>
                </div>
              </div>

              {/* Contact Info Blocks */}
              <div className="p-6 space-y-4">
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail size={16} className="text-brand-royal" />
                    <span className="font-bold text-brand-navy text-xs uppercase tracking-wider">Email Address</span>
                  </div>
                  <p className="font-medium text-gray-700">{student.email}</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone size={16} className="text-brand-royal" />
                    <span className="font-bold text-brand-navy text-xs uppercase tracking-wider">Cellphone</span>
                  </div>
                  <p className="font-medium text-gray-700">{student.cellphone}</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={16} className="text-brand-royal" />
                    <span className="font-bold text-brand-navy text-xs uppercase tracking-wider">Postal Address</span>
                  </div>
                  <p className="font-medium text-gray-700 leading-relaxed">{student.postalAddress}</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <div className="flex items-center gap-2 mb-2">
                    <Home size={16} className="text-brand-royal" />
                    <span className="font-bold text-brand-navy text-xs uppercase tracking-wider">Study Address</span>
                  </div>
                  <p className="font-medium text-gray-700">{student.studyAddress}</p>
                </div>

                <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign size={16} className="text-red-600" />
                    <span className="font-bold text-red-700 text-xs uppercase tracking-wider">Current Balance</span>
                  </div>
                  <p className="font-bold text-red-700 text-xl">{student.currentBalance}</p>
                  <p className="text-xs text-red-500 mt-1">You owe the institution</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Action Menu (Matches the blue buttons in screenshot) */}
          <div className="w-full lg:w-72 shrink-0 space-y-4">
            
            <button className="w-full bg-white border border-gray-200 hover:border-brand-royal hover:shadow-md transition-all rounded-xl p-5 flex items-center justify-between text-left group">
              <div>
                <h3 className="font-bold text-brand-navy group-hover:text-brand-royal">Application Information</h3>
                <p className="text-xs text-gray-500 mt-1">View your course application status</p>
              </div>
              <ChevronRight size={20} className="text-gray-400 group-hover:text-brand-royal group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="w-full bg-white border border-gray-200 hover:border-brand-royal hover:shadow-md transition-all rounded-xl p-5 flex items-center justify-between text-left group">
              <div>
                <h3 className="font-bold text-brand-navy group-hover:text-brand-royal">Registration Information</h3>
                <p className="text-xs text-gray-500 mt-1">View module registrations</p>
              </div>
              <ChevronRight size={20} className="text-gray-400 group-hover:text-brand-royal group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="w-full bg-white border border-gray-200 hover:border-brand-royal hover:shadow-md transition-all rounded-xl p-5 flex items-center justify-between text-left group">
              <div>
                <h3 className="font-bold text-brand-navy group-hover:text-brand-royal">Residence Information</h3>
                <p className="text-xs text-gray-500 mt-1">Hostel and accommodation details</p>
              </div>
              <ChevronRight size={20} className="text-gray-400 group-hover:text-brand-royal group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="w-full bg-white border border-gray-200 hover:border-brand-royal hover:shadow-md transition-all rounded-xl p-5 flex items-center justify-between text-left group">
              <div>
                <h3 className="font-bold text-brand-navy group-hover:text-brand-royal">Financial Information</h3>
                <p className="text-xs text-gray-500 mt-1">View fees, statements, and payments</p>
              </div>
              <ChevronRight size={20} className="text-gray-400 group-hover:text-brand-royal group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="pt-4 mt-8 border-t border-gray-200">
               <button className="w-full bg-brand-navy text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2">
                 <Download size={18} /> Download Student Record
               </button>
            </div>

          </div>
        </main>
      </div>

      {/* Footer bar */}
      <footer className="mt-12 border-t border-gray-200 bg-white py-4 text-center">
        <p className="text-xs text-gray-500">
          [ Contact Us | About Us | Disclaimer | Terms & Conditions | Privacy & Security Statement | Powered By EduNova ]
        </p>
      </footer>

    </div>
  );
}