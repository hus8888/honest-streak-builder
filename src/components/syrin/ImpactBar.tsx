import { Infinity, Eye, Clock } from "lucide-react";

const pillars = [
  {
    icon: Infinity,
    title: "Memory that doesn't reset.",
    body: "Every commitment, every excuse, every win — kept in context. Coaches you against your own history, not a fresh tab.",
  },
  {
    icon: Eye,
    title: "Patterns you can't see.",
    body: "Sundays drag. Tuesdays you skip. Syrin spots the rhythms in your weeks and brings them up before they cost you a goal.",
  },
  {
    icon: Clock,
    title: "Always on, never pushy.",
    body: "Voice or text, day or night, on your terms. Quiet hours respected. Show up when it matters.",
  },
];

export const ImpactBar = () => (
  <section className="py-24 lg:py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-mesh opacity-[0.07] blur-3xl" />
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <div key={p.title} className="text-left">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary mb-4">
                <Icon className="w-5 h-5" strokeWidth={2} />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight leading-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed max-w-md">
                {p.body}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
