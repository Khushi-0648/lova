import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Heart, ShieldCheck, Lock, CreditCard, Check, AlertCircle, ArrowLeft, ExternalLink, Car } from 'lucide-react';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (baseAmount <= 0) {
      alert('Please enter a valid donation amount.');
      return;
    }

    if (paymentMethod === 'paypal') {
      // Direct to official PayPal checkout in new tab
      window.open('https://www.paypal.com/ncp/payment/F923SVVM97EPU', '_blank');
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
    <div className="bg-slate-50 py-12 sm:py-16 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-navy-950 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Page Title */}
        <div className="text-center space-y-2 mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-brand-red-700">
            <Heart className="w-3.5 h-3.5 fill-current" /> Stand With Our Heroes
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-brand-navy-950">
            Make a Donation to lovoa.org
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            League of Veterans of America INC is an official 501(c)(3) tax-exempt non-profit. All gifts are 100% tax-deductible.
          </p>
        </div>

        {/* Authentic 3-Step Process from lovoa.org */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-8">
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-gold-600 mb-4 text-center font-display">
            Our donation process is quick & easy...
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-1.5">
              <div className="w-8 h-8 rounded-full bg-brand-navy-950 text-brand-gold-400 mx-auto flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h4 className="font-bold text-sm text-brand-navy-950">Choose Amount</h4>
              <p className="text-xs text-slate-500">Select a one-time or recurring donation amount that fits your contribution goals.</p>
            </div>

            <div className="space-y-1.5">
              <div className="w-8 h-8 rounded-full bg-brand-navy-950 text-brand-gold-400 mx-auto flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h4 className="font-bold text-sm text-brand-navy-950">Fill in Your Details</h4>
              <p className="text-xs text-slate-500">Enter your payment information securely via our trusted platform, PayPal.</p>
            </div>

            <div className="space-y-1.5">
              <div className="w-8 h-8 rounded-full bg-brand-navy-950 text-brand-gold-400 mx-auto flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h4 className="font-bold text-sm text-brand-navy-950">Complete Your Donation</h4>
              <p className="text-xs text-slate-500">Click "Donate Now" to instantly support homeless veterans and make a lasting impact.</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Card 1: Amount & Frequency Selection */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h2 className="text-lg font-display font-bold text-brand-navy-950">
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
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-5">
            <h2 className="text-lg font-display font-bold text-brand-navy-950 pb-3 border-b border-slate-100">
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
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
            <h2 className="text-lg font-display font-bold text-brand-navy-950 pb-3 border-b border-slate-100">
              3. Payment Information via Trusted Platform PayPal
            </h2>

            {/* Payment Method Selector */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setPaymentMethod('paypal')}
                className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-1 font-bold text-sm transition-all ${
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
              <div className="p-6 bg-amber-50/40 border border-amber-200/80 rounded-2xl text-center space-y-4">
                <div className="space-y-1">
                  <h4 className="font-bold text-brand-navy-950 text-base">
                    Donate Securely via Official PayPal Portal
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    You can donate using your PayPal balance, bank transfer, or major credit/debit card on the official LOVOA PayPal payment link.
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-2">
                  <img 
                    src={paypalCardsSvg} 
                    alt="Accepted Cards" 
                    className="h-6 object-contain"
                  />
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <span>Powered by</span>
                    <img 
                      src={paypalWordmarkSvg} 
                      alt="PayPal" 
                      className="h-4 inline"
                    />
                  </div>
                </div>

                <a
                  href="https://www.paypal.com/ncp/payment/F923SVVM97EPU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full max-w-sm py-3 px-6 rounded-xl bg-[#ffc439] hover:bg-[#f4b628] text-slate-900 font-extrabold text-sm shadow-md transition-all border border-[#f0b122]"
                >
                  <span>Open Official PayPal Checkout</span>
                  <ExternalLink className="w-4 h-4 text-slate-800" />
                </a>
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

            {/* Optional Processing Fee Cover */}
            <div className="pt-2 border-t border-slate-100">
              <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-700">
                <input
                  type="checkbox"
                  checked={coverFees}
                  onChange={(e) => setCoverFees(e.target.checked)}
                  className="rounded text-brand-red-600 focus:ring-brand-red-500 w-4 h-4 mt-0.5"
                />
                <div>
                  <span className="font-bold">Add ${processingFee} to cover processing costs</span>
                  <p className="text-slate-500 text-[11px]">This ensures 100% of your ${baseAmount} contribution goes directly to veteran shelter and care.</p>
                </div>
              </label>
            </div>
          </div>

          {/* Total & Final Submission */}
          <div className="bg-brand-navy-950 text-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-brand-navy-800 space-y-6">
            <div className="flex justify-between items-center text-lg sm:text-xl font-display font-extrabold pb-4 border-b border-slate-800">
              <span>Total Contribution:</span>
              <span className="text-2xl sm:text-3xl text-brand-gold-400 font-black">
                ${totalAmount} <span className="text-xs text-slate-400 font-normal">{frequency === 'monthly' ? '/ Month' : 'USD'}</span>
              </span>
            </div>

            <button
              type="submit"
              disabled={processing}
              className="w-full py-4 px-8 rounded-xl font-display font-black text-base uppercase tracking-wider text-white bg-gradient-to-r from-brand-red-600 to-brand-red-700 hover:from-brand-red-500 hover:to-brand-red-600 shadow-xl hover:shadow-glow-red transition-all flex items-center justify-center gap-2 transform active:scale-98 disabled:opacity-50"
            >
              <Heart className="w-5 h-5 fill-current text-white" />
              <span>{processing ? 'Connecting...' : `Click to Donate $${totalAmount} Now`}</span>
            </button>

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
