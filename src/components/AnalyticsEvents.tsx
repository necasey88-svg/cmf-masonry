"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

// Globally intercepts clicks on tel: links and key CTA links so call/lead
// intent is tracked in GA4 without wiring an onClick into every instance.
export default function AnalyticsEvents() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement)?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";

      if (href.startsWith("tel:")) {
        trackEvent("phone_click", { link_url: href });
      } else if (href.startsWith("/estimate")) {
        trackEvent("estimate_cta_click", { link_url: href });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
