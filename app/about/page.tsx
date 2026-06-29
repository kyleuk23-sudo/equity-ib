import type { Metadata } from "next";
import AboutContent from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description: "The story, mission, and vision behind Equity IB — the global partner network for serious introducing brokers.",
};

export default function AboutPage() {
  return <AboutContent />;
}
