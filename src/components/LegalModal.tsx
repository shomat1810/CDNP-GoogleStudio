import React from 'react';
import { X, Lock, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
      >
        <div className="bg-slate-900 text-white p-6 relative flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-md bg-slate-800 text-blue-300">
              {isPrivacy ? <Lock className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h2 id="legal-modal-title" className="text-xl font-bold text-white tracking-tight">
                {isPrivacy ? 'CDNP Non-Profit Privacy Charter' : 'Terms of Service & Public Defense Agreement'}
              </h2>
              <span className="text-xs text-blue-300 font-medium">
                Operated strictly as a public benefit non-profit
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-4 text-sm text-slate-600 max-h-[65vh] overflow-y-auto leading-relaxed">
          {isPrivacy ? (
            <>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-xs font-semibold">
                🛡️ Core Guarantee: We never sell, monetize, broker, or exploit victim data under any circumstances.
              </div>
              <h3 className="text-base font-bold text-slate-900 mt-2">1. Data Collection & Purpose</h3>
              <p>
                Cyber Defense Non-Profit collects only the minimal information necessary to deliver free digital triage and account recovery advice. We never demand your account passwords, private encryption master keys, or government identification documents unless you explicitly ask us to guide you through an official platform verification flow.
              </p>

              <h3 className="text-base font-bold text-slate-900 mt-2">2. Confidentiality & Encryption</h3>
              <p>
                All communications submitted through our emergency intake pipelines are transmitted using TLS 1.3 encryption and stored in compartmentalized, access-restricted environments accessible only to assigned volunteer incident handlers.
              </p>

              <h3 className="text-base font-bold text-slate-900 mt-2">3. Aggregated Anonymized Research</h3>
              <p>
                To support our security advocacy mission, we may aggregate non-identifying statistical metrics (e.g., "30% increase in social engineering attacks targeting small businesses") to present evidence-based recommendations to consumer protection agencies.
              </p>
            </>
          ) : (
            <>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-xs font-semibold">
                🤝 Non-Profit Service Commitment: All guidance is provided 100% free of charge as a charitable community service.
              </div>
              <h3 className="text-base font-bold text-slate-900 mt-2">1. Nature of Advice</h3>
              <p>
                CDNP provides informational digital first-aid, technical recovery guidance, and public security advocacy. Our volunteers are accredited cybersecurity practitioners who assist you in navigating official vendor recovery mechanisms.
              </p>

              <h3 className="text-base font-bold text-slate-900 mt-2">2. No Fee Guarantee</h3>
              <p>
                CDNP will never charge you for account recovery, consultation, or triage. If anyone claiming to represent CDNP solicits payments or gift cards, report them immediately using our Report Abuse channel.
              </p>

              <h3 className="text-base font-bold text-slate-900 mt-2">3. Emergency Situations</h3>
              <p>
                If you are in immediate physical danger, experiencing domestic extortion, or immediate violence, please contact your local law enforcement emergency services (e.g., 911 in the United States) immediately.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold rounded-md transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
