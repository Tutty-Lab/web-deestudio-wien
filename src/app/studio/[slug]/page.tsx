import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import BookButton from "@/components/BookButton";
import StudioInfo from "@/components/StudioInfo";
import HeadSpaFeature from "@/components/HeadSpaFeature";
import JsonLd, { breadcrumbLd, salonLd } from "@/components/JsonLd";
import { HEAD_SPA, SERVICES, STUDIOS, getStudio } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return STUDIOS.map((s) => ({ slug: s.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const s = getStudio((await params).slug);
  return s
    ? {
        title: `Nagelstudio ${s.district}: ${s.brand}, ${s.location}`,
        description: `${s.intro} ${s.street}, ${s.city}.`,
        alternates: { canonical: `/studio/${s.slug}` },
      }
    : {};
}

export default async function StudioPage({ params }: Params) {
  const { slug } = await params;
  const s = getStudio(slug);
  if (!s) notFound();
  const hasHeadSpa = s.slug === HEAD_SPA.studio;
  const services = SERVICES.filter((sv) => sv.key !== "head-spa" || hasHeadSpa);

  return (
    <>
      <Header />
      <JsonLd data={salonLd(s)} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Start", path: "/" },
          { name: s.brand, path: `/studio/${s.slug}` },
        ])}
      />
      <main>
        <PageHead
          crumbs={[{ label: "Studios" }, { label: s.brand }]}
          eyebrow={`Studio ${STUDIOS.indexOf(s) + 1} von ${STUDIOS.length}, ${s.district}`}
          title={s.brand}
          intro={s.intro}
        >
          <div className="btn-row" style={{ marginTop: 24 }}>
            <BookButton studio={s.slug} />
            <a className="btn btn-secondary" href={s.phoneHref}>
              Anrufen
            </a>
          </div>
        </PageHead>

        {/* Which studio am I looking at? */}
        <nav className="switcher" aria-label="Studio wechseln">
          {STUDIOS.map((o) => (
            <Link key={o.slug} href={`/studio/${o.slug}`} aria-current={o.slug === s.slug ? "page" : undefined}>
              <strong>{o.brand}</strong>
              <span>
                {o.location}, {o.district}
              </span>
            </Link>
          ))}
        </nav>

        {/* INFO */}
        <section className="section">
          <div className="wrap split top">
            <Reveal>
              <div className="media" style={{ aspectRatio: "4 / 5" }}>
                <Image src={s.cover} alt={`${s.brand} Innenansicht`} fill priority sizes="(max-width: 860px) 100vw, 50vw" />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 8 }}>
                {s.interior.map((src) => (
                  <div key={src} className="media" style={{ aspectRatio: "1" }}>
                    <Image src={src} alt={`${s.brand} Studio`} fill sizes="(max-width: 860px) 50vw, 25vw" />
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="eyebrow">Adresse und Öffnungszeiten</p>
              <h2 className="display h-lg" style={{ margin: "14px 0 32px" }}>
                So finden Sie uns
              </h2>
              <StudioInfo studio={s} showTitle={false} />
            </Reveal>
          </div>
        </section>

        {hasHeadSpa && <HeadSpaFeature />}

        {/* SERVICES */}
        <section className="section section-alt">
          <div className="wrap">
            <Reveal className="section-head center">
              <p className="eyebrow">Bei {s.brand}</p>
              <h2 className="display h-lg">Services</h2>
            </Reveal>
            <div className="service-grid">
              {services.map((sv, i) => (
                <Reveal key={sv.key} delay={i * 80} className="service-tile group">
                  <div className="media bw zoom">
                    <Image src={sv.image} alt={sv.title} fill sizes="(max-width: 1000px) 50vw, 25vw" />
                  </div>
                  <h3 className="display h-sm">{sv.title}</h3>
                  <p>{sv.lead}</p>
                  <p className="price">{sv.from}</p>
                </Reveal>
              ))}
            </div>
            <div className="btn-row center" style={{ marginTop: 48 }}>
              <Link href="/preise" className="btn btn-secondary">
                Alle Preise
              </Link>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="section">
          <div className="wrap">
            <Reveal className="section-head center">
              <p className="eyebrow">Inspiration</p>
              <h2 className="display h-lg">Unsere Arbeiten</h2>
            </Reveal>
            <Gallery limit={8} />
          </div>
        </section>
      </main>
    </>
  );
}
