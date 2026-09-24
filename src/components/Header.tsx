"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { STUDIOS } from "@/data/site";
import { useBooking } from "./BookingProvider";

type Props = { base: string; overHero?: boolean };

export default function Header({ base, overHero = false }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const state = open ? "menu-open" : scrolled || !overHero ? "solid" : "over-hero";
  const close = () => setOpen(false);

  return (
    <>
      <header className={`header ${state}`}>
        <div className="wrap header-inner">
          <nav className="nav" aria-label="Hauptnavigation">
            {STUDIOS.map((s) => (
              <Link key={s.slug} href={`${base}/studio/${s.slug}`}>
                {s.location}
              </Link>
            ))}
            <Link href={`${base}/preise`}>Preise</Link>
          </nav>
          <button
            className={`burger ${open ? "open" : ""}`}
            aria-label="Menü"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>

          <Link href={base} className="logo" onClick={close}>
            Dee Studio
            <small>Wien</small>
          </Link>

          <div className="header-right">
            <a
              className="nav hide-sm"
              href="https://www.instagram.com/dee.studio.wien/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <button className="btn" onClick={() => openBooking()}>
              Termin
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <Link className="big" href={base} onClick={close}>
          Start
        </Link>
        {STUDIOS.map((s) => (
          <Link key={s.slug} className="big" href={`${base}/studio/${s.slug}`} onClick={close}>
            {s.location}
          </Link>
        ))}
        <Link className="big" href={`${base}/preise`} onClick={close}>
          Preise
        </Link>
        <button
          className="btn btn-solid"
          style={{ marginTop: 32 }}
          onClick={() => {
            close();
            openBooking();
          }}
        >
          Termin buchen
        </button>
      </div>
    </>
  );
}
