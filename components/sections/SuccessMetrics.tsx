"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { DollarSign, Users, Globe, TrendingUp, Headphones } from "lucide-react";
import { V6 } from "@/lib/designTokensV6";
import { MeshGradientBg } from "@/components/visual/MeshGradientBg";

const metrics = [
  { icon: DollarSign,  prefix: "$", value: 50,  suffix: "M+", label: "IB Rebates Generated", desc: "Paid to IB partners across our network" },
  { icon: Users,       prefix: "",  value: 750, suffix: "+",  label: "Active IB Partners",    desc: "Professional IBs earning with us today" },
  { icon: Globe,       prefix: "",  value: 125, suffix: "+",  label: "Countries",              desc: "Global reach with local support" },
  { icon: TrendingUp,  prefix: "",  value: 98,  suffix: "%",  label: "Partner Retention",      desc: "IBs who stay and grow with us" },
  { icon: Headphones,  prefix: "",  value: 24,  suffix: "/5", label: "Dedicated Support",      desc: "Around-the-clock partner assistance" },
];

function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, active]);

  return count;
}

function MetricCard({ metric, index }: { metric: (typeof metrics)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCounter(metric.value, 1800, inView);
  const Icon = metric.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="card-v6 rounded-2xl p-6 text-center"
    >
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(212,175,55,0.10)" }}>
        <Icon className="w-5 h-5" style={{ color: V6.gold }} />
      </div>

      <div className="text-4xl sm:text-5xl font-bold mb-1" style={{ color: V6.fgPrimary }}>
        <span style={{ color: V6.gold }}>{metric.prefix}</span>
        {count}
        <span style={{ color: V6.gold }}>{metric.suffix}</span>
      </div>

      <div className="text-sm font-semibold mb-1.5" style={{ color: V6.fgPrimary }}>{metric.label}</div>
      <div className="text-xs leading-snug" style={{ color: V6.fgMuted }}>{metric.desc}</div>
    </motion.div>
  );
}

export function SuccessMetrics() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: V6.bg }}>
      <MeshGradientBg variant="corner" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs font-medium uppercase tracking-[0.14em] mb-4" style={{ color: V6.gold }}>
            By The Numbers
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.02em]" style={{ color: V6.fgPrimary }}>
            A network built on proven results
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm" style={{ color: V6.fgSecondary }}>
            Equity IB has been paying out rebates to professional Introducing Brokers across the
            globe, building long-term partnerships founded on transparency and performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {metrics.map((metric, i) => (
            <MetricCard key={metric.label} metric={metric} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: V6.fgMuted }}>
            Trusted Worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "🇬🇧 United Kingdom", "🇦🇪 UAE", "🇮🇳 India", "🇸🇬 Singapore", "🇩🇪 Germany",
              "🇧🇷 Brazil", "🇳🇬 Nigeria", "🇮🇩 Indonesia", "🇵🇭 Philippines", "🇿🇦 South Africa",
            ].map((country) => (
              <div
                key={country}
                className="px-3 py-1.5 rounded-full text-xs"
                style={{ background: V6.bgSecondary, border: `1px solid ${V6.border}`, color: V6.fgSecondary }}
              >
                {country}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
