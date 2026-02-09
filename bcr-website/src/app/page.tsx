import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { MarketsSection } from "@/components/MarketsSection";
import { PlatformSection } from "@/components/PlatformSection";
import { WhyTradeSection } from "@/components/WhyTradeSection";
import { NewsSection } from "@/components/NewsSection";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <MarketsSection />
      <PlatformSection />
      <WhyTradeSection />
      <NewsSection />
      <CTASection />
    </main>
  );
}
