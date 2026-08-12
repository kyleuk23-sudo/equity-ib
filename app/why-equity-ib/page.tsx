import type { Metadata } from "next";
import { WhyEquityIB }       from "@/components/sections/WhyEquityIB";
import { ValueProposition }  from "@/components/sections/ValueProposition";
import { ApplicationSection } from "@/components/sections/ApplicationSection";
import { BreadcrumbV6 } from "@/components/ui/BreadcrumbV6";
import { V6 } from "@/lib/designTokensV6";
import { MeshGradientBg } from "@/components/visual/MeshGradientBg";

export const metadata: Metadata = {
  title: "Why Choose Equity IB — 12 Reasons to Partner With Us",
  description:
    "Discover why professional Introducing Brokers choose Equity IB: competitive rebate tiers, daily payments, dedicated account managers, global reach, transparent reporting and long-term partnership.",
  alternates: { canonical: "https://equityib.uk/why-equity-ib" },
  openGraph: {
    title:       "Why Choose Equity IB | Partner Benefits",
    description: "12 reasons why serious Introducing Brokers choose Equity IB — daily rebates, dedicated managers, transparent reporting and more.",
    url:         "https://equityib.uk/why-equity-ib",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type":    "WebPage",
  "@id":      "https://equityib.uk/why-equity-ib",
  name:       "Why Choose Equity IB",
  description: "12 reasons professional Introducing Brokers partner with Equity IB.",
  url:        "https://equityib.uk/why-equity-ib",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",          item: "https://equityib.uk" },
      { "@type": "ListItem", position: 2, name: "Why Equity IB", item: "https://equityib.uk/why-equity-ib" },
    ],
  },
};

export default function WhyEquityIBPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Breadcrumb */}
      <div className="pt-32 pb-0 relative overflow-hidden" style={{ background: V6.bg }}>
        <MeshGradientBg variant="hero" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <BreadcrumbV6 items={[{ label: "Home", href: "/" }, { label: "Why Equity IB" }]} />
          <h1 className="mt-4 text-2xl sm:text-3xl font-bold" style={{ color: V6.fgPrimary }}>Why Choose Equity IB</h1>
        </div>
      </div>

      <ValueProposition />
      <WhyEquityIB />
      <ApplicationSection />
    </>
  );
}
