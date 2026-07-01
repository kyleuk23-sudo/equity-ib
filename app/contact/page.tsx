import type { Metadata } from "next";
import ContactContent from "@/components/sections/ContactContent";

export const metadata: Metadata = {
  title:       "Contact — Speak to Our IB Partner Team",
  description:
    "Get in touch with the Equity IB team. Apply to become an Introducing Broker, ask questions about rebate tiers, or schedule a call with your dedicated account manager.",
  alternates:  { canonical: "https://equityib.uk/contact" },
  openGraph: {
    title:       "Contact Equity IB — IB Partner Enquiries",
    description: "Reach out to our IB team for applications, rebate questions and partnership enquiries.",
    url:         "https://equityib.uk/contact",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type":    "ContactPage",
  "@id":      "https://equityib.uk/contact",
  name:       "Contact Equity IB",
  description: "Contact page for Equity IB Introducing Broker programme enquiries.",
  url:        "https://equityib.uk/contact",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",    item: "https://equityib.uk" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://equityib.uk/contact" },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactContent />
    </>
  );
}
