"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ClipboardList, CheckCircle2, Link2, TrendingUp, Wallet } from "lucide-react";
import { Button } from "@/components/ui/Button";

// One gold family progressing step to step, matching the tier/calculator
// progression elsewhere on the site — not five unrelated hues.
const steps = [
  { num: "01", icon: ClipboardList, title: "Apply Online",
    desc: "Complete our short IB application in under 5 minutes. Tell us about your audience, trading volume and goals. Our team reviews every application personally.",
    color: "#8a7458" },
  { num: "02", icon: CheckCircle2, title: "Receive Approval",
    desc: "Most applications are approved within 24 hours. Your dedicated account manager will contact you to complete onboarding and confirm your rebate agreement.",
    color: "#A88240" },
  { num: "03", icon: Link2, title: "Get Your Referral Links",
    desc: "Receive your unique tracking links and access to the partner portal. Start sharing with your audience immediately — no minimum volume to get started.",
    color: "#C8952A" },
  { num: "04", icon: TrendingUp, title: "Your Clients Trade",
    desc: "As your referred clients trade, volume accumulates against your IB account. Your tier automatically updates as your monthly volume grows.",
    color: "#DDA934" },
  { num: "05", icon: Wallet, title: "Earn Daily Rebates",
    desc: "IB rebates are calculated and settled every trading day. Payments are processed automatically to your chosen withdrawal method — no chasing, no delays.",
    color: "#F5C842" },
];

function Step({ step, index, isLast }: { step: typeof steps[0]; index: number; isLast: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = step.icon;

  return (
    <div ref={ref} className="flex gap-8 relative">
      {/* Left: number + connector */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.45, delay: index * 0.12, type: "spring", stiffness: 200 }}
          className="relative w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 z-10"
          style={{
            background: `${step.color}18`,
            border: `1px solid ${step.color}40`,
            boxShadow: `0 0 24px ${step.color}20`,
          }}
        >
          <Icon className="w-6 h-6" style={{ color: step.color }} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.12 + 0.2 }}
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black"
            style={{ background: step.color, color: "#050509" }}
          >
            {step.num.replace("0", "")}
          </motion.div>
        </motion.div>

        {/* Connector line */}
        {!isLast && (
          <div className="w-px flex-1 my-3 relative overflow-hidden bg-white/[0.04]" style={{ minHeight: 48 }}>
            <motion.div
              initial={{ height: "0%" }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 + 0.35, ease: "easeOut" }}
              className="absolute top-0 left-0 w-full rounded-full"
              style={{ background: `linear-gradient(to bottom, ${step.color}, ${steps[index + 1]?.color ?? step.color})` }}
            />
          </div>
        )}
      </div>

      {/* Right: content */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.12 + 0.08 }}
        className={`pb-${isLast ? "0" : "12"} pt-1`}
        style={{ paddingBottom: isLast ? 0 : 48 }}
      >
        <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: step.color }}>
          Step {step.num}
        </div>
        <h3 className="text-xl font-semibold text-stone-100 mb-2">{step.title}</h3>
        <p className="text-sm text-stone-400 leading-relaxed max-w-lg">{step.desc}</p>
      </motion.div>
    </div>
  );
}

export function HowItWorksTimeline() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-secondary opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: heading */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-primary mb-5">
                How It Works
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-stone-100">
                From Application<br />
                To{" "}
                <span className="gradient-text">Daily Income</span>
              </h2>
              <p className="mt-5 text-stone-400 text-sm leading-relaxed max-w-md">
                Becoming an Equity IB partner is straightforward. Most IBs receive their first daily
                rebate payment within 48 hours of going live.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { val: "< 24h", label: "Approval Time" },
                  { val: "Day 1", label: "First Payment" },
                  { val: "$30", label: "Max Per Lot" },
                ].map((s) => (
                  <div key={s.label} className="glass rounded-xl p-4 text-center">
                    <div className="text-xl font-semibold gradient-text">{s.val}</div>
                    <div className="text-xs text-stone-400 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Button
                  href="#apply"
                  data-track-event="cta"
                  data-track-label="Start Your Application"
                  data-track-section="how_it_works"
                >
                  Start Your Application
                </Button>
              </div>
              <p className="text-xs text-stone-400 mt-4">
                Want the full breakdown first?{" "}
                <Link href="/how-to-become-an-introducing-broker" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">
                  Read the complete step-by-step guide
                </Link>
              </p>
            </motion.div>
          </div>

          {/* Right: timeline */}
          <div>
            {steps.map((step, i) => (
              <Step key={step.num} step={step} index={i} isLast={i === steps.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
