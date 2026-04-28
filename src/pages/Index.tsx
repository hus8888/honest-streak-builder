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
        <Hero />
        <SocialProof />
        <Comparison />
        <HowItWorks />
        <Features />
        <ImpactBar />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
