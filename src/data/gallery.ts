// Photo gallery. Every image belongs to exactly one studio; a studio's Galerie shows only its own photos.

export type GalleryItem = {
  src: string;
  alt: string;
  studio: string;
  /** Filter slugs from STYLES. */
  styles: string[];
};

/** Filter buttons on the Galerie page (client-side, URL hash = slug). */
export const STYLES: { slug: string; name: string }[] = [
  { slug: "french", name: "French" },
  { slug: "chrome", name: "Chrome" },
  { slug: "nail-art", name: "Nail Art" },
  { slug: "xxl", name: "XXL" },
  { slug: "acryl", name: "Acryl" },
  { slug: "babyboomer", name: "Babyboomer" },
  { slug: "wimpern", name: "Wimpern" },
  { slug: "studio", name: "Studio" },
];

const DEE = "dee-studio";
const VANILLA = "vanilla-by-dee";

export const GALLERY: GalleryItem[] = [
  {
    src: "/images/nails/chrome-nails-silber-xxl-wien.webp",
    alt: "Lange Chrome Nails in Silber mit Reptil-Struktur, Dee Studio Wien",
    studio: DEE,
    styles: ["chrome", "xxl", "nail-art"],
  },
  {
    src: "/images/nails/french-nails-weiss-steine-wien.webp",
    alt: "Weiße French Nails mit V-French und Steinen, Nagelstudio Wien",
    studio: DEE,
    styles: ["french", "acryl"],
  },
  {
    src: "/images/lashes/wimpern-volumen-wien.jpg",
    alt: "Volumen Wimpernverlängerung bei Dee Studio Wien",
    studio: DEE,
    styles: ["wimpern"],
  },
  {
    src: "/images/nails/nail-art-smiley-schachbrett-wien.webp",
    alt: "Bunte Nail Art mit Smileys, Schachbrett und Schmetterlingen, Wien",
    studio: DEE,
    styles: ["nail-art", "xxl"],
  },
  {
    src: "/images/nails/french-nails-schwarz-xxl-wien.webp",
    alt: "Schwarze XXL French Nails mit Kristallen, Dee Studio Wien",
    studio: DEE,
    styles: ["french", "xxl", "acryl", "nail-art"],
  },
  {
    src: "/images/nails/xxl-stiletto-ombre-blumen-wien.jpg",
    alt: "XXL Stiletto Nägel mit gelbem Ombré und Blumen-Design, Wien",
    studio: DEE,
    styles: ["xxl", "babyboomer", "nail-art"],
  },
  {
    src: "/images/headspa/head-spa-liegen-dee-studio.jpg",
    alt: "Head Spa Liegen mit warmem Licht bei Dee Studio Neubaugürtel",
    studio: DEE,
    styles: ["studio"],
  },
  {
    src: "/images/nails/babyboomer-ombre-kristalle-wien.jpg",
    alt: "Babyboomer Nägel in Rosa mit Kristallen und 3D-Blüten, Wien",
    studio: DEE,
    styles: ["babyboomer", "xxl", "acryl", "nail-art"],
  },
  {
    src: "/images/lashes/wimpern-natuerlich-wien.jpg",
    alt: "Natürliche Wimpernverlängerung im Spiegel, Dee Studio Wien",
    studio: DEE,
    styles: ["wimpern"],
  },
  {
    src: "/images/nails/nail-art-rosa-marmor-wien.webp",
    alt: "Rosa Marmor Nägel mit Schmetterling-Charms, Nagelstudio Wien",
    studio: DEE,
    styles: ["nail-art", "acryl", "babyboomer", "xxl"],
  },
  {
    src: "/images/nails/french-nails-haende-fuesse-wien.webp",
    alt: "Passende French Nails an Händen und Füßen, Dee Studio Wien",
    studio: DEE,
    styles: ["french", "acryl"],
  },
  {
    src: "/images/nails/chrome-glazed-nails-natur-wien.webp",
    alt: "Kurze Glazed Chrome Nails in Nude, Nagelstudio Wien",
    studio: DEE,
    styles: ["chrome"],
  },
  {
    src: "/images/lashes/wimpernverlaengerung-wien.jpg",
    alt: "Wimpernverlängerung wird Wimper für Wimper gesetzt, Wien",
    studio: DEE,
    styles: ["wimpern"],
  },
  {
    src: "/images/nails/acrylnaegel-modellage-wien.jpg",
    alt: "Acrylnägel Modellage mit Tips und Leo-Design, Wien",
    studio: DEE,
    styles: ["acryl", "xxl"],
  },
  {
    src: "/images/studio/dee-studio-nagelplaetze-neubauguertel.webp",
    alt: "Nagelplätze im Dee Studio am Neubaugürtel, 1150 Wien",
    studio: DEE,
    styles: ["studio"],
  },
  {
    src: "/images/studio/pedikuere-studio-wien.jpg",
    alt: "Pediküre-Plätze im Studio, Dee Studio Wien",
    studio: DEE,
    styles: ["studio"],
  },
  { src: "/images/studio/dee-studio-lounge-neubauguertel.jpg", alt: "Lounge von Dee Studio am Neubaugürtel, Wien", studio: DEE, styles: ["studio"] },
  { src: "/images/headspa/head-spa-raum-dee-studio.jpg", alt: "Head Spa Raum bei Dee Studio Wien", studio: DEE, styles: ["studio"] },
  { src: "/images/studio/dee-studio-nagelbar-neubauguertel.jpg", alt: "Nagelbar von Dee Studio, 1150 Wien", studio: DEE, styles: ["studio"] },
  { src: "/images/studio/dee-studio-pedikuere-stuehle.jpg", alt: "Pediküre-Stühle bei Dee Studio Wien", studio: DEE, styles: ["studio"] },
  { src: "/images/studio/dee-studio-eingang-neubauguertel.jpg", alt: "Eingang Dee Studio, Neubaugürtel 23a, 1150 Wien", studio: DEE, styles: ["studio"] },
  { src: "/images/studio/vanilla-by-dee-nagelplaetze-fasangasse.jpg", alt: "Nagelplätze bei Vanilla by Dee, Fasangasse, 1030 Wien", studio: VANILLA, styles: ["studio"] },
  { src: "/images/studio/vanilla-by-dee-eingang-fasangasse.jpg", alt: "Eingang Vanilla by Dee, Fasangasse 32, 1030 Wien", studio: VANILLA, styles: ["studio"] },
  { src: "/images/studio/vanilla-by-dee-pedikuere-fasangasse.jpg", alt: "Pediküre-Stühle bei Vanilla by Dee Wien", studio: VANILLA, styles: ["studio"] },
  { src: "/images/studio/vanilla-by-dee-farbauswahl.jpg", alt: "Große Farbauswahl an Gellacken bei Vanilla by Dee", studio: VANILLA, styles: ["studio"] },
  { src: "/images/studio/vanilla-by-dee-farbmuster.jpg", alt: "Farbmuster für Nägel bei Vanilla by Dee, Wien", studio: VANILLA, styles: ["studio"] },
  { src: "/images/studio/vanilla-by-dee-lounge.jpg", alt: "Wartebereich bei Vanilla by Dee, 1030 Wien", studio: VANILLA, styles: ["studio"] },
  { src: "/images/studio/vanilla-by-dee-farbmuster-regal.jpg", alt: "Regal mit Farbmustern bei Vanilla by Dee", studio: VANILLA, styles: ["studio"] },
];

export const galleryOf = (studio: string) => GALLERY.filter((g) => g.studio === studio);

/** Styles that actually have photos for this studio (empty filters are hidden). */
export const stylesOf = (studio: string) => {
  const items = galleryOf(studio);
  return STYLES.filter((s) => items.some((g) => g.styles.includes(s.slug)));
};

/** SEO copy for the Galerie page (condensed from the former style pages). */
export const GALLERY_TEXT = {
  intro:
    "Von klassischen French Nails über glänzende Chrome Designs und Babyboomer bis zu XXL Nägeln und handgemalter Nail Art: Hier sehen Sie echte Arbeiten aus unserem Studio. Filtern Sie nach Stil und bringen Sie Ihre Lieblingsidee einfach zum Termin mit.",
  faqs: [
    {
      q: "Kann ich ein Design aus der Galerie buchen?",
      a: "Ja. Zeigen Sie uns das Foto beim Termin oder vorab per Instagram-DM. Nail Design berechnen wir ab 2 € pro Finger, Steine ab 0,50 € pro Stück.",
    },
    {
      q: "Was ist der Unterschied zwischen French und Babyboomer?",
      a: "Bei French Nails ist die Spitze klar abgegrenzt. Bei Babyboomer Nägeln verläuft die Farbe weich von Rosa zu Weiß.",
    },
    {
      q: "Wie lang dürfen XXL Nägel sein?",
      a: "So lang Sie möchten. Zum neuen Set kommt ein Aufpreis von 10 € für Nails XXL, ab 1,6 cm wird jeder weitere Millimeter extra berechnet.",
    },
  ],
};
