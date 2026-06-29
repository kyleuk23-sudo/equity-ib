import type { Metadata } from "next";
import { LegalHubContent } from "@/components/legal/LegalHubContent";

export const metadata: Metadata = {
  title:       "Legal Centre",
  description:
    "All Equity IB legal documents: Privacy Policy, Terms & Conditions, Risk Disclosure, IB Programme Terms, Cookie Policy, AML Policy and Contact & Complaints.",
  alternates:  { canonical: "https://equityib.com/legal" },
  openGraph: {
    title:       "Legal Centre | Equity IB",
    description: "Privacy Policy, Terms & Conditions, Risk Disclosure and all other Equity IB legal documents.",
    url:         "https://equityib.com/legal",
  },
  robots:      { index: true, follow: true },
};

export default function LegalCentrePage() {
  return <LegalHubContent />;
}
