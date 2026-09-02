import React from 'react';
import { Logo } from './Logo';
import { Heart, Lock, AlertTriangle } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenReportAbuse: () => void;
  onOpenDonate: () => void;
  onOpenGetHelp: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenReportAbuse,
  onOpenDonate,
  onOpenGetHelp,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Non-Profit Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="text-2xl font-black tracking-tighter text-blue-400">CDNP</div>
              <div className="h-5 w-px bg-slate-700" />
              <Logo size="sm" variant="dark" showText={false} />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mt-3">
              Cyber Defense Non-Profit (CDNP) provides free, compassionate digital first-aid, account recovery guidance, and public security advocacy for individuals and grassroots organizations.
            </p>
            
            {/* Required Disclaimer */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-800 border border-slate-700 text-blue-300 text-xs font-semibold">
              <Lock className="w-3.5 h-3.5 text-blue-400" />
              <span>Operated as a true non-profit.</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-wider uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  id="footer-nav-about"
                  onClick={() => scrollTo('about')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-services"
                  onClick={() => scrollTo('services')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  Services & Triage
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-cases"
                  onClick={() => scrollTo('case-stories')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  Case Stories
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-selfhelp"
                  onClick={() => scrollTo('self-help')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  Self Help Guides
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: First-Aid Resources */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-wider uppercase mb-4">
              Incident Response
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={onOpenGetHelp}
                  className="text-blue-400 hover:text-blue-300 font-semibold transition-colors cursor-pointer text-left"
                >
                  Get Emergency Help Now
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-slate-200 transition-colors cursor-pointer text-left"
                >
                  Digital First-Aid Steps
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-slate-200 transition-colors cursor-pointer text-left"
                >
                  Account Recovery Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-slate-200 transition-colors cursor-pointer text-left"
                >
                  Security Advocacy Papers
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Community Trust & Report Abuse */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase mb-3">
              Public Safety
            </h4>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Encountered a phishing domain, phone scam, or fake recovery broker?
            </p>

            {/* Required Report Abuse Button */}
            <button
              id="footer-report-abuse-btn"
              onClick={onOpenReportAbuse}
              className="w-full py-2.5 px-3 rounded-md bg-rose-950/60 hover:bg-rose-900/80 border border-rose-800 text-rose-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
              <span>Report Abuse / Scam</span>
            </button>

            <button
              id="footer-donate-btn"
              onClick={onOpenDonate}
              className="w-full py-2.5 px-3 rounded-md bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 text-blue-400" />
              <span>Support With Donation</span>
            </button>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Cyber Defense Non-Profit (CDNP). All rights reserved. <span className="text-slate-400 font-medium">Operated as a true non-profit.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              id="footer-link-privacy"
              onClick={onOpenPrivacy}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700">•</span>
            <button
              id="footer-link-terms"
              onClick={onOpenTerms}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span className="text-slate-700">•</span>
            <button
              id="footer-link-abuse-bottom"
              onClick={onOpenReportAbuse}
              className="text-rose-400 hover:text-rose-300 transition-colors cursor-pointer"
            >
              Report Abuse
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
