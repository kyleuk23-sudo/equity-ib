"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, BookOpen, CheckCircle2, Clock, FileText, Star, Shield, Mail, ArrowRight } from "lucide-react";
import type { PremiumGuide } from "@/lib/marketingHubData";
import { DIFFICULTY_COLORS } from "@/lib/marketingHubData";

interface DownloadModalProps {
  guide: PremiumGuide | null;
  onClose: () => void;
}

type DlState = "idle" | "email" | "submitting" | "done";

export function DownloadModal({ guide, onClose }: DownloadModalProps) {
  const [dlState, setDlState] = useState<DlState>("idle");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (guide) {
      document.body.style.overflow = "hidden";
      setDlState("idle");
      setEmail("");
      setEmailError("");
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [guide]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Focus email input when it appears
  useEffect(() => {
    if (dlState === "email") {
      setTimeout(() => emailRef.current?.focus(), 120);
    }
  }, [dlState]);

  const handleRequestDownload = () => {
    setDlState("email");
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      setEmailError("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    setDlState("submitting");
    setTimeout(() => setDlState("done"), 2000);
  };

  return (
    <AnimatePresence>
      {guide && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-[100]"
          />

          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 24 }}
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
              className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-3xl overflow-hidden border border-white/[0.10]"
              style={{ background: "#0d1526" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Cover art */}
              <div
                className="relative flex-shrink-0 h-44 flex flex-col justify-end p-6 overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${guide.coverFrom} 0%, ${guide.coverTo} 100%)` }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 80% 20%, rgba(99,102,241,0.2) 0%, transparent 60%)" }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(13,21,38,0.6), transparent)" }}
                />

                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4 text-white" />
                </button>

                <div className="relative z-10 flex items-center gap-2 mb-2 flex-wrap">
                  <span
                    className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                    style={{
                      background: `${DIFFICULTY_COLORS[guide.difficulty]}30`,
                      color: DIFFICULTY_COLORS[guide.difficulty],
                      border: `1px solid ${DIFFICULTY_COLORS[guide.difficulty]}40`,
                    }}
                  >
                    {guide.difficulty}
                  </span>
                  <span className="text-xs text-white/60 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {guide.readTime}
                  </span>
                  <span className="text-xs text-white/60 flex items-center gap-1">
                    <FileText className="w-3 h-3" /> {guide.pages} pages
                  </span>
                  {guide.isNew && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/30">New</span>
                  )}
                  {guide.isPopular && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-yellow-400/20 text-yellow-400 border border-yellow-400/30">Popular</span>
                  )}
                </div>
                <h2 className="relative z-10 text-xl font-extrabold text-white leading-snug">{guide.title}</h2>
                <p className="relative z-10 text-sm text-white/65 mt-1">{guide.subtitle}</p>
              </div>

              {/* Scrollable body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <p className="text-sm text-slate-300 leading-relaxed">{guide.description}</p>

                {/* Chapters */}
                <div>
                  <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    {guide.chapters.length} Chapters
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                    {guide.chapters.map((ch, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                          style={{ background: `${guide.color}20`, color: guide.color }}
                        >
                          {i + 1}
                        </span>
                        <span className="leading-snug">{ch}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key takeaways */}
                <div>
                  <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    Key Takeaways
                  </h3>
                  <div className="space-y-2.5">
                    {guide.keyTakeaways.map((kt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{kt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div
                className="flex-shrink-0 border-t"
                style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
              >
                <AnimatePresence mode="wait" initial={false}>

                  {/* ── Idle: single CTA button ── */}
                  {dlState === "idle" && (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18 }}
                      className="p-4"
                    >
                      <div className="flex items-center gap-1.5 mb-3">
                        <Shield className="w-3 h-3 text-slate-500" />
                        <span className="text-xs text-slate-500">Free for active Equity IB partners · Last updated {guide.lastUpdated}</span>
                      </div>
                      <button
                        onClick={handleRequestDownload}
                        className="w-full flex items-center justify-center gap-2 font-semibold py-3.5 rounded-xl text-sm transition-all hover:opacity-90 active:scale-[0.98]"
                        style={{ background: guide.color, color: "white" }}
                      >
                        <Download className="w-4 h-4" /> Download Free Guide
                      </button>
                    </motion.div>
                  )}

                  {/* ── Email capture ── */}
                  {dlState === "email" && (
                    <motion.div
                      key="email"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18 }}
                      className="p-4"
                    >
                      <p className="text-sm font-semibold text-white mb-0.5">
                        Where should we send your guide?
                      </p>
                      <p className="text-xs text-slate-400 mb-3">
                        Enter your email and we'll deliver <span className="text-white">{guide.title}</span> straight to your inbox.
                      </p>

                      <form onSubmit={handleSubmit} noValidate className="space-y-2.5">
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                          <input
                            ref={emailRef}
                            type="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
                            placeholder="you@example.com"
                            className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-white placeholder:text-slate-500 outline-none transition-all"
                            style={{
                              background: "rgba(255,255,255,0.06)",
                              border: emailError ? "1px solid rgba(239,68,68,0.6)" : "1px solid rgba(255,255,255,0.10)",
                            }}
                            onFocus={(e) => {
                              if (!emailError) e.currentTarget.style.borderColor = `${guide.color}60`;
                            }}
                            onBlur={(e) => {
                              if (!emailError) e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                            }}
                          />
                        </div>

                        {emailError && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs text-red-400 pl-1"
                          >
                            {emailError}
                          </motion.p>
                        )}

                        <button
                          type="submit"
                          className="w-full flex items-center justify-center gap-2 font-semibold py-3.5 rounded-xl text-sm transition-all hover:opacity-90 active:scale-[0.98]"
                          style={{ background: guide.color, color: "white" }}
                        >
                          Send me the guide <ArrowRight className="w-4 h-4" />
                        </button>
                      </form>

                      <p className="text-xs text-slate-600 text-center mt-2.5 flex items-center justify-center gap-1">
                        <Shield className="w-3 h-3" /> No spam. Unsubscribe any time.
                      </p>
                    </motion.div>
                  )}

                  {/* ── Submitting ── */}
                  {dlState === "submitting" && (
                    <motion.div
                      key="submitting"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18 }}
                      className="p-4"
                    >
                      <div
                        className="w-full flex items-center justify-center gap-2 font-semibold py-3.5 rounded-xl text-sm"
                        style={{ background: `${guide.color}20`, color: guide.color }}
                      >
                        <span className="w-4 h-4 border-2 rounded-full animate-spin inline-block"
                          style={{ borderColor: `${guide.color}40`, borderTopColor: guide.color }} />
                        Sending your guide…
                      </div>
                    </motion.div>
                  )}

                  {/* ── Done ── */}
                  {dlState === "done" && (
                    <motion.div
                      key="done"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18 }}
                      className="p-4"
                    >
                      <div className="flex items-start gap-3 p-3.5 rounded-xl mb-3"
                        style={{ background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.2)" }}>
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-white">Guide on its way!</p>
                          <p className="text-xs text-slate-400 mt-0.5">
                            We've sent <span className="text-white">{guide.title}</span> to <span className="text-accent">{email}</span>. Check your inbox — it should arrive within a few minutes.
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={onClose}
                        className="w-full py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white transition-colors"
                        style={{ background: "rgba(255,255,255,0.04)" }}
                      >
                        Close
                      </button>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
