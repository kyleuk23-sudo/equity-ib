import type { Metadata } from "next";
import { WhyEquityIB }       from "@/components/sections/WhyEquityIB";
import { ValueProposition }  from "@/components/sections/ValueProposition";
import { ApplicationSection } from "@/components/sections/ApplicationSection";
import Link from "next/link";

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
      <div className="pt-32 pb-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs text-slate-400">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-300" aria-current="page">Why Equity IB</li>
          </ol>
        </nav>
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-white">Why Choose Equity IB</h1>
      </div>

      <ValueProposition />
      <WhyEquityIB />
      <ApplicationSection />
    </>
  );
}
