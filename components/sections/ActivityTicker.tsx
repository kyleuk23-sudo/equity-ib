"use client";

import { motion } from "framer-motion";
import { TrendingUp, UserCheck, DollarSign, Award, Star, Zap } from "lucide-react";

const activities = [
  { icon: UserCheck, text: "New IB partner joined from 🇸🇬 Singapore", color: "#34D399" },
  { icon: DollarSign, text: "$2,340 daily rebates paid · Platinum tier IB", color: "#FFD700" },
  { icon: TrendingUp, text: "IB in 🇮🇳 India upgraded to Gold tier", color: "#6366F1" },
  { icon: UserCheck, text: "New client registered · 🇳🇬 Nigeria", color: "#34D399" },
  { icon: DollarSign, text: "$8,750 monthly milestone reached · 🇩🇪 Germany", color: "#FFD700" },
  { icon: Award, text: "IB in 🇦🇪 UAE reached Diamond tier — $30/lot", color: "#34D399" },
  { icon: TrendingUp, text: "1,240 lots generated · Gold IB · 🇬🇧 UK", color: "#6366F1" },
  { icon: DollarSign, text: "$950 daily rebate settled · 🇧🇷 Brazil", color: "#FFD700" },
  { icon: UserCheck, text: "New IB application approved · 🇵🇭 Philippines", color: "#34D399" },
  { icon: Star, text: "98% partner retention maintained Q4 2025", color: "#A78BFA" },
  { icon: Zap, text: "Platinum IB reached 1,400 lots this month · 🇿🇦 South Africa", color: "#6366F1" },
  { icon: DollarSign, text: "$156,000 annual rebates projected · Silver IB · 🇮🇩 Indonesia", color: "#FFD700" },
];

const doubled = [...activities, ...activities];

export function ActivityTicker() {
  return (
    <div className="relative overflow-hidden border-y border-white/[0.05] bg-background/60 py-3.5">
      {/* Left fade */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Live indicator */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Live</span>
      </div>

      <motion.div
        animate={{ x: "-50%" }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-8 whitespace-nowrap w-max pl-32"
      >
        {doubled.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex items-center gap-2.5">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: `${item.color}18` }}
              >
                <Icon className="w-2.5 h-2.5" style={{ color: item.color }} />
              </div>
              <span className="text-xs text-slate-400">{item.text}</span>
              <div className="w-1 h-1 rounded-full bg-white/10 flex-shrink-0" />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
