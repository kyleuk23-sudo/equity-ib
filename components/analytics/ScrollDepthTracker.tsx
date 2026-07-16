"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackScrollDepth } from "@/lib/analytics/events";

const THRESHOLDS = [25, 50, 75, 100] as const;

/**
 * Fires scroll_depth once per threshold per page. Resets when the route
 * changes so each page gets its own 25/50/75/100% milestones.
 */
export function ScrollDepthTracker() {
  const pathname = usePathname();
  const fired = useRef<Set<number>>(new Set());

  useEffect(() => {
    fired.current = new Set();

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollTop   = window.scrollY;
        const docHeight   = document.documentElement.scrollHeight - window.innerHeight;
        const pct         = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 100;

        for (const threshold of THRESHOLDS) {
          if (pct >= threshold && !fired.current.has(threshold)) {
            fired.current.add(threshold);
            trackScrollDepth(threshold);
          }
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return null;
}
