import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import BookButton from "@/components/BookButton";
import StudioInfo from "@/components/StudioInfo";
import { PRICES, SERVICES, STUDIOS } from "@/data/site";

const base = "/b";
const highlights: [string, string][] = [
  ["Neues Set mit Farbe", "53 €"],
  ["Gel-X mit Farbe", "50 €"],
  ["Shellac mit Farbe", "30 €"],
  ["Maniküre mit Shellac", "38 €"],
  ["Deluxe Pediküre", "60 €"],
  ["Hände + Pediküre Kombi", "ab 99 €"],
];

export default function HomeB() {
  return (
    <>
      <Header base={base} overHero />
      <main>
        {/* SPLIT HERO */}
        <section className="split on-dark">
          {STUDIOS.map((s) => (
            <Link key={s.slug} href={`${base}/studio/${s.slug}`} className="split-half">
              <Image src={s.cover} alt={s.brand} fill priority sizes="(max-width: 800px) 100vw, 60vw" />
              <div className="split-body">
                <div>
                  <p className="eyebrow" style={{ color: "rgba(255,255,255,.7)", margin: 0 }}>
                    {s.district}
                  </p>
                  <h2 className="display h-md" style={{ margin: "10px 0 0" }}>
                    {s.brand}
                  </h2>
                  <p style={{ margin: "6px 0 0", opacity: 0.8 }}>{s.street}</p>
                </div>
                <span className="link-arrow">Entdecken →</span>
              </div>
            </Link>
          ))}
          <div className="split-center">
            <p className="eyebrow" style={{ color: "rgba(255,255,255,.75)" }}>
              Nails · Lashes · Head Spa
            </p>
            <h1 className="display h-xl" style={{ margin: "14px 0 0" }}>
              Dee Studio
            </h1>
            <p className="serif" style={{ fontSize: "clamp(22px,2.4vw,34px)", margin: "8px 0 0" }}>
              zwei Studios in Wien
            </p>
          </div>
        </section>

        {/* STATEMENT */}
        <section className="section">
          <div className="wrap two-col">
            <Reveal>
              <p className="eyebrow">Über uns</p>
              <h2 className="display h-lg" style={{ margin: "18px 0 0" }}>
                Zwei Studios.
                <br />
                <span className="serif" style={{ fontSize: "1.1em" }}>
                  eine
                </span>{" "}
                Handschrift.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="lead">
                Am Neubaugürtel hat alles begonnen – mit Nail Art, die niemanden sprachlos lässt. In der Fasangasse
                öffnet Vanilla by Dee ein neues Kapitel: Lashes, Head Spa und Momente zum Abschalten.
              </p>
              <p className="lead">
                Beide Studios teilen denselben Anspruch: handverlesene Artists, beste Produkte, und ein Ort, an dem
                Sie sich vom ersten Moment an wohlfühlen.
              </p>
              <div style={{ marginTop: 32 }}>
                <BookButton className="btn btn-solid" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* SERVICES LIST */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">Behandlungen</p>
              <h2 className="display h-lg" style={{ margin: 0 }}>
                Services
              </h2>
            </Reveal>
            <div>
              {SERVICES.map((s, i) => (
                <Reveal key={s.key} className="svc-row">
                  <span className="svc-num">0{i + 1}</span>
                  <h3 className="display h-md" style={{ margin: 0 }}>
                    {s.title}
                  </h3>
                  <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.6 }}>{s.lead}</p>
                  <span className="svc-from eyebrow" style={{ color: "var(--fg)" }}>
                    {s.from}
                  </span>
                  <div className="svc-thumb media">
                    <Image src={s.image} alt="" fill sizes="180px" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PRICE HIGHLIGHT */}
        <section className="section section-invert">
          <div className="wrap two-col" style={{ alignItems: "start" }}>
            <Reveal>
              <p className="eyebrow">Preise</p>
              <h2 className="display h-lg" style={{ margin: "18px 0 24px" }}>
                Beliebt
                <br />
                <span className="serif">bei uns</span>
              </h2>
              <p className="lead">
                Eine Auswahl unserer Lieblingsbehandlungen. Die vollständige Preisliste mit {PRICES.length} Kategorien
                finden Sie hier.
              </p>
              <Link href={`${base}/preise`} className="link-arrow" style={{ marginTop: 24 }}>
                Vollständige Preisliste →
              </Link>
            </Reveal>
            <Reveal delay={120}>
              {highlights.map(([n, v]) => (
                <div key={n} className="price-row" style={{ fontSize: 17, padding: "18px 0" }}>
                  <span>{n}</span>
                  <span className="dots" />
                  <span className="val">{v}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* GALLERY */}
        <section className="section">
          <div className="wrap">
            <Reveal className="section-head center">
              <p className="eyebrow">Portfolio</p>
              <h2 className="display h-lg" style={{ margin: 0 }}>
                Nail Art <span className="serif">&amp;</span> mehr
              </h2>
            </Reveal>
            <Gallery />
          </div>
        </section>

        {/* LOCATIONS */}
        <section className="section section-alt">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">Standorte</p>
              <h2 className="display h-lg" style={{ margin: 0 }}>
                Besuchen Sie uns
              </h2>
            </Reveal>
            <div className="info-grid">
              {STUDIOS.map((s, i) => (
                <Reveal key={s.slug} delay={i * 120}>
                  <StudioInfo studio={s} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
