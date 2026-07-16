import { gtagEvent } from "./gtag";

/**
 * Named event helpers matching the site's GA4 event taxonomy. Nothing here
 * ever accepts or forwards PII (names, emails, phone numbers, message
 * bodies) — only structural/categorical values.
 */

export function trackCtaClick(params: { label: string; section: string; page?: string }) {
  gtagEvent("cta_click", {
    button_text: params.label,
    section:     params.section,
    page:        params.page ?? (typeof location !== "undefined" ? location.pathname : undefined),
  });
}

export function trackNavClick(params: { label: string; location: "header" | "footer" | "mobile_menu" }) {
  gtagEvent("nav_click", { link_text: params.label, nav_location: params.location });
}

export function trackOutboundClick(url: string) {
  gtagEvent("outbound_click", { link_url: url });
}

export function trackPhoneClick(number: string) {
  gtagEvent("phone_click", { phone_number: number });
}

export function trackEmailClick(address: string) {
  gtagEvent("email_click", { email_domain: address.split("@")[1] ?? "unknown" });
}

export function trackTelegramClick() {
  gtagEvent("telegram_click", {});
}

export function trackFormStart(formName: string) {
  gtagEvent("form_start", { form_name: formName });
}

export function trackFormValidationError(formName: string, fieldCount: number) {
  gtagEvent("form_validation_error", { form_name: formName, invalid_field_count: fieldCount });
}

export function trackFormSubmit(params: { formName: string; success: boolean; timeToCompleteMs?: number }) {
  gtagEvent(params.success ? "form_submit_success" : "form_submit_failure", {
    form_name:           params.formName,
    time_to_complete_ms: params.timeToCompleteMs,
  });
}

/** Primary conversion. No name/email/phone/message — only structural fields. */
export function trackLead(params: {
  formName: string;
  country?: string;
  estimatedMonthlyLots?: string;
  currentBroker?: string;
}) {
  gtagEvent("generate_lead", {
    form_name:              params.formName,
    page_location:          typeof location !== "undefined" ? location.href : undefined,
    country:                params.country || undefined,
    estimated_monthly_lots: params.estimatedMonthlyLots || undefined,
    current_broker:         params.currentBroker || undefined,
  });
}

export function trackScrollDepth(percent: 25 | 50 | 75 | 100) {
  gtagEvent("scroll_depth", { percent_scrolled: percent });
}

export function trackCalculatorOpen() {
  gtagEvent("calculator_open", {});
}

export function trackCalculatorInteraction(params: { clients: number; avgLots: number; totalLots: number }) {
  gtagEvent("lots_selected", {
    clients:    params.clients,
    avg_lots:   params.avgLots,
    total_lots: params.totalLots,
  });
}

export function trackTierViewed(tierName: string) {
  gtagEvent("tier_viewed", { tier_name: tierName });
}

export function trackFaqExpand(question: string) {
  gtagEvent("faq_expand", { question });
}

export function trackNotFound(path: string) {
  gtagEvent("page_not_found", { page_path: path });
}
