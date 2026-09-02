import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2
} from 'lucide-react';
import { Logo } from './Logo';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Mission Description */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
              About Our Non-Profit Mission
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              A Safer Digital World for Everyday People, Not Profit Margins
            </h2>

            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              <strong className="text-slate-900 font-bold">CDNP (Cyber Defense Non-Profit)</strong> was established with a singular conviction: when an innocent person suffers a cybersecurity disaster, they deserve compassionate, professional triage without being exploited by extortionate fees or predatory "recovery" scammers.
            </p>

            <p className="text-slate-600 text-base mt-3 leading-relaxed">
              We operate exclusively as a 501(c)(3) charitable defense organization funded by philanthropic grants and community donations. Our network brings together certified incident responders, ethical hackers, privacy attorneys, and empathetic crisis volunteers.
            </p>

            {/* Core Non-Profit Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-8">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-blue-700" />
                  <span>Zero Commercial Incentives</span>
                </div>
                <p className="text-xs text-slate-600">
                  We never promote proprietary software licenses or take affiliate kickbacks from recovery vendors.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-blue-700" />
                  <span>Radical Data Privacy</span>
                </div>
                <p className="text-xs text-slate-600">
                  Intake data is scrubbed, encrypted end-to-end, and never monetized or shared with ad networks.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-blue-700" />
                  <span>Empathetic Triage</span>
                </div>
                <p className="text-xs text-slate-600">
                  We specialize in de-escalating the panic and shame commonly felt by victims of social engineering.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-blue-700" />
                  <span>Public Safety Advocacy</span>
                </div>
                <p className="text-xs text-slate-600">
                  We use aggregated anonymized incident trends to hold tech platforms accountable for insecure defaults.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Trust Card & Governance */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 text-white rounded-2xl p-7 sm:p-8 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-3xl font-black tracking-tighter text-blue-400">CDNP</div>
                <div className="h-6 w-px bg-slate-700" />
                <Logo size="md" variant="dark" showText={false} />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Our Non-Profit Charter
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                "To deliver immediate digital triage to any individual or grassroots organization facing cyber compromise, regardless of ability to pay, while advocating for a humane and secure internet."
              </p>

              <div className="space-y-3 border-t border-slate-800 pt-5 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Legal Status:</span>
                  <span className="font-semibold text-emerald-400">501(c)(3) Public Charity</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Audited Financials:</span>
                  <span className="font-semibold text-slate-200">Published Annually</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Victim Cost:</span>
                  <span className="font-semibold text-blue-400">Always $0.00 Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
