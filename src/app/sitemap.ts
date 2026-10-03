import type { MetadataRoute } from "next";
import { SITE, STUDIOS, studioPath } from "@/data/site";
import { STYLES } from "@/data/gallery";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths: { path: string; priority: number }[] = [{ path: "/", priority: 1 }];
  for (const s of STUDIOS) {
    paths.push({ path: studioPath(s), priority: 0.9 }, { path: studioPath(s, "preise"), priority: 0.7 });
    if (s.headSpa) paths.push({ path: studioPath(s, "head-spa"), priority: 0.9 });
    if (s.gallery) {
      paths.push({ path: studioPath(s, "galerie"), priority: 0.8 });
      for (const st of STYLES) paths.push({ path: studioPath(s, `galerie/${st.slug}`), priority: 0.7 });
    }
  }
  return paths.map(({ path, priority }) => ({
    url: `${SITE.url}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
