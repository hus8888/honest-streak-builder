import { SectionHeader } from "./SectionHeader";

const cards = [
  {
    icon: "🤗",
    title: "The Yes-Men",
    sub: "Replika · Pi",
    body: "They listen. They affirm. They never disagree. You feel good for five minutes and change nothing in five months.",
  },
  {
    icon: "💸",
    title: "The Expensive Slow Ones",
    sub: "Noom · BetterUp",
    body: "$59 to $500 per month. Human coaches who reply in 24 hours, meet once a week, and don't remember last session.",
  },
  {
    icon: "🎯",
    title: "The Honest One",
    sub: "SYRIN",
    body: "Calls out the gaps between what you said and what you did. Remembers every commitment. Available around the clock. Costs less than your weekly coffee.",
    highlight: true,
  },
];

export const Comparison = () => (
  <section className="py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <SectionHeader
        title={
          <>
            Most AI agrees with you.
            <br />
            <span className="text-gradient">Syrin holds you accountable.</span>
          </>
        }
        subtitle="Coaching apps validate. Therapy apps listen. Habit trackers nag. Syrin does none of those — it holds the line on what you said you'd do."
      />

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div
            key={c.title}
            className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
              c.highlight
                ? "border-primary/40 bg-card shadow-glow-soft"
                : "border-border bg-card hover:border-border/80"
            }`}
          >
            {c.highlight && (
              <div className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-gradient-primary text-[10px] uppercase tracking-wider font-bold text-primary-foreground">
                The Difference
              </div>
            )}
            <div className="text-4xl mb-4">{c.icon}</div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{c.sub}</p>
            <h3 className="text-xl font-bold text-foreground mb-3">{c.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{c.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);