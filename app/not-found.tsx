import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Home, MessageSquare, BarChart3 } from "lucide-react";
import { NotFoundTracker } from "@/components/analytics/NotFoundTracker";
import { V6 } from "@/lib/designTokensV6";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist. Return to Equity IB and discover our Introducing Broker partner program.",
  robots: { index: false, follow: false },
};

const QUICK_LINKS = [
  { href: "/#why-equity-ib", icon: BarChart3, label: "Why Equity IB",   desc: "See our 12 IB partner benefits"      },
  { href: "/#ib-rebates",    icon: BarChart3, label: "IB Rebate Tiers", desc: "Rebates from $10–$30 per lot"         },
  { href: "/faq",            icon: MessageSquare, label: "FAQ",          desc: "Common questions answered"            },
  { href: "/contact",        icon: MessageSquare, label: "Contact Us",   desc: "Speak to our IB team directly"        },
];

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-32 relative overflow-hidden" style={{ background: V6.bg }}>
      <NotFoundTracker />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(212,175,55,0.10) 0%, transparent 70%)" }}
      />

      <div className="max-w-2xl w-full mx-auto text-center relative">
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.png"
            alt="Equity IB"
            width={72}
            height={72}
            className="rounded-full opacity-80"
          />
        </div>

        <div
          className="text-[120px] sm:text-[160px] font-bold leading-none mb-4 select-none"
          style={{
            background: "linear-gradient(135deg, rgba(212,175,55,0.35) 0%, rgba(230,199,106,0.18) 50%, rgba(140,106,31,0.12) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          aria-hidden="true"
        >
          404
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: V6.fgPrimary }}>
          Page Not Found
        </h1>
        <p className="text-sm leading-relaxed mb-10 max-w-md mx-auto" style={{ color: V6.fgSecondary }}>
          The page you&apos;re looking for has moved, been removed, or never existed.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <Link href="/" className="btn-v6-primary flex items-center gap-2 font-semibold px-6 py-3 rounded-xl text-sm w-full sm:w-auto justify-center">
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/#apply"
            data-track-event="cta"
            data-track-label="Become an IB Partner"
            data-track-section="404_page"
            className="flex items-center gap-2 font-semibold px-6 py-3 rounded-xl text-sm transition-all w-full sm:w-auto justify-center"
            style={{ background: V6.bgSecondary, border: `1px solid ${V6.border}`, color: V6.fgPrimary }}
          >
            Become an IB Partner
            <ArrowRight className="w-4 h-4" style={{ color: V6.gold }} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 text-left">
          {QUICK_LINKS.map((l) => {
            const Icon = l.icon;
            return (
              <Link key={l.href} href={l.href} className="card-v6 rounded-xl p-4 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(212,175,55,0.10)" }}>
                  <Icon className="w-4 h-4" style={{ color: V6.gold }} />
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: V6.fgPrimary }}>{l.label}</div>
                  <div className="text-xs mt-0.5" style={{ color: V6.fgMuted }}>{l.desc}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
