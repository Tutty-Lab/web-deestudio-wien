import Link from "next/link";
import { INSTAGRAM, STUDIOS } from "@/data/site";

export default function Footer({ base }: { base: string }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <div className="logo" style={{ justifySelf: "start", textAlign: "left", fontSize: 24 }}>
              Dee Studio
            </div>
            <p style={{ marginTop: 20, maxWidth: 320, color: "#a8a8a4" }}>
              Nails · Lashes · Head Spa. Zwei Studios, ein Anspruch – Relax. Refresh. Glow.
            </p>
            <p style={{ marginTop: 20 }}>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
                @dee.studio.wien
              </a>
            </p>
          </div>
          {STUDIOS.map((s) => (
            <div key={s.slug}>
              <h4>{s.brand}</h4>
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
                  <Link href={`${base}/studio/${s.slug}`}>Studio ansehen →</Link>
                </li>
              </ul>
            </div>
          ))}
          <div>
            <h4>Öffnungszeiten</h4>
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
          <span style={{ display: "flex", gap: 24 }}>
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
