"use client";

import { motion } from "framer-motion";
import { CheckCircle2, BadgeCheck, Banknote, TrendingUp } from "lucide-react";
import { ButtonV6 } from "@/components/ui/ButtonV6";
import { V6 } from "@/lib/designTokensV6";

const items = [
  {
    icon: CheckCircle2,
    title: "100% Free Application",
    desc: "Apply online in minutes at no cost. No registration fee, no application charge — simply submit your details for review.",
  },
  {
    icon: BadgeCheck,
    title: "No Membership Fees",
    desc: "There are no recurring subscription or platform fees to remain an Equity IB partner. Your partnership costs nothing to maintain.",
  },
  {
    icon: Banknote,
    title: "No Hidden Charges",
    desc: "Our application process is fully transparent. There are no unexpected costs at any stage — from application through to approval.",
  },
  {
    icon: TrendingUp,
    title: "Focus on Growth",
    desc: "Spend your time building your client base and growing your IB business — not paying unnecessary fees or platform subscriptions.",
  },
];

/**
 * Single unified panel (not four separate cards) — reads as one proof
 * statement rather than repeating the card-grid pattern a third time.
 */
export function FreeToJoin() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-5"
            style={{ background: "rgba(34,197,94,0.10)", color: V6.success, border: "1px solid rgba(34,197,94,0.25)" }}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            100% Free to Join
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.02em]" style={{ color: V6.fgPrimary }}>
            Why pay to become an IB?
          </h2>
          <p className="mt-4 text-base leading-relaxed max-w-2xl mx-auto" style={{ color: V6.fgSecondary }}>
            At Equity IB, we believe professional Introducing Broker partnerships should be
            accessible. Joining is completely free — once approved, you get competitive rebate
            tiers, dedicated support and professional broker technology, with no joining fee.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="card-v6 rounded-2xl p-8 sm:p-10"
        >
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(212,175,55,0.10)" }}
                  >
                    <Icon className="w-[18px] h-[18px]" style={{ color: V6.gold }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1.5" style={{ color: V6.fgPrimary }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: V6.fgSecondary }}>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <ButtonV6
            href="#apply"
            data-track-event="cta"
            data-track-label="Start Your Free IB Partnership"
            data-track-section="free_to_join"
          >
            Start Your Free IB Partnership
          </ButtonV6>
          <p className="text-xs mt-3" style={{ color: V6.fgMuted }}>
            No registration fees &nbsp;·&nbsp; No membership costs &nbsp;·&nbsp; No hidden charges
          </p>
        </motion.div>
      </div>
    </section>
  );
}
