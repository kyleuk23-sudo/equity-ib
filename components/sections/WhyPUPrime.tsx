"use client";

import { motion } from "framer-motion";
import {
  Monitor, Globe, Zap, Shield, BarChart3, Headphones, Award, ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Professional Client Portal",
    desc: "A full-featured trading environment with real-time account management, performance analytics and complete trade history.",
    color: "#C8952A",
  },
  {
    icon: Globe,
    title: "Global Market Access",
    desc: "Trade forex, commodities, indices and more across international markets with deep liquidity and competitive conditions.",
    color: "#34D399",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    desc: "Low-latency execution with tight spreads designed to deliver a professional trading experience for every client you refer.",
    color: "#F5C842",
  },
  {
    icon: Shield,
    title: "Regulated & Secure",
    desc: "Regulated broker infrastructure with client fund protection, secure account management and full compliance standards.",
    color: "#A78BFA",
  },
  {
    icon: BarChart3,
    title: "Daily Rebate Tracking",
    desc: "Real-time visibility into your IB performance, lot volumes, rebate accrual and payment history — all in one dashboard.",
    color: "#6366F1",
  },
  {
    icon: Headphones,
    title: "Dedicated Client Support",
    desc: "Professional client-facing support provided by the broker, freeing you to focus on growing your IB network and volume.",
    color: "#A78BFA",
  },
];

export function WhyPUPrime() {
  return (
    <section id="why-pu-prime" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-primary mb-5">
            <Award className="w-3 h-3" />
            Our Broker Partner
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Premium Technology<br />
            <span className="gradient-text">Your Clients Can Trust</span>
          </h2>
          <p className="mt-5 text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Equity IB partners introduce clients to a broker built for professional traders.
            When your clients have a quality trading experience, they trade more — and you earn more.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 border border-white/[0.06] hover:border-white/[0.12] transition-all group relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ background: `radial-gradient(circle at 20% 0%, ${f.color}10 0%, transparent 65%)` }}
                />
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${f.color}18`, boxShadow: `0 0 0 1px ${f.color}22` }}
                >
                  <Icon className="w-[18px] h-[18px]" style={{ color: f.color }} />
                </div>
                <h3 className="font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                <div className="w-6 h-0.5 rounded-full mt-3 transition-all duration-300 group-hover:w-10" style={{ background: f.color }} />
              </motion.div>
            );
          })}
        </div>

        {/* Markets & execution */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-sm font-bold text-white mb-2">Markets, Execution &amp; Analysis Tools</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Your clients get access to major and minor forex pairs, gold (XAUUSD), indices and CFD
            instruments across global markets, backed by deep liquidity and low-latency execution.
            Real-time market analysis, economic calendars and charting tools are built into the client
            portal — helping your referrals trade with more consistency, which supports your long-term
            rebate income.
          </p>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-xs text-slate-500 mb-5 max-w-lg mx-auto">
            Specific broker details, including regulatory information and trading conditions,
            are disclosed during the IB onboarding process.
          </p>
          <a
            href="#apply"
            data-track-event="cta"
            data-track-label="Apply Free Today"
            data-track-section="why_pu_prime"
            className="btn-glow inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl text-sm transition-all hover:opacity-90 relative overflow-hidden group"
          >
            <span className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            Apply Free Today
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
