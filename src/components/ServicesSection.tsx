import React from 'react';
import { 
  HeartPulse, 
  RotateCcw, 
  Scale, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  AlertCircle
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenGetHelp: (preselectedService?: string) => void;
  onOpenGuide: (guideId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenGetHelp,
}) => {
  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
            Core Non-Profit Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            How We Support Victims of Cyber Incidents
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Every service we offer is 100% free, confidential, and driven by accredited volunteer security analysts dedicated to protecting everyday people.
          </p>
        </div>

        {/* 3 Core Offering Cards Grid (Geometric Balance Structure) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Digital First-Aid */}
          <div
            id="service-card-first-aid"
            className="bg-white p-6 sm:p-7 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              {/* Icon & Category */}
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <HeartPulse className="w-6 h-6 text-blue-700" />
              </div>

              {/* Title & Short Desc from prompt */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                Digital First-Aid
              </h3>
              <p className="text-sm font-semibold text-blue-700 mb-3">
                Immediate, tactical steps to stop active breaches and secure your environment after a cyber incident.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                When an active breach or compromise occurs, seconds matter. We help you quarantine compromised devices, sever malicious remote access sessions, revoke unauthorized OAuth tokens, and secure your financial perimeter before damage spreads.
              </p>

              {/* Action items included */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Immediate session and token revocation triage</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Network & device isolation guidance</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Financial institution emergency freeze checklist</span>
                </div>
              </div>
            </div>

            <div>
              <div className="text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                Expert Response
              </div>
              <button
                id="btn-first-aid-triage"
                onClick={() => onOpenGetHelp('Digital First-Aid')}
                className="w-full py-2.5 px-4 rounded-md bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
              >
                <span>Request Digital First-Aid</span>
                <ArrowRight className="w-4 h-4 text-blue-200" />
              </button>
            </div>
          </div>

          {/* Card 2: Account Recovery */}
          <div
            id="service-card-account-recovery"
            className="bg-white p-6 sm:p-7 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              {/* Icon & Category */}
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <RotateCcw className="w-6 h-6 text-blue-700" />
              </div>

              {/* Title & Short Desc from prompt */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                Account Recovery
              </h3>
              <p className="text-sm font-semibold text-blue-700 mb-3">
                Structured guidance for navigating platform support to regain control of your stolen or compromised accounts.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Big tech account recovery systems are notoriously confusing and automated. We walk you through genuine platform verification channels (Google, Apple, Meta, Microsoft) and help prepare evidence to prove true ownership safely.
              </p>

              {/* Action items included */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>2FA bypass & recovery key reconstruction advice</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Escalation path navigation with major platforms</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Protection against fake "hacker recovery" fee scams</span>
                </div>
              </div>
            </div>

            <div>
              <div className="text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                Identity Support
              </div>
              <button
                id="btn-account-recovery-triage"
                onClick={() => onOpenGetHelp('Account Recovery')}
                className="w-full py-2.5 px-4 rounded-md bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
              >
                <span>Get Recovery Assistance</span>
                <ArrowRight className="w-4 h-4 text-blue-200" />
              </button>
            </div>
          </div>

          {/* Card 3: Security Advocacy */}
          <div
            id="service-card-security-advocacy"
            className="bg-white p-6 sm:p-7 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              {/* Icon & Category */}
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Scale className="w-6 h-6 text-blue-700" />
              </div>

              {/* Title & Short Desc from prompt */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                Security Advocacy
              </h3>
              <p className="text-sm font-semibold text-blue-700 mb-3">
                We fight for systemic changes and better digital safety standards for vulnerable populations globally.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Victims shouldn't be blamed for complex institutional design flaws. We lobby tech platforms, banks, and regulatory bodies to make default account security resilient, eliminate dark patterns, and protect elderly and non-technical internet users.
              </p>

              {/* Action items included */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Consumer rights advocacy against victim-blaming</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Free open-source security toolkits and workshops</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Regulatory policy papers and consumer protection briefs</span>
                </div>
              </div>
            </div>

            <div>
              <div className="text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                Policy Impact
              </div>
              <button
                id="btn-advocacy-info"
                onClick={() => onOpenGetHelp('Security Advocacy')}
                className="w-full py-2.5 px-4 rounded-md bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold flex items-center justify-center gap-2 border border-slate-300 transition-colors cursor-pointer"
              >
                <span>Learn About Our Advocacy</span>
                <ArrowRight className="w-4 h-4 text-slate-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Warning Callout: Beware of Recovery Scammers */}
        <div className="mt-10 bg-white border border-amber-300/80 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-sm">
          <div className="p-2.5 rounded-lg bg-amber-100 text-amber-900 flex-shrink-0">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-amber-950">
              Crucial Warning: Never pay third-party "hackers" or "recovery agents" on social media.
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Anyone claiming they can "hack into Instagram/Google to retrieve your account" for a fee is a scammer targeting vulnerable victims. CDNP is an official non-profit organization — our help is 100% free and follows legitimate platform security protocols.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
