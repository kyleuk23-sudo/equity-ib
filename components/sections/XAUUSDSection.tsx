"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  BarChart3, Target, Share2, Users, FileText, Award,
  CheckCircle2, Download, ArrowRight, AlertTriangle, Shield,
  TrendingUp, BookOpen, Zap, LayoutGrid, Newspaper, Globe,
  Calendar, Brain, Lock, Video, Image as ImageIcon,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: BarChart3,
    title: "Daily XAUUSD Analysis",
    desc: "Receive regular market updates covering key price levels, market structure and potential trading scenarios.",
    color: "#F59E0B",
    note: null,
  },
  {
    icon: Target,
    title: "Trading Ideas",
    desc: "Access professionally prepared trade ideas designed to support your market commentary and educational content.",
    color: "#6366F1",
    note: "All trading ideas reflect market opinions and are not guarantees of future performance.",
  },
  {
    icon: Share2,
    title: "Ready-To-Share Graphics",
    desc: "Download professionally designed charts and graphics suitable for Telegram, Discord and social media.",
    color: "#34D399",
    note: null,
  },
  {
    icon: Users,
    title: "Community Engagement",
    desc: "Keep your audience engaged with fresh market content and educational insights that encourage ongoing interaction.",
    color: "#A78BFA",
    note: null,
  },
  {
    icon: FileText,
    title: "Premium Market Commentary",
    desc: "Receive concise summaries covering technical analysis, market sentiment and important economic events affecting XAUUSD.",
    color: "#F59E0B",
    note: null,
  },
  {
    icon: Award,
    title: "Marketing Advantage",
    desc: "Differentiate your IB business with exclusive branded content and consistent educational updates.",
    color: "#EC4899",
    note: null,
  },
];

const CONTENT_RESOURCES = [
  { label: "Daily Market Outlook", icon: BarChart3 },
  { label: "Weekly Gold Forecast", icon: TrendingUp },
  { label: "Support & Resistance Maps", icon: Target },
  { label: "Economic Calendar Summary", icon: Calendar },
  { label: "Trading Psychology Articles", icon: Brain },
  { label: "Risk Management Guides", icon: Shield },
  { label: "Market Recaps", icon: Newspaper },
  { label: "Technical Analysis Reports", icon: LayoutGrid },
  { label: "Educational Trading Guides", icon: BookOpen },
  { label: "Video Market Reviews", icon: Video },
  { label: "Infographics", icon: ImageIcon },
  { label: "Social Media Graphics", icon: Globe },
  { label: "Telegram-Ready Images", icon: Share2 },
  { label: "Instagram Carousel Templates", icon: Zap },
];

const DELIVERY_STEPS = [
  { step: "01", label: "Market Analysis Prepared", desc: "Professional market commentary and educational XAUUSD content is prepared for IB partners." },
  { step: "02", label: "Published Inside Marketing Hub", desc: "Content is uploaded to your exclusive IB Marketing Hub, ready for immediate access." },
  { step: "03", label: "Shared With Approved IB Partners", desc: "Approved Equity IB partners are notified whenever new analysis content is available." },
  { step: "04", label: "IB Personalises Content (Optional)", desc: "You can add your own branding, commentary or context before distributing to your community." },
  { step: "05", label: "IB Shares With Their Community", desc: "Distribute content across Telegram, Discord, Instagram and any platform you use." },
  { step: "06", label: "Community Engagement Grows", desc: "Your audience receives consistent value, driving higher engagement, retention and referrals." },
];

const BENEFITS = [
  "Exclusive XAUUSD market analysis",
  "Educational trading ideas",
  "Ready-made Telegram content",
  "Social media graphics",
  "Marketing assets",
  "Weekly educational articles",
  "Economic event summaries",
  "Community engagement resources",
  "Branded promotional materials",
  "Ongoing marketing support",
];

const DOWNLOADS = [
  { title: "The Complete XAUUSD Trading Guide", pages: 60 },
  { title: "Understanding Gold Market Fundamentals", pages: 44 },
  { title: "Technical Analysis Handbook", pages: 52 },
  { title: "Economic Events & Gold", pages: 38 },
  { title: "Trading Psychology", pages: 40 },
  { title: "Risk Management Workbook", pages: 36 },
  { title: "Weekly Market Planning Template", pages: 24 },
  { title: "Market Journal Template", pages: 20 },
  { title: "Gold Trading Checklist", pages: 18 },
  { title: "Market Commentary Template", pages: 16 },
  { title: "Telegram Content Calendar", pages: 22 },
  { title: "Social Media Posting Guide", pages: 28 },
];

const TICKER_ITEMS = [
  { label: "XAUUSD/USD", value: "2,341.50", change: "▲ +12.30", pct: "+0.53%", up: true },
  { label: "24H HIGH", value: "2,358.40", change: "", pct: "", up: true },
  { label: "24H LOW", value: "2,318.75", change: "", pct: "", up: false },
  { label: "SUPPORT", value: "2,318 – 2,330", change: "", pct: "", up: true },
  { label: "RESISTANCE", value: "2,355 – 2,368", change: "", pct: "", up: false },
  { label: "TREND BIAS", value: "Bullish above 2,330", change: "", pct: "", up: true },
  { label: "ANALYSIS", value: "Available in Hub", change: "", pct: "", up: true },
  { label: "DISCLAIMER", value: "Educational Content Only", change: "", pct: "", up: false },
];

// ─── Candlestick chart helpers ─────────────────────────────────────────────────

const CANDLES = [
  { o: 2310, h: 2328, l: 2305, c: 2322 },
  { o: 2322, h: 2340, l: 2318, c: 2334 },
  { o: 2334, h: 2348, l: 2328, c: 2344 },
  { o: 2344, h: 2362, l: 2338, c: 2356 },
  { o: 2356, h: 2370, l: 2350, c: 2362 },
  { o: 2362, h: 2374, l: 2348, c: 2350 }, // bearish reversal
  { o: 2350, h: 2358, l: 2330, c: 2335 }, // bearish
  { o: 2335, h: 2342, l: 2318, c: 2325 }, // bearish (near support)
  { o: 2325, h: 2335, l: 2318, c: 2330 }, // doji near support
  { o: 2330, h: 2350, l: 2326, c: 2346 }, // bullish reversal
  { o: 2346, h: 2362, l: 2342, c: 2358 },
  { o: 2358, h: 2370, l: 2352, c: 2366 },
  { o: 2366, h: 2378, l: 2360, c: 2374 },
  { o: 2374, h: 2382, l: 2368, c: 2376 },
  { o: 2376, h: 2385, l: 2372, c: 2381 },
  { o: 2381, h: 2388, l: 2374, c: 2384 }, // current
];

const C_MIN = 2298, C_MAX = 2395, C_RANGE = C_MAX - C_MIN;
const C_H = 130, C_TOP = 10, SLOT = 20, BW = 11;

function toY(p: number) {
  return C_TOP + ((C_MAX - p) / C_RANGE) * C_H;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function GoldTicker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div
      className="overflow-hidden py-2.5"
      style={{ background: "rgba(245,158,11,0.05)", borderTop: "1px solid rgba(245,158,11,0.12)", borderBottom: "1px solid rgba(245,158,11,0.12)" }}
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 36, ease: "linear", repeat: Infinity }}
        className="flex items-center gap-10 whitespace-nowrap w-max"
      >
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 text-xs font-mono">
            <span className="text-amber-500/40">◆</span>
            <span className="text-slate-400 font-semibold tracking-wide">{item.label}</span>
            <span className="text-white font-bold">{item.value}</span>
            {item.change && (
              <span style={{ color: item.up ? "#34D399" : "#EF4444" }} className="font-semibold">
                {item.change} ({item.pct})
              </span>
            )}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function CandlestickChart({ height = 150 }: { height?: number }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const inView = useInView(svgRef, { once: true, margin: "-40px" });

  const svgW = 340;
  const supTopY = toY(2330);
  const supBotY = toY(2318);
  const resTopY = toY(2368);
  const resBotY = toY(2355);

  return (
    <div>
      {/* Legend */}
      <div className="flex flex-wrap items-center gap-3 mb-2 px-0.5">
        {[
          { label: "Support", color: "rgba(52,211,153,0.5)" },
          { label: "Resistance", color: "rgba(239,68,68,0.5)" },
          { label: "Bullish", color: "#F59E0B" },
          { label: "Bearish", color: "#EF4444" },
        ].map((l) => (
          <span key={l.label} className="inline-flex items-center gap-1">
            <span className="w-3 h-2 rounded-sm inline-block" style={{ background: l.color }} />
            <span className="text-[10px] text-slate-500">{l.label}</span>
          </span>
        ))}
      </div>

      <svg ref={svgRef} viewBox={`0 0 ${svgW} ${height}`} className="w-full" style={{ height }}>
        {/* Subtle grid */}
        {[2320, 2340, 2360, 2380].map((p) => (
          <g key={p}>
            <line x1="0" y1={toY(p)} x2={svgW} y2={toY(p)} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            <text x={svgW - 2} y={toY(p) - 2} fill="rgba(255,255,255,0.2)" fontSize="6.5" textAnchor="end">
              {p.toLocaleString()}
            </text>
          </g>
        ))}

        {/* Resistance zone */}
        <rect x="0" y={resTopY} width={svgW} height={resBotY - resTopY} fill="rgba(239,68,68,0.10)" />
        <text x="3" y={resTopY - 2} fill="rgba(239,68,68,0.6)" fontSize="6.5">Resistance 2,355–2,368</text>

        {/* Support zone */}
        <rect x="0" y={supTopY} width={svgW} height={supBotY - supTopY} fill="rgba(52,211,153,0.10)" />
        <text x="3" y={supBotY + 8} fill="rgba(52,211,153,0.6)" fontSize="6.5">Support 2,318–2,330</text>

        {/* Candles */}
        {CANDLES.map((c, i) => {
          const xLeft = 4 + i * SLOT;
          const xMid = xLeft + SLOT / 2;
          const bull = c.c >= c.o;
          const col = bull ? "#F59E0B" : "#EF4444";
          const bTop = toY(Math.max(c.o, c.c));
          const bBot = toY(Math.min(c.o, c.c));
          const bH = Math.max(bBot - bTop, 1.5);

          return (
            <motion.g
              key={i}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.04, duration: 0.25 }}
            >
              <line x1={xMid} y1={toY(c.h)} x2={xMid} y2={toY(c.l)} stroke={col} strokeWidth="1" opacity="0.7" />
              <rect x={xMid - BW / 2} y={bTop} width={BW} height={bH} fill={col} rx="1.5" />
            </motion.g>
          );
        })}

        {/* Current price dash */}
        <line x1="0" y1={toY(2384)} x2={svgW} y2={toY(2384)} stroke="#F59E0B" strokeWidth="0.8" strokeDasharray="4,3" opacity="0.7" />
        <text x={svgW - 2} y={toY(2384) - 3} fill="#F59E0B" fontSize="7" textAnchor="end" fontWeight="bold">2,384</text>
      </svg>
    </div>
  );
}

function SampleCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl overflow-hidden border relative"
      style={{
        background: "#0a1220",
        borderColor: "rgba(245,158,11,0.2)",
        boxShadow: "0 0 60px rgba(245,158,11,0.07), 0 20px 60px rgba(0,0,0,0.4)",
      }}
    >
      {/* Card header */}
      <div
        className="px-4 py-3 flex items-center justify-between border-b"
        style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.10), rgba(10,18,32,0.6))", borderColor: "rgba(245,158,11,0.12)" }}
      >
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2 h-2 rounded-full" style={{ background: "#F59E0B" }} />
            <span className="text-amber-400 font-bold text-sm tracking-wide">XAUUSD / USD</span>
            <span className="text-slate-600 text-xs">•</span>
            <span className="text-slate-400 text-xs">Daily Analysis</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-white font-extrabold text-xl">2,384.00</span>
            <span className="text-green-400 text-xs font-semibold">▲ +12.30  (+0.52%)</span>
          </div>
        </div>
        <div className="text-right flex flex-col items-end gap-1">
          <span
            className="text-xs font-bold px-2.5 py-0.5 rounded-full"
            style={{ background: "rgba(245,158,11,0.15)", color: "#F59E0B", border: "1px solid rgba(245,158,11,0.3)" }}
          >
            DEMO
          </span>
          <span className="text-xs text-slate-500">Educational Only</span>
        </div>
      </div>

      {/* Chart */}
      <div className="px-4 pt-3 pb-1" style={{ background: "rgba(0,0,0,0.2)" }}>
        <CandlestickChart height={150} />
      </div>

      {/* Analysis body */}
      <div className="p-4 space-y-3">
        {/* Trend bias */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Trend Bias</span>
          <span
            className="text-xs font-bold px-2.5 py-0.5 rounded-full"
            style={{ background: "rgba(52,211,153,0.10)", color: "#34D399", border: "1px solid rgba(52,211,153,0.2)" }}
          >
            Bullish above 2,330
          </span>
        </div>

        {/* Commentary */}
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Market Commentary</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            Gold continues to hold above the key 2,330 support zone following last week's breakout. Price is currently testing the 2,355–2,368 resistance area. A clean close above 2,368 may open the path toward 2,385. A rejection from resistance may see a pullback toward the 2,318–2,330 support zone. Broader sentiment remains supported by macro uncertainty.
          </p>
        </div>

        {/* Key levels */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded-xl p-2.5" style={{ background: "rgba(52,211,153,0.06)", border: "1px solid rgba(52,211,153,0.12)" }}>
            <p className="text-xs text-slate-500 mb-1">Support Levels</p>
            <p className="text-xs font-bold" style={{ color: "#34D399" }}>2,318 • 2,330</p>
          </div>
          <div className="rounded-xl p-2.5" style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.12)" }}>
            <p className="text-xs text-slate-500 mb-1">Resistance Levels</p>
            <p className="text-xs font-bold text-red-400">2,358 • 2,368</p>
          </div>
        </div>

        {/* Educational notes */}
        <div className="rounded-xl p-3 space-y-1.5" style={{ background: "rgba(99,102,241,0.05)", border: "1px solid rgba(99,102,241,0.10)" }}>
          <p className="text-xs font-semibold text-primary">Educational Notes</p>
          <p className="text-xs text-slate-400 leading-relaxed">Support and resistance zones act as potential inflection points where price may react. They do not guarantee a reversal or continuation. Always apply your own risk management.</p>
        </div>

        {/* Risk reminder */}
        <div
          className="flex items-start gap-2 rounded-xl p-3"
          style={{ background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.12)" }}
        >
          <AlertTriangle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="text-xs leading-relaxed" style={{ color: "rgba(253,230,138,0.7)" }}>
            This is a market opinion prepared for educational purposes only. It does not constitute financial advice. Past performance does not guarantee future results. Trading involves significant risk of loss.
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-semibold transition-all hover:opacity-90"
          style={{ background: "rgba(245,158,11,0.12)", color: "#F59E0B", border: "1px solid rgba(245,158,11,0.25)" }}
        >
          Access Full Analysis <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.div>
  );
}

function DeliveryTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="relative">
      {DELIVERY_STEPS.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: i * 0.10, duration: 0.4, ease: "easeOut" }}
          className="flex items-start gap-4"
        >
          {/* Step indicator + connector */}
          <div className="flex flex-col items-center flex-shrink-0 w-8">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ background: "rgba(245,158,11,0.12)", color: "#F59E0B", border: "1px solid rgba(245,158,11,0.3)" }}
            >
              {s.step}
            </div>
            {i < DELIVERY_STEPS.length - 1 && (
              <motion.div
                initial={{ height: 0 }}
                animate={inView ? { height: 40 } : {}}
                transition={{ delay: i * 0.10 + 0.3, duration: 0.25 }}
                className="w-px"
                style={{ background: "linear-gradient(to bottom, rgba(245,158,11,0.35), rgba(245,158,11,0.08))" }}
              />
            )}
          </div>

          {/* Content */}
          <div className="pb-5 flex-1 min-w-0">
            <p className="text-sm font-semibold text-white mb-0.5 leading-snug">{s.label}</p>
            <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Section header helper ─────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
      style={{ background: "rgba(245,158,11,0.10)", color: "#F59E0B", border: "1px solid rgba(245,158,11,0.2)" }}>
      {children}
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function XAUUSDSection() {
  return (
    <section id="xauusd" className="relative overflow-hidden py-0">

      {/* ── Gold gradient background ─────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ background: "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(245,158,11,0.07) 0%, transparent 70%)" }} className="absolute inset-0" />
        <div style={{ background: "radial-gradient(ellipse 50% 30% at 80% 60%, rgba(99,102,241,0.04) 0%, transparent 60%)" }} className="absolute inset-0" />
      </div>

      {/* ── Floating orbs ────────────────────────────────────────────────── */}
      <motion.div
        animate={{ y: [0, -18, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-16 w-56 h-56 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.06), transparent)" }}
      />
      <motion.div
        animate={{ y: [0, 16, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-40 right-20 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.05), transparent)" }}
      />

      {/* ── Ticker ───────────────────────────────────────────────────────── */}
      <div className="pt-24">
        <GoldTicker />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-20">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <SectionLabel>
            <span style={{ color: "#F59E0B" }}>◆</span> Exclusive Partner Benefit
          </SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5 leading-tight">
            Exclusive XAUUSD Market Analysis{" "}
            <span style={{ background: "linear-gradient(135deg, #F59E0B, #FDE68A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              For Equity IB Partners
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            As an approved Equity IB partner, you'll gain access to exclusive XAUUSD market analysis and trading ideas that can help you provide valuable market commentary to your trading community and strengthen client engagement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="flex items-center gap-2 font-semibold px-6 py-3 rounded-xl text-sm text-white transition-all hover:opacity-90"
              style={{ background: "#F59E0B", boxShadow: "0 0 24px rgba(245,158,11,0.3)" }}
            >
              Become an IB <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/marketing-hub"
              className="flex items-center gap-2 glass text-white font-medium px-6 py-3 rounded-xl text-sm transition-all hover:bg-white/[0.07] border border-white/[0.08]"
            >
              Explore Marketing Resources
            </Link>
          </div>
        </motion.div>

        {/* ── Feature Grid ─────────────────────────────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5 border border-white/[0.06] hover:border-white/[0.12] transition-all relative overflow-hidden group flex flex-col gap-3"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ background: `radial-gradient(circle at 20% 0%, ${f.color}10 0%, transparent 60%)` }}
                />
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${f.color}15` }}
                >
                  <Icon className="w-5 h-5" style={{ color: f.color }} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1.5 text-sm">{f.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{f.desc}</p>
                  {f.note && (
                    <p className="text-xs mt-2 leading-relaxed" style={{ color: "rgba(245,158,11,0.65)" }}>
                      ⚠ {f.note}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Sample Analysis + Delivery Timeline ──────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20 items-start">
          {/* Sample card */}
          <div>
            <div className="mb-5">
              <SectionLabel><BarChart3 className="w-3 h-3" /> Sample Content Preview</SectionLabel>
              <h3 className="text-2xl font-extrabold text-white">
                What your community receives
              </h3>
              <p className="text-sm text-slate-400 mt-2">
                A realistic demonstration of the analysis format. All data shown is fictional and for illustration only.
              </p>
            </div>
            <SampleCard />
          </div>

          {/* Delivery timeline */}
          <div>
            <div className="mb-5">
              <SectionLabel><Zap className="w-3 h-3" /> Content Delivery</SectionLabel>
              <h3 className="text-2xl font-extrabold text-white">
                How content reaches your community
              </h3>
              <p className="text-sm text-slate-400 mt-2">
                From analysis preparation to community engagement — a simple, partner-driven flow.
              </p>
            </div>
            <DeliveryTimeline />
          </div>
        </div>

        {/* ── XAUUSD Content Centre ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-8 mb-20 relative overflow-hidden"
          style={{ border: "1px solid rgba(245,158,11,0.12)" }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(245,158,11,0.05), transparent)" }} />
          <div className="relative">
            <SectionLabel><BookOpen className="w-3 h-3" /> Inside the Marketing Hub</SectionLabel>
            <h3 className="text-2xl font-extrabold text-white mb-2">XAUUSD Content Centre</h3>
            <p className="text-sm text-slate-400 mb-7 max-w-xl">
              Approved IB partners gain access to a dedicated content library covering every format you need to educate and engage your community.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {CONTENT_RESOURCES.map((r, i) => {
                const Icon = r.icon;
                return (
                  <motion.div
                    key={r.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl border transition-all hover:border-amber-500/20 group"
                    style={{ background: "rgba(245,158,11,0.04)", borderColor: "rgba(255,255,255,0.05)" }}
                  >
                    <Icon className="w-3.5 h-3.5 flex-shrink-0 group-hover:text-amber-400 transition-colors" style={{ color: "rgba(245,158,11,0.5)" }} />
                    <span className="text-xs text-slate-300 leading-snug">{r.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ── Partner Benefits + Downloads ──────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-2xl p-6 relative overflow-hidden"
            style={{ border: "1px solid rgba(245,158,11,0.10)" }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 0% 0%, rgba(245,158,11,0.06), transparent 60%)" }} />
            <div className="relative">
              <SectionLabel><Award className="w-3 h-3" /> Exclusive Partner Benefits</SectionLabel>
              <h3 className="text-xl font-extrabold text-white mb-5">Approved IB partners receive access to:</h3>
              <div className="grid grid-cols-1 gap-2.5">
                {BENEFITS.map((b, i) => (
                  <motion.div
                    key={b}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "#F59E0B" }} />
                    <span className="text-sm text-slate-300">{b}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-white/[0.05]">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 font-semibold px-5 py-3 rounded-xl text-sm text-white transition-all hover:opacity-90 w-full justify-center"
                  style={{ background: "#F59E0B", boxShadow: "0 0 20px rgba(245,158,11,0.25)" }}
                >
                  Apply to Become an IB <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Downloads */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionLabel><Download className="w-3 h-3" /> Marketing Hub Downloads</SectionLabel>
            <h3 className="text-xl font-extrabold text-white mb-5">Downloadable PDF resources</h3>
            <div className="space-y-2">
              {DOWNLOADS.map((d, i) => (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border transition-all hover:border-amber-500/25 group cursor-pointer"
                  style={{ background: "rgba(245,158,11,0.03)", borderColor: "rgba(255,255,255,0.05)" }}
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(245,158,11,0.10)" }}
                  >
                    <FileText className="w-3.5 h-3.5" style={{ color: "#F59E0B" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs text-slate-300 leading-snug block">{d.title}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-xs text-slate-600">{d.pages}p</span>
                    <Download className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Disclaimer ─────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-start gap-3 px-5 py-4 rounded-2xl"
          style={{ background: "rgba(245,158,11,0.04)", border: "1px solid rgba(245,158,11,0.10)" }}
        >
          <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "rgba(245,158,11,0.5)" }} />
          <p className="text-xs text-slate-500 leading-relaxed">
            <span className="text-slate-400 font-semibold">Important Disclaimer: </span>
            All XAUUSD analysis and trading ideas provided through the Equity IB Marketing Hub are prepared for educational and engagement purposes only. They represent market opinions based on technical analysis and do not constitute financial advice, investment recommendations or guarantees of future performance. Trading foreign exchange and gold carries a high level of risk and may not be suitable for all investors. IBs are responsible for ensuring all content shared with their communities complies with applicable marketing regulations and includes appropriate risk disclosures. Past performance does not guarantee future results.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
