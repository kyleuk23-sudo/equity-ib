import { Hero } from "@/components/sections/Hero";
import { ActivityTicker } from "@/components/sections/ActivityTicker";
import { TierTable } from "@/components/sections/TierTable";
import { WhyEquityIB } from "@/components/sections/WhyEquityIB";
import { RevenueEngine } from "@/components/sections/RevenueEngine";
import { PaymentMethods } from "@/components/sections/PaymentMethods";
import { SuccessMetrics } from "@/components/sections/SuccessMetrics";
import { Benefits } from "@/components/sections/Benefits";
import { Testimonials } from "@/components/sections/Testimonials";
import { IBPortal } from "@/components/sections/IBPortal";
import { XAUUSDSection } from "@/components/sections/XAUUSDSection";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ActivityTicker />
<TierTable />
      <WhyEquityIB />
      <PaymentMethods />
      <RevenueEngine />
      <SuccessMetrics />
      <Benefits />
      <Testimonials />
      <IBPortal />
      <XAUUSDSection />
      <FAQ />
      <CTASection />
    </>
  );
}
