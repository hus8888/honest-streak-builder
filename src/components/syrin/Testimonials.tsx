import { SectionHeader } from "./SectionHeader";

const testimonials = [
  { name: "Maya R.", role: "Founder, San Francisco", initials: "MR", body: "I tried Replika. I tried Noom. I tried a $300/mo therapist. Syrin is the first one that actually changed what I did, not just how I felt." },
  { name: "Daniel K.", role: "Engineer, Toronto", initials: "DK", body: "I have a 67-day gym streak for the first time in my life. Syrin called me out at day 4 when I was about to quit. I didn't." },
  { name: "Aisha P.", role: "PhD student, London", initials: "AP", body: "It's like having a brutally honest best friend who happens to remember every single thing you've ever told them. I'm hooked." },
];

export const Testimonials = () => (
  <section className="py-24 lg:py-32 bg-background-secondary/30 border-y border-border/50">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <SectionHeader
        eyebrow="Testimonials"
        title={<>People who finally <span className="text-gradient">followed through.</span></>}
      />
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-2xl p-8 border border-border bg-card">
            <p className="text-warning text-sm mb-4">★★★★★</p>
            <p className="text-foreground/90 leading-relaxed">"{t.body}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                {t.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);