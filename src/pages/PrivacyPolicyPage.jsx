import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Lock, 
  EyeOff, 
  FileText, 
  Mail, 
  Phone, 
  CheckCircle2, 
  ChevronRight
} from 'lucide-react';

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState('donor-promise');

  const sections = [
    { id: 'donor-promise', title: '1. Donor Privacy Guarantee' },
    { id: 'info-collected', title: '2. Information We Collect' },
    { id: 'how-we-use', title: '3. How We Use Information' },
    { id: 'payment-security', title: '4. Payment & PCI-DSS Security' },
    { id: 'vehicle-data', title: '5. Vehicle Donation Records' },
    { id: 'cookies', title: '6. Cookies & Tracking Technologies' },
    { id: 'donor-rights', title: '7. Your Rights & Opt-Out Choices' },
    { id: 'contact', title: '8. Official Contact & Data Requests' },
  ];

  const scrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-12 pb-24">
      {/* Hero Header */}
      <section className="bg-brand-navy-950 text-white py-14 lg:py-18 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold-500/20 text-brand-gold-400 border border-brand-gold-500/30">
            <ShieldCheck className="w-3.5 h-3.5" /> Official Organization Policy
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white">
            Privacy Policy & Donor Bill of Rights
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            League of Veterans of America INC (lovoa.org) is committed to protecting the privacy, confidentiality, and security of all donors, veterans, and website visitors.
          </p>
          <div className="pt-2 text-xs text-slate-400 font-mono">
            Effective Date: January 1, 2025 • Last Updated & Reviewed: 2026
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Index (Sticky Desktop) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
              <h3 className="font-display font-bold text-brand-navy-950 text-sm uppercase tracking-wider flex items-center gap-2">
                <FileText className="w-4 h-4 text-brand-gold-500" />
                Table of Contents
              </h3>
              <nav className="space-y-1">
                {sections.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between group ${
                      activeSection === item.id
                        ? 'bg-brand-navy-900 text-white font-semibold'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <span>{item.title}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${
                      activeSection === item.id ? 'text-brand-gold-400 translate-x-1' : 'opacity-40 group-hover:opacity-100'
                    }`} />
                  </button>
                ))}
              </nav>
            </div>

            {/* Donor Privacy Pledge Badge */}
            <div className="bg-gradient-to-br from-emerald-950 to-brand-navy-950 text-white rounded-2xl p-6 border border-emerald-800/40 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <EyeOff className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-white text-base">
                Our Zero-Sharing Pledge
              </h4>
              <p className="text-xs text-emerald-100/80 leading-relaxed">
                We never sell, rent, license, or trade donor lists, phone numbers, or email addresses to any marketing agency, commercial company, or outside non-profit.
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Confidential Guarantee
                </span>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="bg-slate-100/80 rounded-2xl p-6 border border-slate-200 space-y-3">
              <h4 className="font-display font-bold text-slate-900 text-sm">
                Need Help with Your Records?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Contact our privacy compliance team directly for data access requests, tax receipt inquiries, or communications preferences:
              </p>
              <div className="space-y-2 pt-1 text-xs">
                <a href="tel:+15617708708" className="flex items-center gap-2 text-brand-navy-900 hover:text-brand-red-600 font-semibold transition-colors">
                  <Phone className="w-3.5 h-3.5 text-brand-gold-600" /> +1 (561) 770-8708
                </a>
                <a href="mailto:lovoa47@outlook.com" className="flex items-center gap-2 text-brand-navy-900 hover:text-brand-red-600 font-semibold transition-colors">
                  <Mail className="w-3.5 h-3.5 text-brand-gold-600" /> lovoa47@outlook.com
                </a>
              </div>
            </div>
          </aside>

          {/* Right Main Legal Text (8 cols) */}
          <main className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-10 text-slate-700 leading-relaxed">
            
            {/* Section 1 */}
            <section id="donor-promise" className="space-y-4 scroll-mt-28">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-brand-gold-500/10 text-brand-gold-600 font-display font-black flex items-center justify-center text-sm border border-brand-gold-500/20">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-black text-brand-navy-950">
                  Donor Privacy Guarantee & 501(c)(3) Ethics
                </h2>
              </div>
              <p className="text-sm sm:text-base">
                <strong>League of Veterans of America INC</strong> (“LOVOA”, “we”, “us”, or “our”) is an official tax-exempt non-profit organization under Section 501(c)(3) of the Internal Revenue Code. We maintain the highest standards of stewardship, ethics, and transparency in honoring the contributions that support our nation's wounded, homeless, and transitioning veterans.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm text-amber-950 font-medium leading-relaxed">
                  <strong>The LOVOA Donor Bill of Rights:</strong> We will not sell, share, rent, or trade our donors' names or personal information with any other entity, nor send mailings to our donors on behalf of other organizations. This policy applies to all information received by LOVOA, both online and offline, on any Platform, as well as any electronic, written, or oral communications.
                </p>
              </div>
            </section>

            <hr className="border-slate-100" />

            {/* Section 2 */}
            <section id="info-collected" className="space-y-4 scroll-mt-28">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-brand-gold-500/10 text-brand-gold-600 font-display font-black flex items-center justify-center text-sm border border-brand-gold-500/20">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-black text-brand-navy-950">
                  Information We Collect
                </h2>
              </div>
              <p className="text-sm">
                We only collect personal information that you provide voluntarily when you make a donation, pledge a vehicle, register for our newsletter, or submit an inquiry through our website:
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Personal Contact Data:</strong> Full name, postal address, email address, and phone number required to deliver tax receipts and project updates.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Tribute & Dedication Details:</strong> Names of honorees, memorial mentions, and recipient email or notification addresses provided when you dedicate a contribution in honor or memory of a service member.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Vehicle Donation Details:</strong> Year, make, model, VIN (Vehicle Identification Number), mechanical condition, mileage, title status, and physical location address for towing dispatch.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Technical Device Data:</strong> Non-personally identifiable diagnostic information including browser type, operating system, referral URL, and timestamp logs to preserve site uptime and prevent cyber threats.
                  </div>
                </li>
              </ul>
            </section>

            <hr className="border-slate-100" />

            {/* Section 3 */}
            <section id="how-we-use" className="space-y-4 scroll-mt-28">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-brand-gold-500/10 text-brand-gold-600 font-display font-black flex items-center justify-center text-sm border border-brand-gold-500/20">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-black text-brand-navy-950">
                  How We Use Your Information
                </h2>
              </div>
              <p className="text-sm">
                We strictly limit our use of collected donor data to fulfilling our charitable mission and regulatory obligations:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-brand-navy-900">
                    IRS Tax Compliance
                  </h4>
                  <p className="text-xs text-slate-600">
                    Issuing formal 501(c)(3) tax-deductible receipt letters and vehicle 1098-C documentation required for federal tax filings.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-brand-navy-900">
                    Nationwide Logistics
                  </h4>
                  <p className="text-xs text-slate-600">
                    Coordinating prompt, licensed towing partners to pick up donated cars, trucks, and RVs across all 50 U.S. states at zero cost to the donor.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-brand-navy-900">
                    Impact Dispatches
                  </h4>
                  <p className="text-xs text-slate-600">
                    Sending periodic updates showcasing shelter openings, smart home completions, and veteran recovery metrics funded by your support.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-brand-navy-900">
                    Donor Care Inquiries
                  </h4>
                  <p className="text-xs text-slate-600">
                    Responding directly to your phone calls, emails, and donor questions with dedicated veteran advocates.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-slate-100" />

            {/* Section 4 */}
            <section id="payment-security" className="space-y-4 scroll-mt-28">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-brand-gold-500/10 text-brand-gold-600 font-display font-black flex items-center justify-center text-sm border border-brand-gold-500/20">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-black text-brand-navy-950">
                  Payment Security & PCI-DSS Compliance
                </h2>
              </div>
              <p className="text-sm">
                Financial integrity and payment protection are paramount. Our platform enforces stringent safeguards:
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <Lock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <strong className="text-slate-900 block text-xs sm:text-sm">No Storage of Sensitive Card Credentials:</strong>
                    <p className="text-xs text-slate-600">
                      We never store your full 16-digit credit card number, CVV security code, or bank account credentials on lovoa.org servers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <strong className="text-slate-900 block text-xs sm:text-sm">Official Certified Gateway:</strong>
                    <p className="text-xs text-slate-600">
                      Online donations are routed directly through PayPal’s PCI-DSS Level 1 certified infrastructure with 256-bit SSL encryption, tokenization, and anti-fraud monitoring.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-slate-100" />

            {/* Section 5 */}
            <section id="vehicle-data" className="space-y-4 scroll-mt-28">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-brand-gold-500/10 text-brand-gold-600 font-display font-black flex items-center justify-center text-sm border border-brand-gold-500/20">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-black text-brand-navy-950">
                  Vehicle Donation Records & DMV Requirements
                </h2>
              </div>
              <p className="text-sm">
                When you participate in our nationwide vehicle donation program, we collect title and vehicle identity details exclusively to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li>Assign a licensed, insured local tow operator to complete complimentary pickup.</li>
                <li>Process the legal title transfer to release you from state liability in your DMV jurisdiction.</li>
                <li>Issue IRS Form 1098-C or an official gross-sale donation receipt for your tax deduction.</li>
              </ul>
              <p className="text-xs text-slate-500">
                Vehicle records are archived in secure, encrypted cloud records according to statutory IRS audit retention requirements (3 to 7 years) and are never disclosed for commercial marketing.
              </p>
            </section>

            <hr className="border-slate-100" />

            {/* Section 6 */}
            <section id="cookies" className="space-y-4 scroll-mt-28">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-brand-gold-500/10 text-brand-gold-600 font-display font-black flex items-center justify-center text-sm border border-brand-gold-500/20">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-black text-brand-navy-950">
                  Cookies & Tracking Technologies
                </h2>
              </div>
              <p className="text-sm">
                Our website utilizes minimal, privacy-first cookies and local storage tokens strictly necessary for:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-600">
                <li>Maintaining donation cart states and pledge preferences during your browsing session.</li>
                <li>Protecting forms against automated spam attacks and brute-force submissions.</li>
                <li>Aggregated, anonymized traffic diagnostics to measure which veteran programs receive the highest community engagement.</li>
              </ul>
              <p className="text-xs text-slate-500">
                You can configure your browser to reject cookies. However, disabling session storage may prevent specific checkout buttons or donation widgets from operating as intended.
              </p>
            </section>

            <hr className="border-slate-100" />

            {/* Section 7 */}
            <section id="donor-rights" className="space-y-4 scroll-mt-28">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-brand-gold-500/10 text-brand-gold-600 font-display font-black flex items-center justify-center text-sm border border-brand-gold-500/20">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-black text-brand-navy-950">
                  Your Rights & Opt-Out Choices
                </h2>
              </div>
              <p className="text-sm">
                Every supporter of League of Veterans of America INC maintains full autonomy over their data:
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                <p>
                  • <strong>Email Communications:</strong> Every impact email and newsletter includes a direct, one-click unsubscribe mechanism in the footer.
                </p>
                <p>
                  • <strong>Record Inquiries:</strong> You may request a summary of the personal contact data we hold on file or ask us to correct an out-of-date mailing address.
                </p>
                <p>
                  • <strong>Do-Not-Contact Requests:</strong> Donors may request to be marked as "Do Not Solicit" at any time. We immediately flag your profile to exclude you from future mailings.
                </p>
              </div>
            </section>

            <hr className="border-slate-100" />

            {/* Section 8 */}
            <section id="contact" className="space-y-4 scroll-mt-28">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-brand-gold-500/10 text-brand-gold-600 font-display font-black flex items-center justify-center text-sm border border-brand-gold-500/20">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-black text-brand-navy-950">
                  Official Contact & Data Inquiries
                </h2>
              </div>
              <p className="text-sm">
                If you have questions regarding this Privacy Policy, wish to update your donor record, or have concerns about how your data is handled, please contact our administrative offices:
              </p>
              <div className="p-5 rounded-2xl bg-brand-navy-950 text-white space-y-3">
                <div className="font-display font-bold text-white text-base">
                  League of Veterans of America INC
                </div>
                <div className="text-xs text-slate-300 space-y-1.5">
                  <p><strong>Official Entity:</strong> IRS 501(c)(3) Non-Profit Organization</p>
                  <p><strong>Telephone:</strong> <a href="tel:+15617708708" className="text-brand-gold-400 hover:underline">+1 (561) 770-8708</a></p>
                  <p><strong>Email:</strong> <a href="mailto:lovoa47@outlook.com" className="text-brand-gold-400 hover:underline">lovoa47@outlook.com</a></p>
                  <p><strong>Official Web Domain:</strong> <a href="https://lovoa.org" className="text-brand-gold-400 hover:underline">https://lovoa.org</a></p>
                  <p><strong>Operating Territory:</strong> All 50 United States</p>
                </div>
              </div>
            </section>

            {/* Action Bar */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                to="/terms"
                className="text-xs sm:text-sm font-semibold text-brand-navy-900 hover:text-brand-red-600 flex items-center gap-1.5 transition-colors"
              >
                <span>Read our Terms of Service</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center gap-3">
                <Link
                  to="/donate"
                  className="px-5 py-2.5 rounded-xl font-bold uppercase text-xs tracking-wider text-white bg-brand-red-600 hover:bg-brand-red-700 shadow-sm transition-all"
                >
                  Make a Donation
                </Link>
              </div>
            </div>

          </main>
        </div>
      </section>
    </div>
  );
}
