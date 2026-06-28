"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  CalendarCheck,
  HeadphonesIcon,
  Shield,
  Layers,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Highest Rebates",
    desc: "Earn up to $30 per traded lot — one of the most competitive rebate structures available to professional Introducing Brokers in the industry.",
    color: "#FFD700",
    bg: "rgba(255,215,0,0.08)",
  },
  {
    icon: CalendarCheck,
    title: "Daily Rebates",
    desc: "Receive your earned IB rebates every trading day. Fast, transparent daily settlement — no 30-day hold, no waiting, just daily earnings.",
    color: "#6366F1",
    bg: "rgba(99,102,241,0.08)",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated IB Manager",
    desc: "Every partner receives a named account manager providing personal support to help scale your IB business — not a generic help desk.",
    color: "#34D399",
    bg: "rgba(52,211,153,0.08)",
  },
  {
    icon: Shield,
    title: "Premium Broker Network",
    desc: "We partner only with carefully selected, regulated brokers that meet our standards for trading conditions, withdrawal reliability, and client treatment.",
    color: "#A78BFA",
    bg: "rgba(167,139,250,0.08)",
  },
  {
    icon: Layers,
    title: "Marketing Support",
    desc: "Professional banners, custom landing pages, email sequences and promotional assets — all provided and co-branded so you look institutional.",
    color: "#6366F1",
    bg: "rgba(99,102,241,0.08)",
  },
  {
    icon: BarChart3,
    title: "Long-Term Growth",
    desc: "Build a sustainable, recurring revenue business — not a short-term promotion. Our tier system rewards loyalty and growth with increasing rebate rates.",
    color: "#34D399",
    bg: "rgba(52,211,153,0.08)",
  },
];

export function WhyEquityIB() {
  return (
    <section id="why" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-primary mb-4">
            Why Choose Equity IB
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Everything You Need To{" "}
            <span className="gradient-text">Scale Faster</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Equity IB is built for professionals who take their IB business seriously. Not a
            short-term affiliate program — a long-term partnership built on trust, transparency
            and performance.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-7 group cursor-default relative overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-all"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 20% 0%, ${f.color}10 0%, transparent 60%)`,
                  }}
                />

                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ background: f.bg }}
                >
                  <Icon className="w-5 h-5" style={{ color: f.color }} />
                </div>

                <h3 className="font-bold text-white text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>

                <div
                  className="w-8 h-0.5 rounded-full mt-4 transition-all group-hover:w-16"
                  style={{ background: f.color }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
