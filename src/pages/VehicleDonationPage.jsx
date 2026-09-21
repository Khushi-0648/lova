import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, Truck, Anchor, Bike, ShieldCheck, CheckCircle2, Phone, Calendar, ArrowRight, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import carPropertyImg from '../assets/car-property-donation.jpg';

export default function VehicleDonationPage() {
  const [vehicleType, setVehicleType] = useState('Car/Sedan');
  const [runs, setRuns] = useState('Yes');
  const [hasTitle, setHasTitle] = useState('Yes');
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    year: '',
    make: '',
    model: '',
    mileage: '',
    zip: '',
    state: '',
    address: '',
    fullName: '',
    phone: '',
    email: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="space-y-16 pb-24">
      
      {/* Hero Banner */}
      <section className="bg-brand-navy-950 text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold-500/20 text-brand-gold-400 border border-brand-gold-500/30">
              <Car className="w-4 h-4" /> Nationwide 50-State Vehicle Program
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-white">
              We Also Take Car & Property Donations
            </h1>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              We accept both working and non-working vehicles across all 50 U.S. states. Transform your unwanted car, truck, RV, or boat into life-saving shelter for Purple Heart, homeless, and combat wounded veterans.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Official Highlights from lovoa.org */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 sm:-mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-brand-navy-950 text-brand-gold-400 flex items-center justify-center font-black text-lg">
              <Car className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-brand-navy-950">Running & Non Running</h3>
            <p className="text-xs text-slate-500">We accept both working and non-working vehicles with zero towing charges.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-brand-navy-950 text-brand-gold-400 flex items-center justify-center font-black text-lg">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-brand-navy-950">New or Old</h3>
            <p className="text-xs text-slate-500">It doesn’t matter how old the vehicle is, we take them all regardless of age or mileage.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-brand-navy-950 text-brand-gold-400 flex items-center justify-center font-black text-lg">
              <Anchor className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-brand-navy-950">Other Items Accepted</h3>
            <p className="text-xs text-slate-500">We may also accept boats, motorcycles, ATVs, RVs, trailers, and property.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-brand-navy-950 text-brand-gold-400 flex items-center justify-center font-black text-lg">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-brand-navy-950">All 50 U.S. States</h3>
            <p className="text-xs text-slate-500">We accept vehicle donations nationwide and provide official IRS tax deduction receipts.</p>
          </div>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-black text-brand-navy-950">
                  Vehicle Donation Intake Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{formData.fullName || 'Generous Donor'}</strong>. Our vehicle dispatch team will contact you at <strong className="text-slate-900">{formData.phone || '+1 (561) 770-8708'}</strong> within 24 hours to schedule free towing.
                </p>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 max-w-md mx-auto text-left space-y-1">
                  <p><strong>Vehicle:</strong> {formData.year} {formData.make} {formData.model} ({runs === 'Yes' ? 'Running' : 'Non-Running'})</p>
                  <p><strong>Location:</strong> {formData.address || 'Address provided'}, {formData.state} {formData.zip}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-brand-red-600 underline"
                >
                  Submit another vehicle
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-display font-black text-brand-navy-950">
                    Schedule Your Free Vehicle Pickup
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Help Purple Heart, Homeless, and Combat Wounded Vets. We accept donations in all 50 U.S. states.
                  </p>
                </div>

                {/* Vehicle Type selector */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Vehicle Type</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['Car/Sedan', 'Truck/SUV', 'RV/Camper', 'Boat/Watercraft'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setVehicleType(type)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                          vehicleType === type
                            ? 'border-brand-navy-950 bg-slate-900 text-white'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Year, Make, Model */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Year *</label>
                    <input
                      type="text"
                      required
                      name="year"
                      placeholder="e.g. 2012"
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-navy-950"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Make *</label>
                    <input
                      type="text"
                      required
                      name="make"
                      placeholder="e.g. Ford / Toyota"
                      value={formData.make}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-navy-950"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Model *</label>
                    <input
                      type="text"
                      required
                      name="model"
                      placeholder="e.g. F-150 / Camry"
                      value={formData.model}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-navy-950"
                    />
                  </div>
                </div>

                {/* Condition & Title */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Does it Run?</label>
                    <div className="flex gap-4 pt-1">
                      {['Yes', 'No'].map((opt) => (
                        <label key={opt} className="flex items-center gap-1.5 text-xs font-bold cursor-pointer">
                          <input
                            type="radio"
                            name="runs"
                            value={opt}
                            checked={runs === opt}
                            onChange={() => setRuns(opt)}
                            className="text-brand-red-600"
                          />
                          <span>{opt === 'Yes' ? 'Yes, Runs & Drives' : 'No, Non-running'}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Do you have the Title?</label>
                    <div className="flex gap-4 pt-1">
                      {['Yes', 'No'].map((opt) => (
                        <label key={opt} className="flex items-center gap-1.5 text-xs font-bold cursor-pointer">
                          <input
                            type="radio"
                            name="hasTitle"
                            value={opt}
                            checked={hasTitle === opt}
                            onChange={() => setHasTitle(opt)}
                            className="text-brand-red-600"
                          />
                          <span>{opt === 'Yes' ? 'Yes, in hand' : 'No / Lost Title'}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1">Pickup Street Address *</label>
                    <input
                      type="text"
                      required
                      name="address"
                      placeholder="123 Main St"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-navy-950"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Zip Code *</label>
                    <input
                      type="text"
                      required
                      name="zip"
                      placeholder="33401"
                      value={formData.zip}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-navy-950"
                    />
                  </div>
                </div>

                {/* Donor Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-100">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      name="fullName"
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-navy-950"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      name="phone"
                      placeholder="+1 (561) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-navy-950"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      name="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-navy-950"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl font-display font-black text-sm uppercase tracking-wider text-brand-navy-950 bg-brand-gold-500 hover:bg-brand-gold-400 shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Car className="w-5 h-5" />
                  <span>Request Free Vehicle Pickup</span>
                </button>
              </form>
            )}

          </div>

          {/* Right: Benefits & Direct Call (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual Callout - Clean Car & Property Image without overlay text */}
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900">
              <img
                src={carPropertyImg}
                alt="Car and Property Donation"
                className="w-full h-56 object-cover"
              />
              <div className="p-4 bg-brand-navy-950 text-white flex items-center justify-between border-t border-slate-800">
                <span className="text-xs font-bold text-brand-gold-400">100% Free Towing & Pickup</span>
                <span className="text-[11px] text-slate-300">IRS Tax Deductible</span>
              </div>
            </div>

            {/* Direct Helpline Card */}
            <div className="bg-brand-navy-950 text-white p-7 rounded-3xl border border-slate-800 shadow-xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-400">
                Prefer to Donate by Phone?
              </span>
              <h3 className="text-xl font-display font-black">
                Call our Vehicle Donation Hotline
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our donor representatives are ready to take your vehicle details and arrange towing right over the phone in under 5 minutes.
              </p>
              <a
                href="tel:+15617708708"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-brand-navy-950 hover:bg-slate-100 font-display font-black text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-brand-gold-600" />
                <span>+1 (561) 770-8708</span>
              </a>
            </div>

            {/* Why Donate to LOVOA */}
            <div className="bg-slate-100 p-7 rounded-3xl border border-slate-200 space-y-4">
              <h4 className="font-display font-bold text-base text-brand-navy-950">
                Vehicle Donation FAQs from lovoa.org:
              </h4>
              
              <div className="space-y-3 text-xs text-slate-600">
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <strong className="text-slate-900 block mb-1">What if my car doesn't run?</strong>
                  We gladly accept non-running vehicles with engine or transmission issues, blown tires, or dead batteries.
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <strong className="text-slate-900 block mb-1">How soon will it be picked up?</strong>
                  Usually within 24 to 48 hours after your form submission, at a time scheduled with you.
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <strong className="text-slate-900 block mb-1">How much can I deduct on taxes?</strong>
                  If the vehicle sells for more than $500, you deduct the exact gross selling price. If it sells for under $500, you can claim fair market value up to $500.
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
