"use client";

import { useState }                  from "react";
import { motion, AnimatePresence }   from "framer-motion";
import {
  ArrowRight, MessageCircle, MapPin, Mail,
  CheckCircle2, Globe, AlertCircle,
} from "lucide-react";
import { submitApplication }          from "@/app/actions/submit-application";

const LOTS_OPTIONS = [
  "< 100 lots / month",
  "100 – 249 lots / month",
  "250 – 499 lots / month",
  "500 – 999 lots / month",
  "1,000 – 2,499 lots / month",
  "2,500+ lots / month",
  "Not sure yet",
];

interface FormData {
  name: string; email: string; phone: string; telegram: string;
  country: string; broker: string; lots: string; message: string;
}

const EMPTY: FormData = {
  name: "", email: "", phone: "", telegram: "",
  country: "", broker: "", lots: "", message: "",
};

const inputCls =
  "w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-primary/50 focus:bg-white/[0.06] transition-all";

export default function ContactContent() {
  const [form, setForm]           = useState<FormData>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const set = (k: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setServerError(null);

    const result = await submitApplication({
      name:           form.name,
      email:          form.email,
      phone:          form.phone,
      telegram:       form.telegram,
      country:        form.country,
      current_broker: form.broker,
      monthly_lots:   form.lots,
      message:        form.message,
      source:         "contact",
    });

    setLoading(false);

    if (result.success) {
      setSubmitted(true);
    } else {
      setServerError(result.error ?? "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-accent mb-5"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            IB Applications Open
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-extrabold tracking-tight"
          >
            Become An{" "}
            <span className="gradient-text">Introducing Broker</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-slate-400 max-w-xl leading-relaxed"
          >
            Complete your application below. Our IB team reviews every submission personally and
            responds within 24 hours. Most approvals happen the same day.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div
              className="glass-strong rounded-3xl p-8 border border-white/[0.08]"
              style={{ boxShadow: "0 8px 48px rgba(0,0,0,0.4)" }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-5"
                    >
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">Application Received</h3>
                    <p className="text-slate-400 text-sm max-w-sm mx-auto">
                      Thank you — a member of our IB team will review your application and
                      contact you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-4">

                    {serverError && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start gap-3 p-3.5 rounded-xl"
                        style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)" }}
                      >
                        <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-red-400">{serverError}</p>
                      </motion.div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-slate-400 mb-1.5 block" htmlFor="ct-name">Full Name *</label>
                        <input id="ct-name" required value={form.name} onChange={set("name")} placeholder="Your name" className={inputCls} />
                      </div>
                      <div>
                        <label className="text-xs text-slate-400 mb-1.5 block" htmlFor="ct-email">Email Address *</label>
                        <input id="ct-email" required type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" className={inputCls} />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-slate-400 mb-1.5 block" htmlFor="ct-phone">Phone Number</label>
                        <input id="ct-phone" value={form.phone} onChange={set("phone")} placeholder="+1 234 567 8900" className={inputCls} />
                      </div>
                      <div>
                        <label className="text-xs text-slate-400 mb-1.5 block" htmlFor="ct-telegram">Telegram Handle</label>
                        <input id="ct-telegram" value={form.telegram} onChange={set("telegram")} placeholder="@yourusername" className={inputCls} />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-slate-400 mb-1.5 block" htmlFor="ct-country">Country *</label>
                        <input id="ct-country" required value={form.country} onChange={set("country")} placeholder="United Kingdom" className={inputCls} />
                      </div>
                      <div>
                        <label className="text-xs text-slate-400 mb-1.5 block" htmlFor="ct-broker">Current Broker</label>
                        <input id="ct-broker" value={form.broker} onChange={set("broker")} placeholder="e.g. IC Markets" className={inputCls} />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-slate-400 mb-1.5 block" htmlFor="ct-lots">Estimated Monthly Volume *</label>
                      <select id="ct-lots" required value={form.lots} onChange={set("lots")} className={`${inputCls} bg-[#0a0a14] [color-scheme:dark]`}>
                        <option value="" className="bg-[#0a0a14] text-white">Select monthly lots</option>
                        {LOTS_OPTIONS.map((o) => (
                          <option key={o} value={o} className="bg-[#0a0a14] text-white">{o}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs text-slate-400 mb-1.5 block" htmlFor="ct-message">Tell Us About Your Client Base</label>
                      <textarea
                        id="ct-message"
                        value={form.message}
                        onChange={set("message")}
                        placeholder="Briefly describe your audience, IB experience and how you intend to refer clients..."
                        rows={4}
                        className={`${inputCls} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-glow w-full flex items-center justify-center gap-2 bg-primary text-white font-bold py-4 rounded-xl text-sm transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-60 relative overflow-hidden group"
                    >
                      <span className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting…
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Submit Application
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}
                    </button>

                    <p className="text-xs text-slate-500 text-center">
                      Free Application · No Joining Fee · By submitting you agree to our{" "}
                      <a href="/legal/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Live chat */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Live Chat</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="text-xs text-accent">Online now — 24/5</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-400">
                Quick questions about tiers, payments, or eligibility? Our IB team responds fast.
              </p>
            </div>

            {/* Contact details */}
            <div className="glass rounded-2xl p-6 space-y-4">
              {[
                { icon: Mail,   label: "Email",        value: "partners@equityib.uk",  color: "#6366F1" },
                { icon: Globe,  label: "Presence",     value: "125+ Countries",         color: "#34D399" },
                { icon: MapPin, label: "Headquarters", value: "London, United Kingdom", color: "#A78BFA" },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.label} className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${c.color}15` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: c.color }} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">{c.label}</div>
                      <div className="text-sm text-white font-medium">{c.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* What happens next */}
            <div className="glass rounded-2xl p-5">
              <p className="text-xs text-slate-400 mb-3 font-medium uppercase tracking-wider">
                What Happens Next
              </p>
              <div className="space-y-3">
                {[
                  "Application reviewed by an IB specialist",
                  "Personal response within 24 hours",
                  "Discovery call scheduled if appropriate",
                  "Account manager assigned on approval",
                  "Tracking links and dashboard access",
                  "First daily rebate payment",
                ].map((step, i) => (
                  <div key={step} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">{i + 1}</span>
                    </div>
                    <span className="text-xs text-slate-400 leading-snug">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
