import type { Metadata } from "next";
import { Josefin_Sans, Montserrat, Cormorant_Garamond } from "next/font/google";
import BookingProvider from "@/components/BookingProvider";
import Footer from "@/components/Footer";
import "./globals.css";

const display = Josefin_Sans({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "600"],
  display: "swap",
});

const body = Montserrat({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dee Studio | Nails, Lashes & Head Spa in Wien",
  description:
    "Dee Studio – Nagelstudio, Wimpern & Head Spa in Wien. Zwei Studios: Neubaugürtel (1150) und Vanilla by Dee in der Fasangasse (1030). Jetzt online buchen.",
  keywords: [
    "Nagelstudio Wien",
    "Nail Studio Vienna",
    "Nagelstudio 1150 Wien",
    "Nagelstudio 1030 Wien",
    "Wimpernverlängerung Wien",
    "Head Spa Wien",
    "Pediküre Wien",
  ],
  icons: { icon: "/favicon.png" },
  // Remove before pointing the real domain here; keeps the vercel.app preview out of search results.
  robots: { index: false, follow: false },
  openGraph: {
    title: "Dee Studio | Nails, Lashes & Head Spa in Wien",
    description: "Zwei Studios in Wien – Neubaugürtel & Fasangasse.",
    siteName: "Dee Studio",
    locale: "de_AT",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${display.variable} ${body.variable} ${serif.variable}`}>
      <body>
        <div className="site">
          <BookingProvider>
            {children}
            <Footer />
          </BookingProvider>
        </div>
      </body>
    </html>
  );
}
