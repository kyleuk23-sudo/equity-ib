"use client";

import { motion } from "framer-motion";
import { BarChart3, Clock, Users, Gift } from "lucide-react";

const cards = [
  {
    icon: Gift,
    title: "Free to Join",
    desc: "Apply to become an Equity IB partner without paying any registration, membership or subscription fees. Focus on growing your client network while we support your long-term success.",
    color: "#34D399",
    badge: "Zero Fees",
    delay: 0,
  },
  {
    icon: BarChart3,
    title: "Industry-Leading Rebate Tiers",
    desc: "Earn competitive rebates based on monthly trading volume, with top-performing partners qualifying for up to $30 per traded lot.",
    color: "#C8952A",
    badge: "Up to $30 / lot",
    delay: 0.08,
  },
  {
    icon: Clock,
    title: "Daily Rebate Payments",
    desc: "Receive eligible IB rebates every trading day through the broker's supported withdrawal methods. No 30-day holds.",
    color: "#34D399",
    badge: "Paid Daily",
    delay: 0.16,
  },
  {
    icon: Users,
    title: "Dedicated Growth Support",
    desc: "Work with experienced IB managers focused on helping you build and scale your introducing broker business.",
    color: "#A78BFA",
    badge: "Personal Manager",
    delay: 0.24,
  },
];

export function ValueProposition() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: card.delay }}
                whileHover={{ y: -5 }}
                className="relative glass-strong rounded-2xl p-8 border border-white/[0.07] hover:border-white/[0.14] transition-all overflow-hidden group"
                style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.25)" }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 30% 0%, ${card.color}12 0%, transparent 65%)` }}
                />

                {/* Top row */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: `${card.color}18` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: card.color }} />
                  </div>
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded-full"
                    style={{ background: `${card.color}18`, color: card.color, border: `1px solid ${card.color}30` }}
                  >
                    {card.badge}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white mb-3 leading-snug">{card.title}</h2>
                <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${card.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
