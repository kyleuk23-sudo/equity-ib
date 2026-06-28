"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Globe, ChevronDown, Star, Zap } from "lucide-react";

// Deterministic positions — safe for SSR
const PARTICLES = [
  { top: "12%",  left: "7%",  w: 3, delay: 0.0  },
  { top: "23%",  left: "88%", w: 2, delay: 0.5  },
  { top: "67%",  left: "4%",  w: 4, delay: 1.0  },
  { top: "79%",  left: "93%", w: 2, delay: 1.5  },
  { top: "44%",  left: "97%", w: 3, delay: 0.8  },
  { top: "87%",  left: "14%", w: 2, delay: 1.2  },
  { top: "8%",   left: "53%", w: 3, delay: 0.3  },
  { top: "91%",  left: "64%", w: 2, delay: 1.8  },
  { top: "54%",  left: "1%",  w: 2, delay: 2.1  },
  { top: "31%",  left: "50%", w: 2, delay: 0.7  },
];

const floatingCards = [
  {
    label: "Monthly Rebates",
    value: "$13,000",
    sub: "650 lots · Gold Tier",
    change: "+$20/lot",
    icon: TrendingUp,
    delay: 0,
    color: "#FFD700",
    pos: "-top-14 -right-8",
    floatY: -6,
  },
  {
    label: "Active IB Partners",
    value: "750+",
    sub: "125+ Countries",
    change: "Worldwide",
    icon: Users,
    delay: 0.15,
    color: "#6366F1",
    pos: "-bottom-12 -right-8",
    floatY: -4,
  },
  {
    label: "Rebates Paid",
    value: "$50M+",
    sub: "All-time total",
    change: "Daily rebate payments",
    icon: Globe,
    delay: 0.3,
    color: "#34D399",
    pos: "-bottom-2 -left-16",
    floatY: -8,
  },
];

const trustStats = [
  { value: "500+",      label: "IB Partners"  },
  { value: "120+",      label: "Countries"    },
  { value: "$50M+",     label: "Rebates Paid" },
  { value: "Up To $30", label: "Per Lot"      },
];

const tierBadges = [
  { name: "Starter",  color: "#94a3b8" },
  { name: "Bronze",   color: "#CD7F32" },
  { name: "Silver",   color: "#C0C0C0" },
  { name: "Gold",     color: "#FFD700" },
  { name: "Platinum", color: "#6366F1" },
  { name: "Diamond",  color: "#34D399" },
];

const BAR_HEIGHTS = [42, 55, 48, 62, 58, 70, 65, 78, 72, 85, 80, 100];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-[110px] pb-16 overflow-hidden">

      {/* ── Background stack ── */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-accent pointer-events-none" />
      <div className="absolute inset-0 aurora-bg pointer-events-none opacity-65" />
      <div className="absolute inset-0 grid-bg opacity-[0.15] pointer-events-none" />

      {/* Scan line */}
      <div className="scan-line" />

      {/* ── Deep orbs ── */}
      <motion.div
        animate={{ scale: [1, 1.22, 1], opacity: [0.28, 0.52, 0.28] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[14%] left-[8%] w-[750px] h-[750px] rounded-full bg-primary/10 blur-[180px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.1, 0.88, 1.1], opacity: [0.18, 0.36, 0.18] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-[10%] right-[4%] w-[660px] h-[660px] rounded-full bg-secondary/10 blur-[160px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.35, 1], opacity: [0.1, 0.22, 0.1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        className="absolute top-[42%] right-[22%] w-[500px] h-[500px] rounded-full bg-accent/8 blur-[130px] pointer-events-none"
      />

      {/* ── Particles ── */}
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.12, 0.65, 0.12], scale: [1, 1.6, 1] }}
          transition={{
            duration: 2.4 + i * 0.38,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
          style={{ top: p.top, left: p.left, width: p.w, height: p.w }}
          className="absolute rounded-full bg-primary/80 pointer-events-none"
        />
      ))}

      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — copy */}
          <div>
            {/* Live eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 glass px-4 py-2 rounded-full text-xs font-semibold text-accent mb-6 border border-accent/20"
            >
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Now accepting IB applications worldwide
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 90, damping: 22 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.04] tracking-tight text-balance"
            >
              Earn Up To{" "}
              <span className="gradient-text">$30</span>
              <br />
              Per{" "}
              <span className="gradient-text-blue">Lot</span>
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-6 text-lg text-slate-400 leading-relaxed max-w-lg"
            >
              Build a recurring revenue business with industry-leading rebates,
              dedicated account management and premium broker partnerships.
              The professional home for Introducing Brokers.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              <Link
                href="/contact"
                className="btn-glow relative flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-xl transition-all hover:opacity-90 active:scale-[0.97] text-sm overflow-hidden group"
              >
                <span className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                Become an IB
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <a
                href="#calculator"
                className="flex items-center gap-2 glass hover:bg-white/[0.07] text-white font-medium px-8 py-4 rounded-xl transition-all text-sm border border-white/[0.08] hover:border-primary/30"
              >
                <Zap className="w-4 h-4 text-accent" />
                Calculate Earnings
              </a>
            </motion.div>

            {/* Trust stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.48 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/[0.05]"
            >
              {trustStats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 + i * 0.09, type: "spring", stiffness: 110 }}
                >
                  <div className="text-2xl font-extrabold gradient-text-blue">{s.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Tier pills */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.78 }}
              className="flex flex-wrap items-center gap-2 mt-6"
            >
              <span className="text-xs text-slate-500">Tiers:</span>
              {tierBadges.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, scale: 0.75 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.82 + i * 0.06 }}
                  whileHover={{ scale: 1.12, y: -2 }}
                  className="px-2.5 py-1 rounded-full text-xs font-semibold glass border cursor-default"
                  style={{ color: t.color, borderColor: `${t.color}35` }}
                >
                  {t.name}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — visual */}
          <div className="relative hidden lg:flex items-center justify-center h-[500px]">

            {/* Rotating aurora glow behind central card */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute w-80 h-80 pointer-events-none opacity-25"
              style={{
                background: "conic-gradient(from 0deg, #6366F1, #34D399, #A78BFA, transparent, #6366F1)",
                borderRadius: "50%",
                filter: "blur(32px)",
              }}
            />

            {/* Secondary pulse glow */}
            <motion.div
              animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.65, 0.35] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-72 h-72 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(99,102,241,0.15) 0%, transparent 70%)" }}
            />

            {/* Central card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.86, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.38, type: "spring", stiffness: 85, damping: 20 }}
              className="relative glass-strong rounded-2xl p-6 w-80 z-10"
              style={{ boxShadow: "0 8px 48px rgba(0,0,0,0.55), 0 0 0 1px rgba(99,102,241,0.18), 0 0 60px rgba(99,102,241,0.08)" }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-slate-400">Monthly Rebate Income</p>
                  <p className="text-3xl font-bold text-white mt-0.5">$13,000</p>
                  <p className="text-xs text-slate-500 mt-0.5">650 lots · Gold Tier</p>
                </div>
                <div
                  className="px-3 py-1.5 rounded-xl text-sm font-bold"
                  style={{ background: "rgba(255,215,0,0.14)", color: "#FFD700", border: "1px solid rgba(255,215,0,0.28)" }}
                >
                  Gold
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                  <span>Gold</span>
                  <span className="text-primary">350 lots to Platinum</span>
                </div>
                <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "65%" }}
                    transition={{ duration: 1.4, delay: 0.95, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(to right, #FFD700, #6366F1)" }}
                  />
                </div>
              </div>

              {/* Bar chart */}
              <div className="flex items-end gap-[3px] h-16 mb-3">
                {BAR_HEIGHTS.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.5, delay: 0.58 + i * 0.04, ease: "easeOut" }}
                    className="flex-1 rounded-sm"
                    style={{
                      background: i >= 10
                        ? "linear-gradient(to top, #FFD700, #6366F1)"
                        : "rgba(99,102,241,0.22)",
                    }}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">Jan — Dec</span>
                <span className="text-xs font-semibold" style={{ color: "#FFD700" }}>+$2,600 this month</span>
              </div>
            </motion.div>

            {/* Floating cards */}
            {floatingCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, x: i % 2 === 0 ? 28 : -28, y: 14 }}
                  animate={{ opacity: 1, x: 0, y: [0, card.floatY, 0] }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.68 + card.delay },
                    x:       { duration: 0.65, delay: 0.68 + card.delay, type: "spring", stiffness: 100 },
                    y:       { duration: 4.5 + i * 1.1, repeat: Infinity, ease: "easeInOut", delay: card.delay * 1.8 },
                  }}
                  whileHover={{ scale: 1.06, zIndex: 30 }}
                  className={`absolute ${card.pos} glass rounded-xl p-3 min-w-[158px] z-10 border border-white/[0.07] hover:border-white/[0.14] transition-colors cursor-default`}
                  style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.35)" }}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${card.color}1a` }}
                    >
                      <Icon className="w-3 h-3" style={{ color: card.color }} />
                    </div>
                    <span className="text-xs text-slate-400">{card.label}</span>
                  </div>
                  <div className="text-base font-bold text-white">{card.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{card.sub}</div>
                  <div className="text-xs font-semibold mt-0.5" style={{ color: card.color }}>{card.change}</div>
                </motion.div>
              );
            })}

            {/* Stars rating badge */}
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.88 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.05, type: "spring", stiffness: 130, damping: 18 }}
              className="absolute -top-6 left-4 glass rounded-xl px-4 py-2.5 flex items-center gap-2 border border-white/[0.07] z-10"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-xs text-slate-300">98% partner retention</span>
            </motion.div>

            {/* Live payouts indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.22, type: "spring", stiffness: 150, damping: 18 }}
              className="absolute top-10 -right-2 glass rounded-xl px-3 py-2 flex items-center gap-2 border border-white/[0.07] z-10"
            >
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent/75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-xs text-slate-300 whitespace-nowrap">Live Payouts</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.35 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-xs text-slate-500 tracking-[0.15em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-slate-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
