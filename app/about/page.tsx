import type { Metadata } from "next";
import AboutContent from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title:       "About Equity IB — Our Story & Mission",
  description:
    "Learn about Equity IB: our mission to help Introducing Brokers build long-term recurring rebate businesses through premium broker partnerships, transparent reporting and dedicated support.",
  alternates:  { canonical: "https://equityib.com/about" },
  openGraph: {
    title:       "About Equity IB — Our Story & Mission",
    description: "Building long-term recurring IB rebate businesses through premium broker partnerships and transparent, daily settlements.",
    url:         "https://equityib.com/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
