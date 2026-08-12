import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, BarChart3, Clock, Shield, Headphones, LineChart, ScrollText, CheckCircle2,
} from "lucide-react";
import { BreadcrumbV6 } from "@/components/ui/BreadcrumbV6";
import { ButtonV6 } from "@/components/ui/ButtonV6";
import { V6 } from "@/lib/designTokensV6";
import { MeshGradientBg } from "@/components/visual/MeshGradientBg";
import { IconMark } from "@/components/visual/IconMark";
import { SectionDivider } from "@/components/visual/SectionDivider";

export const metadata: Metadata = {
  title: "Introducing Broker Program — What to Look For & How Equity IB Delivers",
  description:
    "A practical guide to evaluating an Introducing Broker programme — rebate structure, payment reliability, broker regulation and support — and how Equity IB's programme measures up.",
  alternates: { canonical: "https://equityib.uk/introducing-broker-program" },
  openGraph: {
    title:       "Introducing Broker Program | Equity IB",
    description: "What separates a strong IB programme from a weak one — and how Equity IB's programme is built around each criterion.",
    url:         "https://equityib.uk/introducing-broker-program",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type":    "WebPage",
  "@id":      "https://equityib.uk/introducing-broker-program",
  name:       "Introducing Broker Program",
  description: "How to evaluate an Introducing Broker programme, and how Equity IB's programme is structured.",
  url:        "https://equityib.uk/introducing-broker-program",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",                       item: "https://equityib.uk" },
      { "@type": "ListItem", position: 2, name: "Introducing Broker Program", item: "https://equityib.uk/introducing-broker-program" },
    ],
  },
};

// Single-accent gold throughout, per the V6 design system -- differentiated
// by icon, not color.
const criteria = [
  {
    icon: BarChart3,
    title: "Rebate structure & tiers",
    ask: "Is the per-lot rate competitive, and does it improve as your volume grows?",
    answer: "Six tiers from Starter to Diamond, $10–$30 per lot, assessed monthly on rolling volume.",
    href: "/ib-rebates",
    linkLabel: "See the full tier breakdown",
  },
  {
    icon: Clock,
    title: "Payment reliability",
    ask: "How often are rebates actually settled — and how transparent is the process?",
    answer: "Daily settlement, no 30-day holds, full payment history visible in your dashboard at all times.",
    href: "/faq",
    linkLabel: "Read how payments work",
  },
  {
    icon: Shield,
    title: "Broker regulation & conditions",
    ask: "Is the underlying broker properly regulated, with fair trading conditions for your referrals?",
    answer: "Partnered exclusively with regulated, vetted broker infrastructure — details disclosed during onboarding.",
    href: "/why-pu-prime",
    linkLabel: "See our broker partner",
  },
  {
    icon: Headphones,
    title: "Account management & support",
    ask: "Do you get a named contact, or a generic support queue?",
    answer: "Every partner is assigned a dedicated account manager — not a rotating helpdesk.",
    href: "/why-equity-ib",
    linkLabel: "Why partners choose Equity IB",
  },
  {
    icon: LineChart,
    title: "Technology & reporting",
    ask: "Can you see your lot volume, rebate accrual and tier status in real time?",
    answer: "A live partner dashboard tracks volume, rebates and tier progress with full transparency.",
    href: "/ib-rebates",
    linkLabel: "Try the earnings calculator",
  },
  {
    icon: ScrollText,
    title: "Transparency & fair terms",
    ask: "Are the terms clear, or buried in fine print you'd need a lawyer to parse?",
    answer: "Plain-language IB terms, risk disclosures and a public legal centre — nothing hidden.",
    href: "/legal",
    linkLabel: "Read our legal centre",
  },
];

export default function IntroducingBrokerProgramPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <section className="pt-32 pb-16 relative overflow-hidden" style={{ background: V6.bg }}>
        <MeshGradientBg variant="hero" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <BreadcrumbV6
            items={[{ label: "Home", href: "/" }, { label: "Introducing Broker Program" }]}
            className="mb-6"
          />

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] mb-5 leading-tight" style={{ color: V6.fgPrimary }}>
            What makes a strong{" "}
            <span style={{ color: V6.gold }}>Introducing Broker program</span>
          </h1>
          <p className="leading-relaxed max-w-2xl" style={{ color: V6.fgSecondary }}>
            Not every IB programme is built the same way. The rebate rate advertised on a landing page
            tells you almost nothing about whether a programme will actually work for your business —
            what matters is the six factors below. Here&apos;s what to evaluate, and how Equity IB&apos;s
            programme is structured against each one.
          </p>
        </div>
      </section>

      <SectionDivider />

      <section className="py-12 relative overflow-hidden" style={{ background: V6.bg }}>
        <MeshGradientBg variant="left" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid sm:grid-cols-2 gap-5">
            {criteria.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="card-v6 rounded-2xl p-6 group">
                  <div className="mb-4">
                    <IconMark size={44}>
                      <Icon className="w-5 h-5" style={{ color: V6.gold }} />
                    </IconMark>
                  </div>
                  <h2 className="font-bold mb-1.5" style={{ color: V6.fgPrimary }}>{c.title}</h2>
                  <p className="text-xs italic mb-3 leading-relaxed" style={{ color: V6.fgMuted }}>{c.ask}</p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: V6.fgSecondary }}>{c.answer}</p>
                  <Link
                    href={c.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold hover:gap-2.5 transition-all"
                    style={{ color: V6.gold }}
                  >
                    {c.linkLabel} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-16 relative overflow-hidden" style={{ background: V6.bg }}>
        <MeshGradientBg variant="calm" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="card-v6 rounded-2xl p-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5" style={{ color: V6.success }} />
              <span className="text-sm font-semibold" style={{ color: V6.success }}>100% Free to Join</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: V6.fgPrimary }}>
              Ready to see how it works for your audience?
            </h2>
            <p className="text-sm mb-7 max-w-lg mx-auto leading-relaxed" style={{ color: V6.fgSecondary }}>
              Applications are reviewed within 24 hours, with no cost to join and no minimum volume
              required to get started.
            </p>
            <ButtonV6
              href="/apply"
              data-track-event="cta"
              data-track-label="Apply Free Today"
              data-track-section="introducing_broker_program"
            >
              Apply Free Today
            </ButtonV6>
            <p className="text-xs mt-5" style={{ color: V6.fgMuted }}>
              Want the full step-by-step process first?{" "}
              <Link href="/how-to-become-an-introducing-broker" className="underline underline-offset-2 transition-colors" style={{ color: V6.gold }}>
                Read how to become an Introducing Broker
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
