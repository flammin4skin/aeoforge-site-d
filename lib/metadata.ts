import type { Metadata } from "next";

import { getSiteUrl } from "@/lib/site";

export function pageMetadata(opts: {
  pathname: string;
  title: string;
  description: string;
  modified?: string;
}): Metadata {
  const base = getSiteUrl();
  const path = opts.pathname.startsWith("/") ? opts.pathname : `/${opts.pathname}`;
  const canonical = `${base}${path === "/" ? "" : path}`;
  const modifiedIso = opts.modified
    ? new Date(`${opts.modified}T12:00:00.000Z`).toISOString()
    : undefined;

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
      ...(modifiedIso ? { modifiedTime: modifiedIso, publishedTime: modifiedIso } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
    },
    ...(modifiedIso
      ? {
          other: {
            "article:modified_time": modifiedIso,
            "article:published_time": modifiedIso,
          },
        }
      : {}),
  };
}
