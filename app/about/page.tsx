import type { Metadata } from "next";
import AboutContent from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title:       "About Equity IB — Our Story & Mission",
  description:
    "Learn about Equity IB: our mission to help Introducing Brokers build long-term recurring rebate businesses through premium broker partnerships, transparent reporting and dedicated support.",
  alternates:  { canonical: "https://equityib.uk/about" },
  openGraph: {
    title:       "About Equity IB — Our Story & Mission",
    description: "Building long-term recurring IB rebate businesses through premium broker partnerships and transparent, daily settlements.",
    url:         "https://equityib.uk/about",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type":    "WebPage",
  "@id":      "https://equityib.uk/about",
  name:       "About Equity IB",
  description: "Equity IB's mission, story and approach to Introducing Broker partnerships.",
  url:        "https://equityib.uk/about",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",  item: "https://equityib.uk" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://equityib.uk/about" },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <AboutContent />
    </>
  );
}
