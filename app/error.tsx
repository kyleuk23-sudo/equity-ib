"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { RefreshCw, Home, ArrowRight, AlertTriangle } from "lucide-react";
import { V6 } from "@/lib/designTokensV6";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-32 relative overflow-hidden" style={{ background: V6.bg }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(239,68,68,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-xl w-full mx-auto text-center relative">
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.png"
            alt="Equity IB"
            width={64}
            height={64}
            className="rounded-full opacity-70"
          />
        </div>

        <div
          className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center"
          style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}
        >
          <AlertTriangle className="w-9 h-9" style={{ color: V6.error }} />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: V6.fgPrimary }}>
          Something went wrong
        </h1>
        <p className="text-sm leading-relaxed mb-8 max-w-md mx-auto" style={{ color: V6.fgSecondary }}>
          We encountered an unexpected error. This has been logged and our team will
          investigate. Please try refreshing the page or return to the homepage.
        </p>

        {error.digest && (
          <p className="text-xs mb-6 font-mono" style={{ color: V6.fgMuted }}>
            Error ID: {error.digest}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={reset}
            className="flex items-center gap-2 font-semibold px-6 py-3 rounded-xl text-sm transition-all w-full sm:w-auto justify-center"
            style={{ background: V6.bgSecondary, border: `1px solid ${V6.border}`, color: V6.fgPrimary }}
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          <Link href="/" className="btn-v6-primary flex items-center gap-2 font-semibold px-6 py-3 rounded-xl text-sm w-full sm:w-auto justify-center">
            <Home className="w-4 h-4" />
            Return Home
          </Link>
          <Link
            href="/#apply"
            className="flex items-center gap-2 font-semibold px-6 py-3 rounded-xl text-sm underline w-full sm:w-auto justify-center"
            style={{ color: V6.gold }}
          >
            Become an IB
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
