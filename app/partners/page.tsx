import type { Metadata } from "next";
import PartnersContent from "@/components/sections/PartnersContent";

export const metadata: Metadata = {
  title: "IB Rebate Programme — Earn Up To $30 Per Lot",
  description: "Join the Equity IB partner programme and earn daily IB rebates based on your clients' trading volume. Six rebate tiers from Starter to Diamond — up to $30 per lot.",
};

export default function PartnersPage() {
  return <PartnersContent />;
}
