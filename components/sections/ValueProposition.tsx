"use client";

import { motion } from "framer-motion";
import { BarChart3, Clock, Users, Gift } from "lucide-react";
import { V6 } from "@/lib/designTokensV6";

const items = [
  { icon: Gift, title: "Free to Join", desc: "No registration, membership or subscription fees.", badge: "Zero Fees" },
  { icon: BarChart3, title: "Industry-Leading Rebate Tiers", desc: "Top-performing partners qualify for up to $30 per traded lot.", badge: "Up to $30 / lot" },
  { icon: Clock, title: "Daily Rebate Payments", desc: "Rebates are settled every trading day — no 30-day holds.", badge: "Paid Daily" },
  { icon: Users, title: "Dedicated Growth Support", desc: "Work with experienced IB managers who help you scale.", badge: "Personal Manager" },
];

/**
 * Chromeless trust strip — deliberately lighter than WhyEquityIB/FreeToJoin's
 * card treatments below it, so the homepage doesn't read as three identical
 * card-grid sections back to back. See design-system/equity-ib-v6/MASTER.md.
 */
export function ValueProposition() {
  return (
    <section className="relative py-14 border-y" style={{ borderColor: V6.border }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="w-4 h-4 flex-shrink-0" style={{ color: V6.gold }} />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.08em]" style={{ color: V6.gold }}>
                    {item.badge}
                  </span>
                </div>
                <p className="text-sm font-semibold mb-1.5" style={{ color: V6.fgPrimary }}>{item.title}</p>
                <p className="text-xs leading-relaxed" style={{ color: V6.fgSecondary }}>{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
