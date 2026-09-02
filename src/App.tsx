import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { CaseStoriesSection } from './components/CaseStoriesSection';
import { SelfHelpSection, SELF_HELP_GUIDES } from './components/SelfHelpSection';
import { AboutSection } from './components/AboutSection';
import { DonationBanner } from './components/DonationBanner';
import { Footer } from './components/Footer';
import { EmergencyHelpModal } from './components/EmergencyHelpModal';
import { DonateModal } from './components/DonateModal';
import { ReportAbuseModal } from './components/ReportAbuseModal';
import { LegalModal } from './components/LegalModal';
import { GuideDetailModal } from './components/GuideDetailModal';
import { SelfHelpGuide } from './types';

export default function App() {
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [helpInitialService, setHelpInitialService] = useState('Digital First-Aid');
  
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [donatePreset, setDonatePreset] = useState<number>(35);
  
  const [isReportAbuseOpen, setIsReportAbuseOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  
  const [activeGuide, setActiveGuide] = useState<SelfHelpGuide | null>(null);

  const openHelpModal = (service = 'Digital First-Aid') => {
    setHelpInitialService(service);
    setIsHelpModalOpen(true);
  };

  const openDonateModal = (amount = 35) => {
    setDonatePreset(amount);
    setIsDonateModalOpen(true);
  };

  const scrollToSelfHelp = () => {
    const el = document.getElementById('self-help');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleQuickTriage = (categoryKey: string) => {
    switch (categoryKey) {
      case 'hacked-account':
        setActiveGuide(SELF_HELP_GUIDES[0]);
        break;
      case 'phishing-scam':
        setActiveGuide(SELF_HELP_GUIDES[1]);
        break;
      case 'ransomware':
        setActiveGuide(SELF_HELP_GUIDES[3]);
        break;
      case 'identity-theft':
        setActiveGuide(SELF_HELP_GUIDES[2]);
        break;
      default:
        openHelpModal();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-blue-100 selection:text-blue-900 font-sans">
      {/* 1. Header / Navigationbar */}
      <Navbar
        onOpenGetHelp={() => openHelpModal('Digital First-Aid')}
        onOpenDonate={() => openDonateModal(35)}
      />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          onOpenGetHelp={() => openHelpModal('Emergency Triage')}
          onScrollToSelfHelp={scrollToSelfHelp}
          onQuickTriageSelect={handleQuickTriage}
        />

        {/* 3. Services Section (Grid Layout: 3 cards) */}
        <ServicesSection
          onOpenGetHelp={openHelpModal}
          onOpenGuide={(guideId) => {
            const g = SELF_HELP_GUIDES.find((item) => item.id === guideId);
            if (g) setActiveGuide(g);
          }}
        />

        {/* 4. Case Stories / Social Proof Section */}
        <CaseStoriesSection
          onOpenGetHelp={() => openHelpModal('Account Recovery Assistance')}
        />

        {/* Self Help Guides Interactive Section */}
        <SelfHelpSection
          onOpenGetHelp={() => openHelpModal('Self-Help Triage')}
          onSelectGuideDetail={(guide) => setActiveGuide(guide)}
        />

        {/* About CDNP & Non-profit Mission */}
        <AboutSection />

        {/* 5. Support Our Mission (Donation Banner) */}
        <DonationBanner
          onOpenDonate={(amt) => openDonateModal(amt || 35)}
        />
      </main>

      {/* 6. Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenReportAbuse={() => setIsReportAbuseOpen(true)}
        onOpenDonate={() => openDonateModal(35)}
        onOpenGetHelp={() => openHelpModal('General Inquiry')}
      />

      {/* Interactive Support Modals */}
      <EmergencyHelpModal
        isOpen={isHelpModalOpen}
        onClose={() => setIsHelpModalOpen(false)}
        initialService={helpInitialService}
      />

      <DonateModal
        isOpen={isDonateModalOpen}
        onClose={() => setIsDonateModalOpen(false)}
        presetAmount={donatePreset}
      />

      <ReportAbuseModal
        isOpen={isReportAbuseOpen}
        onClose={() => setIsReportAbuseOpen(false)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      <GuideDetailModal
        guide={activeGuide}
        onClose={() => setActiveGuide(null)}
        onOpenGetHelp={() => openHelpModal('Guide Follow-up')}
      />
    </div>
  );
}
