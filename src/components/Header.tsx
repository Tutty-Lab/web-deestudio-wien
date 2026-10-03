"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { STUDIOS } from "@/data/site";
import { useBooking } from "./BookingProvider";

type Props = { transparent?: boolean };

export default function Header({ transparent = false }: Props) {
  const pathname = usePathname();
  const { openBooking } = useBooking();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [studiosOpen, setStudiosOpen] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!studiosOpen) return;
    const onDown = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setStudiosOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setStudiosOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [studiosOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const current = (href: string) => (isActive(href) ? "page" : undefined);
  const closeAll = () => {
    setMenuOpen(false);
    setStudiosOpen(false);
  };

  const variant = menuOpen ? "menu-open" : transparent && !scrolled ? "transparent" : "";

  return (
    <>
      <header className={`header ${variant}`}>
        <div className="wrap header-inner">
          <Link href="/" className="logo" aria-label="Dee Studio Startseite" onClick={closeAll}>
            Dee Studio
            <small>Wien</small>
          </Link>

          <nav className="nav" aria-label="Hauptnavigation">
            <Link href="/" className={`nav-link ${isActive("/") ? "active" : ""}`} aria-current={current("/")}>
              Start
            </Link>
            <Link
              href="/head-spa"
              className={`nav-link ${isActive("/head-spa") ? "active" : ""}`}
              aria-current={current("/head-spa")}
            >
              Head Spa
            </Link>
            <div ref={dropdownRef} className={`nav-item ${studiosOpen ? "open" : ""}`}>
              <button
                className={`nav-link ${isActive("/studio") ? "active" : ""}`}
                aria-expanded={studiosOpen}
                aria-haspopup="true"
                onClick={() => setStudiosOpen(!studiosOpen)}
              >
                Studios <span className="caret" aria-hidden="true" />
              </button>
              <div className="dropdown">
                {STUDIOS.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/studio/${s.slug}`}
                    className={isActive(`/studio/${s.slug}`) ? "active" : ""}
                    aria-current={current(`/studio/${s.slug}`)}
                    onClick={closeAll}
                  >
                    <strong>{s.brand}</strong>
                    <span>
                      {s.street}, {s.city}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/preise"
              className={`nav-link ${isActive("/preise") ? "active" : ""}`}
              aria-current={current("/preise")}
            >
              Preise
            </Link>
          </nav>

          <button className={`btn btn-sm header-cta ${variant === "transparent" ? "btn-outline-light" : "btn-primary"}`} onClick={() => openBooking()}>
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
        <Link className={`m-link ${isActive("/") ? "active" : ""}`} href="/" onClick={closeAll}>
          Start
        </Link>
        <Link className={`m-link ${isActive("/head-spa") ? "active" : ""}`} href="/head-spa" onClick={closeAll}>
          Head Spa
        </Link>
        <Link className={`m-link ${isActive("/preise") ? "active" : ""}`} href="/preise" onClick={closeAll}>
          Preise
        </Link>
        <p className="eyebrow group-label">Studios</p>
        {STUDIOS.map((s) => (
          <Link
            key={s.slug}
            className={`m-link ${isActive(`/studio/${s.slug}`) ? "active" : ""}`}
            href={`/studio/${s.slug}`}
            onClick={closeAll}
          >
            {s.brand}
            <small>{s.district}</small>
          </Link>
        ))}
        <button
          className="btn btn-primary"
          onClick={() => {
            closeAll();
            openBooking();
          }}
        >
          Termin buchen
        </button>
      </nav>

      <div className={`mobile-cta ${showBar && !menuOpen ? "show" : ""}`}>
        <button className="btn btn-primary" onClick={() => openBooking()}>
          Termin buchen
        </button>
      </div>
    </>
  );
}
