import Link from "next/link";
import { INSTAGRAM, STUDIOS, studioPath, type Studio } from "@/data/site";
import { STATIC_PAGES } from "@/data/home";

/** Footer of a studio sub-site, or the group footer when no studio is given. */
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
              {studio ? studio.tagline : "Nails, Lashes, Head Spa und Massage. Zwei Studios in Wien."}
            </p>
            <p style={{ marginTop: 16 }}>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
                Instagram @dee.studio.wien
              </a>
            </p>
            {studio && (
              <Link href="/" className="btn btn-outline-light btn-sm" style={{ marginTop: 24 }}>
                Zur Startseite
              </Link>
            )}
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
              <div>
                <h2>{studio.brand}</h2>
                <ul>
                  <li>
                    <Link href={studioPath(studio, "leistungen")}>Leistungen</Link>
                  </li>
                  {studio.headSpa && (
                    <li>
                      <Link href={studioPath(studio, "head-spa")}>Head Spa</Link>
                    </li>
                  )}
                  <li>
                    <Link href={studioPath(studio, "preise")}>Preise</Link>
                  </li>
                  <li>
                    <Link href={studioPath(studio, "galerie")}>Galerie</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2>Weiteres Studio</h2>
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
            </>
          ) : (
            <>
              {STUDIOS.map((s) => (
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
              ))}
              <div>
                <h2>Dee Studio Wien</h2>
                <ul>
                  {STATIC_PAGES.map((p) => (
                    <li key={p.href}>
                      <Link href={p.href}>{p.label}</Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/magazin">Magazin</Link>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Dee Studio Wien</span>
          <nav aria-label="Rechtliches">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
