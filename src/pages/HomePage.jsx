import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Car, ShieldCheck, ArrowRight, CheckCircle2, Star, Phone, ExternalLink, Check } from 'lucide-react';
import ImpactStats from '../components/ImpactStats';
import DonationWidget from '../components/DonationWidget';
import VideoExperience from '../components/VideoExperience';
import carPropertyImg from '../assets/car-property-donation.jpg';
import heroDonationBg from '../assets/hero-donation-bg.jpg';
import paypalCardsSvg from '../assets/paypal-cards.svg';
import paypalWordmarkSvg from '../assets/paypal-wordmark.svg';
import { CAUSES_DATA } from '../data/causesData';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';

export default function HomePage() {
  const featuredCauses = CAUSES_DATA.filter((c) => c.featured).slice(0, 3);

  return (
    <div className="space-y-20 pb-20">
      
      {/* Hero Section: Background image related to donation */}
      <section className="relative pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-32 overflow-hidden border-b border-slate-200">
        
        {/* Background Image Related to Donation */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroDonationBg})` }}
        />

        {/* Subtle, reduced overlay so the donation banner image remains vivid and clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Mission Narrative (Frosted card for crystal-clear readability without washing out the banner) */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left bg-white/90 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-3xl shadow-2xl border border-white/80">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200 text-brand-navy-950 text-xs sm:text-sm font-bold tracking-wide shadow-sm">
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
                  <span>Donate Vehicle (Free Towing)</span>
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

            {/* Right Column: Clean Donation Box Floating Over Background */}
            <div className="lg:col-span-5">
              <DonationWidget defaultCampaign="emergency-shelter" />
            </div>

          </div>
        </div>
      </section>

      {/* Impact Stats Overlay Counter */}
      <ImpactStats />

      {/* Interactive YouTube Video Impact Experience */}
      <VideoExperience />

      {/* Authentic "Our donation process is quick & easy..." Section from lovoa.org */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-5 sm:p-8 lg:p-12 border border-slate-200 shadow-xl space-y-8 sm:space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-brand-red-600 font-bold uppercase tracking-wider text-xs">
              Simple & Transparent
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-display font-black text-brand-navy-950">
              Our Donation Process is Quick & Easy...
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Supporting homeless and combat wounded veterans takes less than 2 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Step 1 */}
            <div className="relative p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col items-center text-center group hover:bg-white hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-navy-950 text-brand-gold-400 flex items-center justify-center font-black text-xl shadow">
                1
              </div>
              <h3 className="font-display font-bold text-lg text-brand-navy-950">Choose Amount</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Select a one-time or recurring donation amount that fits your contribution goals. Every dollar directly funds food, shelter, and medical therapy.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col items-center text-center group hover:bg-white hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-navy-950 text-brand-gold-400 flex items-center justify-center font-black text-xl shadow">
                2
              </div>
              <h3 className="font-display font-bold text-lg text-brand-navy-950">Fill in Your Details</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Enter your payment information securely via our trusted platform, PayPal, or credit/debit card with bank-level encryption.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col items-center text-center group hover:bg-white hover:shadow-lg transition-all">
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
          <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-6">
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

      {/* Featured Programs Section: Clean cause cards (NO text over image) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-brand-red-600 font-bold uppercase tracking-wider text-xs flex items-center gap-1.5">
              <Heart className="w-4 h-4 fill-current" /> Active Impact Initiatives
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-brand-navy-950 mt-1">
              Where Your Support Saves Lives
            </h2>
          </div>
          <Link
            to="/causes"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy-900 hover:text-brand-red-600 transition-colors"
          >
            <span>Explore all programs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCauses.map((cause) => {
            const percent = Math.min(100, Math.round((cause.raised / cause.goal) * 100));
            return (
              <div
                key={cause.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 hover:shadow-2xl transition-all duration-300 flex flex-col group"
              >
                {/* Pure Clean Image with NO text overlaid */}
                <div className="h-52 overflow-hidden bg-slate-100">
                  <img
                    src={cause.image}
                    alt={cause.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content: Category and timeline placed cleanly in the card body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-0.5 bg-slate-100 text-brand-navy-950 text-xs font-bold rounded-full">
                        {cause.category}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {cause.daysLeft} days left
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-brand-navy-950 group-hover:text-brand-red-600 transition-colors line-clamp-2">
                      <Link to={`/causes/${cause.slug}`}>{cause.title}</Link>
                    </h3>
                    <p className="text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {cause.tagline}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-brand-red-600">${cause.raised.toLocaleString()} raised</span>
                      <span className="text-slate-500">Goal: ${cause.goal.toLocaleString()}</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-brand-red-600 to-brand-gold-500 rounded-full transition-all duration-1000"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-500">
                      <span>{percent}% Funded</span>
                      <span>{cause.donorsCount} Backers</span>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="pt-2 flex items-center gap-3">
                    <Link
                      to={`/causes/${cause.slug}`}
                      className="flex-1 py-2.5 text-center rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-100 text-brand-navy-950 hover:bg-slate-200 transition-colors"
                    >
                      Read Story
                    </Link>
                    <Link
                      to="/donate"
                      state={{ campaignId: cause.slug }}
                      className="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-brand-red-600 hover:bg-brand-red-700 transition-colors flex items-center gap-1.5"
                    >
                      <Heart className="w-3.5 h-3.5 fill-current" />
                      Donate
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* George Washington Historic Quote Section (from lovoa.org) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-brand-navy-950 via-brand-navy-900 to-slate-900 text-white p-8 sm:p-14 overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-brand-gold-500/10 rounded-full blur-3xl" />
          
          <div className="relative max-w-4xl mx-auto text-center space-y-6">
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
        </div>
      </section>

      {/* Vehicle Donation Spotlight: Clean image without overlay text */}
      <section className="bg-gradient-to-b from-slate-100 to-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Callout - Clean image showing both car & property, badge placed underneath */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 group">
                <img
                  src={carPropertyImg}
                  alt="Car and Property Donation for Veterans"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-brand-navy-950 text-white p-4 rounded-2xl shadow-md font-display font-extrabold text-center flex flex-col sm:flex-row items-center justify-around gap-2 border border-slate-800">
                <span className="text-sm sm:text-base font-black text-brand-gold-400">100% FREE TOWING & PICKUP</span>
                <span className="text-xs uppercase tracking-wider text-slate-300 font-bold">All 50 States Covered</span>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-brand-gold-700 text-xs font-bold uppercase tracking-wider">
                <Car className="w-4 h-4" /> We Accept Donations in All 50 U.S. States
              </div>

              <h2 className="text-2xl sm:text-4xl font-display font-black text-brand-navy-950">
                We Also Take Car & Property Donations
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Do you have an unwanted car, truck, motorcycle, RV, trailer, or boat sitting in your driveway? We accept vehicles in <strong className="text-slate-900">any condition—running or not running, new or old</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-brand-navy-950 text-sm mb-1">Running & Non-Running</h4>
                  <p className="text-xs text-slate-500">We accept both working and non-working vehicles.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-brand-navy-950 text-sm mb-1">New or Old</h4>
                  <p className="text-xs text-slate-500">It doesn't matter how old the vehicle is, we take them all.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-brand-navy-950 text-sm mb-1">Other Items Accepted</h4>
                  <p className="text-xs text-slate-500">We also accept boats, motorcycles, ATVs, RVs, and property.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-brand-navy-950 text-sm mb-1">Help Purple Heart & Wounded Vets</h4>
                  <p className="text-xs text-slate-500">Proceeds directly finance shelter and smart homes in all 50 states.</p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <Link
                  to="/vehicle-donation"
                  className="w-full sm:w-auto text-center px-7 py-3.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-brand-navy-950 bg-brand-gold-500 hover:bg-brand-gold-400 shadow-md transition-all"
                >
                  Schedule Free Vehicle Pickup
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

      {/* Real Veteran Testimonials (Authentic from lovoa.org) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="bg-white rounded-2xl p-7 shadow-lg border border-slate-200/80 flex flex-col justify-between hover:shadow-xl transition-all"
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
      </section>

      {/* Urgent Action Final Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-red-600 via-brand-red-700 to-brand-navy-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-display font-black">
              Help Purple Heart, Homeless, and Combat Wounded Vets
            </h3>
            <p className="text-red-100 text-sm max-w-2xl leading-relaxed">
              We accept donations in all 50 U.S. states. Every contribution provides shelter, hot meals, psychological counseling, and independence to our heroes.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/donate"
              className="px-8 py-4 rounded-xl font-display font-black text-xs uppercase tracking-wider text-brand-navy-950 bg-white hover:bg-slate-100 shadow-xl transition-all flex items-center gap-2"
            >
              <Heart className="w-4 h-4 fill-current text-brand-red-600" />
              <span>Donate Now</span>
            </Link>
            <Link
              to="/contact"
              className="px-6 py-4 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-white border border-white/40 hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
