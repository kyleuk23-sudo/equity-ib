"use client";

import { useState }             from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, DollarSign, Users, Clock, Shield, Globe, BarChart3, AlertCircle } from "lucide-react";
import { submitApplication }    from "@/app/actions/submit-application";
import { useFormAnalytics }     from "@/lib/analytics/useFormAnalytics";
import { ButtonV6 } from "@/components/ui/ButtonV6";
import { V6, V6_GRADIENT } from "@/lib/designTokensV6";

const benefits = [
  { icon: DollarSign, text: "Earn up to $30 per traded lot" },
  { icon: Clock,      text: "Daily rebate settlements" },
  { icon: Users,      text: "Dedicated personal account manager" },
  { icon: Shield,     text: "Regulated broker infrastructure" },
  { icon: Globe,      text: "Global programme — 120+ countries" },
  { icon: BarChart3,  text: "Transparent real-time IB dashboard" },
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

/** Floating label — CSS-only via :placeholder-shown, no JS state needed. */
function FloatingField({
  id, label, required, type = "text", value, onChange,
}: {
  id: string; label: string; required?: boolean; type?: string;
  value: string; onChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="peer w-full rounded-xl px-4 pt-5 pb-2 text-sm outline-none transition-colors"
        style={{ background: V6.bgSecondary, border: `1px solid ${V6.border}`, color: V6.fgPrimary }}
        onFocus={(e) => { e.currentTarget.style.borderColor = V6.gold; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = V6.border; }}
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-3.5 text-sm transition-all pointer-events-none
          peer-focus:top-1.5 peer-focus:text-[11px]
          peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[11px]"
        style={{ color: V6.fgMuted }}
      >
        {label}{required && " *"}
      </label>
    </div>
  );
}

export function ApplicationSection() {
  const [form, setForm]         = useState<FormData>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const { onFieldTouch, onValidationError, onSubmitResult } = useFormAnalytics("homepage_application");

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
      source:         "homepage",
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
    <section id="apply" className="py-24 relative overflow-hidden" style={{ background: V6.bg }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{ background: "radial-gradient(ellipse 60% 45% at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-5"
            style={{ background: V6.bgSecondary, border: `1px solid ${V6.border}`, color: V6.gold }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: V6.gold }} />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: V6.gold }} />
            </span>
            Now Accepting Applications
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.02em]" style={{ color: V6.fgPrimary }}>
            Become an Equity IB partner today
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-sm leading-relaxed" style={{ color: V6.fgSecondary }}>
            Join hundreds of professional Introducing Brokers earning daily rebates through
            the Equity IB network. Applications are reviewed within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-2"
          >
            <h3 className="text-xl font-semibold mb-6" style={{ color: V6.fgPrimary }}>What You&rsquo;ll Get</h3>
            <ul className="space-y-4 mb-10">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <li key={b.text} className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(212,175,55,0.10)" }}>
                      <Icon className="w-4 h-4" style={{ color: V6.gold }} />
                    </div>
                    <span className="text-sm" style={{ color: V6.fgSecondary }}>{b.text}</span>
                  </li>
                );
              })}
            </ul>

            <div className="card-v6 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex -space-x-2">
                  {["JW", "PS", "MD", "AA"].map((ini) => (
                    <div
                      key={ini}
                      className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-semibold"
                      style={{ background: V6_GRADIENT.gold, color: V6.onAccent, border: `2px solid ${V6.bgSecondary}` }}
                    >
                      {ini}
                    </div>
                  ))}
                </div>
                <span className="text-xs" style={{ color: V6.fgMuted }}>500+ active IB partners</span>
              </div>
              <p className="text-xs leading-relaxed italic" style={{ color: V6.fgSecondary }}>
                &ldquo;The onboarding was fast and my account manager has been excellent from day one.&rdquo;
              </p>
              <p className="text-xs mt-1.5" style={{ color: V6.gold }}>— James W., Platinum IB · 🇬🇧 UK</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-3"
          >
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 p-4 rounded-2xl mb-4"
              style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)" }}
            >
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: V6.success }} />
              <div>
                <div className="text-sm font-semibold mb-0.5" style={{ color: V6.fgPrimary }}>Your Application Is Completely Free</div>
                <div className="text-xs leading-relaxed" style={{ color: V6.fgSecondary }}>
                  There is no cost to apply or become an Equity IB partner. Once approved, you&apos;ll receive
                  onboarding support and access to the broker&apos;s tools to help you grow your IB business.
                </div>
              </div>
            </motion.div>

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
                    <h3 className="text-2xl font-semibold mb-2" style={{ color: V6.fgPrimary }}>Application Received</h3>
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
                      <FloatingField id="app-name" label="Full Name" required value={form.name} onChange={set("name")} />
                      <FloatingField id="app-email" label="Email Address" required type="email" value={form.email} onChange={set("email")} />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <FloatingField id="app-phone" label="Phone Number" type="tel" value={form.phone} onChange={set("phone")} />
                      <FloatingField id="app-telegram" label="Telegram Handle" value={form.telegram} onChange={set("telegram")} />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <FloatingField id="app-country" label="Country" required value={form.country} onChange={set("country")} />
                      <FloatingField id="app-broker" label="Current Broker" value={form.broker} onChange={set("broker")} />
                    </div>

                    <div>
                      <label className="text-xs mb-1.5 block" htmlFor="app-lots" style={{ color: V6.fgMuted }}>Estimated Monthly Volume *</label>
                      <select
                        id="app-lots"
                        required
                        value={form.lots}
                        onChange={set("lots")}
                        className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors [color-scheme:dark]"
                        style={{ background: V6.bgSecondary, border: `1px solid ${V6.border}`, color: V6.fgPrimary }}
                      >
                        <option value="">Select monthly lots</option>
                        {LOTS_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs mb-1.5 block" htmlFor="app-message" style={{ color: V6.fgMuted }}>Tell Us About Your Client Base</label>
                      <textarea
                        id="app-message"
                        value={form.message}
                        onChange={set("message")}
                        placeholder="Briefly describe your audience, IB experience and how you intend to refer clients..."
                        rows={4}
                        className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
                        style={{ background: V6.bgSecondary, border: `1px solid ${V6.border}`, color: V6.fgPrimary }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = V6.gold; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = V6.border; }}
                      />
                    </div>

                    <ButtonV6 type="submit" loading={loading} className="w-full" icon={!loading}>
                      Apply Free Today
                    </ButtonV6>

                    <p className="text-xs text-center" style={{ color: V6.fgMuted }}>
                      Applications reviewed within 24 hours. By submitting you agree to our{" "}
                      <a href="/legal/privacy-policy" className="underline underline-offset-2 transition-colors" style={{ color: V6.gold }}>Privacy Policy</a>.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-3">
                      {["100% Free to Join", "No Hidden Fees", "Dedicated IB Support", "Daily Rebate Payments"].map((t) => (
                        <div key={t} className="flex items-center gap-1.5 text-xs" style={{ color: V6.fgMuted }}>
                          <CheckCircle2 className="w-3 h-3 flex-shrink-0" style={{ color: V6.success }} />
                          {t}
                        </div>
                      ))}
                    </div>
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
