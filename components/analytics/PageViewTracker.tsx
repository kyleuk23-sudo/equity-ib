"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { gtagPageview } from "@/lib/analytics/gtag";

/**
 * gtag's own automatic page_view is disabled (send_page_view: false in
 * Analytics.tsx) because Next.js App Router client-side navigations don't
 * trigger new document loads, so gtag would never see them. This component
 * fires page_view manually on every pathname/query change, including the
 * very first render, so there is exactly one page_view per route — never
 * zero, never duplicated.
 */
function PageViewTrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();
    const url = pathname + (query ? `?${query}` : "");
    gtagPageview(url, document.title);
  }, [pathname, searchParams]);

  return null;
}

export function PageViewTracker() {
  return (
    <Suspense fallback={null}>
      <PageViewTrackerInner />
    </Suspense>
  );
}
