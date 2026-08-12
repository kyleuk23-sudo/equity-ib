"use client";

import { motion } from "framer-motion";
import { Target, Eye, Shield, TrendingUp, Globe, Zap } from "lucide-react";
import { V6 } from "@/lib/designTokensV6";
import { MeshGradientBg } from "@/components/visual/MeshGradientBg";
import { GlassSphere } from "@/components/visual/GlassSphere";
import { IconMark } from "@/components/visual/IconMark";
import { SectionDivider } from "@/components/visual/SectionDivider";

const values = [
  { icon: Shield, title: "Integrity First", desc: "We partner only with regulated brokers. Our reputation is built on your clients' trust." },
  { icon: TrendingUp, title: "Partner Success", desc: "Your growth is our growth. We invest in tools and support to help maximise your earnings." },
  { icon: Globe, title: "Global Mindset", desc: "Built for IBs who think across borders, with support across major trading regions." },
  { icon: Zap, title: "Speed Over Bureaucracy", desc: "Decisions made fast. Rebates settled daily. Support that responds, not just acknowledges." },
];

export default function AboutContent() {
  return (
    <div className="pt-32 pb-0" style={{ background: V6.bg }}>
      <section className="relative pb-24 overflow-hidden">
        <MeshGradientBg variant="hero" />
        <GlassSphere size={46} className="absolute right-[12%] top-[8%] hidden lg:block pointer-events-none" floatDelay={0.4} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-medium uppercase tracking-[0.14em] mb-6"
            style={{ color: V6.gold }}
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold tracking-[-0.02em] text-balance"
            style={{ color: V6.fgPrimary }}
          >
            Built by IBs, for IBs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: V6.fgSecondary }}
          >
            Equity IB was built around a simple idea: Introducing Brokers deserve transparent
            reporting, reliable daily payouts, and a partner team that treats them as a long-term
            business relationship — not a referral link.
          </motion.p>
        </div>
      </section>

      <SectionDivider />

      <section className="py-24 relative overflow-hidden">
        <MeshGradientBg variant="left" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Target, title: "Our Mission", text: "To give every introducing broker — from solo educators to multi-market networks — transparent rebates, reliable daily payments and genuine account support." },
              { icon: Eye, title: "Our Vision", text: "A world where any financial professional can build a sustainable, scalable business by connecting traders with the right brokers — and be compensated fairly, transparently and promptly for the value they create." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group card-v6 rounded-2xl p-8"
                >
                  <div className="mb-4">
                    <IconMark size={48}>
                      <Icon className="w-5 h-5" style={{ color: V6.gold }} />
                    </IconMark>
                  </div>
                  <h2 className="text-xl font-bold mb-3" style={{ color: V6.fgPrimary }}>{item.title}</h2>
                  <p className="leading-relaxed" style={{ color: V6.fgSecondary }}>{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-12 pb-24 relative overflow-hidden">
        <MeshGradientBg variant="corner" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
            style={{ color: V6.fgPrimary }}
          >
            Company values
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group card-v6 rounded-2xl p-5"
                >
                  <div className="mb-3">
                    <IconMark size={40}>
                      <Icon className="w-4 h-4" style={{ color: V6.gold }} />
                    </IconMark>
                  </div>
                  <h3 className="font-semibold mb-1.5" style={{ color: V6.fgPrimary }}>{v.title}</h3>
                  <p className="text-sm" style={{ color: V6.fgSecondary }}>{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
