"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronDown, TrendingUp } from "lucide-react";

const trustIndicators = [
  { value: "500+",  label: "IB Partners" },
  { value: "$50M+", label: "Rebates Paid" },
  { value: "Up To $30", label: "Per Lot" },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const glowX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const glowY = useSpring(mouseY, { stiffness: 40, damping: 20 });
  const glowLeft = useTransform(glowX, (v) => `${v * 100}%`);
  const glowTop  = useTransform(glowY, (v) => `${v * 100}%`);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center pt-[110px] pb-20 overflow-hidden"
    >
      {/* Calm background — a single soft gold glow that drifts gently toward the cursor */}
      <div className="absolute inset-0 bg-[#050509] pointer-events-none" />
      <motion.div
        className="absolute w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          left: glowLeft,
          top:  glowTop,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(200,149,42,0.10) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{ background: "radial-gradient(ellipse 60% 45% at 50% 0%, rgba(200,149,42,0.14) 0%, transparent 70%)" }}
      />

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 sm:px-8 w-full relative text-center">

        {/* Animated logo reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-8"
        >
          <Image
            src="/logo.png"
            alt="Equity IB"
            width={52}
            height={52}
            className="rounded-full"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide border mb-8"
          style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)", color: "#a8a29e" }}
        >
          <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
          </span>
          Now accepting IB applications worldwide
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl lg:text-[5.25rem] font-semibold leading-[1.05] tracking-tight text-balance"
          style={{ color: "#F5F2EC" }}
        >
          A Partnership Built<br />
          For <span className="gradient-text">Serious</span> Introducing Brokers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-7 text-lg leading-relaxed max-w-xl mx-auto"
          style={{ color: "#9c9691" }}
        >
          Daily rebates. Transparent tiers. A dedicated account manager. Free to join —
          no exceptions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-col items-center gap-5 mt-10"
        >
          <a
            href="#apply"
            data-track-event="cta"
            data-track-label="Apply Free Today"
            data-track-section="hero"
            className="relative inline-flex items-center gap-2 font-semibold px-9 py-4 rounded-xl text-sm overflow-hidden group transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #F5C842 0%, #C8952A 55%, #A97A1F 100%)",
              color: "#050509",
              boxShadow: "0 8px 30px rgba(200,149,42,0.28)",
            }}
          >
            <span className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            Apply Free Today
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          <a
            href="#calculator"
            className="inline-flex items-center gap-1.5 text-sm font-medium underline underline-offset-4 decoration-white/20 hover:decoration-white/50 transition-colors"
            style={{ color: "#c9c4bd" }}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            Calculate your potential earnings
          </a>
        </motion.div>

        {/* Trust indicators — minimal, text-first */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex items-center justify-center gap-8 sm:gap-14 mt-16 pt-10"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {trustIndicators.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 + i * 0.1 }}
            >
              <div className="text-xl sm:text-2xl font-semibold" style={{ color: "#F5F2EC" }}>{s.value}</div>
              <div className="text-xs mt-0.5" style={{ color: "#8a8380" }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Single floating glass panel — quiet, asymmetric, low-key */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1 },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
        className="hidden xl:flex absolute right-[6%] top-[30%] flex-col gap-1 rounded-2xl px-6 py-5 border"
        style={{
          background: "rgba(255,255,255,0.025)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderColor: "rgba(255,255,255,0.08)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
        }}
      >
        <span className="text-xs" style={{ color: "#8a8380" }}>Daily Rebate Settlements</span>
        <span className="text-2xl font-semibold" style={{ color: "#F5F2EC" }}>$26,140<span className="text-sm font-normal" style={{ color: "#8a8380" }}>/mo</span></span>
        <span className="text-xs" style={{ color: "#34D399" }}>Platinum Tier · +$25/lot</span>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "#8a8380" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4" style={{ color: "#8a8380" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
