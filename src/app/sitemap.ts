import type { MetadataRoute } from "next";
import { SITE, STUDIOS } from "@/data/site";
import { STYLES } from "@/data/gallery";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    { path: "/", priority: 1 },
    { path: "/head-spa", priority: 0.9 },
    ...STUDIOS.map((s) => ({ path: `/studio/${s.slug}`, priority: 0.9 })),
    { path: "/galerie", priority: 0.8 },
    ...STYLES.map((s) => ({ path: `/galerie/${s.slug}`, priority: 0.7 })),
    { path: "/preise", priority: 0.7 },
  ];
  return paths.map(({ path, priority }) => ({
    url: `${SITE.url}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
