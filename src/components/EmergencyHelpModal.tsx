import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  AlertTriangle, 
  ArrowRight, 
  ArrowLeft,
  Lock,
  Send,
  Loader2,
  AlertCircle
} from 'lucide-react';

interface EmergencyHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const EmergencyHelpModal: React.FC<EmergencyHelpModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Digital First-Aid',
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [incidentType, setIncidentType] = useState<string>(initialService);
  const [urgencyLevel, setUrgencyLevel] = useState<'critical' | 'moderate' | 'inquiry'>('critical');
  const [contactMethod, setContactMethod] = useState<'email' | 'signal' | 'phone'>('email');
  const [contactValue, setContactValue] = useState('');
  const [victimAlias, setVictimAlias] = useState('');
  const [description, setDescription] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check: If filled by automated bot, fail silently
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
          _subject: `[CDNP Emergency Help] ${urgencyLevel.toUpperCase()}: ${incidentType} - ${victimAlias || 'Anonymous'}`,
          _honey: honeypot,
          _captcha: 'true',
          _template: 'table',
          'Incident Type': incidentType,
          'Urgency Level': urgencyLevel,
          'Preferred Contact Method': contactMethod,
          'Safe Contact Information': contactValue,
          'Victim Alias / Name': victimAlias || 'Anonymous',
          'Incident Description': description,
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok || (data && (data.success === 'true' || data.success === true))) {
        setIsSubmitted(true);
      } else {
        throw new Error(data?.message || 'Submission failed. Please try again.');
      }
    } catch (err: any) {
      console.error('FormSubmit delivery error:', err);
      setSubmitError(err.message || 'Unable to deliver report. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setStep(1);
    setSubmitError(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="emergency-help-title"
      >
        {/* Modal Top Banner */}
        <div className="bg-slate-900 text-white p-6 sm:p-7 relative border-b border-slate-800">
          <button
            id="close-emergency-modal-btn"
            onClick={resetAndClose}
            className="absolute top-5 right-5 p-2 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-900/80 border border-blue-700/60 text-blue-200 text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
            <span>100% Free Non-Profit Emergency Response</span>
          </div>
          
          <h2 id="emergency-help-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Digital First-Aid & Recovery Assistance
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-lg">
            Take a deep breath. You are in safe hands. We never charge money or ask for your account passwords.
          </p>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Help Request Received Safely
              </h3>
              <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                Your incident details have been successfully transmitted to our responders' mailbox. A volunteer security specialist will review your priority triage queue immediately.
              </p>

              <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-lg text-left max-w-md mx-auto space-y-2">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Immediate Security Reminder:
                </div>
                <p className="text-xs text-slate-600">
                  • <strong>For immediate physical danger or extortion, call your local law enforcement emergency number (e.g., 000 in Australia, 911 in the US) immediately.</strong>
                </p>
                <p className="text-xs text-slate-600">
                  • <strong>Do not</strong> share 2FA codes with anyone claiming to be tech support.
                </p>
                <p className="text-xs text-slate-600">
                  • We will reach out to you via your requested contact: <strong>{contactValue || 'your contact'}</strong>.
                </p>
              </div>

              <div className="mt-6">
                <button
                  id="btn-close-submitted-modal"
                  onClick={resetAndClose}
                  className="px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-xs sm:text-sm font-semibold rounded-md transition-colors cursor-pointer"
                >
                  Return to Site
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold ${
                    step >= 1 ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-400'
                  }`}>
                    1
                  </span>
                  <span className="text-xs font-semibold text-slate-700 hidden sm:inline">Incident Triage</span>
                </div>

                <div className="h-0.5 w-12 bg-slate-200" />

                <div className="flex items-center gap-2">
                  <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold ${
                    step >= 2 ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-400'
                  }`}>
                    2
                  </span>
                  <span className="text-xs font-semibold text-slate-700 hidden sm:inline">Immediate Containment</span>
                </div>

                <div className="h-0.5 w-12 bg-slate-200" />

                <div className="flex items-center gap-2">
                  <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold ${
                    step === 3 ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-400'
                  }`}>
                    3
                  </span>
                  <span className="text-xs font-semibold text-slate-700 hidden sm:inline">Contact Details</span>
                </div>
              </div>

              {/* Step 1: Select Incident */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    What type of cyber incident are you dealing with?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { id: 'Hacked Social/Email Account', desc: 'Google, Instagram, Apple ID, Facebook, Outlook' },
                      { id: 'Phishing / Stolen Credentials', desc: 'Clicked suspicious link, typed password into fake site' },
                      { id: 'Ransomware / Extortion Email', desc: 'Files locked or receiving blackmail/crypto threats' },
                      { id: 'Financial & Identity Fraud', desc: 'Unauthorized bank wire, credit card, or SIM swap' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setIncidentType(item.id)}
                        className={`p-3.5 rounded-lg text-left border transition-all cursor-pointer ${
                          incidentType === item.id
                            ? 'bg-blue-50/80 border-blue-600 ring-1 ring-blue-600'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="font-bold text-xs sm:text-sm text-slate-900">{item.id}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                      </button>
                    ))}
                  </div>

                  <div className="pt-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Urgency Level:
                    </label>
                    <div className="flex gap-2">
                      {[
                        { id: 'critical', label: 'Active Emergency Attack' },
                        { id: 'moderate', label: 'Compromise Happened Recently' },
                        { id: 'inquiry', label: 'General Prevention' },
                      ].map((u) => (
                        <button
                          key={u.id}
                          type="button"
                          onClick={() => setUrgencyLevel(u.id as any)}
                          className={`flex-1 py-2 px-2.5 text-xs font-semibold rounded-md border transition-all cursor-pointer ${
                            urgencyLevel === u.id
                              ? 'bg-blue-700 text-white border-blue-700'
                              : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          {u.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      id="btn-step1-next"
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-xs sm:text-sm font-semibold rounded-md transition-colors cursor-pointer"
                    >
                      <span>Continue to Emergency Steps</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Immediate Containment Actions */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="p-3.5 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="flex items-center gap-2 text-amber-900 font-bold text-xs sm:text-sm mb-1">
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      <span>Immediate First-Aid Before We Contact You</span>
                    </div>
                    <p className="text-xs text-amber-800 leading-relaxed">
                      Please perform these defensive measures right now to stop attackers from deepening their access:
                    </p>
                  </div>

                  <div className="space-y-2.5 bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <div className="flex items-start gap-2.5 text-xs text-slate-800">
                      <div className="w-4 h-4 rounded bg-blue-700 text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                        1
                      </div>
                      <div>
                        <strong>If you are in immediate physical danger or facing violence, call your local law enforcement emergency services (e.g., 000 or 911) immediately.</strong>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-slate-800">
                      <div className="w-4 h-4 rounded bg-blue-700 text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                        2
                      </div>
                      <div>
                        <strong>Disconnect from the internet if ransomware/malware is suspected:</strong> Unplug Ethernet cables and turn off Wi-Fi.
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-slate-800">
                      <div className="w-4 h-4 rounded bg-blue-700 text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                        3
                      </div>
                      <div>
                        <strong>Alert close family & friends:</strong> Warn your contacts not to respond to urgent money requests sent from your hijacked accounts.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-slate-600 hover:text-slate-900 text-xs font-semibold"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      id="btn-step2-next"
                      type="button"
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-xs sm:text-sm font-semibold rounded-md transition-colors cursor-pointer"
                    >
                      <span>Connect with Volunteer Specialist</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Form */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field to block spam bots */}
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
                      Preferred Name or Anonymous Alias:
                    </label>
                    <input
                      id="input-victim-alias"
                      type="text"
                      required
                      value={victimAlias}
                      onChange={(e) => setVictimAlias(e.target.value)}
                      placeholder="e.g., Alex or Anonymous"
                      className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      How should we reach you? (Preferred safe contact)
                    </label>
                    <div className="flex gap-2 mb-2">
                      {(['email', 'signal', 'phone'] as const).map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => setContactMethod(m)}
                          className={`flex-1 py-1.5 text-xs font-semibold rounded-md border uppercase tracking-wider ${
                            contactMethod === m
                              ? 'bg-blue-700 text-white border-blue-700'
                              : 'bg-white text-slate-600 border-slate-300'
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                    <input
                      id="input-contact-value"
                      type="text"
                      required
                      value={contactValue}
                      onChange={(e) => setContactValue(e.target.value)}
                      placeholder={
                        contactMethod === 'email'
                          ? 'Enter an uncompromised safe email address'
                          : contactMethod === 'signal'
                          ? 'Enter Signal username or number'
                          : 'Enter safe phone number'
                      }
                      className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Brief description of what occurred (No passwords):
                    </label>
                    <textarea
                      id="input-incident-desc"
                      rows={3}
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Describe what happened, what platform (e.g. Gmail, Instagram), and whether you lost financial access..."
                      className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div className="p-3 rounded-md bg-slate-50 border border-slate-200 flex items-center gap-2 text-xs text-slate-600">
                    <Lock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Your submission is encrypted and reviewed exclusively by verified CDNP non-profit responders.</span>
                  </div>

                  {submitError && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-md flex items-start gap-2 text-xs text-red-800">
                      <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Submission notice: </span>
                        <span>{submitError}</span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-slate-600 hover:text-slate-900 text-xs font-semibold"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    <button
                      id="btn-submit-help-request"
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white text-xs sm:text-sm font-semibold rounded-md shadow-sm transition-colors cursor-pointer disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Delivering to Inbox...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Free Assistance Request</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
