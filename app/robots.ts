import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard", "/_next/", "/api/"],
      },
    ],
    sitemap: "https://equityib.com/sitemap.xml",
    host:    "https://equityib.com",
  };
}
