import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Home, MessageSquare, BarChart3 } from "lucide-react";

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
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-32 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(200,149,42,0.12) 0%, transparent 70%)" }}
      />

      <div className="max-w-2xl w-full mx-auto text-center relative">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.png"
            alt="Equity IB"
            width={72}
            height={72}
            className="rounded-full opacity-80"
          />
        </div>

        {/* 404 number */}
        <div
          className="text-[120px] sm:text-[160px] font-extrabold leading-none mb-4 select-none"
          style={{
            background: "linear-gradient(135deg, rgba(200,149,42,0.3) 0%, rgba(245,200,66,0.15) 50%, rgba(200,149,42,0.1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          aria-hidden="true"
        >
          404
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
          Page Not Found
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed mb-10 max-w-md mx-auto">
          The page you&apos;re looking for has moved, been removed, or never existed.
          Let&apos;s get you back on track.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <Link
            href="/"
            className="flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl text-sm transition-all hover:opacity-90 w-full sm:w-auto justify-center"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/#apply"
            className="flex items-center gap-2 glass text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all hover:bg-white/[0.08] w-full sm:w-auto justify-center"
          >
            Become an IB Partner
            <ArrowRight className="w-4 h-4 text-primary" />
          </Link>
        </div>

        {/* Quick links */}
        <div className="grid sm:grid-cols-2 gap-3 text-left">
          {QUICK_LINKS.map((l) => {
            const Icon = l.icon;
            return (
              <Link
                key={l.href}
                href={l.href}
                className="glass rounded-xl p-4 flex items-start gap-3 hover:border-white/[0.12] transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm group-hover:text-primary transition-colors">{l.label}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{l.desc}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
