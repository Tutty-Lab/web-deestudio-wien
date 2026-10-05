import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import BookButton from "@/components/BookButton";
import StudioInfo from "@/components/StudioInfo";
import HeadSpaFeature from "@/components/HeadSpaFeature";
import { BackToStart } from "@/components/Blocks";
import JsonLd, { salonLd } from "@/components/JsonLd";
import { highlightsOf, servicesOf, studioPath, type Studio } from "@/data/site";
import { galleryOf } from "@/data/gallery";

export default function StudioHome({ studio: s }: { studio: Studio }) {
  const services = servicesOf(s);
  const highlights = highlightsOf(s);
  const photos = galleryOf(s.slug);

  return (
    <>
      <Header studio={s} transparent />
      <JsonLd data={salonLd(s)} />
      <main>
        {/* 1. HERO */}
        <section className="hero hero-short">
          <Image src={s.hero} alt={`${s.brand}, Nagelstudio ${s.district}`} fill priority sizes="100vw" />
          <div className="wrap hero-inner">
            <h1 className="display h-xl">{s.brand}</h1>
            <p className="serif hero-sub">
              {s.street}, {s.city}
            </p>
            <div className="btn-row center">
              <BookButton studio={s.slug} className="btn btn-light" />
              <a className="btn btn-outline-light" href="#kontakt">
                Anfahrt
              </a>
            </div>
          </div>
        </section>

        {/* 2. PRICES AT A GLANCE */}
        <section className="section" id="preise">
          <div className="wrap split top">
            <Reveal>
              <p className="eyebrow">{s.tagline}</p>
              <h2 className="display h-lg" style={{ margin: "14px 0 24px" }}>
                Preise auf einen Blick
              </h2>
              <p className="lead">Unsere beliebtesten Behandlungen. Alle Preise und Extras finden Sie in der Preisliste.</p>
              <div className="btn-row" style={{ marginTop: 32 }}>
                <Link href={studioPath(s, "preise")} className="btn btn-secondary">
                  Alle Preise
                </Link>
                <BookButton studio={s.slug} />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <ul className="glance">
                {highlights.map((h) => (
                  <li key={h.label}>
                    <Link href={`${studioPath(s, "preise")}#${h.group}`} className="price-row">
                      <span>{h.label}</span>
                      <span className="val">{h.price}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* 3. SERVICES */}
        <section className="section section-alt">
          <div className="wrap">
            <Reveal className="section-head center">
              <p className="eyebrow">Behandlungen</p>
              <h2 className="display h-lg">Leistungen</h2>
            </Reveal>
            <div className="service-grid">
              {services.map((sv, i) => (
                <Reveal key={sv.key} delay={i * 80} className="service-tile group">
                  <Link href={`${studioPath(s, "leistungen")}#${sv.key}`}>
                    <div className="media bw zoom">
                      <Image src={sv.image} alt={sv.title} fill sizes="(max-width: 1000px) 50vw, 25vw" />
                    </div>
                    <h3 className="display h-sm">{sv.title}</h3>
                    <p>{sv.lead}</p>
                    <p className="price">{sv.from}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
            <div className="btn-row center" style={{ marginTop: 48 }}>
              <Link href={studioPath(s, "leistungen")} className="btn btn-secondary">
                Alle Leistungen
              </Link>
            </div>
          </div>
        </section>

        {/* 4. HEAD SPA (Dee Studio only) */}
        {s.headSpa && <HeadSpaFeature />}

        {/* 5. THE STUDIO */}
        <section className="section">
          <div className="wrap split">
            <Reveal>
              <div className="media" style={{ aspectRatio: "4 / 5" }}>
                <Image src={s.cover} alt={`${s.brand} ${s.location}`} fill sizes="(max-width: 860px) 100vw, 50vw" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="eyebrow">
                {s.location}, {s.district}
              </p>
              <h2 className="display h-lg" style={{ margin: "14px 0 24px" }}>
                Das Studio
              </h2>
              {s.about.map((p) => (
                <p key={p} className="lead">
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
        </section>

        {/* 6. GALLERY */}
        <section className="section section-alt">
          <div className="wrap">
            <Reveal className="section-head center">
              <p className="eyebrow">@dee.studio.wien</p>
              <h2 className="display h-lg">Galerie</h2>
            </Reveal>
            {photos.length > 0 ? (
              <Gallery items={photos} limit={8} bw />
            ) : (
              <p className="lead" style={{ margin: "0 auto", textAlign: "center" }}>
                Fotos aus {s.brand} folgen in Kürze. Bis dahin finden Sie unsere Arbeiten auf Instagram.
              </p>
            )}
            <div className="btn-row center" style={{ marginTop: 48 }}>
              <Link href={studioPath(s, "galerie")} className="btn btn-secondary">
                Zur Galerie
              </Link>
            </div>
          </div>
        </section>

        {/* 7. FAQ */}
        <section className="section">
          <div className="wrap" style={{ maxWidth: 900 }}>
            <Reveal className="section-head center">
              <p className="eyebrow">FAQ</p>
              <h2 className="display h-lg">Gut zu wissen</h2>
            </Reveal>
            <FAQ />
          </div>
        </section>

        {/* 8. CONTACT */}
        <section className="section section-alt" id="kontakt">
          <div className="wrap split top">
            <Reveal>
              <p className="eyebrow">Besuchen Sie uns</p>
              <h2 className="display h-lg" style={{ margin: "14px 0 32px" }}>
                Kontakt
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {s.interior.map((src) => (
                  <div key={src} className="media" style={{ aspectRatio: "1" }}>
                    <Image src={src} alt={`${s.brand} ${s.location}`} fill sizes="(max-width: 860px) 50vw, 25vw" />
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={100}>
              <StudioInfo studio={s} />
            </Reveal>
          </div>
        </section>

        {/* 9. BACK TO START */}
        <BackToStart studio={s} />
      </main>
    </>
  );
}
