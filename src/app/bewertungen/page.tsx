import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHead, { crumbPath } from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import BookButton from "@/components/BookButton";
import { MoreAbout } from "@/components/Blocks";
import Rating from "@/components/Rating";
import JsonLd, { breadcrumbLd, reviewsLd } from "@/components/JsonLd";
import { RATINGS, REVIEWS, REVIEW_HIGHLIGHTS } from "@/data/home";
import { STUDIOS } from "@/data/site";

const hasReviews = REVIEWS.length > 0 || RATINGS.length > 0;

export const metadata: Metadata = {
  title: "Bewertungen & Erfahrungen | Dee Studio Wien",
  description:
    "Erfahrungen unserer Kundinnen mit Dee Studio am Neubaugürtel und Vanilla by Dee in der Fasangasse. Google Bewertung 4,8 von 5 aus über 180 Bewertungen.",
  alternates: { canonical: "/bewertungen" },
  // Without real ratings or reviews on the page there is nothing to index yet.
  ...(hasReviews ? {} : { robots: { index: false, follow: true } }),
};

const crumbs = [{ label: "Bewertungen" }];

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <JsonLd data={breadcrumbLd(crumbPath(crumbs, "/bewertungen"))} />
      {STUDIOS.map((s) => {
        const ld = reviewsLd(s, REVIEWS.filter((r) => r.studio === s.slug));
        return ld ? <JsonLd key={s.slug} data={ld} /> : null;
      })}
      <main>
        <PageHead
          crumbs={crumbs}
          eyebrow="Erfahrungen unserer Kundinnen"
          title="Bewertungen: Dee Studio Wien"
          intro="Was Kundinnen über unsere Studios sagen. Alle Zahlen stammen direkt von Google, die Bewertungen lesen Sie dort im Original."
        />

        {STUDIOS.map((s, i) => {
          const rating = RATINGS.find((r) => r.studio === s.slug);
          const reviews = REVIEWS.filter((r) => r.studio === s.slug);
          const highlights = REVIEW_HIGHLIGHTS.find((h) => h.studio === s.slug)?.items;
          return (
            <section key={s.slug} className={`section ${i % 2 ? "section-alt" : ""}`}>
              <div className="wrap">
                <Reveal className="section-head">
                  <p className="eyebrow">
                    {s.location}, {s.district}
                  </p>
                  <h2 className="display h-lg">{s.brand}</h2>
                </Reveal>
                <div className="split top">
                  <div>
                    {rating ? (
                      <Rating value={rating.value} label={`${rating.count} ${rating.source} Bewertungen`} align="start" />
                    ) : (
                      <p className="lead">Für {s.brand} sammeln wir gerade die ersten Bewertungen.</p>
                    )}
                    <div className="btn-row" style={{ marginTop: 28 }}>
                      <a className="btn btn-secondary" href={rating?.url ?? s.maps} target="_blank" rel="noopener noreferrer">
                        Bewertungen lesen
                      </a>
                      <BookButton studio={s.slug} />
                    </div>
                  </div>
                  <div>
                    {reviews.length > 0 ? (
                      <ul className="review-list">
                        {reviews.map((r) => (
                          <li key={r.name + r.text.slice(0, 24)} className="review">
                            <p>{r.text}</p>
                            <p className="eyebrow">
                              {r.name}, {r.service}, {r.source}
                            </p>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <>
                      {rating?.topics && (
                        <div style={{ marginBottom: 28 }}>
                          <p className="eyebrow">Häufig genannt in den Google Bewertungen</p>
                          <ul className="topic-list">
                            {rating.topics.map((topic) => (
                              <li key={topic}>{topic}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <p className="lead">
                        Lesen Sie die Erfahrungen unserer Kundinnen direkt auf{" "}
                        <a href={rating?.url ?? s.maps} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>
                          Google
                        </a>{" "}
                        oder{" "}
                        <a href={s.booking} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>
                          Treatwell
                        </a>
                        . Stand: {rating?.checked ?? "Oktober 2026"}.
                      </p>
                      </>
                    )}
                  </div>
                </div>
                {highlights && (
                  <div style={{ marginTop: 64 }}>
                    <h3 className="display h-md">Was Kundinnen auf Google besonders hervorheben</h3>
                    <p className="price-note" style={{ marginTop: 8 }}>
                      Unsere Zusammenfassung der Google Bewertungen. Die einzelnen Bewertungen lesen Sie im Original auf Google.
                    </p>
                    <ul className="highlight-grid">
                      {highlights.map((h) => (
                        <li key={h.title}>
                          <h4>{h.title}</h4>
                          <p>{h.text}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          );
        })}

        <MoreAbout current="/bewertungen" />
      </main>
      <Footer />
    </>
  );
}
