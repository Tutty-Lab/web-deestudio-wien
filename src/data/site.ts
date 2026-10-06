export const SITE = {
  // Final domain; set NEXT_PUBLIC_SITE_URL on Vercel if it differs.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://deestudio.at").replace(/\/$/, ""),
  name: "Dee Studio Wien",
};

export const INSTAGRAM = "https://www.instagram.com/dee.studio.wien/";

import { DEE_PRICES, HEAD_SPA, VANILLA_PRICES, type PriceGroup } from "./prices";

export { HEAD_SPA };
export type { PriceGroup };

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export type Service = {
  /** Also the anchor on the Leistungen page, e.g. /dee-studio/leistungen#pedikuere */
  key: string;
  title: string;
  lead: string;
  /** Leistungen page copy. Draft: confirm with the client. */
  description: string[];
  duration?: string;
  image: string;
  from: string;
  /** Price group anchor on the Preise page. */
  priceGroup: string;
};

export const SERVICES: Service[] = [
  {
    key: "nails",
    title: "Nails",
    lead: "Acryl, Gel-X, Shellac und Nail Art. Jedes Set ist ein Unikat.",
    description: [
      "Ob natürlich mit Shellac, als leichtes Gel-X Set oder als stabile Acryl-Modellage: Wir beraten Sie zu Form, Länge und Farbe und finden die Technik, die zu Ihrem Alltag passt.",
      "Für Nail Art bringen Sie gerne Ihre Inspiration mit. Von French und Babyboomer über Chrome bis zu handgemalten Designs, Steinen und Charms setzen wir Ihre Idee um.",
      "Nach drei bis vier Wochen empfehlen wir ein Auffüllen, damit Ihre Nägel stabil und schön bleiben.",
    ],
    image: "/images/nails/french-nails-weiss-steine-wien.webp",
    from: "ab 30 €",
    priceGroup: "neues-set",
  },
  {
    key: "wimpern",
    title: "Lashes",
    lead: "Wimpernlifting und Wimpernverlängerung von natürlich bis Mega Volume.",
    description: [
      "Beim Wimpernlifting werden Ihre eigenen Wimpern sanft geschwungen, ganz ohne Extensions. Bei der Wimpernverlängerung setzen wir Extensions einzeln, von der klassischen 1:1 Technik über Light Volume bis zu Mega Volume.",
      "Neu im Trend ist der Anime, Douyin oder Manga Style mit gezielten Spikes für einen ausdrucksstarken Blick. Zum Auffüllen kommen Sie nach etwa zwei bis drei Wochen.",
    ],
    duration: "60 bis 135 Min.",
    image: "/images/lashes/wimpern-natuerlich-wien.jpg",
    from: "ab 65 €",
    priceGroup: "wimpern-classic",
  },
  {
    key: "head-spa",
    title: "Head Spa",
    lead: "Tiefenentspannung für Kopfhaut, Haar und Seele. Exklusiv bei Dee Studio.",
    description: [
      "Unser Head Spa verbindet Kopf-Akupressur, Massage für Nacken und Schultern, den beruhigenden Wasserbogen und Kopfhaut-Bedampfung zu einem Ritual.",
      "Drei Pakete stehen zur Wahl: Essential Balance, Deep Relax & Care und das VIP Paket Luxury Healing Journey.",
    ],
    duration: "45 bis 90 Min.",
    image: "/images/headspa/head-spa-liegen-dee-studio.jpg",
    from: "ab 65 €",
    priceGroup: "head-spa",
  },
  {
    key: "pedikuere",
    title: "Pediküre",
    lead: "Basic oder Deluxe, für gepflegte Füße mit Shellac oder French.",
    description: [
      "Die Basic Pediküre umfasst Fußbad, Nagelpflege und Hornhautbehandlung. Die Deluxe Pediküre nimmt sich mehr Zeit für Pflege und Entspannung.",
      "Auf Wunsch mit Shellac, French oder Acryl, damit Hände und Füße zueinander passen.",
    ],
    image: "/images/nails/french-nails-haende-fuesse-wien.webp",
    from: "ab 40 €",
    priceGroup: "pedikuere",
  },
  {
    key: "massage",
    title: "Massage",
    lead: "Ganzkörper-, Rücken- und Nackenmassage, auch für Schwangere.",
    description: [
      "Von der kurzen Kopfmassage bis zur Ganzkörpermassage: Unsere Massagen lösen Verspannungen und schenken Ihnen eine echte Pause vom Alltag.",
      "Für werdende Mütter bieten wir eine eigene Massage für Schwangere an. Pediküre lässt sich mit einer Fußmassage kombinieren.",
    ],
    duration: "20 bis 135 Min.",
    image: "/images/headspa/head-spa-raum-dee-studio.jpg",
    from: "ab 20 €",
    priceGroup: "massage",
  },
];

/* ------------------------------------------------------------------ */
/* Studios                                                             */
/* ------------------------------------------------------------------ */

export type Studio = {
  /** URL segment of the studio's own sub-site, e.g. /dee-studio */
  slug: string;
  brand: string;
  location: string;
  district: string;
  street: string;
  city: string;
  phone: string;
  phoneHref: string;
  email?: string;
  booking: string;
  /** Google Maps link used for "Bewertung schreiben" and directions. */
  maps: string;
  mapQuery: string;
  hours: { days: string; time: string }[];
  transit?: string[];
  tagline: string;
  intro: string;
  about: string[];
  hero: string;
  cover: string;
  interior: string[];
  /** Keys from SERVICES offered here. */
  services: string[];
  /** Per-studio "ab" price on service cards, overriding SERVICES[].from. */
  from?: Record<string, string>;
  prices: PriceGroup[];
  headSpa?: boolean;
};

const mapsLink = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export const STUDIOS: Studio[] = [
  {
    slug: "dee-studio",
    brand: "Dee Studio",
    location: "Neubaugürtel",
    district: "1150 Wien",
    street: "Neubaugürtel 23a",
    city: "1150 Wien",
    phone: "+43 660 6868888",
    phoneHref: "tel:+436606868888",
    email: "info@deestudio.at",
    booking: "https://buchung.treatwell.at/ort/dee-studio/",
    maps: mapsLink("Dee Studio, Neubaugürtel 23a, 1150 Wien"),
    mapQuery: "Neubaugürtel 23a, 1150 Wien",
    hours: [
      { days: "Mo - Fr", time: "09:00 - 19:00" },
      { days: "Samstag", time: "09:00 - 18:00" },
      { days: "Sonntag", time: "Geschlossen" },
    ],
    transit: [
      "U6 Burggasse-Stadthalle, Ausgang Urban-Loritz-Platz",
      "Straßenbahn 6, 9, 18, 49 bis Urban-Loritz-Platz",
      "5 Minuten vom Westbahnhof",
    ],
    tagline: "Nails, Lashes, Head Spa & Massage",
    intro:
      "Unser erstes Studio im Herzen Wiens. Kreatives Nageldesign, Lashes und unser Head Spa in ruhiger, luxuriöser Atmosphäre.",
    about: [
      "Bei Dee Studio beginnt Schönheit mit Pflege. Unsere Artists arbeiten mit aktuellen Techniken und hochwertigen Produkten, für Nail Art, die Ihre Persönlichkeit zeigt.",
      "Neu bei uns: der Head Spa. Eine Auszeit für Kopf und Seele, nur wenige Minuten vom Westbahnhof.",
    ],
    hero: "/images/studio/dee-studio-lounge-neubauguertel.jpg",
    cover: "/images/studio/dee-studio-lounge-neubauguertel.jpg",
    interior: ["/images/studio/dee-studio-eingang-neubauguertel.jpg", "/images/studio/dee-studio-pedikuere-stuehle.jpg"],
    services: ["nails", "head-spa", "wimpern", "pedikuere", "massage"],
    from: { nails: "ab 28 €", wimpern: "ab 65 €", "head-spa": "ab 65 €", pedikuere: "ab 45 €", massage: "ab 20 €" },
    prices: DEE_PRICES,
    headSpa: true,
  },
  {
    slug: "vanilla-by-dee",
    brand: "Vanilla by Dee",
    location: "Fasangasse",
    district: "1030 Wien",
    street: "Fasangasse 32",
    city: "1030 Wien",
    phone: "+43 660 9333999",
    phoneHref: "tel:+436609333999",
    booking: "https://www.treatwell.at/ort/hi-nails-salon/",
    maps: mapsLink("Vanilla By Dee / Hi Nails, Fasangasse 32, 1030 Wien"),
    mapQuery: "Fasangasse 32, 1030 Wien",
    hours: [
      { days: "Mo - Fr", time: "09:00 - 19:00" },
      { days: "Samstag", time: "09:00 - 18:00" },
      { days: "Sonntag", time: "Geschlossen" },
    ],
    tagline: "Nails & Pediküre",
    intro: "Unser neues Studio im dritten Bezirk. Nails und Pediküre in heller, entspannter Atmosphäre.",
    about: [
      "Vanilla by Dee bringt die Handschrift von Dee Studio in den dritten Bezirk. Sorgfältige Maniküre, kreatives Nageldesign und gepflegte Füße.",
      "Ob schneller Shellac in der Mittagspause oder ein neues Set mit Nail Art: Wir nehmen uns Zeit für Sie.",
    ],
    hero: "/images/studio/vanilla-by-dee-nagelplaetze-fasangasse.jpg",
    cover: "/images/studio/vanilla-by-dee-nagelplaetze-fasangasse.jpg",
    interior: ["/images/studio/vanilla-by-dee-eingang-fasangasse.jpg", "/images/studio/vanilla-by-dee-pedikuere-fasangasse.jpg"],
    services: ["nails", "pedikuere"],
    from: { nails: "ab 25 €", pedikuere: "ab 30 €" },
    prices: VANILLA_PRICES,
  },
];

export const getStudio = (slug: string) => STUDIOS.find((s) => s.slug === slug);

/** Path inside a studio sub-site, e.g. studioPath(s, "preise") gives /dee-studio/preise */
export const studioPath = (s: Studio | string, sub = "") => {
  const slug = typeof s === "string" ? s : s.slug;
  return sub ? `/${slug}/${sub}` : `/${slug}`;
};

export const servicesOf = (s: Studio) =>
  s.services
    .map((k) => SERVICES.find((sv) => sv.key === k))
    .filter((sv): sv is Service => !!sv)
    .map((sv) => ({ ...sv, from: s.from?.[sv.key] ?? sv.from }));

