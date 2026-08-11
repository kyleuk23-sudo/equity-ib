"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Star, Crown, BarChart3, Check } from "lucide-react";
import { ButtonV6 } from "@/components/ui/ButtonV6";
import { V6 } from "@/lib/designTokensV6";
import { TIER_COLORS_V6 } from "@/lib/tierColorsV6";

const tiers = [
  {
    name: "Starter", lots: "0–99", rebate: "$10", rebateNum: 10,
    icon: Star, featured: false,
    benefits: ["Standard Support", "Partner Dashboard", "Basic Reporting", "Tracking Links"],
  },
  {
    name: "Bronze", lots: "100–249", rebate: "$12", rebateNum: 12,
    icon: Shield, featured: false,
    benefits: ["All Starter Benefits", "Faster Payments", "Priority Onboarding", "Marketing Templates"],
  },
  {
    name: "Silver", lots: "250–499", rebate: "$15", rebateNum: 15,
    icon: BarChart3, featured: false,
    benefits: ["All Bronze Benefits", "Marketing Materials", "Co-branded Assets", "Monthly Reviews"],
  },
  {
    name: "Gold", lots: "500–999", rebate: "$20", rebateNum: 20,
    icon: Star, featured: true,
    benefits: ["All Silver Benefits", "Dedicated Account Manager", "Custom Landing Pages", "Performance Bonuses"],
  },
  {
    name: "Platinum", lots: "1,000–2,499", rebate: "$25", rebateNum: 25,
    icon: Zap, featured: false,
    benefits: ["All Gold Benefits", "Priority Support", "Advanced Analytics", "Rate Increase Reviews"],
  },
  {
    name: "Diamond", lots: "2,500+", rebate: "Up To $30", rebateNum: 30,
    icon: Crown, featured: false,
    benefits: ["All Platinum Benefits", "Custom Deal Structure", "VIP Support Line", "Bespoke Partnership"],
  },
];

export function TierTable() {
  return (
    <section id="ib-rebates" className="py-24 relative overflow-hidden" style={{ background: V6.bg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs font-medium uppercase tracking-[0.14em] mb-4" style={{ color: V6.gold }}>
            Rebate Tier System
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.02em]" style={{ color: V6.fgPrimary }}>
            Grow your tier, grow your income
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-relaxed" style={{ color: V6.fgSecondary }}>
            Your rebate rate increases automatically as your monthly trading volume grows. The
            more volume your clients generate, the higher your rebate per lot — up to $30.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {tiers.map((tier, i) => {
            const Icon = tier.icon;
            const accent = TIER_COLORS_V6[tier.name];
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="card-v6 relative rounded-2xl p-5 flex flex-col"
                style={tier.featured ? { borderColor: "rgba(212,175,55,0.4)", boxShadow: "0 0 30px rgba(212,175,55,0.20)" } : undefined}
              >
                {tier.featured && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
                    style={{ background: V6.gold, color: V6.onAccent }}
                  >
                    Most Popular
                  </div>
                )}

                <div className="mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: `${accent}22` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: accent }} />
                  </div>
                  <h3 className="font-semibold text-lg" style={{ color: V6.fgPrimary }}>{tier.name}</h3>
                  <p className="text-xs mt-0.5" style={{ color: V6.fgMuted }}>{tier.lots} lots/month</p>
                </div>

                <div className="mb-5">
                  <div className="text-2xl font-bold" style={{ color: accent }}>{tier.rebate}</div>
                  <div className="text-xs" style={{ color: V6.fgMuted }}>per lot rebate</div>
                </div>

                <div className="mb-4">
                  <div className="h-1 rounded-full overflow-hidden" style={{ background: V6.bgInteractive }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(tier.rebateNum / 30) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.07, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: accent }}
                    />
                  </div>
                  <div className="flex justify-between text-[9px] mt-1" style={{ color: V6.fgMuted }}>
                    <span>$0</span>
                    <span>$30</span>
                  </div>
                </div>

                <ul className="space-y-2 flex-1">
                  {tier.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: V6.success }} />
                      <span className="text-xs leading-snug" style={{ color: V6.fgSecondary }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-sm mb-4" style={{ color: V6.fgSecondary }}>
            Tier classification is based on qualifying monthly trading volume. Rebate rates are
            indicative — your exact rate is confirmed in your individual IB agreement.
          </p>
          <ButtonV6
            href="/contact"
            data-track-event="cta"
            data-track-label="Discuss Your Tier"
            data-track-section="tier_table"
          >
            Discuss Your Tier
          </ButtonV6>
        </motion.div>
      </div>
    </section>
  );
}
