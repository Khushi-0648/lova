import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import CausesPage from './pages/CausesPage';
import CauseDetailPage from './pages/CauseDetailPage';
import DonatePage from './pages/DonatePage';
import VehicleDonationPage from './pages/VehicleDonationPage';
import AboutPage from './pages/AboutPage';
import ImpactPage from './pages/ImpactPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import SuccessPage from './pages/SuccessPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-brand-red-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/programs" element={<CausesPage />} />

            <Route path="/donate" element={<DonatePage />} />
            <Route path="/vehicle-donation" element={<VehicleDonationPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/smart-homes-adaptation" element={<CauseDetailPage />} />
            <Route path="/wounded-warriors-ptsd" element={<CauseDetailPage />} />
            <Route path="/donation-success" element={<SuccessPage />} />
            
            {/* Legal & Policy Pages */}
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/terms-of-service" element={<TermsPage />} />
            
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
