"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Star,
  Crown,
  BarChart3,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

// A single gold accent scaling in intensity with tier — not a rainbow of
// unrelated colors per card. Only the featured tier gets a distinct highlight.
const tiers = [
  {
    name: "Starter", lots: "0–99", rebate: "$10", rebateNum: 10,
    intensity: 0.35, icon: Star, featured: false,
    benefits: ["Standard Support", "Partner Dashboard", "Basic Reporting", "Tracking Links"],
  },
  {
    name: "Bronze", lots: "100–249", rebate: "$12", rebateNum: 12,
    intensity: 0.5, icon: Shield, featured: false,
    benefits: ["All Starter Benefits", "Faster Payments", "Priority Onboarding", "Marketing Templates"],
  },
  {
    name: "Silver", lots: "250–499", rebate: "$15", rebateNum: 15,
    intensity: 0.65, icon: BarChart3, featured: false,
    benefits: ["All Bronze Benefits", "Marketing Materials", "Co-branded Assets", "Monthly Reviews"],
  },
  {
    name: "Gold", lots: "500–999", rebate: "$20", rebateNum: 20,
    intensity: 1, icon: Star, featured: true,
    benefits: ["All Silver Benefits", "Dedicated Account Manager", "Custom Landing Pages", "Performance Bonuses"],
  },
  {
    name: "Platinum", lots: "1,000–2,499", rebate: "$25", rebateNum: 25,
    intensity: 1, icon: Zap, featured: false,
    benefits: ["All Gold Benefits", "Priority Support", "Advanced Analytics", "Rate Increase Reviews"],
  },
  {
    name: "Diamond", lots: "2,500+", rebate: "Up To $30", rebateNum: 30,
    intensity: 1, icon: Crown, featured: false,
    benefits: ["All Platinum Benefits", "Custom Deal Structure", "VIP Support Line", "Bespoke Partnership"],
  },
];

const GOLD = "#C8952A";

export function TierTable() {
  return (
    <section id="ib-rebates" className="py-24 relative overflow-hidden">
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-100">
            Grow Your Tier,{" "}
            <span className="gradient-text">Grow Your Income</span>
          </h2>
          <p className="mt-4 text-stone-400 max-w-2xl mx-auto text-sm leading-relaxed">
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
                whileHover={{ y: -4 }}
                className="relative rounded-2xl p-5 flex flex-col border transition-all group"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  borderColor: tier.featured ? `${GOLD}55` : "rgba(255,255,255,0.07)",
                  boxShadow: tier.featured ? `0 0 30px ${GOLD}18` : undefined,
                }}
              >
                {tier.featured && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
                    style={{ background: GOLD, color: "#050509" }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Icon + name */}
                <div className="mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: `${GOLD}${Math.round(tier.intensity * 24).toString(16).padStart(2, "0")}` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: GOLD, opacity: 0.5 + tier.intensity * 0.5 }} />
                  </div>
                  <h3 className="font-semibold text-stone-100 text-lg">{tier.name}</h3>
                  <p className="text-xs text-stone-400 mt-0.5">{tier.lots} lots/month</p>
                </div>

                {/* Rebate */}
                <div className="mb-5">
                  <div className="text-2xl font-semibold" style={{ color: GOLD, opacity: 0.55 + tier.intensity * 0.45 }}>
                    {tier.rebate}
                  </div>
                  <div className="text-xs text-stone-400">per lot rebate</div>
                </div>

                {/* Earnings bar */}
                <div className="mb-4">
                  <div className="h-1 rounded-full bg-white/[0.05] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(tier.rebateNum / 30) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.07, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: GOLD }}
                    />
                  </div>
                  <div className="flex justify-between text-[9px] text-stone-500 mt-1">
                    <span>$0</span>
                    <span>$30</span>
                  </div>
                </div>

                {/* Benefits */}
                <ul className="space-y-2 flex-1">
                  {tier.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check
                        className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                        style={{ color: GOLD, opacity: 0.6 + tier.intensity * 0.4 }}
                      />
                      <span className="text-xs text-stone-300 leading-snug">{b}</span>
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
          <p className="text-sm text-stone-400 mb-4">
            Tier classification is based on qualifying monthly trading volume. Rebate rates are
            indicative — your exact rate is confirmed in your individual IB agreement.
          </p>
          <Button
            href="/contact"
            data-track-event="cta"
            data-track-label="Discuss Your Tier"
            data-track-section="tier_table"
          >
            Discuss Your Tier
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
