"use client";

import { motion } from "framer-motion";
import {
  Users,
  Globe,
  Radio,
  GraduationCap,
  BarChart3,
  Network,
  BookOpen,
  Copy,
} from "lucide-react";

const audience = [
  {
    icon: Users,
    title: "Professional IBs",
    desc: "Experienced Introducing Brokers looking to maximise their rebate income with better tier structures and partnership terms.",
    color: "#6366F1",
  },
  {
    icon: Globe,
    title: "Trading Communities",
    desc: "Moderators and owners of Telegram groups, Discord servers, and online forums with active trader audiences.",
    color: "#34D399",
  },
  {
    icon: Radio,
    title: "Signal Providers",
    desc: "Signal services with active subscribers who follow trading recommendations and place real trades.",
    color: "#A78BFA",
  },
  {
    icon: GraduationCap,
    title: "Trading Academies",
    desc: "Course creators and educators who teach forex, CFD or financial trading to paying students.",
    color: "#FFD700",
  },
  {
    icon: BarChart3,
    title: "Money Managers",
    desc: "Portfolio managers and fund operators whose clients generate consistent monthly trading volume.",
    color: "#6366F1",
  },
  {
    icon: Copy,
    title: "Copy Trading Networks",
    desc: "Strategy providers on copy trading platforms with follower bases that generate measurable monthly lots.",
    color: "#34D399",
  },
  {
    icon: BookOpen,
    title: "Aspiring IBs",
    desc: "Professionals who want to build a recurring IB revenue stream for the first time, with full onboarding support.",
    color: "#A78BFA",
  },
  {
    icon: Network,
    title: "Financial Networks",
    desc: "Business development professionals, financial advisors, or networks with access to active trading clients.",
    color: "#FFD700",
  },
];

export function Benefits() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-accent opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-accent mb-4">
            Who Is This For
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Built For{" "}
            <span className="gradient-text">IB Professionals</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Equity IB is designed for anyone building a client referral business in the trading
            space. If your audience trades, you can earn recurring rebates every trading day.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {audience.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="glass rounded-2xl p-6 group cursor-default relative overflow-hidden border border-white/[0.05] hover:border-white/[0.12] transition-all"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${item.color}10 0%, transparent 70%)`,
                  }}
                />
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${item.color}15` }}
                >
                  <Icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-slate-500 mt-10"
        >
          Not sure if you qualify?{" "}
          <a href="/contact" className="text-primary hover:underline">
            Apply and we&apos;ll assess your situation →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
