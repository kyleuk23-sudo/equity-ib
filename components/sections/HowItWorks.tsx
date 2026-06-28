"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Users,
  Link2,
  UserPlus,
  TrendingUp,
  Banknote,
} from "lucide-react";

const steps = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Apply Online",
    desc: "Complete a short IB application in under 5 minutes. Tell us about your audience, trading volume and goals.",
    color: "#6366F1",
    ringColor: "rgba(99,102,241,0.25)",
  },
  {
    n: "02",
    icon: Users,
    title: "Meet Your Account Manager",
    desc: "Your dedicated IB manager will reach out within 24 hours to discuss your partnership structure and rebate tier.",
    color: "#A78BFA",
    ringColor: "rgba(167,139,250,0.25)",
  },
  {
    n: "03",
    icon: Link2,
    title: "Receive Your IB Tracking Link",
    desc: "Access your partner dashboard instantly. Get your unique tracking links, marketing materials and onboarding resources.",
    color: "#34D399",
    ringColor: "rgba(52,211,153,0.25)",
  },
  {
    n: "04",
    icon: UserPlus,
    title: "Refer Traders",
    desc: "Share your links through your channels — trading community, social media, academy, or direct referrals.",
    color: "#FFD700",
    ringColor: "rgba(255,215,0,0.25)",
  },
  {
    n: "05",
    icon: TrendingUp,
    title: "Clients Trade",
    desc: "Every lot your referred clients trade generates a rebate for you. More volume means higher tier and higher rebate per lot.",
    color: "#6366F1",
    ringColor: "rgba(99,102,241,0.25)",
  },
  {
    n: "06",
    icon: Banknote,
    title: "Earn Rebates Every Day",
    desc: "Rebates are calculated and settled every trading day. Receive daily IB earnings directly to bank, USDT, BTC, ETH or local transfer.",
    color: "#34D399",
    ringColor: "rgba(52,211,153,0.25)",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-accent mb-4">
            Simple Process
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Live In{" "}
            <span className="gradient-text">Six Steps</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm">
            From application to first rebate in under 48 hours. Our onboarding is built to get
            you earning as fast as possible.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {/* Decorative connecting lines */}
          <div className="hidden lg:block absolute top-12 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-primary/10 via-accent/20 to-primary/10 pointer-events-none" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative glass rounded-2xl p-6 group hover:border-white/[0.12] transition-all"
              >
                {/* Step number */}
                <div
                  className="absolute -top-3 -left-1 w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold border border-white/[0.08]"
                  style={{
                    background: `${step.color}15`,
                    color: step.color,
                  }}
                >
                  {step.n}
                </div>

                {/* Arrow connector for non-last items in a row */}
                {i < steps.length - 1 && (
                  <div className="hidden sm:block lg:hidden absolute top-12 -right-3 text-slate-600">
                    →
                  </div>
                )}

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 mt-2 transition-all group-hover:scale-110"
                  style={{
                    background: `${step.color}10`,
                    boxShadow: `0 0 0 1px ${step.color}20`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: step.color }} />
                </div>

                <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>

                {/* Step indicator */}
                <div
                  className="absolute bottom-4 right-4 text-xs font-mono opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ color: step.color }}
                >
                  Step {parseInt(step.n)}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Connector arrows for mobile */}
        <div className="flex lg:hidden justify-center mt-4">
          <p className="text-xs text-slate-500 text-center">
            ↓ Each step flows into the next — from application to daily rebate earnings
          </p>
        </div>
      </div>
    </section>
  );
}
