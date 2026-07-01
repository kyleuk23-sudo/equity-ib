"use client";

import { reopenCookieBanner } from "@/lib/consent";

export function CookiePreferencesButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={reopenCookieBanner} className={className}>
      Cookie Preferences
    </button>
  );
}
