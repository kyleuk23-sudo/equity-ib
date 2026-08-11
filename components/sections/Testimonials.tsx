"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TIER_COLORS_V6 } from "@/lib/tierColorsV6";
import { V6, V6_GRADIENT } from "@/lib/designTokensV6";

const testimonials = [
  {
    name: "James Whitfield",
    role: "Forex Educator & IB",
    country: "🇬🇧 United Kingdom",
    tier: "Platinum",
    lots: "1,240 lots/month",
    avatar: "JW",
    rating: 5,
    quote:
      "I've been an IB for seven years across four different networks. The onboarding at Equity IB took 48 hours and I had my tracking links the same week. The daily rebate settlements completely changed how I manage my business cashflow — no more waiting.",
  },
  {
    name: "Priya Sharma",
    role: "Signal Provider",
    country: "🇮🇳 India",
    tier: "Gold",
    lots: "680 lots/month",
    avatar: "PS",
    rating: 5,
    quote:
      "My dedicated account manager understood my audience from day one. The marketing materials they provided look institutional — my subscribers trust them immediately. I moved from my old network within two weeks of my first payment arriving.",
  },
  {
    name: "Marco Delgado",
    role: "Fund Manager & IB",
    country: "🇪🇸 Spain",
    tier: "Diamond",
    lots: "3,100 lots/month",
    avatar: "MD",
    rating: 5,
    quote:
      "The rebate structure at the Diamond tier is genuinely the best I found after benchmarking six networks. My account manager arranged a bespoke deal that reflects our volume properly. The transparency around how rebates are calculated is excellent.",
  },
  {
    name: "Aisha Al-Mansouri",
    role: "Trading Community Owner",
    country: "🇦🇪 UAE",
    tier: "Gold",
    lots: "820 lots/month",
    avatar: "AA",
    rating: 5,
    quote:
      "Professional support, reliable payments, and a partner team that actually responds. I tested three IB programs before Equity IB — this is the only one where I feel like a valued long-term partner rather than just a referral link.",
  },
  {
    name: "Chen Wei",
    role: "Copy Trading Strategy Provider",
    country: "🇸🇬 Singapore",
    tier: "Silver",
    lots: "310 lots/month",
    avatar: "CW",
    rating: 5,
    quote:
      "I was skeptical at first since I was new to IB partnerships. The onboarding team walked me through everything — tier structure, how my rebates are calculated, payment options. Three months in and I've already progressed from Bronze to Silver tier.",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const activeColor = TIER_COLORS_V6[testimonials[active].tier];

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: V6.bg }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{ background: "radial-gradient(ellipse 50% 50% at 20% 50%, rgba(212,175,55,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs font-medium uppercase tracking-[0.14em] mb-4" style={{ color: V6.gold }}>
            Partner Stories
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.02em]" style={{ color: V6.fgPrimary }}>
            Trusted by hundreds of IB professionals
          </h2>
          <p className="mt-4 text-sm" style={{ color: V6.fgSecondary }}>
            Real feedback from IBs across different tiers, countries and audience types.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="card-v6 rounded-2xl p-8 sm:p-10 relative overflow-hidden"
            >
              <div
                className="absolute top-6 right-8 text-6xl font-serif leading-none select-none pointer-events-none opacity-10"
                style={{ color: activeColor }}
              >
                &rdquo;
              </div>

              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonials[active].rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4" style={{ fill: V6.gold, color: V6.gold }} />
                ))}
              </div>

              <p className="text-lg leading-relaxed mb-8 relative" style={{ color: V6.fgSecondary }}>
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-semibold flex-shrink-0"
                    style={{ background: V6_GRADIENT.gold, color: V6.onAccent }}
                  >
                    {testimonials[active].avatar}
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: V6.fgPrimary }}>{testimonials[active].name}</div>
                    <div className="text-sm" style={{ color: V6.fgSecondary }}>{testimonials[active].role}</div>
                    <div className="text-xs mt-0.5" style={{ color: V6.fgMuted }}>{testimonials[active].country}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold mb-1"
                    style={{ background: `${activeColor}15`, color: activeColor, border: `1px solid ${activeColor}30` }}
                  >
                    {testimonials[active].tier} Tier
                  </div>
                  <div className="text-xs" style={{ color: V6.fgMuted }}>{testimonials[active].lots}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors"
              style={{ background: V6.bgSecondary, border: `1px solid ${V6.border}` }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" style={{ color: V6.fgSecondary }} />
            </button>

            <div className="flex">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="w-8 h-8 flex items-center justify-center transition-all"
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <span
                    className="block w-2 h-2 rounded-full transition-all"
                    style={{
                      background: i === active ? V6.gold : V6.border,
                      transform: i === active ? "scale(1.3)" : "scale(1)",
                    }}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors"
              style={{ background: V6.bgSecondary, border: `1px solid ${V6.border}` }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" style={{ color: V6.fgSecondary }} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mt-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActive(i)}
              className="rounded-xl p-3 text-left transition-all"
              style={{
                background: i === active ? V6.bgInteractive : V6.bgSecondary,
                border: `1px solid ${i === active ? V6.borderGold : V6.border}`,
              }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-semibold flex-shrink-0"
                  style={{ background: V6_GRADIENT.gold, color: V6.onAccent }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-xs font-medium leading-tight" style={{ color: V6.fgPrimary }}>{t.name.split(" ")[0]}</div>
                  <div className="text-xs" style={{ color: TIER_COLORS_V6[t.tier] }}>{t.tier}</div>
                </div>
              </div>
              <div className="text-xs truncate" style={{ color: V6.fgMuted }}>{t.lots}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
