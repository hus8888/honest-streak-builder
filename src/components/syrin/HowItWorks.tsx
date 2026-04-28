import { MessageSquare, CalendarDays, Flame } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    n: "01",
    icon: MessageSquare,
    title: "Tell Syrin what's going on",
    body: "Voice or text. Just talk. Your goals, your day, your sticking points. Syrin listens — and asks the questions that matter.",
  },
  {
    n: "02",
    icon: CalendarDays,
    title: "Get your day, structured",
    body: "Syrin builds a color-coded visual timeline: Work, Health, Personal, Finance, Urgent. Check-ins are baked in.",
  },
  {
    n: "03",
    icon: Flame,
    title: "Build the streak",
    body: "Daily check-ins. Mood tracking. Pattern detection. Syrin remembers what you said yesterday, last week, last month.",
  },
];

export const HowItWorks = () => (
  <section id="how" className="py-24 lg:py-32 bg-background-secondary/30 border-y border-border/50">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <SectionHeader
        eyebrow="How it works"
        title={
          <>
            From "I'll start Monday"
            <br />
            to <span className="text-gradient">"I'm on day 42."</span>
          </>
        }
        subtitle="Three steps. Two minutes to set up. A different life on the other side."
      />

      <div className="mt-16 grid md:grid-cols-3 gap-8 relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        {steps.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.n} className="relative text-center">
              <div className="relative inline-flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-primary blur-xl opacity-50" />
                <div className="relative w-24 h-24 rounded-2xl bg-card border border-primary/30 flex items-center justify-center">
                  <Icon className="w-10 h-10 text-primary-glow" />
                </div>
              </div>
              <p className="mt-6 text-xs font-bold tracking-[0.2em] text-primary-glow">STEP {s.n}</p>
              <h3 className="mt-2 text-2xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed max-w-sm mx-auto">{s.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);