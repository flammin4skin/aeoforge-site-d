import type { MetadataRoute } from "next";

import { articles } from "@/lib/articles";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...articles.map((a) => ({
      url: `${base}/${a.slug}`,
      lastModified: new Date(a.updated),
      changeFrequency: "monthly" as const,
      priority: a.pillar ? 0.9 : 0.7,
    })),
  ];
}
