"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown, X, Menu, ArrowRight, Check,
  BarChart2, Trophy, Calculator, Zap, CreditCard, PlayCircle, TrendingUp,
  Globe, BookOpen, Download, Activity, FileText, Video, Mail,
  GraduationCap, HelpCircle, Award, Shield, Newspaper, MessageSquare, Calendar,
  Phone, Package,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

interface NavCard {
  icon: React.ElementType;
  label: string;
  desc: string;
  href: string;
  color: string;
  badge?: "New" | "Popular";
}

interface Featured {
  eyebrow: string;
  title: string;
  desc: string;
  href: string;
  cta: string;
  bg: string;
}

type NavLink      = { label: string; href: string };
type NavDropdown  = { label: string; dropdown: "ibRebates" | "marketingHub" | "resources" };
type NavItem      = NavLink | NavDropdown;
type MobileLink   = { label: string; href: string };
type MobileGroup  = { label: string; items: { label: string; href: string }[] };
type MobileItem   = MobileLink | MobileGroup;

// ─── Data ─────────────────────────────────────────────────────────────────────

const ANNS = [
  { icon: "🚀", text: "Earn Up To $30 Per Lot As An Introducing Broker", href: "/contact" },
  { icon: "💰", text: "Daily Rebate Payments — Same Day Processing", href: "/partners#payments" },
  { icon: "📈", text: "Exclusive XAUUSD Market Analysis For IB Partners", href: "/#xauusd" },
  { icon: "🌍", text: "Join 500+ IB Partners Across 120+ Countries", href: "/contact" },
  { icon: "📚", text: "Free Marketing Resources Included With Every Partnership", href: "/marketing-hub" },
];

const IB_CARDS: NavCard[] = [
  { icon: BarChart2,  label: "Overview",              desc: "Programme overview and key benefits",       href: "/partners",          color: "#6366F1" },
  { icon: Trophy,     label: "Rebate Tiers",           desc: "Starter to Diamond — find your tier",      href: "/partners#tiers",    color: "#A78BFA", badge: "Popular" },
  { icon: Calculator, label: "Earnings Calculator",    desc: "Estimate your monthly rebate income",      href: "/#calculator",       color: "#34D399" },
  { icon: Zap,        label: "Daily Rebate Payments",  desc: "Same-day rebate processing, every day",    href: "/partners#payments", color: "#F59E0B" },
  { icon: CreditCard, label: "Payment Methods",        desc: "Bank transfer, crypto and more",           href: "/#payments",         color: "#6366F1" },
  { icon: PlayCircle, label: "How It Works",           desc: "Step-by-step onboarding guide",            href: "/#how-it-works",     color: "#34D399" },
];

const IB_FEATURED: Featured = {
  eyebrow:  "Ready to start?",
  title:    "Become an IB Partner",
  desc:     "Join 500+ IBs earning daily rebates. Apply in minutes and start earning today.",
  href:     "/contact",
  cta:      "Apply Now",
  bg:       "linear-gradient(135deg, #4f46e5 0%, #6366F1 50%, #A78BFA 100%)",
};

const MH_CARDS: NavCard[] = [
  { icon: Package,    label: "All Resources",      desc: "Your full library of IB marketing tools",    href: "/marketing-hub",                    color: "#6366F1" },
  { icon: TrendingUp, label: "Growth Guides",      desc: "Proven strategies to grow your network",     href: "/marketing-hub/getting-started",    color: "#34D399", badge: "Popular" },
  { icon: Globe,      label: "Social Media",       desc: "Platform-specific content strategies",       href: "/marketing-hub/social-media",       color: "#A78BFA" },
  { icon: BookOpen,   label: "Content Library",    desc: "In-depth guides and market reports",         href: "/marketing-hub/client-acquisition",  color: "#6366F1", badge: "New" },
  { icon: Download,   label: "Download Centre",    desc: "Free PDF guides and checklists",             href: "/marketing-hub",                    color: "#34D399" },
  { icon: Activity,   label: "XAUUSD Analysis",   desc: "Exclusive gold market signals for IBs",      href: "/#xauusd",                          color: "#F59E0B" },
  { icon: FileText,   label: "Templates",          desc: "Ready-to-use IB marketing templates",       href: "/marketing-hub",                    color: "#A78BFA" },
  { icon: Video,      label: "Video Academy",      desc: "Step-by-step video training library",       href: "/marketing-hub",                    color: "#6366F1", badge: "New" },
  { icon: Mail,       label: "Email Marketing",    desc: "Email campaigns and nurture sequences",      href: "/marketing-hub",                    color: "#34D399" },
];

const MH_FEATURED: Featured = {
  eyebrow:  "Free download",
  title:    "2025 IB Marketing Toolkit",
  desc:     "Everything you need to attract Forex clients — free with your IB partnership.",
  href:     "/marketing-hub",
  cta:      "Download Free",
  bg:       "linear-gradient(135deg, #059669 0%, #10b981 50%, #34D399 100%)",
};

const RES_CARDS: NavCard[] = [
  { icon: GraduationCap, label: "IB Academy",          desc: "Structured learning for IBs at every level",  href: "/marketing-hub",             color: "#6366F1", badge: "New" },
  { icon: BookOpen,      label: "Knowledge Base",       desc: "Answers to common IB questions",              href: "/marketing-hub",             color: "#34D399" },
  { icon: HelpCircle,    label: "FAQ",                  desc: "Frequently asked questions",                  href: "/#faq",                      color: "#A78BFA" },
  { icon: Award,         label: "Case Studies",         desc: "Real results from IB partners",               href: "/partners",                  color: "#6366F1" },
  { icon: Trophy,        label: "Success Stories",      desc: "How top IBs built their business",            href: "/partners",                  color: "#F59E0B", badge: "Popular" },
  { icon: Shield,        label: "Compliance Guides",    desc: "Stay compliant in your market",               href: "/marketing-hub/compliance",  color: "#34D399" },
  { icon: Newspaper,     label: "Blog",                 desc: "Forex industry news and insights",            href: "/marketing-hub",             color: "#A78BFA", badge: "New" },
  { icon: MessageSquare, label: "Support Centre",       desc: "Dedicated IB partner support",               href: "/contact",                   color: "#6366F1" },
  { icon: Calendar,      label: "Economic Calendar",    desc: "Key market events for active IBs",            href: "/marketing-hub",             color: "#34D399" },
];

const RES_FEATURED: Featured = {
  eyebrow:  "Dedicated support",
  title:    "Your Personal IB Manager",
  desc:     "Every partner gets a dedicated account manager to help grow their IB business.",
  href:     "/contact",
  cta:      "Get in Touch",
  bg:       "linear-gradient(135deg, #7c3aed 0%, #A78BFA 50%, #6366F1 100%)",
};

const NAV_ITEMS: NavItem[] = [
  { label: "Why Equity IB", href: "/#why" },
  { label: "IB Rebates",    dropdown: "ibRebates"    },
  { label: "Marketing Hub", dropdown: "marketingHub" },
  { label: "Resources",     dropdown: "resources"    },
  { label: "FAQ",           href: "/#faq" },
  { label: "Contact",       href: "/contact" },
];

const TRUST_ITEMS = ["Daily Rebates", "Up to $30/lot"];

// ─── Micro-components ─────────────────────────────────────────────────────────

function NavCardItem({ item, onClose }: { item: NavCard; onClose: () => void }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      onClick={onClose}
      className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.05] transition-all duration-150"
    >
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110"
        style={{ background: `${item.color}1a`, boxShadow: `0 0 0 1px ${item.color}25` }}
      >
        <Icon className="w-3.5 h-3.5" style={{ color: item.color }} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5 mb-0.5">
          <span className="text-[12.5px] font-semibold text-white/90 group-hover:text-white transition-colors leading-tight">
            {item.label}
          </span>
          {item.badge && (
            <span
              className="text-[8.5px] font-bold px-1.5 py-[1px] rounded-full"
              style={{
                background: item.badge === "New" ? "rgba(52,211,153,0.15)" : "rgba(99,102,241,0.15)",
                color:      item.badge === "New" ? "#34D399"               : "#A78BFA",
                border:     `1px solid ${item.badge === "New" ? "rgba(52,211,153,0.3)" : "rgba(99,102,241,0.3)"}`,
              }}
            >
              {item.badge}
            </span>
          )}
        </div>
        <p className="text-[11px] text-slate-500 leading-tight">{item.desc}</p>
      </div>
    </Link>
  );
}

function FeaturedCard({ card, onClose }: { card: Featured; onClose: () => void }) {
  return (
    <Link
      href={card.href}
      onClick={onClose}
      className="group relative flex flex-col justify-between h-full p-5 rounded-2xl overflow-hidden hover:-translate-y-0.5 transition-transform duration-200"
      style={{ background: card.bg }}
    >
      {/* Shimmer */}
      <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      {/* Noise overlay */}
      <span className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")" }} />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-1 bg-white/20 rounded-full px-2.5 py-1 text-[9.5px] font-bold text-white/90 uppercase tracking-wide mb-3">
          ✦ {card.eyebrow}
        </div>
        <h3 className="text-[15px] font-extrabold text-white leading-snug mb-2">{card.title}</h3>
        <p className="text-[11.5px] text-white/70 leading-relaxed">{card.desc}</p>
      </div>

      <div className="relative z-10 flex items-center gap-1.5 mt-4 text-[13px] font-semibold text-white group-hover:gap-2.5 transition-all duration-200">
        {card.cta}
        <ArrowRight className="w-3.5 h-3.5" />
      </div>
    </Link>
  );
}

// ─── Dropdown shell ────────────────────────────────────────────────────────────

function DropdownShell({
  children, onEnter, onLeave,
}: {
  children: React.ReactNode;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.975 }}
      animate={{ opacity: 1, y: 0,  scale: 1     }}
      exit={{    opacity: 0, y: -8, scale: 0.975 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="glass-strong rounded-2xl border border-white/[0.08] overflow-hidden"
      style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(99,102,241,0.12)" }}
    >
      {children}
    </motion.div>
  );
}

// ─── IB Rebates mega menu ─────────────────────────────────────────────────────

function IbRebatesMenu({ onClose, onEnter, onLeave }: { onClose: () => void; onEnter: () => void; onLeave: () => void }) {
  return (
    <DropdownShell onEnter={onEnter} onLeave={onLeave}>
      <div className="p-4 w-[680px]">
        <div className="flex gap-3">
          {/* 2-col grid */}
          <div className="flex-1">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2.5 mb-2">IB Rebate Programme</p>
            <div className="grid grid-cols-2 gap-0.5">
              {IB_CARDS.map((c) => <NavCardItem key={c.label} item={c} onClose={onClose} />)}
            </div>
          </div>
          {/* Featured */}
          <div className="w-[188px] flex-shrink-0">
            <FeaturedCard card={IB_FEATURED} onClose={onClose} />
          </div>
        </div>
      </div>
    </DropdownShell>
  );
}

// ─── Marketing Hub mega menu ──────────────────────────────────────────────────

function MarketingHubMenu({ onClose, onEnter, onLeave }: { onClose: () => void; onEnter: () => void; onLeave: () => void }) {
  return (
    <DropdownShell onEnter={onEnter} onLeave={onLeave}>
      <div className="p-4 w-[800px]">
        <div className="flex gap-3">
          {/* 3-col grid */}
          <div className="flex-1">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2.5 mb-2">Partner Resources</p>
            <div className="grid grid-cols-3 gap-0.5">
              {MH_CARDS.map((c) => <NavCardItem key={c.label} item={c} onClose={onClose} />)}
            </div>
          </div>
          {/* Featured */}
          <div className="w-[188px] flex-shrink-0">
            <FeaturedCard card={MH_FEATURED} onClose={onClose} />
          </div>
        </div>
        {/* Footer quick-links */}
        <div className="flex items-center justify-between mt-2 pt-3 px-2.5 border-t border-white/[0.05]">
          <Link href="/marketing-hub" onClick={onClose} className="flex items-center gap-1 text-[11px] text-slate-500 hover:text-accent transition-colors">
            View all resources <ArrowRight className="w-2.5 h-2.5" />
          </Link>
          <div className="flex items-center gap-3">
            {[
              { label: "Getting Started", href: "/marketing-hub/getting-started" },
              { label: "Social Media",    href: "/marketing-hub/social-media"    },
              { label: "Compliance",      href: "/marketing-hub/compliance"      },
            ].map((l) => (
              <Link key={l.label} href={l.href} onClick={onClose} className="text-[11px] text-slate-500 hover:text-slate-300 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </DropdownShell>
  );
}

// ─── Resources mega menu ──────────────────────────────────────────────────────

function ResourcesMenu({ onClose, onEnter, onLeave }: { onClose: () => void; onEnter: () => void; onLeave: () => void }) {
  return (
    <DropdownShell onEnter={onEnter} onLeave={onLeave}>
      <div className="p-4 w-[760px]">
        <div className="flex gap-3">
          <div className="flex-1">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2.5 mb-2">Knowledge & Support</p>
            <div className="grid grid-cols-3 gap-0.5">
              {RES_CARDS.map((c) => <NavCardItem key={c.label} item={c} onClose={onClose} />)}
            </div>
          </div>
          <div className="w-[188px] flex-shrink-0">
            <FeaturedCard card={RES_FEATURED} onClose={onClose} />
          </div>
        </div>
      </div>
    </DropdownShell>
  );
}

// ─── Announcement bar ─────────────────────────────────────────────────────────

function AnnouncementBar({ onDismiss }: { onDismiss: () => void }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % ANNS.length), 4200);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="relative flex items-center justify-center h-10 overflow-hidden"
      style={{
        background:   "linear-gradient(90deg, rgba(99,102,241,0.18) 0%, rgba(52,211,153,0.10) 50%, rgba(167,139,250,0.18) 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Sweeping beam */}
      <span
        className="absolute inset-y-0 w-28 pointer-events-none"
        style={{
          animation:  "beam 6s ease-in-out infinite",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
        }}
      />

      <AnimatePresence mode="wait">
        <motion.a
          key={current}
          href={ANNS[current].href}
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0,  opacity: 1 }}
          exit={{    y: -14, opacity: 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="flex items-center gap-2 text-[12px] text-slate-300 hover:text-white transition-colors px-10"
        >
          <span>{ANNS[current].icon}</span>
          <span>{ANNS[current].text}</span>
          <ArrowRight className="w-3 h-3 text-accent flex-shrink-0" />
        </motion.a>
      </AnimatePresence>

      <button
        onClick={onDismiss}
        aria-label="Dismiss"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-slate-500 hover:text-white"
      >
        <X className="w-3 h-3" />
      </button>
    </div>
  );
}

// ─── Mobile menu ──────────────────────────────────────────────────────────────

const MOBILE_NAV: MobileItem[] = [
  { label: "Why Equity IB", href: "/#why" },
  { label: "IB Rebates",    items: IB_CARDS.map((c)  => ({ label: c.label, href: c.href })) },
  { label: "Marketing Hub", items: MH_CARDS.slice(0, 7).map((c) => ({ label: c.label, href: c.href })) },
  { label: "Resources",     items: RES_CARDS.slice(0, 6).map((c) => ({ label: c.label, href: c.href })) },
  { label: "FAQ",           href: "/#faq" },
  { label: "Contact",       href: "/contact" },
];

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => { onClose(); }, [pathname]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{    opacity: 0 }}
          className="fixed inset-0 z-[200] flex"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{    opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer (slides in from right) */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{    x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 34 }}
            className="relative ml-auto w-full max-w-[340px] h-full flex flex-col overflow-y-auto"
            style={{
              background:    "rgba(5,5,9,0.97)",
              backdropFilter: "blur(24px)",
              borderLeft:    "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.05]">
              <Link href="/" onClick={onClose} className="flex items-center gap-2.5 group">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="cursor-pointer"
                  style={{ filter: "drop-shadow(0 0 0px rgba(200,149,42,0))", transition: "filter 200ms" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.filter = "drop-shadow(0 0 8px rgba(200,149,42,0.55))"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.filter = "drop-shadow(0 0 0px rgba(200,149,42,0))"; }}
                >
                  <Image src="/logo.png" alt="Equity IB" width={38} height={38} className="rounded-full w-[38px] h-[38px]" />
                </motion.div>
                <span className="font-extrabold text-base tracking-tight group-hover:opacity-90 transition-opacity">
                  Equity <span className="gradient-text-gold">IB</span>
                </span>
              </Link>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Rebate banner */}
            <div
              className="mx-5 mt-5 p-3.5 rounded-xl flex items-center gap-3"
              style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.22)" }}
            >
              <Zap className="w-4 h-4 text-primary flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-white">Daily Rebate Payments</p>
                <p className="text-[10.5px] text-slate-400">Earn up to $30/lot — paid daily</p>
              </div>
            </div>

            {/* Nav accordion */}
            <nav className="flex-1 px-4 py-3">
              {MOBILE_NAV.map((section, i) => (
                <motion.div
                  key={section.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0  }}
                  transition={{ delay: 0.04 * i, type: "spring", stiffness: 220, damping: 28 }}
                >
                  {"href" in section ? (
                    <Link
                      href={section.href}
                      onClick={onClose}
                      className="flex items-center justify-between w-full px-3 py-4 text-[15px] font-semibold text-white hover:text-accent transition-colors border-b border-white/[0.05]"
                    >
                      {section.label}
                      <ArrowRight className="w-4 h-4 text-slate-600" />
                    </Link>
                  ) : (
                    <div className="border-b border-white/[0.05]">
                      <button
                        onClick={() => setExpanded(expanded === section.label ? null : section.label)}
                        className="flex items-center justify-between w-full px-3 py-4 text-[15px] font-semibold text-white hover:text-accent transition-colors"
                      >
                        {section.label}
                        <motion.div
                          animate={{ rotate: expanded === section.label ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-4 h-4 text-slate-500" />
                        </motion.div>
                      </button>

                      <AnimatePresence initial={false}>
                        {expanded === section.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{    height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pb-3 space-y-0.5">
                              {section.items!.map((item) => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  onClick={onClose}
                                  className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] text-slate-400 hover:text-white hover:bg-white/[0.04] rounded-lg transition-colors"
                                >
                                  <span className="w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* CTAs */}
            <div className="px-5 pb-5 pt-2 space-y-3 border-t border-white/[0.05]">
              <Link
                href="/contact"
                onClick={onClose}
                className="btn-glow relative flex items-center justify-center gap-2 w-full bg-primary text-white font-semibold py-3.5 rounded-xl text-sm hover:opacity-90 transition-all overflow-hidden group"
              >
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                Become an IB
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full glass text-white font-medium py-3 rounded-xl text-sm border border-white/[0.10] hover:border-primary/30 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                Book a Call
              </Link>
            </div>

            {/* Trust strip */}
            <div className="px-5 pb-6">
              <div className="flex flex-col gap-2">
                {["Daily Rebate Payments", "Up To $30 Per Lot", "Dedicated IB Support"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-[11px] text-slate-500">
                    <Check className="w-3 h-3 text-accent flex-shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

export function Navbar() {
  const [scrolled,        setScrolled]        = useState(false);
  const [annVisible,      setAnnVisible]      = useState(true);
  const [activeDropdown,  setActiveDropdown]  = useState<string | null>(null);
  const [mobileOpen,      setMobileOpen]      = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close dropdown on route change
  useEffect(() => { setActiveDropdown(null); setMobileOpen(false); }, [pathname]);

  const openDD = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(name);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 90);
  };

  const closeDD = () => setActiveDropdown(null);

  const isActive = (href: string) =>
    href !== "/" && !href.includes("#") && pathname.startsWith(href);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50">

        {/* ── Announcement bar ── */}
        <AnimatePresence initial={false}>
          {annVisible && (
            <motion.div
              key="ann"
              initial={{ height: 40 }}
              exit={{    height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <AnnouncementBar onDismiss={() => setAnnVisible(false)} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Nav bar ── */}
        <div
          className={cn(
            "transition-all duration-300",
            scrolled
              ? "py-3 border-b border-white/[0.06]"
              : "py-4 bg-transparent"
          )}
          style={
            scrolled
              ? { background: "rgba(5,5,9,0.82)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", boxShadow: "0 8px 32px rgba(0,0,0,0.35)" }
              : undefined
          }
        >
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0  }}
              transition={{ duration: 0.55, type: "spring", stiffness: 130 }}
              className="flex-shrink-0"
            >
              <Link href="/" className="group flex items-center gap-2.5">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="cursor-pointer"
                  style={{ filter: "drop-shadow(0 0 0px rgba(200,149,42,0))", transition: "filter 200ms" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.filter = "drop-shadow(0 0 10px rgba(200,149,42,0.6))"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.filter = "drop-shadow(0 0 0px rgba(200,149,42,0))"; }}
                >
                  <Image src="/logo.png" alt="Equity IB" width={42} height={42} className="rounded-full w-[42px] h-[42px]" priority />
                </motion.div>
                <span className="font-extrabold text-[17px] tracking-tight group-hover:opacity-90 transition-opacity">
                  Equity <span className="gradient-text-gold">IB</span>
                </span>
              </Link>
            </motion.div>

            {/* Desktop nav */}
            <motion.ul
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0  }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden lg:flex items-center gap-0.5 flex-1 justify-center"
            >
              {NAV_ITEMS.map((item) => (
                <li key={item.label} className="relative">
                  {"dropdown" in item ? (
                    <div
                      onMouseEnter={() => openDD(item.dropdown)}
                      onMouseLeave={scheduleClose}
                    >
                      <button
                        className={cn(
                          "flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium rounded-lg transition-all duration-200",
                          activeDropdown === item.dropdown
                            ? "text-white bg-white/[0.07]"
                            : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                        )}
                      >
                        {item.label}
                        <motion.span
                          animate={{ rotate: activeDropdown === item.dropdown ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="inline-flex"
                        >
                          <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                        </motion.span>
                      </button>

                      {/* Animated underline */}
                      <motion.div
                        animate={{ scaleX: activeDropdown === item.dropdown ? 1 : 0, opacity: activeDropdown === item.dropdown ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-0.5 left-3 right-3 h-px bg-gradient-to-r from-primary to-accent origin-left"
                      />

                      {/* Dropdown — positioned relative to trigger */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                        {/* Invisible bridge to prevent gap-close */}
                        <div className="absolute -top-3 left-0 right-0 h-3" />
                        <AnimatePresence>
                          {activeDropdown === item.dropdown && (
                            item.dropdown === "ibRebates"    ? <IbRebatesMenu    onClose={closeDD} onEnter={() => openDD(item.dropdown)} onLeave={scheduleClose} /> :
                            item.dropdown === "marketingHub" ? <MarketingHubMenu onClose={closeDD} onEnter={() => openDD(item.dropdown)} onLeave={scheduleClose} /> :
                                                               <ResourcesMenu    onClose={closeDD} onEnter={() => openDD(item.dropdown)} onLeave={scheduleClose} />
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  ) : (
                    <div className="relative group">
                      <Link
                        href={(item as NavLink).href}
                        className={cn(
                          "flex items-center px-3.5 py-2 text-[13px] font-medium rounded-lg transition-all duration-200",
                          isActive((item as NavLink).href) ? "text-white" : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                        )}
                      >
                        {item.label}
                      </Link>
                      <span className="absolute bottom-0.5 left-3 right-3 h-px bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                    </div>
                  )}
                </li>
              ))}
            </motion.ul>

            {/* Right CTAs */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0  }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="hidden lg:flex items-center gap-2.5 flex-shrink-0"
            >
              {/* Trust micro-badges */}
              <div className="hidden xl:flex items-center gap-3 pr-4 border-r border-white/[0.06]">
                {TRUST_ITEMS.map((t) => (
                  <div key={t} className="flex items-center gap-1 text-[10.5px] text-slate-500">
                    <Check className="w-2.5 h-2.5 text-accent flex-shrink-0" />
                    {t}
                  </div>
                ))}
              </div>

              {/* Book a Call */}
              <Link
                href="/contact"
                className="flex items-center gap-1.5 text-[13px] font-medium text-white px-4 py-2.5 rounded-xl border border-white/[0.10] hover:border-primary/30 transition-all duration-200 hover:bg-white/[0.05]"
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                Book a Call
              </Link>

              {/* Become an IB */}
              <Link
                href="/contact"
                className="btn-glow relative flex items-center gap-1.5 bg-primary text-white text-[13px] font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 hover:opacity-90 hover:-translate-y-[1px] overflow-hidden group"
              >
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                Become an IB
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-150" />
              </Link>
            </motion.div>

            {/* Mobile toggle */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="lg:hidden p-2 rounded-lg hover:bg-white/[0.07] transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5 text-white" />
            </motion.button>

          </nav>
        </div>
      </header>

      {/* Mobile drawer */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
