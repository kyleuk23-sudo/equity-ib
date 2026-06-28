"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Search, ArrowRight, Download, Star, Clock, FileText, BookOpen,
  CheckCircle2, Layers, Zap, Calculator, ListChecks, BarChart3,
} from "lucide-react";
import {
  PREMIUM_GUIDES, RESOURCES, TOOLKITS, CHECKLISTS, CALCULATORS,
  HUB_CATEGORIES, DIFFICULTY_COLORS,
  type PremiumGuide, type Resource,
} from "@/lib/marketingHubData";
import { DownloadModal } from "@/components/ui/DownloadModal";

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionHeader({ title, subtitle, count }: { title: string; subtitle?: string; count?: number }) {
  return (
    <div className="flex items-end justify-between mb-6">
      <div>
        <h2 className="text-2xl font-extrabold text-white">{title}</h2>
        {subtitle && <p className="text-sm text-slate-400 mt-1">{subtitle}</p>}
      </div>
      {count !== undefined && (
        <span className="text-sm text-slate-500 font-medium">{count} items</span>
      )}
    </div>
  );
}

function FeaturedGuideCard({ guide, onDownload }: { guide: PremiumGuide; onDownload: (g: PremiumGuide) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="glass rounded-2xl overflow-hidden border border-white/[0.07] hover:border-white/[0.14] transition-all group flex flex-col"
    >
      {/* Cover art */}
      <div
        className="relative h-32 flex flex-col justify-end p-4 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${guide.coverFrom}, ${guide.coverTo})` }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(circle at 80% 20%, rgba(99,102,241,0.15) 0%, transparent 60%)" }}
        />
        <div className="flex items-center gap-2 relative z-10 mb-1.5">
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded-full"
            style={{ background: `${DIFFICULTY_COLORS[guide.difficulty]}30`, color: DIFFICULTY_COLORS[guide.difficulty] }}
          >
            {guide.difficulty}
          </span>
          {guide.isNew && <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-accent/20 text-accent">New</span>}
          {guide.isPopular && <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-yellow-400/20 text-yellow-400">Popular</span>}
        </div>
        <h3 className="relative z-10 text-base font-bold text-white leading-snug line-clamp-2">{guide.title}</h3>
      </div>

      {/* Body */}
      <div className="p-4 flex-1 flex flex-col">
        <p className="text-xs text-slate-400 leading-relaxed mb-3 flex-1">{guide.subtitle}</p>

        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {guide.readTime}</span>
          <span className="flex items-center gap-1"><FileText className="w-3 h-3" /> {guide.pages} pages</span>
          <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> {guide.chapters.length} chapters</span>
        </div>

        <div className="space-y-1 mb-4">
          {guide.chapters.slice(0, 3).map((ch, i) => (
            <div key={i} className="flex items-start gap-1.5 text-xs text-slate-500">
              <span className="text-slate-600 flex-shrink-0">·</span>
              <span className="line-clamp-1">{ch}</span>
            </div>
          ))}
          {guide.chapters.length > 3 && (
            <div className="text-xs text-slate-600">+ {guide.chapters.length - 3} more chapters</div>
          )}
        </div>

        <div className="flex gap-2">
          <Link
            href={`/marketing-hub/${guide.tags[0]}/${guide.id}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold transition-all"
            style={{ background: `${guide.color}18`, color: guide.color, border: `1px solid ${guide.color}30` }}
          >
            <BookOpen className="w-3.5 h-3.5" /> Read Guide
          </Link>
          <button
            onClick={() => onDownload(guide)}
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/[0.18]"
          >
            <Download className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function ResourceCard({ resource, onDownload, onSelect }: {
  resource: Resource;
  onDownload?: () => void;
  onSelect?: () => void;
}) {
  const typeColors: Record<string, string> = { guide: "#6366F1", template: "#34D399", checklist: "#A78BFA", calculator: "#F97316" };
  const typeLabels: Record<string, string> = { guide: "Guide", template: "Template", checklist: "Checklist", calculator: "Calculator" };
  const color = typeColors[resource.type] || "#6366F1";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-2xl p-5 relative group hover:border-white/[0.14] transition-all flex flex-col border border-white/[0.06]"
    >
      <div className="flex items-start justify-between mb-3">
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-lg"
          style={{ background: `${color}15`, color }}
        >
          {typeLabels[resource.type]}
        </span>
        <div className="flex items-center gap-1.5">
          {resource.isNew && <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-accent/15 text-accent">New</span>}
          {resource.isPopular && <Star className="w-3.5 h-3.5 text-yellow-400" />}
        </div>
      </div>

      <h3 className="font-semibold text-white mb-1.5 text-sm leading-snug flex-1">{resource.title}</h3>
      <p className="text-xs text-slate-400 leading-relaxed mb-4">{resource.description}</p>

      <div className="flex items-center gap-3 text-xs text-slate-500 mt-auto">
        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {resource.readTime}</span>
        <span
          className="px-2 py-0.5 rounded-full text-xs"
          style={{ background: `${DIFFICULTY_COLORS[resource.difficulty]}15`, color: DIFFICULTY_COLORS[resource.difficulty] }}
        >
          {resource.difficulty}
        </span>
      </div>

      <div
        className="flex items-center gap-1 mt-3 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all"
        style={{ color }}
      >
        <BookOpen className="w-3 h-3" /> Read guide
      </div>
    </motion.div>
  );
}

function DownloadCenterCard({ guide, onDownload }: { guide: PremiumGuide; onDownload: (g: PremiumGuide) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="glass rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-all group flex"
    >
      {/* Colored accent bar */}
      <div className="w-1 flex-shrink-0" style={{ background: guide.color }} />

      <div className="flex items-center gap-4 px-4 py-4 flex-1 min-w-0">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{ background: `${DIFFICULTY_COLORS[guide.difficulty]}20`, color: DIFFICULTY_COLORS[guide.difficulty] }}
            >
              {guide.difficulty}
            </span>
            {guide.isNew && <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-accent/15 text-accent">New</span>}
            {guide.isPopular && <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-yellow-400/15 text-yellow-400">Popular</span>}
          </div>
          <h3 className="font-semibold text-white text-sm mb-0.5 line-clamp-1">{guide.title}</h3>
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span>{guide.pages} pages</span>
            <span>·</span>
            <span>{guide.readTime}</span>
            <span>·</span>
            <span>{guide.chapters.length} chapters</span>
          </div>
        </div>

        <div className="flex-shrink-0 flex items-center gap-2">
          <Link
            href={`/marketing-hub/${guide.tags[0]}/${guide.id}`}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg transition-all border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/[0.18]"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Read</span>
          </Link>
          <button
            onClick={() => onDownload(guide)}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg transition-all"
            style={{ background: `${guide.color}15`, color: guide.color, border: `1px solid ${guide.color}25` }}
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Download</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function ToolkitCard({ toolkit }: { toolkit: (typeof TOOLKITS)[number] }) {
  const formatColors: Record<string, string> = { PDF: "#F97316", XLSX: "#34D399", DOCX: "#6366F1" };
  const color = formatColors[toolkit.format] || "#94a3b8";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-2xl p-4 border border-white/[0.06] hover:border-white/[0.12] transition-all group cursor-pointer flex flex-col gap-3"
    >
      <div className="flex items-start justify-between">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${toolkit.color}15` }}
        >
          <Download className="w-4 h-4" style={{ color: toolkit.color }} />
        </div>
        <span
          className="text-xs font-bold px-2 py-0.5 rounded-full"
          style={{ background: `${color}15`, color }}
        >
          {toolkit.format}
        </span>
      </div>
      <div>
        <h3 className="font-semibold text-white text-sm mb-1">{toolkit.name}</h3>
        <p className="text-xs text-slate-400 leading-relaxed">{toolkit.desc}</p>
      </div>
      <div className="flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all mt-auto" style={{ color: toolkit.color }}>
        <Download className="w-3 h-3" /> Download · {toolkit.size}
      </div>
    </motion.div>
  );
}

function ChecklistCard({ checklist }: { checklist: (typeof CHECKLISTS)[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-2xl p-4 border border-white/[0.06] hover:border-white/[0.12] transition-all group cursor-pointer flex items-start gap-4"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: `${checklist.color}15` }}
      >
        <ListChecks className="w-5 h-5" style={{ color: checklist.color }} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-white text-sm leading-snug">{checklist.name}</h3>
          <span
            className="flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full"
            style={{ background: `${checklist.color}15`, color: checklist.color }}
          >
            {checklist.items}
          </span>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed">{checklist.desc}</p>
        <div className="flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all mt-2" style={{ color: checklist.color }}>
          <CheckCircle2 className="w-3 h-3" /> View checklist
        </div>
      </div>
    </motion.div>
  );
}

function CalculatorCard({ calc }: { calc: (typeof CALCULATORS)[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-2xl p-5 border border-white/[0.06] hover:border-white/[0.12] transition-all group flex flex-col gap-3"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: `${calc.color}15` }}
      >
        <Calculator className="w-5 h-5" style={{ color: calc.color }} />
      </div>
      <div>
        <h3 className="font-semibold text-white text-sm mb-1.5">{calc.name}</h3>
        <p className="text-xs text-slate-400 leading-relaxed mb-2">{calc.desc}</p>
        <div
          className="text-xs px-2.5 py-1.5 rounded-lg font-mono"
          style={{ background: `${calc.color}10`, color: `${calc.color}cc` }}
        >
          {calc.inputs}
        </div>
      </div>
      <Link
        href={calc.href}
        className="flex items-center gap-1.5 text-xs font-semibold transition-all mt-auto"
        style={{ color: calc.color }}
      >
        Use Calculator <ArrowRight className="w-3 h-3" />
      </Link>
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

const TYPE_FILTERS = [
  { value: "all", label: "All" },
  { value: "guide", label: "Guides" },
  { value: "template", label: "Templates" },
  { value: "checklist", label: "Checklists" },
];

export function MarketingHubContent() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeType, setActiveType] = useState("all");
  const [selectedGuide, setSelectedGuide] = useState<PremiumGuide | null>(null);

  const featuredGuides = useMemo(() => {
    if (activeCategory === "all") return PREMIUM_GUIDES.filter((g) => g.isPopular || g.isNew).slice(0, 3);
    const byTag = PREMIUM_GUIDES.filter((g) => g.tags.includes(activeCategory));
    return byTag.length > 0 ? byTag.slice(0, 3) : PREMIUM_GUIDES.slice(0, 3);
  }, [activeCategory]);

  const filteredResources = useMemo(() => {
    const q = search.toLowerCase();
    return RESOURCES.filter((r) => {
      const matchCat = activeCategory === "all" || r.category === activeCategory;
      const matchType = activeType === "all" || r.type === activeType;
      const matchSearch =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.tags.some((t) => t.includes(q));
      return matchCat && matchType && matchSearch;
    });
  }, [activeCategory, activeType, search]);

  const activeCategoryData = HUB_CATEGORIES.find((c) => c.id === activeCategory);
  const activeCategoryColor = activeCategoryData?.color || "#6366F1";

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      <DownloadModal guide={selectedGuide} onClose={() => setSelectedGuide(null)} />

      <div className="absolute inset-0 bg-gradient-hero opacity-60 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ─── Hero ──────────────────────────────────────────────────────────── */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-primary mb-5">
            <Layers className="w-3 h-3" /> Premium IB Resource Centre
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4">
            The Equity IB <span className="gradient-text">Marketing Hub</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A comprehensive educational resource centre built exclusively for Introducing Brokers. Guides, templates, toolkits, checklists and calculators — all free for approved IB partners.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              { icon: BookOpen, label: "Premium Guides", value: "10" },
              { icon: FileText, label: "Resources", value: "55+" },
              { icon: Download, label: "Toolkits", value: "15" },
              { icon: ListChecks, label: "Checklists", value: "10+" },
              { icon: Calculator, label: "Calculators", value: "6" },
              { icon: Zap, label: "Free for IBs", value: "100%" },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="glass px-4 py-2.5 rounded-xl flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-primary" />
                  <div className="text-left">
                    <div className="text-base font-bold text-white leading-none">{s.value}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{s.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ─── Filters ───────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mb-10 space-y-4"
        >
          {/* Search */}
          <div className="glass-strong rounded-2xl flex items-center gap-3 px-4">
            <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search guides, templates, checklists, tools…"
              className="flex-1 bg-transparent py-4 text-sm text-white placeholder:text-slate-500 outline-none"
            />
            {search && (
              <button onClick={() => setSearch("")} className="text-xs text-slate-400 hover:text-white transition-colors">
                Clear
              </button>
            )}
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
              style={activeCategory === "all" ? { background: "#6366F1", color: "white" } : { background: "rgba(255,255,255,0.05)", color: "#94a3b8" }}
            >
              All Categories
            </button>
            {HUB_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5"
                style={
                  activeCategory === cat.id
                    ? { background: cat.color, color: "white" }
                    : { background: "rgba(255,255,255,0.05)", color: "#94a3b8" }
                }
              >
                <span>{cat.emoji}</span> {cat.label}
              </button>
            ))}
          </div>

          {/* Type filter */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 font-medium">Type:</span>
            <div className="flex items-center gap-2">
              {TYPE_FILTERS.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setActiveType(f.value)}
                  className="px-3 py-1 rounded-full text-xs font-medium transition-all border"
                  style={
                    activeType === f.value
                      ? { background: `${activeCategoryColor}15`, color: activeCategoryColor, borderColor: `${activeCategoryColor}30` }
                      : { background: "transparent", color: "#64748b", borderColor: "rgba(255,255,255,0.07)" }
                  }
                >
                  {f.label}
                </button>
              ))}
            </div>
            {(search || activeCategory !== "all" || activeType !== "all") && (
              <button
                onClick={() => { setSearch(""); setActiveCategory("all"); setActiveType("all"); }}
                className="text-xs text-slate-500 hover:text-white transition-colors ml-2"
              >
                Reset filters
              </button>
            )}
          </div>
        </motion.div>

        {/* ─── Featured Premium Guides ────────────────────────────────────────── */}
        <section className="mb-16">
          <SectionHeader
            title="Premium Guides"
            subtitle="In-depth, downloadable guides built exclusively for Introducing Brokers."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredGuides.map((guide) => (
              <FeaturedGuideCard key={guide.id} guide={guide} onDownload={setSelectedGuide} />
            ))}
          </div>
        </section>

        {/* ─── Resources ──────────────────────────────────────────────────────── */}
        <section className="mb-16">
          <SectionHeader
            title={activeCategory !== "all" && activeCategoryData ? `${activeCategoryData.label} Resources` : "All Resources"}
            subtitle={activeCategoryData?.description || "Browse all IB marketing resources, guides and templates."}
            count={filteredResources.length}
          />

          {filteredResources.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredResources.map((resource) => (
                <Link key={resource.id} href={`/marketing-hub/${resource.category}/${resource.id}`}>
                  <ResourceCard resource={resource} />
                </Link>
              ))}
            </div>
          ) : (
            <div className="glass rounded-2xl py-16 text-center">
              <BookOpen className="w-10 h-10 text-slate-600 mx-auto mb-3" />
              <p className="text-white font-medium mb-1">No resources found</p>
              <p className="text-sm text-slate-400">Try a different category, type, or search term.</p>
              <button
                onClick={() => { setSearch(""); setActiveCategory("all"); setActiveType("all"); }}
                className="mt-4 text-xs text-primary hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </section>

        {/* ─── Download Centre ────────────────────────────────────────────────── */}
        <section className="mb-16">
          <SectionHeader
            title="Download Centre"
            subtitle="All 10 premium guides — free for approved Equity IB partners. Click to preview and download."
          />
          <div className="grid sm:grid-cols-2 gap-3">
            {PREMIUM_GUIDES.map((guide) => (
              <DownloadCenterCard key={guide.id} guide={guide} onDownload={setSelectedGuide} />
            ))}
          </div>
        </section>

        {/* ─── Toolkits ───────────────────────────────────────────────────────── */}
        <section className="mb-16">
          <SectionHeader
            title="Toolkits & Templates"
            subtitle="Ready-to-use business templates, planners and workflow tools."
            count={TOOLKITS.length}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TOOLKITS.map((t) => (
              <ToolkitCard key={t.id} toolkit={t} />
            ))}
          </div>
        </section>

        {/* ─── Checklists ─────────────────────────────────────────────────────── */}
        <section className="mb-16">
          <SectionHeader
            title="Checklists"
            subtitle="Step-by-step checklists for every stage of your IB business."
            count={CHECKLISTS.length}
          />
          <div className="grid sm:grid-cols-2 gap-3">
            {CHECKLISTS.map((c) => (
              <ChecklistCard key={c.id} checklist={c} />
            ))}
          </div>
        </section>

        {/* ─── Calculators ────────────────────────────────────────────────────── */}
        <section className="mb-16">
          <SectionHeader
            title="Calculators"
            subtitle="Interactive tools to estimate rebates, plan campaigns and model your IB business growth."
            count={CALCULATORS.length}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CALCULATORS.map((c) => (
              <CalculatorCard key={c.id} calc={c} />
            ))}
          </div>
        </section>

        {/* ─── CTA ────────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-8 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-accent mb-4">
            <BarChart3 className="w-3 h-3" /> 100% free for active IB partners
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Unlock the full Marketing Hub
          </h2>
          <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
            Become an approved Equity IB partner to download all guides, access every toolkit and checklist, and receive dedicated marketing support.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-glow text-sm"
            >
              Become an IB <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#portal"
              className="flex items-center gap-2 glass hover:bg-white/[0.07] text-white font-medium px-6 py-3 rounded-xl transition-all text-sm border border-white/[0.08]"
            >
              Broker Portal Features
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
