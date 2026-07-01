"use client";

import { motion }    from "framer-motion";
import { ArrowRight, CheckCircle2, BadgeCheck, Banknote, TrendingUp } from "lucide-react";

const cards = [
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

export function FreeToJoin() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-40 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-[0.06] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-accent/[0.05] blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-5 border"
            style={{ background: "rgba(52,211,153,0.08)", color: "#34D399", borderColor: "rgba(52,211,153,0.25)" }}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            100% Free to Join
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Why Pay to{" "}
            <span className="gradient-text">Become an IB?</span>
          </h2>
          <p className="mt-3 text-lg font-semibold text-white">
            Build Your Business Without Upfront Costs
          </p>
          <p className="mt-4 text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            At Equity IB, we believe professional Introducing Broker partnerships should be accessible.
            That&apos;s why joining our programme is completely free. Once approved, you&apos;ll receive
            access to competitive rebate tiers, dedicated support and professional broker technology —
            without paying a joining fee.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative glass-strong rounded-2xl p-6 border border-white/[0.07] hover:border-accent/25 transition-all group overflow-hidden"
                style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.25)" }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 30% 0%, rgba(52,211,153,0.07) 0%, transparent 65%)" }}
                />
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(52,211,153,0.12)" }}
                >
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">{card.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(52,211,153,0.55), transparent)" }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <a
            href="#apply"
            className="btn-glow inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl text-sm relative overflow-hidden group"
          >
            <span className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            Start Your Free IB Partnership
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-xs text-slate-500 mt-3">
            No registration fees &nbsp;·&nbsp; No membership costs &nbsp;·&nbsp; No hidden charges
          </p>
        </motion.div>
      </div>
    </section>
  );
}
