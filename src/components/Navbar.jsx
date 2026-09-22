import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Mail, Heart, Menu, X, ShieldCheck, ChevronRight } from 'lucide-react';
import logoImg from '../assets/logo.png';
import ImageWithFallback from './ImageWithFallback';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Impact', path: '/impact' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md">
      {/* Top Notification / Contact Bar */}
      <div className="bg-brand-navy-950 text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-brand-navy-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Contact Details */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
            <a 
              href="tel:+15617708708" 
              className="flex items-center gap-2 hover:text-brand-gold-400 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold-500" />
              <span>+1 (561) 770-8708</span>
            </a>
            <a 
              href="mailto:lovoa47@outlook.com" 
              className="flex items-center gap-2 hover:text-brand-gold-400 transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-brand-gold-500" />
              <span>lovoa47@outlook.com</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              100% Tax Deductible 501(c)(3)
            </span>
            <span className="inline-flex items-center gap-1.5 text-amber-300 font-medium">
              Supporting Heroes in All 50 U.S. States
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group min-w-0 pr-2">
            <ImageWithFallback src={logoImg} fallback="https://lovoa.org/wp-content/uploads/2025/01/logo-01-01.png" alt="League of Veterans of America" className="h-10 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105 shrink-0" onError={(e) => { e.target.onerror = null; e.target.src = "https://lovoa.org/wp-content/uploads/2025/01/logo-01-01.png"; }} />
            <div className="flex flex-col min-w-0">
              <span className="font-display font-black text-sm sm:text-xl tracking-tight text-brand-navy-900 group-hover:text-brand-red-600 transition-colors leading-tight uppercase truncate">
                League of Veterans
              </span>
              <span className="text-[9px] sm:text-[11px] font-semibold tracking-wider sm:tracking-widest text-slate-700 uppercase truncate">
                of America INC • lovoa.org
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `
                  relative px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200
                  ${isActive 
                    ? 'text-brand-red-600 bg-red-50/70 font-bold' 
                    : 'text-slate-700 hover:text-brand-navy-900 hover:bg-slate-100'
                  }
                `}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs: Only the primary Donate Now button */}
          <div className="hidden sm:flex items-center">
            <Link
              to="/donate"
              className="relative group inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-red-600 to-brand-red-700 hover:from-brand-red-500 hover:to-brand-red-600 shadow-md hover:shadow-glow-red transition-all duration-300 transform active:scale-95"
            >
              <Heart className="w-4 h-4 fill-current text-white animate-pulse" />
              <span>Donate Now</span>
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/donate"
              className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase bg-brand-red-600 text-white shadow"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              Donate
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-brand-navy-950 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-red-500"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `
                  flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors
                  ${isActive 
                    ? 'text-brand-red-600 bg-red-50 font-bold' 
                    : 'text-slate-700 hover:text-brand-navy-950 hover:bg-slate-100'
                  }
                `}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </NavLink>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200">
            <Link
              to="/donate"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold uppercase tracking-wider text-white bg-brand-red-600 hover:bg-brand-red-500 shadow-md text-sm"
            >
              <Heart className="w-4 h-4 fill-current" />
              Make A Donation Now
            </Link>
          </div>

          <div className="pt-3 text-center text-xs text-slate-700 space-y-1">
            <p>Direct Helpline: <a href="tel:+15617708708" className="font-semibold text-brand-navy-900">+1 (561) 770-8708</a></p>
            <p>Inquiries: <a href="mailto:lovoa47@outlook.com" className="font-semibold text-brand-navy-900">lovoa47@outlook.com</a></p>
          </div>
        </div>
      )}
    </header>
  );
}
