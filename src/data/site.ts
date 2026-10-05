export const SITE = {
  // Final domain; set NEXT_PUBLIC_SITE_URL on Vercel if it differs.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://deestudio.at").replace(/\/$/, ""),
  name: "Dee Studio Wien",
};

export const INSTAGRAM = "https://www.instagram.com/dee.studio.wien/";

/* ------------------------------------------------------------------ */
/* Prices                                                              */
/* ------------------------------------------------------------------ */

/** `id` is the anchor on the Preise page, e.g. /dee-studio/preise#wimpern */
export type PriceGroup = { id: string; /** Horizontal label in the price menu, like Treatwell. */ category: string; title: string; note?: string; items: [string, string][] };

// Head Spa is offered at Dee Studio (Neubaugürtel) and is the service the client wants to promote.
export const HEAD_SPA = {
  studio: "dee-studio",
  title: "Head Spa",
  tagline: "Relax. Refresh. Glow.",
  lead: "Unser Head Spa verbindet traditionelle östliche Methoden mit moderner Kopfhautpflege: Akupressur, Massage, Wasserbogen und Kopfhaut-Bedampfung für tiefe Entspannung.",
  // Second image is the studio itself; replace both with clean Head Spa photos from the client.
  images: ["/images/headspa/head-spa-dee-studio-wien.jpg", "/images/studio/dee-studio-neubauguertel-innen.webp"],
  steps: [
    { title: "Akupressur", text: "Gezielte Kopf-Akupressur löst Verspannungen und fördert die Durchblutung." },
    { title: "Massage", text: "Intensive Massage für Nacken und Schultern, dort wo sich Stress festsetzt." },
    { title: "Wasserbogen", text: "Warmes Wasser fließt sanft über die Kopfhaut und beruhigt den ganzen Körper." },
    { title: "Pflege", text: "Kopfhaut-Bedampfung und Pflege, je nach Paket ergänzt durch eine Gesichtspflege." },
  ],
  packages: [
    { name: "Essential Balance", note: "Basis Paket", duration: "45 Min.", price: "65 €" },
    { name: "Deep Relax & Care", note: "Premium Paket", duration: "60 Min.", price: "89 €" },
    { name: "Luxury Healing Journey", note: "VIP Paket", duration: "90 Min.", price: "120 €" },
  ],
  benefits: ["Tiefenentspannung & Stressabbau", "Bessere Durchblutung der Kopfhaut", "Gepflegte Kopfhaut und Haar", "Ideal als Geschenk"],
  price: "ab 65 €",
};

// Nail and pedicure prices from the old deestudio.at price list.
const NAIL_PRICES: PriceGroup[] = [
  {
    id: "neues-set",
    category: "Nägel",
    title: "Neues Set",
    note: "Neues Set / Entfernung altes Set + neues Set",
    items: [
      ["Ohne Farbe / Natur", "50 € / 55 €"],
      ["Mit Farbe", "53 € / 57 €"],
      ["Ombré (Baby Boomer)", "60 € / 65 €"],
      ["Farbiges Ombré / Glow in the Dark", "65 € / 70 €"],
    ],
  },
  {
    id: "auffuellen",
    category: "Nägel",
    title: "Auffüllen",
    items: [
      ["Ohne Farbe / Natur", "42 €"],
      ["Mit Farbe", "45 €"],
      ["Mit French", "52 €"],
    ],
  },
  {
    id: "gel-x-shellac",
    category: "Nägel",
    title: "Gel-X & Shellac",
    items: [
      ["Gel-X neues Set mit Farbe", "50 €"],
      ["Gel-X neues Set mit French", "58 €"],
      ["Shellac mit Farbe", "30 €"],
      ["Shellac mit French", "35 €"],
    ],
  },
  {
    id: "manikuere",
    category: "Nägel",
    title: "Maniküre",
    items: [
      ["Basic Maniküre", "18 €"],
      ["Maniküre mit Shellac / French", "38 € / 42 €"],
      ["Entfernung Acryl / Gel / Shellac", "18 €"],
      ["Entfernung + Maniküre", "30 €"],
      ["Entfernung + Shellac", "39 €"],
    ],
  },
  {
    id: "pedikuere",
    category: "Nägel",
    title: "Pediküre",
    items: [
      ["Basic Pediküre", "40 €"],
      ["Basic + Shellac / French", "55 € / 59 €"],
      ["Deluxe Pediküre", "60 €"],
      ["Deluxe + Shellac / French", "70 € / 75 €"],
      ["Basic + Acryl Farbe / French", "75 € / 79 €"],
      ["Deluxe + Acryl Farbe / French", "99 € / 105 €"],
    ],
  },
  {
    id: "kombis",
    category: "Nägel",
    title: "Kombis",
    items: [
      ["Hände neues Set mit Farbe + Basic Pediküre mit Shellac", "99 €"],
      ["Hände neues Set mit Farbe + Deluxe Pediküre mit Shellac", "115 €"],
    ],
  },
  {
    id: "extras",
    category: "Nägel",
    title: "Glitzer, Chrome & Extras",
    note: "Ab 1,6 cm Länge wird jeder weitere Millimeter extra berechnet.",
    items: [
      ["Gel-Glitzer pro Finger / Set", "1 € / 8 €"],
      ["Puder-Glitzer pro Finger / Set", "3 € / 15 €"],
      ["Chrome pro Finger / Set", "3 € / 15 €"],
      ["Nails XXL", "10 €"],
      ["Nail Design pro Finger", "ab 2 €"],
      ["Swarovski Steine", "ab 0,50 € / Stk."],
      ["Charms", "ab 4 € / Stk."],
      ["Nagelreparatur", "8 € / Finger"],
    ],
  },
];

// From Dee Studio's Treatwell menu (regular prices, before the 10 % off-peak discount).
const DEE_ONLY_PRICES: PriceGroup[] = [
  {
    id: "head-spa",
    category: "Massage",
    title: "Head Spa",
    items: HEAD_SPA.packages.map((p) => [`${p.note} „${p.name}“, ${p.duration}`, p.price] as [string, string]),
  },
  {
    id: "wimpern",
    category: "Gesicht",
    title: "Wimpern",
    items: [
      ["Wimpernlifting", "65 €"],
      ["Wimpernverlängerung 1:1, Neuanlage", "99 €"],
      ["Light Volume 2:1 / 3:1, Neuanlage", "110 €"],
      ["Mega Volume 5D bis 8D, Neuanlage", "120 €"],
      ["Anime / Douyin / Manga Style", "130 €"],
      ["Auffüllen (1:1, Light oder Mega Volume)", "55 €"],
      ["Entfernung", "15 €"],
    ],
  },
  {
    id: "massage",
    category: "Massage",
    title: "Massage",
    items: [
      ["Kopfmassage, 20 bis 40 Min.", "ab 20 €"],
      ["Schulter-, Rücken- & Nackenmassage, 45 bis 60 Min.", "ab 40 €"],
      ["Rückenmassage, 40 bis 75 Min.", "ab 40 €"],
      ["Ganzkörpermassage, 75 bis 135 Min.", "ab 70 €"],
      ["Massage für Schwangere, 75 bis 105 Min.", "ab 70 €"],
    ],
  },
  {
    id: "pedikuere-massage",
    category: "Nägel",
    title: "Pediküre mit Massage",
    items: [
      ["Pediküre + Fußmassage", "ab 55 €"],
      ["Deluxe Pediküre + Fußmassage", "ab 75 €"],
      ["Deluxe Pediküre + Deluxe Maniküre, jeweils mit Shellac", "130 €"],
      ["Deluxe Pediküre mit Shellac + Neues Set", "136 €"],
    ],
  },
];

const VANILLA_PRICES: PriceGroup[] = [
  {
    id: "neues-set",
    category: "Nägel",
    title: "Nagelmodellage Acryl / Gel",
    items: [
      ["Neues Set mit Acryl (mit oder ohne Tips)", "55 €"],
      ["Neues Set mit Gel (mit oder ohne Tips)", "55 €"],
      ["Acryl / Gel auffüllen", "45 €"],
      ["Entfernung Gel / Acryl", "ab 19 €"],
      ["Zehennagelmodellage Acryl / Polygel", "45 €"],
      ["Nagelreparatur", "ab 5 €"],
    ],
  },
  {
    id: "manikuere",
    category: "Nägel",
    title: "Maniküre",
    items: [
      ["Basis Maniküre ohne Lack", "25 €"],
      ["Basis Maniküre mit Shellac (inkl. Entfernung)", "39 €"],
      ["Deluxe Maniküre inkl. Handmaske", "ab 45 €"],
      ["Nur Shellac lackieren", "30 €"],
      ["Entfernung Shellac / Gellack", "ab 10 €"],
    ],
  },
  {
    id: "pedikuere",
    category: "Nägel",
    title: "Pediküre",
    items: [
      ["Basic Pediküre", "ab 45 €"],
      ["Deluxe Pediküre inkl. Handtuch-Wrap und Augenmaske", "ab 65 €"],
      ["Fußnägel mit Shellac lackieren (ohne Pediküre)", "ab 30 €"],
    ],
  },
  {
    id: "extras",
    category: "Nägel",
    title: "Nageldesign",
    items: [
      ["Steine pro Stück", "0,50 €"],
      ["Nagelmuster pro Finger", "3 €"],
      ["3D Blumen pro Finger", "8 €"],
      ["Airbrush, Cateye Set oder Chrome Set", "15 €"],
      ["Cateye mit Chrome", "25 €"],
      ["Nagelmuster Set", "15 € bis 75 €"],
    ],
  },
  {
    id: "massage",
    category: "Massage",
    title: "Massage",
    items: [["Fußmassage, 10 bis 20 Min.", "ab 19 €"]],
  },
];

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
    priceGroup: "wimpern",
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
    image: "/images/headspa/head-spa-dee-studio-wien.jpg",
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
    // No massage photo yet; the treatment room stands in.
    image: "/images/studio/dee-studio-pedikuere-neubauguertel.webp",
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
    hero: "/images/nails/chrome-nails-silber-xxl-wien.webp",
    cover: "/images/studio/dee-studio-neubauguertel-innen.webp",
    interior: ["/images/studio/dee-studio-empfang-neubauguertel.webp", "/images/studio/dee-studio-pedikuere-neubauguertel.webp"],
    services: ["nails", "head-spa", "wimpern", "pedikuere", "massage"],
    prices: [...DEE_ONLY_PRICES, ...NAIL_PRICES],
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
    // No photos of this studio yet: Dee Studio nail work stands in until the client sends real shots.
    hero: "/images/nails/babyboomer-ombre-kristalle-wien.jpg",
    cover: "/images/nails/babyboomer-ombre-kristalle-wien.jpg",
    interior: ["/images/nails/chrome-glazed-nails-natur-wien.webp", "/images/nails/acrylnaegel-modellage-wien.jpg"],
    services: ["nails", "pedikuere"],
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
  s.services.map((k) => SERVICES.find((sv) => sv.key === k)).filter((sv): sv is Service => !!sv);

export const FAQ = [
  {
    q: "Wie buche ich einen Termin?",
    a: "Am einfachsten online über Treatwell. Wählen Sie einfach Ihr Studio. Natürlich erreichen Sie uns auch telefonisch oder per Instagram-DM.",
  },
  {
    q: "Kann ich ein Wunschdesign mitbringen?",
    a: "Unbedingt! Zeigen Sie uns Ihre Inspiration von Instagram oder Pinterest, wir beraten Sie und setzen Ihre Idee um.",
  },
  {
    q: "Wie lange hält ein neues Set?",
    a: "Bei guter Pflege 3 bis 4 Wochen. Danach empfehlen wir ein Auffüllen, damit Ihre Nägel perfekt bleiben.",
  },
  {
    q: "Gibt es Garantie?",
    a: "Ja. Sollte innerhalb der ersten Tage etwas abbrechen, melden Sie sich bei uns. Wir kümmern uns darum.",
  },
];
