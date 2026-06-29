"use client";

import { useState }             from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, DollarSign, Users, Clock, Shield, Globe, BarChart3, AlertCircle } from "lucide-react";
import { submitApplication }    from "@/app/actions/submit-application";

const benefits = [
  { icon: DollarSign, text: "Earn up to $30 per traded lot",     color: "#C8952A" },
  { icon: Clock,      text: "Daily rebate settlements",           color: "#34D399" },
  { icon: Users,      text: "Dedicated personal account manager", color: "#A78BFA" },
  { icon: Shield,     text: "Regulated broker infrastructure",    color: "#6366F1" },
  { icon: Globe,      text: "Global programme — 120+ countries",  color: "#34D399" },
  { icon: BarChart3,  text: "Transparent real-time IB dashboard", color: "#C8952A" },
];

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

export function ApplicationSection() {
  const [form, setForm]         = useState<FormData>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);
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
      source:         "homepage",
    });

    setLoading(false);

    if (result.success) {
      setSubmitted(true);
    } else {
      setServerError(result.error ?? "Something went wrong. Please try again.");
    }
  };

  const inputCls =
    "w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-primary/50 focus:bg-white/[0.06] transition-all";

  return (
    <section id="apply" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-60 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-[0.06] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-primary mb-5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
            </span>
            Now Accepting Applications
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Become An Equity IB<br />
            <span className="gradient-text">Partner Today</span>
          </h2>
          <p className="mt-5 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Join hundreds of professional Introducing Brokers earning daily rebates through
            the Equity IB network. Applications are reviewed within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* Left: benefits */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-2"
          >
            <h3 className="text-xl font-bold text-white mb-6">What You&rsquo;ll Get</h3>
            <ul className="space-y-4 mb-10">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <li key={b.text} className="flex items-center gap-4">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${b.color}18` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: b.color }} />
                    </div>
                    <span className="text-sm text-slate-300">{b.text}</span>
                  </li>
                );
              })}
            </ul>

            <div className="glass rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex -space-x-2">
                  {["JW", "PS", "MD", "AA"].map((ini) => (
                    <div
                      key={ini}
                      className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-[9px] font-bold text-white border border-background"
                    >
                      {ini}
                    </div>
                  ))}
                </div>
                <span className="text-xs text-slate-400">500+ active IB partners</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed italic">
                &ldquo;The onboarding was fast and my account manager has been excellent from day one.&rdquo;
              </p>
              <p className="text-xs text-primary mt-1.5">— James W., Platinum IB · 🇬🇧 UK</p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
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

                    {/* Server error banner */}
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
                        <label className="text-xs text-slate-400 mb-1.5 block" htmlFor="app-name">Full Name *</label>
                        <input id="app-name" required value={form.name} onChange={set("name")} placeholder="Your name" className={inputCls} />
                      </div>
                      <div>
                        <label className="text-xs text-slate-400 mb-1.5 block" htmlFor="app-email">Email Address *</label>
                        <input id="app-email" required type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" className={inputCls} />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-slate-400 mb-1.5 block" htmlFor="app-phone">Phone Number</label>
                        <input id="app-phone" value={form.phone} onChange={set("phone")} placeholder="+1 234 567 8900" className={inputCls} />
                      </div>
                      <div>
                        <label className="text-xs text-slate-400 mb-1.5 block" htmlFor="app-telegram">Telegram Handle</label>
                        <input id="app-telegram" value={form.telegram} onChange={set("telegram")} placeholder="@yourusername" className={inputCls} />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-slate-400 mb-1.5 block" htmlFor="app-country">Country *</label>
                        <input id="app-country" required value={form.country} onChange={set("country")} placeholder="United Kingdom" className={inputCls} />
                      </div>
                      <div>
                        <label className="text-xs text-slate-400 mb-1.5 block" htmlFor="app-broker">Current Broker</label>
                        <input id="app-broker" value={form.broker} onChange={set("broker")} placeholder="e.g. IC Markets" className={inputCls} />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-slate-400 mb-1.5 block" htmlFor="app-lots">Estimated Monthly Volume *</label>
                      <select id="app-lots" required value={form.lots} onChange={set("lots")} className={`${inputCls} bg-[#0a0a14] [color-scheme:dark]`}>
                        <option value="" className="bg-[#0a0a14] text-white">Select monthly lots</option>
                        {LOTS_OPTIONS.map((o) => <option key={o} value={o} className="bg-[#0a0a14] text-white">{o}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs text-slate-400 mb-1.5 block" htmlFor="app-message">Tell Us About Your Client Base</label>
                      <textarea
                        id="app-message"
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
                          Apply Now
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}
                    </button>

                    <p className="text-xs text-slate-500 text-center">
                      Applications reviewed within 24 hours. By submitting you agree to our{" "}
                      <a href="/legal/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
