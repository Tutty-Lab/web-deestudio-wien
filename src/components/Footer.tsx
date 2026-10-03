import Link from "next/link";
import { INSTAGRAM, STUDIOS, studioPath, type Studio } from "@/data/site";
import { STYLES } from "@/data/gallery";

/** Footer of a studio sub-site, or the group footer on the landing page when no studio is given. */
export default function Footer({ studio }: { studio?: Studio }) {
  const others = STUDIOS.filter((s) => s.slug !== studio?.slug);

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Link href={studio ? studioPath(studio) : "/"} className="logo" style={{ fontSize: 22 }}>
              {studio ? studio.brand : "Dee Studio"}
              <small>{studio ? studio.location : "Wien"}</small>
            </Link>
            <p style={{ marginTop: 24, maxWidth: 300, color: "#a3a3a0" }}>
              {studio ? studio.tagline : "Nails, Lashes und Head Spa. Zwei Studios in Wien."}
            </p>
            <p style={{ marginTop: 16 }}>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
                Instagram @dee.studio.wien
              </a>
            </p>
          </div>

          {studio ? (
            <>
              <div>
                <h2>Kontakt</h2>
                <ul>
                  <li>{studio.street}</li>
                  <li>{studio.city}</li>
                  <li>
                    <a href={studio.phoneHref}>{studio.phone}</a>
                  </li>
                  {studio.email && (
                    <li>
                      <a href={`mailto:${studio.email}`}>{studio.email}</a>
                    </li>
                  )}
                </ul>
              </div>
              <div>
                <h2>Öffnungszeiten</h2>
                <ul>
                  {studio.hours.map((h) => (
                    <li key={h.days}>
                      {h.days}: {h.time}
                    </li>
                  ))}
                </ul>
              </div>
              {studio.gallery ? (
                <div>
                  <h2>Galerie</h2>
                  <ul>
                    {STYLES.map((s) => (
                      <li key={s.slug}>
                        <Link href={studioPath(studio, `galerie/${s.slug}`)}>{s.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div />
              )}
            </>
          ) : (
            STUDIOS.map((s) => (
              <div key={s.slug}>
                <h2>{s.brand}</h2>
                <ul>
                  <li>{s.street}</li>
                  <li>{s.city}</li>
                  <li>
                    <a href={s.phoneHref}>{s.phone}</a>
                  </li>
                  <li style={{ marginTop: 8 }}>
                    <Link href={studioPath(s)} style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>
                      Zum Studio
                    </Link>
                  </li>
                </ul>
              </div>
            ))
          )}

          {studio && (
            <div>
              <h2>Weitere Studios</h2>
              <ul>
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link href={studioPath(s)} style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>
                      {s.brand}
                    </Link>
                    <br />
                    {s.street}, {s.city}
                  </li>
                ))}
              </ul>
            </div>
          )}
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
