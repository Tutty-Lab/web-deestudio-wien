import type { MetadataRoute } from "next";
import { SITE, STUDIOS, studioPath } from "@/data/site";
import { galleryOf } from "@/data/gallery";
import { ARTICLES } from "@/data/magazin";
import { REVIEWS } from "@/data/home";

export const dynamic = "force-static";

/** Only indexable pages: noindex pages (empty Bewertungen, empty Galerie) stay out. */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/ueber-uns", priority: 0.6 },
    { path: "/philosophie", priority: 0.5 },
    { path: "/hygiene", priority: 0.5 },
    ...(REVIEWS.length > 0 ? [{ path: "/bewertungen", priority: 0.6 }] : []),
    { path: "/magazin", priority: 0.6 },
    ...ARTICLES.map((a) => ({ path: `/magazin/${a.slug}`, priority: 0.6 })),
    { path: "/impressum", priority: 0.2 },
    { path: "/datenschutz", priority: 0.2 },
  ];
  for (const s of STUDIOS) {
    paths.push(
      { path: studioPath(s), priority: 0.9 },
      { path: studioPath(s, "leistungen"), priority: 0.8 },
      { path: studioPath(s, "preise"), priority: 0.8 }
    );
    if (galleryOf(s.slug).length > 0) paths.push({ path: studioPath(s, "galerie"), priority: 0.7 });
    if (s.headSpa) paths.push({ path: studioPath(s, "head-spa"), priority: 0.9 });
  }
  return paths.map(({ path, priority }) => ({
    url: `${SITE.url}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
