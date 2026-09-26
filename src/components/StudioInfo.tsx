import type { Studio } from "@/data/site";
import BookButton from "./BookButton";

export function mapSrc(s: Studio) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(s.mapQuery)}&z=16&output=embed`;
}

export default function StudioInfo({ studio, showMap = true }: { studio: Studio; showMap?: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      <div>
        <p className="eyebrow" style={{ margin: 0 }}>
          {studio.district}
        </p>
        <h3 className="display h-md" style={{ margin: "12px 0 0" }}>
          {studio.brand}
        </h3>
        <p style={{ margin: "6px 0 0", color: "var(--muted)" }}>{studio.location}</p>
      </div>
      <ul className="info-list">
        <li>
          <span>Adresse</span>
          <span style={{ textAlign: "right" }}>
            {studio.street}, {studio.city}
          </span>
        </li>
        <li>
          <span>Telefon</span>
          <a href={studio.phoneHref}>{studio.phone}</a>
        </li>
        {studio.hours.map((h) => (
          <li key={h.days}>
            <span>{h.days}</span>
            <span>{h.time}</span>
          </li>
        ))}
      </ul>
      {studio.transit && (
        <ul className="info-list" style={{ fontSize: 14, color: "var(--muted)" }}>
          {studio.transit.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      )}
      <div className="cta-row" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <BookButton studio={studio.slug} className="btn btn-solid" />
        <a
          className="btn"
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(studio.mapQuery)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Route
        </a>
      </div>
      {showMap && (
        <iframe className="map" title={`Karte ${studio.brand}`} src={mapSrc(studio)} loading="lazy" />
      )}
    </div>
  );
}
