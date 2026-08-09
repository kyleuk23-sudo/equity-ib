import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, BarChart3, Clock, Shield, Headphones, LineChart, ScrollText, CheckCircle2,
} from "lucide-react";

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

const criteria = [
  {
    icon: BarChart3,
    title: "Rebate structure & tiers",
    ask: "Is the per-lot rate competitive, and does it improve as your volume grows?",
    answer: "Six tiers from Starter to Diamond, $10–$30 per lot, assessed monthly on rolling volume.",
    color: "#C8952A",
    href: "/ib-rebates",
    linkLabel: "See the full tier breakdown",
  },
  {
    icon: Clock,
    title: "Payment reliability",
    ask: "How often are rebates actually settled — and how transparent is the process?",
    answer: "Daily settlement, no 30-day holds, full payment history visible in your dashboard at all times.",
    color: "#34D399",
    href: "/faq",
    linkLabel: "Read how payments work",
  },
  {
    icon: Shield,
    title: "Broker regulation & conditions",
    ask: "Is the underlying broker properly regulated, with fair trading conditions for your referrals?",
    answer: "Partnered exclusively with regulated, vetted broker infrastructure — details disclosed during onboarding.",
    color: "#A78BFA",
    href: "/why-pu-prime",
    linkLabel: "See our broker partner",
  },
  {
    icon: Headphones,
    title: "Account management & support",
    ask: "Do you get a named contact, or a generic support queue?",
    answer: "Every partner is assigned a dedicated account manager — not a rotating helpdesk.",
    color: "#818CF8",
    href: "/why-equity-ib",
    linkLabel: "Why partners choose Equity IB",
  },
  {
    icon: LineChart,
    title: "Technology & reporting",
    ask: "Can you see your lot volume, rebate accrual and tier status in real time?",
    answer: "A live partner dashboard tracks volume, rebates and tier progress with full transparency.",
    color: "#F5C842",
    href: "/ib-rebates",
    linkLabel: "Try the earnings calculator",
  },
  {
    icon: ScrollText,
    title: "Transparency & fair terms",
    ask: "Are the terms clear, or buried in fine print you'd need a lawyer to parse?",
    answer: "Plain-language IB terms, risk disclosures and a public legal centre — nothing hidden.",
    color: "#34D399",
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

      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-hero opacity-40 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-300" aria-current="page">Introducing Broker Program</li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 leading-tight">
            What Makes A Strong{" "}
            <span className="gradient-text">Introducing Broker Program</span>
          </h1>
          <p className="text-slate-400 leading-relaxed max-w-2xl">
            Not every IB programme is built the same way. The rebate rate advertised on a landing page
            tells you almost nothing about whether a programme will actually work for your business —
            what matters is the six factors below. Here&apos;s what to evaluate, and how Equity IB&apos;s
            programme is structured against each one.
          </p>
        </div>
      </section>

      <section className="py-12 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-5">
            {criteria.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="glass rounded-2xl p-6 border border-white/[0.06] hover:border-white/[0.12] transition-all"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${c.color}18` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: c.color }} />
                  </div>
                  <h2 className="font-bold text-white mb-1.5">{c.title}</h2>
                  <p className="text-xs text-slate-400 italic mb-3 leading-relaxed">{c.ask}</p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">{c.answer}</p>
                  <Link
                    href={c.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold hover:gap-2.5 transition-all"
                    style={{ color: c.color }}
                  >
                    {c.linkLabel} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-strong rounded-3xl p-10 border border-white/[0.08]">
            <div className="flex items-center justify-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold text-accent">100% Free to Join</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Ready to see how it works for your audience?
            </h2>
            <p className="text-slate-400 text-sm mb-7 max-w-lg mx-auto leading-relaxed">
              Applications are reviewed within 24 hours, with no cost to join and no minimum volume
              required to get started.
            </p>
            <Link
              href="/apply"
              data-track-event="cta"
              data-track-label="Apply Free Today"
              data-track-section="introducing_broker_program"
              className="btn-glow inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl text-sm transition-all hover:opacity-90"
            >
              Apply Free Today
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-xs text-slate-400 mt-5">
              Want the full step-by-step process first?{" "}
              <Link href="/how-to-become-an-introducing-broker" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">
                Read how to become an Introducing Broker
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
