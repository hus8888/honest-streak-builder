import { Mic, Calendar, Activity, Flame, Target, Brain } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { SpotlightCard } from "./SpotlightCard";

const features = [
  {
    icon: Mic,
    title: "Voice-first by default.",
    body: "Five-second voice check-ins on a walk. Full conversations from the car. Latency tuned for real talk, not robot ping-pong.",
  },
  {
    icon: Calendar,
    title: "Plans built around your day.",
    body: "Drag-to-edit timeline. Syrin reads your calendar, sees the gaps, and helps you protect what matters before someone else fills the slot.",
  },
  {
    icon: Activity,
    title: "Mood as signal, not theater.",
    body: "A five-second check-in becomes a pattern you can act on. 'Sundays drag — want to design a better Sunday?'",
  },
  {
    icon: Flame,
    title: "Streaks that actually mean something.",
    body: "Not gamified for dopamine. Tracked because the third time you skip is the moment Syrin asks the harder question.",
  },
  {
    icon: Target,
    title: "Honest coaching, not affirmation.",
    body: "When the gap shows up, Syrin names it. 'You said Monday was the day. It's Wednesday. What's actually in the way?'",
  },
  {
    icon: Brain,
    title: "A memory that doesn't reset.",
    body: "Commitments from January. Patterns from March. Excuses from last week. All in context, all the time, never lost in a fresh tab.",
  },
];

export const Features = () => (
  <section className="py-24 lg:py-32 relative">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <SectionHeader
        eyebrow="Features"
        title={
          <>
            The accountability stack,
            <br />
            <span className="text-gradient">in one conversation.</span>
          </>
        }
        subtitle="Voice, planning, mood, memory, push-back. No app-hopping. No rituals to maintain. Syrin holds the loop so you don't have to."
      />

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <SpotlightCard key={f.title} className="p-8">
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-5 group-hover:bg-gradient-primary group-hover:border-transparent transition-all duration-500">
                <Icon
                  className="w-5 h-5 text-primary group-hover:text-white transition-colors"
                  strokeWidth={2}
                />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight">
                {f.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{f.body}</p>
            </SpotlightCard>
          );
        })}
      </div>
    </div>
  </section>
);
