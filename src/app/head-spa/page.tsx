import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import BookButton from "@/components/BookButton";
import StudioInfo from "@/components/StudioInfo";
import { HEAD_SPA, getStudio } from "@/data/site";

export const metadata: Metadata = {
  title: "Head Spa Wien | Dee Studio Neubaugürtel",
  description: HEAD_SPA.lead,
};

export default function HeadSpaPage() {
  const studio = getStudio(HEAD_SPA.studio)!;

  return (
    <>
      <Header overHero />
      <main>
        {/* HERO */}
        <section
          className="on-dark"
          style={{ position: "relative", height: "100svh", minHeight: 560, background: "#000", color: "#fff" }}
        >
          <Image
            src={HEAD_SPA.images[0]}
            alt="Head Spa bei Dee Studio"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", filter: "grayscale(1) brightness(0.5)" }}
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
              Dee Studio · {studio.street}, {studio.city}
            </p>
            <h1 className="display h-xl" style={{ margin: "20px 0 8px" }}>
              Head Spa
            </h1>
            <p className="serif" style={{ fontSize: "clamp(26px, 3vw, 40px)", margin: "0 0 36px" }}>
              {HEAD_SPA.tagline}
            </p>
            <BookButton studio={studio.slug} className="btn">
              Head Spa buchen
            </BookButton>
          </div>
        </section>

        {/* INTRO */}
        <section className="section">
          <div className="wrap two-col">
            <Reveal>
              <p className="eyebrow">Die Auszeit</p>
              <h2 className="display h-lg" style={{ margin: "18px 0 24px" }}>
                Für Kopf
                <br />
                <span className="serif">&amp;</span> Seele
              </h2>
              <p className="lead">{HEAD_SPA.lead}</p>
              <ul className="headspa-benefits">
                {HEAD_SPA.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <div className="media" style={{ aspectRatio: "4 / 5" }}>
                <Image src={HEAD_SPA.images[1]} alt="Head Spa Ritual" fill sizes="(max-width: 860px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* RITUAL */}
        <section className="section section-invert">
          <div className="wrap">
            <Reveal className="section-head center">
              <p className="eyebrow">Ablauf</p>
              <h2 className="display h-lg" style={{ margin: 0 }}>
                Das Ritual
              </h2>
            </Reveal>
            <div className="ritual-grid">
              {HEAD_SPA.steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 90} className="ritual-step">
                  <span className="svc-num">0{i + 1}</span>
                  <h3 className="display h-sm" style={{ margin: "16px 0 10px" }}>
                    {s.title}
                  </h3>
                  <p>{s.text}</p>
                </Reveal>
              ))}
            </div>
            <p style={{ textAlign: "center", marginTop: 56, color: "var(--muted)" }}>{HEAD_SPA.price}</p>
          </div>
        </section>

        {/* WHERE */}
        <section className="section">
          <div className="wrap two-col" style={{ alignItems: "start" }}>
            <Reveal>
              <p className="eyebrow">Wo</p>
              <h2 className="display h-lg" style={{ margin: "18px 0 24px" }}>
                Exklusiv bei
                <br />
                Dee Studio
              </h2>
              <p className="lead">{studio.intro}</p>
            </Reveal>
            <Reveal delay={120}>
              <StudioInfo studio={studio} />
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
