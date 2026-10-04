"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { STUDIOS, studioPath, type Studio } from "@/data/site";
import { useBooking } from "./BookingProvider";

type Props = {
  /** The studio sub-site this header belongs to; omitted on the group pages (landing, Magazin). */
  studio?: Studio;
  transparent?: boolean;
};

type NavItem = { href: string; label: string; exact?: boolean; anchor?: boolean };

// Group site: sections of the landing page plus the articles.
const GROUP_NAV: NavItem[] = [
  { href: "/#ueber-uns", label: "Über uns", anchor: true },
  { href: "/#philosophie", label: "Philosophie", anchor: true },
  { href: "/#team", label: "Team", anchor: true },
  { href: "/#hygiene", label: "Hygiene", anchor: true },
  { href: "/magazin", label: "Magazin" },
  { href: "/#studios", label: "Studios", anchor: true },
];

function studioNav(s: Studio): NavItem[] {
  return [
    { href: studioPath(s), label: "Start", exact: true },
    ...(s.headSpa ? [{ href: studioPath(s, "head-spa"), label: "Head Spa" }] : []),
    ...(s.gallery ? [{ href: studioPath(s, "galerie"), label: "Galerie" }] : []),
    { href: studioPath(s, "preise"), label: "Preise" },
    { href: `${studioPath(s)}#kontakt`, label: "Kontakt", anchor: true },
  ];
}

export default function Header({ studio, transparent = false }: Props) {
  const pathname = usePathname();
  const { openBooking } = useBooking();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setShowBar(window.scrollY > 480);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const nav = studio ? studioNav(studio) : GROUP_NAV;
  const isActive = (item: NavItem) =>
    !item.anchor && (item.exact ? pathname === item.href : pathname.startsWith(item.href));
  const others = STUDIOS.filter((s) => s.slug !== studio?.slug);
  const close = () => setMenuOpen(false);
  const variant = menuOpen ? "menu-open" : transparent && !scrolled ? "transparent" : "";

  return (
    <>
      <header className={`header ${variant}`}>
        <div className="wrap header-inner">
          <Link
            href={studio ? studioPath(studio) : "/"}
            className="logo"
            aria-label={studio ? `${studio.brand} Startseite` : "Dee Studio Wien"}
            onClick={close}
          >
            {studio ? studio.brand : "Dee Studio"}
            <small>{studio ? studio.location : "Wien"}</small>
          </Link>

          <nav className="nav" aria-label="Hauptnavigation">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive(item) ? "active" : ""}`}
                aria-current={isActive(item) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className={`btn btn-sm header-cta ${variant === "transparent" ? "btn-outline-light" : "btn-primary"}`}
            onClick={() => openBooking(studio?.slug)}
          >
            Termin buchen
          </button>

          <button
            className={`burger ${menuOpen ? "open" : ""}`}
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <nav className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-label="Mobile Navigation" aria-hidden={!menuOpen}>
        {nav.map((item) => (
          <Link key={item.href} className={`m-link ${isActive(item) ? "active" : ""}`} href={item.href} onClick={close}>
            {item.label}
          </Link>
        ))}
        <p className="eyebrow group-label">{studio ? "Unsere anderen Studios" : "Zu den Studios"}</p>
        {others.map((s) => (
          <Link key={s.slug} className="m-link" href={studioPath(s)} onClick={close}>
            {s.brand}
            <small>{s.district}</small>
          </Link>
        ))}
        <button
          className="btn btn-primary"
          onClick={() => {
            close();
            openBooking(studio?.slug);
          }}
        >
          Termin buchen
        </button>
      </nav>

      <div className={`mobile-cta ${showBar && !menuOpen ? "show" : ""}`}>
        <button className="btn btn-primary" onClick={() => openBooking(studio?.slug)}>
          Termin buchen
        </button>
      </div>
    </>
  );
}
