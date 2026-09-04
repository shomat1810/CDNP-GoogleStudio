import React, { useState } from 'react';
import { 
  Quote, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  UserCheck
} from 'lucide-react';
import { CaseStory } from '../types';

interface CaseStoriesSectionProps {
  onOpenGetHelp: () => void;
}

const CASE_STORIES: CaseStory[] = [
  {
    id: 'case-1',
    title: 'Recovering a Hijacked Small Business Instagram & Primary Email',
    category: 'Account Recovery',
    victimAlias: 'Elena R., Artisan Bakery Owner',
    timeframe: 'Resolved in 14 hours',
    situation: 'Elena received a deceptive DM posing as copyright infringement. After entering credentials on a spoofed portal, attackers seized her 45,000-follower business profile, changed the 2FA phone number, and demanded $1,500 in crypto ransom.',
    cdnpAction: 'CDNP volunteer specialists intervened immediately: isolated the primary domain mailbox, halted DNS records, navigated Meta’s verified partner escalation route with identity affidavits, and nullified the extortion attempt.',
    outcome: 'Elena regained full administrative access without paying a single cent. Attacker access tokens were completely revoked, and hardware security keys (FIDO2) were installed.',
    quote: 'When my business account was taken, I was crying and felt completely helpless. CDNP was the only voice of calm that didn’t try to charge me thousands of dollars. They walked me through every click and got my livelihood back.',
    verified: true,
  },
  {
    id: 'case-2',
    title: 'Stopping a $24,000 Wire Fraud & Identity Theft Attack on a Senior Citizen',
    category: 'Identity Protection',
    victimAlias: 'Arthur M., Retired Educator (72)',
    timeframe: 'Emergency Containment within 45 mins',
    situation: 'Arthur was targeted by a pop-up scam impersonating federal banking regulators, giving remote access software (AnyDesk) to scammers who initiated pending wire transfers.',
    cdnpAction: 'A CDNP digital first-responder guided Arthur’s daughter to immediately disconnect router Ethernet cables, conference call his financial institution’s dedicated fraud wire unit, and lock credit bureaus (Experian, TransUnion, Equifax).',
    outcome: 'All $24,000 in fraudulent outgoing wire transfers were successfully recalled and frozen before release. Arthur’s identity was secured under free non-profit credit monitoring.',
    quote: 'They spoke with such dignity and patience to my father. They didn’t make him feel embarrassed or stupid. CDNP is performing an indispensable public service.',
    verified: true,
  },
  {
    id: 'case-3',
    title: 'Extortion Email & Ransomware Scare Neutralization',
    category: 'Ransomware',
    victimAlias: 'Marcus T., Freelance Graphic Designer',
    timeframe: 'Assessed in 30 mins',
    situation: 'Marcus received a terrifying blackmail email containing a leaked 5-year-old password and threats of camera recordings unless Bitcoin was transferred within 48 hours.',
    cdnpAction: 'CDNP analysts conducted forensic analysis of the email headers and hash signatures, confirming it was a mass credential-stuffing bluff using recycled breach dumps with zero malware payload.',
    outcome: 'Marcus received reassurance and an automated credential rotation roadmap, saving him $800 in threatened ransom and restoring his peace of mind.',
    quote: 'I had the Bitcoin wallet open, terrified. Reaching out to CDNP saved me from throwing away my savings out of fear.',
    verified: true,
  },
];

export const CaseStoriesSection: React.FC<CaseStoriesSectionProps> = ({ onOpenGetHelp }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const activeCase = CASE_STORIES[activeCaseIndex];

  return (
    <section id="case-stories" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5 text-blue-700" />
            Real Stories of Recovery
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Restoring Security, Dignity, and Peace of Mind
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Behind every cyberattack is a human being facing intense stress. Here is how our volunteer defense team stepped in to help when everyone else demanded payment.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-8">
          {CASE_STORIES.map((item, index) => (
            <button
              key={item.id}
              id={`case-tab-${item.id}`}
              onClick={() => setActiveCaseIndex(index)}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                activeCaseIndex === index
                  ? 'bg-blue-700 text-white border-blue-700 shadow-sm'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <span>{item.category}: {item.victimAlias.split(',')[0]}</span>
            </button>
          ))}
        </div>

        {/* Featured Case Study Card */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          {/* Header Info */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200">
            <div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
                Verified Non-Profit Case Study
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-2">
                {activeCase.title}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white px-3 py-1.5 rounded-md border border-slate-200">
              <Clock className="w-4 h-4 text-blue-700" />
              <span>{activeCase.timeframe}</span>
            </div>
          </div>

          {/* Testimonial Quote Banner */}
          <div className="my-6 p-5 sm:p-6 rounded-lg bg-white border border-slate-200 shadow-sm relative overflow-hidden">
            <Quote className="absolute -bottom-3 -right-3 w-20 h-20 text-slate-100 pointer-events-none" />
            <p className="text-slate-700 text-base sm:text-lg italic font-medium leading-relaxed relative z-10">
              "{activeCase.quote}"
            </p>
            <div className="mt-3 text-xs font-bold text-blue-900">
              — {activeCase.victimAlias}
            </div>
          </div>

          {/* Detailed Problem vs Resolution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-lg bg-white border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-2">
                The Situation & Threat
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {activeCase.situation}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
                CDNP Non-Profit Action & Outcome
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                {activeCase.cdnpAction}
              </p>
              <div className="flex items-start gap-1.5 text-xs font-semibold text-emerald-900 bg-emerald-50 p-2.5 rounded-md border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{activeCase.outcome}</span>
              </div>
            </div>
          </div>

          {/* Bottom Prompt */}
          <div className="mt-6 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-600 font-medium">
              Facing something similar? Our trained volunteers are standing by to help.
            </div>
            <button
              id="btn-case-get-help"
              onClick={onOpenGetHelp}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-blue-700 hover:bg-blue-800 text-white text-xs sm:text-sm font-semibold shadow-sm transition-colors cursor-pointer"
            >
              <span>Get Free Guidance Now</span>
              <ArrowRight className="w-4 h-4 text-blue-200" />
            </button>
          </div>
        </div>

        {/* Non-Profit Impact Figures */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <div className="text-2xl font-black text-blue-900">$0</div>
            <div className="text-xs font-medium text-slate-600 mt-1">Cost to Victims Always</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <div className="text-2xl font-black text-blue-900">800+</div>
            <div className="text-xs font-medium text-slate-600 mt-1">Cases Guided & Triage Completed</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <div className="text-2xl font-black text-blue-900">100%</div>
            <div className="text-xs font-medium text-slate-600 mt-1">Volunteer & Donor Funded</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <div className="text-2xl font-black text-blue-900">24/7</div>
            <div className="text-xs font-medium text-slate-600 mt-1">Community First-Aid Guides</div>
          </div>
        </div>
      </div>
    </section>
  );
};
