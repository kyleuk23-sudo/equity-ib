import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Equity IB — Earn Up To $30 Per Lot | Daily IB Rebates",
    template: "%s | Equity IB",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo.png",    type: "image/png",     sizes: "any" },
    ],
    apple: "/logo.png",
  },
  description:
    "Join the Equity IB partner program and earn up to $30 per traded lot. Daily rebate settlements, dedicated account managers and premium broker partnerships for professional Introducing Brokers.",
  keywords: [
    "introducing broker",
    "IB program",
    "forex IB",
    "CFD introducing broker",
    "earn forex rebates",
    "up to $30 per lot",
    "broker partnership",
    "forex referral program",
    "trading rebates",
    "IB commission program",
    "daily rebates",
    "IB rebates daily",
    "introducing broker rebates",
    "forex partner program",
    "IB network",
  ],
  authors: [{ name: "Equity IB" }],
  creator: "Equity IB",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://equityib.com",
    siteName: "Equity IB",
    title: "Equity IB — Earn Up To $30 Per Lot | Daily IB Rebates",
    description:
      "Build a recurring IB revenue business with daily rebate settlements, dedicated account management and premium broker partnerships.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Equity IB — Daily IB Rebates Up To $30 Per Lot" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Equity IB — Earn Up To $30 Per Lot",
    description: "Daily IB rebates. Dedicated account managers. Premium broker network.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://equityib.com"),
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Equity IB",
  url: "https://equityib.com",
  description:
    "Premium Introducing Broker partner program offering up to $30 per lot in daily rebates, dedicated account management and premium broker partnerships.",
  sameAs: [],
  offers: {
    "@type": "Offer",
    name: "Introducing Broker Daily Rebate Program",
    description:
      "Earn up to $30 per traded lot daily through our tier-based rebate program for professional Introducing Brokers.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className={`${inter.variable} font-sans bg-background text-white antialiased`}>
        <LoadingScreen />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <CookieBanner />
        <Toaster
          theme="dark"
          toastOptions={{
            style: {
              background: "#0f1629",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
