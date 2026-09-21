import React from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { CheckCircle2, Download, Printer, Share2, Heart, ShieldCheck, ArrowRight, Home } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function SuccessPage() {
  const location = useLocation();
  const data = location.state;

  // If accessed directly without donating, use friendly fallback data
  const donation = data || {
    receiptId: `LV-${Math.floor(100000 + Math.random() * 900000)}`,
    amount: 100,
    baseAmount: 100,
    frequency: 'one-time',
    causeId: 'general-fund',
    donorName: 'Dedicated Patriot Supporter',
    email: 'donor@example.com',
    paymentMethod: 'card',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-50 py-12 sm:py-20 pb-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Celebration Header */}
        <div className="text-center space-y-3">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg ring-8 ring-emerald-50">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-brand-navy-950">
            Thank You for Standing with Our Heroes!
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto">
            Your generous contribution to <strong className="text-slate-900">League of Veterans of America INC</strong> directly provides shelter, food, and independence to combat veterans.
          </p>
        </div>

        {/* Official Printable Receipt Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200 space-y-8 print:shadow-none print:border-none">
          
          {/* Receipt Top Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <img 
                src={logoImg} 
                alt="LOVOA" 
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://lovoa.org/wp-content/uploads/2025/01/logo-01-01.png";
                }}
              />
              <div>
                <span className="font-display font-black text-base text-brand-navy-950 block uppercase">
                  League of Veterans of America INC
                </span>
                <span className="text-xs text-slate-500">Official Non-Profit Tax Receipt</span>
              </div>
            </div>

            <div className="text-center sm:text-right">
              <span className="text-xs font-mono font-bold text-slate-500 block">Receipt Number</span>
              <span className="text-sm font-mono font-black text-brand-navy-950">{donation.receiptId}</span>
            </div>
          </div>

          {/* Receipt Itemized Details */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
            <div>
              <span className="text-slate-400 font-bold block mb-1">Date</span>
              <span className="font-bold text-slate-800">{donation.date}</span>
            </div>
            <div>
              <span className="text-slate-400 font-bold block mb-1">Donor Name</span>
              <span className="font-bold text-slate-800 truncate block">{donation.donorName}</span>
            </div>
            <div>
              <span className="text-slate-400 font-bold block mb-1">Frequency</span>
              <span className="font-bold text-slate-800 capitalize">{donation.frequency}</span>
            </div>
            <div>
              <span className="text-slate-400 font-bold block mb-1">Payment Type</span>
              <span className="font-bold text-slate-800 uppercase">{donation.paymentMethod}</span>
            </div>
          </div>

          {/* Amount Paid */}
          <div className="flex justify-between items-center py-4 px-6 rounded-2xl bg-brand-navy-950 text-white">
            <div className="space-y-0.5">
              <span className="text-xs text-brand-gold-400 font-bold uppercase tracking-wider block">
                Total Tax-Deductible Gift
              </span>
              <span className="text-xs text-slate-400">100% Eligible under IRS 501(c)(3)</span>
            </div>
            <div className="text-3xl font-display font-black text-white">
              ${donation.amount}
            </div>
          </div>

          {/* Tax Notice */}
          <div className="text-xs text-slate-500 space-y-1.5 leading-relaxed">
            <p>
              No goods or services were provided in exchange for this contribution other than intangible religious or charitable benefits. Please retain this receipt for your state and federal income tax records.
            </p>
            <p className="font-medium text-slate-700">
              League of Veterans of America INC • lovoa47@outlook.com • +1 (561) 770-8708
            </p>
          </div>

          {/* Action Bar (Print / Share) */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 print:hidden">
            <button
              type="button"
              onClick={handlePrint}
              className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-xs font-bold text-slate-700 flex items-center gap-2 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print Official Receipt</span>
            </button>

            <Link
              to="/"
              className="px-6 py-2.5 rounded-xl bg-brand-navy-950 hover:bg-brand-navy-900 text-xs font-bold text-white flex items-center gap-2 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
