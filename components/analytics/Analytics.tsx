"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { getConsent, onConsentChange } from "@/lib/consent";

const GA_ID      = process.env.NEXT_PUBLIC_GA_ID;
const GTM_ID     = process.env.NEXT_PUBLIC_GTM_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

const HAS_ANY_TRACKER = Boolean(GA_ID || GTM_ID || CLARITY_ID);

/**
 * Trackers are inert unless the matching NEXT_PUBLIC_* env var is set AND
 * the visitor has granted analytics consent via the cookie banner. Consent
 * is re-checked live so accepting mid-session starts tracking without a
 * page reload; declining or never deciding means nothing ever loads.
 */
export function Analytics() {
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    if (!HAS_ANY_TRACKER) return;
    setAnalyticsAllowed(getConsent()?.analytics === true);
    return onConsentChange((state) => setAnalyticsAllowed(state.analytics === true));
  }, []);

  if (!analyticsAllowed) return null;

  return (
    <>
      {GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
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
