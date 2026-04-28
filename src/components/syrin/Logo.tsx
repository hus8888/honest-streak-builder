import { Zap } from "lucide-react";

export const Logo = ({ className = "" }: { className?: string }) => (
  <a href="#" className={`flex items-center gap-2 group ${className}`}>
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-primary blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
      <div className="relative w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
        <Zap className="w-4 h-4 text-white" fill="white" />
      </div>
    </div>
    <span className="text-lg font-bold tracking-[0.2em] text-foreground">SYRIN</span>
  </a>
);