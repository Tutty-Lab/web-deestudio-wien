import { SITE, type Studio } from "@/data/site";

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
    "@id": `${SITE.url}/studio/${s.slug}#salon`,
    name: s.brand,
    url: `${SITE.url}/studio/${s.slug}`,
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
