import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Scale, 
  FileCheck, 
  AlertCircle, 
  Phone, 
  Mail, 
  ChevronRight, 
  CheckCircle2
} from 'lucide-react';

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('acceptance');

  const sections = [
    { id: 'acceptance', title: '1. Acceptance of Terms' },
    { id: 'donations', title: '2. Charitable Contributions' },
    { id: 'vehicle-terms', title: '3. Vehicle Donation Agreement' },
    { id: 'towing', title: '4. Free Towing & Pickup Policy' },
    { id: 'tax-deductions', title: '5. IRS Tax Deductions & 1098-C' },
    { id: 'ip-rights', title: '6. Intellectual Property' },
    { id: 'conduct', title: '7. Acceptable Use & Prohibited Acts' },
    { id: 'liability', title: '8. Disclaimers & Limitations' },
    { id: 'governing-law', title: '9. Governing Law' },
    { id: 'contact', title: '10. Contact & Questions' },
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
            <Scale className="w-3.5 h-3.5" /> Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white">
            Terms of Service & Donor Agreement
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before accessing or using lovoa.org or contributing to the charitable programs of League of Veterans of America INC.
          </p>
          <div className="pt-2 text-xs text-slate-400 font-mono">
            Effective Date: January 1, 2025 • Last Updated & Reviewed: 2026
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Table of Contents */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
              <h3 className="font-display font-bold text-brand-navy-950 text-sm uppercase tracking-wider flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-brand-gold-500" />
                Agreement Sections
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

            {/* 501(c)(3) Entity Badge */}
            <div className="bg-brand-navy-950 text-white rounded-2xl p-6 border border-slate-800 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-gold-500/20 border border-brand-gold-500/30 flex items-center justify-center text-brand-gold-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-white text-base">
                Official Non-Profit Entity
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                League of Veterans of America INC is recognized by the IRS as an exempt charitable organization under Internal Revenue Code Section 501(c)(3).
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-brand-gold-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Tax-Deductible Contributions
                </span>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="bg-slate-100/80 rounded-2xl p-6 border border-slate-200 space-y-3">
              <h4 className="font-display font-bold text-slate-900 text-sm">
                Questions Regarding Terms?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our support team is on standby to assist donors and supporters with legal, title, or receipt questions:
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

          {/* Right Main Legal Content */}
          <main className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-10 text-slate-700 leading-relaxed">
            
            {/* Section 1 */}
            <section id="acceptance" className="space-y-4 scroll-mt-28">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-brand-gold-500/10 text-brand-gold-600 font-display font-black flex items-center justify-center text-sm border border-brand-gold-500/20">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-black text-brand-navy-950">
                  Acceptance of Terms
                </h2>
              </div>
              <p className="text-sm sm:text-base">
                These Terms of Service (“Terms”) constitute a legally binding agreement between you (“User”, “Donor”, or “you”) and <strong>League of Veterans of America INC</strong> (“LOVOA”, “we”, “our”, or “us”), governing your access to and use of <a href="https://lovoa.org" className="text-brand-navy-900 font-semibold hover:underline">lovoa.org</a> (the “Site”) and any services, vehicle donation processing, or financial contributions provided through it.
              </p>
              <p className="text-sm">
                By browsing the Site, initiating a financial donation, or submitting a vehicle donation request, you agree to be bound by these Terms and our <Link to="/privacy" className="text-brand-red-600 font-semibold hover:underline">Privacy Policy</Link>. If you do not agree to these Terms, please do not use this Site.
              </p>
            </section>

            <hr className="border-slate-100" />

            {/* Section 2 */}
            <section id="donations" className="space-y-4 scroll-mt-28">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-brand-gold-500/10 text-brand-gold-600 font-display font-black flex items-center justify-center text-sm border border-brand-gold-500/20">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-black text-brand-navy-950">
                  Charitable Contributions & Refund Policy
                </h2>
              </div>
              <p className="text-sm">
                All financial contributions made to League of Veterans of America INC are irrevocable gifts to a registered 501(c)(3) tax-exempt organization and are utilized to advance veteran emergency shelter, smart home adaptations, and rehabilitation initiatives.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc pl-5">
                <li>
                  <strong>Immediate Receipts:</strong> Formal digital tax receipts stating your charitable gift amount and confirmation of zero goods or services exchanged are delivered upon completion.
                </li>
                <li>
                  <strong>Recurring Contributions:</strong> If you elect to make recurring monthly donations, your payment method will be charged automatically on the same calendar day each month. You can cancel your recurring contribution at any time by contacting us at least 3 business days prior to your billing cycle.
                </li>
                <li>
                  <strong>Refunds:</strong> In accordance with federal non-profit regulations, charitable contributions are generally non-refundable. If an administrative clerical error or duplicate charge occurs, please contact us within 15 days of the transaction for prompt review and resolution.
                </li>
              </ul>
            </section>

            <hr className="border-slate-100" />

            {/* Section 3 */}
            <section id="vehicle-terms" className="space-y-4 scroll-mt-28">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-brand-gold-500/10 text-brand-gold-600 font-display font-black flex items-center justify-center text-sm border border-brand-gold-500/20">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-black text-brand-navy-950">
                  Vehicle Donation Agreement & Title Ownership
                </h2>
              </div>
              <p className="text-sm">
                When initiating a vehicle donation (automobile, truck, motorcycle, RV, trailer, or boat):
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <strong className="text-slate-900 block">Clear Legal Title Representation:</strong>
                  <p>
                    You represent and warrant that you are the lawful, registered owner of the donated vehicle, or an authorized representative (e.g. power of attorney or executor of estate), and that the vehicle is free and clear of all unreleased liens, encumbrances, or security interests.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <strong className="text-slate-900 block">Accurate Condition Disclosure:</strong>
                  <p>
                    You agree to provide true, complete, and accurate vehicle details regarding mechanical running status, odometer mileage, physical location, and keys. Running and non-running vehicles are both gladly accepted.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <strong className="text-slate-900 block">Title Execution & DMV Transfer:</strong>
                  <p>
                    You agree to sign over the original Certificate of Title according to the instructions provided for your state's Department of Motor Vehicles (DMV), releasing civil and criminal liability upon official pickup.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-slate-100" />

            {/* Section 4 */}
            <section id="towing" className="space-y-4 scroll-mt-28">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-brand-gold-500/10 text-brand-gold-600 font-display font-black flex items-center justify-center text-sm border border-brand-gold-500/20">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-black text-brand-navy-950">
                  Complimentary Nationwide Towing & Pickup
                </h2>
              </div>
              <p className="text-sm">
                LOVOA coordinates 100% free towing for approved vehicle donations throughout all 50 U.S. states through licensed, insured commercial tow operators.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li>Pickups are typically scheduled within 24 to 72 hours of receiving title verification.</li>
                <li>The donor or an appointed proxy should ensure personal belongings, garage openers, and toll transponders are removed prior to pickup.</li>
                <li>The towing driver issues a formal physical Towing Pickup Acknowledgment on site upon taking custody of the vehicle.</li>
              </ul>
            </section>

            <hr className="border-slate-100" />

            {/* Section 5 */}
            <section id="tax-deductions" className="space-y-4 scroll-mt-28">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-brand-gold-500/10 text-brand-gold-600 font-display font-black flex items-center justify-center text-sm border border-brand-gold-500/20">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-black text-brand-navy-950">
                  IRS Tax Deductions & 1098-C Disclosures
                </h2>
              </div>
              <div className="p-4 rounded-xl bg-amber-50 border-l-4 border-amber-500 space-y-2">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  Tax Advice Disclaimer
                </div>
                <p className="text-xs text-amber-950 leading-relaxed">
                  LOVOA does not provide legal, accounting, or tax advice. Donors must consult their individual CPA, tax attorney, or IRS Publication 526 ("Charitable Contributions") and Publication 4303 ("Donor's Guide to Vehicle Donations") to determine the exact deductible eligibility for their specific tax situation.
                </p>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Under current IRS regulations, if a donated vehicle is sold by LOVOA, your deduction is generally limited to the gross proceeds realized from the sale. If the vehicle sells for more than $500, LOVOA will provide IRS Form 1098-C within 30 days of the sale date containing all necessary filing data.
              </p>
            </section>

            <hr className="border-slate-100" />

            {/* Section 6 */}
            <section id="ip-rights" className="space-y-4 scroll-mt-28">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-brand-gold-500/10 text-brand-gold-600 font-display font-black flex items-center justify-center text-sm border border-brand-gold-500/20">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-black text-brand-navy-950">
                  Intellectual Property & Trademarks
                </h2>
              </div>
              <p className="text-sm">
                All content on lovoa.org—including but not limited to the League of Veterans of America INC emblem, military insignia graphics, photography, copywriting, code, layout designs, and logos—is the protected property of LOVOA and is shielded by United States and international copyright, trademark, and intellectual property laws.
              </p>
              <p className="text-xs text-slate-600">
                Unauthorized reproduction, mirroring, distribution, or commercial exploitation without prior written consent from LOVOA is strictly prohibited.
              </p>
            </section>

            <hr className="border-slate-100" />

            {/* Section 7 */}
            <section id="conduct" className="space-y-4 scroll-mt-28">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-brand-gold-500/10 text-brand-gold-600 font-display font-black flex items-center justify-center text-sm border border-brand-gold-500/20">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-black text-brand-navy-950">
                  Acceptable Use & Prohibited Acts
                </h2>
              </div>
              <p className="text-sm">
                You agree not to use the Site to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-600">
                <li>Submit false, fraudulent, or stolen vehicle records, VINs, or payment information.</li>
                <li>Transmit malicious software, worms, spyware, or automated scrapers/bots.</li>
                <li>Harass, threaten, or abuse LOVOA staff, hotline responders, or towing partners.</li>
                <li>Interfere with the stability, speed, or security infrastructure of the website.</li>
              </ul>
            </section>

            <hr className="border-slate-100" />

            {/* Section 8 */}
            <section id="liability" className="space-y-4 scroll-mt-28">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-brand-gold-500/10 text-brand-gold-600 font-display font-black flex items-center justify-center text-sm border border-brand-gold-500/20">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-black text-brand-navy-950">
                  Disclaimers & Limitations of Liability
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The Site and its contents are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied. To the fullest extent permitted by applicable law, League of Veterans of America INC disclaims all warranties, including merchantability, fitness for a particular purpose, and non-infringement.
              </p>
              <p className="text-xs text-slate-500">
                In no event shall LOVOA, its directors, officers, employees, or volunteers be liable for any indirect, incidental, special, punitive, or consequential damages arising out of or related to your use of the Site or vehicle donation process.
              </p>
            </section>

            <hr className="border-slate-100" />

            {/* Section 9 */}
            <section id="governing-law" className="space-y-4 scroll-mt-28">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-brand-gold-500/10 text-brand-gold-600 font-display font-black flex items-center justify-center text-sm border border-brand-gold-500/20">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-black text-brand-navy-950">
                  Governing Law & Severability
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                These Terms are governed by and construed in accordance with the laws of the United States and the state in which LOVOA is incorporated, without regard to conflicts of law principles. If any provision of these Terms is deemed unlawful or unenforceable, that provision will be severed without affecting the validity of the remaining provisions.
              </p>
            </section>

            <hr className="border-slate-100" />

            {/* Section 10 */}
            <section id="contact" className="space-y-4 scroll-mt-28">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-brand-gold-500/10 text-brand-gold-600 font-display font-black flex items-center justify-center text-sm border border-brand-gold-500/20">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-black text-brand-navy-950">
                  Contact Information
                </h2>
              </div>
              <p className="text-sm">
                For questions regarding these Terms or our charitable programs, please direct inquiries to:
              </p>
              <div className="p-5 rounded-2xl bg-brand-navy-950 text-white space-y-3">
                <div className="font-display font-bold text-white text-base">
                  League of Veterans of America INC
                </div>
                <div className="text-xs text-slate-300 space-y-1.5">
                  <p><strong>Entity Type:</strong> 501(c)(3) Non-Profit Charitable Organization</p>
                  <p><strong>Telephone:</strong> <a href="tel:+15617708708" className="text-brand-gold-400 hover:underline">+1 (561) 770-8708</a></p>
                  <p><strong>Email:</strong> <a href="mailto:lovoa47@outlook.com" className="text-brand-gold-400 hover:underline">lovoa47@outlook.com</a></p>
                  <p><strong>Website:</strong> <a href="https://lovoa.org" className="text-brand-gold-400 hover:underline">https://lovoa.org</a></p>
                </div>
              </div>
            </section>

            {/* Bottom Navigation */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                to="/privacy"
                className="text-xs sm:text-sm font-semibold text-brand-navy-900 hover:text-brand-red-600 flex items-center gap-1.5 transition-colors"
              >
                <span>Read our Privacy Policy</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center gap-3">
                <Link
                  to="/vehicle-donation"
                  className="px-5 py-2.5 rounded-xl font-bold uppercase text-xs tracking-wider text-brand-navy-950 bg-brand-gold-400 hover:bg-brand-gold-300 shadow-sm transition-all"
                >
                  Donate a Vehicle
                </Link>
                <Link
                  to="/donate"
                  className="px-5 py-2.5 rounded-xl font-bold uppercase text-xs tracking-wider text-white bg-brand-red-600 hover:bg-brand-red-700 shadow-sm transition-all"
                >
                  Donate Money
                </Link>
              </div>
            </div>

          </main>
        </div>
      </section>
    </div>
  );
}
