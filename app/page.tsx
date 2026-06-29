import { Hero }                from "@/components/sections/Hero";
import { ValueProposition }    from "@/components/sections/ValueProposition";
import { WhyEquityIB }         from "@/components/sections/WhyEquityIB";
import { TierTable }           from "@/components/sections/TierTable";
import { IBCalculator }        from "@/components/sections/IBCalculator";
import { HowItWorksTimeline }  from "@/components/sections/HowItWorksTimeline";
import { WhyPUPrime }          from "@/components/sections/WhyPUPrime";
import { SuccessMetrics }      from "@/components/sections/SuccessMetrics";
import { Testimonials }        from "@/components/sections/Testimonials";
import { ApplicationSection }  from "@/components/sections/ApplicationSection";
import { FAQ }                 from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <WhyEquityIB />
      <TierTable />
      <IBCalculator />
      <HowItWorksTimeline />
      <WhyPUPrime />
      <SuccessMetrics />
      <Testimonials />
      <ApplicationSection />
      <FAQ />
    </>
  );
}
