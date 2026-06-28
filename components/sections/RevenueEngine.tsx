"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Share2, UserPlus, TrendingUp, Database, Coins, Wallet,
  ChevronRight, ArrowDown, ArrowRight, CheckCircle2,
  Users, Zap, Shield, BarChart3, Star, Activity,
} from "lucide-react";
import Link from "next/link";

// ─── Tier table ───────────────────────────────────────────────────────────────

const TIERS = [
  { name: "Starter",  color: "#94a3b8", bg: "rgba(148,163,184,0.12)", min: 0,    max: 99,       rebate: 10 },
  { name: "Bronze",   color: "#CD7F32", bg: "rgba(205,127,50,0.12)",   min: 100,  max: 249,      rebate: 12 },
  { name: "Silver",   color: "#C0C0C0", bg: "rgba(192,192,192,0.12)",  min: 250,  max: 499,      rebate: 15 },
  { name: "Gold",     color: "#FFD700", bg: "rgba(255,215,0,0.12)",    min: 500,  max: 999,      rebate: 20 },
  { name: "Platinum", color: "#E5E4E2", bg: "rgba(229,228,226,0.12)", min: 1000, max: 2499,     rebate: 25 },
  { name: "Diamond",  color: "#6366F1", bg: "rgba(99,102,241,0.12)",   min: 2500, max: Infinity, rebate: 30 },
] as const;

type TierName = typeof TIERS[number]["name"];
function getTierForLots(lots: number) {
  return TIERS.find((t) => lots >= t.min && lots <= t.max) ?? TIERS[0];
}

// ─── Steps ────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    id: 1, Icon: Share2,
    label: "Refer Traders",
    desc: "Share your unique referral link with traders, communities, networks and audiences you support.",
    detail: "Referral links, landing pages and marketing materials provided",
    color: "#6366F1",
  },
  {
    id: 2, Icon: UserPlus,
    label: "Clients Register",
    desc: "Referred traders complete account registration and become connected to your Introducing Broker profile.",
    detail: "Every registration automatically attributed to your IB account",
    color: "#A78BFA",
  },
  {
    id: 3, Icon: TrendingUp,
    label: "Clients Trade",
    desc: "As clients actively trade eligible instruments, live trading volume accumulates on your IB account.",
    detail: "Forex pairs, gold, indices and other eligible instruments",
    color: "#34D399",
  },
  {
    id: 4, Icon: Database,
    label: "Volume Recorded",
    desc: "All trading activity is tracked and attributed through the broker's real-time reporting infrastructure.",
    detail: "Visible in your IB portal dashboard in real time",
    color: "#FFD700",
  },
  {
    id: 5, Icon: Coins,
    label: "Rebates Generated",
    desc: "Eligible volume generates rebates based on your current tier — estimated from $10 up to $30 per lot.",
    detail: "Higher volume unlocks higher tier and higher rebates automatically",
    color: "#F97316",
  },
  {
    id: 6, Icon: Wallet,
    label: "Daily Payments",
    desc: "Request withdrawals through the broker's secure portal using your preferred payment method.",
    detail: "Bank transfer, USDT (TRC20/ERC20), Bitcoin, Ethereum and more",
    color: "#34D399",
  },
] as const;

// ─── Growth stages ────────────────────────────────────────────────────────────

const GROWTH_STAGES = [
  { clients: 10,  avgLots: 5,  label: "Starting Out" },
  { clients: 50,  avgLots: 8,  label: "Early Growth" },
  { clients: 100, avgLots: 10, label: "Established"  },
  { clients: 250, avgLots: 12, label: "Scaling"       },
  { clients: 500, avgLots: 15, label: "Premium"       },
];

// ─── Particles (SSR-safe deterministic positions) ─────────────────────────────

const PARTICLES = [
  { left: "4%",  top: "11%", size: 3, delay: 0 },
  { left: "93%", top: "17%", size: 4, delay: 1.4 },
  { left: "11%", top: "70%", size: 2, delay: 0.7 },
  { left: "88%", top: "58%", size: 5, delay: 2.1 },
  { left: "47%", top: "5%",  size: 2, delay: 0.3 },
  { left: "2%",  top: "44%", size: 3, delay: 1.8 },
  { left: "96%", top: "33%", size: 2, delay: 0.9 },
  { left: "53%", top: "89%", size: 3, delay: 1.1 },
  { left: "75%", top: "5%",  size: 2, delay: 2.5 },
  { left: "28%", top: "94%", size: 4, delay: 0.5 },
];

const TRUST_BADGES = [
  { Icon: Zap,       text: "Daily Rebate Payments"       },
  { Icon: Star,      text: "Up to $30 Per Lot"           },
  { Icon: Users,     text: "Dedicated IB Support"        },
  { Icon: BarChart3, text: "Transparent Reporting"       },
  { Icon: Shield,    text: "Premium Broker Partnerships" },
];

// ─── Animated counter ─────────────────────────────────────────────────────────

function AnimatedCounter({
  target, prefix = "", suffix = "", duration = 650,
}: { target: number; prefix?: string; suffix?: string; duration?: number }) {
  const [value, setValue] = useState(target);
  const fromRef = useRef(target);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const from = fromRef.current;
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

  return <>{prefix}{value.toLocaleString()}{suffix}</>;
}

// ─── Step card ────────────────────────────────────────────────────────────────

function StepCard({
  step, delay, showConnector,
}: {
  step: typeof STEPS[number];
  delay: number;
  showConnector: boolean;
}) {
  const { Icon, label, desc, detail, color, id } = step;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="relative group"
    >
      <div
        className="h-full glass rounded-2xl p-5 border border-white/[0.07] hover:border-white/[0.16] transition-all relative overflow-hidden"
        style={{ boxShadow: `0 0 0 0 ${color}00` }}
      >
        {/* Top row: number + animated icon */}
        <div className="flex items-center justify-between mb-5">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
            style={{ background: `${color}18`, color, border: `1px solid ${color}35` }}
          >
            {String(id).padStart(2, "0")}
          </div>

          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay, ease: "easeInOut" }}
            className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
            style={{
              background: `${color}12`,
              border: `1px solid ${color}30`,
              boxShadow: `0 0 22px ${color}20`,
            }}
          >
            <Icon className="w-5 h-5" style={{ color }} />
          </motion.div>
        </div>

        <h3 className="font-bold text-white text-base mb-2">{label}</h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-4">{desc}</p>

        <div
          className="text-xs px-2.5 py-1.5 rounded-lg inline-flex items-center gap-1.5 leading-snug"
          style={{ background: `${color}10`, color: `${color}bb` }}
        >
          <CheckCircle2 className="w-3 h-3 flex-shrink-0" style={{ color }} />
          {detail}
        </div>

        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 50% 0%, ${color}07 0%, transparent 60%)` }}
        />
      </div>

      {/* Right connector arrow */}
      {showConnector && (
        <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
          <motion.div
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: delay + 0.5 }}
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{
              background: `${color}18`,
              border: `1px solid ${color}40`,
              boxShadow: `0 0 12px ${color}20`,
            }}
          >
            <ChevronRight className="w-4 h-4" style={{ color }} />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}

// ─── Slider ───────────────────────────────────────────────────────────────────

function Slider({
  label, value, min, max, step, onChange, color, minLabel, maxLabel,
}: {
  label: string; value: number; min: number; max: number; step: number;
  onChange: (v: number) => void; color: string; minLabel: string; maxLabel: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <label className="text-sm font-semibold text-white">{label}</label>
        <motion.div
          key={value}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          className="text-xl font-extrabold"
          style={{ color }}
        >
          <AnimatedCounter target={value} />
        </motion.div>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, ${color} ${pct}%, rgba(255,255,255,0.08) ${pct}%)`,
          accentColor: color,
        }}
      />
      <div className="flex justify-between mt-1.5 text-xs text-slate-600">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────

export function RevenueEngine() {
  const [clients, setClients] = useState(50);
  const [lotsPerClient, setLotsPerClient] = useState(8);
  const calcRef = useRef<HTMLDivElement>(null);
  const calcInView = useInView(calcRef, { once: true, margin: "-80px" });

  const totalLots = clients * lotsPerClient;
  const tier = getTierForLots(totalLots);
  const estimatedRebate = totalLots * tier.rebate;

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-20 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-[0.04] pointer-events-none" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(99,102,241,0.08) 0%, transparent 70%)" }}
      />

      {/* Particles */}
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size, background: "#6366F1" }}
          animate={{ opacity: [0.15, 0.7, 0.15], scale: [1, 1.6, 1] }}
          transition={{ duration: 4 + i * 0.3, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ─── Header ────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-accent mb-5">
            <Activity className="w-3 h-3" />
            Your IB Revenue Engine
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Build Recurring Revenue From{" "}
            <span className="gradient-text">Client Trading Activity</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            As your referred clients trade, eligible volume generates rebates paid directly to your IB account.
            The more active clients you introduce, the greater your earning potential.
          </p>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2.5 mb-16"
        >
          {TRUST_BADGES.map(({ Icon, text }) => (
            <div key={text} className="flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium border border-white/[0.07]">
              <CheckCircle2 className="w-3 h-3 text-accent flex-shrink-0" />
              <span className="text-slate-300">{text}</span>
            </div>
          ))}
        </motion.div>

        {/* ─── 6-Step flow ─────────────────────────────────────────── */}
        <div className="mb-6">
          {/* Row 1: Steps 1–3 */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-4">
            {STEPS.slice(0, 3).map((step, i) => (
              <StepCard key={step.id} step={step} delay={i * 0.1} showConnector={i < 2} />
            ))}
          </div>

          {/* Row separator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="flex items-center gap-4 my-4"
          >
            <div className="flex-1 h-px bg-white/[0.04]" />
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full text-xs text-slate-500 border border-white/[0.06]">
              <ArrowDown className="w-3 h-3 text-accent" />
              Trading volume flows into rebates
              <ArrowDown className="w-3 h-3 text-accent" />
            </div>
            <div className="flex-1 h-px bg-white/[0.04]" />
          </motion.div>

          {/* Row 2: Steps 4–6 */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {STEPS.slice(3, 6).map((step, i) => (
              <StepCard key={step.id} step={step} delay={0.4 + i * 0.1} showConnector={i < 2} />
            ))}
          </div>
        </div>

        {/* ─── Interactive Earnings Calculator ─────────────────────── */}
        <motion.div
          ref={calcRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="glass-strong rounded-3xl p-8 mt-16 mb-16 relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none rounded-3xl" />
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: `radial-gradient(ellipse at center, ${tier.color}10 0%, transparent 70%)` }}
          />

          <div className="relative z-10">
            <div className="text-center mb-10">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Interactive</p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Estimate Your Monthly Rebate Potential
              </h3>
              <p className="text-sm text-slate-400">
                Adjust the sliders — see your estimated earnings update in real time
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: sliders + derived stats */}
              <div className="space-y-8">
                <Slider
                  label="Active Clients"
                  value={clients} min={5} max={200} step={5}
                  onChange={setClients}
                  color="#6366F1"
                  minLabel="5 clients"
                  maxLabel="200 clients"
                />

                <Slider
                  label="Avg Lots Per Client / Month"
                  value={lotsPerClient} min={2} max={30} step={1}
                  onChange={setLotsPerClient}
                  color="#34D399"
                  minLabel="2 lots"
                  maxLabel="30 lots"
                />

                {/* Derived metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass rounded-xl p-4 text-center border border-white/[0.07]">
                    <p className="text-xs text-slate-500 mb-1.5">Total Monthly Lots</p>
                    <p className="text-2xl font-extrabold text-white">
                      <AnimatedCounter target={totalLots} />
                    </p>
                  </div>
                  <motion.div
                    className="rounded-xl p-4 text-center transition-all duration-500"
                    style={{ background: tier.bg, border: `1px solid ${tier.color}35` }}
                  >
                    <p className="text-xs mb-1.5" style={{ color: `${tier.color}90` }}>Current Tier</p>
                    <p className="text-2xl font-extrabold" style={{ color: tier.color }}>
                      {tier.name}
                    </p>
                  </motion.div>
                </div>

                {/* Tier progression */}
                <div className="space-y-1.5">
                  {TIERS.map((t) => {
                    const isActive = t.name === tier.name;
                    const isPast = t.rebate < tier.rebate;
                    return (
                      <motion.div
                        key={t.name}
                        className="flex items-center gap-3 text-xs px-3 py-1.5 rounded-lg transition-all"
                        style={isActive ? { background: `${t.color}12`, border: `1px solid ${t.color}30` } : {}}
                      >
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0 transition-all"
                          style={{
                            background: isActive || isPast ? t.color : "rgba(255,255,255,0.08)",
                            transform: isActive ? "scale(1.4)" : "scale(1)",
                          }}
                        />
                        <span
                          className="font-medium transition-colors"
                          style={{ color: isActive ? t.color : isPast ? `${t.color}70` : "#475569" }}
                        >
                          {t.name}
                        </span>
                        <span style={{ color: isActive ? "rgba(255,255,255,0.7)" : "#334155" }}>
                          · ${t.rebate}/lot
                        </span>
                        {isActive && (
                          <span className="ml-auto font-bold text-[10px]" style={{ color: t.color }}>
                            ← Active
                          </span>
                        )}
                        {!isActive && t.min <= totalLots && t.max >= totalLots && null}
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Right: result card */}
              <div>
                <motion.div
                  className="relative rounded-3xl p-8 text-center overflow-hidden"
                  style={{ background: tier.bg, border: `1px solid ${tier.color}30` }}
                  animate={{ boxShadow: `0 0 80px ${tier.color}18` }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Animated glow ring */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ boxShadow: `inset 0 0 60px ${tier.color}10` }}
                  />

                  <div className="relative z-10">
                    <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: tier.color }}>
                      Estimated Monthly Rebate
                    </p>

                    <div className="text-6xl font-extrabold text-white mb-3 leading-none">
                      $<AnimatedCounter target={estimatedRebate} />
                    </div>

                    <p className="text-sm text-slate-400 mb-5">
                      <AnimatedCounter target={totalLots} /> lots × ${tier.rebate} per lot
                    </p>

                    <div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold mb-6"
                      style={{ background: `${tier.color}22`, color: tier.color }}
                    >
                      <Star className="w-4 h-4 fill-current" />
                      {tier.name} Tier · ${tier.rebate} per lot
                    </div>

                    {/* Sub-metrics */}
                    <div className="grid grid-cols-2 gap-3 text-left">
                      {[
                        { label: "Active Clients", value: clients },
                        { label: "Lots / Client", value: lotsPerClient },
                        { label: "Monthly Lots", value: totalLots },
                        { label: "Rebate / Lot", value: tier.rebate, prefix: "$" },
                      ].map(({ label, value, prefix = "" }) => (
                        <div key={label} className="glass rounded-xl p-3 border border-white/[0.05]">
                          <p className="text-[10px] text-slate-500 mb-0.5">{label}</p>
                          <p className="text-base font-bold text-white">
                            {prefix}<AnimatedCounter target={value} />
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <p className="text-[11px] text-slate-600 mt-4 text-center leading-relaxed px-2">
                  Examples are illustrative only. Actual rebates depend on trading volume, instruments traded
                  and applicable commercial arrangements.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── Growth Progression ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Compound Effect</p>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Growth Compounds As Your{" "}
              <span className="gradient-text">Network Expands</span>
            </h3>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">
              As your client portfolio grows, monthly trading volume increases — automatically unlocking
              higher tiers and greater estimated rebate potential.
            </p>
          </div>

          {/* Stage cards */}
          <div className="relative">
            {/* Connecting track */}
            <div className="hidden sm:block absolute top-[40%] left-[10%] right-[10%] h-0.5 pointer-events-none"
              style={{ background: "linear-gradient(to right, rgba(99,102,241,0.1), rgba(99,102,241,0.4), rgba(52,211,153,0.3), rgba(99,102,241,0.1))" }}
            />

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {GROWTH_STAGES.map((stage, i) => {
                const lots = stage.clients * stage.avgLots;
                const t = getTierForLots(lots);
                const rebate = lots * t.rebate;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -6, scale: 1.03 }}
                    className="relative z-10 group"
                  >
                    <div
                      className="glass rounded-2xl p-5 text-center border transition-all h-full"
                      style={{ borderColor: `${t.color}30` }}
                    >
                      {/* Stage label */}
                      <div
                        className="text-[10px] font-bold uppercase tracking-widest mb-3"
                        style={{ color: `${t.color}80` }}
                      >
                        {stage.label}
                      </div>

                      {/* Client count */}
                      <div className="text-3xl font-extrabold mb-1" style={{ color: t.color }}>
                        {stage.clients}
                      </div>
                      <p className="text-[11px] text-slate-500 mb-4">active clients</p>

                      {/* Tier badge */}
                      <div
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-4 transition-all"
                        style={{ background: `${t.color}18`, color: t.color, border: `1px solid ${t.color}30` }}
                      >
                        {i > 0 && <Star className="w-2.5 h-2.5 fill-current" />}
                        {t.name}
                      </div>

                      {/* Metrics */}
                      <div className="space-y-1.5 text-xs">
                        <div className="flex justify-between text-slate-500">
                          <span>Monthly lots</span>
                          <span className="font-medium text-slate-400">{lots.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-slate-500">
                          <span>Rebate/lot</span>
                          <span className="font-medium text-slate-400">${t.rebate}</span>
                        </div>
                        <div
                          className="flex justify-between pt-1.5 mt-1.5 border-t"
                          style={{ borderColor: `${t.color}20` }}
                        >
                          <span style={{ color: `${t.color}80` }}>Est. monthly</span>
                          <span className="font-bold" style={{ color: t.color }}>
                            ~${rebate.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Connector */}
                    {i < GROWTH_STAGES.length - 1 && (
                      <div className="hidden sm:flex absolute top-[40%] -right-3 -translate-y-1/2 z-20">
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                          className="w-6 h-6 rounded-full flex items-center justify-center"
                          style={{ background: "#050509", border: `1px solid ${t.color}50` }}
                        >
                          <ChevronRight className="w-3 h-3" style={{ color: t.color }} />
                        </motion.div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <p className="text-[11px] text-slate-600 text-center mt-6 leading-relaxed">
              Illustrative examples only. Volume figures and estimated rebates assume consistent client trading activity. Actual earnings depend on trading behaviour, instruments, tier and applicable commercial terms.
            </p>
          </div>
        </motion.div>

        {/* ─── CTA ──────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
            Ready to build your IB revenue?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/partners">
              <button className="btn-glow inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-2xl text-sm transition-all">
                Become an IB Partner
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/marketing-hub">
              <button className="inline-flex items-center gap-2 glass border border-white/[0.10] hover:border-white/[0.22] text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-2xl text-sm transition-all">
                Explore the Marketing Hub
                <ArrowRight className="w-4 h-4 opacity-60" />
              </button>
            </Link>
          </div>
          <p className="text-xs text-slate-600 mt-4">
            Join approved IB partners globally · No experience required
          </p>
        </motion.div>
      </div>
    </section>
  );
}
