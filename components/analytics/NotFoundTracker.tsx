"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackNotFound } from "@/lib/analytics/events";

export function NotFoundTracker() {
  const pathname = usePathname();

  useEffect(() => {
    trackNotFound(pathname);
  }, [pathname]);

  return null;
}
