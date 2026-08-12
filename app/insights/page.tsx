import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { getAllPosts } from "@/lib/insights";
import { BreadcrumbV6 } from "@/components/ui/BreadcrumbV6";
import { V6 } from "@/lib/designTokensV6";
import { MeshGradientBg } from "@/components/visual/MeshGradientBg";

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
    <section className="pt-32 pb-24 relative overflow-hidden" style={{ background: V6.bg }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <MeshGradientBg variant="hero" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <BreadcrumbV6 items={[{ label: "Home", href: "/" }, { label: "Insights" }]} className="mb-6" />

        <div className="mb-14">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] mb-4" style={{ color: V6.fgPrimary }}>
            IB <span style={{ color: V6.gold }}>Insights</span>
          </h1>
          <p className="text-sm max-w-xl leading-relaxed" style={{ color: V6.fgSecondary }}>
            Practical guides on becoming an Introducing Broker, how rebates work, and how to build a
            long-term IB partner business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="card-v6 rounded-2xl p-6 flex flex-col"
            >
              <h2 className="font-bold mb-2.5 leading-snug" style={{ color: V6.fgPrimary }}>
                {post.title}
              </h2>
              <p className="text-xs leading-relaxed mb-5 flex-1" style={{ color: V6.fgSecondary }}>
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs pt-4" style={{ color: V6.fgMuted, borderTop: `1px solid ${V6.border}` }}>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" /> {formatDate(post.updatedAt)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold mt-4 transition-all" style={{ color: V6.gold }}>
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
