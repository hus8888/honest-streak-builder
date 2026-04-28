import { Sunrise, BrainCircuit, Moon } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { SpotlightCard } from "./SpotlightCard";

const usecases = [
  {
    icon: Sunrise,
    label: "06:42 — Morning",
    title: "Plan the day with intent.",
    body: "Voice-walks the day with you. Top three priorities, the one thing you said you'd stop avoiding, and the meeting you'd rather skip.",
    quote: "Yesterday you said today was the day you'd ship the proposal. Still the plan?",
  },
  {
    icon: BrainCircuit,
    label: "14:18 — Mid-day",
    title: "Cut the drift.",
    body: "Notices when a deep-work block has stalled. Surfaces the friction without nagging. Suggests a 90-second reset, not a guilt trip.",
    quote: "You've been in the editor 47 minutes without a commit. Stuck, or just thinking?",
  },
  {
    icon: Moon,
    label: "22:30 — Evening",
    title: "Honest review.",
    body: "Not a checklist. A real conversation about what moved, what didn't, and what story you're telling yourself about why.",
    quote: "Three workouts skipped this week. Want to look at that, or keep moving?",
  },
];

export const Testimonials = () => (
  <section className="py-24 lg:py-32 bg-background-secondary/30 border-y border-border/50 relative">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <SectionHeader
        eyebrow="A day with Syrin"
        title={
          <>
            Three moments. <span className="text-gradient">One coach.</span>
          </>
        }
        subtitle="Built around the rhythm of an ambitious day — not stuck on a 9am push notification."
      />

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {usecases.map((u, i) => {
          const Icon = u.icon;
          return (
            <SpotlightCard key={u.label} highlight={i === 1} className="p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary">
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
                  {u.label}
                </p>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">
                {u.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{u.body}</p>
              <div className="rounded-xl bg-white/60 border border-white/80 p-4">
                <p className="text-sm text-foreground/85 italic font-serif-italic leading-snug">
                  "{u.quote}"
                </p>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </div>
  </section>
);
