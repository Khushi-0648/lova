import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileText } from 'lucide-react';
import ImpactStats from '../components/ImpactStats';

export default function ImpactPage() {
  const allocations = [
    { label: 'Emergency Shelters & Housing Programs', percent: 52, color: 'bg-brand-red-600', textColor: 'text-brand-red-600' },
    { label: 'Smart Homes & Adapted Mobility Renovations', percent: 21, color: 'bg-brand-gold-500', textColor: 'text-brand-gold-600' },
    { label: 'PTSD Counseling, Food & Medical Care', percent: 13, color: 'bg-emerald-500', textColor: 'text-emerald-600' },
    { label: 'Nationwide Logistics & Case Management', percent: 8, color: 'bg-blue-500', textColor: 'text-blue-600' },
    { label: 'Fundraising & Donor Accountability', percent: 6, color: 'bg-slate-400', textColor: 'text-slate-600' },
  ];

  return (
    <div className="space-y-16 pb-24">
      
      {/* Hero */}
      <section className="bg-brand-navy-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold-500/20 text-brand-gold-400 border border-brand-gold-500/30">
            <ShieldCheck className="w-3.5 h-3.5" /> 100% Financial Accountability
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white">
            Impact & Transparency
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Every dollar entrusted to League of Veterans of America is deployed with maximum efficiency to rescue and restore veterans' lives.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <ImpactStats />

      {/* Where Every Dollar Goes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-4 sm:p-8 lg:p-12 shadow-xl border border-slate-200">
          <div className="max-w-3xl space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-red-600">
              Fund Distribution
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-black text-brand-navy-950">
              86% Goes Directly to Veteran Support
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We maintain minimal overhead so the vast majority of all monetary and vehicle donations translate directly into beds, meals, therapy, and adaptive accessibility.
            </p>
          </div>

          {/* Allocation Bar */}
          <div className="space-y-6">
            <div className="h-6 w-full rounded-full overflow-hidden flex bg-slate-100 shadow-inner">
              {allocations.map((item, idx) => (
                <div
                  key={idx}
                  style={{ width: `${item.percent}%` }}
                  className={`${item.color} h-full transition-all duration-500 hover:opacity-90`}
                  title={`${item.label}: ${item.percent}%`}
                />
              ))}
            </div>

            {/* Legend & Breakdown Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
              {allocations.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className={`text-2xl font-black ${item.textColor}`}>{item.percent}%</span>
                    <span className={`w-3 h-3 rounded-full ${item.color}`} />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800">{item.label}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Annual Reporting & Governance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-5 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-brand-navy-950">
              501(c)(3) Tax-Exempt Status
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              League of Veterans of America INC is recognized by the IRS as an official non-profit entity. Donors receive instant compliant receipts with tax ID information for federal and state deductions.
            </p>
          </div>

          <div className="bg-white p-5 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-brand-gold-600 flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-brand-navy-950">
              Donor Inquiries & Financial Requests
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Have questions regarding program allocations, corporate matching, or vehicle title liquidation? Our executive team provides open reporting upon request via <a href="mailto:lovoa47@outlook.com" className="font-bold underline text-brand-navy-950">lovoa47@outlook.com</a>.
            </p>
          </div>

        </div>
      </section>

      {/* Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-navy-950 rounded-3xl p-5 sm:p-8 lg:p-12 text-white text-center space-y-5 sm:space-y-6">
          <h3 className="text-2xl sm:text-3xl font-display font-black">
            Join the League of Guardians
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Your recurring monthly gift of $25, $50, or $100 creates an unbreakable foundation for homeless veterans across the country.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/donate"
              className="px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider text-white bg-brand-red-600 hover:bg-brand-red-500 shadow-lg transition-all"
            >
              Start Monthly Pledge
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
