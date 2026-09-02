import React from 'react';

export interface CaseStory {
  id: string;
  title: string;
  category: 'Account Recovery' | 'Phishing Scam' | 'Identity Protection' | 'Ransomware';
  victimAlias: string;
  timeframe: string;
  situation: string;
  cdnpAction: string;
  outcome: string;
  quote: string;
  verified: boolean;
}

export interface ServiceCard {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  urgentPill: string;
  steps: string[];
  ctaLabel: string;
}

export interface SelfHelpGuide {
  id: string;
  category: 'Immediate Emergency' | 'Account Recovery' | 'Scam Defense' | 'Data Protection';
  title: string;
  description: string;
  timeToComplete: string;
  steps: {
    number: number;
    title: string;
    detail: string;
    warning?: string;
  }[];
}

export type ModalType = 'none' | 'getHelp' | 'donate' | 'reportAbuse' | 'privacy' | 'terms' | 'guideDetail';

declare global {
  namespace React.JSX {
    interface IntrinsicElements {
      'stripe-buy-button': {
        'buy-button-id'?: string;
        'publishable-key'?: string;
        class?: string;
        className?: string;
        id?: string;
        children?: any;
      };
    }
  }
}

