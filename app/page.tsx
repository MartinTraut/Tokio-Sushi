import { HeroSection } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { BestsellersSection } from "@/components/sections/bestsellers";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { LocationSection } from "@/components/sections/location";
import { CTASection } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <HowItWorksSection />
      <LocationSection />
      <CTASection />
    </>
  );
}
