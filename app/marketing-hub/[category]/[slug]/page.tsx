import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleContent } from "@/components/sections/ArticleContent";
import { PREMIUM_GUIDES, RESOURCES } from "@/lib/marketingHubData";
import { getGuideArticle } from "@/lib/articleContent";

type Props = { params: Promise<{ category: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const guide = PREMIUM_GUIDES.find((g) => g.id === slug);
  if (guide) {
    return {
      title: `${guide.title} — Marketing Hub`,
      description: guide.description,
    };
  }

  const resource = RESOURCES.find((r) => r.id === slug);
  if (resource) {
    return {
      title: `${resource.title} — Marketing Hub`,
      description: resource.description,
    };
  }

  return { title: "Marketing Hub — Equity IB" };
}

export default async function ArticlePage({ params }: Props) {
  const { category, slug } = await params;

  const guide = PREMIUM_GUIDES.find((g) => g.id === slug);
  if (guide) {
    const article = getGuideArticle(slug);
    return <ArticleContent type="guide" guide={guide} article={article} category={category} />;
  }

  const resource = RESOURCES.find((r) => r.id === slug);
  if (resource) {
    return <ArticleContent type="resource" resource={resource} category={category} />;
  }

  notFound();
}
