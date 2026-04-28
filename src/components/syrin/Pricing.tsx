import { useState } from "react";
import { Check, X, Shield } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type Tier = {
  name: string;
  monthly: number;
  yearly: number;
  yearlyTotal?: number;
  features: { label: string; included: boolean }[];
  cta: string;
  popular?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Free",
    monthly: 0,
    yearly: 0,
    features: [
      { label: "5 text messages per day", included: true },
      { label: "Basic mood tracking", included: true },
      { label: "Daily timeline", included: true },
      { label: "Voice conversations", included: false },
      { label: "Push notifications", included: false },
      { label: "Persistent memory (forever)", included: false },
    ],
    cta: "Start free",
  },
  {
    name: "Pro",
    monthly: 9.99,
    yearly: 6.58,
    yearlyTotal: 79,
    popular: true,
    features: [
      { label: "Unlimited text + voice", included: true },
      { label: "Persistent memory (forever)", included: true },
      { label: "3 push check-ins/day", included: true },
      { label: "Pattern detection", included: true },
      { label: "Progress dashboard", included: true },
      { label: "All 8 coaching capabilities", included: true },
    ],
    cta: "Get Pro",
  },
  {
    name: "Elite",
    monthly: 24.99,
    yearly: 16.58,
    yearlyTotal: 199,
    features: [
      { label: "Everything in Pro", included: true },
      { label: "Weekly deep-dive reports", included: true },
      { label: "Custom coaching plans", included: true },
      { label: "Priority voice (lower latency)", included: true },
      { label: "Conversation history export", included: true },
      { label: "Calendar + fitness integrations", included: true },
    ],
    cta: "Go Elite",
  },
];

export const Pricing = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Pricing"
          title={<>Start free. <span className="text-gradient">Stay forever.</span></>}
          subtitle="Cancel anytime. No credit card required for the free plan."
        />

        {/* Toggle */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1 rounded-full glass">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                !annual ? "bg-gradient-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                annual ? "bg-gradient-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              Annual
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${annual ? "bg-white/20" : "bg-primary/20 text-primary-glow"}`}>
                Save 33%
              </span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((t) => {
            const price = annual ? t.yearly : t.monthly;
            return (
              <div
                key={t.name}
                className={`relative rounded-2xl p-8 border ${
                  t.popular
                    ? "border-primary/50 bg-card shadow-glow-soft"
                    : "border-border bg-card"
                }`}
              >
                {t.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-primary text-[10px] uppercase tracking-wider font-bold text-primary-foreground whitespace-nowrap">
                    Most popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-foreground">{t.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-foreground">
                    ${price === 0 ? "0" : price.toFixed(2)}
                  </span>
                  <span className="text-muted-foreground">/{price === 0 ? "forever" : "mo"}</span>
                </div>
                {annual && t.yearlyTotal && (
                  <p className="mt-1 text-xs text-muted-foreground">Billed ${t.yearlyTotal}/year</p>
                )}
                {!annual && t.monthly === 0 && <p className="mt-1 text-xs text-muted-foreground">No card needed</p>}

                <button
                  className={`mt-6 w-full py-3 rounded-xl font-semibold transition-all ${
                    t.popular
                      ? "bg-gradient-primary text-primary-foreground shadow-glow hover:scale-[1.02]"
                      : "border border-border text-foreground hover:bg-secondary"
                  }`}
                >
                  {t.cta} →
                </button>

                <ul className="mt-8 space-y-3">
                  {t.features.map((f) => (
                    <li key={f.label} className="flex items-start gap-3 text-sm">
                      {f.included ? (
                        <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground/50 shrink-0 mt-0.5" />
                      )}
                      <span className={f.included ? "text-foreground/90" : "text-muted-foreground/60 line-through"}>
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground">
            <Shield className="w-4 h-4 text-primary-glow" />
            30-day money-back guarantee. No questions asked.
          </div>
        </div>
      </div>
    </section>
  );
};