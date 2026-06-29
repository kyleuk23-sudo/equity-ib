"use client";

import { motion } from "framer-motion";
import {
  Monitor, Globe, Zap, Shield, BarChart3, RefreshCw,
  Smartphone, CreditCard, Headphones, Award,
} from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Professional Client Portal",
    desc: "A full-featured trading environment with real-time account management, performance analytics and trade history.",
    color: "#C8952A",
  },
  {
    icon: Globe,
    title: "Global Market Access",
    desc: "Trade forex, commodities, indices and more across international markets with deep liquidity.",
    color: "#34D399",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    desc: "Low-latency execution with tight spreads designed to deliver a professional trading experience for your clients.",
    color: "#F5C842",
  },
  {
    icon: Shield,
    title: "Regulated & Secure",
    desc: "Regulated broker infrastructure with client fund protection, secure account management and compliance standards.",
    color: "#A78BFA",
  },
  {
    icon: BarChart3,
    title: "Daily Rebate Tracking",
    desc: "Real-time visibility into your IB performance, lot volumes, rebate accrual and payment history — all in one dashboard.",
    color: "#6366F1",
  },
  {
    icon: RefreshCw,
    title: "Reliable Infrastructure",
    desc: "High-availability trading infrastructure with minimal downtime, ensuring your clients can trade whenever they need to.",
    color: "#34D399",
  },
  {
    icon: Smartphone,
    title: "Multi-Device Access",
    desc: "Fully responsive trading platform accessible on desktop, tablet and mobile — your clients can trade anywhere.",
    color: "#C8952A",
  },
  {
    icon: CreditCard,
    title: "Multiple Funding Methods",
    desc: "Clients can fund their accounts via bank transfer, cards and digital payment methods — reducing friction to deposit.",
    color: "#F5C842",
  },
  {
    icon: Headphones,
    title: "Dedicated Client Support",
    desc: "Client-facing support provided by the broker partner, freeing you to focus on growing your IB network.",
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
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
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
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 border border-white/[0.06] hover:border-white/[0.12] transition-all group relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ background: `radial-gradient(circle at 20% 0%, ${f.color}10 0%, transparent 65%)` }}
                />
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${f.color}18` }}
                >
                  <Icon className="w-4.5 h-4.5 w-[18px] h-[18px]" style={{ color: f.color }} />
                </div>
                <h3 className="font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>

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
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all hover:shadow-glow hover:opacity-90"
          >
            Apply as an IB Partner
          </a>
        </motion.div>
      </div>
    </section>
  );
}
