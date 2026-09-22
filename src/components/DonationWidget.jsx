import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ShieldCheck, Check, ExternalLink, CheckCircle2, Copy } from 'lucide-react';
import paypalCardsSvg from '../assets/paypal-cards.svg';
import paypalWordmarkSvg from '../assets/paypal-wordmark.svg';

export default function DonationWidget({ defaultCampaign = 'emergency-shelter', compact = false }) {
  const navigate = useNavigate();
  const [frequency, setFrequency] = useState('one-time');
  const [amount, setAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [isTribute, setIsTribute] = useState(false);
  const [tributeName, setTributeName] = useState('');
  const [copiedNotification, setCopiedNotification] = useState(false);

  const presetAmounts = [25, 50, 100, 250, 500];

  const getImpactDescription = (val) => {
    const num = Number(val);
    if (num < 50) return 'Provides 7 warm meals & emergency nutrition for a homeless veteran.';
    if (num < 100) return 'Supplies cold-weather thermal bedding, coat, and hygiene care package.';
    if (num < 250) return 'Covers 2 specialized clinical PTSD & counseling rehabilitation sessions.';
    if (num < 500) return 'Funds 10 days of safe transitional accommodation and case management.';
    return 'Directly funds adaptive smart-home fixtures and wheelchair accessible ramps.';
  };

  const handleSelectPreset = (val) => {
    setAmount(val);
    setIsCustom(false);
    setCustomAmount('');
  };

  const handleCustomChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
    setIsCustom(true);
    if (val) {
      setAmount(Number(val));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalAmount = isCustom ? Number(customAmount || 0) : amount;
    if (finalAmount <= 0) return;

    navigate('/donate', {
      state: {
        campaignId: defaultCampaign,
        amount: finalAmount,
        frequency,
        isTribute,
        tributeName
      }
    });
  };

  const handlePayPalSubmit = () => {
    const val = (isCustom ? Number(customAmount || 0) : amount) || 100;
    try {
      if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(val.toString());
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = val.toString();
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
    } catch (err) {
      console.warn('Clipboard copy error:', err);
    }
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 8000);
  };

  const activeAmount = isCustom ? Number(customAmount || 0) : amount;

  return (
    <div className={`bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden ${compact ? 'p-4 sm:p-5' : 'p-4 sm:p-6 lg:p-8'}`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-brand-red-700">
            <Heart className="w-3.5 h-3.5 fill-current text-brand-red-600" /> Support Heroes
          </span>
          <h3 className="text-base sm:text-xl font-display font-extrabold text-brand-navy-950 mt-1">
            Choose Your Contribution
          </h3>
        </div>
        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-1">
          <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> 100% Tax Deductible
          </span>
          <span className="text-[11px] text-slate-500">IRS 501(c)(3)</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 space-y-5">
        {/* Frequency Tabs */}
        <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl">
          <button
            type="button"
            onClick={() => setFrequency('one-time')}
            className={`py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${
              frequency === 'one-time'
                ? 'bg-white text-brand-navy-950 shadow-sm'
                : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            One-Time Gift
          </button>
          <button
            type="button"
            onClick={() => setFrequency('monthly')}
            className={`py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-1 ${
              frequency === 'monthly'
                ? 'bg-brand-red-600 text-white shadow-sm'
                : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            Monthly Hero
          </button>
        </div>

        {/* Preset Amount Grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {presetAmounts.map((val) => (
            <button
              key={val}
              type="button"
              onClick={() => handleSelectPreset(val)}
              className={`py-3 px-2 rounded-xl text-center font-bold text-sm sm:text-base border transition-all ${
                !isCustom && amount === val
                  ? 'border-brand-red-600 bg-brand-red-50 text-brand-red-700 ring-2 ring-brand-red-600/30'
                  : 'border-slate-200 hover:border-slate-300 bg-white text-slate-800'
              }`}
            >
              ${val}
            </button>
          ))}
          
          <button
            type="button"
            onClick={() => setIsCustom(true)}
            className={`py-3 px-2 rounded-xl text-center font-bold text-sm border transition-all ${
              isCustom
                ? 'border-brand-red-600 bg-brand-red-50 text-brand-red-700 ring-2 ring-brand-red-600/30'
                : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
            }`}
          >
            Custom
          </button>
        </div>

        {/* Custom Amount Input */}
        {isCustom && (
          <div className="relative animate-fadeIn">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-700 font-bold text-lg">
              $
            </span>
            <input
              type="text"
              autoFocus
              value={customAmount}
              onChange={handleCustomChange}
              placeholder="Enter custom dollar amount"
              className="w-full pl-8 pr-4 py-3 bg-slate-50 border-2 border-brand-red-500 rounded-xl font-bold text-slate-900 text-base focus:outline-none focus:bg-white"
            />
          </div>
        )}

        {/* Dynamic Impact Statement */}
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
          <div className="w-5 h-5 rounded-full bg-brand-gold-100 text-brand-gold-700 flex items-center justify-center shrink-0 mt-0.5">
            <Check className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="font-bold text-brand-navy-900">Your ${activeAmount || 0} gift: </span>
            <span>{getImpactDescription(activeAmount)}</span>
          </div>
        </div>

        {/* Tribute Option */}
        <div className="pt-1">
          <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700 select-none">
            <input
              type="checkbox"
              checked={isTribute}
              onChange={(e) => setIsTribute(e.target.checked)}
              className="rounded text-brand-red-600 focus:ring-brand-red-500 w-4 h-4"
            />
            <span>Dedicate this gift in honor or memory of a hero</span>
          </label>

          {isTribute && (
            <input
              type="text"
              value={tributeName}
              onChange={(e) => setTributeName(e.target.value)}
              placeholder="Honoree's name / Regiment"
              className="mt-2 w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-brand-navy-600"
            />
          )}
        </div>

        {/* Main CTA: Goes to detailed checkout */}
        <button
          type="submit"
          className="w-full py-3.5 px-6 rounded-xl font-display font-black text-sm uppercase tracking-wider text-white bg-gradient-to-r from-brand-red-600 to-brand-red-700 hover:from-brand-red-500 hover:to-brand-red-600 shadow-lg hover:shadow-glow-red transition-all duration-200 flex items-center justify-center gap-2 transform active:scale-98"
        >
          <Heart className="w-4 h-4 fill-current text-white" />
          <span>
            {frequency === 'monthly' ? 'Pledge' : 'Donate'} ${activeAmount || 0} {frequency === 'monthly' ? '/ Month' : 'Now'}
          </span>
        </button>
      </form>

      {/* Official PayPal Instant Donate Button (Direct from lovoa.org) */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col items-center justify-center gap-2.5">
        <form 
          action={`https://www.paypal.com/ncp/payment/F923SVVM97EPU?amount=${activeAmount || 0}&price=${activeAmount || 0}&currency_code=USD`} 
          method="post" 
          target="_blank"
          rel="noopener noreferrer"
          onSubmit={handlePayPalSubmit}
          className="w-full flex flex-col items-center gap-2"
        >
          <input type="hidden" name="amount" value={activeAmount || 0} />
          <input type="hidden" name="price" value={activeAmount || 0} />
          <input type="hidden" name="item_name" value={`Donation to League of Veterans of America INC (${frequency})`} />
          <input type="hidden" name="currency_code" value="USD" />
          <input type="hidden" name="no_recurring" value={frequency === 'monthly' ? '0' : '1'} />
          <input type="hidden" name="custom" value={isTribute ? `Tribute: ${tributeName}` : 'General Veteran Support'} />

          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-xl bg-[#ffc439] hover:bg-[#f4b628] text-slate-900 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all border border-[#f0b122] active:scale-98"
          >
            <span>Donate ${activeAmount || 0} via Official PayPal</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-700" />
          </button>

          {/* Auto-copy Helper Notification */}
          {copiedNotification ? (
            <div className="w-full p-2.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 text-xs flex items-start gap-2 shadow-sm animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-emerald-950 font-bold">${activeAmount || 0} copied to clipboard!</strong>
                <p className="text-[11px] text-emerald-800 mt-0.5 leading-relaxed">
                  Opening PayPal... Simply paste (<kbd className="px-1 py-0.5 bg-emerald-100 border border-emerald-300 rounded font-mono text-[10px]">Ctrl+V</kbd> or tap <strong>Paste</strong>) into the "Donation" box.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
              <Copy className="w-3 h-3 text-slate-400" />
              <span>Copies <strong>${activeAmount || 0}</strong> to clipboard for quick paste on PayPal</span>
            </div>
          )}
          
          <img 
            src={paypalCardsSvg} 
            alt="Debit and Credit Cards accepted" 
            className="h-5 object-contain mt-1"
          />
          
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
            <span>Powered by</span>
            <img 
              src={paypalWordmarkSvg} 
              alt="PayPal" 
              className="h-3.5 inline"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
