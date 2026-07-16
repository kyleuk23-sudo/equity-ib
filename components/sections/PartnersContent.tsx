"use client";

import { motion } from "framer-motion";
import {
  TrendingUp, DollarSign, BarChart3, Shield, Users, Repeat,
  Check, ArrowRight, Zap, Clock, Star, Award, Link2, ChevronUp,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: TrendingUp,
    title: "IB Rebate Tiers",
    desc: "Earn increasingly competitive rebates as your monthly trading volume grows — six tiers from Starter to Diamond.",
    color: "#6366F1",
  },
  {
    icon: Clock,
    title: "Daily Rebate Payments",
    desc: "Receive eligible IB rebates daily through the broker's secure payment system with full settlement transparency.",
    color: "#34D399",
  },
  {
    icon: DollarSign,
    title: "Up To $30 Per Lot",
    desc: "Top-performing IBs can qualify for rebates of up to $30 per traded lot, depending on trading volume and commercial agreement.",
    color: "#FFD700",
  },
  {
    icon: BarChart3,
    title: "Transparent Earnings",
    desc: "Monitor your trading volume, rebate tier and payment history through the broker's professional client portal.",
    color: "#A78BFA",
  },
  {
    icon: Users,
    title: "Dedicated IB Support",
    desc: "Work directly with experienced IB relationship managers who help you maximise business growth and tier progression.",
    color: "#6366F1",
  },
  {
    icon: Repeat,
    title: "Long-Term Partnership",
    desc: "Build recurring IB revenue through long-term client relationships instead of one-time referral payments.",
    color: "#34D399",
  },
];

const tiers = [
  {
    name: "Starter",
    lots: "0–99",
    rebate: "$10",
    rebateNum: 10,
    benefit: "Standard Support",
    perks: ["IB tracking links", "Online portal access", "Email support"],
    color: "#94a3b8",
    gradient: "from-slate-400/10 to-transparent",
    popular: false,
  },
  {
    name: "Bronze",
    lots: "100–249",
    rebate: "$12",
    rebateNum: 12,
    benefit: "Faster Onboarding",
    perks: ["Priority onboarding", "Marketing materials", "Email & chat support"],
    color: "#CD7F32",
    gradient: "from-amber-700/10 to-transparent",
    popular: false,
  },
  {
    name: "Silver",
    lots: "250–499",
    rebate: "$15",
    rebateNum: 15,
    benefit: "Marketing Resources",
    perks: ["Full marketing hub access", "Co-branded materials", "Dedicated chat line"],
    color: "#C0C0C0",
    gradient: "from-slate-300/10 to-transparent",
    popular: false,
  },
  {
    name: "Gold",
    lots: "500–999",
    rebate: "$20",
    rebateNum: 20,
    benefit: "Dedicated IB Manager",
    perks: ["Personal IB manager", "Custom landing pages", "Priority withdrawals"],
    color: "#FFD700",
    gradient: "from-yellow-400/10 to-transparent",
    popular: true,
  },
  {
    name: "Platinum",
    lots: "1,000–2,499",
    rebate: "$25",
    rebateNum: 25,
    benefit: "Priority Support",
    perks: ["Senior IB manager", "Bespoke campaigns", "Fast-track settlement"],
    color: "#6366F1",
    gradient: "from-primary/10 to-transparent",
    popular: false,
  },
  {
    name: "Diamond",
    lots: "2,500+",
    rebate: "Up To $30",
    rebateNum: 30,
    benefit: "VIP Partnership",
    perks: ["VIP account management", "Custom rebate structure", "Dedicated infrastructure"],
    color: "#34D399",
    gradient: "from-accent/10 to-transparent",
    popular: false,
  },
];

const steps = [
  {
    n: "01",
    title: "Join Equity IB as an approved Introducing Broker",
    desc: "Submit a short application. Our team reviews and responds within 24 hours.",
    color: "#6366F1",
  },
  {
    n: "02",
    title: "Refer traders using your unique referral link",
    desc: "Share your personalised tracking link through your channels, community or audience.",
    color: "#A78BFA",
  },
  {
    n: "03",
    title: "Your referred clients trade with the broker",
    desc: "Clients open accounts, deposit funds and begin trading through the regulated broker partner.",
    color: "#34D399",
  },
  {
    n: "04",
    title: "Trading volume generates IB rebates",
    desc: "Every lot your referred clients trade accrues a rebate based on your current tier.",
    color: "#FFD700",
  },
  {
    n: "05",
    title: "Eligible rebates are paid daily",
    desc: "Settled each trading day via bank transfer, USDT, BTC, ETH or local transfer where available.",
    color: "#6366F1",
  },
  {
    n: "06",
    title: "Increase volume to unlock higher rebate tiers",
    desc: "As monthly trading volume grows, you automatically progress to higher tiers and higher rebates per lot.",
    color: "#34D399",
  },
];

const examples = [
  {
    lots: "250",
    tier: "Silver",
    rebate: "$15",
    monthly: "$3,750",
    color: "#C0C0C0",
    icon: Award,
  },
  {
    lots: "750",
    tier: "Gold",
    rebate: "$20",
    monthly: "$15,000",
    color: "#FFD700",
    icon: Star,
    highlight: true,
  },
  {
    lots: "2,500",
    tier: "Diamond",
    rebate: "Up To $30",
    monthly: "Up to $75,000",
    color: "#34D399",
    icon: Zap,
  },
];

export default function PartnersContent() {
  return (
    <div className="pt-28 pb-0">

      {/* ── Hero ── */}
      <section className="relative pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.16, 0.08] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[140px] pointer-events-none"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-primary mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            IB Rebate Programme
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance"
          >
            Earn Industry-Leading{" "}
            <span className="gradient-text">IB Rebates</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Grow your Introducing Broker business with competitive rebates, daily payments,
            premium broker partnerships and dedicated support designed to help you scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8"
          >
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-glow text-sm w-full sm:w-auto justify-center"
            >
              Become an Introducing Broker
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#calculator"
              className="flex items-center gap-2 glass hover:bg-white/[0.07] text-white font-medium px-7 py-3.5 rounded-xl transition-all text-sm border border-white/[0.08] w-full sm:w-auto justify-center"
            >
              <BarChart3 className="w-4 h-4 text-accent" />
              Calculate Your Earnings
            </Link>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-10"
          >
            {[
              { label: "Up To $30 Per Lot", color: "#FFD700" },
              { label: "Daily Rebate Payments", color: "#34D399" },
              { label: "6 Rebate Tiers", color: "#6366F1" },
              { label: "Dedicated IB Manager", color: "#A78BFA" },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: t.color }} />
                <span className="text-xs text-slate-400">{t.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Feature cards ── */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-accent mb-4">
            Why Equity IB
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Built Exclusively For{" "}
            <span className="gradient-text">Introducing Brokers</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm max-w-xl mx-auto">
            Every feature is designed around the IB rebate model — volume-based, transparent and built for long-term growth.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4, transition: { duration: 0.18 } }}
                className="glass rounded-2xl p-6 group hover:border-white/[0.12] transition-all relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 0% 0%, ${f.color}08 0%, transparent 60%)` }}
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ background: `${f.color}12`, boxShadow: `0 0 0 1px ${f.color}22` }}
                >
                  <Icon className="w-5 h-5" style={{ color: f.color }} />
                </div>
                <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── IB Rebate Tier Table ── */}
      <section id="tiers" className="pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-secondary opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-secondary mb-4">
              <TrendingUp className="w-3 h-3" />
              Rebate Structure
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              IB Rebate{" "}
              <span className="gradient-text-blue">Tier Programme</span>
            </h2>
            <p className="mt-3 text-slate-400 text-sm max-w-xl mx-auto">
              Six tiers. Higher monthly trading volume unlocks higher rebates per lot. Progress is automatic — no manual review required.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -5, transition: { duration: 0.18 } }}
                className={`glass rounded-2xl p-6 relative overflow-hidden group transition-all ${
                  tier.popular ? "border-yellow-400/20" : "hover:border-white/[0.10]"
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: `${tier.color}18`, color: tier.color, border: `1px solid ${tier.color}30` }}>
                    <Star className="w-3 h-3 fill-current" />
                    Most Popular
                  </div>
                )}

                <div className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} pointer-events-none transition-opacity group-hover:opacity-150`} />

                {/* Tier badge */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm font-bold mb-4"
                  style={{ background: `${tier.color}15`, color: tier.color, border: `1px solid ${tier.color}25` }}
                >
                  {tier.name}
                </div>

                {/* Rebate */}
                <div className="mb-1">
                  <span className="text-3xl font-extrabold text-white">{tier.rebate}</span>
                  <span className="text-sm text-slate-400 ml-2">per lot</span>
                </div>

                <div className="text-xs text-slate-500 mb-4">{tier.lots} lots / month</div>

                {/* Benefit badge */}
                <div
                  className="text-xs font-semibold mb-5 px-2 py-1 rounded-lg inline-block"
                  style={{ background: `${tier.color}10`, color: tier.color }}
                >
                  {tier.benefit}
                </div>

                {/* Perks */}
                <ul className="space-y-2.5">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: tier.color }} />
                      {perk}
                    </li>
                  ))}
                </ul>

                {/* Hover accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(to right, transparent, ${tier.color}, transparent)` }}
                />
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-xs text-slate-600 mt-6"
          >
            Tiers are assessed monthly based on qualifying trading volume. Rebate rates are indicative and subject to your individual commercial agreement.
          </motion.p>
        </div>
      </section>

      {/* ── How IB Rebates Work ── */}
      <section id="payments" className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-primary mb-4">
            <Link2 className="w-3 h-3" />
            The IB Rebate Model
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            How IB Rebates{" "}
            <span className="gradient-text">Work</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm max-w-xl mx-auto">
            A transparent, volume-based model designed to reward consistent growth.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-primary/30 via-accent/20 to-primary/10 hidden sm:block pointer-events-none" />

          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.09 }}
                className="flex items-start gap-5 group"
              >
                {/* Step number */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 border-2 z-10 transition-transform group-hover:scale-110"
                  style={{
                    background: `${step.color}12`,
                    color: step.color,
                    borderColor: `${step.color}30`,
                  }}
                >
                  {step.n}
                </div>

                {/* Content */}
                <div className="glass rounded-2xl p-5 flex-1 group-hover:border-white/[0.10] transition-all">
                  <div className="flex items-start gap-3">
                    <div>
                      <h3 className="font-semibold text-white text-sm leading-snug mb-1">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                    <ChevronUp
                      className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 rotate-90 transition-opacity"
                      style={{ color: step.color }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Earnings Examples ── */}
      <section className="pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-accent mb-4">
              <DollarSign className="w-3 h-3" />
              Rebate Examples
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              What Your IB Rebates{" "}
              <span className="gradient-text">Could Look Like</span>
            </h2>
            <p className="mt-3 text-slate-400 text-sm max-w-xl mx-auto">
              Three illustrative scenarios across different volume levels. All figures are estimates only.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {examples.map((ex, i) => {
              const Icon = ex.icon;
              return (
                <motion.div
                  key={ex.tier}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className={`glass-strong rounded-3xl p-7 text-center relative overflow-hidden ${
                    ex.highlight ? "border-yellow-400/20" : ""
                  }`}
                >
                  {ex.highlight && (
                    <div className="absolute top-4 right-4 text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${ex.color}18`, color: ex.color, border: `1px solid ${ex.color}30` }}>
                      Popular
                    </div>
                  )}

                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${ex.color}15 0%, transparent 60%)` }}
                  />

                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5"
                    style={{ background: `${ex.color}15`, boxShadow: `0 0 0 1px ${ex.color}25` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: ex.color }} />
                  </div>

                  {/* Volume */}
                  <div className="text-3xl font-extrabold text-white mb-0.5">{ex.lots}</div>
                  <div className="text-xs text-slate-500 mb-4">Monthly Lots</div>

                  {/* Tier */}
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold mb-4"
                    style={{ background: `${ex.color}15`, color: ex.color, border: `1px solid ${ex.color}25` }}
                  >
                    {ex.tier} Tier
                  </div>

                  {/* Rebate */}
                  <div className="text-sm text-slate-400 mb-1">{ex.rebate} per lot</div>

                  {/* Monthly total */}
                  <div className="h-px bg-white/[0.06] my-4" />
                  <div className="text-xs text-slate-500 mb-1">Est. Monthly Rebate</div>
                  <div
                    className="text-2xl font-extrabold"
                    style={{ color: ex.color }}
                  >
                    {ex.monthly}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="text-center mt-7"
          >
            <p className="text-xs text-slate-600 max-w-xl mx-auto">
              Examples are for illustrative purposes only. Actual rebate rates depend on trading volume, broker, instruments traded and individual commercial agreement.
            </p>
            <Link
              href="/contact"
              data-track-event="cta"
              data-track-label="Start Earning IB Rebates"
              data-track-section="partners_page"
              className="inline-flex items-center gap-2 mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-glow text-sm"
            >
              Start Earning IB Rebates
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
