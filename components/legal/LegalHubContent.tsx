"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Shield, FileText, AlertTriangle, Users, Info, Megaphone, Award,
  MessageSquare, Copyright, Search, X, Clock, Calendar, BookOpen,
  Printer, Download, ArrowRight, Eye, Scale, Filter,
} from "lucide-react";
import { LEGAL_DOCS, LEGAL_CATEGORIES, type LegalDoc } from "@/lib/legalContent";

// ─── Icon map ─────────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, React.ElementType> = {
  Shield, FileText, AlertTriangle, Users, Info, Megaphone, Award,
  MessageSquare, Copyright, Eye, Search,
  Cookie: Scale,
};

// ─── Category colours ─────────────────────────────────────────────────────────

const CATEGORY_COLORS: Record<string, string> = {
  "Privacy & Data":       "#6366F1",
  "Terms & Compliance":   "#A78BFA",
  "Risk & Trading":       "#EF4444",
  "IB Partnership":       "#34D399",
  "Policy":               "#F97316",
};

// ─── Document card ────────────────────────────────────────────────────────────

function DocCard({ doc, delay }: { doc: LegalDoc; delay: number }) {
  const Icon = ICON_MAP[doc.iconName] ?? FileText;
  const catColor = CATEGORY_COLORS[doc.category] ?? "#6366F1";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ delay, duration: 0.35 }}
      layout
      className="group glass rounded-2xl p-6 border border-white/[0.07] hover:border-white/[0.15] transition-all relative overflow-hidden flex flex-col"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${catColor}06 0%, transparent 60%)` }}
      />

      <div className="relative z-10 flex-1 flex flex-col">
        {/* Icon + category */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
            style={{
              background: `${catColor}12`,
              border: `1px solid ${catColor}28`,
              boxShadow: `0 0 20px ${catColor}12`,
            }}
          >
            <Icon className="w-5 h-5" style={{ color: catColor }} />
          </div>
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{ background: `${catColor}12`, color: catColor }}
          >
            {doc.category}
          </span>
        </div>

        {/* Title + description */}
        <h3 className="text-base font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
          {doc.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
          {doc.description}
        </p>

        {/* Meta row */}
        <div className="flex items-center gap-4 text-xs text-slate-600 mb-5">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3 h-3" />
            {doc.lastUpdated}
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3 h-3" />
            {doc.readingTime}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 flex-wrap">
          <Link href={`/legal/${doc.slug}`} className="flex-1">
            <button
              className="w-full flex items-center justify-center gap-1.5 text-xs font-semibold py-2.5 px-3 rounded-xl transition-all"
              style={{
                background: `${catColor}15`,
                color: catColor,
                border: `1px solid ${catColor}28`,
              }}
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
            className="flex items-center gap-1.5 text-xs font-medium py-2.5 px-3 rounded-xl glass border border-white/[0.07] hover:border-white/[0.16] text-slate-400 hover:text-white transition-all"
            title="Download PDF"
          >
            <Download className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => {
              const w = window.open(`/legal/${doc.slug}`, "_blank");
              if (w) setTimeout(() => w.print(), 1000);
            }}
            className="flex items-center gap-1.5 text-xs font-medium py-2.5 px-3 rounded-xl glass border border-white/[0.07] hover:border-white/[0.16] text-slate-400 hover:text-white transition-all"
            title="Print"
          >
            <Printer className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

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
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-40 pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-[0.05] pointer-events-none" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(99,102,241,0.1) 0%, transparent 70%)" }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-primary mb-6">
              <Scale className="w-3 h-3" />
              Legal Centre
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Legal{" "}
              <span className="gradient-text">Documentation</span>
            </h1>

            <p className="text-slate-400 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
              All of our legal documents in one place. Read, download or print any document.
              Click a document to view the full text with a searchable, navigable reader.
            </p>

            {/* Search */}
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search legal documents…"
                className="w-full bg-white/[0.05] border border-white/[0.10] rounded-2xl pl-11 pr-11 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8 items-center"
        >
          <span className="flex items-center gap-1.5 text-xs text-slate-500 mr-2">
            <Filter className="w-3 h-3" />
            Filter:
          </span>
          {LEGAL_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            const color = cat === "All" ? "#6366F1" : (CATEGORY_COLORS[cat] ?? "#6366F1");
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="text-xs font-medium px-3.5 py-1.5 rounded-full transition-all"
                style={
                  isActive
                    ? { background: `${color}20`, color, border: `1px solid ${color}35` }
                    : { background: "rgba(255,255,255,0.04)", color: "#64748b", border: "1px solid rgba(255,255,255,0.07)" }
                }
              >
                {cat}
              </button>
            );
          })}
          {(searchQuery || activeCategory !== "All") && (
            <button
              onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
              className="text-xs text-slate-500 hover:text-white transition-colors flex items-center gap-1.5 ml-2"
            >
              <X className="w-3 h-3" />
              Clear filters
            </button>
          )}
        </motion.div>

        {/* Result count */}
        <AnimatePresence mode="wait">
          {(searchQuery || activeCategory !== "All") && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-xs text-slate-500 mb-6"
            >
              Showing {filtered.length} of {LEGAL_DOCS.length} documents
            </motion.p>
          )}
        </AnimatePresence>

        {/* Document grid */}
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
              <Search className="w-10 h-10 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-500 mb-2">No documents found</p>
              <p className="text-xs text-slate-600">
                Try a different search term or{" "}
                <button
                  onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                  className="text-primary hover:underline"
                >
                  clear all filters
                </button>
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-strong rounded-3xl p-8 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none rounded-3xl" />
          <div className="relative z-10">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Questions?</p>
            <h3 className="text-xl font-extrabold text-white mb-3">
              Need clarification on any of our documents?
            </h3>
            <p className="text-sm text-slate-400 mb-6 max-w-md mx-auto">
              Our team is available to answer questions about our legal documents, privacy practices or IB programme terms.
            </p>
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-xl text-sm transition-all">
                Contact Our Team
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
