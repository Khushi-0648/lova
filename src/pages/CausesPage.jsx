import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Search, ShieldCheck } from 'lucide-react';
import { CAUSES_DATA } from '../data/causesData';

export default function CausesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Housing', 'Smart Homes', 'Healthcare', 'Family Relief', 'Vehicle Donation'];

  const filteredCauses = CAUSES_DATA.filter((cause) => {
    const matchesCategory = selectedCategory === 'All' || cause.category === selectedCategory;
    const matchesSearch = cause.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cause.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cause.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-24">
      {/* Page Header */}
      <section className="bg-brand-navy-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold-500/20 text-brand-gold-400 border border-brand-gold-500/30">
            <ShieldCheck className="w-3.5 h-3.5" /> Programs & Missions
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white">
            Support Our Active Veteran Causes
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Every program addresses a crucial pillar of veteran recovery—from emergency housing and hot meals to adapted Smart Homes and nationwide vehicle donations.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search & Category Filter Controls */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md border border-slate-200 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-navy-950 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search initiatives..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-navy-900 focus:bg-white"
            />
          </div>

        </div>

        {/* Causes Grid */}
        {filteredCauses.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
            <p className="text-lg font-bold text-slate-700">No campaigns found matching your filter.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="text-xs font-bold text-brand-red-600 underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCauses.map((cause) => {
              const percent = Math.min(100, Math.round((cause.raised / cause.goal) * 100));
              return (
                <div
                  key={cause.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200/80 hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  <div className="h-52 overflow-hidden bg-slate-100">
                    <img
                      src={cause.image}
                      alt={cause.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

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
                      <p className="text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                        {cause.description}
                      </p>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-brand-red-600">${cause.raised.toLocaleString()} raised</span>
                        <span className="text-slate-500">Goal: ${cause.goal.toLocaleString()}</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-brand-red-600 to-brand-gold-500 rounded-full"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-[11px] text-slate-500">
                        <span>{percent}% Completed</span>
                        <span>{cause.donorsCount} Supporters</span>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="pt-2 flex items-center gap-3">
                      <Link
                        to={`/causes/${cause.slug}`}
                        className="flex-1 py-2.5 text-center rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-100 text-brand-navy-950 hover:bg-slate-200 transition-colors"
                      >
                        Details
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
        )}

      </section>

      {/* Corporate Sponsorship / Custom Project Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-display font-bold text-xl text-brand-navy-950">
              Want to Sponsor a Whole Shelter Room or Adapted Home?
            </h3>
            <p className="text-sm text-slate-600">
              Corporate gifts, donor-advised funds (DAF), and major foundation grants receive dedicated recognition and naming rights.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-brand-navy-950 hover:bg-brand-navy-900 transition-colors shrink-0"
          >
            Inquire for Partnerships
          </Link>
        </div>
      </section>
    </div>
  );
}
