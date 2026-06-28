"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, TrendingUp, Globe, Shield, Users, Zap } from "lucide-react";

const values = [
  { icon: Shield, title: "Integrity First", desc: "We partner only with regulated brokers. Our reputation is built on your clients' trust." },
  { icon: TrendingUp, title: "Partner Success", desc: "Your growth is our growth. We invest in tools and people to maximise your earnings." },
  { icon: Globe, title: "Global Mindset", desc: "Built for IBs who think across borders. Infrastructure in every major trading region." },
  { icon: Zap, title: "Speed Over Bureaucracy", desc: "Decisions made fast. Payouts sent on time. Support that responds, not just acknowledges." },
];

const milestones = [
  { year: "2018", event: "Founded with a single broker partnership and 12 IBs." },
  { year: "2019", event: "Expanded to 5 broker partners. First $1M in commissions paid." },
  { year: "2020", event: "Launched real-time tracking dashboard. Crossed 500 active partners." },
  { year: "2021", event: "Entered Asian and Middle Eastern markets. Series A funding closed." },
  { year: "2022", event: "1,000+ active partners. Daily rebate settlement system launched." },
  { year: "2023", event: "$1B in total commissions paid. 40 countries supported." },
  { year: "2024", event: "8,400 partners worldwide. $2.4B lifetime commissions paid." },
];

const leadership = [
  { name: "Alexandra Chen", role: "CEO & Co-Founder", bg: "from-primary to-secondary", initials: "AC" },
  { name: "Daniel Okafor", role: "CTO & Co-Founder", bg: "from-secondary to-accent", initials: "DO" },
  { name: "Sarah Müller", role: "Head of Partnerships", bg: "from-accent to-primary", initials: "SM" },
  { name: "James Thornton", role: "Chief Revenue Officer", bg: "from-primary to-accent", initials: "JT" },
];

export default function AboutContent() {
  return (
    <div className="pt-32 pb-0">
      {/* Hero */}
      <section className="relative pb-24">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-primary mb-6">
            Our story
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl sm:text-6xl font-extrabold tracking-tight text-balance">
            Built by IBs,{" "}
            <span className="gradient-text">for IBs</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Equity IB was founded by introducing brokers who were tired of opaque reporting, slow payouts, and networks that treated partners as an afterthought. We built the platform we wished existed.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Target, title: "Our Mission", color: "text-primary", bg: "bg-primary/10", text: "To give every introducing broker — from solo educators to multi-market networks — the infrastructure, transparency, and payouts that were previously only available to institutional partners. We democratise access to institutional IB terms." },
            { icon: Eye, title: "Our Vision", color: "text-accent", bg: "bg-accent/10", text: "A world where any financial professional can build a sustainable, scalable business by connecting traders with the right brokers — and be compensated fairly, transparently, and promptly for the value they create." },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-8">
                <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h2 className="text-xl font-bold text-white mb-3">{item.title}</h2>
                <p className="text-slate-400 leading-relaxed">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Values */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-extrabold mb-8">
          Company <span className="gradient-text">values</span>
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div key={v.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass rounded-2xl p-5">
                <Icon className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-semibold text-white mb-1.5">{v.title}</h3>
                <p className="text-sm text-slate-400">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-extrabold mb-10 text-center">
          Growth <span className="gradient-text">timeline</span>
        </motion.h2>
        <div className="relative">
          <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-accent/40 to-transparent" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <motion.div key={m.year} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="flex items-start gap-6">
                <div className="w-14 flex-shrink-0 text-right">
                  <span className="text-sm font-bold text-primary">{m.year}</span>
                </div>
                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background" />
                </div>
                <p className="text-sm text-slate-300 leading-relaxed pt-0.5">{m.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-extrabold mb-8">
          Leadership <span className="gradient-text">team</span>
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {leadership.map((l, i) => (
            <motion.div key={l.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass rounded-2xl p-6 text-center">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${l.bg} flex items-center justify-center text-lg font-bold text-white mx-auto mb-4`}>{l.initials}</div>
              <div className="font-semibold text-white">{l.name}</div>
              <div className="text-xs text-slate-400 mt-1">{l.role}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
