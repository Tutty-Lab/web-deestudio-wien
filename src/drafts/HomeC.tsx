import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import BookButton from "@/components/BookButton";
import HeroSlides from "./HeroSlides";
import StudioTabs from "./StudioTabs";
import { GALLERY, INSTAGRAM, SERVICES, STUDIOS } from "@/data/site";

const base = "/c";
const SLIDES = [
  "/images/ig/ig09.jpg",
  "/images/site/g-11.34.webp",
  "/images/ig/ig01.jpg",
  "/images/site/g-10.12-1-1.webp",
];

export default function HomeC() {
  return (
    <>
      <Header base={base} overHero />
      <main>
        {/* HERO */}
        <section
          className="on-dark"
          style={{ position: "relative", height: "100svh", minHeight: 600, background: "#000", color: "#fff" }}
        >
          <HeroSlides images={SLIDES} />
          <div
            className="wrap"
            style={{
              position: "relative",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              paddingBottom: "clamp(40px, 7vh, 80px)",
            }}
          >
            <p className="eyebrow" style={{ color: "rgba(255,255,255,.7)" }}>
              Dee Studio · Wien
            </p>
            <h1 className="display h-xl" style={{ margin: "16px 0 0", maxWidth: 1100 }}>
              Relax.
              <br />
              <span className="serif" style={{ fontSize: "1.08em" }}>
                Refresh.
              </span>
              <br />
              Glow.
            </h1>
            <div
              style={{
                marginTop: 48,
                paddingTop: 24,
                borderTop: "1px solid rgba(255,255,255,.25)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 24,
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", gap: "clamp(24px,5vw,72px)", flexWrap: "wrap" }}>
                {STUDIOS.map((s) => (
                  <Link key={s.slug} href={`${base}/studio/${s.slug}`} style={{ display: "block" }}>
                    <span className="eyebrow" style={{ color: "rgba(255,255,255,.6)" }}>
                      {s.district}
                    </span>
                    <span className="display" style={{ display: "block", fontSize: 18, marginTop: 6 }}>
                      {s.brand} →
                    </span>
                  </Link>
                ))}
              </div>
              <BookButton className="btn" />
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="section">
          <Reveal className="wrap">
            <p
              className="display"
              style={{
                fontSize: "clamp(26px, 3.6vw, 52px)",
                lineHeight: 1.25,
                letterSpacing: ".04em",
                maxWidth: 1150,
                margin: 0,
              }}
            >
              Nail Art, die sprachlos macht. Lashes, die Blicke fangen. Ein Head Spa, der{" "}
              <span className="serif" style={{ color: "var(--muted)" }}>
                alles andere vergessen lässt
              </span>
              .
            </p>
          </Reveal>
        </section>

        {/* STUDIO TABS */}
        <section className="section section-alt">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">Unsere Studios</p>
              <h2 className="display h-lg" style={{ margin: 0 }}>
                Wählen Sie <span className="serif">Ihr</span> Studio
              </h2>
            </Reveal>
            <StudioTabs base={base} />
          </div>
        </section>

        {/* SERVICES CAROUSEL */}
        <section className="section">
          <div className="wrap">
            <Reveal className="section-head" >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 24, flexWrap: "wrap" }}>
                <div>
                  <p className="eyebrow">Behandlungen</p>
                  <h2 className="display h-lg" style={{ margin: "18px 0 0" }}>
                    Services
                  </h2>
                </div>
                <Link href={`${base}/preise`} className="link-arrow">
                  Preisliste →
                </Link>
              </div>
            </Reveal>
            <div className="hscroll">
              {SERVICES.map((s) => (
                <div key={s.key} className="service-tile group">
                  <div className="media zoom bw">
                    <Image src={s.image} alt={s.title} fill sizes="(max-width: 700px) 78vw, 30vw" />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
                    <h3 className="display h-sm">{s.title}</h3>
                    <span className="eyebrow">{s.from}</span>
                  </div>
                  <p>{s.lead}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INSTAGRAM */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <Reveal className="section-head center">
              <p className="eyebrow">Instagram</p>
              <h2 className="display h-lg" style={{ margin: 0 }}>
                @dee.studio.wien
              </h2>
            </Reveal>
          </div>
          <div className="ig-grid">
            {GALLERY.slice(0, 12).map((g) => (
              <a
                key={g.src}
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="media zoom bw"
                aria-label={`${g.alt} auf Instagram`}
              >
                <Image src={g.src} alt={g.alt} fill sizes="(max-width: 800px) 33vw, 17vw" />
              </a>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-alt">
          <div className="wrap two-col" style={{ alignItems: "start" }}>
            <Reveal>
              <p className="eyebrow">FAQ</p>
              <h2 className="display h-lg" style={{ margin: "18px 0 0" }}>
                Gut <span className="serif">zu</span> wissen
              </h2>
            </Reveal>
            <FAQ />
          </div>
        </section>
      </main>
    </>
  );
}
