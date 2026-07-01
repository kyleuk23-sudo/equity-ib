import type { Metadata } from "next";
import PartnersContent from "@/components/sections/PartnersContent";

export const metadata: Metadata = {
  title:       "IB Partner Programme — Earn Up To $30 Per Lot",
  description:
    "Join the Equity IB Introducing Broker partner programme. Six rebate tiers from Starter to Diamond. Earn up to $30 per traded lot with daily settlements and dedicated account management.",
  alternates:  { canonical: "https://equityib.uk/partners" },
  openGraph: {
    title:       "Equity IB Partner Programme | Daily Rebates Up To $30/Lot",
    description: "Six tier Introducing Broker programme with daily rebate settlements, dedicated account managers and up to $30 per lot at Diamond tier.",
    url:         "https://equityib.uk/partners",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type":    "WebPage",
  "@id":      "https://equityib.uk/partners",
  name:       "IB Partner Programme",
  description: "Equity IB's six-tier Introducing Broker partner programme.",
  url:        "https://equityib.uk/partners",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",     item: "https://equityib.uk" },
      { "@type": "ListItem", position: 2, name: "Partners", item: "https://equityib.uk/partners" },
    ],
  },
};

export default function PartnersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <PartnersContent />
    </>
  );
}
