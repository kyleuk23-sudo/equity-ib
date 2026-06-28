import type { Metadata } from "next";
import { MarketingHubContent } from "@/components/sections/MarketingHubContent";

export const metadata: Metadata = {
  title: "Marketing Hub — IB Resources, Templates & Tools",
  description:
    "Access a complete library of marketing resources, landing pages, email templates, social content, banners and guides for professional Introducing Brokers.",
};

export default function MarketingHubPage() {
  return <MarketingHubContent />;
}
