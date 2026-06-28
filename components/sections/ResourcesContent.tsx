"use client";

import { motion } from "framer-motion";
import { BookOpen, Video, FileText, Download, ArrowRight, Zap, Users, BarChart3 } from "lucide-react";
import Link from "next/link";

const guides = [
  { title: "IB Quick-Start Guide", desc: "Everything you need to go from application to first daily rebate payment in under 48 hours.", tag: "Getting Started", icon: Zap, time: "15 min read" },
  { title: "Building Your Referral Audience", desc: "Proven frameworks for forex educators, signal providers, and community builders.", tag: "Growth", icon: Users, time: "22 min read" },
  { title: "IB Rebate Tiers Explained: Starter to Diamond", desc: "A complete breakdown of the six-tier IB rebate structure and how to maximise your earnings per lot.", tag: "IB Rebates", icon: BarChart3, time: "10 min read" },
  { title: "Compliance & Marketing Guidelines", desc: "Stay on the right side of regulations while maximising your marketing reach.", tag: "Compliance", icon: FileText, time: "18 min read" },
];

const academy = [
  { module: "Module 1", title: "Understanding the IB Business Model", duration: "45 min", free: true },
  { module: "Module 2", title: "Building Trust with a Trading Audience", duration: "60 min", free: true },
  { module: "Module 3", title: "Conversion Optimisation for Financial Content", duration: "55 min", free: false },
  { module: "Module 4", title: "Maximising Your IB Rebate Tier Progression", duration: "40 min", free: false },
  { module: "Module 5", title: "Scaling from $5K to $50K Monthly", duration: "75 min", free: false },
];

const toolkit = [
  { name: "Brand Asset Pack", desc: "Logos, banners (all IAB sizes), social templates", format: "ZIP · 84MB" },
  { name: "Email Sequence Templates", desc: "5-email onboarding sequence, pre-written and tested", format: "DOCX · 12KB" },
  { name: "Landing Page Templates", desc: "Conversion-optimised HTML templates, 3 variants", format: "ZIP · 2.4MB" },
  { name: "Trading Guide PDF", desc: "Free resource to offer your audience. Co-brandable.", format: "PDF · 3.1MB" },
];

const posts = [
  { title: "How Top IBs Use Content Marketing to Drive High-Value Trader Referrals", tag: "Strategy", date: "Dec 12, 2024", readTime: "8 min" },
  { title: "The Psychology Behind Trader Trust: What IBs Need to Know", tag: "Psychology", date: "Nov 28, 2024", readTime: "6 min" },
  { title: "IB Rebate Compounding: Why the Best IBs Think Long-Term", tag: "IB Rebates", date: "Nov 14, 2024", readTime: "5 min" },
  { title: "Market Spotlight: Southeast Asian Trader Demographics for IBs", tag: "Markets", date: "Oct 30, 2024", readTime: "10 min" },
  { title: "Regulatory Changes in 2025: What IBs Must Know Now", tag: "Compliance", date: "Oct 16, 2024", readTime: "7 min" },
  { title: "Case Study: $0 to $40K Monthly in 14 Months", tag: "Case Study", date: "Oct 2, 2024", readTime: "12 min" },
];

export default function ResourcesContent() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-primary mb-5">
            Partner resources
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
            IB <span className="gradient-text">Academy</span>
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-xl">
            Free training, guides, and tools to grow your introducing broker business. No experience required.
          </p>
        </motion.div>

        {/* Partner Guides */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Partner Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {guides.map((g, i) => {
              const Icon = g.icon;
              return (
                <motion.div key={g.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass rounded-2xl p-6 group cursor-pointer hover:border-white/[0.12] transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-primary font-medium">{g.tag}</span>
                        <span className="text-xs text-slate-500">· {g.time}</span>
                      </div>
                      <h3 className="font-semibold text-white mb-1 group-hover:text-primary transition-colors">{g.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{g.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Academy modules */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6">IB Academy Modules</h2>
          <div className="glass rounded-2xl overflow-hidden">
            {academy.map((a, i) => (
              <motion.div key={a.module} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className={`flex items-center gap-4 px-6 py-4 ${i < academy.length - 1 ? "border-b border-white/[0.04]" : ""}`}>
                <div className="w-16 text-xs font-semibold text-primary flex-shrink-0">{a.module}</div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-medium text-white">{a.title}</span>
                </div>
                <span className="text-xs text-slate-500 flex-shrink-0">{a.duration}</span>
                <div className={`flex-shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full ${a.free ? "bg-accent/10 text-accent" : "bg-white/5 text-slate-400"}`}>
                  {a.free ? "Free" : "Partner"}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Marketing toolkit */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Marketing Toolkit</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {toolkit.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass rounded-2xl p-5 flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Download className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-white text-sm">{t.name}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{t.desc}</div>
                  <div className="text-xs text-slate-500 mt-1">{t.format}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-secondary transition-colors flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Blog */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Blog</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((p, i) => (
              <motion.article key={p.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="glass rounded-2xl p-5 group cursor-pointer hover:border-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-primary font-medium">{p.tag}</span>
                  <span className="text-xs text-slate-500">· {p.readTime}</span>
                </div>
                <h3 className="font-semibold text-white text-sm leading-snug mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
                <div className="text-xs text-slate-500">{p.date}</div>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
