"use client";

import { useCallback, useRef } from "react";
import { trackFormStart, trackFormSubmit, trackFormValidationError, trackLead } from "./events";

interface LeadParams {
  country?: string;
  estimatedMonthlyLots?: string;
  currentBroker?: string;
}

/**
 * Shared form-analytics wiring for the Application and Contact forms.
 * Never touches field values themselves — only timing and structural
 * lead-qualification fields explicitly allowed by the tracking spec
 * (country, estimated lots, current broker). No name/email/phone/message.
 */
export function useFormAnalytics(formName: string) {
  const started   = useRef(false);
  const startedAt = useRef<number | null>(null);

  const onFieldTouch = useCallback(() => {
    if (started.current) return;
    started.current = true;
    startedAt.current = Date.now();
    trackFormStart(formName);
  }, [formName]);

  const onValidationError = useCallback(() => {
    trackFormValidationError(formName, 1);
  }, [formName]);

  const onSubmitResult = useCallback(
    (success: boolean, leadParams?: LeadParams) => {
      const timeToCompleteMs = startedAt.current ? Date.now() - startedAt.current : undefined;
      trackFormSubmit({ formName, success, timeToCompleteMs });
      if (success) {
        trackLead({
          formName,
          country:              leadParams?.country,
          estimatedMonthlyLots: leadParams?.estimatedMonthlyLots,
          currentBroker:        leadParams?.currentBroker,
        });
      }
    },
    [formName]
  );

  return { onFieldTouch, onValidationError, onSubmitResult };
}
