import type { Metadata } from "next";
import { TierTable }          from "@/components/sections/TierTable";
import { IBCalculator }       from "@/components/sections/IBCalculator";
import { ApplicationSection } from "@/components/sections/ApplicationSection";
import { BreadcrumbV6 } from "@/components/ui/BreadcrumbV6";
import { V6 } from "@/lib/designTokensV6";

export const metadata: Metadata = {
  title: "IB Rebate Tiers — Earn $10–$30 Per Lot",
  description:
    "Explore all six Equity IB rebate tiers from Starter to Diamond. See exactly how much you can earn per lot at each volume level, plus use our interactive IB earnings calculator.",
  alternates: { canonical: "https://equityib.uk/ib-rebates" },
  openGraph: {
    title:       "IB Rebate Tiers | $10–$30 Per Lot | Equity IB",
    description: "Six commission tiers for Introducing Brokers — Starter ($10/lot) to Diamond ($30/lot). Model your earnings with our interactive calculator.",
    url:         "https://equityib.uk/ib-rebates",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type":    "WebPage",
  "@id":      "https://equityib.uk/ib-rebates",
  name:       "IB Rebate Tiers — Earn $10–$30 Per Lot",
  description: "Equity IB six-tier rebate structure for Introducing Brokers.",
  url:        "https://equityib.uk/ib-rebates",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",      item: "https://equityib.uk" },
      { "@type": "ListItem", position: 2, name: "IB Rebates", item: "https://equityib.uk/ib-rebates" },
    ],
  },
};

export default function IBRebatesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Breadcrumb */}
      <div className="pt-32 pb-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ background: V6.bg }}>
        <BreadcrumbV6 items={[{ label: "Home", href: "/" }, { label: "IB Rebates" }]} />
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold" style={{ color: V6.fgPrimary }}>IB Rebate Tiers — Earn $10 to $30 Per Lot</h1>
      </div>

      <TierTable />
      <IBCalculator />
      <ApplicationSection />
    </>
  );
}
