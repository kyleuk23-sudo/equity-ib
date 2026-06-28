"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, Clock, FileText, BookOpen, ChevronDown, ChevronRight,
  CheckCircle2, AlertTriangle, Info, Lightbulb, Download, ArrowRight,
  Share2, Bookmark, Star, BarChart3,
} from "lucide-react";
import { PREMIUM_GUIDES, HUB_CATEGORIES, DIFFICULTY_COLORS } from "@/lib/marketingHubData";
import type { PremiumGuide, Resource } from "@/lib/marketingHubData";
import type { GuideArticle } from "@/lib/articleContent";

// ─── Props ────────────────────────────────────────────────────────────────────

type ArticleContentProps =
  | { type: "guide"; guide: PremiumGuide; article: GuideArticle | undefined; category: string }
  | { type: "resource"; resource: Resource; category: string };

// ─── Reading progress ─────────────────────────────────────────────────────────

function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-white/5">
      <motion.div
        className="h-full origin-left"
        style={{ scaleX: progress / 100, background: "linear-gradient(90deg,#6366F1,#34D399)" }}
      />
    </div>
  );
}

// ─── Callout box ──────────────────────────────────────────────────────────────

function Callout({ type, title, text }: { type: "tip" | "warning" | "info"; title?: string; text: string }) {
  const map = {
    tip:     { Icon: Lightbulb, color: "#34D399", bg: "rgba(52,211,153,0.07)", border: "rgba(52,211,153,0.25)", label: title ?? "Pro Tip" },
    warning: { Icon: AlertTriangle, color: "#F97316", bg: "rgba(249,115,22,0.07)", border: "rgba(249,115,22,0.25)", label: title ?? "Important" },
    info:    { Icon: Info, color: "#6366F1", bg: "rgba(99,102,241,0.07)", border: "rgba(99,102,241,0.25)", label: title ?? "Note" },
  };
  const { Icon, color, bg, border, label } = map[type];

  return (
    <div
      className="rounded-xl p-4 my-6 flex gap-3"
      style={{ background: bg, border: `1px solid ${border}` }}
    >
      <Icon className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color }} />
      <div>
        <p className="text-xs font-bold mb-1" style={{ color }}>{label}</p>
        <p className="text-sm text-slate-300 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

// ─── FAQ Accordion ────────────────────────────────────────────────────────────

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/[0.07] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left gap-4 group"
      >
        <span className="text-sm font-medium text-white group-hover:text-primary transition-colors">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-4 h-4 text-slate-500 flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-slate-400 leading-relaxed pb-4">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Related guides ───────────────────────────────────────────────────────────

function RelatedGuide({ guide }: { guide: PremiumGuide }) {
  const href = `/marketing-hub/${guide.tags[0]}/${guide.id}`;
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -3 }}
        className="glass rounded-xl overflow-hidden border border-white/[0.07] hover:border-white/[0.14] transition-all group"
      >
        <div
          className="h-20 relative"
          style={{ background: `linear-gradient(135deg, ${guide.coverFrom}, ${guide.coverTo})` }}
        >
          <div className="absolute inset-0 flex items-end p-3">
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{ background: `${DIFFICULTY_COLORS[guide.difficulty]}30`, color: DIFFICULTY_COLORS[guide.difficulty] }}
            >
              {guide.difficulty}
            </span>
          </div>
        </div>
        <div className="p-3">
          <h4 className="text-sm font-semibold text-white leading-snug mb-1 group-hover:text-primary transition-colors line-clamp-2">
            {guide.title}
          </h4>
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{guide.readTime}</span>
            <span className="flex items-center gap-1"><FileText className="w-3 h-3" />{guide.pages}pp</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

// ─── GUIDE ARTICLE VIEW ───────────────────────────────────────────────────────

function GuideView({ guide, article, category }: { guide: PremiumGuide; article: GuideArticle | undefined; category: string }) {
  const activeSection = useRef<string>("");
  const [tocActive, setTocActive] = useState("");

  const tocSections = article
    ? article.sections.map((s) => ({ id: s.id, label: s.heading }))
    : guide.chapters.map((ch, i) => ({ id: `chapter-${i}`, label: ch }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTocActive(e.target.id);
            activeSection.current = e.target.id;
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );
    tocSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [tocSections]);

  const relatedGuides = PREMIUM_GUIDES.filter(
    (g) => g.id !== guide.id && g.tags.some((t) => guide.tags.includes(t))
  ).slice(0, 3);

  const nextGuide = article?.nextGuideId
    ? PREMIUM_GUIDES.find((g) => g.id === article.nextGuideId)
    : null;

  return (
    <div className="min-h-screen" style={{ background: "#050509" }}>
      <ReadingProgress />

      {/* Hero */}
      <div
        className="relative pt-[100px] pb-16 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${guide.coverFrom} 0%, ${guide.coverTo} 50%, #050509 100%)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050509]" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 70% 30%, rgba(99,102,241,0.2) 0%, transparent 60%)" }} />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
            <Link href="/marketing-hub" className="hover:text-white transition-colors">Marketing Hub</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/marketing-hub/${category}`} className="hover:text-white transition-colors capitalize">
              {category.replace(/-/g, " ")}
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white line-clamp-1">{guide.title}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: `${DIFFICULTY_COLORS[guide.difficulty]}25`, color: DIFFICULTY_COLORS[guide.difficulty] }}
            >
              {guide.difficulty}
            </span>
            {guide.isNew && (
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/20 text-accent">New</span>
            )}
            {guide.isPopular && (
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-400 flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" /> Popular
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight max-w-3xl">
            {guide.title}
          </h1>
          <p className="text-lg text-slate-300 mb-6 max-w-2xl">{guide.subtitle}</p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {guide.readTime}</span>
            <span className="flex items-center gap-2"><FileText className="w-4 h-4" /> {guide.pages} pages</span>
            <span className="flex items-center gap-2"><BookOpen className="w-4 h-4" /> {guide.chapters.length} chapters</span>
            <span className="text-slate-500">Updated {guide.lastUpdated}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex gap-10">

          {/* Sidebar TOC */}
          <aside className="hidden lg:block w-60 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* TOC */}
              <div className="glass rounded-xl p-4 border border-white/[0.07]">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Contents</p>
                <nav className="space-y-1">
                  {tocSections.map(({ id, label }) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className={`block text-xs py-1.5 px-2 rounded-lg transition-all leading-snug ${
                        tocActive === id
                          ? "bg-primary/15 text-primary font-medium"
                          : "text-slate-500 hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Meta */}
              <div className="glass rounded-xl p-4 border border-white/[0.07] space-y-3">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">About this guide</p>
                <div className="space-y-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> {guide.readTime} read</div>
                  <div className="flex items-center gap-2"><FileText className="w-3.5 h-3.5" /> {guide.pages} pages</div>
                  <div className="flex items-center gap-2"><BarChart3 className="w-3.5 h-3.5" />
                    <span style={{ color: DIFFICULTY_COLORS[guide.difficulty] }}>{guide.difficulty}</span>
                  </div>
                  <div className="text-slate-500 text-[11px]">Updated {guide.lastUpdated}</div>
                </div>
              </div>

              {/* Download CTA */}
              <div
                className="rounded-xl p-4"
                style={{ background: `${guide.color}12`, border: `1px solid ${guide.color}25` }}
              >
                <p className="text-xs font-semibold text-white mb-1">Full PDF Guide</p>
                <p className="text-[11px] text-slate-400 mb-3">Download the complete {guide.pages}-page guide to read offline.</p>
                <Link href="/marketing-hub">
                  <button
                    className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all"
                    style={{ background: `${guide.color}20`, color: guide.color }}
                  >
                    <Download className="w-3 h-3" /> Download Free
                  </button>
                </Link>
              </div>
            </div>
          </aside>

          {/* Article body */}
          <article className="flex-1 min-w-0">

            {/* Intro */}
            {article && (
              <div className="text-base text-slate-300 leading-relaxed mb-10 pb-8 border-b border-white/[0.07]">
                {article.intro}
              </div>
            )}

            {/* What you'll learn — from existing guide data */}
            <div className="glass rounded-2xl p-6 border border-white/[0.07] mb-10" style={{ borderLeft: `3px solid ${guide.color}` }}>
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <Lightbulb className="w-4 h-4" style={{ color: guide.color }} />
                What you will learn
              </h3>
              <div className="space-y-2">
                {guide.keyTakeaways.map((t, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: guide.color }} />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Sections — bespoke article content */}
            {article && (
              <div className="space-y-12">
                {article.sections.map((section, idx) => (
                  <div key={section.id} id={section.id}>
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="text-xs font-bold text-slate-600 w-5 flex-shrink-0">{String(idx + 1).padStart(2, "0")}</span>
                      <h2 className="text-xl font-extrabold text-white">{section.heading}</h2>
                    </div>
                    <div className="ml-8 space-y-4">
                      {section.body.split("\n\n").map((para, pi) => (
                        <p key={pi} className="text-slate-300 leading-relaxed">{para}</p>
                      ))}
                      {section.callout && (
                        <Callout
                          type={section.callout.type}
                          title={section.callout.title}
                          text={section.callout.text}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Chapters list fallback (when no bespoke article content) */}
            {!article && (
              <div className="space-y-4">
                {guide.chapters.map((chapter, i) => (
                  <div
                    key={i}
                    id={`chapter-${i}`}
                    className="glass rounded-xl p-4 border border-white/[0.06] flex items-center gap-4"
                  >
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ background: `${guide.color}20`, color: guide.color }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium text-white">{chapter}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Common Mistakes */}
            {article && article.commonMistakes.length > 0 && (
              <div className="mt-12 pt-8 border-t border-white/[0.07]">
                <h2 className="text-xl font-extrabold text-white mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-400" />
                  Common Mistakes to Avoid
                </h2>
                <div className="space-y-3">
                  {article.commonMistakes.map((m, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-orange-400/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[10px] font-bold text-orange-400">{i + 1}</span>
                      </div>
                      {m}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Takeaways highlight box */}
            <div
              className="mt-12 rounded-2xl p-6 border"
              style={{
                background: `${guide.color}08`,
                borderColor: `${guide.color}25`,
              }}
            >
              <h3 className="text-base font-bold text-white mb-4">Key Takeaways</h3>
              <div className="space-y-3">
                {guide.keyTakeaways.map((t, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold"
                      style={{ background: `${guide.color}25`, color: guide.color }}
                    >
                      {i + 1}
                    </div>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            {article && article.faqs.length > 0 && (
              <div className="mt-12 pt-8 border-t border-white/[0.07]">
                <h2 className="text-xl font-extrabold text-white mb-2">Frequently Asked Questions</h2>
                <p className="text-sm text-slate-400 mb-6">Common questions about this topic from our IB community.</p>
                <div className="glass rounded-xl border border-white/[0.07] px-5 divide-y divide-white/[0.07]">
                  {article.faqs.map((faq, i) => (
                    <FAQItem key={i} q={faq.q} a={faq.a} />
                  ))}
                </div>
              </div>
            )}

            {/* Action Checklist */}
            {article && article.actionChecklist.length > 0 && (
              <div className="mt-12 pt-8 border-t border-white/[0.07]">
                <h2 className="text-xl font-extrabold text-white mb-2">Action Checklist</h2>
                <p className="text-sm text-slate-400 mb-6">Complete these steps to put this guide into practice.</p>
                <div className="glass rounded-xl border border-white/[0.07] p-5 space-y-3">
                  {article.actionChecklist.map((item, i) => (
                    <ChecklistItem key={i} label={item} />
                  ))}
                </div>
              </div>
            )}

            {/* Next Guide */}
            {nextGuide && (
              <div className="mt-12 pt-8 border-t border-white/[0.07]">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Read Next</p>
                <Link href={`/marketing-hub/${nextGuide.tags[0]}/${nextGuide.id}`}>
                  <div className="glass rounded-2xl p-5 border border-white/[0.07] hover:border-primary/40 transition-all group flex items-center gap-5">
                    <div
                      className="w-16 h-16 rounded-xl flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${nextGuide.coverFrom}, ${nextGuide.coverTo})` }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-500 mb-1">{nextGuide.pages} pages · {nextGuide.readTime}</p>
                      <h3 className="font-bold text-white text-sm leading-snug group-hover:text-primary transition-colors mb-1">
                        {nextGuide.title}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-1">{nextGuide.subtitle}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>
                </Link>
              </div>
            )}

            {/* Related Guides */}
            {relatedGuides.length > 0 && (
              <div className="mt-12 pt-8 border-t border-white/[0.07]">
                <h2 className="text-base font-bold text-white mb-5">Related Guides</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedGuides.map((g) => (
                    <RelatedGuide key={g.id} guide={g} />
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div
              className="mt-12 rounded-2xl p-8 text-center relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(52,211,153,0.08) 100%)`, border: "1px solid rgba(99,102,241,0.25)" }}
            >
              <div className="absolute inset-0 aurora-bg opacity-30" />
              <div className="relative z-10">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Ready to Start?</p>
                <h3 className="text-2xl font-extrabold text-white mb-3">Put This into Practice</h3>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  Join Equity IB and start building your rebate income with the strategies from this guide.
                </p>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <Link href="/partners">
                    <button className="btn-glow px-6 py-3 rounded-xl text-sm font-bold text-white bg-primary hover:bg-primary/90 transition-all">
                      Become an IB Partner
                    </button>
                  </Link>
                  <Link href="/marketing-hub">
                    <button className="px-6 py-3 rounded-xl text-sm font-medium text-slate-300 border border-white/[0.12] hover:border-white/[0.25] hover:text-white transition-all">
                      Browse More Guides
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

// ─── RESOURCE VIEW ────────────────────────────────────────────────────────────

function ResourceView({ resource, category }: { resource: Resource; category: string }) {
  const relatedGuide = PREMIUM_GUIDES.find((g) => g.tags.includes(category) || g.tags.includes(resource.category));
  const catInfo = HUB_CATEGORIES.find((c) => c.id === resource.category);

  return (
    <div className="min-h-screen" style={{ background: "#050509" }}>
      <ReadingProgress />

      {/* Hero */}
      <div className="relative pt-[100px] pb-16 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${resource.color}18 0%, transparent 70%)` }}
        />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
            <Link href="/marketing-hub" className="hover:text-white transition-colors">Marketing Hub</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/marketing-hub/${resource.category}`} className="hover:text-white transition-colors capitalize">
              {(catInfo?.label ?? resource.category).replace(/-/g, " ")}
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white line-clamp-1">{resource.title}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full capitalize"
              style={{ background: `${resource.color}20`, color: resource.color }}
            >
              {resource.type}
            </span>
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: `${DIFFICULTY_COLORS[resource.difficulty]}20`, color: DIFFICULTY_COLORS[resource.difficulty] }}
            >
              {resource.difficulty}
            </span>
            {resource.isNew && <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/20 text-accent">New</span>}
            {resource.isPopular && (
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-400 flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" /> Popular
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">{resource.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{resource.readTime}</span>
            {resource.pages && <span className="flex items-center gap-2"><FileText className="w-4 h-4" />{resource.pages} pages</span>}
            <span className="text-slate-500">Updated {resource.lastUpdated}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="space-y-8">

          {/* Introduction */}
          <div className="glass rounded-2xl p-6 border border-white/[0.07]">
            <h2 className="text-base font-bold text-white mb-3">Overview</h2>
            <p className="text-slate-300 leading-relaxed">{resource.description}</p>
          </div>

          {/* Key Takeaways */}
          {resource.keyTakeaways && resource.keyTakeaways.length > 0 && (
            <div
              className="rounded-2xl p-6 border"
              style={{ background: `${resource.color}08`, borderColor: `${resource.color}25` }}
            >
              <h2 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Lightbulb className="w-4 h-4" style={{ color: resource.color }} />
                What you will learn
              </h2>
              <div className="space-y-3">
                {resource.keyTakeaways.map((t, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: resource.color }} />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {resource.tags.length > 0 && (
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Topics Covered</p>
              <div className="flex flex-wrap gap-2">
                {resource.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full capitalize border"
                    style={{ background: `${resource.color}10`, color: resource.color, borderColor: `${resource.color}25` }}
                  >
                    {tag.replace(/-/g, " ")}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Access via premium guide */}
          {relatedGuide && (
            <div className="glass rounded-2xl p-6 border border-white/[0.07]">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Full guide on this topic</p>
              <Link href={`/marketing-hub/${relatedGuide.tags[0]}/${relatedGuide.id}`}>
                <div className="flex items-center gap-4 group">
                  <div
                    className="w-14 h-14 rounded-xl flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${relatedGuide.coverFrom}, ${relatedGuide.coverTo})` }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-500 mb-1">{relatedGuide.pages} pages · {relatedGuide.readTime}</p>
                    <p className="text-sm font-bold text-white group-hover:text-primary transition-colors line-clamp-1">
                      {relatedGuide.title}
                    </p>
                    <p className="text-xs text-slate-400 line-clamp-1">{relatedGuide.subtitle}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
              </Link>
            </div>
          )}

          {/* Category browsing */}
          <div className="glass rounded-2xl p-6 border border-white/[0.07]">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">More in this category</p>
            <Link href={`/marketing-hub/${resource.category}`}>
              <div className="flex items-center gap-3 group">
                <span className="text-2xl">{catInfo?.emoji ?? "📚"}</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                    {catInfo?.label ?? resource.category}
                  </p>
                  <p className="text-xs text-slate-400">{catInfo?.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-primary transition-colors" />
              </div>
            </Link>
          </div>

          {/* CTA */}
          <div
            className="rounded-2xl p-8 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(52,211,153,0.08) 100%)", border: "1px solid rgba(99,102,241,0.25)" }}
          >
            <div className="absolute inset-0 aurora-bg opacity-30" />
            <div className="relative z-10">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Ready to Start?</p>
              <h3 className="text-2xl font-extrabold text-white mb-3">Apply Your Knowledge</h3>
              <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                Become an Equity IB partner and put these strategies to work building your rebate income.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <Link href="/partners">
                  <button className="btn-glow px-6 py-3 rounded-xl text-sm font-bold text-white bg-primary hover:bg-primary/90 transition-all">
                    Become an IB Partner
                  </button>
                </Link>
                <Link href="/marketing-hub">
                  <button className="px-6 py-3 rounded-xl text-sm font-medium text-slate-300 border border-white/[0.12] hover:border-white/[0.25] hover:text-white transition-all">
                    Browse All Resources
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Checklist item with local state ─────────────────────────────────────────

function ChecklistItem({ label }: { label: string }) {
  const [checked, setChecked] = useState(false);
  return (
    <button
      onClick={() => setChecked(!checked)}
      className="w-full flex items-start gap-3 text-left group"
    >
      <div
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
          checked ? "bg-accent border-accent" : "border-white/20 group-hover:border-accent/60"
        }`}
      >
        {checked && <CheckCircle2 className="w-3 h-3 text-background" />}
      </div>
      <span className={`text-sm leading-relaxed transition-all ${checked ? "line-through text-slate-600" : "text-slate-300"}`}>
        {label}
      </span>
    </button>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────

export function ArticleContent(props: ArticleContentProps) {
  if (props.type === "guide") {
    return <GuideView guide={props.guide} article={props.article} category={props.category} />;
  }
  return <ResourceView resource={props.resource} category={props.category} />;
}
