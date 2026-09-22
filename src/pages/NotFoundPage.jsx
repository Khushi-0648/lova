import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Heart, 
  Car, 
  ShieldAlert, 
  ArrowRight, 
  LifeBuoy, 
  Compass
} from 'lucide-react';

export default function NotFoundPage() {
  const quickLinks = [
    { title: 'Home Page', path: '/', desc: 'Return to our primary mission hub' },
    { title: 'Our Causes & Programs', path: '/causes', desc: 'Emergency shelters, wounded warrior care & smart homes' },
    { title: 'Donate a Vehicle', path: '/vehicle-donation', desc: 'Complimentary 50-state towing & maximum tax deduction' },
    { title: 'Financial Transparency', path: '/impact', desc: 'Audited financials & how every dollar is allocated' },
    { title: 'About Our Heritage', path: '/about', desc: 'Founded by and for American military service veterans' },
    { title: 'Frequently Asked Questions', path: '/faq', desc: 'Answers regarding tax deduction receipts and programs' },
  ];

  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full space-y-12">
        
        {/* Top 404 Hero Card */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-red-500/10 text-brand-red-600 border border-brand-red-500/20">
            <ShieldAlert className="w-4 h-4 text-brand-red-600" />
            <span>Error 404 • Destination Not Found</span>
          </div>

          <div className="relative inline-block">
            <h1 className="text-7xl sm:text-9xl font-display font-black tracking-tighter text-brand-navy-950 opacity-90 select-none">
              404
            </h1>
            <span className="absolute -bottom-2 sm:-bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-gold-500 text-brand-navy-950 shadow-md whitespace-nowrap">
              Page Off Course
            </span>
          </div>

          <div className="space-y-3 max-w-xl mx-auto pt-2">
            <h2 className="text-2xl sm:text-3xl font-display font-black text-brand-navy-950">
              Page Not Found — But Our Mission Never Stops
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The link you clicked may have moved, expired, or been typed incorrectly. Let’s get you back on track to standing by America's veterans and first responders.
            </p>
          </div>

          {/* Core Action CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider text-white bg-brand-navy-950 hover:bg-brand-navy-900 shadow-md transition-all"
            >
              <Home className="w-4 h-4 text-brand-gold-400" />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider text-white bg-brand-red-600 hover:bg-brand-red-700 shadow-md transition-all"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Make a Donation</span>
            </Link>
            <Link
              to="/vehicle-donation"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider text-brand-navy-950 bg-brand-gold-400 hover:bg-brand-gold-300 shadow-md transition-all"
            >
              <Car className="w-4 h-4" />
              <span>Donate a Car or RV</span>
            </Link>
          </div>
        </div>

        {/* Quick Directory Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-brand-navy-900" />
              <h3 className="font-display font-bold text-brand-navy-950 text-base">
                Looking for something specific?
              </h3>
            </div>
            <span className="text-xs text-slate-400">Popular Destinations</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="group p-4 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-brand-gold-400 hover:shadow-md transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-navy-950 group-hover:text-brand-red-600 transition-colors flex items-center justify-between">
                    <span>{link.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-red-600" />
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-snug">
                    {link.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Veteran Crisis & Direct Help Banner */}
        <div className="bg-gradient-to-r from-brand-navy-950 to-brand-navy-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold-400">
              <LifeBuoy className="w-4 h-4" /> Immediate Assistance
            </div>
            <h4 className="text-lg font-display font-extrabold text-white">
              Are you a veteran in need of emergency housing?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Reach our intake support line directly or dial the official Veterans Crisis Line:
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href="tel:+15617708708"
              className="text-center px-5 py-3 rounded-xl bg-white text-brand-navy-950 hover:bg-slate-100 text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              Call +1 (561) 770-8708
            </a>
            <a
              href="tel:988"
              className="text-center px-5 py-3 rounded-xl bg-brand-red-600 hover:bg-brand-red-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              Dial 988 (Press 1)
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
