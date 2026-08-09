import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { getAllSlugs, getPostBySlug } from "@/lib/insights";
import { mdxComponents } from "@/components/insights/MDXComponents";
import { NewsletterSignup } from "@/components/ui/NewsletterSignup";

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
    <article className="pt-32 pb-24 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-slate-400 flex-wrap">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/insights" className="hover:text-white transition-colors">Insights</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-300" aria-current="page">{post.title}</li>
          </ol>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-xs text-slate-400 mb-10 flex-wrap">
          <span className="text-slate-400 font-medium">{post.author}</span>
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

        <div className="text-center pt-6 border-t border-white/[0.06]">
          <Link
            href="/apply"
            data-track-event="cta"
            data-track-label="Become an Equity IB Partner"
            data-track-section={`insights_${slug}`}
            className="btn-glow inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl text-sm transition-all hover:opacity-90"
          >
            Become an Equity IB Partner
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
