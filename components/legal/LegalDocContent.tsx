"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight, Printer, Download, Mail, Search, X, ChevronDown,
  Shield, FileText, AlertTriangle, Users, Info, Megaphone, Award,
  MessageSquare, AlertCircle, CheckCircle2, ArrowLeft, Menu,
  Copyright, Eye,
} from "lucide-react";
import type { LegalDoc, LegalSection, LegalCallout, LegalTable } from "@/lib/legalContent";
import { LEGAL_DOCS } from "@/lib/legalContent";

// ─── Icon map ─────────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, React.ElementType> = {
  Shield, FileText, AlertTriangle, Users, Info, Megaphone, Award,
  MessageSquare, Copyright, Eye, Search,
  Cookie: Shield,      // fallback
};

// ─── Callout config ───────────────────────────────────────────────────────────

const CALLOUT_STYLES = {
  warning: { icon: AlertTriangle, color: "#EF4444", bg: "rgba(239,68,68,0.07)", border: "rgba(239,68,68,0.25)" },
  info:    { icon: Info,          color: "#6366F1", bg: "rgba(99,102,241,0.07)", border: "rgba(99,102,241,0.25)" },
  review:  { icon: AlertCircle,   color: "#F97316", bg: "rgba(249,115,22,0.07)", border: "rgba(249,115,22,0.25)" },
  tip:     { icon: CheckCircle2,  color: "#34D399", bg: "rgba(52,211,153,0.07)", border: "rgba(52,211,153,0.25)" },
};

// ─── Text highlighter ─────────────────────────────────────────────────────────

function highlight(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={i} className="bg-yellow-400/25 text-yellow-200 rounded px-0.5">{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

// ─── Callout box ──────────────────────────────────────────────────────────────

function CalloutBox({ callout, searchQuery }: { callout: LegalCallout; searchQuery: string }) {
  const cfg = CALLOUT_STYLES[callout.type];
  const Icon = cfg.icon;
  return (
    <div
      className="my-5 rounded-xl p-4 flex gap-3"
      style={{ background: cfg.bg, border: `1px solid ${cfg.border}` }}
    >
      <Icon className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: cfg.color }} />
      <div className="min-w-0">
        {callout.title && (
          <p className="text-sm font-bold mb-1" style={{ color: cfg.color }}>
            {callout.title}
          </p>
        )}
        <p className="text-sm leading-relaxed text-slate-400">
          {highlight(callout.text, searchQuery)}
        </p>
      </div>
    </div>
  );
}

// ─── Table ────────────────────────────────────────────────────────────────────

function DataTable({ table, searchQuery }: { table: LegalTable; searchQuery: string }) {
  return (
    <div className="my-5 overflow-x-auto rounded-xl border border-white/[0.07]">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/[0.07]" style={{ background: "rgba(99,102,241,0.07)" }}>
            {table.headers.map((h) => (
              <th key={h} className="px-4 py-3 text-left text-xs font-bold text-slate-300 uppercase tracking-wider">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, ri) => (
            <tr key={ri} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
              {row.map((cell, ci) => (
                <td key={ci} className={`px-4 py-3 ${ci === 0 ? "font-medium text-white" : "text-slate-400"}`}>
                  {highlight(cell, searchQuery)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Section block ────────────────────────────────────────────────────────────

function SectionBlock({
  section, searchQuery, index,
}: { section: LegalSection; searchQuery: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.04, 0.3) }}
      id={section.id}
      className="scroll-mt-28 mb-10"
    >
      <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
        <span
          className="inline-flex w-7 h-7 rounded-lg items-center justify-center text-xs font-extrabold flex-shrink-0"
          style={{ background: "rgba(99,102,241,0.15)", color: "#6366F1" }}
        >
          {index + 1}
        </span>
        {section.heading}
      </h2>

      {section.paragraphs.map((para, i) => (
        <p key={i} className="text-slate-400 leading-[1.85] mb-4 text-[15px]">
          {highlight(para, searchQuery)}
        </p>
      ))}

      {section.bullets && (
        <ul className="my-4 space-y-2">
          {section.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 text-[14px] text-slate-400 leading-relaxed">
              <span
                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                style={{ background: "#6366F1" }}
              />
              {highlight(bullet, searchQuery)}
            </li>
          ))}
        </ul>
      )}

      {section.table && <DataTable table={section.table} searchQuery={searchQuery} />}
      {section.callout && <CalloutBox callout={section.callout} searchQuery={searchQuery} />}
    </motion.div>
  );
}

// ─── Reading progress ─────────────────────────────────────────────────────────

function ReadingProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const fn = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setPct(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 z-[200] bg-white/5 no-print">
      <motion.div
        className="h-full origin-left"
        style={{
          scaleX: pct / 100,
          background: "linear-gradient(to right, #6366F1, #34D399)",
        }}
      />
    </div>
  );
}

// ─── Table of contents ────────────────────────────────────────────────────────

function TableOfContents({
  doc, activeSection, onSectionClick,
}: {
  doc: LegalDoc; activeSection: string; onSectionClick: (id: string) => void;
}) {
  return (
    <nav>
      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">
        Contents
      </p>
      <ul className="space-y-1">
        {doc.sections.map((s) => {
          const isActive = activeSection === s.id;
          return (
            <li key={s.id}>
              <button
                onClick={() => onSectionClick(s.id)}
                className={`w-full text-left text-[12px] leading-snug px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-white font-medium"
                    : "text-slate-500 hover:text-slate-300 hover:bg-white/[0.03]"
                }`}
                style={isActive ? { background: "rgba(99,102,241,0.12)", borderLeft: "2px solid #6366F1", paddingLeft: "10px" } : {}}
              >
                {s.heading}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function LegalDocContent({ doc }: { doc: LegalDoc }) {
  const [activeSection, setActiveSection] = useState(doc.sections[0]?.id ?? "");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const DocIcon = ICON_MAP[doc.iconName] ?? FileText;

  // Track active section via scroll
  useEffect(() => {
    const handler = () => {
      const offset = 140;
      const scrollY = window.scrollY + offset;
      let active = doc.sections[0]?.id ?? "";
      doc.sections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= scrollY) active = s.id;
      });
      setActiveSection(active);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [doc.sections]);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileTocOpen(false);
  }, []);

  const handlePrint = () => window.print();

  const relatedDocs = doc.relatedSlugs
    .map((slug) => LEGAL_DOCS.find((d) => d.slug === slug))
    .filter((d): d is LegalDoc => Boolean(d));

  // Count search matches
  const matchCount = searchQuery.trim()
    ? doc.sections.reduce((acc, s) => {
        const texts = [
          ...s.paragraphs,
          ...(s.bullets ?? []),
          ...(s.table?.rows.flat() ?? []),
          s.callout?.text ?? "",
        ];
        const lower = searchQuery.toLowerCase();
        texts.forEach((t) => {
          let idx = 0;
          while ((idx = t.toLowerCase().indexOf(lower, idx)) !== -1) {
            acc++;
            idx += lower.length;
          }
        });
        return acc;
      }, 0)
    : 0;

  return (
    <>
      <ReadingProgress />

      {/* Print styles */}
      <style>{`
        @media print {
          header, footer, nav.global-nav, .no-print { display: none !important; }
          body { background: white !important; color: black !important; font-size: 12pt; }
          h1, h2, h3, h4 { color: black !important; page-break-after: avoid; }
          p, li, td, th { color: #333 !important; }
          a { color: black !important; text-decoration: none !important; }
          .glass, .glass-strong { background: transparent !important; border: 1px solid #ddd !important; box-shadow: none !important; }
          mark { background: #fef9c3 !important; color: black !important; }
          .legal-sidebar { display: none !important; }
          .legal-main { max-width: 100% !important; }
          .print-header { display: block !important; }
        }
        .print-header { display: none; }
      `}</style>

      <div className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-xs text-slate-500 mb-8 no-print"
          >
            <Link href="/legal" className="hover:text-white transition-colors">Legal Centre</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-400">{doc.title}</span>
          </motion.div>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="glass-strong rounded-3xl p-8 sm:p-10 mb-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none rounded-3xl" />
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.25)" }}
              >
                <DocIcon className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span
                    className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(99,102,241,0.12)", color: "#A78BFA" }}
                  >
                    {doc.category}
                  </span>
                  <span className="text-xs text-slate-600">Last updated: {doc.lastUpdated}</span>
                  <span className="text-xs text-slate-600">·</span>
                  <span className="text-xs text-slate-600">{doc.readingTime}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">{doc.title}</h1>
                <p className="text-slate-400 text-sm leading-relaxed">{doc.subtitle}</p>
              </div>
            </div>

            {/* Action bar */}
            <div className="relative z-10 flex flex-wrap items-center gap-2 mt-6 pt-6 border-t border-white/[0.06] no-print">
              <button
                onClick={() => {
                  setShowSearch(!showSearch);
                  if (!showSearch) setTimeout(() => searchInputRef.current?.focus(), 100);
                }}
                className="flex items-center gap-2 glass px-3 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white border border-white/[0.07] hover:border-white/[0.16] transition-all"
              >
                <Search className="w-3.5 h-3.5" />
                Search
                {matchCount > 0 && (
                  <span className="bg-primary/20 text-primary px-1.5 py-0.5 rounded-full text-[10px] font-bold">
                    {matchCount}
                  </span>
                )}
              </button>
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 glass px-3 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white border border-white/[0.07] hover:border-white/[0.16] transition-all"
              >
                <Printer className="w-3.5 h-3.5" />
                Print
              </button>
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 glass px-3 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white border border-white/[0.07] hover:border-white/[0.16] transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                Download PDF
              </button>
              <Link
                href="/contact"
                className="flex items-center gap-2 glass px-3 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white border border-white/[0.07] hover:border-white/[0.16] transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                Contact Us
              </Link>
              <Link
                href="/legal"
                className="ml-auto flex items-center gap-2 text-xs text-slate-500 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                All Legal Docs
              </Link>
            </div>

            {/* Inline search */}
            <AnimatePresence>
              {showSearch && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden no-print"
                >
                  <div className="relative mt-4">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search this document…"
                      className="w-full bg-white/[0.05] border border-white/[0.10] rounded-xl pl-10 pr-10 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        aria-label="Clear search"
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  {searchQuery.trim() && (
                    <p className="text-xs text-slate-500 mt-2 px-1">
                      {matchCount === 0 ? "No matches found." : `${matchCount} match${matchCount !== 1 ? "es" : ""} found`}
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Mobile TOC toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="lg:hidden mb-6 no-print"
          >
            <button
              onClick={() => setMobileTocOpen(!mobileTocOpen)}
              className="w-full glass rounded-xl px-4 py-3 flex items-center justify-between text-sm font-medium text-slate-300 border border-white/[0.07]"
            >
              <div className="flex items-center gap-2">
                <Menu className="w-4 h-4 text-primary" />
                Table of Contents
              </div>
              <motion.div
                animate={{ rotate: mobileTocOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </motion.div>
            </button>
            <AnimatePresence>
              {mobileTocOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="glass rounded-b-xl px-4 py-4 border border-t-0 border-white/[0.07]">
                    <TableOfContents
                      doc={doc}
                      activeSection={activeSection}
                      onSectionClick={scrollToSection}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Main layout */}
          <div className="flex gap-8 items-start">

            {/* Sidebar TOC */}
            <motion.aside
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="legal-sidebar hidden lg:block w-60 flex-shrink-0 sticky top-28 no-print"
            >
              <div className="glass rounded-2xl p-5 border border-white/[0.07]">
                <TableOfContents
                  doc={doc}
                  activeSection={activeSection}
                  onSectionClick={scrollToSection}
                />
              </div>
            </motion.aside>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="legal-main flex-1 min-w-0"
            >
              {/* Intro paragraph */}
              <div className="glass rounded-2xl p-6 mb-8 border border-white/[0.07]">
                <p className="text-slate-300 leading-[1.85] text-[15px]">
                  {highlight(doc.intro, searchQuery)}
                </p>
              </div>

              {/* Sections */}
              {doc.sections.map((section, i) => (
                <SectionBlock
                  key={section.id}
                  section={section}
                  searchQuery={searchQuery}
                  index={i}
                />
              ))}

              {/* Divider */}
              <div className="h-px bg-white/[0.06] my-12" />

              {/* Related documents */}
              {relatedDocs.length > 0 && (
                <div className="no-print">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">
                    Related Documents
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {relatedDocs.map((rd) => {
                      const Icon = ICON_MAP[rd.iconName] ?? FileText;
                      return (
                        <Link key={rd.slug} href={`/legal/${rd.slug}`}>
                          <div className="glass rounded-xl p-4 border border-white/[0.07] hover:border-primary/30 transition-all hover:-translate-y-0.5 group">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <Icon className="w-4 h-4 text-primary" />
                              </div>
                              <p className="text-sm font-semibold text-white group-hover:text-primary transition-colors leading-tight">
                                {rd.title}
                              </p>
                            </div>
                            <p className="text-xs text-slate-500 leading-snug">{rd.description}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Back button */}
              <div className="mt-10 no-print">
                <Link href="/legal">
                  <button className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Legal Centre
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
