import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import PageHead from "@/components/PageHead";
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
      <Header />
      <main>
        <PageHead
          crumbs={[{ label: "Head Spa" }]}
          eyebrow={`Exklusiv bei ${studio.brand}, ${studio.location}`}
          title="Head Spa"
          intro={HEAD_SPA.lead}
        >
          <div className="btn-row" style={{ marginTop: 24 }}>
            <BookButton studio={studio.slug}>Head Spa buchen</BookButton>
          </div>
        </PageHead>

        {/* IMAGES + BENEFITS */}
        <section className="section">
          <div className="wrap split">
            <Reveal>
              <div className="media" style={{ aspectRatio: "4 / 5" }}>
                <Image src={HEAD_SPA.images[0]} alt="Head Spa Behandlung" fill priority sizes="(max-width: 860px) 100vw, 50vw" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="eyebrow">Die Auszeit</p>
              <h2 className="display h-lg" style={{ margin: "14px 0 8px" }}>
                Für Kopf und Seele
              </h2>
              <span className="serif" style={{ display: "block", fontSize: "clamp(22px, 2.4vw, 32px)", marginBottom: 8 }}>
                {HEAD_SPA.tagline}
              </span>
              <ul className="checklist">
                {HEAD_SPA.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p className="eyebrow">{HEAD_SPA.price}</p>
            </Reveal>
          </div>
        </section>

        {/* RITUAL */}
        <section className="section section-dark">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">Ablauf</p>
              <h2 className="display h-lg">Das Ritual</h2>
            </Reveal>
            <ol className="steps" style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {HEAD_SPA.steps.map((s, i) => (
                <li key={s.title} className="step">
                  <span className="step-num">0{i + 1}</span>
                  <h3 className="display h-sm">{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
            <div className="btn-row" style={{ marginTop: 48 }}>
              <BookButton studio={studio.slug} className="btn btn-light">
                Head Spa buchen
              </BookButton>
            </div>
          </div>
        </section>

        {/* WHERE */}
        <section className="section">
          <div className="wrap split top">
            <Reveal>
              <p className="eyebrow">Wo</p>
              <h2 className="display h-lg" style={{ margin: "14px 0 24px" }}>
                Nur bei {studio.brand}
              </h2>
              <p className="lead">{studio.intro}</p>
              <div className="media" style={{ aspectRatio: "4 / 3", marginTop: 32 }}>
                <Image src={HEAD_SPA.images[1]} alt="Dee Studio Neubaugürtel" fill sizes="(max-width: 860px) 100vw, 50vw" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <StudioInfo studio={studio} />
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
