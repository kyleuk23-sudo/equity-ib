"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { subscribe } from "@/app/actions/subscribe";
import { trackNewsletterSubscribe } from "@/lib/analytics/events";
import type { SubscriberSource } from "@/lib/supabase/types";

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
    <div
      className="glass-strong rounded-3xl p-8 border border-white/[0.08] text-center"
      style={{ boxShadow: "0 8px 48px rgba(0,0,0,0.3)" }}
    >
      <div className="w-11 h-11 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-4">
        <Mail className="w-5 h-5 text-primary" />
      </div>
      <h3 className="text-lg font-bold text-white mb-1.5">Get IB Industry Insights</h3>
      <p className="text-sm text-slate-400 max-w-sm mx-auto mb-5 leading-relaxed">
        Occasional updates on rebate tier changes, programme announcements and IB business tips.
        No spam, unsubscribe any time.
      </p>

      <AnimatePresence mode="wait">
        {state === "done" ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-sm text-accent font-medium"
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
              className="flex-1 bg-white/[0.05] border border-white/[0.10] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-primary/50 focus:bg-white/[0.07] transition-all"
            />
            <button
              type="submit"
              disabled={state === "submitting"}
              className="flex items-center justify-center gap-1.5 bg-primary text-primary-foreground font-semibold px-5 py-3 rounded-xl text-sm transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-60 flex-shrink-0"
            >
              {state === "submitting" ? (
                <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
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
          className="flex items-center justify-center gap-1.5 text-xs text-red-400 mt-3"
        >
          <AlertCircle className="w-3.5 h-3.5" />
          {error}
        </motion.p>
      )}
    </div>
  );
}
