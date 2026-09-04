import React from 'react';
import { 
  ShieldCheck, 
  LifeBuoy, 
  ArrowRight, 
  Lock, 
  HeartHandshake, 
  AlertTriangle, 
  KeyRound, 
  ShieldAlert,
  FileText
} from 'lucide-react';

interface HeroProps {
  onOpenGetHelp: () => void;
  onScrollToSelfHelp: () => void;
  onQuickTriageSelect: (category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenGetHelp,
  onScrollToSelfHelp,
  onQuickTriageSelect,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-blue-950 text-white pt-12 pb-16 sm:pt-16 sm:pb-24">
      {/* Geometric subtle grid pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#60A5FA" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/90 border border-blue-500/40 text-blue-300 text-xs sm:text-sm font-medium mb-5 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-400" />
            <span> Non-Profit </span>
            <span className="text-slate-500"></span>
            <span className="text-slate-200">• Zero Cost • Zero Judgment</span>
          </div>

          {/* Headline - Exact required string */}
          <h1
            id="hero-headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white tracking-tight"
          >
            We are here to help you navigate digital disasters.
          </h1>

          {/* Sub-headline - Exact required string */}
          <p
            id="hero-subheadline"
            className="text-base sm:text-lg lg:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            When you have been hit by a scam, a hacked account, or ransomware, the internet can feel like a dangerous place. We provide free, expert digital first-aid and security advocacy.
          </p>

          {/* Buttons - Exact required labels with Geometric Balance styling */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              id="hero-get-help-btn"
              onClick={onOpenGetHelp}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-lg flex items-center justify-center gap-2.5 transition-colors cursor-pointer"
            >
              <LifeBuoy className="w-5 h-5 text-blue-100" />
              <span>Get Help Now</span>
              <ArrowRight className="w-4 h-4 text-blue-100 ml-0.5" />
            </button>

            <button
              id="hero-self-help-btn"
              onClick={onScrollToSelfHelp}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm border border-white/15 flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <FileText className="w-5 h-5 text-blue-300" />
              <span>Browse Self-Help Guides</span>
            </button>
          </div>

          {/* Reassurance Grid: 3 Geometric Calming Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800 text-left">
            <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
              <div className="p-2 rounded-md bg-blue-500/10 text-blue-400 flex-shrink-0">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-slate-100">100% Confidential</h2>
                <p className="text-xs text-slate-400 mt-0.5">Your data and identity remain private and protected.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
              <div className="p-2 rounded-md bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-slate-100">Always Free</h2>
                <p className="text-xs text-slate-400 mt-0.5">Never pay for recovery. No scams, no predatory fees.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
              <div className="p-2 rounded-md bg-sky-500/10 text-sky-400 flex-shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-slate-100">Human Guidance</h2>
                <p className="text-xs text-slate-400 mt-0.5">Step-by-step triage from vetted security practitioners.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Quick Emergency Triage Bar */}
        <div className="mt-10 max-w-4xl mx-auto bg-slate-900/90 rounded-xl p-5 border border-slate-800 shadow-xl backdrop-blur">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Immediate Triage</span>
                <span className="text-xs text-slate-400">• Select what you are experiencing:</span>
              </div>
              <p className="text-sm font-semibold text-slate-200 mt-0.5">
                Don't panic. Select your emergency to view immediate first-aid containment steps:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4">
            <button
              id="triage-btn-hacked"
              onClick={() => onQuickTriageSelect('hacked-account')}
              className="flex items-center gap-2 p-3 text-left rounded-lg bg-slate-950/80 hover:bg-slate-800 border border-slate-800 hover:border-blue-500 transition-all text-xs sm:text-sm font-medium text-slate-200 group cursor-pointer"
            >
              <KeyRound className="w-4 h-4 text-amber-400 group-hover:scale-105 transition-transform" />
              <span>Hacked Account</span>
            </button>

            <button
              id="triage-btn-phishing"
              onClick={() => onQuickTriageSelect('phishing-scam')}
              className="flex items-center gap-2 p-3 text-left rounded-lg bg-slate-950/80 hover:bg-slate-800 border border-slate-800 hover:border-blue-500 transition-all text-xs sm:text-sm font-medium text-slate-200 group cursor-pointer"
            >
              <AlertTriangle className="w-4 h-4 text-rose-400 group-hover:scale-105 transition-transform" />
              <span>Phishing Scam</span>
            </button>

            <button
              id="triage-btn-ransomware"
              onClick={() => onQuickTriageSelect('ransomware')}
              className="flex items-center gap-2 p-3 text-left rounded-lg bg-slate-950/80 hover:bg-slate-800 border border-slate-800 hover:border-blue-500 transition-all text-xs sm:text-sm font-medium text-slate-200 group cursor-pointer"
            >
              <ShieldAlert className="w-4 h-4 text-red-400 group-hover:scale-105 transition-transform" />
              <span>Ransomware</span>
            </button>

            <button
              id="triage-btn-identity"
              onClick={() => onQuickTriageSelect('identity-theft')}
              className="flex items-center gap-2 p-3 text-left rounded-lg bg-slate-950/80 hover:bg-slate-800 border border-slate-800 hover:border-blue-500 transition-all text-xs sm:text-sm font-medium text-slate-200 group cursor-pointer"
            >
              <Lock className="w-4 h-4 text-emerald-400 group-hover:scale-105 transition-transform" />
              <span>Stolen Identity</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
