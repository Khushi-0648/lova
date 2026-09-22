import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Award, Users, Home, Car } from 'lucide-react';
import logoImg from '../assets/logo.png';
import aboutVeteransImg from '../assets/about-veterans.jpg';

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-24">
      
      {/* Page Header */}
      <section className="bg-brand-navy-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold-500/20 text-brand-gold-400 border border-brand-gold-500/30">
            <ShieldCheck className="w-3.5 h-3.5" /> Our Heritage & Mission
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white">
            About League of Veterans of America INC
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Honoring the sacrifice of our nation’s military service members and first responders through tangible housing, rehabilitation, and compassionate advocacy.
          </p>
        </div>
      </section>

      {/* Origin Story & Core Purpose */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-red-600">
              Grassroots Veteran Care
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-black text-brand-navy-950 leading-tight">
              Started from Zero to Build a Safety Net for Those Who Served
            </h2>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-slate-900">League of Veterans of America INC (lovoa.org)</strong> was founded with a fierce determination: no American hero who wore the uniform should ever have to sleep on cold sidewalks or face life-altering trauma alone.
              </p>
              <p>
                Despite operations and communities across the nation being significantly disrupted in recent years, we mobilized in <strong>November 2024 from zero</strong> to rebuild transitional shelters, provide hot nutritious meals, and support severely injured warriors with custom Smart Home adaptations.
              </p>
              <p>
                Through both direct donor contributions and our nationwide vehicle donation network, we ensure immediate, measurable help reaches Purple Heart recipients, homeless veterans, and first responder families without red tape.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/donate"
                className="px-6 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider text-white bg-brand-red-600 hover:bg-brand-red-700 shadow-md transition-all"
              >
                Support Our Mission
              </Link>
              <Link
                to="/vehicle-donation"
                className="px-6 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider text-brand-navy-950 bg-brand-gold-400 hover:bg-brand-gold-300 transition-all"
              >
                Donate a Vehicle
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src={aboutVeteransImg}
                alt="Veterans Together"
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-md border border-slate-200 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-brand-red-600 flex items-center justify-center font-black text-2xl shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-black text-brand-navy-950 block">700+ Veterans Supported</span>
                <p className="text-xs text-slate-600">
                  Homeless veterans and first responder family members helped to date.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4 Core Pillars */}
      <section className="bg-slate-100 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-black text-brand-navy-950">
              Our Foundational Pillars
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Everything we do is guided by an uncompromising commitment to those who sacrificed for our freedom.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-brand-red-600 flex items-center justify-center">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-navy-950">Shelter & Security</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clean, safe, dignified transitional living quarters and warm beds so veterans can step off the streets immediately.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-brand-gold-600 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-navy-950">Smart Home Adaptations</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Building custom wheelchair access, automated entries, and adaptive mobility technology for combat-wounded veterans.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-navy-950">PTSD & Mental Health</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Peer support circles, clinical psychological therapies, and companion service dogs to address invisible wounds.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-navy-950">50-State Vehicle Action</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Providing free vehicle towing across all 50 states to turn old cars and boats into sustained shelter funding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Transparency Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-md border border-slate-200 flex flex-col md:flex-row items-center gap-8">
          <img
            src={logoImg}
            alt="LOVOA Crest"
            className="w-32 h-32 object-contain shrink-0"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://lovoa.org/wp-content/uploads/2025/01/cropped-logo-01-01-1.png";
            }}
          />
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-navy-950">
              Accountability You Can Trust
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
              League of Veterans of America INC operates as an open-book non-profit. All financial allocations are tracked diligently, and our team is always accessible directly at <a href="mailto:lovoa47@outlook.com" className="text-brand-navy-950 font-bold underline">lovoa47@outlook.com</a> or <a href="tel:+15617708708" className="text-brand-navy-950 font-bold underline">+1 (561) 770-8708</a>.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
