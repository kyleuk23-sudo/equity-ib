import type { Metadata } from "next";
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
import { FreeToJoin }          from "@/components/sections/FreeToJoin";

export const metadata: Metadata = {
  alternates: { canonical: "https://equityib.com" },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type":    "WebPage",
      "@id":      "https://equityib.com/#webpage",
      url:        "https://equityib.com",
      name:       "Equity IB — Earn Up To $30 Per Lot | Daily IB Rebates",
      description:
        "Join the Equity IB Introducing Broker program. Earn daily rebates of up to $30 per lot across six tier levels with dedicated support and premium broker technology.",
      isPartOf:   { "@id": "https://equityib.com/#website" },
      about:      { "@id": "https://equityib.com/#organization" },
      inLanguage: "en-US",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much can I earn as an Equity IB partner?",
          acceptedAnswer: { "@type": "Answer", text: "Rebates range from $10 per lot at the Starter tier up to $30 per lot at the Diamond tier. 500 lots/month at Gold ($20/lot) = $10,000/month. All figures are illustrative." },
        },
        {
          "@type": "Question",
          name: "When are IB rebates paid?",
          acceptedAnswer: { "@type": "Answer", text: "IB rebates are calculated and settled every trading day. You receive daily payments via bank wire, cryptocurrency (USDT, BTC, ETH), or local bank transfer." },
        },
        {
          "@type": "Question",
          name: "How do I become an Introducing Broker with Equity IB?",
          acceptedAnswer: { "@type": "Answer", text: "Complete the short application form — it takes under 5 minutes. Our team reviews all applications and responds within 24 hours. Most approvals happen the same day." },
        },
        {
          "@type": "Question",
          name: "What are the IB rebate tier levels?",
          acceptedAnswer: { "@type": "Answer", text: "Six tiers: Starter (0–99 lots, $10/lot), Bronze (100–249, $12/lot), Silver (250–499, $15/lot), Gold (500–999, $20/lot), Platinum (1,000–2,499, $25/lot), Diamond (2,500+, up to $30/lot)." },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <Hero />
      <ValueProposition />
      <WhyEquityIB />
      <FreeToJoin />
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
