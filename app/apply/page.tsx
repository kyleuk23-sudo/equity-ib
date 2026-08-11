import type { Metadata } from "next";
import { ApplicationSection } from "@/components/sections/ApplicationSection";
import { FAQ }                from "@/components/sections/FAQ";
import { BreadcrumbV6 } from "@/components/ui/BreadcrumbV6";
import { V6 } from "@/lib/designTokensV6";

export const metadata: Metadata = {
  title: "Become an Introducing Broker — Apply Now",
  description:
    "Apply to join the Equity IB Introducing Broker program. Earn up to $30 per traded lot with daily rebate settlements. Approval in under 24 hours.",
  alternates: { canonical: "https://equityib.uk/apply" },
  openGraph: {
    title:       "Apply to Become an IB Partner | Equity IB",
    description: "Start your Introducing Broker journey with Equity IB. Daily rebates, dedicated support, six tier levels up to $30 per lot.",
    url:         "https://equityib.uk/apply",
  },
};

const applySchema = {
  "@context": "https://schema.org",
  "@type":    "WebPage",
  "@id":      "https://equityib.uk/apply",
  name:       "Apply to Become an Equity IB Introducing Broker",
  description: "Application page for the Equity IB Introducing Broker partner program.",
  url:        "https://equityib.uk/apply",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",  item: "https://equityib.uk" },
      { "@type": "ListItem", position: 2, name: "Apply", item: "https://equityib.uk/apply" },
    ],
  },
};

export default function ApplyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(applySchema) }}
      />

      {/* Breadcrumb */}
      <div className="pt-32 pb-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ background: V6.bg }}>
        <BreadcrumbV6 items={[{ label: "Home", href: "/" }, { label: "Apply" }]} />
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold" style={{ color: V6.fgPrimary }}>Become an Introducing Broker</h1>
      </div>

      <ApplicationSection />
      <FAQ />
    </>
  );
}
