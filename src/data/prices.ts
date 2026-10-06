// Official price lists (PDFs from the client, October 2026). Massage: Dee Studio's Treatwell menu.
// Price menu: `category` is the main tab (Nägel / Gesicht / Massage), `title` the sub label within it.

/** `id` is also the anchor on the Preise page, e.g. /dee-studio/preise#wimpern-classic */
export type PriceGroup = { id: string; category: string; title: string; note?: string; items: [string, string][] };

export const HEAD_SPA = {
  studio: "dee-studio",
  title: "Head Spa",
  tagline: "Relax. Refresh. Glow.",
  lead: "Unser Head Spa verbindet traditionelle östliche Methoden mit moderner Kopfhautpflege: Akupressur, Massage mit Kräuteröl, Wasserbogen und Kopfhaut-Bedampfung für tiefe Entspannung.",
  images: ["/images/headspa/head-spa-liegen-dee-studio.jpg", "/images/headspa/head-spa-raum-dee-studio.jpg"],
  steps: [
    { title: "Akupressur", text: "Kopf-Akupressur und Meridian-Öffnung lösen Verspannungen und fördern die Durchblutung." },
    { title: "Massage", text: "Massage für Nacken und Schultern, in den größeren Paketen intensiv mit Kräuteröl." },
    { title: "Wasserbogen", text: "Akupressur-Haarwäsche mit Kopfmassage unter dem warmen Wasserbogen." },
    { title: "Pflege", text: "Je nach Paket Gesichtspflege, Kopfhaut-Bedampfung und Handmassage, zum Schluss Föhnen mit Moroccanoil." },
  ],
  packages: [
    {
      name: "Essential Balance",
      note: "Basis-Paket",
      duration: "45 Min.",
      price: "65 €",
      highlights: [
        "Kopf-Akupressur",
        "Sanfte Entspannungsmassage für Nacken & Schultern",
        "2x Haarwäsche & Spülung mit Kopfmassage",
        "Wasserbogen",
        "Föhnen (ohne Styling) & Haaröl (Moroccanoil)",
      ],
    },
    {
      name: "Deep Relax & Care",
      note: "Premium-Paket",
      duration: "60 bis 70 Min.",
      price: "89 €",
      highlights: [
        "Meridian-Öffnung",
        "Intensiv-Massage (Nacken & Schultern) mit Kräuteröl",
        "Akupressur-Haarwäsche & Spülung mit Kopfmassage",
        "Wasserbogen",
        "Gesichtsreinigung & Massage",
        "Föhnen (ohne Styling) & Haaröl (Moroccanoil)",
      ],
    },
    {
      name: "Luxury Healing Journey",
      note: "VIP-Paket",
      duration: "90 Min.",
      price: "120 €",
      highlights: [
        "Tiefen-Massage (Nacken & Schultern) mit Kräuteröl",
        "Akupressur-Haarwäsche & Spülung mit Kopfmassage",
        "Wasserbogen",
        "Gesichtsreinigung & Massage & Maske",
        "Kopfhaut-Bedampfung",
        "Handmassage",
        "Föhnen (ohne Styling) & Haaröl (Moroccanoil)",
      ],
    },
  ],
  stylingNote: "Für das spätere Styling stehen Glätteisen und Lockenstab zur Selbstbedienung bereit.",
  benefits: ["Tiefenentspannung & Stressabbau", "Bessere Durchblutung der Kopfhaut", "Gepflegte Kopfhaut und Haar", "Ideal als Geschenk"],
  price: "ab 65 €",
};

const LENGTH_NOTE = "Ab 2,3 cm Länge 5 € extra, jeder weitere Millimeter 1 € (2,4 cm = 6 €).";

export const DEE_PRICES: PriceGroup[] = [
  /* Nägel */
  {
    id: "neues-set",
    category: "Nägel",
    title: "Neues Set",
    note: "Gel oder Acryl",
    items: [
      ["Neues Set mit Farbe", "57 €"],
      ["Neues Set mit French", "64 €"],
      ["Neues Set mit Ombre (Babyboomer)", "64 €"],
      ["Neues Set mit farbigem Ombre / Glow in the dark", "69 €"],
      ["Entfernung altes Set + neues Set mit Farbe", "61 €"],
      ["Entfernung altes Set + neues Set mit French", "69 €"],
      ["Entfernung altes Set + neues Set mit Babyboomer", "69 €"],
      ["Entfernung altes Set + neues Set mit farbigem Ombre / Glow", "74 €"],
    ],
  },
  {
    id: "auffuellen",
    category: "Nägel",
    title: "Auffüllen",
    note: "Gel oder Acryl",
    items: [
      ["Auffüllen mit Farbe", "49 €"],
      ["Auffüllen mit French", "55 €"],
      ["Nachfüllung Gel + Babyboomer (Airbrush-Technik)", "64 €"],
      ["Nachfüllung Acryl + Babyboomer", "64 €"],
    ],
  },
  {
    id: "gel-x",
    category: "Nägel",
    title: "Gel X",
    items: [
      ["Neues Set Gel X mit Farbe", "60 €"],
      ["Neues Set Gel X mit French", "65 €"],
    ],
  },
  {
    id: "manikuere",
    category: "Nägel",
    title: "Maniküre",
    items: [
      ["Basis Maniküre", "28 €"],
      ["Maniküre + polieren", "35 €"],
      ["Maniküre mit Shellac (Farbe / French)", "45 € / 49 €"],
      ["Shellac lackieren (Farbe / French)", "35 € / 40 €"],
      ["Entfernung Acryl / Gel / Shellac", "20 €"],
      ["Entfernung + Basis Maniküre", "33 €"],
      ["Entfernung + Shellac (Farbe / French)", "45 € / 49 €"],
      ["Entfernung + Basis Maniküre mit Shellac (Farbe / French)", "53 € / 59 €"],
    ],
  },
  {
    id: "pedikuere",
    category: "Nägel",
    title: "Pediküre",
    items: [
      ["Basis Pediküre ohne Lackierung", "45 €"],
      ["Basis Pediküre mit Shellac (Farbe / French)", "59 € / 64 €"],
      ["Basis Pediküre + Neues Set Acryl/PolyGel (Farbe / French)", "85 € / 89 €"],
      ["Basis Pediküre + Nachfüllung Acryl/PolyGel (Farbe / French)", "75 € / 83 €"],
      ["Deluxe Pediküre ohne Lackierung", "65 €"],
      ["Deluxe Pediküre mit Shellac (Farbe / French)", "75 € / 79 €"],
      ["Deluxe Pediküre + Neues Set Acryl/PolyGel (Farbe / French)", "105 € / 109 €"],
      ["Deluxe Pediküre + Nachfüllung Acryl/PolyGel (Farbe / French)", "95 € / 99 €"],
    ],
  },
  {
    id: "zehennagel",
    category: "Nägel",
    title: "Zehennagel",
    note: "Mit Acryl / PolyGel",
    items: [
      ["Neues Set (Farbe / French)", "57 € / 64 €"],
      ["Auffüllung (Farbe / French)", "49 € / 55 €"],
      ["Entfernung + Neues Set (Farbe / French)", "61 € / 69 €"],
    ],
  },
  {
    id: "design",
    category: "Nägel",
    title: "Nageldesign",
    items: [
      ["Gel Glitzer pro Finger / Set", "1 € / 8 €"],
      ["Pulver Glitzer pro Finger / Set", "3 € / 15 €"],
      ["5 verschiedene Farben", "+ 5 €"],
      ["Chrome pro Finger / Set", "3 € / 15 €"],
      ["Cateye pro Finger / Set", "2 € / 15 €"],
      ["Chrome + Cateye", "25 €"],
      ["Airbrush-Technik", "15 €"],
      ["Nagelmuster: einfache Linien, Herzen oder Punkte", "15 €"],
      ["Nagelmuster: Linien, Sterne + Chrome", "25 €"],
      ["Nagelmuster: 3D-Blumen, Chrome, Linien", "45 €"],
      ["Nagelmuster: Airbrush, Linien, Chrome (60 bis 70 %)", "55 €"],
      ["Nagelmuster: jeder Finger anders, Chrome (70 %)", "65 €"],
      ["Nagelmuster: 3D-Früchte, Figuren, Manga Style", "75 € bis 80 €"],
    ],
  },
  {
    id: "aufpreis",
    category: "Nägel",
    title: "Aufpreis",
    note: LENGTH_NOTE,
    items: [
      ["Nagel Tips XXL", "10 €"],
      ["Charms", "ab 4 € / Stück"],
      ["Swarovski Steine", "ab 0,50 € / Stück"],
      ["Nagelreparatur", "8 € / Finger"],
    ],
  },
  /* Gesicht */
  {
    id: "wimpern-classic",
    category: "Gesicht",
    title: "Classic 1:1",
    items: [
      ["Neuanlage", "99 €"],
      ["Auffüllen nach 10 Tagen", "55 €"],
      ["Auffüllen nach 2 Wochen", "65 €"],
      ["Auffüllen nach 3 Wochen", "75 €"],
    ],
  },
  {
    id: "wimpern-light-volume",
    category: "Gesicht",
    title: "Light Volume 2:1 / 3:1",
    items: [
      ["Neuanlage", "110 €"],
      ["Auffüllen nach 10 Tagen", "55 €"],
      ["Auffüllen nach 2 Wochen", "65 €"],
      ["Auffüllen nach 3 Wochen", "75 €"],
    ],
  },
  {
    id: "wimpern-mega-volume",
    category: "Gesicht",
    title: "Mega Volume 5D bis 8D",
    items: [
      ["Neuanlage", "120 €"],
      ["Auffüllen nach 10 Tagen", "55 €"],
      ["Auffüllen nach 2 Wochen", "70 €"],
      ["Auffüllen nach 3 Wochen", "80 €"],
    ],
  },
  {
    id: "wimpern-anime",
    category: "Gesicht",
    title: "Anime / Douyin / Manga",
    note: "Kein Auffüllen möglich, bei diesem Style nur Neuanlage.",
    items: [["Neuanlage", "130 €"]],
  },
  {
    id: "lash-lifting",
    category: "Gesicht",
    title: "Lash Lifting",
    items: [
      ["Lash Lifting Classic", "65 €"],
      ["Lash Lifting inkl. Färben", "80 €"],
    ],
  },
  {
    id: "wimpern-entfernung",
    category: "Gesicht",
    title: "Entfernung",
    note: "Kein Auffüllen von Fremdarbeit. Ab der 4. Woche wird eine komplette Neuanlage berechnet.",
    items: [
      ["Entfernung von Fremdarbeit", "25 €"],
      ["Entfernung eigener Arbeit (vor einer Neuanlage)", "15 €"],
    ],
  },
  /* Massage */
  {
    id: "head-spa",
    category: "Massage",
    title: "Head Spa",
    items: HEAD_SPA.packages.map((p) => [`${p.note} „${p.name}“, ${p.duration}`, p.price] as [string, string]),
  },
  {
    id: "massage",
    category: "Massage",
    title: "Körpermassage",
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
    category: "Massage",
    title: "Pediküre mit Massage",
    items: [
      ["Pediküre + Fußmassage", "ab 55 €"],
      ["Deluxe Pediküre + Fußmassage", "ab 75 €"],
    ],
  },
];

export const VANILLA_PRICES: PriceGroup[] = [
  {
    id: "neues-set",
    category: "Nägel",
    title: "Neues Set",
    note: "Gel oder Acryl",
    items: [
      ["Neues Set mit Farbe", "55 €"],
      ["Neues Set mit French / Ombre", "65 €"],
      ["Neues Set mit farbigem Ombre", "70 €"],
      ["Entfernung altes Set + neues Set mit Farbe", "59 €"],
      ["Entfernung altes Set + neues Set mit French / Ombre", "69 €"],
      ["Entfernung altes Set + neues Set mit farbigem Ombre", "75 €"],
    ],
  },
  {
    id: "auffuellen",
    category: "Nägel",
    title: "Auffüllen",
    note: "Gel oder Acryl",
    items: [
      ["Auffüllen mit Farbe", "45 €"],
      ["Auffüllen mit French / Ombre", "55 €"],
      ["Auffüllen mit farbigem Ombre", "59 €"],
    ],
  },
  {
    id: "manikuere",
    category: "Nägel",
    title: "Maniküre",
    items: [
      ["Basis Maniküre", "25 €"],
      ["Maniküre mit Shellac (Farbe / French)", "39 € / 44 €"],
      ["Shellac lackieren (Farbe / French)", "30 € / 35 €"],
      ["Deluxe Maniküre inkl. Handmaske", "45 €"],
      ["Deluxe Maniküre mit Shellac (Farbe / French)", "59 € / 64 €"],
    ],
  },
  {
    id: "entfernung",
    category: "Nägel",
    title: "Entfernung",
    items: [
      ["Entfernung Acryl/Gel + kürzen & feilen", "19 €"],
      ["Entfernung Acryl/Gel + Basis Maniküre", "39 €"],
      ["Entfernung Acryl/Gel + Shellac (Farbe / French)", "44 € / 49 €"],
      ["Entfernung Acryl/Gel + Basis Maniküre mit Shellac (Farbe / French)", "53 € / 59 €"],
      ["Entfernung Shellac/Gellack elektrisch (Fräser)", "10 €"],
      ["Entfernung Shellac/Gellack Acetone Soak-Off (nur CND)", "15 €"],
    ],
  },
  {
    id: "pedikuere",
    category: "Nägel",
    title: "Pediküre",
    items: [
      ["Fußnägel lackieren mit Shellac (Farbe / French)", "30 € / 35 €"],
      ["Basis Pediküre ohne Lackierung", "45 €"],
      ["Basis Pediküre mit Shellac (Farbe / French)", "60 € / 64 €"],
      ["Basis Pediküre + Neues Set Acryl/PolyGel (Farbe / French)", "87 € / 94 €"],
      ["Basis Pediküre + Nachfüllung Acryl/PolyGel (Farbe / French)", "77 € / 84 €"],
      ["Deluxe Pediküre ohne Lackierung", "65 €"],
      ["Deluxe Pediküre mit Shellac (Farbe / French)", "75 € / 79 €"],
      ["Deluxe Pediküre + Neues Set Acryl/PolyGel (Farbe / French)", "99 € / 105 €"],
      ["Deluxe Pediküre + Nachfüllung Acryl/PolyGel (Farbe / French)", "95 € / 99 €"],
    ],
  },
  {
    id: "zehennagel",
    category: "Nägel",
    title: "Zehennagel",
    note: "Mit Acryl / PolyGel",
    items: [
      ["Neues Set (Farbe / French)", "55 € / 65 €"],
      ["Auffüllung (Farbe / French)", "45 € / 55 €"],
      ["Entfernung + Neues Set (Farbe / French)", "59 € / 69 €"],
    ],
  },
  {
    id: "design",
    category: "Nägel",
    title: "Nageldesign",
    items: [
      ["Steine pro Stück", "0,50 €"],
      ["Pulver Glitzer pro Finger / Set", "3 € / 15 €"],
      ["Chrome pro Finger / Set", "3 € / 15 €"],
      ["Cateye pro Finger / Set", "3 € / 15 €"],
      ["Chrome + Cateye", "25 €"],
      ["5 / 10 verschiedene Farben", "5 € / 10 €"],
      ["Airbrush-Technik", "15 €"],
      ["3D-Blumen", "ab 8 € / Stück"],
    ],
  },
  {
    id: "aufpreis",
    category: "Nägel",
    title: "Aufpreis",
    note: LENGTH_NOTE,
    items: [
      ["Nagel Tips XXL", "10 €"],
      ["Charms", "ab 4 € / Stück"],
      ["Swarovski Steine", "ab 0,50 € / Stück"],
      ["Nagelreparatur, bestehende Kundin", "5 € / Finger"],
      ["Nagelreparatur, Fremdarbeit", "10 € / Finger"],
    ],
  },
  {
    id: "massage",
    category: "Massage",
    title: "Fußmassage",
    items: [
      ["Fußmassage 10 Minuten", "19 €"],
      ["Fußmassage 20 Minuten", "29 €"],
    ],
  },
];
