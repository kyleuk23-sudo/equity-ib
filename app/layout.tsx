import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar }       from "@/components/layout/Navbar";
import { Footer }       from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop }    from "@/components/ui/BackToTop";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { Toaster }      from "sonner";

const inter = Inter({
  subsets:  ["latin"],
  variable: "--font-inter",
  display:  "swap",
  weight:   ["400", "500", "600", "700", "800", "900"],
  preload:  true,
});

/* ── Viewport & theme colour ────────────────────────────────────────────── */
export const viewport: Viewport = {
  themeColor:   "#C8952A",
  width:        "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/* ── Site-wide metadata ─────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://equityib.com"),

  title: {
    default:  "Equity IB — Earn Up To $30 Per Lot | Daily IB Rebates",
    template: "%s | Equity IB",
  },
  description:
    "Join the Equity IB Introducing Broker program and earn up to $30 per traded lot. Daily rebate settlements, six commission tiers, dedicated account managers and premium broker partnerships.",
  keywords: [
    "introducing broker",
    "introducing broker program",
    "IB rebates",
    "forex introducing broker",
    "CFD introducing broker",
    "daily IB rebates",
    "IB commission",
    "broker partnership",
    "trading partner program",
    "forex rebates",
  ],

  authors:  [{ name: "Equity IB", url: "https://equityib.com" }],
  creator:  "Equity IB",
  publisher: "Equity IB",

  alternates: {
    canonical: "https://equityib.com",
  },

  openGraph: {
    type:      "website",
    locale:    "en_US",
    url:       "https://equityib.com",
    siteName:  "Equity IB",
    title:     "Equity IB — Earn Up To $30 Per Lot | Daily IB Rebates",
    description:
      "Build a recurring IB revenue business. Daily rebate settlements, six tier levels, dedicated account management and premium broker partnerships.",
    images: [{
      url:    "/opengraph-image",
      width:  1200,
      height: 630,
      alt:    "Equity IB — Daily IB Rebates Up To $30 Per Lot",
    }],
  },

  twitter: {
    card:        "summary_large_image",
    title:       "Equity IB — Earn Up To $30 Per Lot",
    description: "Daily IB rebates. Dedicated account managers. Premium broker network.",
    images:      ["/opengraph-image"],
  },

  robots: {
    index:          true,
    follow:         true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },

  icons: {
    icon:  [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo.png",    type: "image/png", sizes: "any" },
    ],
    apple: "/logo.png",
  },

  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_TOKEN",
  },
};

/* ── Structured data (Organisation + WebSite) ───────────────────────────── */
const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type":       "Organization",
      "@id":         "https://equityib.com/#organization",
      name:          "Equity IB",
      url:           "https://equityib.com",
      description:
        "Premium Introducing Broker partner program offering up to $30 per lot in daily rebates, dedicated account management and premium broker partnerships.",
      logo: {
        "@type":   "ImageObject",
        "@id":     "https://equityib.com/#logo",
        url:       "https://equityib.com/logo.png",
        width:     512,
        height:    512,
        caption:   "Equity IB",
      },
      contactPoint: {
        "@type":       "ContactPoint",
        contactType:   "customer service",
        email:         "support@equityib.com",
        availableLanguage: "English",
      },
      sameAs: [],
    },
    {
      "@type":       "WebSite",
      "@id":         "https://equityib.com/#website",
      name:          "Equity IB",
      url:           "https://equityib.com",
      description:   "Equity IB — Daily Introducing Broker Rebates Up To $30 Per Lot",
      publisher:     { "@id": "https://equityib.com/#organization" },
      potentialAction: {
        "@type":      "SearchAction",
        target: {
          "@type":    "EntryPoint",
          urlTemplate: "https://equityib.com/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        {/* DNS prefetch for any future CDN/analytics */}
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className={`${inter.variable} font-sans bg-background text-white antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
        >
          Skip to main content
        </a>
        <LoadingScreen />
        <ScrollProgress />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <BackToTop />
        <CookieBanner />
        <Toaster
          theme="dark"
          toastOptions={{
            style: {
              background: "#0f1629",
              border:     "1px solid rgba(255,255,255,0.08)",
              color:      "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
