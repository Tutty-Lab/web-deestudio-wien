import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import PageHead, { crumbPath } from "@/components/PageHead";
import JsonLd, { breadcrumbLd } from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import BookButton from "@/components/BookButton";
import StudioInfo from "@/components/StudioInfo";
import { HEAD_SPA, STUDIOS, getStudio, studioPath } from "@/data/site";

export const dynamicParams = false;

// Only studios that offer Head Spa get this page.
export function generateStaticParams() {
  return STUDIOS.filter((s) => s.headSpa).map((s) => ({ studio: s.slug }));
}

type Params = { params: Promise<{ studio: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const s = getStudio((await params).studio);
  if (!s) return {};
  return {
    title: `Head Spa Wien | ${s.brand} ${s.location}`,
    description:
      "Head Spa in Wien bei Dee Studio am Neubaugürtel: Reinigung, Massage und Pflege für Kopfhaut und Haar. Tiefenentspannung, jetzt online buchen.",
    alternates: { canonical: studioPath(s, "head-spa") },
  };
}

export default async function HeadSpaPage({ params }: Params) {
  const studio = getStudio((await params).studio);
  if (!studio?.headSpa) notFound();
  const crumbs = [{ label: studio.brand, href: studioPath(studio) }, { label: "Head Spa" }];

  return (
    <>
      <Header studio={studio} />
      <JsonLd data={breadcrumbLd(crumbPath(crumbs, studioPath(studio, "head-spa")))} />
      <main>
        <PageHead
          crumbs={crumbs}
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
            </Reveal>
          </div>
        </section>

        {/* PACKAGES */}
        <section className="section section-alt">
          <div className="wrap">
            <Reveal className="section-head center">
              <p className="eyebrow">Drei Pakete</p>
              <h2 className="display h-lg">Wählen Sie Ihre Auszeit</h2>
            </Reveal>
            <ul className="package-grid">
              {HEAD_SPA.packages.map((p, i) => (
                <Reveal as="li" key={p.name} delay={i * 80} className="package">
                  <p className="eyebrow">{p.note}</p>
                  <h3 className="display h-sm">{p.name}</h3>
                  <p className="package-meta">{p.duration}</p>
                  <p className="package-price">{p.price}</p>
                  <BookButton studio={studio.slug} className="btn btn-secondary">
                    Buchen
                  </BookButton>
                </Reveal>
              ))}
            </ul>
            <p className="price-note" style={{ textAlign: "center", marginTop: 24 }}>
              Online zu Nebenzeiten bis zu 10 % günstiger.
            </p>
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
                <Image src={studio.cover} alt={`${studio.brand} ${studio.location}`} fill sizes="(max-width: 860px) 100vw, 50vw" />
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
