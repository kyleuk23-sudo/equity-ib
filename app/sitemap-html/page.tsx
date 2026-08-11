import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL_DOCS } from "@/lib/legalContent";
import { getAllPosts } from "@/lib/insights";
import { BreadcrumbV6 } from "@/components/ui/BreadcrumbV6";
import { V6 } from "@/lib/designTokensV6";

export const metadata: Metadata = {
  title:       "Sitemap",
  description: "Complete HTML sitemap for the Equity IB website — all pages listed for easy navigation.",
  alternates:  { canonical: "https://equityib.uk/sitemap-html" },
  openGraph: {
    title:       "Sitemap | Equity IB",
    description: "Complete HTML sitemap for the Equity IB website — all pages listed for easy navigation.",
    url:         "https://equityib.uk/sitemap-html",
  },
  robots:      { index: false, follow: true },
};

const MAIN_PAGES = [
  { href: "/",                                    label: "Home",                          desc: "Equity IB homepage — IB partner program overview"   },
  { href: "/why-equity-ib",                       label: "Why Equity IB",                 desc: "12 reasons to partner with Equity IB"               },
  { href: "/ib-rebates",                          label: "IB Rebates",                    desc: "Six-tier rebate structure and earnings calculator"   },
  { href: "/why-pu-prime",                        label: "Why PU Prime",                  desc: "Premium broker technology for your clients"         },
  { href: "/introducing-broker-program",          label: "Introducing Broker Program",    desc: "How to evaluate an IB programme, and how Equity IB compares" },
  { href: "/how-to-become-an-introducing-broker", label: "How To Become An IB",           desc: "Step-by-step guide to becoming an Introducing Broker" },
  { href: "/faq",                                 label: "FAQ",                           desc: "Frequently asked questions about the IB program"    },
  { href: "/apply",                               label: "Apply Now",                     desc: "Application form to join as an Introducing Broker"  },
];

const SECONDARY_PAGES = [
  { href: "/about",    label: "About Equity IB", desc: "Our story, mission and vision"     },
  { href: "/partners", label: "IB Programme",    desc: "Partner programme information"      },
  { href: "/contact",  label: "Contact",         desc: "Get in touch with our IB team"     },
];

function SitemapSection({ title, links }: { title: string; links: { href: string; label: string; desc: string }[] }) {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-bold mb-4 pb-2" style={{ color: V6.fgPrimary, borderBottom: `1px solid ${V6.border}` }}>{title}</h2>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <Link href={l.href} className="underline font-medium text-sm min-w-[200px]" style={{ color: V6.gold }}>
              {l.label}
            </Link>
            <span className="text-xs" style={{ color: V6.fgMuted }}>{l.desc}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function HTMLSitemapPage() {
  const legalLinks = LEGAL_DOCS.map((doc) => ({
    href:  `/legal/${doc.slug}`,
    label: doc.title,
    desc:  doc.description ?? "",
  }));

  const insightLinks = getAllPosts().map((post) => ({
    href:  `/insights/${post.slug}`,
    label: post.title,
    desc:  post.excerpt,
  }));

  return (
    <div className="min-h-screen pt-32 pb-24" style={{ background: V6.bg }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbV6 items={[{ label: "Home", href: "/" }, { label: "Sitemap" }]} className="mb-8" />

        <h1 className="text-3xl font-bold mb-2" style={{ color: V6.fgPrimary }}>Website Sitemap</h1>
        <p className="text-sm mb-10" style={{ color: V6.fgSecondary }}>
          All pages on the Equity IB website, organised by section.
        </p>

        <SitemapSection title="Main Pages"      links={MAIN_PAGES}      />
        <SitemapSection title="Insights"        links={[{ href: "/insights", label: "Insights Hub", desc: "All IB guides and industry updates" }, ...insightLinks]} />
        <SitemapSection title="About & Contact" links={SECONDARY_PAGES} />
        <SitemapSection title="Legal Documents" links={[{ href: "/legal", label: "Legal Centre", desc: "All legal documents" }, ...legalLinks]} />

        <p className="text-xs mt-10" style={{ color: V6.fgMuted }}>
          For the machine-readable sitemap:{" "}
          <Link href="/sitemap.xml" className="underline" style={{ color: V6.gold }}>
            sitemap.xml
          </Link>
        </p>
      </div>
    </div>
  );
}
