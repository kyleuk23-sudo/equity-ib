import type { Metadata } from "next";
import { WhyEquityIB }       from "@/components/sections/WhyEquityIB";
import { ValueProposition }  from "@/components/sections/ValueProposition";
import { ApplicationSection } from "@/components/sections/ApplicationSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Choose Equity IB — 12 Reasons to Partner With Us",
  description:
    "Discover why professional Introducing Brokers choose Equity IB: competitive rebate tiers, daily payments, dedicated account managers, global reach, transparent reporting and long-term partnership.",
  alternates: { canonical: "https://equityib.com/why-equity-ib" },
  openGraph: {
    title:       "Why Choose Equity IB | Partner Benefits",
    description: "12 reasons why serious Introducing Brokers choose Equity IB — daily rebates, dedicated managers, transparent reporting and more.",
    url:         "https://equityib.com/why-equity-ib",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type":    "WebPage",
  "@id":      "https://equityib.com/why-equity-ib",
  name:       "Why Choose Equity IB",
  description: "12 reasons professional Introducing Brokers partner with Equity IB.",
  url:        "https://equityib.com/why-equity-ib",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",          item: "https://equityib.com" },
      { "@type": "ListItem", position: 2, name: "Why Equity IB", item: "https://equityib.com/why-equity-ib" },
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
      <div className="pt-32 pb-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs text-slate-500">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-300" aria-current="page">Why Equity IB</li>
          </ol>
        </nav>
      </div>

      <ValueProposition />
      <WhyEquityIB />
      <ApplicationSection />
    </>
  );
}
