"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, MousePointer, DollarSign, ArrowUpRight, Activity } from "lucide-react";

const metrics = [
  { label: "Monthly Revenue", value: "$48,320", change: "+23.4%", icon: DollarSign, positive: true },
  { label: "Total Clicks", value: "124,780", change: "+8.1%", icon: MousePointer, positive: true },
  { label: "Conversions", value: "1,247", change: "+15.2%", icon: Users, positive: true },
  { label: "FTDs This Month", value: "94", change: "+11.9%", icon: TrendingUp, positive: true },
];

const recentReferrals = [
  { name: "James W.", country: "🇬🇧 UK", deposit: "$12,500", commission: "$312", status: "Active" },
  { name: "Rahul M.", country: "🇮🇳 India", deposit: "$8,000", commission: "$200", status: "Active" },
  { name: "Sofia L.", country: "🇩🇪 Germany", deposit: "$22,000", commission: "$550", status: "Active" },
  { name: "Ahmed K.", country: "🇦🇪 UAE", deposit: "$45,000", commission: "$1,125", status: "VIP" },
  { name: "Lin C.", country: "🇸🇬 Singapore", deposit: "$15,000", commission: "$375", status: "Active" },
];

export function DashboardPreview() {
  return (
    <section id="dashboard" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-primary mb-4">
            <Activity className="w-3 h-3" /> Live dashboard
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Track everything,{" "}
            <span className="gradient-text">in real time</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Your partner dashboard gives you complete visibility into every click, conversion, and commission.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-strong rounded-3xl overflow-hidden shadow-glass border border-white/[0.06]"
        >
          {/* Dashboard header */}
          <div className="flex items-center gap-2 px-6 py-4 border-b border-white/[0.06]">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <div className="flex-1 flex justify-center">
              <div className="glass rounded-lg px-8 py-1 text-xs text-slate-400">partner.equityib.com/dashboard</div>
            </div>
          </div>

          <div className="p-6">
            {/* Metric cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {metrics.map((m, i) => {
                const Icon = m.icon;
                return (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.07 }}
                    className="glass rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-slate-400">{m.label}</span>
                      <Icon className="w-3.5 h-3.5 text-slate-500" />
                    </div>
                    <div className="text-xl font-bold text-white">{m.value}</div>
                    <div className="flex items-center gap-1 mt-1">
                      <ArrowUpRight className="w-3 h-3 text-accent" />
                      <span className="text-xs text-accent font-medium">{m.change}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Chart + table */}
            <div className="grid lg:grid-cols-5 gap-4">
              {/* Mini chart */}
              <div className="lg:col-span-2 glass rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-white">Commission Trend</span>
                  <span className="text-xs text-slate-500">Last 12 months</span>
                </div>
                <div className="flex items-end gap-1 h-24">
                  {[28, 34, 31, 42, 38, 55, 48, 62, 58, 74, 68, 85].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.04 }}
                      className="flex-1 rounded-sm"
                      style={{
                        background: i === 11
                          ? "linear-gradient(to top, #6366F1, #34D399)"
                          : "rgba(99,102,241,0.2)",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Referrals table */}
              <div className="lg:col-span-3 glass rounded-xl overflow-hidden">
                <div className="px-4 py-3 border-b border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs font-medium text-white">Recent Referrals</span>
                  <span className="text-xs text-primary cursor-pointer hover:underline">View all</span>
                </div>
                <div className="divide-y divide-white/[0.04]">
                  {recentReferrals.map((r, i) => (
                    <motion.div
                      key={r.name}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.06 }}
                      className="flex items-center px-4 py-2.5 text-xs"
                    >
                      <div className="flex-1">
                        <span className="text-white font-medium">{r.name}</span>
                        <span className="text-slate-500 ml-2">{r.country}</span>
                      </div>
                      <div className="text-slate-300 w-20 text-right">{r.deposit}</div>
                      <div className="text-accent w-20 text-right font-medium">{r.commission}</div>
                      <div className="w-16 text-right">
                        <span className={`px-2 py-0.5 rounded-full text-xs ${r.status === "VIP" ? "bg-secondary/20 text-secondary" : "bg-accent/10 text-accent"}`}>
                          {r.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
