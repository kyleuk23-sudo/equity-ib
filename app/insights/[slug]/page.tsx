import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Calendar, Clock } from "lucide-react";
import { getAllSlugs, getPostBySlug } from "@/lib/insights";
import { mdxComponents } from "@/components/insights/MDXComponents";
import { NewsletterSignup } from "@/components/ui/NewsletterSignup";
import { BreadcrumbV6 } from "@/components/ui/BreadcrumbV6";
import { ButtonV6 } from "@/components/ui/ButtonV6";
import { V6 } from "@/lib/designTokensV6";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title:       post.title,
    description: post.description,
    alternates:  { canonical: `https://equityib.uk/insights/${slug}` },
    openGraph: {
      title:       post.title,
      description: post.description,
      url:         `https://equityib.uk/insights/${slug}`,
      type:        "article",
      publishedTime: post.publishedAt,
      modifiedTime:  post.updatedAt,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type":    "Article",
    headline:   post.title,
    description: post.description,
    author:     { "@type": "Organization", name: post.author },
    publisher:  { "@id": "https://equityib.uk/#organization" },
    datePublished: post.publishedAt,
    dateModified:  post.updatedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://equityib.uk/insights/${slug}` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home",     item: "https://equityib.uk" },
        { "@type": "ListItem", position: 2, name: "Insights",  item: "https://equityib.uk/insights" },
        { "@type": "ListItem", position: 3, name: post.title, item: `https://equityib.uk/insights/${slug}` },
      ],
    },
  };

  return (
    <article className="pt-32 pb-24 relative" style={{ background: V6.bg }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbV6
          items={[{ label: "Home", href: "/" }, { label: "Insights", href: "/insights" }, { label: post.title }]}
          className="mb-6"
        />

        <h1 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] mb-4 leading-tight" style={{ color: V6.fgPrimary }}>
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-xs mb-10 flex-wrap" style={{ color: V6.fgMuted }}>
          <span className="font-medium" style={{ color: V6.fgSecondary }}>{post.author}</span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" /> Updated {formatDate(post.updatedAt)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" /> {post.readTime}
          </span>
        </div>

        <div className="prose-none">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>

        <div className="mt-14 mb-10">
          <NewsletterSignup source="insights" />
        </div>

        <div className="text-center pt-6" style={{ borderTop: `1px solid ${V6.border}` }}>
          <ButtonV6
            href="/apply"
            data-track-event="cta"
            data-track-label="Become an Equity IB Partner"
            data-track-section={`insights_${slug}`}
          >
            Become an Equity IB Partner
          </ButtonV6>
        </div>
      </div>
    </article>
  );
}
