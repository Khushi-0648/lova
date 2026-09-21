import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CAUSES_DATA } from '../data/causesData';
import DonationWidget from '../components/DonationWidget';
import { 
  Heart, 
  Share2, 
  CheckCircle2, 
  Calendar, 
  Users, 
  Clock, 
  ArrowLeft,
  Check,
  ShieldCheck,
  Building
} from 'lucide-react';

export default function CauseDetailPage() {
  const { id } = useParams();
  const [copied, setCopied] = useState(false);

  const cause = CAUSES_DATA.find((c) => c.slug === id || c.id === id);

  if (!cause) {
    return <Navigate to="/causes" replace />;
  }

  const percent = Math.min(100, Math.round((cause.raised / cause.goal) * 100));

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="space-y-12 pb-24">
      
      {/* Breadcrumbs & Navigation */}
      <div className="bg-slate-100 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs font-semibold text-slate-500">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-brand-navy-950">Home</Link>
            <span>/</span>
            <Link to="/causes" className="hover:text-brand-navy-950">Causes</Link>
            <span>/</span>
            <span className="text-slate-800 line-clamp-1">{cause.title}</span>
          </div>
          <Link to="/causes" className="flex items-center gap-1 text-brand-navy-900 hover:text-brand-red-600">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to all causes
          </Link>
        </div>
      </div>

      {/* Main Detail Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Main Content (8 cols) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-8">
            
            {/* Title & Tagline with clean Share button */}
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-brand-red-700">
                  {cause.category}
                </span>
                <button
                  type="button"
                  onClick={handleShare}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all border border-slate-200"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                  <span>{copied ? 'Link Copied!' : 'Share Cause'}</span>
                </button>
              </div>
              <h1 className="text-2xl sm:text-4xl font-display font-black text-brand-navy-950 leading-tight">
                {cause.title}
              </h1>
              <p className="text-base text-slate-600 leading-relaxed font-medium">
                {cause.tagline}
              </p>
            </div>

            {/* Pure Clean Image with NO text overlaid */}
            <div className="rounded-3xl overflow-hidden shadow-xl bg-slate-100">
              <img
                src={cause.image}
                alt={cause.title}
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>

            {/* Mobile / Tablet Progress Bar Summary */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="grid grid-cols-3 text-center divide-x divide-slate-100">
                <div>
                  <span className="text-2xl font-black text-brand-red-600 block">${cause.raised.toLocaleString()}</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider">Raised</span>
                </div>
                <div>
                  <span className="text-2xl font-black text-slate-900 block">${cause.goal.toLocaleString()}</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider">Goal</span>
                </div>
                <div>
                  <span className="text-2xl font-black text-slate-900 block">{cause.donorsCount}</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider">Donors</span>
                </div>
              </div>

              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-brand-red-600 to-brand-gold-500 rounded-full"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>

            {/* Story & In-depth Details */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-2xl font-display font-extrabold text-brand-navy-950 pb-3 border-b border-slate-100">
                About This Initiative
              </h2>
              
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4 text-sm sm:text-base">
                <p>{cause.description}</p>
                <p>
                  At League of Veterans of America INC (lovoa.org), we operate with low overhead and direct community involvement. We ensure that your tax-deductible contribution goes straight to real solutions—purchasing building materials for adapted homes, procuring warm beds and emergency shelter rooms, and deploying licensed therapists to work with veterans overcoming combat trauma.
                </p>
              </div>

              {/* Direct Impact Points */}
              <div className="pt-4">
                <h3 className="font-display font-bold text-lg text-brand-navy-950 mb-4">
                  What Your Donation Directly Achieves:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cause.impactPoints?.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-slate-700">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Field Updates */}
              {cause.updates && cause.updates.length > 0 && (
                <div className="pt-6 border-t border-slate-100">
                  <h3 className="font-display font-bold text-lg text-brand-navy-950 mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-brand-gold-600" />
                    <span>Recent Project Updates</span>
                  </h3>
                  <div className="space-y-4">
                    {cause.updates.map((upd, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/60 space-y-1">
                        <div className="flex justify-between items-center text-xs text-brand-gold-800 font-bold">
                          <span>{upd.title}</span>
                          <span className="text-slate-500 font-normal">{upd.date}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700">{upd.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* Right Sticky Donation Widget (4-5 cols) */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="sticky top-28 space-y-6">
              <DonationWidget defaultCampaign={cause.slug} />

              {/* Support Hotline Box */}
              <div className="bg-slate-100 p-5 rounded-2xl border border-slate-200 text-center space-y-2">
                <p className="text-xs font-bold uppercase text-slate-500 tracking-wider">Have Questions or Need Help?</p>
                <p className="text-sm font-semibold text-brand-navy-950">Call our direct office helpline</p>
                <a
                  href="tel:+15617708708"
                  className="inline-block px-4 py-2 bg-white text-brand-navy-900 hover:text-brand-red-600 rounded-xl text-xs font-extrabold shadow-sm border border-slate-200 transition-colors"
                >
                  +1 (561) 770-8708
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
