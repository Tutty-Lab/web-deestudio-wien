import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHead, { crumbPath } from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import BookButton from "@/components/BookButton";
import { MoreAbout } from "@/components/Blocks";
import Rating from "@/components/Rating";
import JsonLd, { breadcrumbLd, reviewsLd } from "@/components/JsonLd";
import { RATINGS, REVIEWS } from "@/data/home";
import { STUDIOS } from "@/data/site";

const hasReviews = REVIEWS.length > 0;

export const metadata: Metadata = {
  title: "Bewertungen & Erfahrungen | Dee Studio Wien",
  description:
    "Erfahrungen unserer Kundinnen mit Dee Studio am Neubaugürtel und Vanilla by Dee in der Fasangasse. Google Bewertung 4,8 von 5.",
  alternates: { canonical: "/bewertungen" },
  // Without real reviews on the page there is nothing to index yet.
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
          intro="Was Kundinnen über unsere Studios sagen. Wir veröffentlichen nur echte Bewertungen von Google und Treatwell."
        />

        {STUDIOS.map((s, i) => {
          const rating = RATINGS.find((r) => r.studio === s.slug);
          const reviews = REVIEWS.filter((r) => r.studio === s.slug);
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
                      <Rating value={rating.value} label={`${rating.source} Bewertung`} align="start" />
                    ) : (
                      <p className="lead">Für {s.brand} sammeln wir gerade die ersten Bewertungen.</p>
                    )}
                    <div className="btn-row" style={{ marginTop: 28 }}>
                      <a className="btn btn-secondary" href={s.maps} target="_blank" rel="noopener noreferrer">
                        Bewertung schreiben
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
                      <p className="lead">
                        Lesen Sie die Erfahrungen unserer Kundinnen direkt auf{" "}
                        <a href={s.maps} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>
                          Google
                        </a>{" "}
                        oder{" "}
                        <a href={s.booking} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>
                          Treatwell
                        </a>
                        .
                      </p>
                    )}
                  </div>
                </div>
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
