import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import JsonLd, { salonLd } from "@/components/JsonLd";
import { STUDIOS, studioPath } from "@/data/site";
import { HYGIENE, LETTER, RATING, REVIEWS, REVIEW_LINKS, TEAM, VALUES } from "@/data/home";
import { ARTICLES } from "@/data/magazin";

export const metadata: Metadata = {
  title: "Dee Studio Wien | Nagelstudios Neubaugürtel & Fasangasse",
  description:
    "Dee Studio Wien: zwei Nagelstudios. Dee Studio am Neubaugürtel (1150) mit Nails, Lashes und Head Spa, Vanilla by Dee in der Fasangasse (1030).",
  alternates: { canonical: "/" },
};

/** Group landing page: who we are, then one entrance per studio. */
export default function LandingPage() {
  return (
    <>
      <Header transparent />
      {STUDIOS.map((s) => (
        <JsonLd key={s.slug} data={salonLd(s)} />
      ))}
      <main>
        {/* HERO */}
        <section className="hero hero-short">
          <Image src="/images/studio/dee-studio-neubauguertel-innen.webp" alt="Dee Studio Wien" fill priority sizes="100vw" />
          <div className="wrap hero-inner">
            <h1 className="display h-xl">
              Ja! Das ist
              <br />
              Dee Studio!
            </h1>
            <p className="serif hero-sub">Zwei Studios in Wien</p>
            <div className="btn-row center">
              <a className="btn btn-light" href="#studios">
                Studio wählen
              </a>
              <a className="btn btn-outline-light" href="#ueber-uns">
                Über uns
              </a>
            </div>
          </div>
        </section>

        {/* LETTER */}
        <section id="ueber-uns" className="section">
          <div className="wrap split">
            <Reveal>
              <div className="media" style={{ aspectRatio: "4 / 5" }}>
                <Image src={LETTER.image} alt="Empfang bei Dee Studio Wien" fill sizes="(max-width: 860px) 100vw, 50vw" />
              </div>
            </Reveal>
            <Reveal delay={100} className="letter">
              <p className="eyebrow">Über uns</p>
              <h2 className="display h-lg" style={{ margin: "14px 0 28px" }}>
                {LETTER.title}
              </h2>
              {LETTER.paragraphs.map((p) => (
                <p key={p} className="lead">
                  {p}
                </p>
              ))}
              <p className="serif letter-sign">{LETTER.signature}</p>
            </Reveal>
          </div>
        </section>

        {/* VISION / MISSION / PHILOSOPHY */}
        <section id="philosophie" className="section section-dark">
          <div className="wrap">
            <Reveal className="section-head center">
              <p className="eyebrow">Wofür wir stehen</p>
              <h2 className="display h-lg">Vision, Mission &amp; Philosophie</h2>
            </Reveal>
            <ul className="values">
              {VALUES.map((v, i) => (
                <Reveal as="li" key={v.key} delay={i * 80} className="value">
                  <p className="eyebrow">{v.label}</p>
                  <h3 className="display h-sm">{v.title}</h3>
                  <p>{v.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="section">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">Team</p>
              <h2 className="display h-lg">Die Menschen hinter Dee Studio</h2>
              <p className="lead">{TEAM.intro}</p>
            </Reveal>
            <ul className="team-grid">
              {TEAM.groups.map((g, i) => (
                <Reveal as="li" key={g.title} delay={i * 80} className="group">
                  <div className="media bw zoom" style={{ aspectRatio: "4 / 5" }}>
                    <Image src={g.image} alt={g.title} fill sizes="(max-width: 860px) 100vw, 33vw" />
                  </div>
                  <h3 className="display h-sm" style={{ marginTop: 16 }}>
                    {g.title}
                  </h3>
                  <p className="team-text">{g.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* HYGIENE */}
        <section id="hygiene" className="section section-alt">
          <div className="wrap split top">
            <Reveal>
              <p className="eyebrow">Sicherheit</p>
              <h2 className="display h-lg" style={{ margin: "14px 0 24px" }}>
                Hygiene &amp; Sauberkeit
              </h2>
              <p className="lead">{HYGIENE.intro}</p>
              <div className="media" style={{ aspectRatio: "4 / 3", marginTop: 32 }}>
                <Image src={HYGIENE.image} alt="Saubere Behandlungsplätze bei Dee Studio" fill sizes="(max-width: 860px) 100vw, 50vw" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <ol className="hygiene-list">
                {HYGIENE.items.map((h, i) => (
                  <li key={h.title}>
                    <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="display h-sm">{h.title}</h3>
                      <p>{h.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        {/* STUDIO ENTRANCES */}
        <section id="studios" className="section">
          <div className="wrap">
            <Reveal className="section-head center">
              <p className="eyebrow">Wählen Sie Ihr Studio</p>
              <h2 className="display h-lg">Unsere Studios</h2>
            </Reveal>
            <div className="studio-grid">
              {STUDIOS.map((s, i) => (
                <Reveal key={s.slug} delay={i * 100}>
                  <Link href={studioPath(s)} className="studio-card entry group">
                    <div className="media bw zoom">
                      <Image src={s.cover} alt={`${s.brand}, ${s.location}`} fill sizes="(max-width: 600px) 100vw, 50vw" />
                    </div>
                    <div className="studio-card-body">
                      <div>
                        <p className="eyebrow">
                          {s.location}, {s.district}
                        </p>
                        <h3 className="display h-lg" style={{ marginTop: 10 }}>
                          {s.brand}
                        </h3>
                        <p>{s.tagline}</p>
                      </div>
                      <span className="btn btn-primary">Zum Studio</span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="bewertungen" className="section section-dark">
          <div className="wrap">
            <Reveal className="section-head center">
              <p className="eyebrow">Bewertungen</p>
              <h2 className="display h-lg">Was unsere Kundinnen sagen</h2>
            </Reveal>
            <Reveal className="rating">
              <p className="rating-value">
                {RATING.value}
                <span> / 5</span>
              </p>
              <div className="rating-stars" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} />
                ))}
              </div>
              <p className="eyebrow">
                {RATING.source} Bewertung, {RATING.studio}
              </p>
              {REVIEWS.length === 0 && (
                <p className="lead" style={{ marginTop: 16 }}>
                  Lesen Sie die Erfahrungen unserer Kundinnen direkt auf Google und Treatwell.
                </p>
              )}
            </Reveal>
            {REVIEWS.length > 0 && (
              <ul className="values">
                {REVIEWS.map((r) => (
                  <li key={r.name + r.text.slice(0, 20)} className="value">
                    <p>{r.text}</p>
                    <p className="eyebrow" style={{ marginTop: 16 }}>
                      {r.name}, {r.source}
                    </p>
                  </li>
                ))}
              </ul>
            )}
            <div className="btn-row center" style={{ marginTop: 40 }}>
              {REVIEW_LINKS.map((l) => (
                <a key={l.href} className="btn btn-outline-light" href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* MAGAZIN */}
        <section id="magazin" className="section">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">Magazin</p>
              <h2 className="display h-lg">Wissen &amp; Tipps</h2>
            </Reveal>
            <ul className="article-grid">
              {ARTICLES.map((a, i) => (
                <Reveal as="li" key={a.slug} delay={i * 80}>
                  <Link href={`/magazin/${a.slug}`} className="article-card group">
                    <div className="media bw zoom">
                      <Image src={a.image} alt={a.imageAlt} fill sizes="(max-width: 860px) 100vw, 33vw" />
                    </div>
                    <p className="eyebrow" style={{ marginTop: 16 }}>
                      {a.readMin} Min. Lesezeit
                    </p>
                    <h3 className="display h-sm" style={{ marginTop: 8 }}>
                      {a.h1}
                    </h3>
                  </Link>
                </Reveal>
              ))}
            </ul>
            <div className="btn-row" style={{ marginTop: 40 }}>
              <Link href="/magazin" className="btn btn-secondary">
                Alle Artikel
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
