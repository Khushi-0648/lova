import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Heart, ShieldCheck, ArrowRight, CheckCircle, Car } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Footer() {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
    }
  };

  return (
    <footer className="bg-brand-navy-950 text-slate-300 pt-16 pb-8 border-t border-brand-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Callout Banner */}
        <div className="bg-gradient-to-r from-brand-navy-900 via-brand-navy-850 to-brand-navy-900 border border-slate-700/60 rounded-2xl p-6 sm:p-10 mb-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold-500/20 text-brand-gold-400 border border-brand-gold-500/30">
              <Car className="w-3.5 h-3.5" /> Have an old car, truck, or boat?
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">
              Donate Your Vehicle in Any of the 50 States
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Running or non-running. We arrange 100% free towing, take care of all paperwork, and issue maximum IRS tax deduction receipts.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <Link
              to="/vehicle-donation"
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider text-brand-navy-950 bg-brand-gold-500 hover:bg-brand-gold-400 shadow-lg transition-all"
            >
              Start Vehicle Donation
            </Link>
            <Link
              to="/donate"
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider text-white bg-brand-red-600 hover:bg-brand-red-500 shadow-lg transition-all"
            >
              Donate Money
            </Link>
          </div>
        </div>

        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={logoImg} 
                alt="LOVOA Logo" 
                className="h-16 w-auto object-contain brightness-110"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://lovoa.org/wp-content/uploads/2025/01/logo-01-01.png";
                }}
              />
              <div>
                <span className="font-display font-black text-lg text-white block uppercase tracking-tight">
                  League of Veterans
                </span>
                <span className="text-xs text-brand-gold-400 font-semibold tracking-widest uppercase block">
                  of America INC
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              League of Veterans of America INC is a dedicated non-profit organization serving Purple Heart, combat wounded, and homeless veterans across all 50 U.S. states with shelters, adapted smart homes, and career transition resources.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-700/50 text-emerald-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Official 501(c)(3) Non-Profit Entity</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-display">
              Learn More
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/impact" className="hover:text-white transition-colors">Financial Transparency</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">Frequently Asked Questions</Link></li>
            </ul>
          </div>

          {/* Col 3: Programs & Support (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-display">
              Ways to Give
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/donate" className="hover:text-brand-red-400 transition-colors flex items-center gap-1.5"><Heart className="w-3.5 h-3.5 text-brand-red-500 fill-current" /> Monetary Donations</Link></li>
              <li><Link to="/vehicle-donation" className="hover:text-brand-gold-400 transition-colors flex items-center gap-1.5"><Car className="w-3.5 h-3.5 text-brand-gold-500" /> Car, Truck & RV Donations</Link></li>
              <li><Link to="/causes/emergency-shelter" className="hover:text-white transition-colors">Emergency Shelter Network</Link></li>
              <li><Link to="/causes/smart-homes-adaptation" className="hover:text-white transition-colors">Smart Home Adaptation</Link></li>
              <li><Link to="/causes/wounded-warriors-ptsd" className="hover:text-white transition-colors">Wounded Warrior PTSD Relief</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-display">
              Official Contact
            </h4>
            
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold-500 shrink-0" />
                <a href="tel:+15617708708" className="hover:text-brand-gold-400 font-medium">
                  +1 (561) 770-8708
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold-500 shrink-0" />
                <a href="mailto:lovoa47@outlook.com" className="hover:text-brand-gold-400 font-medium">
                  lovoa47@outlook.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold-500 shrink-0 mt-0.5" />
                <span>Operating & Serving Heroes across all 50 U.S. States</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="pt-2">
              <p className="text-xs text-slate-400 mb-2">Subscribe to our monthly impact dispatches:</p>
              {subscribed ? (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-800/40">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>Thank you for standing with our veterans!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-brand-gold-500"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-brand-gold-500 hover:bg-brand-gold-400 text-brand-navy-950 rounded-lg font-bold transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>© {new Date().getFullYear()} League of Veterans of America INC (lovoa.org). All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>Contributions are 100% Tax-Deductible</span>
            <Link to="/contact" className="hover:text-slate-300">Contact</Link>
            <Link to="/faq" className="hover:text-slate-300">FAQs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
