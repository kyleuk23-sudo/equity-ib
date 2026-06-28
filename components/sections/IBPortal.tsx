"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BarChart3, Users, DollarSign, FileText, Shield, Megaphone,
  Link2, LayoutGrid, Lock, CheckCircle2, ArrowRight, Activity,
  TrendingUp, Monitor,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: BarChart3,
    title: "Live IB Performance",
    desc: "Monitor your trading volume and rebate performance in real time.",
    color: "#6366F1",
  },
  {
    icon: Users,
    title: "Client Management",
    desc: "View your referred clients, registration status and account activity.",
    color: "#A78BFA",
  },
  {
    icon: DollarSign,
    title: "Rebate Tracking",
    desc: "Track accrued rebates, payment history and upcoming settlements.",
    color: "#34D399",
  },
  {
    icon: FileText,
    title: "Daily Reporting",
    desc: "Access detailed reports covering lots traded, referrals and performance metrics.",
    color: "#FFD700",
  },
  {
    icon: Shield,
    title: "Secure Withdrawals",
    desc: "Request withdrawals via bank transfer, USDT, BTC, ETH and more, where supported by the broker.",
    color: "#6366F1",
  },
  {
    icon: Megaphone,
    title: "Marketing Resources",
    desc: "Access promotional materials, referral links and campaign assets to grow your IB business.",
    color: "#A78BFA",
  },
  {
    icon: Link2,
    title: "Referral Links",
    desc: "Generate and manage your unique referral links for accurate client attribution.",
    color: "#34D399",
  },
  {
    icon: LayoutGrid,
    title: "Multi-Account Support",
    desc: "Manage multiple referral groups and business structures from one place, if supported.",
    color: "#FFD700",
  },
  {
    icon: Lock,
    title: "Account Security",
    desc: "Enterprise-grade security with encrypted access and optional two-factor authentication.",
    color: "#6366F1",
  },
];

const steps = [
  {
    n: "01",
    title: "Apply Through Equity IB",
    desc: "Complete a short application in under 5 minutes.",
    color: "#6366F1",
  },
  {
    n: "02",
    title: "Get Approved",
    desc: "Our team reviews your application and responds within 24 hours.",
    color: "#A78BFA",
  },
  {
    n: "03",
    title: "Receive Portal Access",
    desc: "Your dedicated account manager provides your broker portal credentials.",
    color: "#34D399",
  },
  {
    n: "04",
    title: "Manage Your IB Business",
    desc: "Monitor performance, track rebates and grow from the broker's professional client portal.",
    color: "#FFD700",
  },
];

const checklist = [
  "Monitor trading volume",
  "View referred clients",
  "Track daily rebates",
  "Download performance reports",
  "Manage referral links",
  "Access marketing resources",
  "Submit withdrawal requests",
  "Update payment details",
  "Contact account management",
  "Review account performance",
];

const payments = [
  { label: "International Bank Transfer", symbol: "🏦" },
  { label: "USDT (TRC20)", symbol: "T" },
  { label: "USDT (ERC20)", symbol: "T" },
  { label: "Bitcoin", symbol: "₿" },
  { label: "Ethereum", symbol: "Ξ" },
];

function MockPortal() {
  return (
    <div className="relative px-4 lg:px-0">
      <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative glass-strong rounded-2xl overflow-hidden border border-white/[0.08] shadow-glass"
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="glass rounded-md px-4 py-1 text-[10px] text-slate-500 flex items-center gap-1.5">
              <Lock className="w-2.5 h-2.5" />
              portal.brokerpartner.example
            </div>
          </div>
        </div>

        <div className="p-4">
          {/* Metrics */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[
              { label: "Monthly Lots", value: "720", color: "#6366F1" },
              { label: "Rebates Earned", value: "$21,600", color: "#34D399" },
              { label: "Active Clients", value: "34", color: "#A78BFA" },
            ].map((m) => (
              <div key={m.label} className="glass rounded-lg p-2.5">
                <div className="text-[10px] text-slate-500 mb-1">{m.label}</div>
                <div className="text-sm font-bold" style={{ color: m.color }}>
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Bar chart */}
          <div className="glass rounded-lg p-3 mb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-slate-400">Rebate Performance (12 months)</span>
              <span className="text-[10px] text-accent font-medium">+23.4% ↑</span>
            </div>
            <div className="flex items-end gap-0.5 h-14">
              {[30, 45, 38, 60, 52, 72, 65, 80, 75, 90, 85, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.04 }}
                  className="flex-1 rounded-sm"
                  style={{
                    background:
                      i === 11
                        ? "linear-gradient(to top, #6366F1, #34D399)"
                        : "rgba(99,102,241,0.22)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Activity list */}
          <div className="glass rounded-lg overflow-hidden">
            <div className="px-3 py-2 border-b border-white/[0.05]">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider">Recent Activity</span>
            </div>
            {[
              { name: "Client #1042", action: "Trade Closed", lots: "12.5 lots", rebate: "+$250", color: "#34D399" },
              { name: "Client #0891", action: "New Deposit", lots: "—", rebate: "Pending", color: "#6366F1" },
              { name: "Client #1156", action: "Trade Closed", lots: "8.0 lots", rebate: "+$160", color: "#34D399" },
            ].map((row, i) => (
              <div
                key={i}
                className="flex items-center px-3 py-2 border-b border-white/[0.03] last:border-0 text-[10px]"
              >
                <div className="flex-1 min-w-0">
                  <span className="text-slate-300 font-medium">{row.name}</span>
                  <span className="text-slate-600 ml-1.5">{row.action}</span>
                </div>
                <span className="text-slate-500 mx-2 shrink-0">{row.lots}</span>
                <span style={{ color: row.color }} className="font-semibold shrink-0">
                  {row.rebate}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating badge — rebates */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-4 -right-2 sm:-right-6 glass rounded-xl p-3 shadow-glass border border-white/[0.10]"
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-accent/20 flex items-center justify-center">
            <DollarSign className="w-3.5 h-3.5 text-accent" />
          </div>
          <div>
            <div className="text-xs font-bold text-accent">+$1,400</div>
            <div className="text-[10px] text-slate-500">Today's rebates</div>
          </div>
        </div>
      </motion.div>

      {/* Floating badge — tier */}
      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -top-4 -left-2 sm:-left-6 glass rounded-xl p-3 shadow-glass border border-white/[0.10]"
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
            <TrendingUp className="w-3.5 h-3.5 text-primary" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Gold Tier</div>
            <div className="text-[10px] text-slate-500">$20 / lot</div>
          </div>
        </div>
      </motion.div>

      <p className="text-center text-[10px] text-slate-600 mt-6">
        Illustrative mockup only. Portal design and functionality is provided by the broker partner.
      </p>
    </div>
  );
}

function ChecklistItems() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
      {checklist.map((item, i) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, x: -12 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.35, delay: i * 0.06 }}
          className="flex items-center gap-2.5"
        >
          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 20,
              delay: 0.08 + i * 0.06,
            }}
            className="flex-shrink-0"
          >
            <CheckCircle2 className="w-4 h-4 text-accent" />
          </motion.div>
          <span className="text-sm text-slate-300">{item}</span>
        </motion.div>
      ))}
    </div>
  );
}

export function IBPortal() {
  return (
    <section id="portal" className="py-24 relative overflow-hidden">
      {/* Background ambience */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.07, 0.14, 0.07] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.05, 0.10, 0.05] }}
        transition={{ duration: 18, repeat: Infinity, delay: 4 }}
        className="absolute bottom-1/3 left-0 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-primary mb-5">
            <Monitor className="w-3 h-3" />
            Broker Partner Portal
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-balance">
            Professional Tools Built For{" "}
            <span className="gradient-text">Serious Introducing Brokers</span>
          </h2>
          <p className="mt-5 text-slate-400 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            Once you're approved as an Equity IB partner, you'll receive access to your broker portal — where
            you can monitor performance, manage clients, track rebates and grow your business from one secure platform.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-7 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-glow text-sm"
          >
            Become an Introducing Broker
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* ── Feature grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4, transition: { duration: 0.18 } }}
                className="glass rounded-2xl p-6 group hover:border-white/[0.12] transition-all relative overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 0% 0%, ${f.color}08 0%, transparent 60%)`,
                  }}
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{
                    background: `${f.color}12`,
                    boxShadow: `0 0 0 1px ${f.color}22`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: f.color }} />
                </div>
                <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>

                {/* Arrow on hover */}
                <div
                  className="absolute bottom-4 right-4 w-6 h-6 rounded-lg opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all"
                  style={{ background: `${f.color}15` }}
                >
                  <ArrowRight className="w-3 h-3" style={{ color: f.color }} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── How it works ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-secondary mb-4">
              Simple Onboarding
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              From Application To{" "}
              <span className="gradient-text-blue">Portal Access</span>
            </h2>
            <p className="mt-3 text-slate-400 text-sm">
              Four steps from signup to managing your IB business in a professional broker portal.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/20 via-accent/30 to-yellow-500/20 pointer-events-none" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass rounded-2xl p-5 text-center relative"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4 border"
                    style={{
                      background: `${step.color}12`,
                      color: step.color,
                      borderColor: `${step.color}30`,
                    }}
                  >
                    {step.n}
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-2 leading-snug">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Split: mockup left / checklist right ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <MockPortal />

          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-7"
            >
              <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-accent mb-4">
                <Activity className="w-3 h-3" />
                What You Can Do
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Everything You Need Inside{" "}
                <span className="gradient-text">Your Broker Portal</span>
              </h2>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                Your broker portal gives you full visibility and control over your IB business — all in one
                secure, professional platform provided by your broker partner after Equity IB approval.
              </p>
            </motion.div>

            <ChecklistItems />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.75 }}
              className="text-xs text-slate-600 mt-5"
            >
              Available features may vary depending on the broker partner assigned to your Equity IB account.
            </motion.p>
          </div>
        </div>

        {/* ── Daily rebates + payment methods ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-8 sm:p-12 border border-white/[0.06] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-10 relative">
            {/* Left — copy */}
            <div>
              <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-accent mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Daily Rebate Payments
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Monitor Rebates Directly{" "}
                <span className="gradient-text">In Your Portal</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Approved Equity IB partners can monitor rebate activity in real time through the broker's
                client portal. Daily IB earnings are calculated based on your referred clients' trading volume
                and settled according to your broker's payment schedule.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                All withdrawal requests are submitted directly through the portal.
                Available methods and settlement timelines depend on the broker's
                supported options and your region.
              </p>
            </div>

            {/* Right — payment methods */}
            <div>
              <h4 className="text-sm font-semibold text-slate-300 mb-4">
                Available payment methods may include:
              </h4>
              <div className="space-y-2.5">
                {payments.map((p, i) => (
                  <motion.div
                    key={p.label}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="glass rounded-xl px-4 py-3 flex items-center gap-3"
                  >
                    <div className="w-8 h-8 glass rounded-lg flex items-center justify-center text-sm font-bold text-accent shrink-0">
                      {p.symbol}
                    </div>
                    <span className="text-sm text-slate-300 flex-1">{p.label}</span>
                    <span className="text-xs text-slate-600 shrink-0">Where available</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-xs text-slate-600 mt-4">
                Availability depends on the broker's supported payment options and the IB's region.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
