"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { getConsent, onConsentChange } from "@/lib/consent";
import { gtagSetConsent } from "@/lib/analytics/gtag";

const GA_ID      = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GTM_ID     = process.env.NEXT_PUBLIC_GTM_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

const HAS_ANY_TRACKER = Boolean(GA_ID || GTM_ID || CLARITY_ID);

// Production-only by default. NEXT_PUBLIC_GA_DEBUG=true is an explicit,
// intentional opt-in for testing against GA4 DebugView from a local
// `next build && next start` run — it never applies to `next dev`.
const IS_PRODUCTION = process.env.NODE_ENV === "production";
const DEBUG_OVERRIDE = process.env.NEXT_PUBLIC_GA_DEBUG === "true" && IS_PRODUCTION;
const SHOULD_INITIALISE = IS_PRODUCTION || DEBUG_OVERRIDE;
const DEBUG_MODE = process.env.NODE_ENV !== "production";

/**
 * Trackers are inert unless: (a) this is a production build (or the explicit
 * debug override), (b) the matching NEXT_PUBLIC_* env var is set, and
 * (c) the visitor has granted analytics consent via the cookie banner.
 * Consent is re-checked live: accepting mid-session starts tracking without
 * a reload, and revoking sends a Consent Mode "denied" update rather than
 * silently leaving stale tracking state behind.
 */
export function Analytics() {
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    if (!HAS_ANY_TRACKER || !SHOULD_INITIALISE) return;
    setAnalyticsAllowed(getConsent()?.analytics === true);
    return onConsentChange((state) => {
      setAnalyticsAllowed(state.analytics === true);
      gtagSetConsent(state.analytics === true);
    });
  }, []);

  if (!HAS_ANY_TRACKER || !SHOULD_INITIALISE || !analyticsAllowed) return null;

  return (
    <>
      {GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('consent', 'default', { analytics_storage: 'granted' });
              gtag('config', '${GA_ID}', {
                anonymize_ip: true,
                send_page_view: false,
                debug_mode: ${DEBUG_MODE}
              });
            `}
          </Script>
        </>
      )}

      {GTM_ID && (
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      )}

      {CLARITY_ID && (
        <Script id="clarity-init" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}
        </Script>
      )}
    </>
  );
}
