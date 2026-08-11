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
import { V6 } from "@/lib/designTokensV6";

const ICON_MAP: Record<string, React.ElementType> = {
  Shield, FileText, AlertTriangle, Users, Info, Megaphone, Award,
  MessageSquare, Copyright, Eye, Search,
  Cookie: Shield,
};

// Genuine semantic states (not decorative) -- kept distinct per the design
// system's success/warning/error allowance, rather than forced single-gold.
const CALLOUT_STYLES = {
  warning: { icon: AlertTriangle, color: V6.error,   bg: "rgba(239,68,68,0.08)",  border: "rgba(239,68,68,0.25)" },
  info:    { icon: Info,          color: V6.gold,    bg: "rgba(212,175,55,0.08)", border: V6.borderGold },
  review:  { icon: AlertCircle,   color: V6.warning, bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.25)" },
  tip:     { icon: CheckCircle2,  color: V6.success, bg: "rgba(34,197,94,0.08)",  border: "rgba(34,197,94,0.25)" },
};

function highlight(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={i} style={{ background: "rgba(212,175,55,0.3)", color: V6.fgPrimary, borderRadius: 2, padding: "0 2px" }}>{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

function CalloutBox({ callout, searchQuery }: { callout: LegalCallout; searchQuery: string }) {
  const cfg = CALLOUT_STYLES[callout.type];
  const Icon = cfg.icon;
  return (
    <div className="my-5 rounded-xl p-4 flex gap-3" style={{ background: cfg.bg, border: `1px solid ${cfg.border}` }}>
      <Icon className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: cfg.color }} />
      <div className="min-w-0">
        {callout.title && (
          <p className="text-sm font-bold mb-1" style={{ color: cfg.color }}>
            {callout.title}
          </p>
        )}
        <p className="text-sm leading-relaxed" style={{ color: V6.fgSecondary }}>
          {highlight(callout.text, searchQuery)}
        </p>
      </div>
    </div>
  );
}

function DataTable({ table, searchQuery }: { table: LegalTable; searchQuery: string }) {
  return (
    <div className="my-5 overflow-x-auto rounded-xl" style={{ border: `1px solid ${V6.border}` }}>
      <table className="w-full text-sm">
        <thead>
          <tr style={{ background: "rgba(212,175,55,0.06)", borderBottom: `1px solid ${V6.border}` }}>
            {table.headers.map((h) => (
              <th key={h} className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider" style={{ color: V6.fgSecondary }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, ri) => (
            <tr key={ri} style={{ borderBottom: `1px solid ${V6.border}` }}>
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-3" style={{ color: ci === 0 ? V6.fgPrimary : V6.fgSecondary, fontWeight: ci === 0 ? 500 : 400 }}>
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
      <h2 className="text-xl font-bold mb-4 flex items-center gap-3" style={{ color: V6.fgPrimary }}>
        <span
          className="inline-flex w-7 h-7 rounded-lg items-center justify-center text-xs font-bold flex-shrink-0"
          style={{ background: "rgba(212,175,55,0.15)", color: V6.gold }}
        >
          {index + 1}
        </span>
        {section.heading}
      </h2>

      {section.paragraphs.map((para, i) => (
        <p key={i} className="leading-[1.85] mb-4 text-[15px]" style={{ color: V6.fgSecondary }}>
          {highlight(para, searchQuery)}
        </p>
      ))}

      {section.bullets && (
        <ul className="my-4 space-y-2">
          {section.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 text-[14px] leading-relaxed" style={{ color: V6.fgSecondary }}>
              <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: V6.gold }} />
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
    <div className="fixed top-0 left-0 right-0 h-0.5 z-[200] no-print" style={{ background: "rgba(255,255,255,0.05)" }}>
      <motion.div className="h-full origin-left" style={{ scaleX: pct / 100, background: V6.gold }} />
    </div>
  );
}

function TableOfContents({
  doc, activeSection, onSectionClick,
}: {
  doc: LegalDoc; activeSection: string; onSectionClick: (id: string) => void;
}) {
  return (
    <nav>
      <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: V6.fgMuted }}>
        Contents
      </p>
      <ul className="space-y-1">
        {doc.sections.map((s) => {
          const isActive = activeSection === s.id;
          return (
            <li key={s.id}>
              <button
                onClick={() => onSectionClick(s.id)}
                className="w-full text-left text-[12px] leading-snug px-3 py-2 rounded-lg transition-all duration-200"
                style={
                  isActive
                    ? { color: V6.fgPrimary, fontWeight: 500, background: "rgba(212,175,55,0.10)", borderLeft: `2px solid ${V6.gold}`, paddingLeft: 10 }
                    : { color: V6.fgMuted }
                }
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

export function LegalDocContent({ doc }: { doc: LegalDoc }) {
  const [activeSection, setActiveSection] = useState(doc.sections[0]?.id ?? "");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const DocIcon = ICON_MAP[doc.iconName] ?? FileText;

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

  const actionBtnStyle = { background: V6.bgSecondary, border: `1px solid ${V6.border}`, color: V6.fgSecondary };

  return (
    <>
      <ReadingProgress />

      <style>{`
        @media print {
          header, footer, nav.global-nav, .no-print { display: none !important; }
          body { background: white !important; color: black !important; font-size: 12pt; }
          h1, h2, h3, h4 { color: black !important; page-break-after: avoid; }
          p, li, td, th { color: #333 !important; }
          a { color: black !important; text-decoration: none !important; }
          .card-v6 { background: transparent !important; border: 1px solid #ddd !important; box-shadow: none !important; }
          mark { background: #fef9c3 !important; color: black !important; }
          .legal-sidebar { display: none !important; }
          .legal-main { max-width: 100% !important; }
          .print-header { display: block !important; }
        }
        .print-header { display: none; }
      `}</style>

      <div className="min-h-screen py-8" style={{ background: V6.bg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-xs mb-8 no-print"
            style={{ color: V6.fgMuted }}
          >
            <Link href="/legal" className="transition-colors" style={{ color: V6.fgMuted }}>Legal Centre</Link>
            <ChevronRight className="w-3 h-3" />
            <span style={{ color: V6.fgSecondary }}>{doc.title}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="card-v6 rounded-2xl p-8 sm:p-10 mb-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(212,175,55,0.10)", border: `1px solid ${V6.borderGold}` }}
              >
                <DocIcon className="w-7 h-7" style={{ color: V6.gold }} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span
                    className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(212,175,55,0.12)", color: V6.gold }}
                  >
                    {doc.category}
                  </span>
                  <span className="text-xs" style={{ color: V6.fgMuted }}>Last updated: {doc.lastUpdated}</span>
                  <span className="text-xs" style={{ color: V6.fgMuted }}>·</span>
                  <span className="text-xs" style={{ color: V6.fgMuted }}>{doc.readingTime}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] mb-2" style={{ color: V6.fgPrimary }}>{doc.title}</h1>
                <p className="text-sm leading-relaxed" style={{ color: V6.fgSecondary }}>{doc.subtitle}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-6 pt-6 no-print" style={{ borderTop: `1px solid ${V6.border}` }}>
              <button
                onClick={() => {
                  setShowSearch(!showSearch);
                  if (!showSearch) setTimeout(() => searchInputRef.current?.focus(), 100);
                }}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-all"
                style={actionBtnStyle}
              >
                <Search className="w-3.5 h-3.5" />
                Search
                {matchCount > 0 && (
                  <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold" style={{ background: "rgba(212,175,55,0.2)", color: V6.gold }}>
                    {matchCount}
                  </span>
                )}
              </button>
              <button onClick={handlePrint} className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-all" style={actionBtnStyle}>
                <Printer className="w-3.5 h-3.5" />
                Print
              </button>
              <button onClick={handlePrint} className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-all" style={actionBtnStyle}>
                <Download className="w-3.5 h-3.5" />
                Download PDF
              </button>
              <Link href="/contact" className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-all" style={actionBtnStyle}>
                <Mail className="w-3.5 h-3.5" />
                Contact Us
              </Link>
              <Link href="/legal" className="ml-auto flex items-center gap-2 text-xs transition-colors" style={{ color: V6.fgMuted }}>
                <ArrowLeft className="w-3.5 h-3.5" />
                All Legal Docs
              </Link>
            </div>

            <AnimatePresence>
              {showSearch && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden no-print"
                >
                  <div className="relative mt-4">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: V6.fgMuted }} />
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search this document…"
                      className="w-full rounded-xl pl-10 pr-10 py-3 text-sm outline-none transition-all"
                      style={{ background: V6.bgSecondary, border: `1px solid ${V6.border}`, color: V6.fgPrimary }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = V6.gold; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = V6.border; }}
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        aria-label="Clear search"
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 transition-colors"
                        style={{ color: V6.fgMuted }}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  {searchQuery.trim() && (
                    <p className="text-xs mt-2 px-1" style={{ color: V6.fgMuted }}>
                      {matchCount === 0 ? "No matches found." : `${matchCount} match${matchCount !== 1 ? "es" : ""} found`}
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="lg:hidden mb-6 no-print">
            <button
              onClick={() => setMobileTocOpen(!mobileTocOpen)}
              className="w-full rounded-xl px-4 py-3 flex items-center justify-between text-sm font-medium"
              style={{ background: V6.bgSecondary, border: `1px solid ${V6.border}`, color: V6.fgSecondary }}
            >
              <div className="flex items-center gap-2">
                <Menu className="w-4 h-4" style={{ color: V6.gold }} />
                Table of Contents
              </div>
              <motion.div animate={{ rotate: mobileTocOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-4 h-4" style={{ color: V6.fgMuted }} />
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
                  <div className="rounded-b-xl px-4 py-4" style={{ background: V6.bgSecondary, border: `1px solid ${V6.border}`, borderTop: "none" }}>
                    <TableOfContents doc={doc} activeSection={activeSection} onSectionClick={scrollToSection} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <div className="flex gap-8 items-start">
            <motion.aside
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="legal-sidebar hidden lg:block w-60 flex-shrink-0 sticky top-28 no-print"
            >
              <div className="card-v6 rounded-2xl p-5">
                <TableOfContents doc={doc} activeSection={activeSection} onSectionClick={scrollToSection} />
              </div>
            </motion.aside>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="legal-main flex-1 min-w-0"
            >
              <div className="card-v6 rounded-2xl p-6 mb-8">
                <p className="leading-[1.85] text-[15px]" style={{ color: V6.fgSecondary }}>
                  {highlight(doc.intro, searchQuery)}
                </p>
              </div>

              {doc.sections.map((section, i) => (
                <SectionBlock key={section.id} section={section} searchQuery={searchQuery} index={i} />
              ))}

              <div className="h-px my-12" style={{ background: V6.border }} />

              {relatedDocs.length > 0 && (
                <div className="no-print">
                  <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: V6.fgMuted }}>
                    Related Documents
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {relatedDocs.map((rd) => {
                      const Icon = ICON_MAP[rd.iconName] ?? FileText;
                      return (
                        <Link key={rd.slug} href={`/legal/${rd.slug}`}>
                          <div className="card-v6 rounded-xl p-4">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(212,175,55,0.10)" }}>
                                <Icon className="w-4 h-4" style={{ color: V6.gold }} />
                              </div>
                              <p className="text-sm font-semibold leading-tight" style={{ color: V6.fgPrimary }}>
                                {rd.title}
                              </p>
                            </div>
                            <p className="text-xs leading-snug" style={{ color: V6.fgMuted }}>{rd.description}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="mt-10 no-print">
                <Link href="/legal">
                  <button className="flex items-center gap-2 text-sm transition-colors" style={{ color: V6.fgMuted }}>
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
