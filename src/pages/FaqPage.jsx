import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ChevronDown, Search, Phone, Mail, Car, Heart } from 'lucide-react';
import { FAQ_DATA } from '../data/faqData';

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState({ 1: true, 5: true });

  const categories = ['All', 'About LOVOA', 'Programs', 'Donations', 'Tax & Receipts', 'Vehicle Donations'];

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-24">
      
      {/* Page Header */}
      <section className="bg-brand-navy-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold-500/20 text-brand-gold-400 border border-brand-gold-500/30">
            <HelpCircle className="w-3.5 h-3.5" /> Here to Help
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our veteran assistance programs, car donations, tax deductions, and transparency.
          </p>
        </div>
      </section>

      {/* Main Filter & Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Controls */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-200 mb-8 space-y-4">
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-navy-950 focus:bg-white"
            />
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-navy-950 text-white shadow'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8 space-y-2">
            <p className="text-base font-bold text-slate-700">No matching questions found.</p>
            <p className="text-xs text-slate-500">Try searching for words like "vehicle", "shelter", or "tax".</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = Boolean(openItems[faq.id]);
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-gold-600 block">
                        {faq.category}
                      </span>
                      <span className="text-base sm:text-lg font-display font-bold text-brand-navy-950">
                        {faq.question}
                      </span>
                    </div>
                    <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-brand-navy-950 text-white' : 'text-slate-500'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </section>

      {/* Still Have Questions Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-100 to-slate-200/80 rounded-3xl p-8 border border-slate-300/80 text-center space-y-4">
          <h3 className="text-xl font-display font-black text-brand-navy-950">
            Still Have Questions?
          </h3>
          <p className="text-sm text-slate-600 max-w-lg mx-auto">
            Our team is here to help with any inquiries regarding our shelter programs, corporate sponsorships, or donating your car.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="tel:+15617708708"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-brand-navy-950 font-bold text-xs shadow-sm hover:shadow transition-all"
            >
              <Phone className="w-4 h-4 text-brand-gold-600" />
              <span>+1 (561) 770-8708</span>
            </a>
            <a
              href="mailto:lovoa47@outlook.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-brand-navy-950 font-bold text-xs shadow-sm hover:shadow transition-all"
            >
              <Mail className="w-4 h-4 text-brand-gold-600" />
              <span>lovoa47@outlook.com</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-navy-950 text-white font-bold text-xs hover:bg-brand-navy-900 transition-all"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
