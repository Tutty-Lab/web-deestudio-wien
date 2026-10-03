"use client";

import { useState } from "react";

/**
 * Google Maps is only requested after the visitor opts in (two-click solution),
 * so no personal data goes to Google on page load (DSGVO).
 */
export default function MapEmbed({ query, title }: { query: string; title: string }) {
  const [load, setLoad] = useState(false);
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=16&output=embed`;

  return (
    <div className="map-box">
      {load ? (
        <iframe title={title} src={src} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      ) : (
        <div className="map-consent">
          <p>Mit dem Laden der Karte werden Daten an Google übertragen.</p>
          <button className="btn btn-secondary btn-sm" onClick={() => setLoad(true)}>
            Karte laden
          </button>
        </div>
      )}
    </div>
  );
}
