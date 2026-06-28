import type { Metadata } from "next";
import { CategoryContent } from "@/components/sections/CategoryContent";

type Props = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const title = category
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return {
    title: `${title} — Marketing Hub`,
    description: `Professional ${title.toLowerCase()} resources and templates for Equity IB partners.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  return <CategoryContent category={category} />;
}
