// SEO articles ("Magazin"). Each links to the matching studio pages.

export type Article = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  date: string;
  image: string;
  imageAlt: string;
  readMin: number;
  lead: string;
  sections: { h2: string; paragraphs: string[]; list?: string[] }[];
  links: { label: string; href: string }[];
};

export const ARTICLES: Article[] = [
  {
    slug: "head-spa-wien-was-ist-das",
    title: "Head Spa in Wien: Was passiert bei einer Behandlung?",
    description:
      "Was ist ein Head Spa, wie läuft die Behandlung ab und für wen lohnt sie sich? Alles über Akupressur, Wasserbogen und Kopfhautpflege bei Dee Studio Wien.",
    h1: "Head Spa in Wien: Was passiert bei einer Behandlung?",
    date: "2026-10-04",
    image: "/images/headspa/head-spa-liegen-dee-studio.jpg",
    imageAlt: "Head Spa Behandlung bei Dee Studio Wien",
    readMin: 4,
    lead: "Der Head Spa kommt ursprünglich aus Japan und ist dort längst ein fester Teil der Wellness-Kultur. Seit Kurzem gibt es ihn auch bei Dee Studio am Neubaugürtel. Hier erfahren Sie, was Sie bei einer Behandlung erwartet.",
    sections: [
      {
        h2: "Was ist ein Head Spa?",
        paragraphs: [
          "Ein Head Spa ist eine Behandlung, die sich ganz auf Kopfhaut, Haar, Nacken und Schultern konzentriert. Anders als beim Haarewaschen im Friseursalon steht nicht das Styling im Mittelpunkt, sondern Entspannung und Pflege.",
          "Bei Dee Studio verbinden wir traditionelle östliche Methoden wie die Kopf-Akupressur mit moderner Kopfhautpflege. Das Ziel: Stress abbauen, die Durchblutung fördern und der Kopfhaut die Pflege geben, die im Alltag oft zu kurz kommt.",
        ],
      },
      {
        h2: "So läuft die Behandlung ab",
        paragraphs: ["Je nach Paket dauert ein Head Spa bei uns 45, 60 oder 90 Minuten. Die wichtigsten Schritte:"],
        list: [
          "Kopf-Akupressur: gezielter Druck auf Punkte am Kopf löst Verspannungen.",
          "Massage für Nacken und Schultern, dort wo sich Stress am stärksten festsetzt.",
          "Wasserbogen: warmes Wasser fließt gleichmäßig über die Kopfhaut.",
          "Kopfhaut-Bedampfung und Pflege, in den größeren Paketen ergänzt durch eine Gesichtspflege.",
        ],
      },
      {
        h2: "Für wen eignet sich ein Head Spa?",
        paragraphs: [
          "Ein Head Spa ist ideal, wenn Sie viel am Bildschirm arbeiten, oft Verspannungen im Nacken spüren oder einfach eine Stunde ganz für sich brauchen. Viele Kundinnen buchen ihn auch als Geschenk für Freundinnen, Partner oder die eigene Mutter.",
          "Bei Hauterkrankungen der Kopfhaut oder frischen Verletzungen sprechen Sie bitte vorher mit uns, damit wir die Behandlung anpassen können.",
        ],
      },
      {
        h2: "Welches Paket passt zu mir?",
        paragraphs: [
          "Für den ersten Eindruck empfehlen wir das Basis Paket „Essential Balance“ mit 45 Minuten. Wer richtig abschalten möchte, wählt „Deep Relax & Care“ mit 60 Minuten. Das VIP Paket „Luxury Healing Journey“ nimmt sich 90 Minuten Zeit und ist unser umfangreichstes Ritual.",
        ],
      },
    ],
    links: [
      { label: "Head Spa bei Dee Studio", href: "/dee-studio/head-spa" },
      { label: "Preise", href: "/dee-studio/preise" },
    ],
  },
  {
    slug: "gel-acryl-gel-x-shellac-unterschied",
    title: "Gel, Acryl, Gel-X oder Shellac: Der Unterschied",
    description:
      "Acryl, Gel-X oder Shellac? Wir erklären die Unterschiede bei Haltbarkeit, Länge und Pflege und helfen Ihnen, die passende Maniküre zu finden.",
    h1: "Acryl, Gel-X oder Shellac: Welche Nägel passen zu mir?",
    date: "2026-10-04",
    image: "/images/nails/acrylnaegel-modellage-wien.jpg",
    imageAlt: "Acrylnägel Modellage im Nagelstudio Wien",
    readMin: 5,
    lead: "Im Nagelstudio fallen viele Begriffe: Acryl, Gel-X, Shellac. Alle sorgen für schöne Nägel, aber sie unterscheiden sich deutlich. Dieser Überblick hilft Ihnen bei der Entscheidung.",
    sections: [
      {
        h2: "Shellac: Farbe auf dem eigenen Nagel",
        paragraphs: [
          "Shellac ist ein Lack, der unter UV- oder LED-Licht aushärtet. Er wird direkt auf den Naturnagel aufgetragen und verlängert ihn nicht. Das Ergebnis glänzt lange und ist in der Regel nach dem Termin sofort trocken.",
          "Shellac eignet sich für alle, die ihre eigene Nagellänge mögen und einfach eine gepflegte, langlebige Farbe möchten. Bei uns gibt es Shellac mit Farbe ab 30 €.",
        ],
      },
      {
        h2: "Gel-X: Verlängerung ohne lange Modellage",
        paragraphs: [
          "Bei Gel-X werden vorgeformte Tips aus weichem Gel mit Gel auf den Naturnagel geklebt. So entsteht schnell eine gleichmäßige Verlängerung, die leicht und natürlich wirkt.",
          "Gel-X ist eine gute Wahl, wenn Sie mittellange Nägel möchten und Wert auf ein feines, natürliches Gefühl legen. Ein neues Set mit Farbe kostet bei uns 50 €.",
        ],
      },
      {
        h2: "Acryl: stabil für jede Länge",
        paragraphs: [
          "Acryl entsteht aus Pulver und Flüssigkeit, die zu einer formbaren Masse verbunden werden. Damit lassen sich Nägel in jeder Form und Länge modellieren, von kurz und natürlich bis XXL.",
          "Acryl ist besonders robust und die Basis für viele Designs wie Babyboomer, French oder Nail Art mit Steinen. Ein neues Set startet bei 50 €, Auffüllen nach drei bis vier Wochen bei 42 €.",
        ],
      },
      {
        h2: "Kurz zusammengefasst",
        paragraphs: [],
        list: [
          "Eigene Länge, nur Farbe: Shellac.",
          "Natürliche Verlängerung, leichtes Gefühl: Gel-X.",
          "Lange Nägel, aufwendige Designs: Acryl.",
        ],
      },
    ],
    links: [
      { label: "Acryl Galerie", href: "/dee-studio/galerie#acryl" },
      { label: "Preise", href: "/dee-studio/preise" },
    ],
  },
  {
    slug: "nagelpflege-tipps-manikuere-haelt-laenger",
    title: "Nagelpflege: 7 Tipps, damit Ihre Maniküre länger hält",
    description:
      "Mit diesen 7 Tipps zur Nagelpflege hält Ihre Maniküre länger: Nagelöl, Handschuhe, richtig feilen und rechtzeitig auffüllen. Von Dee Studio Wien.",
    h1: "Nagelpflege: 7 Tipps, damit Ihre Maniküre länger hält",
    date: "2026-10-04",
    image: "/images/nails/chrome-glazed-nails-natur-wien.webp",
    imageAlt: "Gepflegte Nägel nach der Maniküre",
    readMin: 3,
    lead: "Ein neues Set sieht am ersten Tag perfekt aus. Damit das auch nach drei Wochen noch so ist, kommt es auf die Pflege zu Hause an. Diese sieben Gewohnheiten machen den Unterschied.",
    sections: [
      {
        h2: "Die 7 wichtigsten Tipps",
        paragraphs: [],
        list: [
          "Täglich Nagelöl: Ein Tropfen auf die Nagelhaut hält sie weich und verhindert Risse.",
          "Handschuhe beim Putzen: Reinigungsmittel greifen Lack und Modellage an.",
          "Nägel sind kein Werkzeug: Dosen und Etiketten lieber mit einem Löffel oder einer Schere öffnen.",
          "Hände eincremen: Besonders im Winter freuen sich Haut und Nagelhaut über Feuchtigkeit.",
          "Nicht selbst ablösen: Abziehen beschädigt den Naturnagel. Lassen Sie die Entfernung im Studio machen.",
          "Rechtzeitig auffüllen: Nach drei bis vier Wochen wird der nachgewachsene Bereich instabil.",
          "Kleine Schäden sofort melden: Ein früh reparierter Nagel bricht nicht weiter ein.",
        ],
      },
      {
        h2: "Wann sollte ich ins Studio kommen?",
        paragraphs: [
          "Wenn sich Lack oder Modellage an der Kante löst oder ein Nagel einreißt, kommen Sie am besten zeitnah vorbei. Eine Nagelreparatur kostet bei uns 8 € pro Finger und verhindert, dass sich Feuchtigkeit unter dem Material sammelt.",
        ],
      },
    ],
    links: [
      { label: "Dee Studio, Neubaugürtel", href: "/dee-studio" },
      { label: "Vanilla by Dee, Fasangasse", href: "/vanilla-by-dee" },
    ],
  },
];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
