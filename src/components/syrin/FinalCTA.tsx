export const FinalCTA = () => (
  <section className="py-32 lg:py-40 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-mesh opacity-30 blur-3xl animate-spin-slow" />
    <div className="absolute inset-0 bg-gradient-hero" />
    <div className="absolute inset-0 grid-bg opacity-30" />

    <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <h2 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight text-foreground leading-[1.02]">
        Stop planning.
        <br />
        <span className="text-gradient">Start your streak.</span>
      </h2>
      <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto">
        Free forever plan. Set up in two minutes. Today is day 1 — or day zero. Your call.
      </p>
      <div className="mt-10">
        <a
          href="#pricing"
          className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-gradient-primary text-primary-foreground font-bold text-lg shadow-glow hover:scale-[1.03] active:scale-[0.98] transition-transform"
        >
          Start free
          <span>→</span>
        </a>
      </div>
      <p className="mt-6 text-xs text-muted-foreground">
        No credit card · Cancel anytime · 30-day money back on paid plans
      </p>
    </div>
  </section>
);