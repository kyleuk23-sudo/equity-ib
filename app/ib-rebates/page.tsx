import type { Metadata } from "next";
import { TierTable }          from "@/components/sections/TierTable";
import { IBCalculator }       from "@/components/sections/IBCalculator";
import { ApplicationSection } from "@/components/sections/ApplicationSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IB Rebate Tiers — Earn $10–$30 Per Lot",
  description:
    "Explore all six Equity IB rebate tiers from Starter to Diamond. See exactly how much you can earn per lot at each volume level, plus use our interactive IB earnings calculator.",
  alternates: { canonical: "https://equityib.com/ib-rebates" },
  openGraph: {
    title:       "IB Rebate Tiers | $10–$30 Per Lot | Equity IB",
    description: "Six commission tiers for Introducing Brokers — Starter ($10/lot) to Diamond ($30/lot). Model your earnings with our interactive calculator.",
    url:         "https://equityib.com/ib-rebates",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type":    "WebPage",
  "@id":      "https://equityib.com/ib-rebates",
  name:       "IB Rebate Tiers — Earn $10–$30 Per Lot",
  description: "Equity IB six-tier rebate structure for Introducing Brokers.",
  url:        "https://equityib.com/ib-rebates",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",      item: "https://equityib.com" },
      { "@type": "ListItem", position: 2, name: "IB Rebates", item: "https://equityib.com/ib-rebates" },
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
      <div className="pt-32 pb-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs text-slate-500">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-300" aria-current="page">IB Rebates</li>
          </ol>
        </nav>
      </div>

      <TierTable />
      <IBCalculator />
      <ApplicationSection />
    </>
  );
}
