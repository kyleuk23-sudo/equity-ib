"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  HeadphonesIcon,
  Zap,
  Shield,
  Star,
  Crown,
  BarChart3,
  Check,
  ArrowRight,
} from "lucide-react";

const tiers = [
  {
    name: "Starter",
    lots: "0–99",
    rebate: "$10",
    rebateNum: 10,
    color: "#94a3b8",
    bg: "rgba(148,163,184,0.06)",
    border: "rgba(148,163,184,0.2)",
    icon: Star,
    featured: false,
    benefits: ["Standard Support", "Partner Dashboard", "Basic Reporting", "Tracking Links"],
  },
  {
    name: "Bronze",
    lots: "100–249",
    rebate: "$12",
    rebateNum: 12,
    color: "#CD7F32",
    bg: "rgba(205,127,50,0.06)",
    border: "rgba(205,127,50,0.2)",
    icon: Shield,
    featured: false,
    benefits: [
      "All Starter Benefits",
      "Faster Payments",
      "Priority Onboarding",
      "Marketing Templates",
    ],
  },
  {
    name: "Silver",
    lots: "250–499",
    rebate: "$15",
    rebateNum: 15,
    color: "#C0C0C0",
    bg: "rgba(192,192,192,0.06)",
    border: "rgba(192,192,192,0.2)",
    icon: BarChart3,
    featured: false,
    benefits: [
      "All Bronze Benefits",
      "Marketing Materials",
      "Co-branded Assets",
      "Monthly Reviews",
    ],
  },
  {
    name: "Gold",
    lots: "500–999",
    rebate: "$20",
    rebateNum: 20,
    color: "#FFD700",
    bg: "rgba(255,215,0,0.08)",
    border: "rgba(255,215,0,0.3)",
    icon: Star,
    featured: true,
    benefits: [
      "All Silver Benefits",
      "Dedicated Account Manager",
      "Custom Landing Pages",
      "Performance Bonuses",
    ],
  },
  {
    name: "Platinum",
    lots: "1,000–2,499",
    rebate: "$25",
    rebateNum: 25,
    color: "#6366F1",
    bg: "rgba(99,102,241,0.08)",
    border: "rgba(99,102,241,0.3)",
    icon: Zap,
    featured: false,
    benefits: [
      "All Gold Benefits",
      "Priority Support",
      "Advanced Analytics",
      "Rate Increase Reviews",
    ],
  },
  {
    name: "Diamond",
    lots: "2,500+",
    rebate: "Up To $30",
    rebateNum: 30,
    color: "#34D399",
    bg: "rgba(52,211,153,0.08)",
    border: "rgba(52,211,153,0.3)",
    icon: Crown,
    featured: false,
    benefits: [
      "All Platinum Benefits",
      "Custom Deal Structure",
      "VIP Support Line",
      "Bespoke Partnership",
    ],
  },
];

export function TierTable() {
  return (
    <section id="tiers" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-primary mb-4">
            <BarChart3 className="w-3 h-3" />
            Rebate Tier System
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Grow Your Tier,{" "}
            <span className="gradient-text">Grow Your Income</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Your rebate rate increases automatically as your monthly trading volume grows. The more
            volume your clients generate, the higher your rebate per lot — up to $30.
          </p>
        </motion.div>

        {/* Tier cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {tiers.map((tier, i) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative rounded-2xl p-5 flex flex-col border transition-all group"
                style={{
                  background: tier.bg,
                  borderColor: tier.featured ? tier.color : tier.border,
                  boxShadow: tier.featured ? `0 0 30px ${tier.color}20` : undefined,
                }}
              >
                {tier.featured && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap"
                    style={{ background: tier.color, color: "#050509" }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Icon + name */}
                <div className="mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: `${tier.color}18` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: tier.color }} />
                  </div>
                  <h3 className="font-bold text-white text-lg">{tier.name}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{tier.lots} lots/month</p>
                </div>

                {/* Rebate */}
                <div className="mb-5">
                  <div className="text-2xl font-extrabold" style={{ color: tier.color }}>
                    {tier.rebate}
                  </div>
                  <div className="text-xs text-slate-400">per lot rebate</div>
                </div>

                {/* Benefits */}
                <ul className="space-y-2 flex-1">
                  {tier.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check
                        className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                        style={{ color: tier.color }}
                      />
                      <span className="text-xs text-slate-300 leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
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
          className="text-center mt-10"
        >
          <p className="text-sm text-slate-400 mb-4">
            Tier classification is based on qualifying monthly trading volume. Rebate rates are
            indicative — your exact rate is confirmed in your individual IB agreement.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-glow text-sm"
          >
            Discuss Your Tier
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
