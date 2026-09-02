import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'light' | 'dark' | 'auto';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  variant = 'auto',
}) => {
  const sizeMap = {
    sm: { icon: 'w-8 h-8', text: 'text-sm', subtext: 'text-[9px]' },
    md: { icon: 'w-10 h-10', text: 'text-base', subtext: 'text-[11px]' },
    lg: { icon: 'w-14 h-14', text: 'text-xl', subtext: 'text-xs' },
    xl: { icon: 'w-20 h-20', text: 'text-2xl', subtext: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision Vector Shield Icon mirroring user's logo */}
      <div className={`relative flex-shrink-0 ${currentSize.icon} drop-shadow-sm`}>
        <svg
          viewBox="0 0 200 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="shieldGrad" x1="20" y1="10" x2="180" y2="230" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="45%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
            
            <linearGradient id="innerShieldGrad" x1="40" y1="30" x2="160" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E0F2FE" />
              <stop offset="60%" stopColor="#BAE6FD" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>

            <linearGradient id="cdGrad" x1="60" y1="60" x2="140" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0369A1" />
              <stop offset="100%" stopColor="#082F49" />
            </linearGradient>

            <linearGradient id="circuitGrad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#7DD3FC" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Outer Shield Outline & Background */}
          <path
            d="M100 10 L175 42 C175 125 145 195 100 230 C55 195 25 125 25 42 L100 10 Z"
            fill="url(#shieldGrad)"
            stroke="#0284C7"
            strokeWidth="3"
          />

          {/* Circuit Traces around Shield Periphery */}
          <path
            d="M50 65 L40 75 L40 120 L55 135"
            stroke="url(#circuitGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="55" cy="135" r="3.5" fill="#38BDF8" />
          <circle cx="50" cy="65" r="3.5" fill="#38BDF8" />

          <path
            d="M150 65 L160 75 L160 120 L145 135"
            stroke="url(#circuitGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="145" cy="135" r="3.5" fill="#38BDF8" />
          <circle cx="150" cy="65" r="3.5" fill="#38BDF8" />

          <path
            d="M75 190 L100 212 L125 190"
            stroke="url(#circuitGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="75" cy="190" r="3.5" fill="#38BDF8" />
          <circle cx="125" cy="190" r="3.5" fill="#38BDF8" />

          {/* Inner Light Shield */}
          <path
            d="M100 32 L158 58 C158 120 134 175 100 205 C66 175 42 120 42 58 L100 32 Z"
            fill="#F8FAFC"
            stroke="#38BDF8"
            strokeWidth="3"
          />

          {/* First Aid / Medical Cross in upper shield */}
          <path
            d="M94 48 H106 V58 H116 V70 H106 V80 H94 V70 H84 V58 H94 V48 Z"
            fill="#0284C7"
          />

          {/* Central CD Monogram (Interlocking Cyber Defense) */}
          {/* C Outer curve */}
          <path
            d="M95 90 C72 90 56 106 56 128 C56 150 72 166 95 166 C105 166 114 162 120 155 L108 144 C104 148 100 150 95 150 C81 150 72 139 72 128 C72 117 81 106 95 106 C100 106 104 108 108 112 L120 101 C114 94 105 90 95 90 Z"
            fill="url(#cdGrad)"
          />

          {/* D Outer and Inner curve interlocking */}
          <path
            d="M102 90 H120 C138 90 152 106 152 128 C152 150 138 166 120 166 H102 V90 Z M118 150 C128 150 136 140 136 128 C136 116 128 106 118 106 H118 V150 Z"
            fill="#0284C7"
            fillOpacity="0.85"
          />

          {/* Center First-Aid Node */}
          <circle cx="100" cy="128" r="4" fill="#38BDF8" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-left leading-tight">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-black tracking-wider uppercase font-sans ${currentSize.text} ${
                variant === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            >
              Cyber Defense
            </span>
          </div>
          <span
            className={`font-bold tracking-[0.2em] uppercase text-cyan-600 ${currentSize.subtext}`}
          >
            Non-Profit • CDNP
          </span>
        </div>
      )}
    </div>
  );
};
