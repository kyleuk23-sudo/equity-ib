"use client";

import { motion } from "framer-motion";
import {
  BarChart3, Clock, Headphones, Shield, Globe, Zap,
  LineChart, RefreshCw, ArrowRight,
} from "lucide-react";
import Link from "next/link";

const features = [
  { icon: BarChart3,  title: "Competitive Rebate Tiers",  desc: "Earn up to $30 per traded lot across six tier levels, with rates that grow automatically as your monthly volume increases.",  color: "#C8952A" },
  { icon: Clock,      title: "Daily Payments",             desc: "IB rebates are settled every trading day — no 30-day holds, no weekly batches. Your income arrives as it's earned.",          color: "#34D399" },
  { icon: Zap,        title: "Premium Broker Technology",  desc: "Your clients trade on a professional platform with tight spreads, fast execution and reliable infrastructure.",                 color: "#F5C842" },
  { icon: Headphones, title: "Dedicated Account Manager", desc: "Every partner receives a named account manager — not a generic helpdesk — available to support your growth directly.",           color: "#A78BFA" },
  { icon: Shield,     title: "Fast Approval",              desc: "Most IB applications are reviewed and approved within 24 hours. You can start referring clients almost immediately.",             color: "#6366F1" },
  { icon: Globe,      title: "Global Reach",               desc: "Accept clients from 120+ countries with multi-language support and regionally relevant payment methods for deposits.",            color: "#34D399" },
  { icon: LineChart,  title: "Transparent Reporting",      desc: "Full visibility into your lot volumes, rebate accrual, tier status and payment history — updated in real time.",                 color: "#F5C842" },
  { icon: RefreshCw,  title: "Recurring Income",           desc: "Unlike one-time referral fees, IB rebates recur for the lifetime of the client relationship — building lasting income.",         color: "#C8952A" },
];

export function WhyEquityIB() {
  return (
    <section id="why-equity-ib" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-primary mb-4">
            Why Choose Equity IB
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Built For IBs Who Take<br />
            <span className="gradient-text">Their Business Seriously</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Equity IB is not a short-term affiliate programme. It is a professional partnership
            built on transparent rebates, daily payments and long-term growth support.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 group cursor-default relative overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-all"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ background: `radial-gradient(circle at 20% 0%, ${f.color}12 0%, transparent 65%)` }}
                />
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: `${f.color}18`, boxShadow: `0 0 0 1px ${f.color}22` }}
                >
                  <Icon className="w-[18px] h-[18px]" style={{ color: f.color }} />
                </div>
                <h3 className="font-bold text-white mb-1.5 text-sm leading-snug">{f.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{f.desc}</p>
                <div className="w-6 h-0.5 rounded-full mt-3 transition-all duration-300 group-hover:w-12" style={{ background: f.color }} />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="#apply"
            className="btn-glow inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl transition-all hover:opacity-90 text-sm relative overflow-hidden group"
          >
            <span className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            Apply Free Today
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
