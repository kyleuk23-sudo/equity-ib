import type { Metadata } from "next";
import Link from "next/link";
import {
  ClipboardList, CheckCircle2, Link2, TrendingUp, Wallet, HelpCircle,
} from "lucide-react";
import { BreadcrumbV6 } from "@/components/ui/BreadcrumbV6";
import { ButtonV6 } from "@/components/ui/ButtonV6";
import { V6 } from "@/lib/designTokensV6";
import { MeshGradientBg } from "@/components/visual/MeshGradientBg";
import { SectionDivider } from "@/components/visual/SectionDivider";

export const metadata: Metadata = {
  title: "How To Become An Introducing Broker — Step-By-Step Guide",
  description:
    "A complete step-by-step guide to becoming an Introducing Broker: who it's for, how to choose a broker partner, the application process, and how rebates start flowing.",
  alternates: { canonical: "https://equityib.uk/how-to-become-an-introducing-broker" },
  openGraph: {
    title:       "How To Become An Introducing Broker | Equity IB",
    description: "Everything involved in becoming an Introducing Broker, from prerequisites through to your first rebate payment.",
    url:         "https://equityib.uk/how-to-become-an-introducing-broker",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type":    "HowTo",
  name:       "How To Become An Introducing Broker",
  description: "Step-by-step guide to becoming an Introducing Broker and earning rebates on referred client trading volume.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Assess your fit",       text: "Confirm you have an audience genuinely interested in trading before applying." },
    { "@type": "HowToStep", position: 2, name: "Choose a broker partner", text: "Evaluate rebate structure, regulation, payment reliability and support." },
    { "@type": "HowToStep", position: 3, name: "Apply online",          text: "Complete the IB application form — typically under 5 minutes." },
    { "@type": "HowToStep", position: 4, name: "Get approved",          text: "Most applications are reviewed and approved within 24 hours." },
    { "@type": "HowToStep", position: 5, name: "Get your tracking links", text: "Receive unique referral links and dashboard access." },
    { "@type": "HowToStep", position: 6, name: "Earn rebates",          text: "As referred clients trade, rebates accrue and settle on the broker's schedule." },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://equityib.uk" },
    { "@type": "ListItem", position: 2, name: "How To Become An Introducing Broker", item: "https://equityib.uk/how-to-become-an-introducing-broker" },
  ],
};

// Bronze -> Gold -> Champagne progression, matching HowItWorksTimeline.
const steps = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Assess whether it's a genuine fit",
    color: "#A17E30",
    body: "The IB model works best when you already have some level of trust with an audience interested in trading — a community, a following, a network of traders. Before applying anywhere, be honest about whether your audience actually trades, and how actively. A large but passive following will generate far less rebate volume than a small, genuinely engaged one. See what an Introducing Broker actually is if you want the full picture before deciding.",
  },
  {
    num: "02",
    icon: CheckCircle2,
    title: "Choose the right broker partner",
    color: "#A6832B",
    body: "This is the step most new IBs rush. The rebate rate alone tells you little — what matters is the full picture: regulation and client fund protection, trading conditions your referrals will actually experience, how reliably and how often rebates settle, and whether you'll get a real account manager or a support queue. Our guide to what makes a strong IB programme walks through the specific criteria worth evaluating.",
  },
  {
    num: "03",
    icon: Link2,
    title: "Complete the application",
    color: "#D4AF37",
    body: "Once you've chosen a partner, the application itself is usually short — name, contact details, an estimate of your audience's trading volume, and a brief description of your community or client base. With Equity IB, the form takes under five minutes, and there's no cost to apply.",
  },
  {
    num: "04",
    icon: TrendingUp,
    title: "Get approved and onboarded",
    color: "#DEC155",
    body: "Applications are typically reviewed within 24 hours. Once approved, you'll usually have a short onboarding conversation with your account manager to confirm your rebate agreement, discuss your audience and set expectations — this is also the point where broker-specific details are disclosed.",
  },
  {
    num: "05",
    icon: Wallet,
    title: "Get your tracking links and start referring",
    color: "#E6C76A",
    body: "You'll receive a unique referral link and access to a partner dashboard. From here, you can start sharing your link with your audience — there's typically no minimum volume required to get started, and every client who signs up through your link is attributed to your account automatically.",
  },
];

export default function HowToBecomeAnIntroducingBrokerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="pt-32 pb-16 relative overflow-hidden" style={{ background: V6.bg }}>
        <MeshGradientBg variant="hero" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <BreadcrumbV6
            items={[{ label: "Home", href: "/" }, { label: "How To Become An Introducing Broker" }]}
            className="mb-6"
          />

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] mb-5 leading-tight" style={{ color: V6.fgPrimary }}>
            How to become an{" "}
            <span style={{ color: V6.gold }}>Introducing Broker</span>
          </h1>
          <p className="leading-relaxed" style={{ color: V6.fgSecondary }}>
            Becoming an Introducing Broker doesn&apos;t require a licence, a large upfront investment, or
            financial services experience — but doing it well takes a bit more care than just signing up
            for the first programme you find. Here&apos;s the realistic, step-by-step process.
          </p>
        </div>
      </section>

      <SectionDivider />

      <section className="py-8 relative" style={{ background: V6.bg }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;
            return (
              <div key={step.num} className="flex gap-6 relative">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${step.color}18`, border: `1px solid ${step.color}40` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: step.color }} />
                  </div>
                  {!isLast && (
                    <div
                      className="w-px flex-1 my-2"
                      style={{ minHeight: 24, background: `linear-gradient(to bottom, ${step.color}50, ${steps[i + 1]?.color ?? step.color}50)` }}
                    />
                  )}
                </div>
                <div className={isLast ? "pb-2" : "pb-10"}>
                  <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: step.color }}>
                    Step {step.num}
                  </div>
                  <h2 className="text-lg font-bold mb-2" style={{ color: V6.fgPrimary }}>{step.title}</h2>
                  <p className="text-sm leading-relaxed" style={{ color: V6.fgSecondary }}>{step.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <SectionDivider />

      <section className="py-16 relative overflow-hidden" style={{ background: V6.bg }}>
        <MeshGradientBg variant="corner" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="card-v6 rounded-2xl p-6 mb-10 flex items-start gap-3">
            <HelpCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: V6.gold }} />
            <p className="text-sm leading-relaxed" style={{ color: V6.fgSecondary }}>
              Have specific questions about rebate tiers, payment methods or approval timelines? Our{" "}
              <Link href="/faq" className="underline underline-offset-2 transition-colors" style={{ color: V6.gold }}>FAQ</Link> covers the most common
              ones, or you can also model potential earnings with the{" "}
              <Link href="/ib-rebates" className="underline underline-offset-2 transition-colors" style={{ color: V6.gold }}>IB earnings calculator</Link>.
            </p>
          </div>

          <div className="card-v6 rounded-2xl p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: V6.fgPrimary }}>
              Ready to start the application?
            </h2>
            <p className="text-sm mb-7 max-w-lg mx-auto leading-relaxed" style={{ color: V6.fgSecondary }}>
              It&apos;s free to join, takes under five minutes, and most applications are reviewed within
              24 hours.
            </p>
            <ButtonV6
              href="/apply"
              data-track-event="cta"
              data-track-label="Apply Free Today"
              data-track-section="how_to_become_ib"
            >
              Apply Free Today
            </ButtonV6>
          </div>
        </div>
      </section>
    </>
  );
}
