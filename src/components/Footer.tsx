import Link from "next/link";
import { INSTAGRAM, STUDIOS } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Link href="/" className="logo" style={{ fontSize: 22 }}>
              Dee Studio
              <small>Wien</small>
            </Link>
            <p style={{ marginTop: 24, maxWidth: 300, color: "#a3a3a0" }}>
              Nails, Lashes und Head Spa. Zwei Studios in Wien.
            </p>
            <p style={{ marginTop: 16 }}>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
                Instagram @dee.studio.wien
              </a>
            </p>
          </div>
          {STUDIOS.map((s) => (
            <div key={s.slug}>
              <h2>{s.brand}</h2>
              <ul>
                <li>{s.street}</li>
                <li>{s.city}</li>
                <li>
                  <a href={s.phoneHref}>{s.phone}</a>
                </li>
                {s.email && (
                  <li>
                    <a href={`mailto:${s.email}`}>{s.email}</a>
                  </li>
                )}
                <li style={{ marginTop: 8 }}>
                  <Link href={`/studio/${s.slug}`} style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>
                    Studio ansehen
                  </Link>
                </li>
              </ul>
            </div>
          ))}
          <div>
            <h2>Öffnungszeiten</h2>
            <ul>
              {STUDIOS[0].hours.map((h) => (
                <li key={h.days}>
                  {h.days}: {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Dee Studio Wien</span>
          <nav aria-label="Rechtliches">
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
