import type { Metadata } from "next";
import { FAQ }              from "@/components/sections/FAQ";
import { ApplicationSection } from "@/components/sections/ApplicationSection";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ — Introducing Broker Questions Answered",
  description:
    "Answers to the most common questions about the Equity IB partner program: rebate tiers, payment methods, approval timelines, and how to become an Introducing Broker.",
  alternates: { canonical: "https://equityib.uk/faq" },
  openGraph: {
    title:       "IB Partner FAQ | Equity IB",
    description: "Everything you need to know about joining the Equity IB Introducing Broker program — tiers, rebates, payments and more.",
    url:         "https://equityib.uk/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type":    "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name:    "How much can I earn as an Equity IB partner?",
      acceptedAnswer: { "@type": "Answer", text: "Your income depends on how many lots your referred clients trade each month. Rebates range from $10 per lot at the Starter tier up to $30 per lot at the Diamond tier. For example, 500 lots per month at the Gold tier ($20/lot) would generate $10,000 per month. All figures are illustrative and not a guarantee of future income." },
    },
    {
      "@type": "Question",
      name:    "What determines my rebate tier?",
      acceptedAnswer: { "@type": "Answer", text: "Your tier is determined by your total qualifying monthly trading volume across all referred clients. Tiers: Starter (0–99 lots), Bronze (100–249), Silver (250–499), Gold (500–999), Platinum (1,000–2,499), Diamond (2,500+ lots). Tiers are assessed monthly." },
    },
    {
      "@type": "Question",
      name:    "Does it cost anything to join Equity IB?",
      acceptedAnswer: { "@type": "Answer", text: "No. Joining the Equity IB Introducing Broker Programme is completely free — no registration fees, membership costs or subscription charges. Once approved, you can begin referring clients under the applicable broker and IB terms." },
    },
    {
      "@type": "Question",
      name:    "Can my rebate rate increase over time?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. As your referred clients generate more monthly volume, you automatically progress into higher tiers with higher rebate rates. At the Diamond tier, highest-performing IBs benefit from bespoke partnership structures." },
    },
    {
      "@type": "Question",
      name:    "When are rebates paid?",
      acceptedAnswer: { "@type": "Answer", text: "IB rebates are calculated and settled every trading day. You receive daily rebate payments via bank wire, cryptocurrency (USDT ERC20/TRC20, BTC, ETH), or local bank transfer where available." },
    },
    {
      "@type": "Question",
      name:    "How do I withdraw my IB rebates?",
      acceptedAnswer: { "@type": "Answer", text: "Approved IBs request withdrawals through the broker's secure client portal. Your complete payment history and rebate activity is visible in the portal at all times." },
    },
    {
      "@type": "Question",
      name:    "Which payment methods are available?",
      acceptedAnswer: { "@type": "Answer", text: "Supported methods may include international bank transfer, local bank transfer, USDT (TRC20), USDT (ERC20), Bitcoin (BTC) and Ethereum (ETH), depending on your location and account." },
    },
    {
      "@type": "Question",
      name:    "Which brokers do you partner with?",
      acceptedAnswer: { "@type": "Answer", text: "We work exclusively with regulated, vetted broker partners meeting our standards for regulatory standing, trading conditions, withdrawal reliability, and client treatment. Specific broker names are disclosed during onboarding." },
    },
    {
      "@type": "Question",
      name:    "What markets and instruments can my referred clients trade?",
      acceptedAnswer: { "@type": "Answer", text: "Clients you refer can trade major and minor forex pairs, gold (XAUUSD) and other precious metals, indices, commodities and CFDs on global equities. Wider market access tends to generate more trading volume across different market conditions, supporting steadier rebate income." },
    },
    {
      "@type": "Question",
      name:    "What is trade execution quality and why does it matter?",
      acceptedAnswer: { "@type": "Answer", text: "Execution quality is how quickly and accurately a broker fills an order at the requested price. Deep liquidity, low-latency infrastructure and tight spreads mean less slippage and a more consistent trading experience — which supports client retention and your recurring rebate income." },
    },
    {
      "@type": "Question",
      name:    "How does Equity IB think about broker risk and client protection?",
      acceptedAnswer: { "@type": "Answer", text: "We only partner with regulated brokers that meet defined standards for capital adequacy, segregated client funds and transparent trading conditions, reducing counterparty risk for the clients you refer." },
    },
    {
      "@type": "Question",
      name:    "How do I become an IB with Equity IB?",
      acceptedAnswer: { "@type": "Answer", text: "Click 'Become an IB' and complete the short application form — it takes under 5 minutes. Our team reviews all applications and responds within 24 hours. Most approvals happen the same day." },
    },
    {
      "@type": "Question",
      name:    "Can I transfer my existing clients to Equity IB?",
      acceptedAnswer: { "@type": "Answer", text: "In many cases, yes — though this depends on your existing agreements. During onboarding your account manager will discuss migrating existing client relationships." },
    },
    {
      "@type": "Question",
      name:    "How quickly can I start earning rebates?",
      acceptedAnswer: { "@type": "Answer", text: "Most IBs receive tracking links and dashboard access within 24–48 hours of approval. Once clients start trading through your links, rebates accrue immediately and are settled the same day." },
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Page header */}
      <div className="pt-32 pb-0 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-slate-400">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-300" aria-current="page">FAQ</li>
          </ol>
        </nav>
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-white">Introducing Broker FAQ</h1>
      </div>

      <FAQ />
      <ApplicationSection />
    </>
  );
}
