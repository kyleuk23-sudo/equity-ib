import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { getAllPosts } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights — Introducing Broker Guides & Industry Updates",
  description:
    "Practical guides on becoming an Introducing Broker, how IB rebates work, and how to build a sustainable IB partner business.",
  alternates: { canonical: "https://equityib.uk/insights" },
  openGraph: {
    title:       "Insights | Equity IB",
    description: "Practical guides on becoming an Introducing Broker and building a sustainable IB partner business.",
    url:         "https://equityib.uk/insights",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type":    "CollectionPage",
  "@id":      "https://equityib.uk/insights",
  name:       "Equity IB Insights",
  description: "Guides and industry updates for Introducing Brokers.",
  url:        "https://equityib.uk/insights",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",     item: "https://equityib.uk" },
      { "@type": "ListItem", position: 2, name: "Insights", item: "https://equityib.uk/insights" },
    ],
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function InsightsIndexPage() {
  const posts = getAllPosts();

  return (
    <section className="pt-32 pb-24 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-slate-400">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-300" aria-current="page">Insights</li>
          </ol>
        </nav>

        <div className="mb-14">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            IB <span className="gradient-text">Insights</span>
          </h1>
          <p className="text-slate-400 text-sm max-w-xl leading-relaxed">
            Practical guides on becoming an Introducing Broker, how rebates work, and how to build a
            long-term IB partner business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="glass rounded-2xl p-6 border border-white/[0.06] hover:border-white/[0.12] transition-all group flex flex-col"
            >
              <h2 className="font-bold text-white mb-2.5 leading-snug group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed mb-5 flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-white/[0.05]">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" /> {formatDate(post.updatedAt)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-primary mt-4 group-hover:gap-2.5 transition-all">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
