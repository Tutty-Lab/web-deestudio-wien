import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import PageHead, { crumbPath } from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import BookButton from "@/components/BookButton";
import JsonLd, { breadcrumbLd, faqLd } from "@/components/JsonLd";
import { GALLERY_TEXT, galleryOf, stylesOf } from "@/data/gallery";
import { INSTAGRAM, getStudio, studioPath } from "@/data/site";

type Params = { params: Promise<{ studio: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const s = getStudio((await params).studio);
  if (!s) return {};
  const empty = galleryOf(s.slug).length === 0;
  return {
    title: `Galerie | Nageldesign Ideen | ${s.brand} Wien`,
    description: `Nageldesign Ideen von ${s.brand}: French Nails, Chrome, Nail Art, XXL, Acryl, Babyboomer und Wimpernverlängerung aus unserem Studio am ${s.location}.`,
    alternates: { canonical: studioPath(s, "galerie") },
    // An empty gallery is thin content: keep it out of the index until photos exist.
    ...(empty ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function GalleryPage({ params }: Params) {
  const s = getStudio((await params).studio);
  if (!s) notFound();
  const photos = galleryOf(s.slug);
  const crumbs = [{ label: s.brand, href: studioPath(s) }, { label: "Galerie" }];

  return (
    <>
      <Header studio={s} />
      <JsonLd data={breadcrumbLd(crumbPath(crumbs, studioPath(s, "galerie")))} />
      {photos.length > 0 && <JsonLd data={faqLd(GALLERY_TEXT.faqs)} />}
      <main>
        <PageHead
          variant="center"
          crumbs={crumbs}
          eyebrow={`${s.brand}, ${s.location}`}
          title="Galerie"
          intro={photos.length > 0 ? GALLERY_TEXT.intro : `Fotos aus ${s.brand} folgen in Kürze.`}
        />

        <section className="section">
          <div className="wrap">
            {photos.length > 0 ? (
              <Gallery items={photos} filters={stylesOf(s.slug)} />
            ) : (
              <div className="empty-state">
                <p className="lead">
                  Wir fotografieren gerade unsere ersten Arbeiten in der {s.location}. Bis dahin finden Sie Inspiration auf
                  Instagram.
                </p>
                <div className="btn-row center" style={{ marginTop: 24 }}>
                  <a className="btn btn-secondary" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
                    Instagram ansehen
                  </a>
                  <BookButton studio={s.slug} />
                </div>
              </div>
            )}
          </div>
        </section>

        {photos.length > 0 && (
          <section className="section section-alt">
            <div className="wrap" style={{ maxWidth: 900 }}>
              <Reveal className="section-head">
                <p className="eyebrow">Häufige Fragen</p>
                <h2 className="display h-lg">Gut zu wissen</h2>
              </Reveal>
              <FAQ items={GALLERY_TEXT.faqs} />
              <div className="btn-row" style={{ marginTop: 40 }}>
                <BookButton studio={s.slug} />
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
