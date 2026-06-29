"use client";

import { useState }             from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm }              from "react-hook-form";
import { zodResolver }          from "@hookform/resolvers/zod";
import { z }                    from "zod";
import { toast }                from "sonner";
import {
  Send, Calendar, MessageCircle, MapPin, Mail, CheckCircle2, Globe,
} from "lucide-react";
import { submitApplication }    from "@/app/actions/submit-application";

const schema = z.object({
  name:          z.string().min(2, "Name must be at least 2 characters"),
  email:         z.string().email("Please enter a valid email address"),
  telegram:      z.string().optional(),
  country:       z.string().min(2, "Please enter your country"),
  monthlyLots:   z.string().min(1, "Please select your estimated monthly lots"),
  currentBroker: z.string().optional(),
  yearsAsIB:     z.string().min(1, "Please select your IB experience"),
  website:       z.string().optional(),
  message:       z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const lotsOptions = [
  { value: "0-99",      label: "0–99 Lots (Starter)"          },
  { value: "100-249",   label: "100–249 Lots (Bronze)"         },
  { value: "250-499",   label: "250–499 Lots (Silver)"         },
  { value: "500-999",   label: "500–999 Lots (Gold)"           },
  { value: "1000-2499", label: "1,000–2,499 Lots (Platinum)"   },
  { value: "2500+",     label: "2,500+ Lots (Diamond)"         },
];

const yearsOptions = [
  { value: "0",   label: "New to IB — first time" },
  { value: "1",   label: "Less than 1 year"        },
  { value: "1-3", label: "1–3 years"               },
  { value: "3-5", label: "3–5 years"               },
  { value: "5+",  label: "5+ years"                },
];

const inputClass =
  "w-full glass rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary/30 transition-all";
const labelClass = "block text-xs font-medium text-slate-300 mb-1.5";
const selectClass =
  "w-full glass rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary/40 transition-all bg-[#0d0d1a] [color-scheme:dark]";

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    const result = await submitApplication({
      name:           data.name,
      email:          data.email,
      telegram:       data.telegram,
      country:        data.country,
      monthly_lots:   data.monthlyLots,
      current_broker: data.currentBroker,
      years_as_ib:    data.yearsAsIB,
      website:        data.website,
      message:        data.message,
      source:         "contact",
    });

    if (result.success) {
      setSubmitted(true);
      reset();
    } else {
      toast.error(result.error ?? "Something went wrong. Please try again.");
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
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-strong rounded-3xl p-10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                    className="w-20 h-20 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-accent" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-white mb-3">Application Received</h2>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    Thank you for applying to the Equity IB partner program. Your dedicated account
                    manager will review your application and reach out within 24 hours.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-400 mb-8">
                    {[
                      "Application reviewed personally",
                      "Response within 24 hours",
                      "IB manager assigned on approval",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm text-primary hover:underline"
                  >
                    Submit another application
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="glass-strong rounded-3xl p-8 space-y-5"
                >
                  <h2 className="text-xl font-bold text-white mb-2">IB Partner Application</h2>
                  <p className="text-xs text-slate-400 mb-4">
                    All fields marked * are required. This takes under 5 minutes.
                  </p>

                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ct-name" className={labelClass}>Full Name *</label>
                      <input id="ct-name" {...register("name")} placeholder="John Smith" className={inputClass} />
                      {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="ct-email" className={labelClass}>Email Address *</label>
                      <input id="ct-email" {...register("email")} type="email" placeholder="john@example.com" className={inputClass} />
                      {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  {/* Telegram + Country */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ct-telegram" className={labelClass}>Telegram Username</label>
                      <input id="ct-telegram" {...register("telegram")} placeholder="@yourusername" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="ct-country" className={labelClass}>Country *</label>
                      <input id="ct-country" {...register("country")} placeholder="United Kingdom" className={inputClass} />
                      {errors.country && <p className="text-xs text-red-400 mt-1">{errors.country.message}</p>}
                    </div>
                  </div>

                  {/* Monthly Lots + Years as IB */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ct-lots" className={labelClass}>Estimated Monthly Lots *</label>
                      <select id="ct-lots" {...register("monthlyLots")} className={selectClass}>
                        <option value="" className="bg-[#050509] text-white">Select your volume...</option>
                        {lotsOptions.map((o) => (
                          <option key={o.value} value={o.value} className="bg-[#050509] text-white">{o.label}</option>
                        ))}
                      </select>
                      {errors.monthlyLots && <p className="text-xs text-red-400 mt-1">{errors.monthlyLots.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="ct-years" className={labelClass}>Years As An IB *</label>
                      <select id="ct-years" {...register("yearsAsIB")} className={selectClass}>
                        <option value="" className="bg-[#050509] text-white">Select experience...</option>
                        {yearsOptions.map((o) => (
                          <option key={o.value} value={o.value} className="bg-[#050509] text-white">{o.label}</option>
                        ))}
                      </select>
                      {errors.yearsAsIB && <p className="text-xs text-red-400 mt-1">{errors.yearsAsIB.message}</p>}
                    </div>
                  </div>

                  {/* Current Broker + Website */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ct-broker" className={labelClass}>Current Broker (if any)</label>
                      <input id="ct-broker" {...register("currentBroker")} placeholder="e.g. IC Markets, XM..." className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="ct-website" className={labelClass}>Website / Social Profile</label>
                      <input id="ct-website" {...register("website")} placeholder="https://yoursite.com" className={inputClass} />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="ct-message" className={labelClass}>Tell Us About Your Business</label>
                    <textarea
                      id="ct-message"
                      {...register("message")}
                      rows={4}
                      placeholder="Describe your audience, how you refer traders, what you're looking for from an IB partnership..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-all hover:shadow-glow text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit IB Application
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    By submitting you agree to our{" "}
                    <a href="/legal/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>
                    {" "}and{" "}
                    <a href="/legal/ib-terms" className="text-primary hover:underline">IB Partner Terms</a>.
                    Rebate rates quoted are indicative and subject to individual agreement.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Book a call */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-white">Book A Discovery Call</h3>
              </div>
              <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                Prefer to talk first? Schedule a 30-minute discovery call with an IB account
                manager to discuss your situation before applying.
              </p>
              <button className="w-full glass hover:bg-white/[0.07] text-sm font-medium text-white py-2.5 rounded-xl transition-all border border-white/[0.06] hover:border-white/[0.12]">
                Book A Time →
              </button>
            </div>

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
                { icon: Mail,   label: "Email",        value: "partners@equityib.com", color: "#6366F1" },
                { icon: Globe,  label: "Presence",     value: "125+ Countries",        color: "#34D399" },
                { icon: MapPin, label: "Headquarters", value: "London, United Kingdom",color: "#A78BFA" },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${c.color}15` }}>
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
