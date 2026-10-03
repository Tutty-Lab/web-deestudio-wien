import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import BookButton from "@/components/BookButton";
import JsonLd, { breadcrumbLd, faqLd } from "@/components/JsonLd";
import { STYLES, getStyle, imagesForStyle } from "@/data/gallery";
import { STUDIOS, getStudio } from "@/data/site";
import { soft } from "@/lib/text";

export const dynamicParams = false;

export function generateStaticParams() {
  return STYLES.map((s) => ({ stil: s.slug }));
}

type Params = { params: Promise<{ stil: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const s = getStyle((await params).stil);
  if (!s) return {};
  const cover = imagesForStyle(s.slug)[0];
  return {
    title: s.title,
    description: s.description,
    alternates: { canonical: `/galerie/${s.slug}` },
    openGraph: { title: s.title, description: s.description, images: cover ? [cover.src] : undefined },
  };
}

export default async function StylePage({ params }: Params) {
  const { stil } = await params;
  const s = getStyle(stil);
  if (!s) notFound();
  const images = imagesForStyle(s.slug);
  const studios = s.studio ? STUDIOS.filter((st) => st.slug === s.studio) : STUDIOS;
  const bookStudio = s.studio ? getStudio(s.studio)?.slug : undefined;

  return (
    <>
      <Header />
      <JsonLd
        data={breadcrumbLd([
          { name: "Start", path: "/" },
          { name: "Galerie", path: "/galerie" },
          { name: s.name, path: `/galerie/${s.slug}` },
        ])}
      />
      <JsonLd data={faqLd(s.faqs)} />
      <main>
        <PageHead
          crumbs={[{ label: "Galerie", href: "/galerie" }, { label: s.name }]}
          eyebrow={`${images.length} Beispiele aus unseren Studios`}
          title={soft(s.h1)}
          intro={s.intro[0]}
        >
          <div className="btn-row" style={{ marginTop: 24 }}>
            <BookButton studio={bookStudio} />
          </div>
        </PageHead>

        {/* WORK */}
        <section className="section">
          <div className="wrap">
            <ul className="work-grid">
              {images.map((img, i) => (
                <li key={img.src}>
                  <figure className="media" style={{ margin: 0 }}>
                    <Image src={img.src} alt={img.alt} fill priority={i < 2} sizes="(max-width: 860px) 50vw, 33vw" />
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ABOUT + PRICE */}
        <section className="section section-alt">
          <div className="wrap split top">
            <Reveal>
              <p className="eyebrow">{soft(s.name)} bei Dee Studio</p>
              <h2 className="display h-lg" style={{ margin: "14px 0 24px" }}>
                Was Sie erwartet
              </h2>
              {s.intro.slice(1).map((p) => (
                <p key={p} className="lead">
                  {p}
                </p>
              ))}
            </Reveal>
            <Reveal delay={100}>
              <div className="price-card">
                <p className="eyebrow">Preis</p>
                <div className="price-row">
                  <span>{soft(s.price.label)}</span>
                  <span className="val">{s.price.value}</span>
                </div>
                <p className="price-note" style={{ marginTop: 12 }}>
                  Erhältlich in: {studios.map((st) => `${st.brand} (${st.district})`).join(", ")}
                </p>
                <div className="btn-row" style={{ marginTop: 24 }}>
                  <BookButton studio={bookStudio} />
                  <Link href="/preise" className="btn btn-secondary">
                    Alle Preise
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="wrap" style={{ maxWidth: 900 }}>
            <Reveal className="section-head">
              <p className="eyebrow">Häufige Fragen</p>
              <h2 className="display h-lg">{soft(s.name)}: Gut zu wissen</h2>
            </Reveal>
            <FAQ items={s.faqs} />
          </div>
        </section>

        {/* RELATED */}
        <section className="section section-alt">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">Weitere Stile</p>
              <h2 className="display h-lg">Auch beliebt</h2>
            </Reveal>
            <ul className="style-grid">
              {s.related.map((slug) => {
                const r = getStyle(slug)!;
                const img = imagesForStyle(slug)[0];
                return (
                  <li key={slug}>
                    <Link href={`/galerie/${slug}`} className="style-card group">
                      <div className="media bw zoom">
                        <Image src={img.src} alt={img.alt} fill sizes="(max-width: 600px) 50vw, 25vw" />
                      </div>
                      <h3 className="display h-sm">{soft(r.name)}</h3>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="btn-row" style={{ marginTop: 40 }}>
              <Link href="/galerie" className="btn btn-secondary">
                Zur Galerie
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
