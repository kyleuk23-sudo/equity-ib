import type { MetadataRoute } from "next";
import { LEGAL_DOCS } from "@/lib/legalContent";

const BASE = "https://equityib.uk";
const NOW  = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const legalPages: MetadataRoute.Sitemap = LEGAL_DOCS.map((doc) => ({
    url:             `${BASE}/legal/${doc.slug}`,
    lastModified:    NOW,
    changeFrequency: "yearly",
    priority:        0.2,
  }));

  return [
    // Core pages
    { url: BASE,                         lastModified: NOW, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/why-equity-ib`,      lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/ib-rebates`,         lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/why-pu-prime`,       lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/faq`,                lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/apply`,              lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    // Secondary pages
    { url: `${BASE}/about`,              lastModified: NOW, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact`,            lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/partners`,           lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    // Legal hub
    { url: `${BASE}/legal`,              lastModified: NOW, changeFrequency: "yearly",  priority: 0.3 },
    // HTML sitemap
    { url: `${BASE}/sitemap-html`,       lastModified: NOW, changeFrequency: "monthly", priority: 0.2 },
    // Legal documents
    ...legalPages,
  ];
}
