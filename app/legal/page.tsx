import type { Metadata } from "next";
import { LegalHubContent } from "@/components/legal/LegalHubContent";

export const metadata: Metadata = {
  title:       "Legal Centre",
  description:
    "All Equity IB legal documents: Privacy Policy, Terms & Conditions, Risk Disclosure, IB Programme Terms, Cookie Policy, AML Policy and Contact & Complaints.",
  alternates:  { canonical: "https://equityib.uk/legal" },
  openGraph: {
    title:       "Legal Centre | Equity IB",
    description: "Privacy Policy, Terms & Conditions, Risk Disclosure and all other Equity IB legal documents.",
    url:         "https://equityib.uk/legal",
  },
  robots:      { index: true, follow: true },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type":    "WebPage",
  "@id":      "https://equityib.uk/legal",
  name:       "Legal Centre",
  description: "All Equity IB legal documents in one place.",
  url:        "https://equityib.uk/legal",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",  item: "https://equityib.uk" },
      { "@type": "ListItem", position: 2, name: "Legal", item: "https://equityib.uk/legal" },
    ],
  },
};

export default function LegalCentrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <LegalHubContent />
    </>
  );
}
