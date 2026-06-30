"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const TIERS = [
  { name: "Starter",  color: "#94a3b8", min: 0,    max: 99,       rebate: 10, next: 100  },
  { name: "Bronze",   color: "#CD7F32", min: 100,  max: 249,      rebate: 12, next: 250  },
  { name: "Silver",   color: "#C0C0C0", min: 250,  max: 499,      rebate: 15, next: 500  },
  { name: "Gold",     color: "#FFD700", min: 500,  max: 999,      rebate: 20, next: 1000 },
  { name: "Platinum", color: "#A78BFA", min: 1000, max: 2499,     rebate: 25, next: 2500 },
  { name: "Diamond",  color: "#34D399", min: 2500, max: Infinity, rebate: 30, next: null },
];

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

const METRICS_BG = [
  { label: "Monthly Rebates",   color: "#C8952A", prefix: "$", suffix: ""  },
  { label: "Annual Rebates",    color: "#34D399", prefix: "$", suffix: ""  },
  { label: "5-Year Projection", color: "#A78BFA", prefix: "$", suffix: ""  },
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

  const animMonthly = useAnimatedValue(monthly);
  const animAnnual  = useAnimatedValue(annual);
  const animFiveYr  = useAnimatedValue(fiveYr);
  const animated    = [animMonthly, animAnnual, animFiveYr];

  const pct = tier.next !== null
    ? ((lots - tier.min) / (tier.next - tier.min)) * 100
    : 100;

  const sliderBg = (val: number, max: number) =>
    `linear-gradient(to right, ${tier.color} ${(val / max) * 100}%, rgba(255,255,255,0.07) ${(val / max) * 100}%)`;

  return (
    <section id="calculator" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 aurora-bg opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-primary mb-5">
            IB Earnings Calculator
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Calculate Your{" "}
            <span className="gradient-text">Potential Earnings</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm max-w-xl mx-auto">
            Set your number of clients and average lots per client to model your monthly rebate
            potential. All figures are illustrative — actual rebates depend on your commercial agreement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-8 sm:p-10 border border-white/[0.08]"
          style={{ boxShadow: "0 8px 48px rgba(0,0,0,0.35)" }}
        >
          {/* Sliders */}
          <div className="mb-10 space-y-7">

            {/* Clients slider */}
            <div>
              <div className="flex items-baseline justify-between mb-3">
                <label className="text-sm font-semibold text-white">Number of Clients</label>
                <div className="text-3xl font-extrabold gradient-text">{clients.toLocaleString()}</div>
              </div>
              <input
                type="range" min={1} max={200} step={1} value={clients}
                onChange={(e) => setClients(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{ accentColor: tier.color, background: sliderBg(clients, 200) }}
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>1 client</span>
                <span>200 clients</span>
              </div>
            </div>

            {/* Avg lots per client slider */}
            <div>
              <div className="flex items-baseline justify-between mb-3">
                <label className="text-sm font-semibold text-white">Avg Lots / Client / Month</label>
                <div className="text-3xl font-extrabold gradient-text">{avgLots.toLocaleString()}</div>
              </div>
              <input
                type="range" min={1} max={100} step={1} value={avgLots}
                onChange={(e) => setAvgLots(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{ accentColor: tier.color, background: sliderBg(avgLots, 100) }}
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>1 lot</span>
                <span>100 lots</span>
              </div>
            </div>

            {/* Derived total */}
            <div
              className="flex items-center justify-between rounded-2xl px-5 py-4 border border-white/[0.06]"
              style={{ background: `${tier.color}0c` }}
            >
              <div>
                <div className="text-xs text-slate-400">Total Monthly Lots</div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {clients.toLocaleString()} clients × {avgLots.toLocaleString()} lots
                </div>
              </div>
              <div className="text-3xl font-extrabold" style={{ color: tier.color }}>
                {lots.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Tier badge + rebate */}
          <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-white/[0.06]">
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
                  boxShadow: `0 0 24px ${tier.color}18`,
                }}
              >
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: tier.color }} />
                <span className="font-bold text-lg" style={{ color: tier.color }}>{tier.name} Tier</span>
              </motion.div>
            </AnimatePresence>

            <div className="glass px-5 py-3 rounded-2xl">
              <span className="text-xs text-slate-400 block">Rebate Per Lot</span>
              <span className="text-2xl font-extrabold text-white">${tier.rebate}</span>
            </div>

            {lotsToNext !== null ? (
              <div className="glass px-5 py-3 rounded-2xl">
                <span className="text-xs text-slate-400 block">To Next Tier</span>
                <span className="text-xl font-bold text-white">
                  {lotsToNext.toLocaleString()} <span className="text-sm font-normal text-slate-400">lots</span>
                </span>
              </div>
            ) : (
              <div className="glass px-5 py-3 rounded-2xl">
                <span className="text-xs text-slate-400 block">Status</span>
                <span className="text-base font-bold" style={{ color: tier.color }}>Maximum Tier ✦</span>
              </div>
            )}
          </div>

          {/* Tier progression bar */}
          <div className="mb-8">
            <div className="flex justify-between text-xs text-slate-500 mb-2">
              <span>Tier Progression</span>
              <span style={{ color: tier.color }}>{tier.name}</span>
            </div>
            <div className="flex gap-1 h-2 rounded-full overflow-hidden bg-white/[0.04]">
              {TIERS.map((t, i) => (
                <div
                  key={t.name}
                  className="flex-1 rounded-full transition-all duration-300"
                  style={{
                    background: i < tierIndex
                      ? t.color
                      : i === tierIndex
                        ? `linear-gradient(to right, ${t.color} ${pct}%, rgba(255,255,255,0.04) ${pct}%)`
                        : "rgba(255,255,255,0.04)",
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-1">
              {TIERS.map((t) => (
                <span
                  key={t.name}
                  className="text-[9px] font-medium"
                  style={{ color: t.name === tier.name ? t.color : "rgba(255,255,255,0.25)" }}
                >
                  {t.name}
                </span>
              ))}
            </div>
          </div>

          {/* Output metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {METRICS_BG.map((m, i) => (
              <div
                key={m.label}
                className="relative rounded-2xl p-5 overflow-hidden border border-white/[0.06]"
                style={{ background: `${m.color}0c` }}
              >
                <div className="text-xs text-slate-400 mb-1">{m.label}</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">
                  {m.prefix}
                  {animated[i].toLocaleString()}
                  {m.suffix}
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-40"
                  style={{ background: m.color }}
                />
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500 text-center">
            Illustrative projections based on{" "}
            <strong className="text-slate-400">
              {clients.toLocaleString()} clients × {avgLots.toLocaleString()} lots = {lots.toLocaleString()} lots/month × ${tier.rebate}/lot
            </strong>.
            Actual rebates depend on your IB agreement, broker, instruments traded and trading conditions.
            Not a guarantee of income.
          </p>
        </motion.div>

        {/* CTA below calculator */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="text-center mt-8"
        >
          <a
            href="#apply"
            className="btn-glow inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-xl text-sm relative overflow-hidden group"
          >
            <span className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            Start Earning — Apply Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
