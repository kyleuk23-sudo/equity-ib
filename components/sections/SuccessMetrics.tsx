"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { DollarSign, Users, Globe, TrendingUp, Headphones } from "lucide-react";

const metrics = [
  {
    icon: DollarSign,
    prefix: "$",
    value: 50,
    suffix: "M+",
    label: "IB Rebates Generated",
    color: "#FFD700",
    desc: "Paid to IB partners across our network",
  },
  {
    icon: Users,
    prefix: "",
    value: 750,
    suffix: "+",
    label: "Active IB Partners",
    color: "#6366F1",
    desc: "Professional IBs earning with us today",
  },
  {
    icon: Globe,
    prefix: "",
    value: 125,
    suffix: "+",
    label: "Countries",
    color: "#34D399",
    desc: "Global reach with local support",
  },
  {
    icon: TrendingUp,
    prefix: "",
    value: 98,
    suffix: "%",
    label: "Partner Retention",
    color: "#A78BFA",
    desc: "IBs who stay and grow with us",
  },
  {
    icon: Headphones,
    prefix: "",
    value: 24,
    suffix: "/5",
    label: "Dedicated Support",
    color: "#34D399",
    desc: "Around-the-clock partner assistance",
  },
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

function MetricCard({
  metric,
  index,
}: {
  metric: (typeof metrics)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCounter(metric.value, 1800, inView);
  const Icon = metric.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-6 text-center relative overflow-hidden group hover:border-white/[0.12] transition-all"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${metric.color}10 0%, transparent 70%)`,
        }}
      />

      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
        style={{ background: `${metric.color}15` }}
      >
        <Icon className="w-5 h-5" style={{ color: metric.color }} />
      </div>

      <div className="text-4xl sm:text-5xl font-extrabold text-white mb-1">
        <span style={{ color: metric.color }}>{metric.prefix}</span>
        {count}
        <span style={{ color: metric.color }}>{metric.suffix}</span>
      </div>

      <div className="text-sm font-semibold text-white mb-1.5">{metric.label}</div>
      <div className="text-xs text-slate-500 leading-snug">{metric.desc}</div>
    </motion.div>
  );
}

export function SuccessMetrics() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-accent opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-accent mb-4">
            <TrendingUp className="w-3 h-3" />
            By The Numbers
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            A Network Built On{" "}
            <span className="gradient-text">Proven Results</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm">
            Equity IB has been paying out rebates to professional Introducing Brokers across the
            globe, building long-term partnerships founded on transparency and performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {metrics.map((metric, i) => (
            <MetricCard key={metric.label} metric={metric} index={i} />
          ))}
        </div>

        {/* Trusted worldwide strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
            Trusted Worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "🇬🇧 United Kingdom",
              "🇦🇪 UAE",
              "🇮🇳 India",
              "🇸🇬 Singapore",
              "🇩🇪 Germany",
              "🇧🇷 Brazil",
              "🇳🇬 Nigeria",
              "🇮🇩 Indonesia",
              "🇵🇭 Philippines",
              "🇿🇦 South Africa",
            ].map((country) => (
              <div
                key={country}
                className="glass px-3 py-1.5 rounded-full text-xs text-slate-300"
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
