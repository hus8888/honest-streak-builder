import { Play, Mic, Sparkles, TrendingUp, Check } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Atmospheric background — prism refractions */}
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-primary/30 blur-[140px]" />
      <div className="absolute top-1/3 -right-48 w-[640px] h-[640px] rounded-full bg-primary-glow/25 blur-[160px]" />
      <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full bg-primary/15 blur-[140px]" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background-secondary border border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-[11px] uppercase tracking-[0.18em] font-bold text-primary">
                Alpha access · Now in beta
              </span>
            </div>

            <h1 className="mt-7 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-bold tracking-tight text-foreground leading-[0.98]">
              Discipline,
              <br />
              <span className="font-serif-italic font-normal text-primary">on demand.</span>
            </h1>

            <p className="mt-7 text-lg lg:text-xl text-muted-foreground-strong max-w-xl leading-relaxed font-light">
              The AI accountability partner that holds you to your word. Plans your day, tracks your goals, calls out your excuses — over voice or text, around the clock.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                Start free
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl glass text-foreground font-semibold hover:bg-white/70 transition-colors"
              >
                <Play className="w-4 h-4" fill="currentColor" />
                See how it works
              </a>
            </div>

            {/* Trust row — honest, not faked */}
            <div className="mt-10 flex items-center gap-5 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-success" />
                Free forever plan
              </div>
              <span className="text-border">·</span>
              <div>No credit card required</div>
              <span className="text-border hidden sm:inline">·</span>
              <div className="hidden sm:block">Cancel anytime</div>
            </div>
          </div>

          {/* Right — Prism composition */}
          <div className="relative h-[620px] lg:h-[680px] flex items-center justify-center">
            {/* Background glass shards */}
            <div className="absolute top-4 right-0 w-64 h-44 rounded-3xl glass rotate-[-10deg] translate-x-8" />
            <div className="absolute bottom-12 left-0 w-56 h-64 rounded-3xl glass rotate-[8deg] -translate-x-6 opacity-70" />

            {/* Main glass card */}
            <div className="relative z-20 w-full max-w-[420px] glass-strong rounded-[36px] p-7 rotate-[2deg] hover:rotate-0 transition-transform duration-700 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-prism pointer-events-none" />
              <div className="absolute inset-0 prism-shine pointer-events-none" />

              <div className="relative">
                {/* Header */}
                <div className="flex justify-between items-start mb-7">
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.18em] text-muted-foreground uppercase">
                      Current Session
                    </p>
                    <p className="mt-1 text-2xl font-bold text-foreground tracking-tight">
                      Deep Work Block
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">42-day streak · 18:24 elapsed</p>
                  </div>
                  <div className="relative w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center">
                    <div className="absolute inset-1 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                </div>

                {/* AI message */}
                <div className="rounded-2xl bg-white/60 border border-white/80 p-4 mb-3">
                  <div className="flex gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 shadow-glow-soft">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-foreground">Syrin</p>
                      <p className="text-sm text-foreground/80 leading-snug mt-0.5">
                        You've been in the editor for 45 min without a commit. Push the draft, or take a 2-min reset?
                      </p>
                    </div>
                  </div>
                </div>

                {/* User reply */}
                <div className="rounded-2xl bg-primary/10 border border-primary/20 p-3 ml-10 mb-6">
                  <p className="text-sm text-foreground italic font-serif-italic">
                    "Resetting. 2 minutes of breathwork starts now."
                  </p>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-background-secondary/70 border border-primary/10 p-4">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <TrendingUp className="w-3 h-3" />
                      <p className="text-[10px] font-bold uppercase tracking-wider">Focus</p>
                    </div>
                    <p className="text-2xl font-bold tabular-nums text-foreground mt-1">94.2%</p>
                  </div>
                  <div className="rounded-2xl bg-background-secondary/70 border border-primary/10 p-4">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Check className="w-3 h-3" />
                      <p className="text-[10px] font-bold uppercase tracking-wider">Drift</p>
                    </div>
                    <p className="text-2xl font-serif-italic text-primary mt-1">Low</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating mic pill — bottom */}
            <div className="absolute bottom-2 right-4 z-30 glass-strong rounded-full pl-2 pr-5 py-2 flex items-center gap-3 animate-float">
              <div className="relative w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                <Mic className="w-4 h-4 text-white relative" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Listening</p>
                <p className="text-xs font-semibold text-foreground">"Hey Syrin…"</p>
              </div>
            </div>

            {/* Floating notification — top left */}
            <div className="absolute top-6 left-2 z-30 glass-strong rounded-2xl p-3 max-w-[200px] -rotate-[6deg]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success" />
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Goal Hit
                </p>
              </div>
              <p className="text-xs font-semibold text-foreground mt-1 leading-snug">
                Morning workout complete · +12 momentum
              </p>
            </div>

            {/* Light shard */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-32 bg-gradient-to-r from-transparent via-white/50 to-transparent rotate-[35deg] mix-blend-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
};