"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ClipboardList, CheckCircle2, Link2, TrendingUp, Wallet } from "lucide-react";
import { ButtonV6 } from "@/components/ui/ButtonV6";
import { V6 } from "@/lib/designTokensV6";

// Bronze -> Gold -> Champagne progression, matching the tier/calculator
// gold family used elsewhere on the site.
const steps = [
  { num: "01", icon: ClipboardList, title: "Apply Online",
    desc: "Complete our short IB application in under 5 minutes. Tell us about your audience, trading volume and goals. Our team reviews every application personally.",
    color: "#8C6A1F" },
  { num: "02", icon: CheckCircle2, title: "Receive Approval",
    desc: "Most applications are approved within 24 hours. Your dedicated account manager will contact you to complete onboarding and confirm your rebate agreement.",
    color: "#A6832B" },
  { num: "03", icon: Link2, title: "Get Your Referral Links",
    desc: "Receive your unique tracking links and access to the partner portal. Start sharing with your audience immediately — no minimum volume to get started.",
    color: "#D4AF37" },
  { num: "04", icon: TrendingUp, title: "Your Clients Trade",
    desc: "As your referred clients trade, volume accumulates against your IB account. Your tier automatically updates as your monthly volume grows.",
    color: "#DEC155" },
  { num: "05", icon: Wallet, title: "Earn Daily Rebates",
    desc: "IB rebates are calculated and settled every trading day. Payments are processed automatically to your chosen withdrawal method — no chasing, no delays.",
    color: "#E6C76A" },
];

function Step({ step, index, isLast }: { step: typeof steps[0]; index: number; isLast: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = step.icon;

  return (
    <div ref={ref} className="flex gap-8 relative">
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.45, delay: index * 0.12, type: "spring", stiffness: 200 }}
          className="relative w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 z-10"
          style={{ background: `${step.color}18`, border: `1px solid ${step.color}40` }}
        >
          <Icon className="w-6 h-6" style={{ color: step.color }} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.12 + 0.2 }}
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black"
            style={{ background: step.color, color: V6.bg }}
          >
            {step.num.replace("0", "")}
          </motion.div>
        </motion.div>

        {!isLast && (
          <div className="w-px flex-1 my-3 relative overflow-hidden" style={{ minHeight: 48, background: V6.border }}>
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

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.12 + 0.08 }}
        style={{ paddingBottom: isLast ? 0 : 48, paddingTop: 4 }}
      >
        <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: step.color }}>
          Step {step.num}
        </div>
        <h3 className="text-xl font-semibold mb-2" style={{ color: V6.fgPrimary }}>{step.title}</h3>
        <p className="text-sm leading-relaxed max-w-lg" style={{ color: V6.fgSecondary }}>{step.desc}</p>
      </motion.div>
    </div>
  );
}

export function HowItWorksTimeline() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden" style={{ background: V6.bg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.14em] mb-5" style={{ color: V6.gold }}>
                How It Works
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.02em] leading-[1.1]" style={{ color: V6.fgPrimary }}>
                From application to daily income
              </h2>
              <p className="mt-5 text-sm leading-relaxed max-w-md" style={{ color: V6.fgSecondary }}>
                Becoming an Equity IB partner is straightforward. Most IBs receive their first daily
                rebate payment within 48 hours of going live.
              </p>

              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { val: "< 24h", label: "Approval Time" },
                  { val: "Day 1", label: "First Payment" },
                  { val: "$30", label: "Max Per Lot" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl p-4 text-center" style={{ background: V6.bgSecondary, border: `1px solid ${V6.border}` }}>
                    <div className="text-xl font-bold" style={{ color: V6.gold }}>{s.val}</div>
                    <div className="text-xs mt-0.5" style={{ color: V6.fgMuted }}>{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <ButtonV6
                  href="#apply"
                  data-track-event="cta"
                  data-track-label="Start Your Application"
                  data-track-section="how_it_works"
                >
                  Start Your Application
                </ButtonV6>
              </div>
              <p className="text-xs mt-4" style={{ color: V6.fgMuted }}>
                Want the full breakdown first?{" "}
                <Link
                  href="/how-to-become-an-introducing-broker"
                  className="underline underline-offset-2 transition-colors"
                  style={{ color: V6.gold }}
                >
                  Read the complete step-by-step guide
                </Link>
              </p>
            </motion.div>
          </div>

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
