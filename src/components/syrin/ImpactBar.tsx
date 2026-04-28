const stats = [
  { value: "42", suffix: " days", label: "Average streak length for active users" },
  { value: "3.2", suffix: "×", label: "More goal completion vs. journaling alone" },
  { value: "$0.30", suffix: "/day", label: "Pro plan cost vs. $25/day for a human coach" },
  { value: "96", suffix: "%", label: "Say Syrin holds them more accountable than any app" },
];

export const ImpactBar = () => (
  <section className="py-24 lg:py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-mesh opacity-10 blur-3xl" />
    <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gradient">
              {s.value}
              <span className="text-foreground/80">{s.suffix}</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-[200px] mx-auto leading-snug">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);