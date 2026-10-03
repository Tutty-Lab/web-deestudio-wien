"use client";

import { useState } from "react";

/**
 * Google Maps is only requested after the visitor opts in (two-click solution),
 * so no personal data goes to Google on page load (DSGVO).
 */
export default function MapEmbed({ query, title }: { query: string; title: string }) {
  const [load, setLoad] = useState(false);
  const q = encodeURIComponent(query);

  return (
    <div className="map-box">
      {load ? (
        <iframe title={title} src={`https://www.google.com/maps?q=${q}&z=16&output=embed`} />
      ) : (
        <div className="map-consent">
          <p className="map-address">{query}</p>
          <button className="btn btn-secondary btn-sm" onClick={() => setLoad(true)}>
            Karte anzeigen
          </button>
          <a
            className="map-external"
            href={`https://www.google.com/maps/search/?api=1&query=${q}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            In Google Maps öffnen
          </a>
          <p>Beim Anzeigen der Karte werden Daten an Google übertragen.</p>
        </div>
      )}
    </div>
  );
}
