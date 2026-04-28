import { Play } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-mesh opacity-20 blur-3xl animate-spin-slow rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-glow animate-pulse-glow" />
              <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-primary-glow">
                🎙️ Now in beta · Voice-first AI coach
              </span>
            </div>

            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-foreground leading-[1.02]">
              Discipline,
              <br />
              <span className="text-gradient">on demand.</span>
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
              A 24/7 AI coach that plans your day, tracks your goals, and holds you accountable to the things you said you'd do — even when you'd rather forget.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                Start free
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <button className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-border text-foreground hover:bg-secondary transition-colors">
                <Play className="w-4 h-4" fill="currentColor" />
                Watch 60-second demo
              </button>
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <span className="text-warning">★★★★★</span>
              <span>4.9 from 2,341 early users</span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">Free forever plan</span>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};