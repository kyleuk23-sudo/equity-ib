"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Shield, FileText, AlertTriangle, Users, Info, Megaphone, Award,
  MessageSquare, Copyright, Search, X, Clock, Calendar, BookOpen,
  Printer, Download, Eye, Scale, Filter,
} from "lucide-react";
import { LEGAL_DOCS, LEGAL_CATEGORIES, type LegalDoc } from "@/lib/legalContent";
import { ButtonV6 } from "@/components/ui/ButtonV6";
import { V6 } from "@/lib/designTokensV6";
import { MeshGradientBg } from "@/components/visual/MeshGradientBg";

const ICON_MAP: Record<string, React.ElementType> = {
  Shield, FileText, AlertTriangle, Users, Info, Megaphone, Award,
  MessageSquare, Copyright, Eye, Search,
  Cookie: Scale,
};

// Distinct-but-cohesive per-category accent, all within the gold family
// or genuine semantic roles (amber for risk content) -- no rainbow.
const CATEGORY_COLORS: Record<string, string> = {
  "Privacy & Data":     V6.gold,
  "Terms & Compliance": V6.goldChampagne,
  "Risk & Trading":     V6.warning,
  "IB Partnership":     V6.fgSecondary,
  "Policy":             V6.goldChampagne,
};

function DocCard({ doc, delay }: { doc: LegalDoc; delay: number }) {
  const Icon = ICON_MAP[doc.iconName] ?? FileText;
  const catColor = CATEGORY_COLORS[doc.category] ?? V6.gold;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ delay, duration: 0.35 }}
      layout
      className="card-v6 rounded-2xl p-6 flex flex-col"
    >
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center"
            style={{ background: `${catColor}18`, border: `1px solid ${catColor}30` }}
          >
            <Icon className="w-5 h-5" style={{ color: catColor }} />
          </div>
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{ background: `${catColor}18`, color: catColor }}
          >
            {doc.category}
          </span>
        </div>

        <p className="text-base font-bold mb-2" style={{ color: V6.fgPrimary }}>
          {doc.title}
        </p>
        <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: V6.fgSecondary }}>
          {doc.description}
        </p>

        <div className="flex items-center gap-4 text-xs mb-5" style={{ color: V6.fgMuted }}>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3 h-3" />
            {doc.lastUpdated}
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3 h-3" />
            {doc.readingTime}
          </div>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Link href={`/legal/${doc.slug}`} className="flex-1">
            <button
              className="w-full flex items-center justify-center gap-1.5 text-xs font-semibold py-2.5 px-3 rounded-xl transition-all"
              style={{ background: `${catColor}18`, color: catColor, border: `1px solid ${catColor}30` }}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Open Document
            </button>
          </Link>
          <button
            onClick={() => {
              const w = window.open(`/legal/${doc.slug}`, "_blank");
              if (w) setTimeout(() => w.print(), 1000);
            }}
            className="flex items-center gap-1.5 text-xs font-medium py-2.5 px-3 rounded-xl transition-all"
            style={{ background: V6.bgInteractive, border: `1px solid ${V6.border}`, color: V6.fgSecondary }}
            title="Download PDF"
          >
            <Download className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => {
              const w = window.open(`/legal/${doc.slug}`, "_blank");
              if (w) setTimeout(() => w.print(), 1000);
            }}
            className="flex items-center gap-1.5 text-xs font-medium py-2.5 px-3 rounded-xl transition-all"
            style={{ background: V6.bgInteractive, border: `1px solid ${V6.border}`, color: V6.fgSecondary }}
            title="Print"
          >
            <Printer className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function LegalHubContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    let docs = LEGAL_DOCS;
    if (activeCategory !== "All") {
      docs = docs.filter((d) => d.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      docs = docs.filter(
        (d) =>
          d.title.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q) ||
          d.category.toLowerCase().includes(q)
      );
    }
    return docs;
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen" style={{ background: V6.bg }}>
      <section className="pt-20 pb-12 relative overflow-hidden">
        <MeshGradientBg variant="hero" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] mb-6" style={{ color: V6.gold }}>
              <Scale className="w-3.5 h-3.5" />
              Legal Centre
            </p>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-[-0.02em] mb-4" style={{ color: V6.fgPrimary }}>
              Legal documentation
            </h1>

            <p className="text-sm max-w-xl mx-auto mb-8 leading-relaxed" style={{ color: V6.fgSecondary }}>
              All of our legal documents in one place. Read, download or print any document.
              Click a document to view the full text with a searchable, navigable reader.
            </p>

            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: V6.fgMuted }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search legal documents…"
                className="w-full rounded-2xl pl-11 pr-11 py-3.5 text-sm outline-none transition-all"
                style={{ background: V6.bgSecondary, border: `1px solid ${V6.border}`, color: V6.fgPrimary }}
                onFocus={(e) => { e.currentTarget.style.borderColor = V6.gold; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = V6.border; }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors"
                  style={{ color: V6.fgMuted }}
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8 items-center"
        >
          <span className="flex items-center gap-1.5 text-xs mr-2" style={{ color: V6.fgMuted }}>
            <Filter className="w-3 h-3" />
            Filter:
          </span>
          {LEGAL_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            const color = cat === "All" ? V6.gold : (CATEGORY_COLORS[cat] ?? V6.gold);
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="text-xs font-medium px-3.5 py-1.5 rounded-full transition-all"
                style={
                  isActive
                    ? { background: `${color}20`, color, border: `1px solid ${color}40` }
                    : { background: V6.bgSecondary, color: V6.fgMuted, border: `1px solid ${V6.border}` }
                }
              >
                {cat}
              </button>
            );
          })}
          {(searchQuery || activeCategory !== "All") && (
            <button
              onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
              className="text-xs transition-colors flex items-center gap-1.5 ml-2"
              style={{ color: V6.fgMuted }}
            >
              <X className="w-3 h-3" />
              Clear filters
            </button>
          )}
        </motion.div>

        <AnimatePresence mode="wait">
          {(searchQuery || activeCategory !== "All") && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-xs mb-6"
              style={{ color: V6.fgMuted }}
            >
              Showing {filtered.length} of {LEGAL_DOCS.length} documents
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={`${activeCategory}-${searchQuery}`}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((doc, i) => (
                <DocCard key={doc.slug} doc={doc} delay={i * 0.06} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <Search className="w-10 h-10 mx-auto mb-4" style={{ color: V6.fgMuted }} />
              <p className="mb-2" style={{ color: V6.fgSecondary }}>No documents found</p>
              <p className="text-xs" style={{ color: V6.fgMuted }}>
                Try a different search term or{" "}
                <button
                  onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                  className="underline"
                  style={{ color: V6.gold }}
                >
                  clear all filters
                </button>
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-v6 mt-16 rounded-2xl p-8 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: V6.fgMuted }}>Questions?</p>
          <h2 className="text-xl font-bold mb-3" style={{ color: V6.fgPrimary }}>
            Need clarification on any of our documents?
          </h2>
          <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: V6.fgSecondary }}>
            Our team is available to answer questions about our legal documents, privacy practices or IB programme terms.
          </p>
          <ButtonV6 href="/contact">
            Contact Our Team
          </ButtonV6>
        </motion.div>
      </div>
    </div>
  );
}
