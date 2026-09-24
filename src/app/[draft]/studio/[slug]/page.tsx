import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import BookButton from "@/components/BookButton";
import StudioInfo from "@/components/StudioInfo";
import { DRAFTS } from "@/data/drafts";
import { SERVICES, STUDIOS, getStudio } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return DRAFTS.flatMap((d) => STUDIOS.map((s) => ({ draft: d.key, slug: s.slug })));
}

type Params = { params: Promise<{ draft: string; slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const s = getStudio((await params).slug);
  return s ? { title: `${s.brand} ${s.location} | Dee Studio Wien`, description: s.intro } : {};
}

export default async function StudioPage({ params }: Params) {
  const { draft, slug } = await params;
  const s = getStudio(slug);
  if (!s) notFound();
  const base = `/${draft}`;
  const other = STUDIOS.find((o) => o.slug !== s.slug)!;

  return (
    <>
      <Header base={base} overHero />
      <main>
        {/* HERO */}
        <section
          className="on-dark"
          style={{ position: "relative", height: "82svh", minHeight: 520, background: "#000", color: "#fff" }}
        >
          <Image
            src={s.cover}
            alt={`${s.brand} ${s.location}`}
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
              paddingBottom: "clamp(40px, 8vh, 96px)",
            }}
          >
            <p className="eyebrow" style={{ color: "rgba(255,255,255,.75)" }}>
              {s.street} · {s.city}
            </p>
            <h1 className="display h-xl" style={{ margin: "16px 0 32px" }}>
              {s.brand}
              <br />
              <span className="serif" style={{ fontSize: ".6em" }}>
                {s.location}
              </span>
            </h1>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <BookButton studio={s.slug} className="btn" />
              <a className="btn" href={s.phoneHref}>
                {s.phone}
              </a>
            </div>
          </div>
        </section>

        {/* INTRO + INFO */}
        <section className="section">
          <div className="wrap two-col" style={{ alignItems: "start" }}>
            <Reveal>
              <p className="eyebrow">Das Studio</p>
              <h2 className="display h-lg" style={{ margin: "18px 0 24px" }}>
                Willkommen
                <br />
                <span className="serif">bei</span> {s.brand}
              </h2>
              <p className="lead">{s.intro}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 40 }}>
                {s.interior.map((src) => (
                  <div key={src} className="media" style={{ aspectRatio: "3 / 4" }}>
                    <Image src={src} alt={`${s.brand} Interior`} fill sizes="(max-width: 860px) 50vw, 25vw" style={{ objectFit: "cover" }} />
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <StudioInfo studio={s} />
            </Reveal>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section section-alt">
          <div className="wrap">
            <Reveal className="section-head center">
              <p className="eyebrow">Behandlungen</p>
              <h2 className="display h-lg" style={{ margin: 0 }}>
                Services
              </h2>
            </Reveal>
            <div className="service-grid">
              {SERVICES.map((sv, i) => (
                <Reveal key={sv.key} delay={i * 90} className="service-tile group">
                  <div className="media bw zoom">
                    <Image src={sv.image} alt={sv.title} fill sizes="(max-width: 1000px) 50vw, 25vw" />
                  </div>
                  <h3 className="display h-sm">{sv.title}</h3>
                  <p>{sv.lead}</p>
                </Reveal>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 56 }}>
              <Link href={`${base}/preise`} className="link-arrow">
                Preisliste ansehen →
              </Link>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="section">
          <div className="wrap">
            <Reveal className="section-head center">
              <p className="eyebrow">Inspiration</p>
              <h2 className="display h-lg" style={{ margin: 0 }}>
                Unsere Arbeiten
              </h2>
            </Reveal>
            <Gallery limit={8} />
          </div>
        </section>

        {/* OTHER STUDIO */}
        <section className="section section-invert">
          <div className="wrap" style={{ textAlign: "center" }}>
            <p className="eyebrow">Auch in Wien</p>
            <h2 className="display h-lg" style={{ margin: "18px 0 32px" }}>
              {other.brand} <span className="serif">·</span> {other.location}
            </h2>
            <Link href={`${base}/studio/${other.slug}`} className="btn">
              Zum Studio {other.location}
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
