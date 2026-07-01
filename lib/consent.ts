const STORAGE_KEY = "equity-ib-cookie-consent";
const CHANGE_EVENT = "equity-ib-consent-changed";
const REOPEN_EVENT = "equity-ib-open-cookie-banner";

export interface ConsentState {
  necessary: true;
  analytics: boolean;
  timestamp: string;
}

export function getConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ConsentState) : null;
  } catch {
    return null;
  }
}

export function setConsent(analytics: boolean) {
  const state: ConsentState = { necessary: true, analytics, timestamp: new Date().toISOString() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: state }));
}

export function onConsentChange(cb: (state: ConsentState) => void) {
  const handler = (e: Event) => cb((e as CustomEvent<ConsentState>).detail);
  window.addEventListener(CHANGE_EVENT, handler);
  return () => window.removeEventListener(CHANGE_EVENT, handler);
}

/** Footer "Cookie Preferences" links dispatch this to bring the banner back. */
export function reopenCookieBanner() {
  window.dispatchEvent(new Event(REOPEN_EVENT));
}

export function onReopenRequest(cb: () => void) {
  window.addEventListener(REOPEN_EVENT, cb);
  return () => window.removeEventListener(REOPEN_EVENT, cb);
}
