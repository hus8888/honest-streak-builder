import { Brain, Bell, Mic } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { SpotlightCard } from "./SpotlightCard";

const cards = [
  {
    icon: Brain,
    eyebrow: "Persistent memory",
    title: "Remembers every commitment.",
    body: "What you said on Tuesday gets brought up Friday when you didn't follow through. No fresh-tab amnesia. Syrin keeps a running ledger of your word.",
  },
  {
    icon: Bell,
    eyebrow: "Proactive push-back",
    title: "Calls out the pattern.",
    body: "Three skipped workouts in a row isn't a streak — it's a signal. Syrin notices, brings it up first, and asks the question you'd rather not ask yourself.",
    highlight: true,
  },
  {
    icon: Mic,
    eyebrow: "Voice + text, 24/7",
    title: "Shows up on your schedule.",
    body: "Five-second voice check-ins on a walk. Text after a hard meeting. Syrin meets you where you are — and never goes off-shift.",
  },
];

export const Comparison = () => (
  <section className="py-24 lg:py-32 relative">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <SectionHeader
        eyebrow="Why Syrin"
        title={
          <>
            Most AI tells you what you want to hear.
            <br />
            <span className="text-gradient">Syrin tells you the truth.</span>
          </>
        }
        subtitle="Built for the people who'd rather be challenged than coddled. The accountability layer for ambitious operators."
      />

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <SpotlightCard key={c.title} highlight={c.highlight} className="p-8">
              <div
                className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5 transition-transform duration-500 group-hover:scale-110 ${
                  c.highlight
                    ? "bg-gradient-primary text-primary-foreground shadow-glow-soft"
                    : "bg-primary/10 text-primary"
                }`}
              >
                <Icon className="w-5 h-5" strokeWidth={2} />
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-2">
                {c.eyebrow}
              </p>
              <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">
                {c.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{c.body}</p>
            </SpotlightCard>
          );
        })}
      </div>
    </div>
  </section>
);
