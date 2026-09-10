import React from 'react';
import { 
  HeartPulse, 
  Scale, 
  FileSearch, 
  ShieldCheck, 
  ShieldAlert,
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  AlertCircle,
  Ban,
  XCircle,
  DollarSign
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenGetHelp: (preselectedService?: string) => void;
  onOpenGuide?: (guideId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenGetHelp,
}) => {
  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section 1 Header: What We Do (Our Services) */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
            Core Non-Profit Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            What We Do (Our Services)
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            We provide free, actionable support to help you stabilize your situation and prevent further damage.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Service 1: Victim Advocacy & Guidance */}
          <div
            id="service-card-advocacy"
            className="bg-white p-6 sm:p-7 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Scale className="w-6 h-6 text-blue-700" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                Victim Advocacy & Guidance
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Dealing with financial institutions after a scam can be overwhelming. We help you navigate the bureaucracy and use the correct terminology to formally escalate fraud claims with your bank or credit card provider.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Navigate banking bureaucracy & dispute claim paperwork</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Accurate fraud escalation terminology to counter initial claim denials</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Compassionate guidance free from victim-blaming</span>
                </div>
              </div>
            </div>

            <div>
              <div className="text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
                Financial Escalation
              </div>
              <button
                id="btn-service-advocacy"
                onClick={() => onOpenGetHelp('Financial & Identity Fraud')}
                className="w-full py-2.5 px-4 rounded-md bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
              >
                <span>Request Victim Advocacy</span>
                <ArrowRight className="w-4 h-4 text-blue-200" />
              </button>
            </div>
          </div>

          {/* Service 2: Law Enforcement Reporting */}
          <div
            id="service-card-law-enforcement"
            className="bg-white p-6 sm:p-7 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileSearch className="w-6 h-6 text-blue-700" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                Law Enforcement Reporting
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                We use Open-Source Intelligence (OSINT) to collect technical evidence—such as IP addresses, communication logs, and cryptocurrency footprints—and package it into clear, professional reports ready to be handed to the authorities.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Technical evidence gathering (IPs, mail headers, chat logs)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Cryptocurrency transaction tracing and public ledger footprints</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Law enforcement-ready reports formatted for cybercrime divisions</span>
                </div>
              </div>
            </div>

            <div>
              <div className="text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
                Evidence Dossier
              </div>
              <button
                id="btn-service-reporting"
                onClick={() => onOpenGetHelp('Financial & Identity Fraud')}
                className="w-full py-2.5 px-4 rounded-md bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
              >
                <span>Prepare Incident Evidence</span>
                <ArrowRight className="w-4 h-4 text-blue-200" />
              </button>
            </div>
          </div>

          {/* Service 3: Digital First-Aid & Incident Response */}
          <div
            id="service-card-first-aid"
            className="bg-white p-6 sm:p-7 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <HeartPulse className="w-6 h-6 text-blue-700" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                Digital First-Aid & Incident Response
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                We guide you step-by-step through wiping infected devices, removing malicious software, securing compromised email or social media accounts, and checking public databases for free ransomware decryption keys.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Step-by-step infected device sanitization & malware removal</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Compromised social media & email account reclamation</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Public database searches for verified free ransomware decryption keys</span>
                </div>
              </div>
            </div>

            <div>
              <div className="text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
                Immediate Containment
              </div>
              <button
                id="btn-service-first-aid"
                onClick={() => onOpenGetHelp('Digital First-Aid')}
                className="w-full py-2.5 px-4 rounded-md bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
              >
                <span>Request Digital First-Aid</span>
                <ArrowRight className="w-4 h-4 text-blue-200" />
              </button>
            </div>
          </div>

          {/* Service 4: Future Protection & Security */}
          <div
            id="service-card-future-protection"
            className="bg-white p-6 sm:p-7 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-blue-700" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                Future Protection & Security
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Once the immediate threat is contained, we provide consultations on how to "harden" your digital life. This includes setting up multi-factor authentication, using password managers, and initiating credit freezes to protect you from secondary attacks.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Multi-factor authentication (MFA/2FA) setup & hardware security keys</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Password manager migration & credential hygiene consultations</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Credit freezes & bans to prevent secondary identity theft</span>
                </div>
              </div>
            </div>

            <div>
              <div className="text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
                Defense Hardening
              </div>
              <button
                id="btn-service-future-protection"
                onClick={() => onOpenGetHelp('General Prevention')}
                className="w-full py-2.5 px-4 rounded-md bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold flex items-center justify-center gap-2 border border-slate-300 transition-colors cursor-pointer"
              >
                <span>Consult on Hardening</span>
                <ArrowRight className="w-4 h-4 text-slate-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Section 2 Header: What We Do NOT Do (Our Boundaries) */}
        <div className="pt-10 border-t border-slate-200">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-rose-100 text-rose-900 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-700" />
              Ethical & Legal Safeguards
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              What We Do NOT Do (Our Boundaries)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              To protect our non-profit status and operate ethically, we strictly adhere to international cybersecurity laws. Please read this section carefully.
            </p>
          </div>

          {/* 4 Boundaries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Boundary 1: We Do Not "Hack Back" */}
            <div 
              id="boundary-card-hack-back"
              className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-rose-50 border border-rose-200 text-rose-700 rounded-lg flex items-center justify-center">
                    <Ban className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-1 rounded border border-rose-200">
                    Strictly Prohibited
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  We Do Not "Hack Back"
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We operate 100% within the law. We will never attempt to hack into a scammer’s infrastructure, server, or cryptocurrency wallet. Doing so is illegal and jeopardizes any legitimate law enforcement investigation.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
                Adheres to the Computer Fraud and Abuse Act & international cyber legislation.
              </div>
            </div>

            {/* Boundary 2: We Do Not Guarantee Financial Recovery */}
            <div 
              id="boundary-card-financial-recovery"
              className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-rose-50 border border-rose-200 text-rose-700 rounded-lg flex items-center justify-center">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-1 rounded border border-rose-200">
                    No Financial Jurisdiction
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  We Do Not Guarantee Financial Recovery
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We are not a financial institution. While we will help you build a case to present to your bank, we have no legal authority to force a bank, wire service, or crypto exchange to reverse a transaction or refund your money.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
                We empower you with dispute dossiers, but banks make final reimbursement rulings.
              </div>
            </div>

            {/* Boundary 3: We Do Not Have "Magic Wands" for Ransomware */}
            <div 
              id="boundary-card-ransomware"
              className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-rose-50 border border-rose-200 text-rose-700 rounded-lg flex items-center justify-center">
                    <Lock className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-1 rounded border border-rose-200">
                    Cryptographic Reality
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  We Do Not Have "Magic Wands" for Ransomware
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  If a known decryption key does not exist for the specific ransomware that locked your files, we cannot bypass the encryption. We also strongly advise against paying ransoms, as it does not guarantee your data will be returned.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
                We check legitimate public repositories (e.g., No More Ransom) for available keys.
              </div>
            </div>

            {/* Boundary 4: We Do Not Charge Hidden Fees */}
            <div 
              id="boundary-card-no-fees"
              className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    100% Free Non-Profit Organization
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  We Do Not Charge Hidden Fees
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We are entirely funded by donations. We will never ask you for an upfront service fee, a percentage of recovered assets, or any payment.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
                Zero retainer, zero success fees, and zero hidden billing. Our mission is pure public service.
              </div>
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
              Anyone claiming they can "hack into Instagram/Google to retrieve your account" or "guarantee crypto recovery" for an upfront fee is a scammer targeting vulnerable victims. CDNP is a public non-profit organization — our help is 100% free and strictly lawful.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

