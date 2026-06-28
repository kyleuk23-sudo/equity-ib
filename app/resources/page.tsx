import type { Metadata } from "next";
import ResourcesContent from "@/components/sections/ResourcesContent";

export const metadata: Metadata = {
  title: "Resources & IB Academy",
  description: "Free guides, marketing kits, and training for Equity IB partners. Everything you need to grow your introducing broker business.",
};

export default function ResourcesPage() {
  return <ResourcesContent />;
}
