export type Studio = {
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
  intro: string;
  cover: string;
  interior: string[];
};

export const STUDIOS: Studio[] = [
  {
    slug: "neubauguertel",
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
      { days: "Mo – Fr", time: "09:00 – 19:00" },
      { days: "Samstag", time: "09:00 – 18:00" },
      { days: "Sonntag", time: "Geschlossen" },
    ],
    transit: [
      "U6 Burggasse – Stadthalle, Ausgang Urban-Loritz-Platz",
      "Straßenbahn 6, 9, 18, 49 – Urban-Loritz-Platz",
      "5 Minuten vom Westbahnhof",
    ],
    intro:
      "Unser erstes Studio im Herzen Wiens – kreatives Nageldesign, Lashes und unser Head Spa: Beauty-Rituale in ruhiger, luxuriöser Atmosphäre.",
    cover: "/images/site/g-10.12-5.webp",
    interior: ["/images/site/g-10.12-6.webp", "/images/site/g-10.12-4.webp"],
  },
  {
    slug: "fasangasse",
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
      { days: "Mo – Fr", time: "09:00 – 19:00" },
      { days: "Samstag", time: "09:00 – 18:00" },
      { days: "Sonntag", time: "Geschlossen" },
    ],
    intro:
      "Unser neues Studio im dritten Bezirk – Nails, Lashes und Head Spa. Ein Ort zum Abschalten: Relax. Refresh. Glow.",
    cover: "/images/ig/ig12.jpg",
    interior: ["/images/ig/ig10.jpg", "/images/ig/ig01.jpg"],
  },
];

export const getStudio = (slug: string) => STUDIOS.find((s) => s.slug === slug);

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
    lead: "Acryl, Gel-X, Shellac und Nail Art – jedes Set ein Unikat.",
    image: "/images/site/g-10.12-1-1.webp",
    from: "ab 30 €",
  },
  {
    key: "lashes",
    title: "Lashes",
    lead: "Wimpernverlängerung von natürlich bis Volumen.",
    image: "/images/ig/ig09.jpg",
    from: "auf Anfrage",
  },
  {
    key: "head-spa",
    title: "Head Spa",
    lead: "Tiefenentspannung für Kopfhaut, Haar und Seele – exklusiv bei Dee Studio.",
    image: "/images/ig/ig01.jpg",
    from: "auf Anfrage",
  },
  {
    key: "pedicure",
    title: "Pediküre",
    lead: "Basic oder Deluxe – gepflegte Füße mit Shellac oder French.",
    image: "/images/site/g-10.12-7.webp",
    from: "ab 40 €",
  },
];

// Head Spa is offered at Dee Studio (Neubaugürtel) and is the service the client wants to promote.
export const HEAD_SPA = {
  studio: "neubauguertel",
  title: "Head Spa",
  tagline: "Relax. Refresh. Glow.",
  lead: "Unser Head Spa ist eine Auszeit für Kopf und Seele: sanfte Reinigung, wohltuende Massage und intensive Pflege für Kopfhaut und Haar – während Sie ganz abschalten.",
  images: ["/images/ig/ig01.jpg", "/images/ig/ig05.jpg"],
  steps: [
    { title: "Ankommen", text: "Kurze Beratung zu Kopfhaut, Haar und Ihren Wünschen." },
    { title: "Reinigen", text: "Sanfte Tiefenreinigung von Kopfhaut und Haar mit warmem Wasser." },
    { title: "Massage", text: "Entspannende Massage von Kopf, Nacken und Schultern." },
    { title: "Pflege", text: "Nährende Pflege für glänzendes Haar und eine ausgeglichene Kopfhaut." },
  ],
  benefits: ["Tiefenentspannung & Stressabbau", "Gesunde, ausgeglichene Kopfhaut", "Glänzendes, gepflegtes Haar", "Ideal als Geschenk"],
  price: "Preis auf Anfrage",
};

export type PriceGroup = { title: string; note?: string; items: [string, string][] };

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

export type GalleryItem = { src: string; alt: string; cat: "nails" | "lashes" | "spa" | "studio" };

export const GALLERY: GalleryItem[] = [
  { src: "/images/site/g-11.34.webp", alt: "Silver Chrome Nails", cat: "nails" },
  { src: "/images/ig/ig08.jpg", alt: "Lashes by Dee Studio", cat: "lashes" },
  { src: "/images/site/g-10.12-1-1.webp", alt: "White French mit Steinen", cat: "nails" },
  { src: "/images/ig/ig10.jpg", alt: "Studio Interior", cat: "studio" },
  { src: "/images/site/g-11.34-2.webp", alt: "Playful Nail Art", cat: "nails" },
  { src: "/images/ig/ig09.jpg", alt: "Volume Lashes", cat: "lashes" },
  { src: "/images/ig/ig11.jpg", alt: "Floral Long Nails", cat: "nails" },
  { src: "/images/ig/ig01.jpg", alt: "Head Spa", cat: "spa" },
  { src: "/images/site/g-10.12-8.webp", alt: "Pink Marble Nails", cat: "nails" },
  { src: "/images/ig/ig06.jpg", alt: "Pink Ombré mit Kristallen", cat: "nails" },
  { src: "/images/site/g-10.12-7.webp", alt: "French Hände & Füße", cat: "nails" },
  { src: "/images/ig/ig02.jpg", alt: "Lash Extensions", cat: "lashes" },
  { src: "/images/site/g-10.12-2-1.webp", alt: "Nail Design", cat: "nails" },
  { src: "/images/ig/ig05.jpg", alt: "Head Spa Ritual", cat: "spa" },
  { src: "/images/site/g-10.12-3-1.webp", alt: "Nail Design", cat: "nails" },
  { src: "/images/site/g-10.12-5.webp", alt: "Studio Neubaugürtel", cat: "studio" },
];

export const FAQ = [
  {
    q: "Wie buche ich einen Termin?",
    a: "Am einfachsten online über Treatwell – wählen Sie einfach Ihr Studio. Natürlich erreichen Sie uns auch telefonisch oder per Instagram-DM.",
  },
  {
    q: "Kann ich ein Wunschdesign mitbringen?",
    a: "Unbedingt! Zeigen Sie uns Ihre Inspiration von Instagram oder Pinterest – wir beraten Sie und setzen Ihre Idee um.",
  },
  {
    q: "Wie lange hält ein neues Set?",
    a: "Bei guter Pflege 3–4 Wochen. Danach empfehlen wir ein Auffüllen, damit Ihre Nägel perfekt bleiben.",
  },
  {
    q: "Gibt es Garantie?",
    a: "Ja – sollte innerhalb der ersten Tage etwas abbrechen, melden Sie sich bei uns. Wir kümmern uns darum.",
  },
];

export const INSTAGRAM = "https://www.instagram.com/dee.studio.wien/";
