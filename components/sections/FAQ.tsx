"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { trackFaqExpand } from "@/lib/analytics/events";

const faqs = [
  {
    q: "How much can I earn as an Equity IB partner?",
    a: "Your income depends on how many lots your referred clients trade each month. Rebates range from $10 per lot at the Starter tier up to $30 per lot at the Diamond tier. For example, 500 lots per month at the Gold tier ($20/lot) would generate $10,000 per month. The calculator on this page lets you model different volumes — but all figures are illustrative and not a guarantee of future income.",
  },
  {
    q: "What determines my rebate tier?",
    a: "Your tier is determined by your total qualifying monthly trading volume across all referred clients. The tier structure is: Starter (0–99 lots), Bronze (100–249 lots), Silver (250–499 lots), Gold (500–999 lots), Platinum (1,000–2,499 lots), Diamond (2,500+ lots). Tiers are assessed monthly based on your verified trading volume.",
  },
  {
    q: "Does it cost anything to join Equity IB?",
    a: "No. Joining the Equity IB Introducing Broker Programme is completely free. There are no registration fees, membership costs or subscription charges. Once approved, you can begin referring clients and participating in the programme according to the applicable broker and IB terms.",
  },
  {
    q: "Can my rebate rate increase over time?",
    a: "Yes — absolutely. As your referred clients generate more monthly trading volume, you automatically progress into higher tiers, which carry higher rebate rates per lot. There is no ceiling: growth is rewarded. At the Diamond tier, our highest-performing IBs also benefit from bespoke partnership structures negotiated directly with your account manager.",
  },
  {
    q: "When are rebates paid?",
    a: "IB rebates are calculated and settled every trading day. You receive daily rebate payments directly to your chosen payment method — bank wire transfer, cryptocurrency (USDT ERC20/TRC20, BTC, ETH), or local bank transfer where available. There are no delays, no hidden deductions, and full transparency at every step.",
  },
  {
    q: "How do I withdraw my IB rebates?",
    a: "Approved Introducing Brokers can request withdrawals through the broker's secure client portal using the available payment methods supported for their account and region. Your complete payment history and rebate activity is visible in the portal at all times.",
  },
  {
    q: "Which payment methods are available?",
    a: "Depending on your location and account, supported withdrawal methods may include international bank transfer, local bank transfer (where available), USDT (TRC20), USDT (ERC20), Bitcoin (BTC) and Ethereum (ETH). Your account manager can confirm the options available in your region during onboarding.",
  },
  {
    q: "Which brokers do you partner with?",
    a: "We work exclusively with regulated, vetted broker partners that meet our standards for regulatory standing, trading conditions, withdrawal reliability, and client treatment. We match you with the broker partners best suited to your audience profile and geographic focus. Specific broker names are disclosed during your onboarding conversation.",
  },
  {
    q: "What markets and instruments can my referred clients trade?",
    a: "Clients you refer can trade a broad range of instruments through our broker partner, including major and minor forex pairs, gold (XAUUSD) and other precious metals, indices, commodities and CFDs on global equities. Wider market access matters for your business — the more instruments your audience can trade, the more trading volume your referrals tend to generate across different market conditions, which supports steadier rebate income.",
  },
  {
    q: "What is trade execution quality and why does it matter for my clients?",
    a: "Execution quality is how quickly and accurately a broker fills an order at the requested price. Deep liquidity, low-latency infrastructure and tight spreads all contribute to better execution — meaning less slippage and a more consistent trading experience. As an IB, this affects client retention directly: traders who get reliable fills and competitive spreads are more likely to stay active, which is what sustains your recurring rebate income over time.",
  },
  {
    q: "How does Equity IB think about broker risk and client protection?",
    a: "We only partner with regulated brokers that meet defined standards for capital adequacy, segregated client funds and transparent trading conditions. Risk management is a shared responsibility — your clients trade at their own risk in volatile markets like forex, gold and CFDs, but a properly regulated broker infrastructure reduces counterparty risk and gives your referrals confidence in where their funds are held.",
  },
  {
    q: "How do I become an IB with Equity IB?",
    a: "Click 'Become an IB' on this page and complete the short application form — it takes under 5 minutes. You'll be asked for your name, contact details, current trading volume, IB experience, and a brief description of your client base. Our team reviews all applications and responds within 24 hours. Most approvals happen the same day.",
  },
  {
    q: "Can I transfer my existing clients to Equity IB?",
    a: "In many cases, yes — though this depends on your existing agreements and the specific broker involved. During your onboarding call, your account manager will discuss the practicalities of migrating existing client relationships and what support Equity IB can provide to make the transition smooth.",
  },
  {
    q: "How quickly can I start earning rebates?",
    a: "Most IBs receive their tracking links and dashboard access within 24–48 hours of approval. Once your clients start trading through your links, rebates begin accruing immediately and are settled the same day. Many new partners receive their first daily rebate payment within 48 hours of going live.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-primary mb-4">
            Common Questions
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm">
            Everything you need to know before applying as an Introducing Broker.
          </p>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`glass rounded-2xl overflow-hidden transition-all ${
                open === i ? "border-primary/25 shadow-glow" : "hover:border-white/[0.10]"
              }`}
            >
              <button
                onClick={() => {
                  const opening = open !== i;
                  setOpen(opening ? i : null);
                  if (opening) trackFaqExpand(faq.q);
                }}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                aria-expanded={open === i}
              >
                <span className="font-medium text-white text-sm leading-snug">{faq.q}</span>
                <div
                  className={`w-7 h-7 rounded-xl flex-shrink-0 flex items-center justify-center transition-all ${
                    open === i ? "bg-primary/20 rotate-0" : "bg-white/5"
                  }`}
                >
                  {open === i ? (
                    <Minus className="w-3.5 h-3.5 text-primary" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 text-slate-400" />
                  )}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <div className="h-px bg-white/[0.05] mb-4" />
                      <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm text-slate-500 mt-8"
        >
          Still have questions?{" "}
          <a href="/contact" className="text-primary hover:underline">
            Speak to our IB team →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
