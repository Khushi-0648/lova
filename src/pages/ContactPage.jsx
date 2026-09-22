import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-24">
      
      {/* Header */}
      <section className="bg-brand-navy-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold-500/20 text-brand-gold-400 border border-brand-gold-500/30">
            <Mail className="w-3.5 h-3.5" /> Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white">
            We Would Love to Hear From You
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Whether you have questions about donating, need vehicle pickup assistance, or are a veteran looking for immediate shelter resources.
          </p>
        </div>
      </section>

      {/* Veteran Emergency Crisis Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-brand-red-700">
            <ShieldAlert className="w-6 h-6 shrink-0 text-brand-red-600" />
            <div className="text-xs sm:text-sm">
              <strong className="font-bold block">Are you a veteran in acute distress or crisis?</strong>
              <span>Dial 988 then press 1, or text 838255 for free, confidential 24/7 support.</span>
            </div>
          </div>
          <a
            href="tel:988"
            className="px-4 py-2 bg-brand-red-600 hover:bg-brand-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shrink-0 transition-colors"
          >
            Call Crisis Line
          </a>
        </div>
      </section>

      {/* Contact Grid: Form & Direct Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-md space-y-6">
              <h2 className="text-xl sm:text-2xl font-display font-black text-brand-navy-950">
                Official Contact Information
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Feel free to reach out directly to our operations and donor relations team.
              </p>

              <div className="space-y-4 pt-2">
                
                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-brand-gold-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Call Us Directly</span>
                    <a href="tel:+15617708708" className="text-base font-bold text-brand-navy-950 hover:text-brand-red-600 transition-colors">
                      +1 (561) 770-8708
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">Mon – Sat, 8:00 AM – 8:00 PM EST</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-brand-red-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Mail Us for Enquiry</span>
                    <a href="mailto:lovoa47@outlook.com" className="text-base font-bold text-brand-navy-950 hover:text-brand-red-600 transition-colors break-all">
                      lovoa47@outlook.com
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">Responses typically within 24 hours</p>
                  </div>
                </div>

                {/* Nationwide Coverage */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Headquarters & Service Area</span>
                    <span className="text-sm font-bold text-brand-navy-950 block">All 50 U.S. States</span>
                    <p className="text-xs text-slate-500 mt-0.5">Nationwide vehicle pickup network & partner shelters</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Note */}
            <div className="bg-brand-navy-950 text-white p-6 rounded-3xl border border-slate-800 space-y-2">
              <h4 className="font-display font-bold text-base text-brand-gold-400">Need a Tax Receipt Copy?</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                If you made a past vehicle or cash donation and need a replacement IRS acknowledgment letter, simply email <strong className="text-white">lovoa47@outlook.com</strong> with your approximate date or vehicle VIN.
              </p>
            </div>
          </div>

          {/* Right: Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-8 lg:p-10 border border-slate-200 shadow-xl">
            
            {submitted ? (
              <div className="text-center py-16 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-black text-brand-navy-950">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to League of Veterans of America. Our team will review your inquiry and get back to you at <strong className="text-slate-900">{formData.email}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-brand-red-600 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="text-2xl font-display font-black text-brand-navy-950">
                    Send Us a Direct Message
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill out the form below and we will get back to you promptly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      name="name"
                      placeholder="Jane Doe"
                      value={formData.name}
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-navy-950"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Inquiry Purpose</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-brand-navy-950"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Vehicle Donation Question">Vehicle Donation Question</option>
                      <option value="Veteran Seeking Housing / Help">Veteran Seeking Housing / Help</option>
                      <option value="Corporate Sponsorship & Matching">Corporate Sponsorship & Matching</option>
                      <option value="Volunteering">Volunteering Opportunities</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Message *</label>
                  <textarea
                    required
                    rows={5}
                    name="message"
                    placeholder="How can we help you today?"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-navy-950"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl font-display font-black text-sm uppercase tracking-wider text-white bg-brand-navy-950 hover:bg-brand-navy-900 shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-brand-gold-400" />
                  <span>Send Message to LOVOA</span>
                </button>
              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
