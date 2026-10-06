import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Rating from "@/components/Rating";
import HeroShow from "@/components/HeroShow";
import FAQ from "@/components/FAQ";
import { GENERAL_FAQ } from "@/data/faq";
import JsonLd, { faqLd, salonLd } from "@/components/JsonLd";
import { STUDIOS, studioPath } from "@/data/site";
import { GREETING, HYGIENE, LETTER, RATINGS, REVIEWS, VALUES } from "@/data/home";
import { ARTICLES } from "@/data/magazin";

export const metadata: Metadata = {
  title: "Dee Studio Wien | Nagelstudios Neubaugürtel & Fasangasse",
  description:
    "Dee Studio Wien: zwei Nagelstudios. Dee Studio am Neubaugürtel (1150) mit Nails, Lashes, Head Spa und Massage, Vanilla by Dee in der Fasangasse (1030).",
  alternates: { canonical: "/" },
};

const HERO_IMAGES = [
  { src: "/images/studio/dee-studio-lounge-neubauguertel.jpg", alt: "Lounge von Dee Studio" },
  { src: "/images/nails/french-nails-weiss-steine-wien.webp", alt: "French Nails" },
  { src: "/images/headspa/head-spa-liegen-dee-studio.jpg", alt: "Head Spa bei Dee Studio" },
  { src: "/images/studio/vanilla-by-dee-nagelplaetze-fasangasse.jpg", alt: "Vanilla by Dee" },
  { src: "/images/nails/nail-art-smiley-schachbrett-wien.webp", alt: "Nail Art" },
];

/** Group start page. Company sections are short teasers; the full text lives on the static pages. */
export default function LandingPage() {
  const rating = RATINGS[0];
  const studioOf = (slug: string) => STUDIOS.find((s) => s.slug === slug);

  return (
    <>
      <Header transparent />
      {STUDIOS.map((s) => (
        <JsonLd key={s.slug} data={salonLd(s)} />
      ))}
      <JsonLd data={faqLd(GENERAL_FAQ)} />
      <main>
        {/* 1. HERO */}
        <HeroShow images={HERO_IMAGES} lines={["Ja! Das ist", "Dee Studio!"]} sub="Zwei Studios in Wien">
          <div className="btn-row center">
            <a className="btn btn-light" href="#studios">
              Studio wählen
            </a>
            <Link className="btn btn-outline-light" href="/ueber-uns">
              Über uns
            </Link>
          </div>
        </HeroShow>

        {/* 2. GREETING + STUDIOS */}
        <section id="studios" className="section">
          <div className="wrap">
            <Reveal className="section-head center">
              <p className="eyebrow">Unsere Studios</p>
              <h2 className="display h-lg">Wählen Sie Ihr Studio</h2>
              <p className="lead">{GREETING}</p>
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
                          {s.street}, {s.district}
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

        {/* 3. LETTER (short) */}
        <section className="section section-alt">
          <div className="wrap split">
            <Reveal>
              <div className="media" style={{ aspectRatio: "4 / 5" }}>
                <Image src={LETTER.image} alt="Empfang bei Dee Studio Wien" fill sizes="(max-width: 860px) 100vw, 50vw" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="eyebrow">Über uns</p>
              <h2 className="display h-lg" style={{ margin: "14px 0 24px" }}>
                {LETTER.title}
              </h2>
              <p className="lead">{LETTER.excerpt}</p>
              <p className="serif letter-sign">{LETTER.signature}</p>
              <div className="btn-row" style={{ marginTop: 32 }}>
                <Link href="/ueber-uns" className="btn btn-secondary">
                  Ganzen Brief lesen
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 4. VISION / MISSION (short) */}
        <section className="section section-dark">
          <div className="wrap">
            <Reveal className="section-head center">
              <p className="eyebrow">Wofür wir stehen</p>
              <h2 className="display h-lg">Vision, Mission &amp; Philosophie</h2>
            </Reveal>
            <ul className="values">
              {VALUES.map((v, i) => (
                <Reveal as="li" key={v.key} delay={i * 80} className="value">
                  <Link href={`/philosophie#${v.key}`}>
                    <p className="eyebrow">{v.label}</p>
                    <h3 className="display h-sm">{v.title}</h3>
                  </Link>
                </Reveal>
              ))}
            </ul>
            <div className="btn-row center" style={{ marginTop: 40 }}>
              <Link href="/philosophie" className="btn btn-outline-light">
                Mehr erfahren
              </Link>
            </div>
          </div>
        </section>

        {/* 5. HYGIENE (short) */}
        <section className="section">
          <div className="wrap split top">
            <Reveal>
              <p className="eyebrow">Sicherheit</p>
              <h2 className="display h-lg" style={{ margin: "14px 0 24px" }}>
                Hygiene &amp; Sauberkeit
              </h2>
              <p className="lead">{HYGIENE.intro}</p>
              <div className="btn-row" style={{ marginTop: 32 }}>
                <Link href="/hygiene" className="btn btn-secondary">
                  Unsere Hygieneregeln
                </Link>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <ol className="hygiene-list">
                {HYGIENE.items.slice(0, 3).map((h, i) => (
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

        {/* 7. REVIEWS (short) */}
        <section className="section section-dark">
          <div className="wrap">
            <Reveal className="section-head center">
              <p className="eyebrow">Bewertungen</p>
              <h2 className="display h-lg">Was unsere Kundinnen sagen</h2>
            </Reveal>
            {rating && <Rating value={rating.value} label={`${rating.source} Bewertung, ${studioOf(rating.studio)?.brand}`} />}
            {REVIEWS.length > 0 && (
              <ul className="values" style={{ marginTop: 48 }}>
                {REVIEWS.slice(0, 3).map((r) => (
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
              <Link href="/bewertungen" className="btn btn-outline-light">
                Alle Bewertungen
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-alt" id="faq">
          <div className="wrap" style={{ maxWidth: 900 }}>
            <Reveal className="section-head center">
              <p className="eyebrow">FAQ</p>
              <h2 className="display h-lg">Häufige Fragen</h2>
            </Reveal>
            <FAQ items={GENERAL_FAQ} />
          </div>
        </section>

        {/* 8. MAGAZIN */}
        <section className="section">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">Magazin</p>
              <h2 className="display h-lg">Wissen &amp; Tipps</h2>
            </Reveal>
            <ul className="article-grid">
              {ARTICLES.slice(0, 3).map((a, i) => (
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
