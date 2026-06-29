"use client";

import { motion } from "framer-motion";
import {
  BarChart3, Clock, Headphones, Shield, Globe, Zap,
  MessageSquare, LineChart, Lock, Megaphone, RefreshCw, Handshake,
} from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const features = [
  { icon: BarChart3,    title: "Competitive Rebate Tiers",   desc: "Earn up to $30 per traded lot across six tier levels, with rates that grow automatically as your volume increases.",    color: "#C8952A" },
  { icon: Clock,        title: "Daily Payments",              desc: "IB rebates are settled every trading day — no 30-day holds, no weekly batches. Your income arrives as it's earned.",   color: "#34D399" },
  { icon: Zap,          title: "Premium Broker Technology",   desc: "Your clients trade on a professional platform with tight spreads, fast execution and reliable infrastructure.",          color: "#F5C842" },
  { icon: Headphones,   title: "Dedicated Account Manager",  desc: "Every partner receives a named account manager — not a generic helpdesk — available to support your growth directly.",  color: "#A78BFA" },
  { icon: Shield,       title: "Fast Approval",               desc: "Most IB applications are reviewed and approved within 24 hours. You can start referring clients almost immediately.",    color: "#6366F1" },
  { icon: Globe,        title: "Global Reach",                desc: "Accept clients from 120+ countries with multi-language support and regionally relevant payment methods for deposits.",   color: "#34D399" },
  { icon: MessageSquare,title: "Professional Support",        desc: "Round-the-clock partner assistance from a team that understands the IB business and responds to real queries.",          color: "#C8952A" },
  { icon: LineChart,    title: "Transparent Reporting",       desc: "Full visibility into your lot volumes, rebate accrual, tier status and payment history — updated in real time.",         color: "#F5C842" },
  { icon: Lock,         title: "Secure Client Portal",        desc: "Clients manage their accounts through a regulated, secure portal with professional-grade account protection.",            color: "#A78BFA" },
  { icon: Megaphone,    title: "Marketing Assistance",        desc: "Access branded marketing assets, referral tracking tools and co-branded materials to help you grow your audience.",      color: "#6366F1" },
  { icon: RefreshCw,    title: "Recurring Income Potential",  desc: "Unlike one-time referral fees, IB rebates recur for the lifetime of the client relationship — building lasting income.",  color: "#34D399" },
  { icon: Handshake,    title: "Long-Term Partnership",       desc: "We invest in partners who think long-term. Our tier system, bespoke Diamond deals and dedicated support reflect that.",  color: "#C8952A" },
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
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Built For IBs Who Take<br />
            <span className="gradient-text">Their Business Seriously</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Equity IB is not a short-term affiliate programme. It is a professional partnership
            built on transparent rebates, daily payments and long-term growth support.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 group cursor-default relative overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-all"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ background: `radial-gradient(circle at 20% 0%, ${f.color}12 0%, transparent 65%)` }}
                />
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: `${f.color}18` }}
                >
                  <Icon className="w-4.5 h-4.5 w-[18px] h-[18px]" style={{ color: f.color }} />
                </div>
                <h3 className="font-bold text-white mb-1.5 text-sm">{f.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{f.desc}</p>
                <div className="w-6 h-0.5 rounded-full mt-3 transition-all group-hover:w-12" style={{ background: f.color }} />
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
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-glow text-sm"
          >
            Apply as an IB Partner
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
