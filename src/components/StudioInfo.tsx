import type { Studio } from "@/data/site";
import BookButton from "./BookButton";
import MapEmbed from "./MapEmbed";

type Props = { studio: Studio; showMap?: boolean; showTitle?: boolean };

export default function StudioInfo({ studio, showMap = true, showTitle = true }: Props) {
  return (
    <div className="info-block">
      {showTitle && (
        <div>
          <p className="eyebrow">{studio.district}</p>
          <h3 className="display h-md" style={{ marginTop: 10 }}>
            {studio.brand}
          </h3>
        </div>
      )}
      <ul className="info-list">
        <li>
          <span>Adresse</span>
          <span>
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
        <ul className="info-list plain">
          {studio.transit.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      )}
      <div className="btn-row">
        <BookButton studio={studio.slug} className="btn btn-primary" />
        <a
          className="btn btn-secondary"
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(studio.mapQuery)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Route planen
        </a>
      </div>
      {showMap && <MapEmbed query={studio.mapQuery} title={`Karte ${studio.brand}`} />}
    </div>
  );
}
