// Content for the group landing page. Draft copy: confirm wording with the client before launch.

export const LETTER = {
  title: "Ein Brief an Sie",
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
  },
  {
    key: "mission",
    label: "Mission",
    title: "Handwerk mit Sorgfalt",
    text: "Jede Behandlung ist individuell. Wir beraten ehrlich, arbeiten präzise und verwenden hochwertige Produkte, damit das Ergebnis lange hält und Ihre Nägel gesund bleiben.",
  },
  {
    key: "philosophie",
    label: "Philosophie",
    title: "Relax. Refresh. Glow.",
    text: "Schönheit beginnt mit Wohlbefinden. Darum verbinden wir kreatives Nageldesign mit Momenten der Entspannung, vom ersten Kaffee bis zum letzten Top Coat.",
  },
];

// No names or portraits yet: the client should send team photos and names before launch.
export const TEAM = {
  intro:
    "Jede unserer Artists ist handverlesen und in den neuesten Techniken geschult, damit Sie immer das beste Ergebnis bekommen. Unser Team vereint Nail Artists, Lash Artists, Head Spa und Massage unter einem Dach.",
  groups: [
    { title: "Nail Artists", text: "Acryl, Gel-X, Shellac und Nail Art von Hand.", image: "/images/nails/acrylnaegel-modellage-wien.jpg" },
    { title: "Lash Artists", text: "Wimpernverlängerung von 1:1 bis Mega Volume.", image: "/images/lashes/wimpernverlaengerung-wien.jpg" },
    { title: "Head Spa & Massage", text: "Akupressur, Kopfhautpflege und Körpermassagen.", image: "/images/headspa/head-spa-dee-studio-wien.jpg" },
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

/**
 * Real customer reviews only (copied with permission from Google or Treatwell).
 * Never add invented reviews: fake testimonials are unlawful in Austria (UWG).
 */
export const REVIEWS: { name: string; text: string; source: string; studio: string }[] = [];

/** Public Google rating of Dee Studio (Google Maps, October 2026). Update when it changes. */
export const RATING = { value: "4,8", source: "Google", studio: "Dee Studio, Neubaugürtel" };

export const REVIEW_LINKS = [
  { label: "Bewertungen auf Google", href: "https://www.google.com/maps/search/?api=1&query=Dee+Studio+Neubaug%C3%BCrtel+23a+Wien" },
  { label: "Bewertungen auf Treatwell", href: "https://buchung.treatwell.at/ort/dee-studio/" },
];
