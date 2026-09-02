import React from 'react';
import { Heart, ArrowRight, CheckCircle2 } from 'lucide-react';

interface DonationBannerProps {
  onOpenDonate: (presetAmount?: number) => void;
}

export const DonationBanner: React.FC<DonationBannerProps> = ({ onOpenDonate }) => {
  return (
    <section id="donate-banner" className="py-16 sm:py-20 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="bg-slate-800/90 rounded-2xl p-8 sm:p-12 border border-slate-700 shadow-xl max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-900/60 border border-blue-700/50 text-blue-200 text-xs font-bold uppercase tracking-wider mb-6">
            <Heart className="w-3.5 h-3.5 text-blue-300 fill-blue-300" />
            <span>Support Our Community Mission</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight max-w-2xl mx-auto leading-tight">
            Our Digital Defense Services Are 100% Free. Your Support Keeps Them That Way.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base mt-4 mb-8 max-w-2xl mx-auto leading-relaxed">
            CDNP operates strictly as a public charity. We never charge victims a single penny. Your tax-deductible contribution directly funds emergency first-aid toolkits, volunteer responder training, and community assistance.
          </p>

          {/* Quick preset donation buttons */}
          <div className="flex flex-wrap justify-center items-center gap-2.5 mb-8">
            {[15, 35, 75, 150].map((amt) => (
              <button
                key={amt}
                id={`btn-preset-donate-${amt}`}
                onClick={() => onOpenDonate(amt)}
                className="px-4 py-2 rounded-lg bg-slate-700/80 hover:bg-slate-600 border border-slate-600 hover:border-blue-400 text-xs sm:text-sm font-semibold text-white transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span className="font-bold">${amt}</span>
                <span className="text-slate-400 text-xs">
                  {amt === 15 ? '(Basic Triage)' : amt === 35 ? '(Incident Kit)' : amt === 75 ? '(Victim Support)' : '(Advocacy Fund)'}
                </span>
              </button>
            ))}
          </div>

          {/* Prominent CTA / Stripe Buy Button */}
          <div className="flex flex-col items-center justify-center gap-4 bg-slate-900/60 p-6 rounded-xl border border-slate-700/60 max-w-md mx-auto">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-300">
              Instant Non-Profit Contribution
            </div>
            
            <div className="flex justify-center items-center min-h-[44px]">
              <stripe-buy-button
                buy-button-id="buy_btn_1U7wKFRjQhsa0nsTKv2ZJRVc"
                publishable-key="pk_live_51U7vocRjQhsa0nsTUemhsHII0N1biqblD5YR9KYVXdoUlsR2NwpJPVL1qq6CbFDkxvsWNHtgvnlWXm2xHnzwC7nR00LxTWiMSq"
              >
              </stripe-buy-button>
            </div>

            <button
              id="banner-donate-now-btn"
              onClick={() => onOpenDonate()}
              className="text-xs text-slate-400 hover:text-slate-200 underline transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>View tax-deductible contribution details</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Transparency Disclosures */}
          <div className="mt-8 pt-6 border-t border-slate-700/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Tax-deductible receipt provided</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Transparent non-profit governance</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Secure 256-bit encrypted checkout</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
