import React from 'react';

interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
  className?: string;
  id?: string;
}

export default function Logo({ 
  size = 'md', 
  showWordmark = false, 
  className = '',
  id = 'brand-logo'
}: LogoProps) {
  // Dimension mapping
  const dimensions = {
    xs: { icon: 24, text: 'text-sm', subtext: 'text-[9px]' },
    sm: { icon: 32, text: 'text-sm', subtext: 'text-[10px]' },
    md: { icon: 40, text: 'text-base', subtext: 'text-[11px]' },
    lg: { icon: 48, text: 'text-lg', subtext: 'text-xs' },
    xl: { icon: 64, text: 'text-2xl', subtext: 'text-sm' },
  }[size];

  const iconSize = dimensions.icon;

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`} id={id}>
      {/* SVG Emblem */}
      <div 
        className="relative flex items-center justify-center shrink-0 group transition-transform duration-300 hover:scale-105"
        style={{ width: iconSize, height: iconSize }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_12px_rgba(99,102,241,0.35)]"
        >
          <defs>
            {/* Primary Gradient */}
            <linearGradient id="dd-primary-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />    {/* Sky cyan */}
              <stop offset="50%" stopColor="#6366F1" />   {/* Indigo */}
              <stop offset="100%" stopColor="#A855F7" />  {/* Violet purple */}
            </linearGradient>

            {/* Accent Glow Gradient */}
            <linearGradient id="dd-accent-grad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#4F46E5" />
            </linearGradient>

            {/* Subtle Metallic Bevel */}
            <linearGradient id="dd-sheen" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            {/* Inner Dark Backdrop */}
            <radialGradient id="dd-bg-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1E1B4B" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#030712" stopOpacity="0.95" />
            </radialGradient>
          </defs>

          {/* Outer Rounded Hexagonal Container Shield */}
          <rect 
            x="3" 
            y="3" 
            width="94" 
            height="94" 
            rx="24" 
            fill="url(#dd-bg-glow)" 
            stroke="url(#dd-primary-grad)" 
            strokeWidth="2.5" 
          />

          {/* Subtle Corner Bracket Accents representing Code Syntax */}
          <path
            d="M16 30 L16 18 L28 18"
            stroke="#6366F1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeOpacity="0.6"
          />
          <path
            d="M84 70 L84 82 L72 82"
            stroke="#38BDF8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeOpacity="0.6"
          />

          {/* Stylized Monogram: Intertwined D & D with Code Bracket Contours */}
          
          {/* First "D" (Left Initial) */}
          <path
            d="M 27 26 
               L 44 26 
               C 56 26, 62 33, 62 43 
               C 62 52, 55 58, 44 58 
               L 37 58 
               L 37 74 
               L 27 74 
               Z"
            fill="url(#dd-primary-grad)"
          />
          
          {/* First "D" Inner Cutout (Code-bracket opening vibe) */}
          <path
            d="M 37 35 
               L 43 35 
               C 49 35, 52 38, 52 42.5 
               C 52 47, 49 49.5, 43 49.5 
               L 37 49.5 
               Z"
            fill="#030712"
          />

          {/* Second "D" (Intertwined Offset Shadow / Forward-Flowing) */}
          <path
            d="M 50 42 
               L 61 42 
               C 72 42, 78 48, 78 58 
               C 78 68, 70 74, 60 74 
               L 45 74 
               L 45 66 
               L 59 66 
               C 65 66, 68 63, 68 58 
               C 68 53, 64 50, 58 50 
               L 50 50 
               Z"
            fill="url(#dd-accent-grad)"
          />

          {/* Code Slash Accent / Tech Beam */}
          <path 
            d="M 66 24 L 56 38" 
            stroke="#38BDF8" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            opacity="0.85"
          />

          {/* Active Terminal Indicator Dot */}
          <circle cx="76" cy="28" r="3" fill="#10B981" />
          <circle cx="76" cy="28" r="5" stroke="#10B981" strokeWidth="1" opacity="0.5" />
        </svg>
      </div>

      {/* Optional Wordmark */}
      {showWordmark && (
        <div className="flex flex-col text-left">
          <span className={`${dimensions.text} font-bold text-white tracking-tight leading-tight group-hover:text-indigo-300 transition-colors`}>
            David Dhawan
          </span>
          <span className={`${dimensions.subtext} font-mono text-slate-400 flex items-center gap-1.5 leading-none mt-0.5`}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Java Full Stack Developer
          </span>
        </div>
      )}
    </div>
  );
}
