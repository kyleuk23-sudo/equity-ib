import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL_DOCS } from "@/lib/legalContent";

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
  { href: "/",               label: "Home",                 desc: "Equity IB homepage — IB partner program overview"   },
  { href: "/why-equity-ib",  label: "Why Equity IB",        desc: "12 reasons to partner with Equity IB"               },
  { href: "/ib-rebates",     label: "IB Rebates",           desc: "Six-tier rebate structure and earnings calculator"   },
  { href: "/why-pu-prime",   label: "Why PU Prime",         desc: "Premium broker technology for your clients"         },
  { href: "/faq",            label: "FAQ",                  desc: "Frequently asked questions about the IB program"    },
  { href: "/apply",          label: "Apply Now",            desc: "Application form to join as an Introducing Broker"  },
];

const SECONDARY_PAGES = [
  { href: "/about",    label: "About Equity IB", desc: "Our story, mission and vision"     },
  { href: "/partners", label: "IB Programme",    desc: "Partner programme information"      },
  { href: "/contact",  label: "Contact",         desc: "Get in touch with our IB team"     },
];

function SitemapSection({ title, links }: { title: string; links: { href: string; label: string; desc: string }[] }) {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-bold text-white mb-4 pb-2 border-b border-white/[0.06]">{title}</h2>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <Link href={l.href} className="text-primary hover:underline font-medium text-sm min-w-[200px]">
              {l.label}
            </Link>
            <span className="text-xs text-slate-500">{l.desc}</span>
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

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs text-slate-400">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-300" aria-current="page">Sitemap</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-extrabold text-white mb-2">Website Sitemap</h1>
        <p className="text-slate-400 text-sm mb-10">
          All pages on the Equity IB website, organised by section.
        </p>

        <SitemapSection title="Main Pages"      links={MAIN_PAGES}      />
        <SitemapSection title="About & Contact" links={SECONDARY_PAGES} />
        <SitemapSection title="Legal Documents" links={[{ href: "/legal", label: "Legal Centre", desc: "All legal documents" }, ...legalLinks]} />

        <p className="text-xs text-slate-600 mt-10">
          For the machine-readable sitemap:{" "}
          <Link href="/sitemap.xml" className="text-primary hover:underline">
            sitemap.xml
          </Link>
        </p>
      </div>
    </div>
  );
}
