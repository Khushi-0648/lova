import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Car, 
  ShieldCheck, 
  CheckCircle2, 
  Star, 
  ExternalLink, 
  ArrowRight, 
  Phone, 
  Building2, 
  Gift, 
  FileCheck, 
  Award, 
  Lock, 
  HelpCircle,
  Sparkles,
  Package
} from 'lucide-react';
import ImpactStats from '../components/ImpactStats';
import DonationWidget from '../components/DonationWidget';
import VideoExperience from '../components/VideoExperience';
import carPropertyImg from '../assets/car-property-donation.jpg';
import heroDonationBg from '../assets/hero-donation-bg.jpg';
import paypalCardsSvg from '../assets/paypal-cards.svg';
import paypalWordmarkSvg from '../assets/paypal-wordmark.svg';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';

export default function HomePage() {
  const [monthlyTier, setMonthlyTier] = useState(35);

  const monthlyTierData = {
    19: {
      dailyCost: '$0.63 / day',
      meals: '228 Hot Meals / Year',
      shelterNights: '12 Emergency Shelter Nights',
      counseling: '2 Trauma Support Check-ins',
      description: 'Provides regular sustenance and warm weather-proof gear for homeless veterans living on the streets.',
      badge: 'Hero Supporter'
    },
    35: {
      dailyCost: '$1.16 / day',
      meals: '420 Hot Meals / Year',
      shelterNights: '24 Supervised Shelter Nights',
      counseling: '6 Clinical PTSD Counseling Sessions',
      description: 'Guarantees consistent shelter lodging and psychological care to help a veteran transition off the streets.',
      badge: 'Most Popular'
    },
    50: {
      dailyCost: '$1.66 / day',
      meals: '600 Hot Meals / Year',
      shelterNights: '36 Supervised Shelter Nights',
      counseling: '12 One-on-One Therapy Sessions',
      description: 'Finances comprehensive transitional rehabilitation, medical transit, and job placement assistance.',
      badge: 'Guardian Hero'
    },
    100: {
      dailyCost: '$3.33 / day',
      meals: '1,200 Hot Meals / Year',
      shelterNights: '72 Safe Shelter Nights',
      counseling: 'Full Year Adaptive Home & PTSD Care',
      description: 'Directly funds permanent adaptive smart-home fixtures and wheelchair accessibility ramps for wounded warriors.',
      badge: 'Champion Partner'
    }
  };

  return (
    <div className="w-full overflow-hidden">
      
      {/* 0. Hero Section */}
      <section className="relative w-full pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-32 overflow-hidden border-b border-slate-200 text-white">
        
        {/* Background Image Related to Donation - 100% natural photo colors with zero blue effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroDonationBg})` }}
        />

        {/* Minimal neutral overlay (zero blue tint) so original colors shine */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Mission Narrative */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left bg-white/95 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-3xl shadow-2xl border border-white/80 text-slate-900">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-brand-navy-950 text-xs sm:text-sm font-bold tracking-wide shadow-sm">
                <ShieldCheck className="w-4 h-4 text-brand-red-600" />
                <span>League of Veterans of America INC • 501(c)(3)</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-display font-black text-brand-navy-950 tracking-tight leading-[1.1]">
                Standing by Those <br className="hidden sm:inline" />
                <span className="text-brand-red-600">
                  Who Stood for Us.
                </span>
              </h1>

              <p className="text-sm sm:text-lg text-slate-700 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Over 35,000 veterans sleep without a roof tonight. At LOVOA, we turn compassion into action—providing emergency transitional shelter, adaptive Smart Homes for severely wounded heroes, and nationwide vehicle donation programs.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
                <Link
                  to="/donate"
                  className="w-full sm:w-auto px-7 py-4 rounded-xl font-display font-black text-sm uppercase tracking-wider text-white bg-gradient-to-r from-brand-red-600 to-brand-red-700 hover:from-brand-red-500 hover:to-brand-red-600 shadow-xl hover:shadow-glow-red transition-all flex items-center justify-center gap-2 group transform active:scale-95"
                >
                  <Heart className="w-5 h-5 fill-current text-white group-hover:scale-110 transition-transform" />
                  <span>Donate Today</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/vehicle-donation"
                  className="w-full sm:w-auto px-6 py-4 rounded-xl font-display font-bold text-sm uppercase tracking-wider text-brand-navy-950 bg-white hover:bg-slate-50 border border-slate-300 shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Car className="w-5 h-5 text-brand-red-600" />
                  <span>Donate Vehicle</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-slate-300/80 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs text-slate-700 font-semibold">
                <div className="flex items-center gap-2 bg-white/80 px-2.5 py-1 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>100% Tax Deductible</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 px-2.5 py-1 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>50 U.S. States Covered</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 px-2.5 py-1 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Direct Shelter Operations</span>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Donation Box */}
            <div className="lg:col-span-5">
              <DonationWidget defaultCampaign="emergency-shelter" />
            </div>

          </div>
        </div>
      </section>

      {/* Impact Stats Overlay Counter */}
      <ImpactStats />

      {/* 1. Quick & Easy 3-Step Donation Process + PayPal (WHITE) */}
      <section className="w-full bg-white text-slate-800 py-16 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-brand-red-600 font-bold uppercase tracking-wider text-xs">
              Simple & Transparent
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-black text-brand-navy-950">
              Our Donation Process is Quick & Easy...
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Supporting homeless and combat wounded veterans takes less than 2 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col items-center text-center group hover:bg-white hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-navy-950 text-brand-gold-400 flex items-center justify-center font-black text-xl shadow">
                1
              </div>
              <h3 className="font-display font-bold text-lg text-brand-navy-950">Choose Amount</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Select a one-time or recurring donation amount that fits your contribution goals. Every dollar directly funds food, shelter, and medical therapy.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col items-center text-center group hover:bg-white hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-navy-950 text-brand-gold-400 flex items-center justify-center font-black text-xl shadow">
                2
              </div>
              <h3 className="font-display font-bold text-lg text-brand-navy-950">Fill in Your Details</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Enter your payment information securely via our trusted platform, PayPal, or credit/debit card with bank-level encryption.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col items-center text-center group hover:bg-white hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-navy-950 text-brand-gold-400 flex items-center justify-center font-black text-xl shadow">
                3
              </div>
              <h3 className="font-display font-bold text-lg text-brand-navy-950">Complete Your Donation</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Click the "Donate Now" button to instantly support homeless veterans, fund adapted homes, and make a lasting, tangible impact.
              </p>
            </div>
          </div>

          {/* Official PayPal Badge & Direct Portal Callout */}
          <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/80 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-bold text-brand-navy-950 text-sm sm:text-base">
                Official Live PayPal Non-Profit Portal
              </h4>
              <p className="text-xs text-slate-600">
                You can also donate directly via the official lovoa.org verified PayPal gateway link.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <div className="flex flex-col items-center">
                <img 
                  src={paypalCardsSvg} 
                  alt="Debit and Credit Cards" 
                  className="h-5 object-contain"
                />
                <div className="text-[10px] text-slate-500 mt-1">
                  Powered by <img src={paypalWordmarkSvg} alt="PayPal" className="h-3 inline" />
                </div>
              </div>

              <a
                href="https://www.paypal.com/ncp/payment/F923SVVM97EPU"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto justify-center px-6 py-3.5 rounded-xl bg-[#ffc439] hover:bg-[#f4b628] text-slate-900 font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm border border-[#f0b122] transition-all shrink-0"
              >
                <span>Donate via PayPal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive YouTube Video Impact Experience (BLUE) */}
      <VideoExperience />

      {/* 3. Tangible Impact by Donation Amount (WHITE) */}
      <section className="w-full bg-slate-50 text-slate-800 py-16 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
            <span className="text-brand-red-600 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-1.5">
              <Heart className="w-4 h-4 fill-current" /> Transparent Impact
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-black text-brand-navy-950">
              Where Every Dollar Goes
            </h2>
            <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
              Every contribution directly changes a veteran’s life. See the tangible difference your gift makes today.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tier $25 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-xl hover:border-brand-red-500/30 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-display font-black text-brand-navy-950">$25</span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                    Essential Relief
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-brand-navy-950">
                  Hot Meals & Hygiene Kits
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Provides 7 nutritious hot meals, clean socks, and an essential hygiene care package for a homeless veteran.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  to="/donate"
                  state={{ amount: 25 }}
                  className="w-full py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-brand-navy-950 bg-slate-100 hover:bg-brand-red-600 hover:text-white transition-all flex items-center justify-center gap-2 group-hover:bg-brand-red-600 group-hover:text-white"
                >
                  <span>Donate $25</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Tier $50 */}
            <div className="bg-white rounded-2xl p-6 border-2 border-brand-red-600/40 shadow-md hover:shadow-xl hover:border-brand-red-600 transition-all flex flex-col justify-between group relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-brand-red-600 text-white text-[10px] font-black uppercase tracking-wider shadow">
                Most Popular
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-display font-black text-brand-red-600">$50</span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-brand-red-700">
                    Emergency Bed
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-brand-navy-950">
                  Safe Overnight Lodging
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Funds 2 nights in warm, supervised emergency transitional shelter with hot showers and secure personal storage.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  to="/donate"
                  state={{ amount: 50 }}
                  className="w-full py-3 rounded-xl font-display font-black text-xs uppercase tracking-wider text-white bg-brand-red-600 hover:bg-brand-red-700 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-glow-red"
                >
                  <span>Donate $50</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Tier $100 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-xl hover:border-brand-red-500/30 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-display font-black text-brand-navy-950">$100</span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                    Mental Health
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-brand-navy-950">
                  PTSD Trauma Counseling
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Funds a clinical one-on-one session with a licensed trauma specialist dedicated to combat veteran rehabilitation.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  to="/donate"
                  state={{ amount: 100 }}
                  className="w-full py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-brand-navy-950 bg-slate-100 hover:bg-brand-red-600 hover:text-white transition-all flex items-center justify-center gap-2 group-hover:bg-brand-red-600 group-hover:text-white"
                >
                  <span>Donate $100</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Tier $250 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-xl hover:border-brand-red-500/30 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-display font-black text-brand-navy-950">$250</span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                    Smart Home
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-brand-navy-950">
                  Adaptive Home Accessibility
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Directly finances wheelchair ramps, automatic doors, and barrier-free bathroom modifications for amputee veterans.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  to="/donate"
                  state={{ amount: 250 }}
                  className="w-full py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-brand-navy-950 bg-slate-100 hover:bg-brand-red-600 hover:text-white transition-all flex items-center justify-center gap-2 group-hover:bg-brand-red-600 group-hover:text-white"
                >
                  <span>Donate $250</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Monthly Giving Impact Calculator (BLUE) */}
      <section className="w-full bg-brand-navy-950 py-16 sm:py-24 border-b border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-brand-gold-400 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-brand-gold-400" /> Interactive Giving Simulator
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-black text-white">
              See the Power of Monthly Giving
            </h2>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              Pocket change a day can end veteran homelessness. Select a monthly pledge below to see your annual life-saving impact.
            </p>
          </div>

          {/* Tier Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 max-w-2xl mx-auto">
            {[19, 35, 50, 100].map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => setMonthlyTier(amt)}
                className={`flex-1 min-w-[75px] sm:min-w-[120px] py-3 sm:py-4 px-3 sm:px-6 rounded-2xl font-display font-black text-base sm:text-xl transition-all flex flex-col items-center justify-center border-2 ${
                  monthlyTier === amt
                    ? 'bg-brand-red-600 border-brand-red-500 text-white shadow-lg shadow-brand-red-600/30 scale-105'
                    : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span>${amt}</span>
                <span className="text-[10px] sm:text-xs font-semibold opacity-80 mt-0.5">/month</span>
              </button>
            ))}
          </div>

          {/* Dynamic Impact Display Card */}
          <div className="bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-slate-800 max-w-4xl mx-auto shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-gold-500/20 text-brand-gold-300 border border-brand-gold-500/30">
                  {monthlyTierData[monthlyTier].badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-black text-white mt-2">
                  Pledge ${monthlyTier}/Month <span className="text-slate-400 font-normal text-sm">({monthlyTierData[monthlyTier].dailyCost})</span>
                </h3>
              </div>
              <Link
                to="/donate"
                state={{ amount: monthlyTier, frequency: 'monthly' }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-display font-black text-xs uppercase tracking-wider text-brand-navy-950 bg-brand-gold-400 hover:bg-brand-gold-300 shadow-xl transition-all flex items-center justify-center gap-2 text-center whitespace-nowrap active:scale-95"
              >
                <Heart className="w-4 h-4 fill-current text-brand-navy-950" />
                <span>Start ${monthlyTier}/Mo Commitment</span>
              </Link>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm py-4 leading-relaxed italic">
              "{monthlyTierData[monthlyTier].description}"
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                <span className="text-xs text-slate-400 font-semibold block">Sustained Nutrition</span>
                <span className="text-lg sm:text-xl font-display font-black text-white block">
                  {monthlyTierData[monthlyTier].meals}
                </span>
                <span className="text-[11px] text-emerald-400">Nutritious meals delivered</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                <span className="text-xs text-slate-400 font-semibold block">Emergency Lodging</span>
                <span className="text-lg sm:text-xl font-display font-black text-white block">
                  {monthlyTierData[monthlyTier].shelterNights}
                </span>
                <span className="text-[11px] text-blue-400">Safe, warm bed nights</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                <span className="text-xs text-slate-400 font-semibold block">Healing & Therapy</span>
                <span className="text-lg sm:text-xl font-display font-black text-white block">
                  {monthlyTierData[monthlyTier].counseling}
                </span>
                <span className="text-[11px] text-brand-gold-400">Professional trauma care</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 text-center">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Cancel or modify your pledge anytime
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Annual cumulative IRS tax statement
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Exclusive quarterly impact newsletter
            </span>
          </div>

        </div>
      </section>

      {/* 5. Car & Property Donations Spotlight (WHITE) */}
      <section className="w-full bg-white py-16 sm:py-24 border-b border-slate-200 text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Callout - Clean image showing both car & property */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100 bg-slate-900 group">
                <img
                  src={carPropertyImg}
                  alt="Car and Property Donation for Veterans"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-brand-navy-950 text-white p-4 rounded-2xl shadow-md font-display font-extrabold text-center flex flex-col sm:flex-row items-center justify-around gap-2 border border-slate-800">
                <span className="text-sm sm:text-base font-black text-brand-gold-400">100% FREE PICKUP</span>
                <span className="text-xs uppercase tracking-wider text-slate-300 font-bold">All 50 States Covered</span>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-brand-gold-800 text-xs font-bold uppercase tracking-wider">
                <Car className="w-4 h-4" /> We Accept Donations in All 50 U.S. States
              </div>

              <h2 className="text-2xl sm:text-4xl font-display font-black text-brand-navy-950">
                We Also Take Car & Property Donations
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Do you have an unwanted car, truck, motorcycle, RV, trailer, or boat sitting in your driveway? We accept vehicles in <strong className="text-slate-900">any condition—running or not running, new or old</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-brand-navy-950 text-sm mb-1">Running & Non-Running</h4>
                  <p className="text-xs text-slate-500">We accept both working and non-working vehicles.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-brand-navy-950 text-sm mb-1">New or Old</h4>
                  <p className="text-xs text-slate-500">It doesn't matter how old the vehicle is, we take them all.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-brand-navy-950 text-sm mb-1">Other Items Accepted</h4>
                  <p className="text-xs text-slate-500">We also accept boats, motorcycles, ATVs, RVs, and property.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-brand-navy-950 text-sm mb-1">Help Purple Heart & Wounded Vets</h4>
                  <p className="text-xs text-slate-500">Proceeds directly finance shelter and smart homes in all 50 states.</p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <Link
                  to="/vehicle-donation"
                  className="w-full sm:w-auto text-center px-7 py-3.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-brand-navy-950 bg-brand-gold-500 hover:bg-brand-gold-400 shadow-md transition-all"
                >
                  Schedule Vehicle Pickup
                </Link>
                <a
                  href="tel:+15617708708"
                  className="inline-flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-brand-navy-900 hover:text-brand-red-600 transition-colors py-1"
                >
                  <Phone className="w-4 h-4 text-brand-gold-600" />
                  <span>Questions? Call +1 (561) 770-8708</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 6. Giving Options (BLUE) */}
      <section className="w-full bg-brand-navy-950 py-16 sm:py-24 border-b border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-brand-gold-400 font-bold uppercase tracking-wider text-xs">
              Giving Options
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-black text-white">
              Every Way You Can Help Our Heroes
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Whether through recurring donations, old vehicles, real estate, or tribute gifts, every contribution provides vital veteran care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Monthly Partner */}
            <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-brand-red-600/20 text-brand-red-400 flex items-center justify-center">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
                <h3 className="font-display font-bold text-lg text-white">Monthly Hero Partner</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Join a community of dedicated monthly donors providing predictable, dependable shelter and meals 365 days a year.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-slate-800">
                <Link
                  to="/donate"
                  state={{ frequency: 'monthly' }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold-400 hover:text-brand-gold-300 transition-colors"
                >
                  <span>Start Monthly Gift</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: Vehicle & Boat Donation */}
            <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-brand-gold-500/20 text-brand-gold-400 flex items-center justify-center">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-white">Car, Truck & Boat Donation</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Running or not, we pick up your unwanted vehicle in all 50 states and provide maximum IRS tax deductions.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-slate-800">
                <Link
                  to="/vehicle-donation"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold-400 hover:text-brand-gold-300 transition-colors"
                >
                  <span>Donate Vehicle</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: Property & Real Estate */}
            <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-white">Property & Land Donations</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Donate residential, commercial, or undeveloped land to help us build permanent supportive housing for wounded vets.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-slate-800">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold-400 hover:text-brand-gold-300 transition-colors"
                >
                  <span>Inquire About Property</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 4: Memorial & Tribute Gifts */}
            <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Gift className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-white">Honor & Memorial Gifts</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Honor a veteran loved one or commemorate a fallen service member with a lasting tribute gift in their name.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-slate-800">
                <Link
                  to="/donate"
                  state={{ isTribute: true }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold-400 hover:text-brand-gold-300 transition-colors"
                >
                  <span>Dedicate a Gift</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Real Veteran Testimonials (WHITE) */}
      <section className="w-full bg-slate-50 py-16 sm:py-24 border-b border-slate-200 text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-brand-red-600 font-bold uppercase tracking-wider text-xs">
              We are grateful for what you did for us!
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-brand-navy-950">
              Real Stories of Restored Hope
            </h2>
            <p className="text-slate-600 text-sm">
              Read what veterans, family members, and volunteers say about their journey with League of Veterans of America.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-7 shadow-md border border-slate-200 flex flex-col justify-between hover:shadow-xl transition-all"
              >
                <div className="space-y-4">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center gap-3 mt-6">
                  <img
                    src={item.image}
                    alt={item.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-brand-gold-400"
                  />
                  <div>
                    <h4 className="font-display font-bold text-sm text-brand-navy-950">{item.author}</h4>
                    <p className="text-xs text-slate-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. George Washington Historic Quote Section (BLUE) */}
      <section className="w-full bg-gradient-to-br from-brand-navy-950 via-slate-900 to-brand-navy-900 text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 mx-auto rounded-full bg-brand-gold-500/20 text-brand-gold-400 flex items-center justify-center text-2xl font-serif">
            “
          </div>

          <blockquote className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-slate-200 leading-relaxed italic">
            “The willingness with which our young people are likely to serve in any war, no matter how justified, shall be directly proportional to how they perceive the veterans of earlier wars were treated and appreciated by their nation.”
          </blockquote>

          <div className="pt-2">
            <p className="font-display font-black text-lg text-brand-gold-400 tracking-wider uppercase">
              George Washington
            </p>
            <p className="text-xs text-slate-400 uppercase tracking-widest mt-0.5">
              First President of the United States & General, 1789
            </p>
          </div>
        </div>
      </section>

      {/* 9. Tangible Care Package Sponsorship (WHITE) */}
      <section className="w-full bg-white py-16 sm:py-24 border-b border-slate-200 text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-brand-red-600 font-bold uppercase tracking-wider text-xs flex items-center gap-1.5">
                <Package className="w-4 h-4 text-brand-red-600" /> Direct Aid Catalog
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-black text-brand-navy-950 mt-1">
                Sponsor an Emergency Care Package
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
                Choose a tangible survival kit to be packed by our volunteers and hand-delivered to a veteran experiencing crisis or homelessness.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200 text-brand-red-700 text-xs font-bold shrink-0 self-start md:self-auto">
              <span className="w-2 h-2 rounded-full bg-brand-red-600 animate-ping" />
              <span>Winter Urgent Need: 38 Packages Needed</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Package 1 */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-brand-red-500/40 hover:bg-white hover:shadow-xl transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-display font-black text-brand-navy-950">$35</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 uppercase">
                    Survival
                  </span>
                </div>
                <h3 className="font-display font-bold text-base text-brand-navy-950">
                  Winter Warmth & Weather Kit
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Heavy-duty subzero thermal socks, polar fleece beanie, windproof combat gloves, and thermal foil survival blanket.
                </p>
                <div className="space-y-1.5 pt-2 border-t border-slate-200/80 text-[11px] text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Subzero Thermal Socks (3 Pairs)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Insulated Mylar Survival Blanket</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Water-Resistant Combat Beanie</span>
                  </div>
                </div>
              </div>
              <div className="pt-5 mt-5 border-t border-slate-200">
                <Link
                  to="/donate"
                  state={{ amount: 35 }}
                  className="w-full py-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-brand-navy-950 bg-white border border-slate-300 hover:bg-brand-red-600 hover:text-white hover:border-brand-red-600 shadow-sm transition-all flex items-center justify-center gap-2 group-hover:bg-brand-red-600 group-hover:text-white"
                >
                  <span>Sponsor for $35</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Package 2 */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-brand-red-500/40 hover:bg-white hover:shadow-xl transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-display font-black text-brand-navy-950">$65</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-brand-red-800 uppercase">
                    Nutrition
                  </span>
                </div>
                <h3 className="font-display font-bold text-base text-brand-navy-950">
                  10-Day Emergency Nutrition Pack
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pre-packed carton of ready-to-eat protein meals, electrolyte hydration packets, healthy dried fruits, and high-calorie rations.
                </p>
                <div className="space-y-1.5 pt-2 border-t border-slate-200/80 text-[11px] text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>20 Shelf-Stable Protein Meals</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Vitamin & Electrolyte Packets</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Multi-Day Clean Drinking Water</span>
                  </div>
                </div>
              </div>
              <div className="pt-5 mt-5 border-t border-slate-200">
                <Link
                  to="/donate"
                  state={{ amount: 65 }}
                  className="w-full py-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-brand-navy-950 bg-white border border-slate-300 hover:bg-brand-red-600 hover:text-white hover:border-brand-red-600 shadow-sm transition-all flex items-center justify-center gap-2 group-hover:bg-brand-red-600 group-hover:text-white"
                >
                  <span>Sponsor for $65</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Package 3 */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-brand-red-500/40 hover:bg-white hover:shadow-xl transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-display font-black text-brand-navy-950">$85</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-900 uppercase">
                    Medical
                  </span>
                </div>
                <h3 className="font-display font-bold text-base text-brand-navy-950">
                  Trauma First-Aid & Foot Care Kit
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clinical wound dressings, antiseptic spray, medicated foot powders, burn creams, and blister care for rough terrain survival.
                </p>
                <div className="space-y-1.5 pt-2 border-t border-slate-200/80 text-[11px] text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Medical Combat Wound Dressings</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Antiseptic Ointments & Blister Relief</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Foot Care & Hygiene Disinfectant</span>
                  </div>
                </div>
              </div>
              <div className="pt-5 mt-5 border-t border-slate-200">
                <Link
                  to="/donate"
                  state={{ amount: 85 }}
                  className="w-full py-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-brand-navy-950 bg-white border border-slate-300 hover:bg-brand-red-600 hover:text-white hover:border-brand-red-600 shadow-sm transition-all flex items-center justify-center gap-2 group-hover:bg-brand-red-600 group-hover:text-white"
                >
                  <span>Sponsor for $85</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Package 4 */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-brand-red-500/40 hover:bg-white hover:shadow-xl transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-display font-black text-brand-navy-950">$135</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-900 uppercase">
                    Job Rebound
                  </span>
                </div>
                <h3 className="font-display font-bold text-base text-brand-navy-950">
                  Job Interview & Reintegration Suit
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clean dress shirt, interview slacks, grooming haircut voucher, and local public transit fare pass to attend employment interviews.
                </p>
                <div className="space-y-1.5 pt-2 border-t border-slate-200/80 text-[11px] text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Interview Slacks & Button-down Shirt</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Barber Grooming Haircut Voucher</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>30-Day Transit Pass for Job Fairs</span>
                  </div>
                </div>
              </div>
              <div className="pt-5 mt-5 border-t border-slate-200">
                <Link
                  to="/donate"
                  state={{ amount: 135 }}
                  className="w-full py-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-brand-navy-950 bg-white border border-slate-300 hover:bg-brand-red-600 hover:text-white hover:border-brand-red-600 shadow-sm transition-all flex items-center justify-center gap-2 group-hover:bg-brand-red-600 group-hover:text-white"
                >
                  <span>Sponsor for $135</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 10. Donor Trust & Accountability (BLUE) */}
      <section className="w-full bg-brand-navy-950 py-16 sm:py-24 border-b border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-brand-gold-400 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-gold-400" /> Donor Confidence
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-white">
              Give with Complete Peace of Mind
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              We hold ourselves to the highest standards of financial integrity, donor privacy, and IRS compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-sm flex flex-col items-center text-center space-y-2.5 hover:border-slate-700 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-white text-base">501(c)(3) Recognized</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Official federal non-profit status. All donations are 100% tax-deductible to the fullest extent permitted by U.S. law.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-sm flex flex-col items-center text-center space-y-2.5 hover:border-slate-700 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-black">
                <FileCheck className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-white text-base">Instant Tax Receipt</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                An official IRS-compliant donation receipt with our Tax ID / EIN is automatically emailed to you the moment your gift is processed.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-sm flex flex-col items-center text-center space-y-2.5 hover:border-slate-700 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-black">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-white text-base">Direct Mission Allocation</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Over 85% of program funds go directly to shelter beds, meals, PTSD rehabilitation, and adaptive wounded warrior housing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-sm flex flex-col items-center text-center space-y-2.5 hover:border-slate-700 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-black">
                <Lock className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-white text-base">Bank-Grade Encryption</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                All transactions are processed through 256-bit SSL encrypted, PCI-DSS Level 1 compliant secure gateways including PayPal & Stripe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Frequently Asked Questions About Donating (WHITE) */}
      <section className="w-full bg-white py-16 sm:py-24 border-b border-slate-200 text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-brand-red-600 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-1.5">
              <HelpCircle className="w-4 h-4" /> Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-brand-navy-950">
              Frequently Asked Questions About Donating
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Everything you need to know about supporting League of Veterans of America.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="font-display font-bold text-brand-navy-950 text-sm sm:text-base flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Is my donation 100% tax-deductible?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                Yes. League of Veterans of America INC is an official IRS-recognized 501(c)(3) non-profit organization. Your monetary, vehicle, and property donations qualify for maximum legal tax deduction.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="font-display font-bold text-brand-navy-950 text-sm sm:text-base flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                How will I receive my tax receipt?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                As soon as your donation is processed, an official IRS-compliant receipt with our registered Tax ID / EIN will be sent to your email address instantly.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="font-display font-bold text-brand-navy-950 text-sm sm:text-base flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Can I dedicate my donation in memory or honor of someone?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                Yes! When giving on our donation page, check the "Dedicate this gift" box to specify the veteran's name and include an honorary tribute note.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="font-display font-bold text-brand-navy-950 text-sm sm:text-base flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                How does vehicle donation pickup work?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                We provide free towing across all 50 U.S. states within 24 to 48 hours. Vehicles are accepted in any condition (running or not running), and you receive a full tax deduction receipt.
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-red-600 hover:text-brand-red-700 transition-colors"
            >
              <span>Have more questions? View our complete FAQ guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 12. Urgent Action Final Banner */}
      <section className="w-full bg-slate-900 py-16 sm:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 border border-white/20 overflow-hidden">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroDonationBg})` }}
            />
            {/* Pure Red & Charcoal Overlay - Zero Blue */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-red-700/90 via-brand-red-800/85 to-black/85 pointer-events-none" />

            <div className="relative z-10 space-y-2 text-center lg:text-left">
              <h3 className="text-xl sm:text-3xl font-display font-black text-white drop-shadow-sm">
                Help Purple Heart, Homeless, and Combat Wounded Vets
              </h3>
              <p className="text-red-100 text-xs sm:text-sm max-w-2xl leading-relaxed">
                We accept donations in all 50 U.S. states. Every contribution provides shelter, hot meals, psychological counseling, and independence to our heroes.
              </p>
            </div>
            <div className="relative z-10 flex flex-row items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto shrink-0">
              <Link
                to="/donate"
                className="flex-1 sm:flex-initial px-4 sm:px-8 py-3.5 sm:py-4 rounded-xl font-display font-black text-xs uppercase tracking-wider text-brand-navy-950 bg-white hover:bg-slate-100 shadow-xl transition-all flex items-center justify-center gap-1.5 sm:gap-2 text-center whitespace-nowrap active:scale-95"
              >
                <Heart className="w-4 h-4 fill-current text-brand-red-600 shrink-0" />
                <span>Donate Now</span>
              </Link>
              <Link
                to="/contact"
                className="flex-1 sm:flex-initial px-4 sm:px-6 py-3.5 sm:py-4 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-white border-2 border-white/70 hover:bg-white/15 hover:border-white transition-all text-center whitespace-nowrap flex items-center justify-center shadow-sm active:scale-95"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
