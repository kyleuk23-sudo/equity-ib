"use server";

import { createClient }        from "@/lib/supabase/server";
import type { SubscriberSource } from "@/lib/supabase/types";

export interface SubscribePayload {
  email:  string;
  source: SubscriberSource;
}

export interface SubscribeResult {
  success:  boolean;
  error?:   string;
  /** True when the email was already subscribed — treat as a soft success in the UI. */
  alreadySubscribed?: boolean;
}

export async function subscribe(payload: SubscribePayload): Promise<SubscribeResult> {
  const supabase = createClient();

  const { error } = await supabase.from("subscribers").insert({
    email:  payload.email.trim().toLowerCase(),
    source: payload.source,
  });

  if (error) {
    // Unique constraint violation — they're already on the list.
    if (error.code === "23505") {
      return { success: true, alreadySubscribed: true };
    }
    console.error("[subscribe]", error.message);
    return { success: false, error: "Unable to subscribe right now. Please try again." };
  }

  return { success: true };
}
