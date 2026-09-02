import React from 'react';
import { X, Heart, Lock, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetAmount?: number;
}

export const DonateModal: React.FC<DonateModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="donate-modal-title"
      >
        {/* Top Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-7 relative border-b border-slate-800">
          <button
            id="close-donate-modal-btn"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-900/80 border border-blue-700/60 text-blue-200 text-xs font-bold uppercase tracking-wider mb-2">
            <Heart className="w-3.5 h-3.5 fill-blue-300 text-blue-300" />
            <span>Official Non-Profit Defense Fund</span>
          </div>

          <h2 id="donate-modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Support Free Cyber First-Aid
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            Every dollar directly provides zero-cost triage kits and guidance to victims in distress.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 space-y-5">
          {/* Impact Callout */}
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 leading-relaxed space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-slate-900">
              <ShieldCheck className="w-4 h-4 text-blue-700" />
              <span> Non-Profit Contribution</span>
            </div>
            <p className="text-slate-600">
              Your gift funds emergency incident response, digital recovery toolkits, and victim advocacy for seniors, small organizations, and vulnerable community members.
            </p>
          </div>

          {/* Stripe Buy Button Section */}
          <div className="bg-slate-50/80 p-5 rounded-xl border border-slate-200 text-center space-y-3.5">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Secure Direct Checkout with Stripe
            </div>
            
            <div className="flex justify-center items-center py-2 min-h-[48px]">
              <stripe-buy-button
                buy-button-id="buy_btn_1U7wKFRjQhsa0nsTKv2ZJRVc"
                publishable-key="pk_live_51U7vocRjQhsa0nsTUemhsHII0N1biqblD5YR9KYVXdoUlsR2NwpJPVL1qq6CbFDkxvsWNHtgvnlWXm2xHnzwC7nR00LxTWiMSq"
              >
              </stripe-buy-button>
            </div>

            <div className="text-[11px] text-slate-500 leading-tight flex items-center justify-center gap-1.5">
              <Lock className="w-3 h-3 text-slate-400" />
              <span>Processed securely through Stripe Payments</span>
            </div>
          </div>

          {/* Governance Guarantees */}
          <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>Instant receipt emailed upon checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>Strict non-profit governance & zero corporate advertising</span>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

