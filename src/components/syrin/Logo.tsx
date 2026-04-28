export const Logo = ({ className = "" }: { className?: string }) => (
  <a href="#" className={`flex items-center gap-2.5 group ${className}`} aria-label="SYRIN home">
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-primary blur-lg opacity-40 group-hover:opacity-70 transition-opacity" />
      <svg
        viewBox="0 0 32 32"
        className="relative w-8 h-8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="syrin-logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="hsl(217 91% 55%)" />
            <stop offset="100%" stopColor="hsl(213 94% 68%)" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="30" height="30" rx="9" fill="url(#syrin-logo-grad)" />
        <path
          d="M11 20.5c1.2 1.3 3 2 5 2 2.6 0 4.5-1.3 4.5-3.3 0-4.4-9-2.6-9-7 0-1.9 1.8-3.2 4.4-3.2 1.8 0 3.4.6 4.5 1.7"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <span className="text-lg font-bold tracking-[0.22em] text-foreground">SYRIN</span>
  </a>
);