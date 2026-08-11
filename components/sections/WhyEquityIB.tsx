"use client";

import { motion } from "framer-motion";
import {
  BarChart3, Clock, Headphones, Shield, Globe, Zap,
  LineChart, RefreshCw,
} from "lucide-react";
import Link from "next/link";
import { ButtonV6 } from "@/components/ui/ButtonV6";
import { V6 } from "@/lib/designTokensV6";

const features = [
  { icon: BarChart3,  title: "Competitive Rebate Tiers",  desc: "Earn up to $30 per traded lot across six tier levels, with rates that grow automatically as your monthly volume increases." },
  { icon: Clock,      title: "Daily Payments",             desc: "IB rebates are settled every trading day — no 30-day holds, no weekly batches. Your income arrives as it's earned." },
  { icon: Zap,        title: "Premium Broker Technology",  desc: "Your clients trade on a professional platform with tight spreads, fast execution and reliable infrastructure." },
  { icon: Headphones, title: "Dedicated Account Manager",  desc: "Every partner receives a named account manager — not a generic helpdesk — available to support your growth directly." },
  { icon: Shield,     title: "Fast Approval",              desc: "Most IB applications are reviewed and approved within 24 hours. You can start referring clients almost immediately." },
  { icon: Globe,      title: "Global Reach",               desc: "Accept clients from 120+ countries with multi-language support and regionally relevant payment methods for deposits." },
  { icon: LineChart,  title: "Transparent Reporting",      desc: "Full visibility into your lot volumes, rebate accrual, tier status and payment history — updated in real time." },
  { icon: RefreshCw,  title: "Recurring Income",           desc: "Unlike one-time referral fees, IB rebates recur for the lifetime of the client relationship — building lasting income." },
];

/**
 * Split/sticky layout — header + CTA pinned left, features as divided rows
 * (not cards) on the right. Deliberately distinct from ValueProposition's
 * chromeless strip and FreeToJoin's single panel below it.
 */
export function WhyEquityIB() {
  return (
    <section id="why-equity-ib" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <p className="text-xs font-medium uppercase tracking-[0.14em] mb-4" style={{ color: V6.gold }}>
              Why Choose Equity IB
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.02em] leading-[1.1]" style={{ color: V6.fgPrimary }}>
              Built for IBs who take their business seriously
            </h2>
            <p className="mt-5 text-base leading-relaxed" style={{ color: V6.fgSecondary }}>
              Equity IB is not a short-term affiliate programme. It is a professional
              partnership built on transparent rebates, daily payments and long-term
              growth support.
            </p>
            <div className="mt-8">
              <ButtonV6
                href="#apply"
                data-track-event="cta"
                data-track-label="Apply Free Today"
                data-track-section="why_equity_ib"
              >
                Apply Free Today
              </ButtonV6>
            </div>
            <p className="text-xs mt-4" style={{ color: V6.fgMuted }}>
              Comparing IB programmes?{" "}
              <Link
                href="/introducing-broker-program"
                className="underline underline-offset-2 transition-colors"
                style={{ color: V6.gold }}
              >
                See what to look for and how we measure up
              </Link>
            </p>
          </motion.div>

          <div>
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="flex items-start gap-4 py-5"
                  style={{ borderBottom: i < features.length - 1 ? `1px solid ${V6.border}` : "none" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: V6.bgSecondary, border: `1px solid ${V6.borderGold}` }}
                  >
                    <Icon className="w-[18px] h-[18px]" style={{ color: V6.gold }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1" style={{ color: V6.fgPrimary }}>{f.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: V6.fgSecondary }}>{f.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
