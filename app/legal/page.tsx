import type { Metadata } from "next";
import { LegalHubContent } from "@/components/legal/LegalHubContent";

export const metadata: Metadata = {
  title: "Legal Centre — Equity IB",
  description:
    "All Equity IB legal documents including Privacy Policy, Terms & Conditions, Risk Disclosure, IB Programme Terms, Cookie Policy, AML Policy and more.",
};

export default function LegalCentrePage() {
  return <LegalHubContent />;
}
