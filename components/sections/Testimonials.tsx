"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "James Whitfield",
    role: "Forex Educator & IB",
    country: "🇬🇧 United Kingdom",
    tier: "Platinum",
    tierColor: "#6366F1",
    lots: "1,240 lots/month",
    avatar: "JW",
    rating: 5,
    gradient: "from-primary to-secondary",
    quote:
      "I've been an IB for seven years across four different networks. The onboarding at Equity IB took 48 hours and I had my tracking links the same week. The daily rebate settlements completely changed how I manage my business cashflow — no more waiting.",
  },
  {
    name: "Priya Sharma",
    role: "Signal Provider",
    country: "🇮🇳 India",
    tier: "Gold",
    tierColor: "#FFD700",
    lots: "680 lots/month",
    avatar: "PS",
    rating: 5,
    gradient: "from-secondary to-accent",
    quote:
      "My dedicated account manager understood my audience from day one. The marketing materials they provided look institutional — my subscribers trust them immediately. I moved from my old network within two weeks of my first payment arriving.",
  },
  {
    name: "Marco Delgado",
    role: "Fund Manager & IB",
    country: "🇪🇸 Spain",
    tier: "Diamond",
    tierColor: "#34D399",
    lots: "3,100 lots/month",
    avatar: "MD",
    rating: 5,
    gradient: "from-accent to-primary",
    quote:
      "The rebate structure at the Diamond tier is genuinely the best I found after benchmarking six networks. My account manager arranged a bespoke deal that reflects our volume properly. The transparency around how rebates are calculated is excellent.",
  },
  {
    name: "Aisha Al-Mansouri",
    role: "Trading Community Owner",
    country: "🇦🇪 UAE",
    tier: "Gold",
    tierColor: "#FFD700",
    lots: "820 lots/month",
    avatar: "AA",
    rating: 5,
    gradient: "from-primary to-accent",
    quote:
      "Professional support, reliable payments, and a partner team that actually responds. I tested three IB programs before Equity IB — this is the only one where I feel like a valued long-term partner rather than just a referral link.",
  },
  {
    name: "Chen Wei",
    role: "Copy Trading Strategy Provider",
    country: "🇸🇬 Singapore",
    tier: "Silver",
    tierColor: "#C0C0C0",
    lots: "310 lots/month",
    avatar: "CW",
    rating: 5,
    gradient: "from-secondary to-primary",
    quote:
      "I was skeptical at first since I was new to IB partnerships. The onboarding team walked me through everything — tier structure, how my rebates are calculated, payment options. Three months in and I've already progressed from Bronze to Silver tier.",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-secondary opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-secondary mb-4">
            Partner Stories
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Trusted By Hundreds Of{" "}
            <span className="gradient-text">IB Professionals</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm">
            Real feedback from IBs across different tiers, countries and audience types.
          </p>
        </motion.div>

        {/* Featured testimonial */}
        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="glass-strong rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-glass"
            >
              <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 100% 0%, ${testimonials[active].tierColor}15 0%, transparent 60%)`,
                }}
              />

              {/* Quote mark */}
              <div
                className="absolute top-6 right-8 text-6xl font-serif leading-none select-none pointer-events-none opacity-10"
                style={{ color: testimonials[active].tierColor }}
              >
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonials[active].rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-lg text-slate-200 leading-relaxed mb-8 relative">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${testimonials[active].gradient} flex items-center justify-center text-sm font-bold text-white flex-shrink-0`}
                  >
                    {testimonials[active].avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonials[active].name}</div>
                    <div className="text-sm text-slate-400">{testimonials[active].role}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{testimonials[active].country}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold mb-1"
                    style={{
                      background: `${testimonials[active].tierColor}15`,
                      color: testimonials[active].tierColor,
                      border: `1px solid ${testimonials[active].tierColor}30`,
                    }}
                  >
                    {testimonials[active].tier} Tier
                  </div>
                  <div className="text-xs text-slate-500">{testimonials[active].lots}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-white/[0.08] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 text-slate-300" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{
                    background: i === active ? "#6366F1" : "rgba(255,255,255,0.15)",
                    transform: i === active ? "scale(1.3)" : "scale(1)",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-white/[0.08] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </button>
          </div>
        </div>

        {/* Side testimonial cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActive(i)}
              className={`glass rounded-xl p-3 text-left transition-all ${
                i === active ? "border-white/[0.15] bg-white/[0.06]" : "hover:bg-white/[0.04]"
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div
                  className={`w-7 h-7 rounded-lg bg-gradient-to-br ${t.gradient} flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-xs font-medium text-white leading-tight">{t.name.split(" ")[0]}</div>
                  <div className="text-xs" style={{ color: t.tierColor }}>{t.tier}</div>
                </div>
              </div>
              <div className="text-xs text-slate-500 truncate">{t.lots}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
