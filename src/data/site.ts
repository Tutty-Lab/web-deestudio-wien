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
  headSpa?: boolean;
  /** Has its own gallery and SEO style pages. */
  gallery?: boolean;
};

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
    services: ["nails", "head-spa", "lashes", "pedicure", "massage"],
    headSpa: true,
    gallery: true,
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
    // No photos of this studio yet: nail work stands in until the client sends interior shots.
    hero: "/images/nails/babyboomer-ombre-kristalle-wien.jpg",
    cover: "/images/nails/babyboomer-ombre-kristalle-wien.jpg",
    interior: ["/images/nails/chrome-glazed-nails-natur-wien.webp", "/images/nails/acrylnaegel-modellage-wien.jpg"],
    services: ["nails", "pedicure"],
  },
];

export const SITE = {
  // Final domain; set NEXT_PUBLIC_SITE_URL on Vercel if it differs.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://deestudio.at").replace(/\/$/, ""),
  name: "Dee Studio",
};

export const getStudio = (slug: string) => STUDIOS.find((s) => s.slug === slug);

/** Path inside a studio sub-site, e.g. studioPath(s, "preise") gives /dee-studio/preise */
export const studioPath = (s: Studio | string, sub = "") => {
  const slug = typeof s === "string" ? s : s.slug;
  return sub ? `/${slug}/${sub}` : `/${slug}`;
};

export type Service = {
  key: string;
  title: string;
  lead: string;
  image: string;
  from: string;
};

export const SERVICES: Service[] = [
  {
    key: "nails",
    title: "Nails",
    lead: "Acryl, Gel-X, Shellac und Nail Art. Jedes Set ist ein Unikat.",
    image: "/images/nails/french-nails-weiss-steine-wien.webp",
    from: "ab 30 €",
  },
  {
    key: "lashes",
    title: "Lashes",
    lead: "Wimpernverlängerung von natürlich bis Volumen.",
    image: "/images/lashes/wimpern-natuerlich-wien.jpg",
    from: "ab 65 €",
  },
  {
    key: "head-spa",
    title: "Head Spa",
    lead: "Tiefenentspannung für Kopfhaut, Haar und Seele. Exklusiv bei Dee Studio.",
    image: "/images/headspa/head-spa-dee-studio-wien.jpg",
    from: "ab 65 €",
  },
  {
    key: "pedicure",
    title: "Pediküre",
    lead: "Basic oder Deluxe, für gepflegte Füße mit Shellac oder French.",
    image: "/images/nails/french-nails-haende-fuesse-wien.webp",
    from: "ab 40 €",
  },
  {
    key: "massage",
    title: "Massage",
    lead: "Ganzkörper-, Rücken- und Nackenmassage, auch für Schwangere.",
    // No massage photo yet; the treatment room stands in.
    image: "/images/studio/dee-studio-pedikuere-neubauguertel.webp",
    from: "ab 20 €",
  },
];

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

export type PriceGroup = { title: string; note?: string; items: [string, string][] };

/** Services only Dee Studio offers, shown above the shared nail price list. */
export const DEE_EXTRA_PRICES: PriceGroup[] = [
  {
    title: "Head Spa",
    items: HEAD_SPA.packages.map((p) => [`${p.note} „${p.name}“, ${p.duration}`, p.price] as [string, string]),
  },
  {
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
    title: "Pediküre mit Massage",
    items: [
      ["Pediküre + Fußmassage", "ab 55 €"],
      ["Deluxe Pediküre + Fußmassage", "ab 75 €"],
      ["Deluxe Pediküre + Deluxe Maniküre, jeweils mit Shellac", "130 €"],
      ["Deluxe Pediküre mit Shellac + Neues Set", "136 €"],
    ],
  },
];

export const PRICES: PriceGroup[] = [
  {
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
    title: "Auffüllen",
    items: [
      ["Ohne Farbe / Natur", "42 €"],
      ["Mit Farbe", "45 €"],
      ["Mit French", "52 €"],
    ],
  },
  {
    title: "Gel-X & Shellac",
    items: [
      ["Gel-X neues Set mit Farbe", "50 €"],
      ["Gel-X neues Set mit French", "58 €"],
      ["Shellac mit Farbe", "30 €"],
      ["Shellac mit French", "35 €"],
    ],
  },
  {
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
    title: "Kombis",
    items: [
      ["Hände neues Set mit Farbe + Basic Pediküre mit Shellac", "99 €"],
      ["Hände neues Set mit Farbe + Deluxe Pediküre mit Shellac", "115 €"],
    ],
  },
  {
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

export const INSTAGRAM = "https://www.instagram.com/dee.studio.wien/";
