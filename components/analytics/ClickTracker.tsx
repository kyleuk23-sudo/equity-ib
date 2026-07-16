"use client";

import { useEffect } from "react";
import {
  trackCtaClick,
  trackNavClick,
  trackOutboundClick,
  trackPhoneClick,
  trackEmailClick,
} from "@/lib/analytics/events";

/**
 * One delegated click listener for the whole document instead of onClick
 * handlers scattered across dozens of components. Two ways an element gets
 * tracked:
 *
 * 1. Explicit opt-in — add data-track-event="cta" (or "nav" / "footer") plus
 *    data-track-label (and data-track-section for CTAs) to any button/link.
 * 2. Automatic — any <a href="tel:...">, <a href="mailto:...">, or <a> to an
 *    external host is tracked with zero markup changes required.
 */
export function ClickTracker() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const tracked = target.closest<HTMLElement>("[data-track-event]");
      if (tracked) {
        const type    = tracked.dataset.trackEvent;
        const label   = tracked.dataset.trackLabel ?? tracked.textContent?.trim().slice(0, 80) ?? "unknown";
        const section = tracked.dataset.trackSection ?? "unknown";

        if (type === "cta") {
          trackCtaClick({ label, section });
        } else if (type === "nav" || type === "footer") {
          trackNavClick({ label, location: type === "footer" ? "footer" : "header" });
        }
      }

      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (anchor && !tracked) {
        const href = anchor.getAttribute("href") ?? "";
        if (href.startsWith("tel:")) {
          trackPhoneClick(href.replace("tel:", ""));
        } else if (href.startsWith("mailto:")) {
          trackEmailClick(href.replace("mailto:", ""));
        } else if (/^https?:\/\//i.test(href)) {
          try {
            const url = new URL(href);
            if (url.hostname !== window.location.hostname) trackOutboundClick(href);
          } catch {
            /* malformed href — ignore */
          }
        }
      }
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
}
