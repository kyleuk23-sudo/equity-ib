"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { RefreshCw, Home, ArrowRight, AlertTriangle } from "lucide-react";

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
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-32 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(239,68,68,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-xl w-full mx-auto text-center relative">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.png"
            alt="Equity IB"
            width={64}
            height={64}
            className="rounded-full opacity-70"
          />
        </div>

        {/* Icon */}
        <div
          className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center"
          style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}
        >
          <AlertTriangle className="w-9 h-9 text-red-400" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
          Something Went Wrong
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md mx-auto">
          We encountered an unexpected error. This has been logged and our team will
          investigate. Please try refreshing the page or return to the homepage.
        </p>

        {error.digest && (
          <p className="text-xs text-slate-600 mb-6 font-mono">
            Error ID: {error.digest}
          </p>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={reset}
            className="flex items-center gap-2 glass text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all hover:bg-white/[0.08] w-full sm:w-auto justify-center"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          <Link
            href="/"
            className="flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl text-sm transition-all hover:opacity-90 w-full sm:w-auto justify-center"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Link>
          <Link
            href="/#apply"
            className="flex items-center gap-2 text-primary font-semibold px-6 py-3 rounded-xl text-sm transition-all hover:underline w-full sm:w-auto justify-center"
          >
            Become an IB
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
