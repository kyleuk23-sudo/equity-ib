"use client";

import { motion } from "framer-motion";
import {
  TrendingUp, DollarSign, BarChart3, Users, Repeat,
  Check, Clock, Star, Award, Link2, ChevronUp, Zap,
} from "lucide-react";
import { ButtonV6 } from "@/components/ui/ButtonV6";
import { V6 } from "@/lib/designTokensV6";
import { TIER_COLORS_V6 } from "@/lib/tierColorsV6";

const features = [
  { icon: TrendingUp, title: "IB Rebate Tiers", desc: "Earn increasingly competitive rebates as your monthly trading volume grows — six tiers from Starter to Diamond." },
  { icon: Clock,       title: "Daily Rebate Payments", desc: "Receive eligible IB rebates daily through the broker's secure payment system with full settlement transparency." },
  { icon: DollarSign,  title: "Up To $30 Per Lot", desc: "Top-performing IBs can qualify for rebates of up to $30 per traded lot, depending on trading volume and commercial agreement." },
  { icon: BarChart3,   title: "Transparent Earnings", desc: "Monitor your trading volume, rebate tier and payment history through the broker's professional client portal." },
  { icon: Users,       title: "Dedicated IB Support", desc: "Work directly with experienced IB relationship managers who help you maximise business growth and tier progression." },
  { icon: Repeat,      title: "Long-Term Partnership", desc: "Build recurring IB revenue through long-term client relationships instead of one-time referral payments." },
];

const tiers = [
  { name: "Starter",  lots: "0–99",       rebate: "$10", benefit: "Standard Support",      perks: ["IB tracking links", "Online portal access", "Email support"] },
  { name: "Bronze",   lots: "100–249",    rebate: "$12", benefit: "Faster Onboarding",      perks: ["Priority onboarding", "Marketing materials", "Email & chat support"] },
  { name: "Silver",   lots: "250–499",    rebate: "$15", benefit: "Marketing Resources",    perks: ["Full marketing hub access", "Co-branded materials", "Dedicated chat line"] },
  { name: "Gold",     lots: "500–999",    rebate: "$20", benefit: "Dedicated IB Manager",   perks: ["Personal IB manager", "Custom landing pages", "Priority withdrawals"], popular: true },
  { name: "Platinum", lots: "1,000–2,499", rebate: "$25", benefit: "Priority Support",       perks: ["Senior IB manager", "Bespoke campaigns", "Fast-track settlement"] },
  { name: "Diamond",  lots: "2,500+",     rebate: "Up To $30", benefit: "VIP Partnership",  perks: ["VIP account management", "Custom rebate structure", "Dedicated infrastructure"] },
];

const steps = [
  { n: "01", title: "Join Equity IB as an approved Introducing Broker", desc: "Submit a short application. Our team reviews and responds within 24 hours." },
  { n: "02", title: "Refer traders using your unique referral link", desc: "Share your personalised tracking link through your channels, community or audience." },
  { n: "03", title: "Your referred clients trade with the broker", desc: "Clients open accounts, deposit funds and begin trading through the regulated broker partner." },
  { n: "04", title: "Trading volume generates IB rebates", desc: "Every lot your referred clients trade accrues a rebate based on your current tier." },
  { n: "05", title: "Eligible rebates are paid daily", desc: "Settled each trading day via bank transfer, USDT, BTC, ETH or local transfer where available." },
  { n: "06", title: "Increase volume to unlock higher rebate tiers", desc: "As monthly trading volume grows, you automatically progress to higher tiers and higher rebates per lot." },
];

const examples = [
  { lots: "250",   tier: "Silver",  rebate: "$15",         monthly: "$3,750",         icon: Award },
  { lots: "750",   tier: "Gold",    rebate: "$20",         monthly: "$15,000",        icon: Star, highlight: true },
  { lots: "2,500", tier: "Diamond", rebate: "Up To $30",   monthly: "Up to $75,000",  icon: Zap },
];

export default function PartnersContent() {
  return (
    <div className="pt-28 pb-0" style={{ background: V6.bg }}>
      <section className="relative pb-20 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)" }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
            style={{ background: V6.bgSecondary, border: `1px solid ${V6.border}`, color: V6.gold }}
          >
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: V6.gold }} />
            IB Rebate Programme
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.02em] text-balance"
            style={{ color: V6.fgPrimary }}
          >
            Earn industry-leading{" "}
            <span style={{ color: V6.gold }}>IB rebates</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: V6.fgSecondary }}
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
            <ButtonV6 href="/contact" className="w-full sm:w-auto">
              Become an Introducing Broker
            </ButtonV6>
            <ButtonV6 href="/#calculator" variant="secondary" className="w-full sm:w-auto">
              Calculate Your Earnings
            </ButtonV6>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-10"
          >
            {["Up To $30 Per Lot", "Daily Rebate Payments", "6 Rebate Tiers", "Dedicated IB Manager"].map((label) => (
              <div key={label} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: V6.gold }} />
                <span className="text-xs" style={{ color: V6.fgMuted }}>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs font-medium uppercase tracking-[0.14em] mb-4" style={{ color: V6.gold }}>
            Why Equity IB
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em]" style={{ color: V6.fgPrimary }}>
            Built exclusively for Introducing Brokers
          </h2>
          <p className="mt-3 text-sm max-w-xl mx-auto" style={{ color: V6.fgSecondary }}>
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
                className="card-v6 rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(212,175,55,0.10)" }}>
                  <Icon className="w-5 h-5" style={{ color: V6.gold }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: V6.fgPrimary }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: V6.fgSecondary }}>{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="tiers" className="pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] mb-4" style={{ color: V6.gold }}>
              <TrendingUp className="w-3.5 h-3.5" />
              Rebate Structure
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em]" style={{ color: V6.fgPrimary }}>
              IB rebate tier programme
            </h2>
            <p className="mt-3 text-sm max-w-xl mx-auto" style={{ color: V6.fgSecondary }}>
              Six tiers. Higher monthly trading volume unlocks higher rebates per lot. Progress is automatic — no manual review required.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tiers.map((tier, i) => {
              const accent = TIER_COLORS_V6[tier.name];
              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="card-v6 relative rounded-2xl p-6"
                  style={tier.popular ? { borderColor: "rgba(212,175,55,0.4)", boxShadow: "0 0 30px rgba(212,175,55,0.20)" } : undefined}
                >
                  {tier.popular && (
                    <div
                      className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{ background: "rgba(212,175,55,0.15)", color: V6.gold, border: `1px solid ${V6.borderGold}` }}
                    >
                      <Star className="w-3 h-3 fill-current" />
                      Most Popular
                    </div>
                  )}

                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm font-bold mb-4"
                    style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}40` }}
                  >
                    {tier.name}
                  </div>

                  <div className="mb-1">
                    <span className="text-3xl font-bold" style={{ color: V6.fgPrimary }}>{tier.rebate}</span>
                    <span className="text-sm ml-2" style={{ color: V6.fgSecondary }}>per lot</span>
                  </div>

                  <div className="text-xs mb-4" style={{ color: V6.fgMuted }}>{tier.lots} lots / month</div>

                  <div
                    className="text-xs font-semibold mb-5 px-2 py-1 rounded-lg inline-block"
                    style={{ background: `${accent}18`, color: accent }}
                  >
                    {tier.benefit}
                  </div>

                  <ul className="space-y-2.5">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-2.5 text-xs" style={{ color: V6.fgSecondary }}>
                        <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: accent }} />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-xs mt-6"
            style={{ color: V6.fgMuted }}
          >
            Tiers are assessed monthly based on qualifying trading volume. Rebate rates are indicative and subject to your individual commercial agreement.
          </motion.p>
        </div>
      </section>

      <section id="payments" className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] mb-4" style={{ color: V6.gold }}>
            <Link2 className="w-3.5 h-3.5" />
            The IB Rebate Model
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em]" style={{ color: V6.fgPrimary }}>
            How IB rebates work
          </h2>
          <p className="mt-3 text-sm max-w-xl mx-auto" style={{ color: V6.fgSecondary }}>
            A transparent, volume-based model designed to reward consistent growth.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 top-8 bottom-8 w-px hidden sm:block pointer-events-none" style={{ background: V6.border }} />

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
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 z-10"
                  style={{ background: "rgba(212,175,55,0.10)", color: V6.gold, border: `1px solid ${V6.borderGold}` }}
                >
                  {step.n}
                </div>

                <div className="card-v6 rounded-2xl p-5 flex-1">
                  <div className="flex items-start gap-3">
                    <div>
                      <h3 className="font-semibold text-sm leading-snug mb-1" style={{ color: V6.fgPrimary }}>
                        {step.title}
                      </h3>
                      <p className="text-xs leading-relaxed" style={{ color: V6.fgSecondary }}>{step.desc}</p>
                    </div>
                    <ChevronUp
                      className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 rotate-90 transition-opacity"
                      style={{ color: V6.gold }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] mb-4" style={{ color: V6.gold }}>
              <DollarSign className="w-3.5 h-3.5" />
              Rebate Examples
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em]" style={{ color: V6.fgPrimary }}>
              What your IB rebates could look like
            </h2>
            <p className="mt-3 text-sm max-w-xl mx-auto" style={{ color: V6.fgSecondary }}>
              Three illustrative scenarios across different volume levels. All figures are estimates only.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {examples.map((ex, i) => {
              const Icon = ex.icon;
              const accent = TIER_COLORS_V6[ex.tier];
              return (
                <motion.div
                  key={ex.tier}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-v6 relative rounded-2xl p-7 text-center"
                  style={ex.highlight ? { borderColor: "rgba(212,175,55,0.4)" } : undefined}
                >
                  {ex.highlight && (
                    <div
                      className="absolute top-4 right-4 text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{ background: "rgba(212,175,55,0.15)", color: V6.gold, border: `1px solid ${V6.borderGold}` }}
                    >
                      Popular
                    </div>
                  )}

                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: `${accent}22` }}>
                    <Icon className="w-5 h-5" style={{ color: accent }} />
                  </div>

                  <div className="text-3xl font-bold mb-0.5" style={{ color: V6.fgPrimary }}>{ex.lots}</div>
                  <div className="text-xs mb-4" style={{ color: V6.fgMuted }}>Monthly Lots</div>

                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold mb-4"
                    style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}40` }}
                  >
                    {ex.tier} Tier
                  </div>

                  <div className="text-sm mb-1" style={{ color: V6.fgSecondary }}>{ex.rebate} per lot</div>

                  <div className="h-px my-4" style={{ background: V6.border }} />
                  <div className="text-xs mb-1" style={{ color: V6.fgMuted }}>Est. Monthly Rebate</div>
                  <div className="text-2xl font-bold" style={{ color: accent }}>
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
            <p className="text-xs max-w-xl mx-auto" style={{ color: V6.fgMuted }}>
              Examples are for illustrative purposes only. Actual rebate rates depend on trading volume, broker, instruments traded and individual commercial agreement.
            </p>
            <div className="mt-6 inline-block">
              <ButtonV6
                href="/contact"
                data-track-event="cta"
                data-track-label="Start Earning IB Rebates"
                data-track-section="partners_page"
              >
                Start Earning IB Rebates
              </ButtonV6>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
