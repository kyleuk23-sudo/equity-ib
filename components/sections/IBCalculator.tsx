"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackCalculatorOpen, trackCalculatorInteraction, trackTierViewed } from "@/lib/analytics/events";
import { ButtonV6 } from "@/components/ui/ButtonV6";
import { V6 } from "@/lib/designTokensV6";
import { TIER_COLORS_V6 } from "@/lib/tierColorsV6";

const TIERS = [
  { name: "Starter",  min: 0,    max: 99,       rebate: 10, next: 100  },
  { name: "Bronze",   min: 100,  max: 249,      rebate: 12, next: 250  },
  { name: "Silver",   min: 250,  max: 499,      rebate: 15, next: 500  },
  { name: "Gold",     min: 500,  max: 999,      rebate: 20, next: 1000 },
  { name: "Platinum", min: 1000, max: 2499,     rebate: 25, next: 2500 },
  { name: "Diamond",  min: 2500, max: Infinity, rebate: 30, next: null },
].map((t) => ({ ...t, color: TIER_COLORS_V6[t.name] }));

function getTier(lots: number) {
  return TIERS.find((t) => lots >= t.min && lots <= t.max) ?? TIERS[0];
}

function useAnimatedValue(target: number, duration = 500) {
  const [value, setValue] = useState(target);
  const fromRef = useRef(target);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const from = fromRef.current;
    if (from === target) return;
    let start: number | null = null;
    const tick = (now: number) => {
      if (!start) start = now;
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(from + (target - from) * eased));
      if (t < 1) { rafRef.current = requestAnimationFrame(tick); }
      else { fromRef.current = target; }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [target, duration]);

  return value;
}

const METRICS = [
  { label: "Monthly Rebates",   prefix: "$" },
  { label: "Annual Rebates",    prefix: "$" },
  { label: "5-Year Projection", prefix: "$" },
];

export function IBCalculator() {
  const [clients, setClients]   = useState(50);
  const [avgLots, setAvgLots]   = useState(10);

  const lots    = clients * avgLots;
  const tier    = getTier(lots);
  const monthly = lots * tier.rebate;
  const annual  = monthly * 12;
  const fiveYr  = annual  * 5;

  const lotsToNext = tier.next !== null ? tier.next - lots : null;
  const tierIndex  = TIERS.indexOf(tier);

  useEffect(() => {
    trackCalculatorOpen();
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      trackCalculatorInteraction({ clients, avgLots, totalLots: lots });
    }, 800);
    return () => clearTimeout(t);
  }, [clients, avgLots, lots]);

  const prevTier = useRef(tier.name);
  useEffect(() => {
    if (prevTier.current !== tier.name) {
      prevTier.current = tier.name;
      trackTierViewed(tier.name);
    }
  }, [tier.name]);

  const animMonthly = useAnimatedValue(monthly);
  const animAnnual  = useAnimatedValue(annual);
  const animFiveYr  = useAnimatedValue(fiveYr);
  const animated    = [animMonthly, animAnnual, animFiveYr];

  const pct = tier.next !== null
    ? ((lots - tier.min) / (tier.next - tier.min)) * 100
    : 100;

  const sliderBg = (val: number, max: number) =>
    `linear-gradient(to right, ${V6.gold} ${(val / max) * 100}%, ${V6.bgInteractive} ${(val / max) * 100}%)`;

  return (
    <section id="calculator" className="py-24 relative overflow-hidden" style={{ background: V6.bg }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{ background: "radial-gradient(ellipse 60% 45% at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 70%)" }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs font-medium uppercase tracking-[0.14em] mb-5" style={{ color: V6.gold }}>
            IB Earnings Calculator
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.02em]" style={{ color: V6.fgPrimary }}>
            Calculate your potential earnings
          </h2>
          <p className="mt-4 text-sm max-w-xl mx-auto" style={{ color: V6.fgSecondary }}>
            Set your number of clients and average lots per client to model your monthly rebate
            potential. All figures are illustrative — actual rebates depend on your commercial agreement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-v6 rounded-2xl p-8 sm:p-10"
        >
          {/* Sliders */}
          <div className="mb-10 space-y-7">
            <div>
              <div className="flex items-baseline justify-between mb-3">
                <label htmlFor="calc-clients" className="text-sm font-semibold" style={{ color: V6.fgPrimary }}>Number of Clients</label>
                <div className="text-3xl font-bold" style={{ color: V6.fgPrimary }}>{clients.toLocaleString()}</div>
              </div>
              <input
                id="calc-clients"
                type="range" min={1} max={200} step={1} value={clients}
                onChange={(e) => setClients(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{ accentColor: V6.gold, background: sliderBg(clients, 200) }}
              />
              <div className="flex justify-between text-xs mt-2" style={{ color: V6.fgMuted }}>
                <span>1 client</span>
                <span>200 clients</span>
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between mb-3">
                <label htmlFor="calc-avg-lots" className="text-sm font-semibold" style={{ color: V6.fgPrimary }}>Avg Lots / Client / Month</label>
                <div className="text-3xl font-bold" style={{ color: V6.fgPrimary }}>{avgLots.toLocaleString()}</div>
              </div>
              <input
                id="calc-avg-lots"
                type="range" min={1} max={100} step={1} value={avgLots}
                onChange={(e) => setAvgLots(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{ accentColor: V6.gold, background: sliderBg(avgLots, 100) }}
              />
              <div className="flex justify-between text-xs mt-2" style={{ color: V6.fgMuted }}>
                <span>1 lot</span>
                <span>100 lots</span>
              </div>
            </div>

            <div
              className="flex items-center justify-between rounded-2xl px-5 py-4"
              style={{ background: V6.bgInteractive, border: `1px solid ${V6.border}` }}
            >
              <div>
                <div className="text-xs" style={{ color: V6.fgMuted }}>Total Monthly Lots</div>
                <div className="text-xs mt-0.5" style={{ color: V6.fgMuted }}>
                  {clients.toLocaleString()} clients × {avgLots.toLocaleString()} lots
                </div>
              </div>
              <div className="text-3xl font-bold" style={{ color: V6.gold }}>
                {lots.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Tier badge + rebate */}
          <div className="flex flex-wrap items-center gap-4 mb-8 pb-8" style={{ borderBottom: `1px solid ${V6.border}` }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.22 }}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl"
                style={{
                  background: `${tier.color}18`,
                  border: `1px solid ${tier.color}40`,
                }}
              >
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: tier.color }} />
                <span className="font-bold text-lg" style={{ color: tier.color }}>{tier.name} Tier</span>
              </motion.div>
            </AnimatePresence>

            <div className="rounded-2xl px-5 py-3" style={{ background: V6.bgInteractive, border: `1px solid ${V6.border}` }}>
              <span className="text-xs block" style={{ color: V6.fgMuted }}>Rebate Per Lot</span>
              <span className="text-2xl font-bold" style={{ color: V6.fgPrimary }}>${tier.rebate}</span>
            </div>

            {lotsToNext !== null ? (
              <div className="rounded-2xl px-5 py-3" style={{ background: V6.bgInteractive, border: `1px solid ${V6.border}` }}>
                <span className="text-xs block" style={{ color: V6.fgMuted }}>To Next Tier</span>
                <span className="text-xl font-bold" style={{ color: V6.fgPrimary }}>
                  {lotsToNext.toLocaleString()} <span className="text-sm font-normal" style={{ color: V6.fgMuted }}>lots</span>
                </span>
              </div>
            ) : (
              <div className="rounded-2xl px-5 py-3" style={{ background: V6.bgInteractive, border: `1px solid ${V6.border}` }}>
                <span className="text-xs block" style={{ color: V6.fgMuted }}>Status</span>
                <span className="text-base font-bold" style={{ color: tier.color }}>Maximum Tier</span>
              </div>
            )}
          </div>

          {/* Tier progression bar */}
          <div className="mb-8">
            <div className="flex justify-between text-xs mb-2" style={{ color: V6.fgMuted }}>
              <span>Tier Progression</span>
              <span style={{ color: tier.color }}>{tier.name}</span>
            </div>
            <div className="flex gap-1 h-2 rounded-full overflow-hidden" style={{ background: V6.bgInteractive }}>
              {TIERS.map((t, i) => (
                <div
                  key={t.name}
                  className="flex-1 rounded-full transition-all duration-300"
                  style={{
                    background: i < tierIndex
                      ? t.color
                      : i === tierIndex
                        ? `linear-gradient(to right, ${t.color} ${pct}%, ${V6.bgInteractive} ${pct}%)`
                        : V6.bgInteractive,
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-1">
              {TIERS.map((t) => (
                <span
                  key={t.name}
                  className="text-[9px] font-medium"
                  style={{ color: t.name === tier.name ? t.color : V6.fgMuted }}
                >
                  {t.name}
                </span>
              ))}
            </div>
          </div>

          {/* Output metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {METRICS.map((m, i) => (
              <div
                key={m.label}
                className="relative rounded-2xl p-5 overflow-hidden"
                style={{ background: V6.bgInteractive, border: `1px solid ${V6.border}` }}
              >
                <div className="text-xs mb-1" style={{ color: V6.fgMuted }}>{m.label}</div>
                <div className="text-2xl sm:text-3xl font-bold" style={{ color: V6.fgPrimary }}>
                  {m.prefix}
                  {animated[i].toLocaleString()}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-50" style={{ background: V6.gold }} />
              </div>
            ))}
          </div>

          <p className="text-xs text-center" style={{ color: V6.fgMuted }}>
            Illustrative projections based on{" "}
            <strong style={{ color: V6.fgSecondary }}>
              {clients.toLocaleString()} clients × {avgLots.toLocaleString()} lots = {lots.toLocaleString()} lots/month × ${tier.rebate}/lot
            </strong>.
            Actual rebates depend on your IB agreement, broker, instruments traded and trading conditions.
            Not a guarantee of income.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="text-center mt-8"
        >
          <ButtonV6
            href="#apply"
            data-track-event="cta"
            data-track-label="Start Earning — Apply Free"
            data-track-section="calculator"
          >
            Start Earning — Apply Free
          </ButtonV6>
        </motion.div>
      </div>
    </section>
  );
}
