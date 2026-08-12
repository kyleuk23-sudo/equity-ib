"use client";

import { motion } from "framer-motion";
import {
  Monitor, Globe, Zap, Shield, BarChart3, Headphones, Award,
} from "lucide-react";
import { ButtonV6 } from "@/components/ui/ButtonV6";
import { V6 } from "@/lib/designTokensV6";
import { MeshGradientBg } from "@/components/visual/MeshGradientBg";
import { IconMark } from "@/components/visual/IconMark";

const features = [
  { icon: Monitor,     title: "Professional Client Portal",
    desc: "A full-featured trading environment with real-time account management, performance analytics and complete trade history." },
  { icon: Globe,       title: "Global Market Access",
    desc: "Trade forex, commodities, indices and more across international markets with deep liquidity and competitive conditions." },
  { icon: Zap,         title: "Fast Execution",
    desc: "Low-latency execution with tight spreads designed to deliver a professional trading experience for every client you refer." },
  { icon: Shield,      title: "Regulated & Secure",
    desc: "Regulated broker infrastructure with client fund protection, secure account management and full compliance standards." },
  { icon: BarChart3,   title: "Daily Rebate Tracking",
    desc: "Real-time visibility into your IB performance, lot volumes, rebate accrual and payment history — all in one dashboard." },
  { icon: Headphones,  title: "Dedicated Client Support",
    desc: "Professional client-facing support provided by the broker, freeing you to focus on growing your IB network and volume." },
];

/**
 * Chromeless grid — no card boxes — so this reads distinctly from
 * TierTable's bordered cards and FreeToJoin's unified panel above it.
 */
export function WhyPUPrime() {
  return (
    <section id="why-pu-prime" className="py-24 relative overflow-hidden" style={{ background: V6.bg }}>
      <MeshGradientBg variant="calm" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 justify-center text-xs font-medium uppercase tracking-[0.14em] mb-5" style={{ color: V6.gold }}>
            <Award className="w-3.5 h-3.5" />
            Our Broker Partner
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.02em]" style={{ color: V6.fgPrimary }}>
            Premium technology your clients can trust
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-base leading-relaxed" style={{ color: V6.fgSecondary }}>
            Equity IB partners introduce clients to a broker built for professional traders.
            When your clients have a quality trading experience, they trade more — and you earn more.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group pt-6"
                style={{ borderTop: `1px solid ${V6.border}` }}
              >
                <div className="mb-4">
                  <IconMark size={44}>
                    <Icon className="w-[18px] h-[18px]" style={{ color: V6.gold }} />
                  </IconMark>
                </div>
                <h3 className="font-semibold mb-2" style={{ color: V6.fgPrimary }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: V6.fgSecondary }}>{f.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-sm font-semibold mb-2" style={{ color: V6.fgPrimary }}>Markets, Execution &amp; Analysis Tools</h3>
          <p className="text-xs leading-relaxed" style={{ color: V6.fgMuted }}>
            Your clients get access to major and minor forex pairs, gold (XAUUSD), indices and CFD
            instruments across global markets, backed by deep liquidity and low-latency execution.
            Real-time market analysis, economic calendars and charting tools are built into the client
            portal — helping your referrals trade with more consistency, which supports your long-term
            rebate income.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-xs mb-5 max-w-lg mx-auto" style={{ color: V6.fgMuted }}>
            Specific broker details, including regulatory information and trading conditions,
            are disclosed during the IB onboarding process.
          </p>
          <ButtonV6
            href="#apply"
            data-track-event="cta"
            data-track-label="Apply Free Today"
            data-track-section="why_pu_prime"
          >
            Apply Free Today
          </ButtonV6>
        </motion.div>
      </div>
    </section>
  );
}
