import type { Metadata } from "next";
import { WhyPUPrime }         from "@/components/sections/WhyPUPrime";
import { ApplicationSection } from "@/components/sections/ApplicationSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why PU Prime — Premium Broker Technology for Your Clients",
  description:
    "Learn why Equity IB partners exclusively with PU Prime: regulated infrastructure, fast execution, global market access, professional client portal and reliable daily settlements.",
  alternates: { canonical: "https://equityib.com/why-pu-prime" },
  openGraph: {
    title:       "Why PU Prime | Equity IB Broker Partner",
    description: "Regulated broker infrastructure, fast execution and global market access for your IB clients through PU Prime.",
    url:         "https://equityib.com/why-pu-prime",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type":    "WebPage",
  "@id":      "https://equityib.com/why-pu-prime",
  name:       "Why PU Prime — Broker Technology",
  description: "Why Equity IB partners with PU Prime for premium broker technology.",
  url:        "https://equityib.com/why-pu-prime",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",         item: "https://equityib.com" },
      { "@type": "ListItem", position: 2, name: "Why PU Prime", item: "https://equityib.com/why-pu-prime" },
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
      <div className="pt-32 pb-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs text-slate-500">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-300" aria-current="page">Why PU Prime</li>
          </ol>
        </nav>
      </div>

      <WhyPUPrime />
      <ApplicationSection />
    </>
  );
}
