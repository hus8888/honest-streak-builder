import { Navbar } from "@/components/syrin/Navbar";
import { Hero } from "@/components/syrin/Hero";
import { SocialProof } from "@/components/syrin/SocialProof";
import { Comparison } from "@/components/syrin/Comparison";
import { HowItWorks } from "@/components/syrin/HowItWorks";
import { Features } from "@/components/syrin/Features";
import { ImpactBar } from "@/components/syrin/ImpactBar";
import { Testimonials } from "@/components/syrin/Testimonials";
import { Pricing } from "@/components/syrin/Pricing";
import { FAQ } from "@/components/syrin/FAQ";
import { FinalCTA } from "@/components/syrin/FinalCTA";
import { Footer } from "@/components/syrin/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <section id="top" aria-label="Hero">
          <Hero />
        </section>
        <SocialProof />
        <section id="comparison" aria-label="Why Syrin">
          <Comparison />
        </section>
        <section id="how-it-works" aria-label="How it works">
          <HowItWorks />
        </section>
        <section id="features" aria-label="Features">
          <Features />
        </section>
        <ImpactBar />
        <section id="testimonials" aria-label="Testimonials">
          <Testimonials />
        </section>
        <section id="pricing" aria-label="Pricing">
          <Pricing />
        </section>
        <section id="faq" aria-label="Frequently asked questions">
          <FAQ />
        </section>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
