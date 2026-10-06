"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { STUDIOS, studioPath, type Studio } from "@/data/site";
import { useBooking } from "./BookingProvider";

type Props = {
  /** The studio sub-site this header belongs to; omitted on group pages. */
  studio?: Studio;
  transparent?: boolean;
};

type NavItem = { href: string; label: string; exact?: boolean; anchor?: boolean };

// Group pages. Desktop shows Studios and Über uns as dropdowns (see GROUP_MENU), mobile lists everything.
const ABOUT: NavItem[] = [
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/ueber-uns#team", label: "Team", anchor: true },
  { href: "/philosophie", label: "Philosophie" },
  { href: "/hygiene", label: "Hygiene" },
];
const GROUP_NAV: NavItem[] = [
  ...ABOUT,
  { href: "/bewertungen", label: "Bewertungen" },
  { href: "/magazin", label: "Magazin" },
  { href: "/#faq", label: "FAQ", anchor: true },
];
type MenuEntry = { label: string; href?: string; anchor?: boolean; items?: { href: string; label: string; sub?: string }[] };
const GROUP_MENU: MenuEntry[] = [
  { label: "Studios", items: STUDIOS.map((s) => ({ href: studioPath(s), label: s.brand, sub: `${s.street}, ${s.city}` })) },
  { label: "Über uns", items: ABOUT.map((a) => ({ href: a.href, label: a.label })) },
  { label: "Bewertungen", href: "/bewertungen" },
  { label: "Magazin", href: "/magazin" },
  { label: "FAQ", href: "/#faq", anchor: true },
];

function studioNav(s: Studio): NavItem[] {
  return [
    { href: studioPath(s), label: "Übersicht", exact: true },
    { href: studioPath(s, "leistungen"), label: "Leistungen" },
    ...(s.headSpa ? [{ href: studioPath(s, "head-spa"), label: "Head Spa" }] : []),
    { href: `${studioPath(s)}#preise`, label: "Preise", anchor: true },
    { href: studioPath(s, "galerie"), label: "Galerie" },
    { href: `${studioPath(s)}#kontakt`, label: "Kontakt", anchor: true },
  ];
}

export default function Header({ studio, transparent = false }: Props) {
  const pathname = usePathname();
  const { openBooking } = useBooking();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!openMenu) return;
    const onDown = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setOpenMenu(null);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenMenu(null);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [openMenu]);

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
          <div className="brand">
            {studio && (
              <Link href="/" className="back-link" onClick={close}>
                <span className="chev" aria-hidden="true" />
                Dee Studio Wien
              </Link>
            )}
            <Link
              href={studio ? studioPath(studio) : "/"}
              className="logo"
              aria-label={studio ? `${studio.brand} Übersicht` : "Dee Studio Wien Startseite"}
              onClick={close}
            >
              {studio ? studio.brand : "Dee Studio"}
              <small>{studio ? studio.location : "Wien"}</small>
            </Link>
          </div>

          <nav className="nav" aria-label="Hauptnavigation" ref={studio ? undefined : (dropdownRef as React.Ref<HTMLElement>)}>
            {studio
              ? nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`nav-link ${isActive(item) ? "active" : ""}`}
                    aria-current={isActive(item) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                ))
              : GROUP_MENU.map((m) =>
                  m.items ? (
                    <div key={m.label} className={`nav-item ${openMenu === m.label ? "open" : ""}`}>
                      <button
                        className={`nav-link ${m.items.some((it) => !it.href.includes("#") && pathname.startsWith(it.href)) ? "active" : ""}`}
                        aria-expanded={openMenu === m.label}
                        aria-haspopup="true"
                        onClick={() => setOpenMenu(openMenu === m.label ? null : m.label)}
                      >
                        {m.label} <span className="caret" aria-hidden="true" />
                      </button>
                      <div className="dropdown">
                        {m.items.map((it) => (
                          <Link key={it.href} href={it.href} onClick={() => setOpenMenu(null)}>
                            <strong>{it.label}</strong>
                            {it.sub && <span>{it.sub}</span>}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={m.label}
                      href={m.href!}
                      className={`nav-link ${!m.anchor && pathname.startsWith(m.href!) ? "active" : ""}`}
                    >
                      {m.label}
                    </Link>
                  )
                )}
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
        {studio && (
          <Link className="m-link m-back" href="/" onClick={close}>
            Zur Startseite
            <small>Dee Studio Wien</small>
          </Link>
        )}
        {nav.map((item) => (
          <Link key={item.href} className={`m-link ${isActive(item) ? "active" : ""}`} href={item.href} onClick={close}>
            {item.label}
          </Link>
        ))}
        <p className="eyebrow group-label">{studio ? "Unser anderes Studio" : "Zu den Studios"}</p>
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
