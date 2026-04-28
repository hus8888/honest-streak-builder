const logos = ["TechCrunch", "Product Hunt #1", "Hacker News", "The Hustle", "Morning Brew"];

export const SocialProof = () => (
  <section className="py-12 border-y border-border/50 bg-background-secondary/20">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Featured in</p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {logos.map((l) => (
            <span key={l} className="text-sm md:text-base font-semibold text-muted-foreground/60 hover:text-muted-foreground transition-colors">
              {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);