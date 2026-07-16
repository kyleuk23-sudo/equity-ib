/**
 * Low-level typed wrapper around window.gtag. Every call is a no-op unless
 * gtag has actually been loaded (production + consent granted + GA ID set —
 * see components/analytics/Analytics.tsx for the gate).
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type GAParams = Record<string, string | number | boolean | undefined>;

function isReady(): boolean {
  return typeof window !== "undefined" && typeof window.gtag === "function";
}

export function gtagPageview(url: string, title: string) {
  if (!isReady()) return;
  window.gtag!("event", "page_view", {
    page_location: url,
    page_title:    title,
    page_referrer: typeof document !== "undefined" ? document.referrer : undefined,
  });
}

export function gtagEvent(name: string, params?: GAParams) {
  if (!isReady()) return;
  window.gtag!("event", name, params);
}

export function gtagSetConsent(analyticsGranted: boolean) {
  if (!isReady()) return;
  window.gtag!("consent", "update", {
    analytics_storage: analyticsGranted ? "granted" : "denied",
  });
}
