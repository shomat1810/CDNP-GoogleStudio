import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  ChevronRight, 
  LifeBuoy,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { SelfHelpGuide } from '../types';

interface SelfHelpSectionProps {
  onOpenGetHelp: () => void;
  onSelectGuideDetail: (guide: SelfHelpGuide) => void;
}

export const SELF_HELP_GUIDES: SelfHelpGuide[] = [
  {
    id: 'guide-social-email',
    category: 'Immediate Emergency',
    title: 'Emergency: My Google, Apple, or Social Account Was Compromised',
    description: 'Step-by-step immediate containment for recovering access, kicking out unauthorized sessions, and preventing password resets.',
    timeToComplete: '5 - 10 minutes',
    steps: [
      {
        number: 1,
        title: 'Check your recovery email and telephone number',
        detail: 'Open the platform’s official recovery portal in a private browser window. Check if the recovery email or phone has been changed. If an unauthorized number was added, look for "Try another way" or "Security verification code sent to original contact".',
        warning: 'Only use official platform URLs (e.g. accounts.google.com, appleid.apple.com, instagram.com/hacked). Never trust links sent via SMS or DM.'
      },
      {
        number: 2,
        title: 'Terminate active sessions across all devices',
        detail: 'Once you gain partial or backup access, immediately navigate to Security > Devices and click "Sign out of all other devices / Revoke all sessions". This disconnects the attacker immediately.',
      },
      {
        number: 3,
        title: 'Generate and store offline backup codes',
        detail: 'Set up an authenticator app (e.g. Google Authenticator, Aegis) and download 10 emergency one-time recovery codes to a secure, offline location.',
      },
      {
        number: 4,
        title: 'Audit linked apps and OAuth permissions',
        detail: 'Check connected third-party applications (Facebook Apps, Google Connected Apps) and remove any unrecognized authorization tokens.',
      }
    ]
  },
  {
    id: 'guide-phishing-clicked',
    category: 'Scam Defense',
    title: 'I Clicked a Suspicious Link or Entered My Password into a Fake Site',
    description: 'What to do within the first 15 minutes of falling for a phishing landing page or fake invoice attachment.',
    timeToComplete: '8 minutes',
    steps: [
      {
        number: 1,
        title: 'Change the password on the targeted account immediately',
        detail: 'If you typed your password into a fake portal, immediately visit the genuine service directly by typing the official address into your browser and change your password.',
        warning: 'If you reused that password anywhere else (e.g., your primary email or banking), change those accounts immediately as well.'
      },
      {
        number: 2,
        title: 'Enable Two-Factor Authentication (2FA)',
        detail: 'Turn on 2FA using an Authenticator App or hardware key. Even if attackers obtain your password, 2FA prevents them from logging in.',
      },
      {
        number: 3,
        title: 'Scan your device for background droppers',
        detail: 'If you downloaded an attachment (.exe, .scr, .zip, .dmg), run a full scan using Windows Defender or Malwarebytes and disconnect from Wi-Fi while scanning.',
      }
    ]
  },
  {
    id: 'guide-banking-fraud',
    category: 'Data Protection',
    title: 'Financial & Identity Fraud Emergency Checklist',
    description: 'Protecting your credit score, freezing financial accounts, and placing national fraud alerts.',
    timeToComplete: '15 minutes',
    steps: [
      {
        number: 1,
        title: 'Call your bank’s dedicated 24/7 fraud hotline',
        detail: 'Look at the back of your credit/debit card for the direct fraud number. Ask them to place a temporary fraud lock on suspicious transactions and reissue new cards.',
      },
      {
        number: 2,
        title: 'Place a FREE Credit Freeze with all 3 bureaus',
        detail: 'Freezing your credit prevents anyone from taking out loans in your name. By law in the US, credit freezes are completely free at Experian, Equifax, and TransUnion.',
        warning: 'Never pay for a credit lock when the federal credit freeze is 100% free by law.'
      },
      {
        number: 3,
        title: 'File an identity theft report with the FTC',
        detail: 'Visit IdentityTheft.gov to file an official affidavit. This report serves as legal proof to dispute fraudulent debts with collectors.',
      }
    ]
  },
  {
    id: 'guide-ransomware-extortion',
    category: 'Account Recovery',
    title: 'Ransomware & Blackmail Email First-Aid Guide',
    description: 'How to evaluate extortion threats without panicking or paying criminal ransoms.',
    timeToComplete: '5 minutes',
    steps: [
      {
        number: 1,
        title: 'Do NOT send money or cryptocurrency',
        detail: 'Over 95% of generic extortion emails (claiming they recorded you through your webcam) are empty bluffs generated from old credential leaks.',
      },
      {
        number: 2,
        title: 'Isolate affected hardware from your home network',
        detail: 'If files on your computer are actively encrypted with unfamiliar extensions (.locked, .crypto), immediately unplug the Ethernet cable or power down the Wi-Fi router to prevent lateral propagation.',
      },
      {
        number: 3,
        title: 'Check NoMoreRansom.org for free decryptors',
        detail: 'The No More Ransom project (supported by Europol and law enforcement) contains free decryption tools for hundreds of known ransomware variants.',
      }
    ]
  }
];

export const SelfHelpSection: React.FC<SelfHelpSectionProps> = ({
  onOpenGetHelp,
  onSelectGuideDetail,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Immediate Emergency', 'Scam Defense', 'Data Protection', 'Account Recovery'];

  const filteredGuides = SELF_HELP_GUIDES.filter((guide) => {
    const matchesSearch =
      guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || guide.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="self-help" className="py-16 sm:py-20 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-blue-700" />
            Empowerment & Self-Help
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Free Step-by-Step Incident Response Guides
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Clear, actionable instructions written in plain language. No cybersecurity background needed.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-4xl mx-auto mb-8 space-y-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              id="guide-search-input"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search guides (e.g., 'Instagram hacked', 'clicked link', 'credit freeze', 'ransomware')..."
              className="w-full pl-11 pr-4 py-3 bg-white rounded-lg border border-slate-300 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 placeholder-slate-400"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`cat-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-blue-700 text-white border-blue-700 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredGuides.map((guide) => (
            <div
              key={guide.id}
              id={`guide-card-${guide.id}`}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 text-xs font-bold">
                    {guide.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-blue-700" />
                    {guide.timeToComplete}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {guide.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {guide.description}
                </p>

                {/* Quick Step Preview */}
                <div className="space-y-2 mb-4 bg-slate-50 p-3.5 rounded-lg border border-slate-100">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    First steps preview:
                  </div>
                  {guide.steps.slice(0, 2).map((s) => (
                    <div key={s.number} className="text-xs text-slate-700 flex items-start gap-2">
                      <span className="w-4 h-4 rounded bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                        {s.number}
                      </span>
                      <span className="font-medium">{s.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <button
                  id={`btn-read-guide-${guide.id}`}
                  onClick={() => onSelectGuideDetail(guide)}
                  className="w-full py-2 px-3 rounded-md bg-white hover:bg-slate-50 text-blue-700 border border-blue-200 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Open Full Step-by-Step Guide</span>
                  <ChevronRight className="w-4 h-4 text-blue-700" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Can't find answer? */}
        <div className="mt-10 text-center max-w-xl mx-auto">
          <p className="text-sm text-slate-600 mb-3 font-medium">
            Don't see your specific incident or need direct human assistance?
          </p>
          <button
            id="btn-selfhelp-talk-human"
            onClick={onOpenGetHelp}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold shadow-sm transition-colors cursor-pointer"
          >
            <LifeBuoy className="w-4 h-4 text-blue-200" />
            <span>Request Free 1-on-1 Volunteer Support</span>
          </button>
        </div>
      </div>
    </section>
  );
};
