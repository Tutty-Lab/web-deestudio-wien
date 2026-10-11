"use client";

import { useEffect, useState } from "react";
import { hasAnalyticsConsent } from "./CookieConsent";

/**
 * Shows a self-hosted, colored map image right away (OpenStreetMap data, no request to Google).
 * The interactive Google map loads automatically once the visitor accepted all cookies, or on click (DSGVO).
 */
export default function MapEmbed({ query, title, image }: { query: string; title: string; image: string }) {
  const [load, setLoad] = useState(false);
  const q = encodeURIComponent(query);
  const external = `https://www.google.com/maps/search/?api=1&query=${q}`;

  useEffect(() => {
    const sync = () => hasAnalyticsConsent() && setLoad(true);
    sync();
    window.addEventListener("consent-change", sync);
    return () => window.removeEventListener("consent-change", sync);
  }, []);

  return (
    <div className="map-box">
      {load ? (
        <iframe title={title} src={`https://www.google.com/maps?q=${q}&z=16&output=embed`} loading="lazy" />
      ) : (
        <>
          <a className="map-static" href={external} target="_blank" rel="noopener noreferrer" aria-label={`${query} in Google Maps öffnen`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt={`Karte: ${query}`} loading="lazy" />
          </a>
          <div className="map-bar">
            <span className="map-address">{query}</span>
            <button className="btn btn-secondary btn-sm" onClick={() => setLoad(true)}>
              Interaktive Karte
            </button>
          </div>
          <span className="map-credit">© OpenStreetMap-Mitwirkende</span>
        </>
      )}
    </div>
  );
}
