import type { Metadata } from "next";

import { getSiteUrl } from "@/lib/site";

export function pageMetadata(opts: {
  pathname: string;
  title: string;
  description: string;
}): Metadata {
  const base = getSiteUrl();
  const path = opts.pathname.startsWith("/") ? opts.pathname : `/${opts.pathname}`;
  const canonical = `${base}${path === "/" ? "" : path}`;

  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url: canonical,
      type: "article",
      siteName: "Apartment Air Guide",
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
    },
  };
}
