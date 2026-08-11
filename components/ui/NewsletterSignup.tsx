"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { subscribe } from "@/app/actions/subscribe";
import { trackNewsletterSubscribe } from "@/lib/analytics/events";
import type { SubscriberSource } from "@/lib/supabase/types";
import { V6 } from "@/lib/designTokensV6";

type State = "idle" | "submitting" | "done" | "error";

export function NewsletterSignup({ source }: { source: SubscriberSource }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    setState("submitting");

    const result = await subscribe({ email: trimmed, source });

    if (result.success) {
      setState("done");
      trackNewsletterSubscribe(source);
    } else {
      setState("error");
      setError(result.error ?? "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="card-v6 rounded-2xl p-8 text-center">
      <div className="w-11 h-11 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(212,175,55,0.10)" }}>
        <Mail className="w-5 h-5" style={{ color: V6.gold }} />
      </div>
      <h3 className="text-lg font-bold mb-1.5" style={{ color: V6.fgPrimary }}>Get IB Industry Insights</h3>
      <p className="text-sm max-w-sm mx-auto mb-5 leading-relaxed" style={{ color: V6.fgSecondary }}>
        Occasional updates on rebate tier changes, programme announcements and IB business tips.
        No spam, unsubscribe any time.
      </p>

      <AnimatePresence mode="wait">
        {state === "done" ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-sm font-medium"
            style={{ color: V6.success }}
          >
            <CheckCircle2 className="w-4 h-4" />
            You&apos;re subscribed — thanks for joining.
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col sm:flex-row gap-2.5 max-w-sm mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(null); }}
              placeholder="you@example.com"
              aria-label="Email address"
              className="flex-1 rounded-xl px-4 py-3 text-sm outline-none transition-all"
              style={{ background: V6.bgSecondary, border: `1px solid ${V6.border}`, color: V6.fgPrimary }}
              onFocus={(e) => { e.currentTarget.style.borderColor = V6.gold; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = V6.border; }}
            />
            <button
              type="submit"
              disabled={state === "submitting"}
              className="btn-v6-primary flex items-center justify-center gap-1.5 font-semibold px-5 py-3 rounded-xl text-sm flex-shrink-0 disabled:opacity-60 disabled:pointer-events-none"
            >
              {state === "submitting" ? (
                <span className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
              ) : (
                <>
                  Subscribe <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-1.5 text-xs mt-3"
          style={{ color: V6.error }}
        >
          <AlertCircle className="w-3.5 h-3.5" />
          {error}
        </motion.p>
      )}
    </div>
  );
}
