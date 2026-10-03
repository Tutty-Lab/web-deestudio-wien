// Nail gallery + SEO landing pages, one per style keyword ("French Nails Wien", ...).

export type GalleryItem = {
  src: string;
  alt: string;
  cat: "nails" | "lashes" | "spa" | "studio";
  styles: string[];
};

export const GALLERY: GalleryItem[] = [
  {
    src: "/images/nails/chrome-nails-silber-xxl-wien.webp",
    alt: "Lange Chrome Nails in Silber mit Reptil-Struktur, Dee Studio Wien",
    cat: "nails",
    styles: ["chrome-nails-wien", "xxl-naegel-wien", "nail-art-wien"],
  },
  {
    src: "/images/nails/french-nails-weiss-steine-wien.webp",
    alt: "Weiße French Nails mit V-French und Steinen, Nagelstudio Wien",
    cat: "nails",
    styles: ["french-nails-wien", "acrylnaegel-wien"],
  },
  {
    src: "/images/lashes/wimpern-volumen-wien.jpg",
    alt: "Volumen Wimpernverlängerung bei Dee Studio Wien",
    cat: "lashes",
    styles: ["wimpernverlaengerung-wien"],
  },
  {
    src: "/images/nails/nail-art-smiley-schachbrett-wien.webp",
    alt: "Bunte Nail Art mit Smileys, Schachbrett und Schmetterlingen, Wien",
    cat: "nails",
    styles: ["nail-art-wien", "xxl-naegel-wien"],
  },
  {
    src: "/images/nails/french-nails-schwarz-xxl-wien.webp",
    alt: "Schwarze XXL French Nails mit Kristallen, Dee Studio Wien",
    cat: "nails",
    styles: ["french-nails-wien", "xxl-naegel-wien", "acrylnaegel-wien", "nail-art-wien"],
  },
  {
    src: "/images/nails/xxl-stiletto-ombre-blumen-wien.jpg",
    alt: "XXL Stiletto Nägel mit gelbem Ombré und Blumen-Design, Wien",
    cat: "nails",
    styles: ["xxl-naegel-wien", "babyboomer-naegel-wien", "nail-art-wien"],
  },
  {
    src: "/images/headspa/head-spa-dee-studio-wien.jpg",
    alt: "Head Spa Behandlung bei Dee Studio Neubaugürtel",
    cat: "spa",
    styles: [],
  },
  {
    src: "/images/nails/babyboomer-ombre-kristalle-wien.jpg",
    alt: "Babyboomer Nägel in Rosa mit Kristallen und 3D-Blüten, Wien",
    cat: "nails",
    styles: ["babyboomer-naegel-wien", "xxl-naegel-wien", "acrylnaegel-wien", "nail-art-wien"],
  },
  {
    src: "/images/lashes/wimpern-natuerlich-wien.jpg",
    alt: "Natürliche Wimpernverlängerung im Spiegel, Dee Studio Wien",
    cat: "lashes",
    styles: ["wimpernverlaengerung-wien"],
  },
  {
    src: "/images/nails/nail-art-rosa-marmor-wien.webp",
    alt: "Rosa Marmor Nägel mit Schmetterling-Charms, Nagelstudio Wien",
    cat: "nails",
    styles: ["nail-art-wien", "acrylnaegel-wien", "babyboomer-naegel-wien", "xxl-naegel-wien"],
  },
  {
    src: "/images/nails/french-nails-haende-fuesse-wien.webp",
    alt: "Passende French Nails an Händen und Füßen, Dee Studio Wien",
    cat: "nails",
    styles: ["french-nails-wien", "acrylnaegel-wien"],
  },
  {
    src: "/images/nails/chrome-glazed-nails-natur-wien.webp",
    alt: "Kurze Glazed Chrome Nails in Nude, Nagelstudio Wien",
    cat: "nails",
    styles: ["chrome-nails-wien"],
  },
  {
    src: "/images/lashes/wimpernverlaengerung-wien.jpg",
    alt: "Wimpernverlängerung wird Wimper für Wimper gesetzt, Wien",
    cat: "lashes",
    styles: ["wimpernverlaengerung-wien"],
  },
  {
    src: "/images/nails/acrylnaegel-modellage-wien.jpg",
    alt: "Acrylnägel Modellage mit Tips und Leo-Design, Wien",
    cat: "nails",
    styles: ["acrylnaegel-wien", "xxl-naegel-wien"],
  },
  {
    src: "/images/studio/dee-studio-nagelplaetze-neubauguertel.webp",
    alt: "Nagelplätze im Dee Studio am Neubaugürtel, 1150 Wien",
    cat: "studio",
    styles: [],
  },
  {
    src: "/images/studio/pedikuere-studio-wien.jpg",
    alt: "Pediküre-Plätze im Studio, Dee Studio Wien",
    cat: "studio",
    styles: [],
  },
];

export type Style = {
  slug: string;
  /** Card image, unique per style so the overview does not repeat photos. */
  cover: string;
  name: string;
  h1: string;
  title: string;
  description: string;
  intro: string[];
  price: { label: string; value: string };
  studio?: string;
  faqs: { q: string; a: string }[];
  related: string[];
};

export const STYLES: Style[] = [
  {
    slug: "french-nails-wien",
    cover: "/images/nails/french-nails-weiss-steine-wien.webp",
    name: "French Nails",
    h1: "French Nails in Wien",
    title: "French Nails Wien | Klassisch bis XXL | Dee Studio",
    description:
      "French Nails in Wien: klassisch weiß, schwarz, V-French oder mit Steinen. Als Gel-X, Shellac oder Acryl im Dee Studio. Jetzt online buchen.",
    intro: [
      "Die French Manicure ist der Klassiker, der nie aus der Mode kommt. Bei Dee Studio setzen wir sie so um, wie sie zu Ihnen passt: dezent in Weiß, modern mit schwarzer Spitze, als V-French oder mit glitzernden Steinen.",
      "Ob kurz und natürlich mit Shellac, als Gel-X Set oder als lange Acrylnägel: Wir beraten Sie zu Form, Länge und Farbe und gestalten auf Wunsch Hände und Füße passend zueinander.",
    ],
    price: { label: "Shellac mit French", value: "ab 35 €" },
    faqs: [
      {
        q: "Was kosten French Nails bei Dee Studio?",
        a: "Shellac mit French gibt es ab 35 €, Gel-X mit French für 58 €, Auffüllen mit French für 52 €. Steine und Extras werden nach Aufwand berechnet.",
      },
      {
        q: "Geht French auch an den Füßen?",
        a: "Ja. Unsere Pediküre gibt es mit Shellac oder French, zum Beispiel als Basic Pediküre mit French für 59 €.",
      },
    ],
    related: ["acrylnaegel-wien", "xxl-naegel-wien", "babyboomer-naegel-wien"],
  },
  {
    slug: "chrome-nails-wien",
    cover: "/images/nails/chrome-nails-silber-xxl-wien.webp",
    name: "Chrome Nails",
    h1: "Chrome Nails in Wien",
    title: "Chrome Nails Wien | Glazed & Metallic | Dee Studio",
    description:
      "Chrome Nails in Wien: Glazed Donut Nails, Silber, Metallic-Effekte und Chrome-Akzente auf jeder Länge. Bei Dee Studio im 15. und 3. Bezirk.",
    intro: [
      "Chrome Nails glänzen wie poliertes Metall oder schimmern zart wie Perlmutt. Der Effekt entsteht durch ein feines Chrome-Pulver, das auf die Farbe eingearbeitet wird.",
      "Bei uns reicht die Auswahl vom dezenten Glazed Look auf kurzen Nägeln bis zu silbernen XXL Designs mit Struktur. Chrome lässt sich mit fast jeder Farbe und jedem Design kombinieren.",
    ],
    price: { label: "Chrome für das ganze Set", value: "15 €" },
    faqs: [
      {
        q: "Was kosten Chrome Nails?",
        a: "Chrome kostet 3 € pro Finger oder 15 € für das ganze Set, zusätzlich zur gewählten Basis wie Shellac, Gel-X oder einem neuen Set.",
      },
      {
        q: "Hält der Chrome-Effekt lange?",
        a: "Ja. Der Chrome-Effekt wird mit Top Coat versiegelt und hält so lange wie Ihre Maniküre, in der Regel 3 bis 4 Wochen.",
      },
    ],
    related: ["nail-art-wien", "xxl-naegel-wien", "french-nails-wien"],
  },
  {
    slug: "nail-art-wien",
    cover: "/images/nails/nail-art-smiley-schachbrett-wien.webp",
    name: "Nail Art",
    h1: "Nail Art in Wien",
    title: "Nail Art Wien | Kreatives Nageldesign | Dee Studio",
    description:
      "Kreatives Nail Art in Wien: Hand gemalte Designs, Charms, Kristalle, Marmor und 3D-Blüten. Bringen Sie Ihre Idee mit, wir setzen sie um.",
    intro: [
      "Nail Art ist unsere Leidenschaft. Von verspielten Smileys und Schachbrett-Mustern über Marmor-Optik bis zu 3D-Blüten und Charms: Jedes Design entsteht bei uns von Hand.",
      "Bringen Sie gerne ein Foto Ihrer Inspiration mit. Wir beraten Sie, was auf Ihrer Nagellänge gut aussieht, und setzen Ihre Idee so originalgetreu wie möglich um.",
    ],
    price: { label: "Nail Design pro Finger", value: "ab 2 €" },
    faqs: [
      {
        q: "Wie viel kostet Nail Art?",
        a: "Nail Design berechnen wir ab 2 € pro Finger. Swarovski Steine gibt es ab 0,50 € pro Stück, Charms ab 4 € pro Stück.",
      },
      {
        q: "Kann ich ein Design von Instagram mitbringen?",
        a: "Unbedingt. Zeigen Sie uns das Foto beim Termin oder vorab per Instagram-DM, dann planen wir genug Zeit für Ihr Design ein.",
      },
    ],
    related: ["xxl-naegel-wien", "chrome-nails-wien", "babyboomer-naegel-wien"],
  },
  {
    slug: "xxl-naegel-wien",
    cover: "/images/nails/xxl-stiletto-ombre-blumen-wien.jpg",
    name: "XXL Nägel",
    h1: "XXL Nägel in Wien",
    title: "XXL Nägel Wien | Lange Nägel & Stiletto | Dee Studio",
    description:
      "XXL Nägel in Wien: lange Square-, Coffin- und Stiletto-Nägel mit Acryl, stabil modelliert und kreativ designt. Termin bei Dee Studio buchen.",
    intro: [
      "Lange Nägel brauchen eine stabile Modellage. Wir bauen XXL Nägel in Acryl auf, damit sie auch im Alltag halten, und formen sie als Square, Coffin oder Stiletto.",
      "Gerade auf langen Nägeln kommen Designs besonders gut zur Geltung: French, Ombré, Chrome oder Nail Art mit Kristallen. Wir beraten Sie gerne zur passenden Länge.",
    ],
    price: { label: "Aufpreis Nails XXL", value: "10 €" },
    faqs: [
      {
        q: "Was kosten XXL Nägel?",
        a: "Zum neuen Set kommt ein Aufpreis von 10 € für Nails XXL. Ab 1,6 cm Länge wird jeder weitere Millimeter zusätzlich berechnet.",
      },
      {
        q: "Brechen lange Nägel leicht ab?",
        a: "Mit einer sauberen Acryl-Modellage sind auch lange Nägel stabil. Sollte in den ersten Tagen doch etwas brechen, melden Sie sich bei uns.",
      },
    ],
    related: ["acrylnaegel-wien", "nail-art-wien", "babyboomer-naegel-wien"],
  },
  {
    slug: "acrylnaegel-wien",
    cover: "/images/nails/acrylnaegel-modellage-wien.jpg",
    name: "Acrylnägel",
    h1: "Acrylnägel in Wien",
    title: "Acrylnägel Wien | Neues Set & Auffüllen | Dee Studio",
    description:
      "Acrylnägel in Wien: neues Set ab 50 €, Auffüllen ab 42 €. Natürlich, mit Farbe, French oder Ombré. Dee Studio, Neubaugürtel und Fasangasse.",
    intro: [
      "Acrylnägel sind robust, vielseitig und die Basis für fast jedes Design. Wir modellieren Ihr neues Set auf Tips in der Form und Länge, die zu Ihren Händen passt.",
      "Damit Ihre Nägel lange schön bleiben, empfehlen wir nach 3 bis 4 Wochen ein Auffüllen. Dabei wird der nachgewachsene Bereich aufgefüllt und das Design aufgefrischt.",
    ],
    price: { label: "Neues Set ohne Farbe", value: "ab 50 €" },
    faqs: [
      {
        q: "Was kostet ein neues Set Acrylnägel?",
        a: "Ein neues Set ohne Farbe kostet 50 €, mit Farbe 53 €. Mit Entfernung des alten Sets kommen jeweils 4 bis 5 € dazu.",
      },
      {
        q: "Wie oft muss ich zum Auffüllen kommen?",
        a: "In der Regel alle 3 bis 4 Wochen. Auffüllen kostet ab 42 €, mit Farbe 45 € und mit French 52 €.",
      },
    ],
    related: ["french-nails-wien", "xxl-naegel-wien", "babyboomer-naegel-wien"],
  },
  {
    slug: "babyboomer-naegel-wien",
    cover: "/images/nails/babyboomer-ombre-kristalle-wien.jpg",
    name: "Babyboomer Nägel",
    h1: "Babyboomer Nägel in Wien",
    title: "Babyboomer Nägel Wien | Ombré Nails | Dee Studio",
    description:
      "Babyboomer Nägel in Wien: sanftes Ombré von Rosa zu Weiß oder farbig, auch Glow in the Dark. Neues Set Ombré ab 60 € bei Dee Studio.",
    intro: [
      "Babyboomer Nägel verbinden den French-Look mit einem weichen Farbverlauf von Rosa zu Weiß. Das Ergebnis wirkt natürlich, elegant und passt zu jedem Anlass.",
      "Wer es auffälliger mag, wählt farbiges Ombré oder sogar Glow in the Dark. Mit Kristallen oder 3D-Blüten wird aus dem Klassiker ein echtes Statement.",
    ],
    price: { label: "Neues Set Ombré (Baby Boomer)", value: "ab 60 €" },
    faqs: [
      {
        q: "Was kosten Babyboomer Nägel?",
        a: "Ein neues Set Ombré (Baby Boomer) kostet 60 €, farbiges Ombré oder Glow in the Dark 65 €. Mit Entfernung des alten Sets jeweils 5 € mehr.",
      },
      {
        q: "Was ist der Unterschied zu French Nails?",
        a: "Bei French Nails ist die Spitze klar abgegrenzt. Bei Babyboomer Nägeln verläuft die Farbe weich von der Basis zur Spitze.",
      },
    ],
    related: ["french-nails-wien", "acrylnaegel-wien", "nail-art-wien"],
  },
  {
    slug: "wimpernverlaengerung-wien",
    cover: "/images/lashes/wimpern-volumen-wien.jpg",
    name: "Wimpernverlängerung",
    h1: "Wimpernverlängerung in Wien",
    title: "Wimpernverlängerung Wien | Dee Studio",
    description:
      "Wimpernverlängerung in Wien bei Dee Studio am Neubaugürtel: von natürlich bis Volumen, sorgfältig Wimper für Wimper gesetzt. Termin online buchen.",
    intro: [
      "Eine Wimpernverlängerung öffnet den Blick und spart jeden Morgen Zeit. Unsere Artists setzen jede Extension einzeln, abgestimmt auf Ihre Augenform und Ihre eigenen Wimpern.",
      "Ob natürlicher Look für den Alltag oder dichtes Volumen für den großen Auftritt: Wir beraten Sie vorab, welcher Stil zu Ihnen passt.",
    ],
    price: { label: "Wimpernverlängerung", value: "auf Anfrage" },
    studio: "neubauguertel",
    faqs: [
      {
        q: "Wie lange hält eine Wimpernverlängerung?",
        a: "Die Extensions fallen mit Ihren natürlichen Wimpern aus. Für einen vollen Look empfehlen wir ein Auffüllen nach etwa 2 bis 3 Wochen.",
      },
      {
        q: "Wo kann ich Lashes buchen?",
        a: "Wimpernverlängerung bieten wir bei Dee Studio am Neubaugürtel 23a im 15. Bezirk an.",
      },
    ],
    related: ["nail-art-wien", "french-nails-wien"],
  },
];

export const getStyle = (slug: string) => STYLES.find((s) => s.slug === slug);
/** Photos tagged with a style, the style cover first. */
export const imagesForStyle = (slug: string) => {
  const cover = getStyle(slug)?.cover;
  return GALLERY.filter((g) => g.styles.includes(slug)).sort((a, b) => Number(b.src === cover) - Number(a.src === cover));
};
