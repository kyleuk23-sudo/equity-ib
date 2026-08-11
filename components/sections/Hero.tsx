"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Calculator, ShieldCheck, Globe2, Clock } from "lucide-react";
import { V6 } from "@/lib/designTokensV6";

const trustIndicators = [
  { icon: ShieldCheck, label: "Regulated broker partner" },
  { icon: Clock, label: "Approved within 24h" },
  { icon: Globe2, label: "120+ countries" },
];

const activityFeed = [
  { tier: "Platinum", lots: "1,240 lots", rebate: "$31,000" },
  { tier: "Gold", lots: "680 lots", rebate: "$13,600" },
  { tier: "Diamond", lots: "3,100 lots", rebate: "$93,000" },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let raf: number;
    const step = (ts: number) => {
      if (startTime === null) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return value;
}

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const monthlyRebate = useCountUp(26140, 1400, true);

  return (
    <section
      className="relative pt-[140px] pb-24 lg:pb-32 overflow-hidden"
      style={{ background: V6.bg }}
    >
      {/* Subtle animated background — fine dot-grid + one soft drifting glow, confined to the visual half */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.5]"
        style={{
          backgroundImage: `radial-gradient(${V6.border} 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 70% 60% at 75% 30%, black 0%, transparent 75%)",
        }}
      />
      <motion.div
        className="absolute right-[-10%] top-[-10%] w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)" }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative grid lg:grid-cols-[1.05fr_0.95fr] gap-16 lg:gap-8 items-center">
        {/* Left — headline & conversion path */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium uppercase tracking-[0.14em] mb-5"
            style={{ color: V6.gold }}
          >
            Introducing Broker Partnership
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: easeOut }}
            className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold leading-[1.05] tracking-[-0.02em] text-balance"
            style={{ color: V6.fgPrimary }}
          >
            Rebates that reward
            <br />
            your business, not
            <br />
            just your referrals.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 text-lg leading-relaxed max-w-lg"
            style={{ color: V6.fgSecondary }}
          >
            Equity IB pays daily rebates on transparent, tier-based rates — with a
            dedicated account manager and no cost to join. Built for IBs who treat
            this as a long-term business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="flex flex-wrap items-center gap-4 mt-10"
          >
            <a
              href="#apply"
              data-track-event="cta"
              data-track-label="Apply Now"
              data-track-section="hero"
              className="btn-v6-primary inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-xl text-sm"
            >
              Apply Now
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#calculator"
              className="btn-v6-secondary inline-flex items-center gap-2 font-medium px-7 py-3.5 rounded-xl text-sm"
            >
              <Calculator className="w-4 h-4" />
              Calculate Your Earnings
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-12 pt-8"
            style={{ borderTop: `1px solid ${V6.border}` }}
          >
            {trustIndicators.map((t) => (
              <div key={t.label} className="flex items-center gap-2">
                <t.icon className="w-4 h-4 flex-shrink-0" style={{ color: V6.fgMuted }} />
                <span className="text-sm" style={{ color: V6.fgSecondary }}>{t.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — bespoke composed visual, no stock photography */}
        <div className="relative h-[440px] lg:h-[480px]">
          {/* Trailing offset card — trust micro-detail, sits behind/lower-left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: easeOut }}
            className="card-v6 absolute left-0 bottom-6 w-[220px] rounded-xl p-5"
          >
            <span className="text-xs" style={{ color: V6.fgMuted }}>Average approval time</span>
            <div className="mt-1.5 text-2xl font-bold" style={{ color: V6.fgPrimary }}>&lt; 24 hours</div>
          </motion.div>

          {/* Primary floating panel — live partner activity feed */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
            className="card-v6 absolute right-0 top-0 w-full max-w-[380px] rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium uppercase tracking-[0.1em]" style={{ color: V6.fgMuted }}>
                This Month
              </span>
              <span className="relative flex h-1.5 w-1.5">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                  style={{ background: V6.gold }}
                />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: V6.gold }} />
              </span>
            </div>
            <div className="text-4xl font-bold tracking-tight" style={{ color: V6.fgPrimary }}>
              ${monthlyRebate.toLocaleString()}
            </div>
            <div className="text-xs mt-1" style={{ color: V6.fgSecondary }}>Rebates settled to date</div>

            <div className="mt-6 pt-5 space-y-3" style={{ borderTop: `1px solid ${V6.border}` }}>
              {activityFeed.map((row, i) => (
                <motion.div
                  key={row.tier}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.08 }}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full" style={{ background: V6.fgMuted }} />
                    <span style={{ color: V6.fgSecondary }}>{row.tier} · {row.lots}</span>
                  </div>
                  <span className="font-medium" style={{ color: V6.fgPrimary }}>{row.rebate}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
