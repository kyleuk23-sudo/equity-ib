import type { Metadata } from "next";
import { WhyPUPrime }         from "@/components/sections/WhyPUPrime";
import { ApplicationSection } from "@/components/sections/ApplicationSection";
import { BreadcrumbV6 } from "@/components/ui/BreadcrumbV6";
import { V6 } from "@/lib/designTokensV6";

export const metadata: Metadata = {
  title: "Why PU Prime — Premium Broker Technology for Your Clients",
  description:
    "Learn why Equity IB partners exclusively with PU Prime: regulated infrastructure, fast execution, global market access, professional client portal and reliable daily settlements.",
  alternates: { canonical: "https://equityib.uk/why-pu-prime" },
  openGraph: {
    title:       "Why PU Prime | Equity IB Broker Partner",
    description: "Regulated broker infrastructure, fast execution and global market access for your IB clients through PU Prime.",
    url:         "https://equityib.uk/why-pu-prime",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type":    "WebPage",
  "@id":      "https://equityib.uk/why-pu-prime",
  name:       "Why PU Prime — Broker Technology",
  description: "Why Equity IB partners with PU Prime for premium broker technology.",
  url:        "https://equityib.uk/why-pu-prime",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",         item: "https://equityib.uk" },
      { "@type": "ListItem", position: 2, name: "Why PU Prime", item: "https://equityib.uk/why-pu-prime" },
    ],
  },
};

export default function WhyPUPrimePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Breadcrumb */}
      <div className="pt-32 pb-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ background: V6.bg }}>
        <BreadcrumbV6 items={[{ label: "Home", href: "/" }, { label: "Why PU Prime" }]} />
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold" style={{ color: V6.fgPrimary }}>Why PU Prime</h1>
      </div>

      <WhyPUPrime />
      <ApplicationSection />
    </>
  );
}
