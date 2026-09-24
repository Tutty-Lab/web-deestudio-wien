import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import BookButton from "@/components/BookButton";
import StudioInfo from "@/components/StudioInfo";
import { SERVICES, STUDIOS } from "@/data/site";

const base = "/a";

export default function HomeA() {
  return (
    <>
      <Header base={base} overHero />
      <main>
        {/* HERO */}
        <section
          className="on-dark"
          style={{ position: "relative", height: "100svh", minHeight: 560, color: "#fff", background: "#000" }}
        >
          <Image
            src="/images/site/g-11.34.webp"
            alt="Dee Studio Nail Art"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", filter: "grayscale(1) brightness(0.55)" }}
          />
          <div
            className="wrap"
            style={{
              position: "relative",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              textAlign: "center",
              paddingBottom: "clamp(56px, 10vh, 120px)",
            }}
          >
            <p className="eyebrow" style={{ color: "rgba(255,255,255,.75)" }}>
              Nails · Lashes · Head Spa — Wien
            </p>
            <h1 className="display h-xl" style={{ margin: "20px 0 36px" }}>
              Ja! Das ist
              <br />
              Dee Studio!
            </h1>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
              <BookButton className="btn" />
              <a className="btn" href="#studios">
                Unsere Studios
              </a>
            </div>
          </div>
        </section>

        {/* STUDIOS */}
        <section id="studios" className="section">
          <div className="wrap">
            <Reveal className="section-head center">
              <p className="eyebrow">Zwei Adressen in Wien</p>
              <h2 className="display h-lg" style={{ margin: 0 }}>
                Unsere Studios
              </h2>
              <span className="rule" />
            </Reveal>
            <div className="studio-grid">
              {STUDIOS.map((s, i) => (
                <Reveal key={s.slug} delay={i * 120}>
                  <Link href={`${base}/studio/${s.slug}`} className="studio-card group">
                    <div className="media bw zoom" style={{ position: "absolute", inset: 0 }}>
                      <Image src={s.cover} alt={s.brand} fill sizes="(max-width: 720px) 100vw, 50vw" />
                    </div>
                    <div className="studio-card-body">
                      <div>
                        <p className="eyebrow" style={{ color: "rgba(255,255,255,.75)", margin: 0 }}>
                          {s.district}
                        </p>
                        <h3 className="display h-md" style={{ margin: "10px 0 0" }}>
                          {s.brand}
                        </h3>
                        <p style={{ margin: "4px 0 0", opacity: 0.8 }}>{s.location}</p>
                      </div>
                      <span className="link-arrow">Ansehen →</span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section section-invert">
          <Reveal className="wrap" >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 28 }}>
              <p className="eyebrow">Über uns</p>
              <h2 className="display h-lg" style={{ margin: 0 }}>
                Relax. Refresh. Glow.
              </h2>
              <p className="lead" style={{ textAlign: "center" }}>
                Bei Dee Studio beginnt wahre Schönheit mit außergewöhnlicher Pflege. Unsere handverlesenen Artists
                arbeiten mit den neuesten Techniken und ausschließlich hochwertigen Produkten – für Nail Art, die
                Ihre Persönlichkeit zeigt, und Momente, in denen Sie ganz abschalten.
              </p>
            </div>
          </Reveal>
        </section>

        {/* SERVICES */}
        <section className="section">
          <div className="wrap">
            <Reveal className="section-head center">
              <p className="eyebrow">Behandlungen</p>
              <h2 className="display h-lg" style={{ margin: 0 }}>
                Services
              </h2>
              <span className="rule" />
            </Reveal>
            <div className="service-grid">
              {SERVICES.map((s, i) => (
                <Reveal key={s.key} delay={i * 90} className="service-tile group">
                  <div className="media bw zoom">
                    <Image src={s.image} alt={s.title} fill sizes="(max-width: 1000px) 50vw, 25vw" />
                  </div>
                  <h3 className="display h-sm">{s.title}</h3>
                  <p>{s.lead}</p>
                  <p style={{ marginTop: 8, color: "var(--fg)", fontSize: 13, letterSpacing: ".1em" }}>{s.from}</p>
                </Reveal>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 56 }}>
              <Link href={`${base}/preise`} className="link-arrow">
                Alle Preise ansehen →
              </Link>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {Array.from({ length: 2 }).map((_, k) => (
              <span key={k} style={{ display: "inline-flex", gap: 48 }}>
                <span>Nails</span>
                <span>✦</span>
                <span>Lashes</span>
                <span>✦</span>
                <span>Head Spa</span>
                <span>✦</span>
                <span>Pediküre</span>
                <span>✦</span>
                <span>Neubaugürtel</span>
                <span>✦</span>
                <span>Fasangasse</span>
                <span>✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* GALLERY */}
        <section className="section">
          <div className="wrap">
            <Reveal className="section-head center">
              <p className="eyebrow">@dee.studio.wien</p>
              <h2 className="display h-lg" style={{ margin: 0 }}>
                Unsere Arbeiten
              </h2>
            </Reveal>
            <Gallery bw limit={12} />
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-alt">
          <div className="wrap" style={{ maxWidth: 920 }}>
            <Reveal className="section-head center">
              <p className="eyebrow">FAQ</p>
              <h2 className="display h-lg" style={{ margin: 0 }}>
                Gut zu wissen
              </h2>
            </Reveal>
            <FAQ />
          </div>
        </section>

        {/* CONTACT */}
        <section className="section" id="kontakt">
          <div className="wrap">
            <Reveal className="section-head center">
              <p className="eyebrow">Besuchen Sie uns</p>
              <h2 className="display h-lg" style={{ margin: 0 }}>
                Kontakt
              </h2>
            </Reveal>
            <div className="info-grid">
              {STUDIOS.map((s) => (
                <Reveal key={s.slug}>
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
