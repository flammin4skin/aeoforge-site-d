import type { Article } from "@/lib/articles";
import { getSiteUrl, SITE } from "@/lib/site";

export function organizationJsonLd() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url,
    description: SITE.tagline,
  };
}

export function articleJsonLd(article: Article, pathname: string) {
  const url = `${getSiteUrl()}${pathname}`;
  const published = `${article.updated}T12:00:00.000Z`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: published,
    dateModified: published,
    url,
    author: { "@type": "Organization", name: SITE.name, url: getSiteUrl() },
    publisher: { "@type": "Organization", name: SITE.name, url: getSiteUrl() },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    about: "Indoor air quality in apartments",
  };
}

export function faqJsonLd(article: Article) {
  if (!article.faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
