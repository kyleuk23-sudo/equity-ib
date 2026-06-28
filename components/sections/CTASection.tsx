"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";

const trustPoints = [
  "No setup fees",
  "Daily rebate settlement",
  "Dedicated IB manager",
  "6 payment methods",
];

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-secondary pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 14, repeat: Infinity, delay: 3 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px] pointer-events-none"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-accent mb-6"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Partner applications open
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance"
        >
          Ready To Build A{" "}
          <span className="gradient-text">Serious IB Business?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-slate-400 max-w-xl mx-auto leading-relaxed"
        >
          Join hundreds of Introducing Brokers earning recurring monthly rebates through Equity IB.
          Applications take under 5 minutes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8"
        >
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-glow text-sm w-full sm:w-auto justify-center"
          >
            Become An IB
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 glass hover:bg-white/[0.07] text-white font-medium px-8 py-4 rounded-xl transition-all text-sm border border-white/[0.08] w-full sm:w-auto justify-center"
          >
            <Calendar className="w-4 h-4 text-accent" />
            Book A Discovery Call
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-10"
        >
          {trustPoints.map((t) => (
            <div key={t} className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs text-slate-400">{t}</span>
            </div>
          ))}
        </motion.div>

        {/* Earnings example */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 glass rounded-2xl p-5 max-w-md mx-auto"
        >
          <p className="text-xs text-slate-400 mb-3">Example: Gold Tier IB</p>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-lg font-bold text-white">650</div>
              <div className="text-xs text-slate-500">Lots/Month</div>
            </div>
            <div>
              <div className="text-lg font-bold" style={{ color: "#FFD700" }}>$20</div>
              <div className="text-xs text-slate-500">Per Lot</div>
            </div>
            <div>
              <div className="text-lg font-bold text-accent">$13,000</div>
              <div className="text-xs text-slate-500">Monthly</div>
            </div>
          </div>
          <p className="text-xs text-slate-600 mt-3 text-center">
            Illustrative only. Actual results depend on individual circumstances.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
