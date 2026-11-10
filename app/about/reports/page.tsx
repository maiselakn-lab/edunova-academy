import PublicNavbar from '@/components/layout/PublicNavbar';
import { FileText, Download, BarChart3, TrendingUp, ShieldCheck } from 'lucide-react';

export default function Reports() {
  const reports = [
    { year: "2025", title: "Annual Report & Audited Financials", size: "4.2 MB", type: "PDF" },
    { year: "2024", title: "Founding Year & Strategic Impact Report", size: "2.1 MB", type: "PDF" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-grey">
      <PublicNavbar />
      
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Annual Reports</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Transparency in our growth, academic impact, and financial performance.</p>
        </div>
      </section>

      <section className="py-24 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 w-full">
        
        {/* Key Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4">
            <div className="w-12 h-12 bg-brand-royal/10 text-brand-royal rounded-full flex items-center justify-center"><TrendingUp size={24} /></div>
            <div><p className="text-sm text-gray-500 font-bold">Growth</p><p className="text-xl font-bold text-brand-navy">+150% Students</p></div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4">
            <div className="w-12 h-12 bg-brand-teal/10 text-brand-teal rounded-full flex items-center justify-center"><BarChart3 size={24} /></div>
            <div><p className="text-sm text-gray-500 font-bold">Academic Impact</p><p className="text-xl font-bold text-brand-navy">85% Pass Rate</p></div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4">
            <div className="w-12 h-12 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center"><ShieldCheck size={24} /></div>
            <div><p className="text-sm text-gray-500 font-bold">Governance</p><p className="text-xl font-bold text-brand-navy">100% POPIA Compliant</p></div>
          </div>
        </div>

        {/* Report List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200 bg-brand-grey">
            <h2 className="text-xl font-bold text-brand-navy">Download Official Documents</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {reports.map((report, i) => (
              <div key={i} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-grey rounded-lg flex items-center justify-center text-brand-navy"><FileText size={24} /></div>
                  <div>
                    <h3 className="font-bold text-brand-navy">{report.title}</h3>
                    <p className="text-sm text-gray-500">{report.year} Academic Year • {report.size}</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-brand-royal font-bold text-sm hover:underline bg-brand-royal/5 px-4 py-2 rounded-lg">
                  <Download size={16} /> Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}