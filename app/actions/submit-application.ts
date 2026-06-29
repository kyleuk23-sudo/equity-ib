"use server";

import { createClient }         from "@/lib/supabase/server";
import type { ApplicationSource } from "@/lib/supabase/types";

export interface ApplicationPayload {
  name:           string;
  email:          string;
  phone?:         string;
  telegram?:      string;
  country:        string;
  current_broker?: string;
  monthly_lots:   string;
  years_as_ib?:   string;
  website?:       string;
  message?:       string;
  source?:        ApplicationSource;
}

export interface ActionResult {
  success: boolean;
  error?:  string;
}

export async function submitApplication(
  payload: ApplicationPayload,
): Promise<ActionResult> {
  const supabase = createClient();

  const { error } = await supabase.from("ib_applications").insert({
    name:           payload.name.trim(),
    email:          payload.email.trim().toLowerCase(),
    phone:          payload.phone?.trim()          || null,
    telegram:       payload.telegram?.trim()       || null,
    country:        payload.country.trim(),
    current_broker: payload.current_broker?.trim() || null,
    monthly_lots:   payload.monthly_lots,
    years_as_ib:    payload.years_as_ib            || null,
    website:        payload.website?.trim()        || null,
    message:        payload.message?.trim()        || null,
    source:         payload.source ?? "homepage",
  });

  if (error) {
    console.error("[submitApplication]", error.message);
    return { success: false, error: "Unable to submit your application. Please try again." };
  }

  return { success: true };
}
