"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft, Download, BookOpen, Star, Clock, ChevronDown,
  ChevronUp, Search, ArrowRight, CheckCircle2, Zap, FileText,
} from "lucide-react";
import {
  RESOURCES, PREMIUM_GUIDES, HUB_CATEGORIES, DIFFICULTY_COLORS,
} from "@/lib/marketingHubData";
import { DownloadModal } from "@/components/ui/DownloadModal";
import type { PremiumGuide } from "@/lib/marketingHubData";

// ─── Per-category steps and FAQs ─────────────────────────────────────────────

const CATEGORY_DETAILS: Record<string, { steps: string[]; faqs: { q: string; a: string }[] }> = {
  "getting-started": {
    steps: [
      "Apply to become an Equity IB partner",
      "Complete identity verification and onboarding",
      "Access your Marketing Hub and partner portal",
      "Define your niche and target audience",
      "Launch your first client acquisition campaign",
    ],
    faqs: [
      { q: "How long does IB approval take?", a: "Most applications are reviewed within 2–5 business days. You will receive an email notification when your application status changes." },
      { q: "Do I need trading experience to become an IB?", a: "You don't need to be an active trader, but understanding the basics of forex trading will help you explain the service to clients more effectively." },
      { q: "What support do I get as a new IB?", a: "All new IBs receive a dedicated account manager, access to the full Marketing Hub, and a 90-day onboarding programme covering everything from setup to your first clients." },
    ],
  },
  "client-acquisition": {
    steps: [
      "Define your ideal client profile in specific terms",
      "Choose 1–2 acquisition channels to start with",
      "Create your first lead capture page or landing page",
      "Build a simple follow-up sequence for new leads",
      "Track conversion rates and optimise your approach",
    ],
    faqs: [
      { q: "What are the most effective client acquisition channels for IBs?", a: "The most effective channels depend on your network and strengths. Referral marketing, educational content, social media and paid ads are all proven — the best channel is the one you'll execute consistently." },
      { q: "How long does it take to get my first client?", a: "Most IBs refer their first client within the first 30 days by starting with their existing network. Building a consistent flow of new clients typically takes 3–6 months of consistent effort." },
      { q: "Can I use paid advertising to attract clients?", a: "Yes — but ensure all advertising complies with financial marketing regulations. Always include required risk warnings and avoid making income guarantees. See the Compliance category for detailed guidance." },
    ],
  },
  "social-media": {
    steps: [
      "Choose 1–2 platforms where your audience is most active",
      "Optimise your profiles with a clear IB value proposition",
      "Create a content schedule you can maintain consistently",
      "Engage authentically with your community daily",
      "Track what content drives the most referral activity",
    ],
    faqs: [
      { q: "Which social media platform is best for IBs?", a: "It depends on your target audience. Instagram and TikTok work well for broader consumer audiences; LinkedIn suits a professional audience; Telegram and Discord are ideal for building engaged trading communities." },
      { q: "How often should I post?", a: "Consistency matters more than frequency. Start with 3–4 posts per week on your primary platform. Once you have a sustainable rhythm, you can increase output. Quality and relevance always beat volume." },
      { q: "Can I run promotions or giveaways to grow my following?", a: "Proceed with caution. Promotions involving financial services can attract regulatory attention. Always consult your account manager and ensure any campaigns comply with the relevant marketing guidelines." },
    ],
  },
  "content-marketing": {
    steps: [
      "Define the topics your audience cares most about",
      "Choose your primary content format (articles, videos, newsletters)",
      "Create a 30-day content calendar and commit to it",
      "Publish consistently and promote each piece across channels",
      "Track which content generates the most referral traffic",
    ],
    faqs: [
      { q: "Do I need to be an expert writer to create content?", a: "No. Being authentic, clear and helpful is more valuable than polished writing. Start with the questions your audience asks most frequently — those make excellent starting points for articles or videos." },
      { q: "How do I build an audience from zero?", a: "Start with your existing network, post consistently, engage with other accounts in your space, and focus on creating genuine value. Audience growth is slow at first and then compounds — consistency over months matters more than any single piece of content." },
      { q: "Should I have a website?", a: "Yes — a website gives you a professional home base, supports SEO, and gives you full control over your lead capture. Even a simple one-page site is better than relying solely on social media profiles." },
    ],
  },
  "advertising": {
    steps: [
      "Set a realistic initial test budget (start small)",
      "Define your campaign objective clearly before launching",
      "Research your target audience demographics and interests",
      "Build a compliant landing page before running ads",
      "Test 2–3 creative variations and measure results",
    ],
    faqs: [
      { q: "How much should I budget for my first advertising campaign?", a: "Start with a small test budget — $200–$500 — to learn what works before scaling. Paid advertising for financial services can be effective but requires testing. Measure cost per lead and quality before increasing spend." },
      { q: "Are there restrictions on advertising financial services?", a: "Yes — Meta, Google and most platforms have strict policies around financial services advertising. You will typically need to apply for authorisation and must include required risk disclosures. See the Compliance category for details." },
      { q: "What makes a good IB landing page?", a: "A clear headline explaining the benefit, a simple lead capture form, social proof (testimonials or trust signals), a visible risk warning, and a fast loading speed. Remove distractions and keep the focus on one action." },
    ],
  },
  "business-growth": {
    steps: [
      "Audit your current business to identify bottlenecks",
      "Document your core processes as standard operating procedures",
      "Set quarterly growth targets with clear milestones",
      "Identify which activities to delegate or automate first",
      "Review performance monthly against your KPI dashboard",
    ],
    faqs: [
      { q: "When should I hire my first team member?", a: "When you are consistently spending more than 20% of your time on tasks that don't directly generate revenue or relationships, it's time to consider your first hire. Start with a virtual assistant or part-time resource to handle administrative tasks." },
      { q: "What are the most important KPIs for an IB business?", a: "The key metrics are: total active clients, average lots per client per month, total monthly volume, rebates earned, client retention rate, and cost per new client. Track these monthly and set targets for each." },
      { q: "How do I scale without losing quality?", a: "Build systems and processes before scaling. Document how you serve clients, automate repetitive tasks, and hire for specific roles rather than general help. Growth without systems leads to inconsistent service and client churn." },
    ],
  },
  "client-retention": {
    steps: [
      "Create a structured onboarding experience for new clients",
      "Set a regular communication schedule and stick to it",
      "Identify inactive clients early and re-engage proactively",
      "Build a community where clients can learn and connect",
      "Ask for feedback and act on what you hear",
    ],
    faqs: [
      { q: "How do I keep clients from going inactive?", a: "Regular, valuable communication is the most effective retention tool. Set a schedule — even a monthly market update email — and keep it. Clients who hear from you consistently are far less likely to go dormant." },
      { q: "What is a good client retention rate for IBs?", a: "Aim for 70–80% of clients still active after 12 months. Anything above 80% is excellent. Below 60% indicates an onboarding or engagement problem that needs to be addressed before you focus on acquisition." },
      { q: "How do I re-engage dormant clients?", a: "Start with a personalised outreach — not a mass email. Acknowledge the gap, share something genuinely useful, and offer to help without pressure. Many dormant clients simply needed a timely touchpoint to re-engage." },
    ],
  },
  "compliance": {
    steps: [
      "Read and understand the Equity IB marketing guidelines",
      "Review all existing marketing materials for compliance",
      "Add required risk warnings to all public-facing content",
      "Ensure you never guarantee income or specific returns",
      "Check any new campaign with your account manager before launching",
    ],
    faqs: [
      { q: "What risk warnings must I include in my marketing?", a: "At minimum, all marketing materials referencing trading must include a statement that trading involves significant risk and that losses can exceed deposits. The exact required wording may depend on your jurisdiction — consult your account manager for guidance." },
      { q: "Can I say how much I earn as an IB?", a: "You can share general information about the IB rebate structure, but you should not imply that others will earn specific amounts. Use illustrative examples clearly labelled as estimates, and avoid language that suggests guaranteed income." },
      { q: "Am I personally responsible for the compliance of my marketing?", a: "Yes — as an IB, you are responsible for ensuring your own marketing materials comply with applicable regulations and Equity IB's guidelines. Always review new campaigns before launching and consult your account manager if you are uncertain." },
    ],
  },
};

const DEFAULT_DETAIL = {
  steps: [
    "Apply to become an Equity IB partner",
    "Access the full Marketing Hub",
    "Download and customise templates",
    "Launch your campaigns",
    "Track performance and optimise",
  ],
  faqs: [
    { q: "How do I access these resources?", a: "All resources are available free of charge to active Equity IB partners. Apply to become an IB to gain full access." },
    { q: "Can I use these materials with my own branding?", a: "Yes — all templates are customisable. Co-branded versions are available through your account manager." },
    { q: "How often are resources updated?", a: "Resources are reviewed and updated regularly. New content is added continuously based on partner feedback and industry developments." },
  ],
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

const typeColors: Record<string, string> = {
  guide: "#6366F1",
  template: "#34D399",
  checklist: "#A78BFA",
  calculator: "#F97316",
};
const typeLabels: Record<string, string> = {
  guide: "Guide",
  template: "Template",
  checklist: "Checklist",
  calculator: "Calculator",
};

// ─── Component ────────────────────────────────────────────────────────────────

export function CategoryContent({ category }: { category: string }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [selectedGuide, setSelectedGuide] = useState<PremiumGuide | null>(null);

  const catInfo = HUB_CATEGORIES.find((c) => c.id === category) ?? {
    id: category,
    label: category.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    description: "Professional marketing resources for Equity IB partners.",
    color: "#6366F1",
    emoji: "📚",
  };

  const catResources = RESOURCES.filter((r) => r.category === category);
  const catGuides = PREMIUM_GUIDES.filter((g) => g.tags.includes(category));
  const detail = CATEGORY_DETAILS[category] ?? DEFAULT_DETAIL;

  const filteredResources = catResources.filter(
    (r) =>
      !search ||
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      <DownloadModal guide={selectedGuide} onClose={() => setSelectedGuide(null)} />
      <div className="absolute inset-0 bg-gradient-hero opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 mb-8">
          <Link href="/marketing-hub" className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Marketing Hub
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-sm text-white">{catInfo.label}</span>
        </motion.div>

        {/* Hero */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
              <div
                className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium mb-5"
                style={{ color: catInfo.color }}
              >
                <span>{catInfo.emoji}</span> {catInfo.label}
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
                {catInfo.label}{" "}
                <span className="gradient-text">Resources</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">{catInfo.description}</p>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-xl text-xs text-slate-300">
                  <FileText className="w-3 h-3" /> {catResources.length} resources
                </div>
                {catGuides.length > 0 && (
                  <div className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-xl text-xs text-slate-300">
                    <BookOpen className="w-3 h-3" /> {catGuides.length} premium guide{catGuides.length !== 1 ? "s" : ""}
                  </div>
                )}
                <div className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-xl text-xs text-slate-300">
                  <Zap className="w-3 h-3" /> Regular updates
                </div>
                <div className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-xl text-xs text-slate-300">
                  <Star className="w-3 h-3" /> Free for IB partners
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick start panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-strong rounded-2xl p-5"
          >
            <p className="text-sm font-semibold text-white mb-4">Quick Start</p>
            <div className="space-y-3">
              {detail.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${catInfo.color}20` }}
                  >
                    <span className="text-xs font-bold" style={{ color: catInfo.color }}>{i + 1}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-snug">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-white/[0.05]">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2.5 rounded-xl text-sm transition-all hover:shadow-glow"
              >
                Become an IB <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Premium guides for this category */}
        {catGuides.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-xl font-bold text-white mb-4">Premium Guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {catGuides.map((guide) => (
                <div key={guide.id} className="glass rounded-2xl overflow-hidden border border-white/[0.07] hover:border-white/[0.14] transition-all group flex">
                  <div className="w-1.5 flex-shrink-0" style={{ background: guide.color }} />
                  <div className="p-4 flex-1">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: `${DIFFICULTY_COLORS[guide.difficulty]}20`, color: DIFFICULTY_COLORS[guide.difficulty] }}
                      >
                        {guide.difficulty}
                      </span>
                      {guide.isNew && <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-accent/15 text-accent">New</span>}
                      {guide.isPopular && <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-yellow-400/15 text-yellow-400">Popular</span>}
                    </div>
                    <Link href={`/marketing-hub/${guide.tags[0]}/${guide.id}`}>
                      <h3 className="font-semibold text-white text-sm mb-0.5 group-hover:text-primary transition-colors">{guide.title}</h3>
                    </Link>
                    <p className="text-xs text-slate-400 mb-3 line-clamp-1">{guide.subtitle}</p>
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {guide.readTime}</span>
                      <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> {guide.chapters.length} chapters</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 pr-4">
                    <Link
                      href={`/marketing-hub/${guide.tags[0]}/${guide.id}`}
                      className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/[0.08] hover:border-white/[0.2] transition-all"
                    >
                      <BookOpen className="w-4 h-4 text-slate-400" />
                    </Link>
                    <button
                      onClick={() => setSelectedGuide(guide)}
                      className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${guide.color}15` }}
                    >
                      <Download className="w-4 h-4" style={{ color: guide.color }} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Search */}
        <div className="glass rounded-xl flex items-center gap-2 px-4 mb-6">
          <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Search ${catInfo.label.toLowerCase()} resources…`}
            className="flex-1 bg-transparent py-3 text-sm text-white placeholder:text-slate-500 outline-none"
          />
          {search && (
            <button onClick={() => setSearch("")} className="text-xs text-slate-400 hover:text-white transition-colors">
              Clear
            </button>
          )}
        </div>

        {/* Resource grid */}
        {filteredResources.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {filteredResources.map((resource, i) => (
              <Link key={resource.id} href={`/marketing-hub/${resource.category}/${resource.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-2xl p-5 relative group hover:border-white/[0.14] transition-all flex flex-col border border-white/[0.06]"
              >
                {resource.isNew && (
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-semibold bg-accent/15 text-accent">
                    New
                  </div>
                )}
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold"
                    style={{ background: `${typeColors[resource.type] || "#6366F1"}15`, color: typeColors[resource.type] || "#6366F1" }}
                  >
                    {typeLabels[resource.type]}
                  </div>
                  {resource.isPopular && <Star className="w-3.5 h-3.5 text-yellow-400" />}
                </div>

                <h3 className="font-semibold text-white mb-1.5 text-sm leading-snug">{resource.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4 flex-1">{resource.description}</p>

                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {resource.readTime}</span>
                  <span
                    className="px-2 py-0.5 rounded-full"
                    style={{ background: `${DIFFICULTY_COLORS[resource.difficulty]}15`, color: DIFFICULTY_COLORS[resource.difficulty] }}
                  >
                    {resource.difficulty}
                  </span>
                </div>

                <div
                  className="flex items-center gap-1 mt-3 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all"
                  style={{ color: catInfo.color }}
                >
                  <BookOpen className="w-3 h-3" /> Read guide
                </div>
              </motion.div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="glass rounded-2xl py-12 text-center mb-12">
            <BookOpen className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-white font-medium mb-1">No resources found</p>
            <p className="text-sm text-slate-400">Try a different search term.</p>
          </div>
        )}

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-white mb-5">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {detail.faqs.map((faq, i) => (
              <div
                key={i}
                className={`glass rounded-2xl overflow-hidden transition-all ${openFaq === i ? "border-primary/20" : ""}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-medium text-white">{faq.q}</span>
                  {openFaq === i
                    ? <ChevronUp className="w-4 h-4 text-primary flex-shrink-0" />
                    : <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  }
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-8 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
          <CheckCircle2 className="w-10 h-10 text-accent mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">
            Access All {catInfo.label} Resources
          </h2>
          <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
            Become an approved Equity IB partner to download all templates, access every premium guide and receive dedicated marketing support.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all hover:shadow-glow"
            >
              Become an IB <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/marketing-hub"
              className="flex items-center gap-2 glass text-white font-medium px-6 py-3 rounded-xl text-sm transition-all hover:bg-white/[0.06]"
            >
              <ArrowLeft className="w-4 h-4" /> All Resources
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
