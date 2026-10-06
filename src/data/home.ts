// Content for the group site (landing + Über uns, Philosophie, Hygiene, Bewertungen).
// Draft copy: confirm wording with the client before launch.

export const GREETING = "Willkommen bei Dee Studio Wien: zwei Studios, eine Handschrift. Wählen Sie Ihr Studio.";

export const LETTER = {
  title: "Ein Brief an Sie",
  /** Short version for the landing page. */
  excerpt:
    "Dee Studio ist aus einer einfachen Idee entstanden: ein Ort in Wien, an dem Sie sich wirklich Zeit für sich nehmen können. Kein Fließband, keine Hektik, sondern eine Behandlung, bei der wir zuhören und mit Sorgfalt arbeiten.",
  paragraphs: [
    "Liebe Kundin, lieber Kunde,",
    "Dee Studio ist aus einer einfachen Idee entstanden: ein Ort in Wien, an dem Sie sich wirklich Zeit für sich nehmen können. Kein Fließband, keine Hektik, sondern eine Behandlung, bei der wir zuhören und mit Sorgfalt arbeiten.",
    "Am Neubaugürtel hat alles mit Nageldesign begonnen. Heute kümmern wir uns dort auch um Ihre Wimpern und laden Sie zu unserem Head Spa ein. Mit Vanilla by Dee in der Fasangasse bringen wir dieselbe Handschrift in den dritten Bezirk.",
    "Danke, dass Sie uns Ihr Vertrauen schenken. Wir freuen uns auf Ihren Besuch.",
  ],
  signature: "Ihr Dee Studio Team",
  image: "/images/studio/dee-studio-empfang-team-neubauguertel.jpg",
};

export const VALUES = [
  {
    key: "vision",
    label: "Vision",
    title: "Der Ort, an dem Wien abschaltet",
    text: "Wir möchten das Studio sein, an das Sie zuerst denken, wenn Sie sich etwas Gutes tun wollen: für schöne Nägel ebenso wie für eine Stunde echte Ruhe.",
    details: [
      "Ein Termin bei uns soll sich nicht wie eine Erledigung anfühlen, sondern wie eine Pause. Darum gestalten wir unsere Studios hell, ruhig und gemütlich, mit Zeit für ein Gespräch und einen Kaffee.",
      "Mit dem Head Spa und unseren Massagen erweitern wir diesen Gedanken: Schönheit und Entspannung gehören für uns zusammen.",
    ],
  },
  {
    key: "mission",
    label: "Mission",
    title: "Handwerk mit Sorgfalt",
    text: "Jede Behandlung ist individuell. Wir beraten ehrlich, arbeiten präzise und verwenden hochwertige Produkte, damit das Ergebnis lange hält und Ihre Nägel gesund bleiben.",
    details: [
      "Wir sagen Ihnen offen, welche Technik zu Ihren Nägeln und Ihrem Alltag passt, auch wenn das manchmal die einfachere Lösung ist.",
      "Unsere Artists bilden sich laufend weiter, damit Sie von neuen Techniken profitieren, ohne dass die Gesundheit Ihrer Naturnägel leidet.",
    ],
  },
  {
    key: "philosophie",
    label: "Philosophie",
    title: "Relax. Refresh. Glow.",
    text: "Schönheit beginnt mit Wohlbefinden. Darum verbinden wir kreatives Nageldesign mit Momenten der Entspannung, vom ersten Kaffee bis zum letzten Top Coat.",
    details: [
      "Relax: Sie kommen an und dürfen loslassen. Refresh: Wir pflegen, was der Alltag strapaziert. Glow: Sie gehen mit einem Ergebnis nach Hause, das Ihnen Freude macht.",
    ],
  },
];

// No names or portraits yet: the client should send team photos and names before launch.
export const TEAM = {
  intro:
    "Jede unserer Artists ist handverlesen und in den neuesten Techniken geschult, damit Sie immer das beste Ergebnis bekommen. Unser Team vereint Nail Artists, Lash Artists, Head Spa und Massage unter einem Dach.",
  groups: [
    { title: "Nail Artists", text: "Acryl, Gel-X, Shellac und Nail Art von Hand.", image: "/images/nails/acrylnaegel-modellage-wien.jpg" },
    { title: "Lash Artists", text: "Wimpernverlängerung von 1:1 bis Mega Volume.", image: "/images/lashes/wimpernverlaengerung-wien.jpg" },
    { title: "Head Spa & Massage", text: "Akupressur, Kopfhautpflege und Körpermassagen.", image: "/images/headspa/head-spa-raum-dee-studio.jpg" },
  ],
};

// Practices to confirm with the client; gloves and masks are visible in the studio photos.
export const HYGIENE = {
  intro:
    "Ihre Gesundheit ist uns genauso wichtig wie ein schönes Ergebnis. Deshalb gelten in beiden Studios dieselben Hygieneregeln.",
  items: [
    { title: "Handschuhe & Maske", text: "Unsere Artists arbeiten mit Einweghandschuhen und, wo sinnvoll, mit Maske." },
    { title: "Desinfektion", text: "Hände, Arbeitsplatz und Geräte werden vor jeder Behandlung desinfiziert." },
    { title: "Saubere Instrumente", text: "Metallinstrumente werden nach jeder Kundin gereinigt und sterilisiert." },
    { title: "Einwegmaterial", text: "Feilen und Buffer, die nicht sterilisiert werden können, gibt es nur einmal pro Kundin." },
    { title: "Frische Wäsche", text: "Handtücher und Liegenbezüge werden nach jeder Behandlung gewechselt." },
    { title: "Geprüfte Produkte", text: "Wir verwenden Produkte namhafter Hersteller, die für den professionellen Einsatz zugelassen sind." },
  ],
  image: "/images/studio/dee-studio-pedikuere-neubauguertel.webp",
};

export type Review = {
  /** First name + initial, e.g. "Anna K." */
  name: string;
  text: string;
  source: "Google" | "Treatwell";
  service: string;
  studio: string;
  date?: string;
  /** Stars 1 to 5 as given on Google/Treatwell. */
  rating?: number;
};

/**
 * Real customer reviews only (copied with permission from Google or Treatwell).
 * Never add invented reviews: fake testimonials are unlawful in Austria (UWG).
 * While empty, /bewertungen is noindex and the landing shows only the rating.
 */
export const REVIEWS: Review[] = [];

/** Public Google ratings (Google Maps, October 2026). Vanilla by Dee: add once the client sends it. */
export type StudioRating = {
  studio: string;
  value: string;
  count: number;
  source: "Google";
  /** Google Maps listing (opens on the reviews). */
  url: string;
  /** Topics Google itself extracts from the reviews, most frequent first. */
  topics?: string[];
  checked: string;
};

// Real figures read from the Google Maps listings on 07.10.2026. Update when they change.
export const RATINGS: StudioRating[] = [
  {
    studio: "dee-studio",
    value: "4,8",
    count: 182,
    source: "Google",
    url: "https://maps.google.com/?cid=7490871630833466170",
    topics: ["zufrieden", "Team", "hygienisch", "höflich", "Termin", "perfekt", "Preise"],
    checked: "Oktober 2026",
  },
  {
    studio: "vanilla-by-dee",
    value: "5,0",
    count: 4,
    source: "Google",
    url: "https://maps.google.com/?cid=3744932003794973387",
    checked: "Oktober 2026",
  },
];

/**
 * What customers repeatedly praise in the Google reviews, summarised in our own words (read 07.10.2026).
 * This is an editorial summary, not individual reviews: no names, no quotes, no Review schema.
 */
export const REVIEW_HIGHLIGHTS: { studio: string; items: { title: string; text: string }[] }[] = [
  {
    studio: "dee-studio",
    items: [
      {
        title: "Hygiene wie in einer Praxis",
        text: "Am häufigsten erwähnen Kundinnen unsere Hygiene: Jede Kundin bekommt ein eigenes, steril verpacktes Instrumentenset, das wir vor ihren Augen öffnen und nach der Behandlung desinfizieren und sterilisieren.",
      },
      {
        title: "Wünsche, die wirklich umgesetzt werden",
        text: "Stammkundinnen schreiben, dass wir zuhören, zwischendurch nachfragen und das Ergebnis jedes Mal so wird, wie sie es sich vorgestellt haben. Deshalb kommen sie immer wieder in unser Nagelstudio im 15. Bezirk.",
      },
      {
        title: "Große Auswahl an Farben und Designs",
        text: "Gelobt wird die Auswahl: sehr viele Gel-Farben, Steinchen, Nail Art und Formen, von French und Babyboomer bis zu Chrome Nails und XXL.",
      },
      {
        title: "Schnell einen Termin",
        text: "Mehrere Kundinnen haben noch am selben Tag einen Termin bekommen. Online über Treatwell buchen geht rund um die Uhr.",
      },
      {
        title: "Modernes Studio und Head Spa zum Entspannen",
        text: "Das moderne, helle Studio am Neubaugürtel fällt vielen sofort auf. Beim Premium Head Spa mit rund 70 Minuten beginnt die Behandlung mit Entspannung im Massagesessel, bevor Kopfhaut und Haare gepflegt werden.",
      },
      {
        title: "Freundliches, professionelles Team",
        text: "Immer wieder genannt: freundlich, aufmerksam, professionell. Kundinnen fühlen sich gut aufgehoben und empfehlen uns weiter.",
      },
    ],
  },
];

export const STATIC_PAGES = [
  { href: "/ueber-uns", label: "Über uns", text: "Unser Brief an Sie" },
  { href: "/philosophie", label: "Philosophie", text: "Vision, Mission und Werte" },
  { href: "/hygiene", label: "Hygiene", text: "Unsere Hygieneregeln" },
  { href: "/bewertungen", label: "Bewertungen", text: "Erfahrungen unserer Kundinnen" },
];
