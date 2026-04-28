import { Mic, Calendar, Smile, Flame, Dumbbell, Brain } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const features = [
  { icon: Mic, title: "Voice-First Conversations", body: "Talk to Syrin like a friend. ElevenLabs voice that actually sounds human. Hands-free while walking, driving, or working out." },
  { icon: Calendar, title: "Visual Timeline", body: "A color-coded daily plan you can drag to edit. Status indicators show what's done, in progress, and upcoming." },
  { icon: Smile, title: "Mood Tracking", body: "Five-emoji daily check-in. Syrin spots patterns: 'Your mood dips on Sundays — let's design a better Sunday.'" },
  { icon: Flame, title: "Streak Counter", body: "Gamified consistency. Watch your streak grow. The longer it gets, the harder it is to walk away from." },
  { icon: Dumbbell, title: "Honest Coaching", body: "Syrin challenges your excuses with respect. 'You committed to the gym Monday. It's Tuesday. What got in the way?'" },
  { icon: Brain, title: "Persistent Memory", body: "Goals from January? Syrin remembers. Patterns from last month? It noticed. Your AI coach with a long-term memory." },
];

export const Features = () => (
  <section id="features" className="py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <SectionHeader
        eyebrow="Features"
        title={
          <>
            Everything a $500/mo coach delivers
            <br />
            <span className="text-gradient">— for $10.</span>
          </>
        }
        subtitle="Full-stack life coaching, voice-native, available the moment you wake up."
      />

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              className="group relative rounded-2xl p-8 border border-border bg-card hover:-translate-y-1 transition-all duration-300 hover:border-primary/40 hover:shadow-glow-soft"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-gradient-primary group-hover:border-transparent transition-all">
                <Icon className="w-6 h-6 text-primary-glow group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);