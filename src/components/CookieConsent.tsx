"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "dee-consent-v1";
type Choice = "all" | "necessary";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Load Google Analytics only after consent (DSGVO). Consent Mode v2 starts denied. */
function loadAnalytics() {
  if (!GA_ID || window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("consent", "default", { ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", analytics_storage: "granted" });
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { anonymize_ip: true });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
}

const read = (): Choice | null => {
  try {
    const v = localStorage.getItem(KEY);
    return v === "all" || v === "necessary" ? v : null;
  } catch {
    return null;
  }
};

export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const choice = read();
    if (choice === "all") loadAnalytics();
    if (!choice) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener("open-cookie-settings", reopen);
    return () => window.removeEventListener("open-cookie-settings", reopen);
  }, []);

  const decide = (choice: Choice) => {
    const before = read();
    try {
      localStorage.setItem(KEY, choice);
    } catch {}
    setOpen(false);
    if (choice === "all") loadAnalytics();
    // Withdrawing consent: reload so the analytics script is gone.
    else if (before === "all") window.location.reload();
  };

  if (!open) return null;

  return (
    <div className="cookie" role="dialog" aria-live="polite" aria-label="Cookie-Einstellungen">
      <p>
        Wir verwenden notwendige Cookies für den Betrieb der Website. Mit Ihrer Zustimmung nutzen wir außerdem Google
        Analytics, um unsere Website zu verbessern. Mehr in der <Link href="/datenschutz">Datenschutzerklärung</Link>.
      </p>
      <div className="cookie-actions">
        <button className="btn btn-secondary btn-sm" onClick={() => decide("necessary")}>
          Nur notwendige
        </button>
        <button className="btn btn-primary btn-sm" onClick={() => decide("all")}>
          Alle akzeptieren
        </button>
      </div>
    </div>
  );
}

/** Footer link to change the cookie choice later. */
export function CookieSettingsLink() {
  return (
    <button className="footer-linkbtn" onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}>
      Cookie-Einstellungen
    </button>
  );
}
