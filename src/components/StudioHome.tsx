import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import BookButton from "@/components/BookButton";
import StudioInfo from "@/components/StudioInfo";
import HeadSpaFeature from "@/components/HeadSpaFeature";
import JsonLd, { salonLd } from "@/components/JsonLd";
import { SERVICES, studioPath, type Studio } from "@/data/site";

export default function StudioHome({ studio: s }: { studio: Studio }) {
  const services = SERVICES.filter((sv) => s.services.includes(sv.key));

  return (
    <>
      <Header studio={s} transparent />
      <JsonLd data={salonLd(s)} />
      <main>
        {/* HERO */}
        <section className="hero">
          <Image src={s.hero} alt={`${s.brand}, Nagelstudio ${s.district}`} fill priority sizes="100vw" />
          <div className="wrap hero-inner">
            <h1 className="display h-xl">
              Ja! Das ist
              <br />
              {s.brand}!
            </h1>
            <div className="btn-row center">
              <BookButton studio={s.slug} className="btn btn-light" />
              <a className="btn btn-outline-light" href="#kontakt">
                Anfahrt
              </a>
            </div>
          </div>
        </section>

        {s.headSpa && <HeadSpaFeature />}

        {/* THE STUDIO */}
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
              <div className="btn-row" style={{ marginTop: 32 }}>
                <BookButton studio={s.slug} />
                <Link href={studioPath(s, "preise")} className="btn btn-secondary">
                  Preise
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section section-alt">
          <div className="wrap">
            <Reveal className="section-head center">
              <p className="eyebrow">Behandlungen</p>
              <h2 className="display h-lg">Services</h2>
            </Reveal>
            <div className="service-grid">
              {services.map((sv, i) => (
                <Reveal key={sv.key} delay={i * 80} className="service-tile group">
                  <Link href={sv.key === "head-spa" ? studioPath(s, "head-spa") : studioPath(s, "preise")}>
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
          </div>
        </section>

        {/* GALLERY */}
        {s.gallery && (
          <section className="section">
            <div className="wrap">
              <Reveal className="section-head center">
                <p className="eyebrow">@dee.studio.wien</p>
                <h2 className="display h-lg">Unsere Arbeiten</h2>
              </Reveal>
              <Gallery bw limit={8} />
              <div className="btn-row center" style={{ marginTop: 48 }}>
                <Link href={studioPath(s, "galerie")} className="btn btn-secondary">
                  Zur Galerie
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className={`section ${s.gallery ? "section-alt" : ""}`}>
          <div className="wrap" style={{ maxWidth: 900 }}>
            <Reveal className="section-head center">
              <p className="eyebrow">FAQ</p>
              <h2 className="display h-lg">Gut zu wissen</h2>
            </Reveal>
            <FAQ />
          </div>
        </section>

        {/* CONTACT */}
        <section className={`section ${s.gallery ? "" : "section-alt"}`} id="kontakt">
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
      </main>
    </>
  );
}
