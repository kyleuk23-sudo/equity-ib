"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const paymentMethods = [
  {
    name: "International Bank Transfer",
    desc: "SWIFT/SEPA worldwide",
    icon: "🏦",
    color: "#6366F1",
    badge: "Popular",
  },
  {
    name: "USDT (ERC20)",
    desc: "Ethereum network",
    icon: "₮",
    color: "#26A17B",
    badge: null,
  },
  {
    name: "USDT (TRC20)",
    desc: "Tron network · Low fees",
    icon: "₮",
    color: "#EF0027",
    badge: "Low Fees",
  },
  {
    name: "Bitcoin",
    desc: "BTC · Worldwide",
    icon: "₿",
    color: "#F7931A",
    badge: null,
  },
  {
    name: "Ethereum",
    desc: "ETH · ERC20",
    icon: "Ξ",
    color: "#627EEA",
    badge: null,
  },
  {
    name: "Local Bank Transfer",
    desc: "Available in 30+ countries",
    icon: "🏛",
    color: "#34D399",
    badge: "Where Available",
  },
];


export function PaymentMethods() {
  return (
    <section id="payments" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-60 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-accent/10 blur-[160px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-accent mb-4">
            <Zap className="w-3 h-3" />
            Daily Rebate Payments
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Receive Rebates{" "}
            <span className="gradient-text">Every Trading Day</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Your earned rebates are calculated and settled daily. Fast, transparent
            payments with multiple withdrawal methods — bank transfer, crypto, or local options.
          </p>
        </motion.div>

        {/* Payment method cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {paymentMethods.map((method, i) => (
            <motion.div
              key={method.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass rounded-2xl p-4 text-center relative group border border-white/[0.06] hover:border-white/[0.15] transition-all cursor-default"
            >
              {method.badge && (
                <div
                  className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap"
                  style={{ background: method.color, color: "#050509" }}
                >
                  {method.badge}
                </div>
              )}

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mx-auto mb-3 transition-transform group-hover:scale-110"
                style={{ background: `${method.color}15`, border: `1px solid ${method.color}25` }}
              >
                <span style={{ color: method.color }}>{method.icon}</span>
              </div>

              <p className="text-xs font-semibold text-white leading-tight mb-1">{method.name}</p>
              <p className="text-xs text-slate-500">{method.desc}</p>

              <div
                className="mt-2 h-0.5 rounded-full mx-auto transition-all duration-300 group-hover:w-10 w-5"
                style={{ background: method.color }}
              />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-xs text-slate-500 mt-6"
        >
          No platform fees on standard methods · Payment methods subject to availability in your region
        </motion.p>
      </div>
    </section>
  );
}
