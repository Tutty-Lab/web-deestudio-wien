"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  images: { src: string; alt: string }[];
  lines: string[];
  sub?: string;
  children?: React.ReactNode;
  interval?: number;
};

/**
 * Full-screen hero: cross-fading photos with a slow Ken Burns zoom and a line-by-line
 * headline reveal. Respects prefers-reduced-motion (no slideshow, no animation).
 */
export default function HeroShow({ images, lines, sub, children, interval = 6000 }: Props) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (images.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % images.length), interval);
    return () => clearInterval(t);
  }, [images.length, interval]);

  return (
    <section className="hero hero-show">
      <div className="hero-slides" aria-hidden="true">
        {images.map((img, k) => (
          <div key={img.src} className={`hero-slide ${k === i ? "on" : ""}`}>
            <Image src={img.src} alt="" fill priority={k === 0} sizes="100vw" />
          </div>
        ))}
      </div>
      <div className="wrap hero-inner">
        <h1 className="display h-xl hero-title">
          {lines.map((l, k) => (
            <span key={l} className="line">
              <span style={{ animationDelay: `${0.15 + k * 0.18}s` }}>{l}</span>
            </span>
          ))}
        </h1>
        {sub && (
          <p className="serif hero-sub hero-fade" style={{ animationDelay: `${0.25 + lines.length * 0.18}s` }}>
            {sub}
          </p>
        )}
        {children && (
          <div className="hero-fade" style={{ animationDelay: `${0.4 + lines.length * 0.18}s` }}>
            {children}
          </div>
        )}
      </div>
      <div className="hero-dots" aria-hidden="true">
        {images.map((img, k) => (
          <span key={img.src} className={k === i ? "on" : ""} />
        ))}
      </div>
      <span className="scroll-cue" aria-hidden="true" />
    </section>
  );
}
