import React, { useState } from 'react';
import { X, Heart, Lock } from 'lucide-react';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetAmount?: number;
}

export const DonateModal: React.FC<DonateModalProps> = ({
  isOpen,
  onClose,
  presetAmount = 35,
}) => {
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('monthly');
  const [selectedAmount, setSelectedAmount] = useState<number>(presetAmount);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const finalAmount = customAmount ? parseFloat(customAmount) : selectedAmount;

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
            className="absolute top-5 right-5 p-2 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
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
        <div className="p-6 sm:p-7">
          {isSuccess ? (
            <div className="text-center py-4">
              <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-200">
                <Heart className="w-7 h-7 fill-blue-600 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Thank You for Your Generosity!
              </h3>
              <p className="text-sm text-slate-600 mt-2 max-w-sm mx-auto leading-relaxed">
                Your donation of <strong>${finalAmount || 35}</strong> {frequency === 'monthly' ? '/ month' : ''} ensures our emergency first-aid team remains 100% free and accessible to all victims.
              </p>
              <div className="mt-4 text-xs text-slate-500">
                A 501(c)(3) tax receipt has been dispatched to {donorEmail || 'your email'}.
              </div>
              <div className="mt-6">
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs sm:text-sm rounded-md transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleDonate} className="space-y-4">
              {/* Frequency Toggle */}
              <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200">
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${
                    frequency === 'monthly'
                      ? 'bg-blue-700 text-white shadow-sm'
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  Give Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('once')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${
                    frequency === 'once'
                      ? 'bg-blue-700 text-white shadow-sm'
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  One-Time Gift
                </button>
              </div>

              {/* Amount Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Select Contribution Amount:
                </label>
                <div className="grid grid-cols-4 gap-2 mb-2.5">
                  {[15, 35, 75, 150].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(amt);
                        setCustomAmount('');
                      }}
                      className={`py-2.5 rounded-lg font-semibold text-sm border transition-all cursor-pointer ${
                        selectedAmount === amt && !customAmount
                          ? 'bg-blue-50 border-blue-600 text-blue-900 ring-1 ring-blue-600'
                          : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50'
                      }`}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>

                <input
                  type="number"
                  placeholder="Or enter custom amount ($)"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(0);
                  }}
                  className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 placeholder-slate-400"
                />
              </div>

              {/* Impact Callout */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 leading-relaxed">
                <strong>Your impact:</strong> ${(finalAmount || 35)} helps fund emergency incident triage, helpline infrastructure, and free recovery kits for 5+ vulnerable victims.
              </div>

              {/* Donor info */}
              <div className="space-y-2.5">
                <input
                  type="text"
                  required
                  placeholder="Your Full Name (for tax receipt)"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 placeholder-slate-400"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 placeholder-slate-400"
                />
              </div>

              <button
                id="btn-confirm-donation"
                type="submit"
                className="w-full py-3 px-6 rounded-md bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-white text-white" />
                <span>Complete ${finalAmount || 35} {frequency === 'monthly' ? '/ Month' : ''} Gift</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                <Lock className="w-3.5 h-3.5" />
                <span>256-bit encrypted • 501(c)(3) tax-exempt public charity</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
