import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ShieldAlert, Heart, Menu, X, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
  onOpenGetHelp: () => void;
  onOpenDonate: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGetHelp, onOpenDonate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Reassurance Emergency Ticker */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 font-semibold text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              100% Free Non-Profit Assistance
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="hidden sm:inline text-slate-400">
              We never charge fees or request passwords. Real volunteer cyber defense experts.
            </span>
          </div>
          <div className="flex items-center gap-3 text-slate-300 text-xs">
            <span className="text-amber-300 font-medium flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5" />
              Panic-Free Triage Available
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3'
            : 'bg-white border-b border-slate-200 py-3.5'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Brand Logo & Monogram */}
          <div className="flex items-center gap-8">
            <button
              id="nav-logo-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md p-1 -m-1 transition-opacity hover:opacity-95 text-left flex items-center gap-3"
              aria-label="CDNP Home"
            >
              <div className="text-2xl font-black tracking-tighter text-blue-900">CDNP</div>
              <div className="hidden sm:block h-5 w-px bg-slate-300" />
              <Logo size="sm" showText={false} />
              <span className="hidden md:inline text-xs font-bold tracking-wider uppercase text-slate-600">
                Cyber Defense Non-Profit
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
              <button
                id="nav-link-about"
                onClick={() => scrollToSection('about')}
                className="hover:text-blue-900 transition-colors cursor-pointer py-1"
              >
                About
              </button>
              <button
                id="nav-link-services"
                onClick={() => scrollToSection('services')}
                className="hover:text-blue-900 transition-colors cursor-pointer py-1"
              >
                Services
              </button>
              <button
                id="nav-link-cases"
                onClick={() => scrollToSection('case-stories')}
                className="hover:text-blue-900 transition-colors cursor-pointer py-1"
              >
                Case Stories
              </button>
              <button
                id="nav-link-selfhelp"
                onClick={() => scrollToSection('self-help')}
                className="hover:text-blue-900 transition-colors cursor-pointer py-1"
              >
                Self Help
              </button>
            </div>
          </div>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-donate-cta"
              onClick={onOpenDonate}
              className="px-4 py-2 text-sm font-semibold text-slate-800 border border-slate-300 rounded-md hover:bg-slate-50 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Heart className="w-3.5 h-3.5 text-rose-500" />
              <span>Donate</span>
            </button>
            
            <button
              id="nav-gethelp-cta"
              onClick={onOpenGetHelp}
              className="px-4 py-2 text-sm font-semibold bg-blue-700 text-white rounded-md shadow-sm hover:bg-blue-800 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <ShieldAlert className="w-4 h-4 text-blue-200" />
              <span>Get Help</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-quick-help-btn"
              onClick={onOpenGetHelp}
              className="px-3 py-1.5 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-md shadow-sm"
            >
              Get Help
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <div className="flex flex-col space-y-1">
              <button
                id="mobile-nav-about"
                onClick={() => scrollToSection('about')}
                className="text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
              >
                About
              </button>
              <button
                id="mobile-nav-services"
                onClick={() => scrollToSection('services')}
                className="text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
              >
                Services
              </button>
              <button
                id="mobile-nav-cases"
                onClick={() => scrollToSection('case-stories')}
                className="text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
              >
                Case Stories
              </button>
              <button
                id="mobile-nav-selfhelp"
                onClick={() => scrollToSection('self-help')}
                className="text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
              >
                Self Help
              </button>
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
              <button
                id="mobile-menu-gethelp"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenGetHelp();
                }}
                className="w-full py-2.5 text-center text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-md flex items-center justify-center gap-2 shadow-sm"
              >
                <ShieldAlert className="w-4 h-4 text-blue-200" />
                <span>Get Help</span>
              </button>
              <button
                id="mobile-menu-donate"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenDonate();
                }}
                className="w-full py-2.5 text-center text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 rounded-md flex items-center justify-center gap-2 border border-slate-300"
              >
                <Heart className="w-4 h-4 text-rose-500" />
                <span>Donate</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
