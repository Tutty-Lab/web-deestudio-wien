import { SITE, type Studio } from "@/data/site";
import type { Review } from "@/data/home";

/** Structured data for search engines. `<` is escaped so the payload cannot close the script tag. */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

const DAY_SPECS = [
  { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "19:00" },
  { dayOfWeek: ["Saturday"], opens: "09:00", closes: "18:00" },
];

export function salonLd(s: Studio) {
  return {
    "@context": "https://schema.org",
    "@type": "NailSalon",
    "@id": `${SITE.url}/${s.slug}#salon`,
    name: s.brand,
    url: `${SITE.url}/${s.slug}`,
    image: `${SITE.url}${s.cover}`,
    telephone: s.phone.replace(/\s/g, ""),
    ...(s.email ? { email: s.email } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: s.street,
      postalCode: s.city.split(" ")[0],
      addressLocality: "Wien",
      addressCountry: "AT",
    },
    openingHoursSpecification: DAY_SPECS.map((d) => ({ "@type": "OpeningHoursSpecification", ...d })),
    priceRange: "€€",
    parentOrganization: { "@type": "Organization", name: SITE.name, url: SITE.url },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/**
 * Review markup for one studio. Returns null unless real reviews are shown on the page:
 * AggregateRating without visible reviews violates Google's guidelines.
 */
export function reviewsLd(s: Studio, reviews: Review[]) {
  if (reviews.length === 0) return null;
  const rated = reviews.filter((r) => typeof r.rating === "number");
  return {
    "@context": "https://schema.org",
    "@type": "NailSalon",
    "@id": `${SITE.url}/${s.slug}#salon`,
    name: s.brand,
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewBody: r.text,
      ...(r.date ? { datePublished: r.date } : {}),
      ...(typeof r.rating === "number" ? { reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 } } : {}),
    })),
    ...(rated.length > 0
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: (rated.reduce((n, r) => n + (r.rating ?? 0), 0) / rated.length).toFixed(1),
            reviewCount: rated.length,
            bestRating: 5,
          },
        }
      : {}),
  };
}
