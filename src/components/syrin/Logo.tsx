export const Logo = ({ className = "" }: { className?: string }) => (
  <a href="#" className={`flex items-center gap-2.5 group ${className}`} aria-label="SYRIN home">
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-primary blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
      <svg
        viewBox="0 0 32 32"
        className="relative w-8 h-8 drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="syrin-logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="hsl(199 89% 48%)" />
            <stop offset="100%" stopColor="hsl(234 89% 74%)" />
          </linearGradient>
          <linearGradient id="syrin-logo-shine" x1="0" y1="0" x2="0" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="white" stopOpacity="0.5" />
            <stop offset="50%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="30" height="30" rx="9" fill="url(#syrin-logo-grad)" />
        <rect x="1" y="1" width="30" height="30" rx="9" fill="url(#syrin-logo-shine)" />
        {/* Diamond mark — refraction prism */}
        <rect
          x="11"
          y="11"
          width="10"
          height="10"
          rx="1.5"
          transform="rotate(45 16 16)"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
    <span className="text-lg font-bold tracking-[0.18em] text-foreground font-display">SYRIN</span>
  </a>
);