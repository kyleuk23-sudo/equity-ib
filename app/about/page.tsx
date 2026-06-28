import type { Metadata } from "next";
import { motion } from "framer-motion";
import { CTASection } from "@/components/sections/CTASection";
import AboutContent from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description: "The story, mission, and vision behind Equity IB — the global partner network for serious introducing brokers.",
};

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <CTASection />
    </>
  );
}
