import type { Metadata } from "next";
import ContactContent from "@/components/sections/ContactContent";

export const metadata: Metadata = {
  title: "Contact & Apply",
  description: "Apply to become an Equity IB partner, schedule a call, or get in touch with our partner team.",
};

export default function ContactPage() {
  return <ContactContent />;
}
