"use client";

import { useState }                  from "react";
import { motion, AnimatePresence }   from "framer-motion";
import {
  MessageCircle, MapPin, Mail,
  CheckCircle2, Globe, AlertCircle,
} from "lucide-react";
import { submitApplication }          from "@/app/actions/submit-application";
import { useFormAnalytics }           from "@/lib/analytics/useFormAnalytics";
import { ButtonV6 } from "@/components/ui/ButtonV6";
import { V6 } from "@/lib/designTokensV6";
import { MeshGradientBg } from "@/components/visual/MeshGradientBg";
import { IconMark } from "@/components/visual/IconMark";

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

export default function ContactContent() {
  const [form, setForm]           = useState<FormData>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const { onFieldTouch, onValidationError, onSubmitResult } = useFormAnalytics("contact_page");

  const inputCls = "w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors";
  const inputStyle = { background: V6.bgSecondary, border: `1px solid ${V6.border}`, color: V6.fgPrimary };
  const onFocusGold = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => { e.currentTarget.style.borderColor = V6.gold; };
  const onBlurNeutral = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => { e.currentTarget.style.borderColor = V6.border; };

  const set = (k: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      onFieldTouch();
      setForm((f) => ({ ...f, [k]: e.target.value }));
    };

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
      onSubmitResult(true, { country: form.country, estimatedMonthlyLots: form.lots, currentBroker: form.broker });
    } else {
      setServerError(result.error ?? "Something went wrong. Please try again.");
      onSubmitResult(false);
    }
  };

  return (
    <div className="pt-32 pb-24 relative overflow-hidden" style={{ background: V6.bg }}>
      <MeshGradientBg variant="hero" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-5"
            style={{ background: V6.bgSecondary, border: `1px solid ${V6.border}`, color: V6.success }}
          >
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: V6.success }} />
            IB Applications Open
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold tracking-[-0.02em]"
            style={{ color: V6.fgPrimary }}
          >
            Become an{" "}
            <span style={{ color: V6.gold }}>Introducing Broker</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg max-w-xl leading-relaxed"
            style={{ color: V6.fgSecondary }}
          >
            Complete your application below. Our IB team reviews every submission personally and
            responds within 24 hours. Most approvals happen the same day.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="card-v6 rounded-2xl p-8">
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
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                      style={{ background: "rgba(212,175,55,0.15)", border: `1px solid ${V6.borderGold}` }}
                    >
                      <CheckCircle2 className="w-8 h-8" style={{ color: V6.gold }} />
                    </motion.div>
                    <h2 className="text-2xl font-bold mb-2" style={{ color: V6.fgPrimary }}>Application Received</h2>
                    <p className="text-sm max-w-sm mx-auto" style={{ color: V6.fgSecondary }}>
                      Thank you — a member of our IB team will review your application and
                      contact you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} onInvalidCapture={onValidationError} className="space-y-4">
                    {serverError && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start gap-3 p-3.5 rounded-xl"
                        style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)" }}
                      >
                        <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: V6.error }} />
                        <p className="text-xs" style={{ color: V6.error }}>{serverError}</p>
                      </motion.div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs mb-1.5 block" style={{ color: V6.fgMuted }} htmlFor="ct-name">Full Name *</label>
                        <input id="ct-name" required value={form.name} onChange={set("name")} placeholder="Your name" className={inputCls} style={inputStyle} onFocus={onFocusGold} onBlur={onBlurNeutral} />
                      </div>
                      <div>
                        <label className="text-xs mb-1.5 block" style={{ color: V6.fgMuted }} htmlFor="ct-email">Email Address *</label>
                        <input id="ct-email" required type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" className={inputCls} style={inputStyle} onFocus={onFocusGold} onBlur={onBlurNeutral} />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs mb-1.5 block" style={{ color: V6.fgMuted }} htmlFor="ct-phone">Phone Number</label>
                        <input id="ct-phone" value={form.phone} onChange={set("phone")} placeholder="+1 234 567 8900" className={inputCls} style={inputStyle} onFocus={onFocusGold} onBlur={onBlurNeutral} />
                      </div>
                      <div>
                        <label className="text-xs mb-1.5 block" style={{ color: V6.fgMuted }} htmlFor="ct-telegram">Telegram Handle</label>
                        <input id="ct-telegram" value={form.telegram} onChange={set("telegram")} placeholder="@yourusername" className={inputCls} style={inputStyle} onFocus={onFocusGold} onBlur={onBlurNeutral} />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs mb-1.5 block" style={{ color: V6.fgMuted }} htmlFor="ct-country">Country *</label>
                        <input id="ct-country" required value={form.country} onChange={set("country")} placeholder="United Kingdom" className={inputCls} style={inputStyle} onFocus={onFocusGold} onBlur={onBlurNeutral} />
                      </div>
                      <div>
                        <label className="text-xs mb-1.5 block" style={{ color: V6.fgMuted }} htmlFor="ct-broker">Current Broker</label>
                        <input id="ct-broker" value={form.broker} onChange={set("broker")} placeholder="e.g. IC Markets" className={inputCls} style={inputStyle} onFocus={onFocusGold} onBlur={onBlurNeutral} />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs mb-1.5 block" style={{ color: V6.fgMuted }} htmlFor="ct-lots">Estimated Monthly Volume *</label>
                      <select id="ct-lots" required value={form.lots} onChange={set("lots")} className={`${inputCls} [color-scheme:dark]`} style={inputStyle} onFocus={onFocusGold} onBlur={onBlurNeutral}>
                        <option value="">Select monthly lots</option>
                        {LOTS_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs mb-1.5 block" style={{ color: V6.fgMuted }} htmlFor="ct-message">Tell Us About Your Client Base</label>
                      <textarea
                        id="ct-message"
                        value={form.message}
                        onChange={set("message")}
                        placeholder="Briefly describe your audience, IB experience and how you intend to refer clients..."
                        rows={4}
                        className={`${inputCls} resize-none`}
                        style={inputStyle}
                        onFocus={onFocusGold}
                        onBlur={onBlurNeutral}
                      />
                    </div>

                    <ButtonV6 type="submit" loading={loading} className="w-full" icon={!loading}>
                      Submit Application
                    </ButtonV6>

                    <p className="text-xs text-center" style={{ color: V6.fgMuted }}>
                      Free Application · No Joining Fee · By submitting you agree to our{" "}
                      <a href="/legal/privacy-policy" className="underline" style={{ color: V6.gold }}>Privacy Policy</a>.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="group card-v6 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <IconMark size={40}>
                  <MessageCircle className="w-4 h-4" style={{ color: V6.gold }} />
                </IconMark>
                <div>
                  <p className="font-semibold" style={{ color: V6.fgPrimary }}>Live Chat</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: V6.success }} />
                    <span className="text-xs" style={{ color: V6.success }}>Online now — 24/5</span>
                  </div>
                </div>
              </div>
              <p className="text-sm" style={{ color: V6.fgSecondary }}>
                Quick questions about tiers, payments, or eligibility? Our IB team responds fast.
              </p>
            </div>

            <div className="card-v6 rounded-2xl p-6 space-y-4">
              {[
                { icon: Mail,   label: "Email",        value: "partners@equityib.uk",  href: "mailto:partners@equityib.uk" },
                { icon: Globe,  label: "Presence",     value: "125+ Countries" },
                { icon: MapPin, label: "Headquarters", value: "London, United Kingdom" },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.label} className="group flex items-center gap-3">
                    <IconMark size={38}>
                      <Icon className="w-4 h-4" style={{ color: V6.gold }} />
                    </IconMark>
                    <div>
                      <div className="text-xs" style={{ color: V6.fgMuted }}>{c.label}</div>
                      {c.href ? (
                        <a href={c.href} className="text-sm font-medium transition-colors" style={{ color: V6.fgPrimary }}>
                          {c.value}
                        </a>
                      ) : (
                        <div className="text-sm font-medium" style={{ color: V6.fgPrimary }}>{c.value}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="card-v6 rounded-2xl p-5">
              <h2 className="text-xs mb-3 font-medium uppercase tracking-wider" style={{ color: V6.fgMuted }}>
                What Happens Next
              </h2>
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
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(212,175,55,0.10)" }}>
                      <span className="text-xs font-bold" style={{ color: V6.gold }}>{i + 1}</span>
                    </div>
                    <span className="text-xs leading-snug" style={{ color: V6.fgSecondary }}>{step}</span>
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
