import React, { useState } from 'react';
import { X, AlertTriangle, CheckCircle2, Send, Loader2, AlertCircle } from 'lucide-react';

interface ReportAbuseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReportAbuseModal: React.FC<ReportAbuseModalProps> = ({ isOpen, onClose }) => {
  const [abuseType, setAbuseType] = useState('Phishing Link / Fake Login Page');
  const [targetUrl, setTargetUrl] = useState('');
  const [details, setDetails] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check: reject bots silently
    if (honeypot) {
      setIsSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/1cd30f193bf505df6f6cf2bce28e9f78', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `[CDNP Threat Report] ${abuseType}`,
          _honey: honeypot,
          _captcha: 'true',
          _template: 'table',
          'Threat Category': abuseType,
          'Suspicious Indicator / URL / Handle': targetUrl,
          'Context & Evidence': details || 'No additional text provided',
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok || (data && (data.success === 'true' || data.success === true))) {
        setIsSubmitted(true);
      } else {
        throw new Error(data?.message || 'Submission failed. Please try again.');
      }
    } catch (err: any) {
      console.error('FormSubmit threat report error:', err);
      setSubmitError(err.message || 'Unable to deliver threat report. Please verify connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setSubmitError(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="report-abuse-title"
      >
        <div className="bg-slate-900 text-white p-6 relative border-b border-slate-800">
          <button
            id="close-abuse-modal-btn"
            onClick={handleClose}
            className="absolute top-5 right-5 p-2 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-900/80 border border-blue-700/60 text-blue-200 text-xs font-bold uppercase tracking-wider mb-2">
            <AlertTriangle className="w-3.5 h-3.5 text-blue-300" />
            <span>Threat Intelligence Hotline</span>
          </div>

          <h2 id="report-abuse-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Report Scam or Predatory Threat
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            Submit malicious domains, phishing numbers, or fraudulent "recovery agents" for non-profit takedown advocacy.
          </p>
        </div>

        <div className="p-6 sm:p-7">
          {isSubmitted ? (
            <div className="text-center py-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Threat Report Submitted
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Thank you for protecting the community. Our security advocacy team will verify the indicator and submit takedown requests to relevant domain registrars and hosting providers.
              </p>
              <div className="mt-6">
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs sm:text-sm rounded-md transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot field to block automated spam bots */}
              <input
                type="text"
                name="_honey"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {/* Enable default FormSubmit reCAPTCHA */}
              <input type="hidden" name="_captcha" value="true" />

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Threat Category:
                </label>
                <select
                  value={abuseType}
                  onChange={(e) => setAbuseType(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 bg-white"
                >
                  <option>Phishing Link / Fake Login Page</option>
                  <option>Fake "Account Recovery Hacker" Charging Fees</option>
                  <option>Extortion / Blackmail Threat</option>
                  <option>Fraudulent Phone Call / SMS Sender</option>
                  <option>Malware / Ransomware File Link</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Suspicious URL, Phone Number, or Social Handle:
                </label>
                <input
                  type="text"
                  required
                  value={targetUrl}
                  onChange={(e) => setTargetUrl(e.target.value)}
                  placeholder="e.g. hxxp://fake-instagram-security-help.com or @recovery_guru"
                  className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 placeholder-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Additional Context / Evidence:
                </label>
                <textarea
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="How did you encounter this? Any messages sent by the attacker?"
                  className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 placeholder-slate-400"
                />
              </div>

              {submitError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md flex items-start gap-2 text-xs text-red-800">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Notice: </span>
                    <span>{submitError}</span>
                  </div>
                </div>
              )}

              <div className="pt-2">
                <button
                  id="btn-submit-abuse-report"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 px-6 bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-semibold text-sm rounded-md shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Threat Intelligence...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Threat Report</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
