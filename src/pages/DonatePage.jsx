import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Heart, ShieldCheck, Lock, CreditCard, Check, ArrowLeft, ExternalLink, Car, CheckCircle2, Copy } from 'lucide-react';
import { CAUSES_DATA } from '../data/causesData';
import confetti from 'canvas-confetti';
import paypalCardsSvg from '../assets/paypal-cards.svg';
import paypalWordmarkSvg from '../assets/paypal-wordmark.svg';

export default function DonatePage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Read incoming props if forwarded from a widget or campaign
  const initialData = location.state || {};

  const [frequency, setFrequency] = useState(initialData.frequency || 'one-time');
  const [selectedAmount, setSelectedAmount] = useState(initialData.amount || 100);
  const [customAmount, setCustomAmount] = useState(
    [25, 50, 100, 250, 500].includes(initialData.amount) ? '' : (initialData.amount ? String(initialData.amount) : '')
  );
  const [isCustom, setIsCustom] = useState(
    Boolean(initialData.amount && ![25, 50, 100, 250, 500].includes(initialData.amount))
  );
  const [selectedCause, setSelectedCause] = useState(initialData.campaignId || 'general-fund');
  
  const [paymentMethod, setPaymentMethod] = useState('paypal'); // 'paypal' or 'card'
  const [coverFees, setCoverFees] = useState(true);
  const [paypalCopiedNotification, setPaypalCopiedNotification] = useState(false);

  // Form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    isTribute: initialData.isTribute || false,
    tributeType: 'honor',
    tributeName: initialData.tributeName || '',
    anonymous: false,
    cardNumber: '4242 •••• •••• 4242',
    cardExp: '12/28',
    cardCvc: '•••'
  });

  const [processing, setProcessing] = useState(false);

  const baseAmount = isCustom ? Number(customAmount || 0) : selectedAmount;
  const processingFee = coverFees ? Math.round((baseAmount * 0.029 + 0.3) * 100) / 100 : 0;
  const totalAmount = Math.round((baseAmount + processingFee) * 100) / 100;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSelectPreset = (amt) => {
    setSelectedAmount(amt);
    setIsCustom(false);
    setCustomAmount('');
  };

  const handleCustomChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
    setIsCustom(true);
    if (val) {
      setSelectedAmount(Number(val));
    }
  };

  const copyPayPalAmount = () => {
    try {
      if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(totalAmount.toString());
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = totalAmount.toString();
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
    } catch (err) {
      console.warn('Clipboard copy error:', err);
    }
    setPaypalCopiedNotification(true);
    setTimeout(() => setPaypalCopiedNotification(false), 8000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (baseAmount <= 0) {
      alert('Please enter a valid donation amount.');
      return;
    }

    if (paymentMethod === 'paypal') {
      copyPayPalAmount();
      // Direct to official PayPal checkout in new tab
      const paypalUrl = `https://www.paypal.com/ncp/payment/F923SVVM97EPU?amount=${totalAmount}&price=${totalAmount}&currency_code=USD`;
      window.open(paypalUrl, '_blank');
      return;
    }

    setProcessing(true);

    // Simulate secure transaction and receipt generation
    setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });

      const receiptId = `LV-${Math.floor(100000 + Math.random() * 900000)}`;

      navigate('/donation-success', {
        state: {
          receiptId,
          amount: totalAmount,
          baseAmount,
          frequency,
          causeId: selectedCause,
          donorName: formData.anonymous ? 'Anonymous Supporter' : `${formData.firstName} ${formData.lastName}`.trim() || 'Generous Hero Supporter',
          email: formData.email || 'donor@example.com',
          paymentMethod,
          date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        }
      });
    }, 1200);
  };

  return (
    <div className="bg-slate-50 py-8 sm:py-16 pb-20 sm:pb-24">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-navy-950 mb-5 sm:mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Page Title */}
        <div className="text-center space-y-2 mb-6 sm:mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-brand-red-700">
            <Heart className="w-3.5 h-3.5 fill-current" /> Stand With Our Heroes
          </span>
          <h1 className="text-2xl sm:text-4xl font-display font-black text-brand-navy-950">
            Make a Donation to lovoa.org
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            League of Veterans of America INC is an official 501(c)(3) tax-exempt non-profit. All gifts are 100% tax-deductible.
          </p>
        </div>

        {/* Authentic 3-Step Process from lovoa.org */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200 mb-6 sm:mb-8">
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-gold-600 mb-3 sm:mb-4 text-center font-display">
            Our donation process is quick & easy...
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center">
            <div className="space-y-1 sm:space-y-1.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-navy-950 text-brand-gold-400 mx-auto flex items-center justify-center font-bold text-xs sm:text-sm">
                1
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-brand-navy-950">Choose Amount</h4>
              <p className="text-[11px] sm:text-xs text-slate-500">Select a one-time or recurring donation amount that fits your goals.</p>
            </div>

            <div className="space-y-1 sm:space-y-1.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-navy-950 text-brand-gold-400 mx-auto flex items-center justify-center font-bold text-xs sm:text-sm">
                2
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-brand-navy-950">Fill in Your Details</h4>
              <p className="text-[11px] sm:text-xs text-slate-500">Enter your contact info for official IRS 501(c)(3) tax receipting.</p>
            </div>

            <div className="space-y-1 sm:space-y-1.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-navy-950 text-brand-gold-400 mx-auto flex items-center justify-center font-bold text-xs sm:text-sm">
                3
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-brand-navy-950">Complete Your Donation</h4>
              <p className="text-[11px] sm:text-xs text-slate-500">Click to proceed securely to PayPal or Card to instantly support veterans.</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          
          {/* Card 1: Amount & Frequency Selection */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm border border-slate-200 space-y-5 sm:space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h2 className="text-base sm:text-lg font-display font-bold text-brand-navy-950">
                1. Choose Donation Amount
              </h2>
              <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" /> 100% Tax Deductible
              </span>
            </div>

            {/* Frequency Toggle */}
            <div className="grid grid-cols-2 p-1.5 bg-slate-100 rounded-xl max-w-md mx-auto">
              <button
                type="button"
                onClick={() => setFrequency('one-time')}
                className={`py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                  frequency === 'one-time'
                    ? 'bg-white text-brand-navy-950 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                One-Time Gift
              </button>
              <button
                type="button"
                onClick={() => setFrequency('monthly')}
                className={`py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  frequency === 'monthly'
                    ? 'bg-brand-red-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Monthly Recurring
              </button>
            </div>

            {/* Amount Chips */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {[25, 50, 100, 250, 500].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => handleSelectPreset(amt)}
                  className={`py-3.5 rounded-xl font-bold text-sm sm:text-base border transition-all ${
                    !isCustom && selectedAmount === amt
                      ? 'border-brand-red-600 bg-brand-red-50 text-brand-red-700 ring-2 ring-brand-red-600/30'
                      : 'border-slate-200 hover:border-slate-300 bg-white text-slate-800'
                  }`}
                >
                  ${amt}
                </button>
              ))}

              <button
                type="button"
                onClick={() => setIsCustom(true)}
                className={`py-3.5 rounded-xl font-bold text-sm border transition-all ${
                  isCustom
                    ? 'border-brand-red-600 bg-brand-red-50 text-brand-red-700 ring-2 ring-brand-red-600/30'
                    : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                }`}
              >
                Custom
              </button>
            </div>

            {/* Custom Input */}
            {isCustom && (
              <div className="relative max-w-sm mx-auto">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 font-bold text-lg">
                  $
                </span>
                <input
                  type="text"
                  autoFocus
                  value={customAmount}
                  onChange={handleCustomChange}
                  placeholder="Enter custom dollar amount"
                  className="w-full pl-8 pr-4 py-3 bg-slate-50 border-2 border-brand-red-500 rounded-xl font-bold text-slate-900 text-lg focus:outline-none focus:bg-white"
                />
              </div>
            )}

            {/* Designation / Campaign Dropdown */}
            <div className="pt-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Support A Specific Initiative:
              </label>
              <select
                value={selectedCause}
                onChange={(e) => setSelectedCause(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:border-brand-navy-950"
              >
                <option value="general-fund">General Veteran Emergency Housing & Care (Recommended)</option>
                {CAUSES_DATA.map((c) => (
                  <option key={c.slug} value={c.slug}>{c.title}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Card 2: Donor Personal Details */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm border border-slate-200 space-y-4 sm:space-y-5">
            <h2 className="text-base sm:text-lg font-display font-bold text-brand-navy-950 pb-3 border-b border-slate-100">
              2. Your Contact Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">First Name *</label>
                <input
                  type="text"
                  required
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-brand-navy-950"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Last Name *</label>
                <input
                  type="text"
                  required
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Doe"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-brand-navy-950"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">Email (for official tax receipt) *</label>
                <input
                  type="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john.doe@example.com"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-brand-navy-950"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (561) 000-0000"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-brand-navy-950"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">State / Zip</label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="State"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-brand-navy-950"
                  />
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    placeholder="Zip Code"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-brand-navy-950"
                  />
                </div>
              </div>
            </div>

            {/* Tribute / Dedication Checkbox */}
            <div className="space-y-3 pt-2">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700">
                <input
                  type="checkbox"
                  name="anonymous"
                  checked={formData.anonymous}
                  onChange={handleInputChange}
                  className="rounded text-brand-red-600 focus:ring-brand-red-500 w-4 h-4"
                />
                <span>Make my donation anonymous on public honor rolls</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700">
                <input
                  type="checkbox"
                  name="isTribute"
                  checked={formData.isTribute}
                  onChange={handleInputChange}
                  className="rounded text-brand-red-600 focus:ring-brand-red-500 w-4 h-4"
                />
                <span>Dedicate this donation in honor or memory of a service member</span>
              </label>

              {formData.isTribute && (
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3 mt-2 animate-fadeIn">
                  <div className="flex gap-4 text-xs font-bold">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="tributeType"
                        value="honor"
                        checked={formData.tributeType === 'honor'}
                        onChange={handleInputChange}
                        className="text-brand-red-600"
                      />
                      <span>In Honor of</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="tributeType"
                        value="memory"
                        checked={formData.tributeType === 'memory'}
                        onChange={handleInputChange}
                        className="text-brand-red-600"
                      />
                      <span>In Memory of</span>
                    </label>
                  </div>
                  <input
                    type="text"
                    name="tributeName"
                    value={formData.tributeName}
                    onChange={handleInputChange}
                    placeholder="Enter full name / unit / rank"
                    className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-brand-navy-950"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Card 3: Payment Method via PayPal / Cards */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm border border-slate-200 space-y-5 sm:space-y-6">
            <h2 className="text-base sm:text-lg font-display font-bold text-brand-navy-950 pb-3 border-b border-slate-100">
              3. Payment Information via Trusted Platform PayPal
            </h2>

            {/* Payment Method Selector */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
              <button
                type="button"
                onClick={() => setPaymentMethod('paypal')}
                className={`p-3 sm:p-4 rounded-xl border flex flex-col items-center justify-center gap-1 font-bold text-sm transition-all ${
                  paymentMethod === 'paypal'
                    ? 'border-[#003087] bg-blue-50/70 text-blue-900 ring-2 ring-blue-500/30'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                }`}
              >
                <div className="flex items-center gap-1">
                  <span className="font-black italic text-lg tracking-tight text-[#003087]">PayPal</span>
                </div>
                <span className="text-[11px] font-normal text-slate-500">Instant & Verified on lovoa.org</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-1 font-bold text-sm transition-all ${
                  paymentMethod === 'card'
                    ? 'border-brand-navy-950 bg-slate-900 text-white shadow'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4" />
                  <span>Debit / Credit Card</span>
                </div>
                <span className="text-[11px] font-normal text-slate-400">Visa, Mastercard, Amex, Discover</span>
              </button>
            </div>

            {paymentMethod === 'paypal' ? (
              <div className="p-4 sm:p-6 bg-amber-50/60 border border-amber-200 rounded-xl sm:rounded-2xl text-center space-y-3.5">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Official Live PayPal Non-Profit Portal</span>
                  </div>
                  <h4 className="font-bold text-brand-navy-950 text-base pt-1">
                    Donate Securely via lovoa.org Verified Gateway
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your <strong>${totalAmount}</strong> contribution is processed directly through PayPal. You can donate using your PayPal balance, linked bank account, or any major debit/credit card.
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-1.5 py-1">
                  <img 
                    src={paypalCardsSvg} 
                    alt="Visa, Mastercard, Amex, Discover accepted" 
                    className="h-5 sm:h-6 object-contain"
                  />
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <span>Powered by</span>
                    <img 
                      src={paypalWordmarkSvg} 
                      alt="PayPal" 
                      className="h-3.5 sm:h-4 inline"
                    />
                  </div>
                </div>


              </div>
            ) : (
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-mono text-slate-900 focus:outline-none focus:border-brand-navy-950"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Expiration Date</label>
                    <input
                      type="text"
                      name="cardExp"
                      value={formData.cardExp}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-mono text-slate-900 focus:outline-none focus:border-brand-navy-950"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Security Code (CVC)</label>
                    <input
                      type="text"
                      name="cardCvc"
                      value={formData.cardCvc}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-mono text-slate-900 focus:outline-none focus:border-brand-navy-950"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Total & Final Submission */}
          <div className="bg-brand-navy-950 text-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-brand-navy-800 space-y-5 sm:space-y-6">
            <div className="flex justify-between items-center text-base sm:text-xl font-display font-extrabold pb-3 sm:pb-4 border-b border-slate-800">
              <span>Total Contribution:</span>
              <span className="text-2xl sm:text-3xl text-brand-gold-400 font-black">
                ${totalAmount} <span className="text-xs text-slate-400 font-normal">{frequency === 'monthly' ? '/ Month' : 'USD'}</span>
              </span>
            </div>

            {paymentMethod === 'paypal' && (
              <div className="p-3 rounded-xl bg-brand-navy-900 border border-brand-navy-700 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-slate-300">
                  <Copy className="w-4 h-4 text-brand-gold-400 shrink-0" />
                  <span>Amount to donate: <strong className="text-white font-bold">${totalAmount}</strong> (copies to clipboard automatically)</span>
                </div>
                {paypalCopiedNotification && (
                  <span className="inline-flex items-center gap-1 text-emerald-400 font-bold text-xs bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-500/40 animate-fadeIn">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Copied to Clipboard!
                  </span>
                )}
              </div>
            )}

            {paymentMethod === 'paypal' ? (
              <button
                type="submit"
                className="w-full py-4 px-6 sm:px-8 rounded-xl font-display font-black text-sm sm:text-base uppercase tracking-wider text-slate-900 bg-[#ffc439] hover:bg-[#f4b628] shadow-xl hover:shadow-glow-yellow transition-all flex items-center justify-center gap-2 transform active:scale-98 border border-[#f0b122]"
              >
                <span>Proceed to PayPal (${totalAmount})</span>
                <ExternalLink className="w-4 h-4 text-slate-900" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={processing}
                className="w-full py-4 px-8 rounded-xl font-display font-black text-base uppercase tracking-wider text-white bg-gradient-to-r from-brand-red-600 to-brand-red-700 hover:from-brand-red-500 hover:to-brand-red-600 shadow-xl hover:shadow-glow-red transition-all flex items-center justify-center gap-2 transform active:scale-98 disabled:opacity-50"
              >
                <Heart className="w-5 h-5 fill-current text-white" />
                <span>{processing ? 'Connecting...' : `Click to Donate $${totalAmount} Now`}</span>
              </button>
            )}

            {paymentMethod === 'paypal' && paypalCopiedNotification && (
              <div className="p-3 rounded-xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-200 text-xs text-center animate-fadeIn space-y-1">
                <p className="font-bold text-white">Opening official PayPal portal in new tab...</p>
                <p className="text-[11px] text-emerald-200">
                  Your <strong>${totalAmount}</strong> is copied to clipboard. Paste (<kbd className="px-1 py-0.5 bg-emerald-900 rounded font-mono text-[10px]">Ctrl+V</kbd> or tap <strong>Paste</strong>) into the PayPal Donation box.
                </p>
                <p className="text-[11px] text-emerald-300 pt-0.5">
                  Pop-up blocked? <a href={`https://www.paypal.com/ncp/payment/F923SVVM97EPU?amount=${totalAmount}&price=${totalAmount}&currency_code=USD`} target="_blank" rel="noopener noreferrer" className="underline font-bold text-white hover:text-brand-gold-300">Click here to open PayPal directly</a>.
                </p>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-emerald-400" /> Bank-grade 256-Bit Security
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Instant 501(c)(3) Receipt Generated
              </span>
            </div>
          </div>

        </form>

        {/* Vehicle Donation Prompt */}
        <div className="mt-8 p-5 bg-amber-50 border border-amber-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-bold text-brand-navy-950 text-sm flex items-center justify-center sm:justify-start gap-2">
              <Car className="w-4 h-4 text-brand-gold-600" /> Looking to donate a car or truck instead?
            </h4>
            <p className="text-xs text-slate-600">
              We take running & non-running vehicles, RVs, motorcycles, and boats across all 50 states with free towing.
            </p>
          </div>
          <Link
            to="/vehicle-donation"
            className="px-4 py-2 bg-brand-gold-500 hover:bg-brand-gold-400 text-brand-navy-950 font-bold text-xs uppercase tracking-wider rounded-xl shrink-0 transition-colors"
          >
            Vehicle Donation Form
          </Link>
        </div>

      </div>
    </div>
  );
}
