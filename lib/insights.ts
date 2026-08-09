import fs   from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content/insights");

export interface InsightFrontmatter {
  title:       string;
  description: string;
  excerpt:     string;
  publishedAt: string; // ISO date, e.g. "2026-07-21"
  updatedAt:   string; // ISO date
  author:      string;
  readTime:    string; // e.g. "6 min read"
}

export interface InsightPost extends InsightFrontmatter {
  slug:    string;
  content: string;
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): InsightPost | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { slug, content, ...(data as InsightFrontmatter) };
}

export function getAllPosts(): InsightPost[] {
  return getAllSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is InsightPost => p !== null)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}
