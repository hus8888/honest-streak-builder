import { SectionHeader } from "./SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Is my data private?", a: "Yes. Conversations are encrypted at rest and in transit. We don't sell data. We don't train external models on your conversations. Full export and delete on demand. SOC 2 compliance in progress." },
  { q: "How is this different from ChatGPT?", a: "ChatGPT forgets you the moment you close the tab. Syrin remembers. ChatGPT agrees with you. Syrin pushes back. ChatGPT is general-purpose. Syrin is built for one job: making you actually do what you said you would." },
  { q: "Can I cancel anytime?", a: "Yes. One click in settings. No retention friction. Your data stays exportable for 90 days after." },
  { q: "Does it work offline?", a: "Text and timeline work offline. Voice and AI responses need internet (we use OpenAI and ElevenLabs in real time)." },
  { q: "What languages does it support?", a: "English fully. Spanish, French, German, Portuguese, and Mandarin in beta. More coming based on user demand." },
  { q: "Is the AI actually good or is this hype?", a: "It's GPT-4o under the hood with custom coaching prompts trained on real coaching frameworks, mood-correlated patterns, and a memory system that persists across conversations. Try it free for 5 messages — judge for yourself." },
  { q: "Will Syrin be too harsh?", a: "Syrin is direct, not mean. You set the tone in onboarding — 'gentle nudge', 'firm coach', or 'drill sergeant'. You can change it anytime." },
  { q: "Is it on the iOS / Android app stores?", a: "Currently a PWA — installs to your home screen like a native app, works on every device. Native iOS and Android wrapper apps shipping Q3 2026." },
];

export const FAQ = () => (
  <section id="faq" className="py-24 lg:py-32 bg-background-secondary/30 border-y border-border/50">
    <div className="max-w-3xl mx-auto px-6 lg:px-8">
      <SectionHeader
        eyebrow="FAQ"
        title={<>Questions worth <span className="text-gradient">answering.</span></>}
      />
      <Accordion type="single" collapsible className="mt-12 space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-xl bg-card px-6 data-[state=open]:border-primary/40 data-[state=open]:shadow-glow-soft transition-all">
            <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);