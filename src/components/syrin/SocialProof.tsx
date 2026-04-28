const audiences = [
  "Founders",
  "Operators",
  "Engineers",
  "PhD students",
  "Athletes in transition",
  "Anyone done outsourcing their discipline",
];

export const SocialProof = () => (
  <section className="py-12 border-y border-border/50 bg-background-secondary/20">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
          Built for
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 md:gap-x-9 text-sm md:text-base font-medium text-muted-foreground/80">
          {audiences.map((a, i) => (
            <span key={a} className="inline-flex items-center gap-x-7 md:gap-x-9">
              <span className="hover:text-foreground transition-colors">{a}</span>
              {i < audiences.length - 1 && (
                <span className="text-border" aria-hidden>
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);
